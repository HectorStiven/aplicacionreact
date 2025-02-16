import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, Typography, Button, Badge, Dialog, DialogActions, DialogContent, DialogTitle, TextareaAutosize, Rating } from '@mui/material';

type Producto = {
  id: number;
  nombre: string;
  precio: number;
};

type Evaluacion = {
  productoId: number;
  calificacion: number;
  comentario: string;
};

const Estrellas = ({
  calificacion,
  onChange,
  readOnly = false,
}: {
  calificacion: number;
  onChange?: (newRating: number) => void;
  readOnly?: boolean;
}) => {
  // Función para manejar el cambio de rating, considerando que el valor puede ser null
  const handleRatingChange = (event: React.SyntheticEvent, newRating: number | null) => {
    if (!readOnly && newRating !== null && onChange) {
      onChange(newRating); // Solo llamamos a onChange si newRating no es null
    }
  };

  return (
    <Rating
      name="rating"
      value={calificacion} // calificacion debe ser un número
      onChange={handleRatingChange} // Usamos la nueva función que maneja el cambio de rating
      readOnly={readOnly}
      precision={0.5} // Precision para medio punto
    />
  );
};



const ResumenCalificaciones = ({ evaluaciones }: { evaluaciones: Evaluacion[] }) => {
  const resumen = useMemo(() => {
    const totalEstrellasPosibles = evaluaciones.length * 5;
    const totalEstrellasActuales = evaluaciones.reduce(
      (sum, evaluacione) => sum + evaluacione.calificacion,
      0
    );
    const promedioEstrellas = evaluaciones.length 
      ? (totalEstrellasActuales / evaluaciones.length).toFixed(1)
      : "0.0";

    return {
      totalEstrellasActuales,
      totalEstrellasPosibles,
      promedioEstrellas,
      totalEvaluaciones: evaluaciones.length
    };
  }, [evaluaciones]);

  return (
    <Card sx={{ padding: 2, marginBottom: 2 }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-4">
          <Typography variant="h6">Calificación Promedio</Typography>
          <div className="flex items-center justify-center gap-2">
            <Typography variant="h4" color="primary">{resumen.promedioEstrellas}</Typography>
          </div>
        </div>
        <div className="text-center p-4">
          <Typography variant="h6">Total de Estrellas</Typography>
          <Typography variant="h4">{resumen.totalEstrellasActuales} / {resumen.totalEstrellasPosibles}</Typography>
        </div>
        <div className="text-center p-4">
          <Typography variant="h6">Productos Evaluados</Typography>
          <Typography variant="h4">{resumen.totalEvaluaciones} / 10</Typography>
        </div>
      </div>
    </Card>
  );
};

export const EvaluacionProductos = () => {
  const productos: Producto[] = [
    { id: 1, nombre: "Manejo de Inventario Básico", precio: 49.99 },
    { id: 2, nombre: "Manejo de Inventario Avanzado", precio: 79.99 },
    { id: 3, nombre: "Administración de Personal", precio: 59.99 },
    { id: 4, nombre: "Administración de Personal Avanzada", precio: 89.99 },
    { id: 5, nombre: "Software para Venta de Productos", precio: 39.99 },
    { id: 6, nombre: "Plataforma de Comercio Electrónico", precio: 99.99 },
    { id: 7, nombre: "Optimización de Inventario", precio: 69.99 },
    { id: 8, nombre: "Gestión de Nómina", precio: 49.99 },
    { id: 9, nombre: "Sistema de Facturación para Ventas", precio: 59.99 },
    { id: 10, nombre: "Análisis de Desempeño del Personal", precio: 79.99 },
  ];

  const [modalAbierto, setModalAbierto] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);
  const [calificacion, setCalificacion] = useState<number>(0);
  const [comentario, setComentario] = useState<string>("");

  const [evaluaciones, setEvaluaciones] = useState<Evaluacion[]>([]);

  const abrirModal = (producto: Producto) => {
    const evaluacionExistente = evaluaciones.find(
      (evaluacion) => evaluacion.productoId === producto.id
    );

    setProductoSeleccionado(producto);
    setModalAbierto(true);

    if (evaluacionExistente) {
      setCalificacion(evaluacionExistente.calificacion);
      setComentario(evaluacionExistente.comentario);
    } else {
      setCalificacion(0);
      setComentario("");
    }
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setProductoSeleccionado(null);
  };

  const enviarEvaluacion = () => {
    if (calificacion === 0 || comentario.trim() === "") {
      alert("Por favor, completa la calificación y el comentario.");
      return;
    }

    setEvaluaciones((prev) => {
      const nuevaEvaluacion: Evaluacion = {
        productoId: productoSeleccionado!.id,
        calificacion,
        comentario,
      };

      const sinProductoActual = prev.filter(
        (evaluacion) => evaluacion.productoId !== productoSeleccionado!.id
      );

      return [...sinProductoActual, nuevaEvaluacion];
    });

    cerrarModal();
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Typography variant="h3" gutterBottom>
          Evaluación de Productos
        </Typography>
        
        <ResumenCalificaciones evaluaciones={evaluaciones} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px' }}>
          {productos.map((producto) => {
            const evaluacion = evaluaciones.find(
              (evaluacion) => evaluacion.productoId === producto.id
            );

            return (
              <Card key={producto.id} sx={{ transition: 'all 0.3s', boxShadow: 3 }}>
                <CardHeader>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6">{producto.nombre}</Typography>
                    <Badge color={evaluacion ? "success" : "secondary"}>
                      {evaluacion ? "Evaluado" : "Sin evaluar"}
                    </Badge>
                  </div>
                  <Typography variant="h5" color="textPrimary">${producto.precio.toFixed(2)}</Typography>
                </CardHeader>
                <CardContent>
                  {evaluacion ? (
                    <div>
                      <Estrellas calificacion={evaluacion.calificacion} readOnly />
                      <Typography variant="body2" color="textSecondary" style={{ marginTop: '8px', backgroundColor: '#f7f7f7', padding: '8px' }}>
                        {evaluacion.comentario}
                      </Typography>
                    </div>
                  ) : (
                    <Typography variant="body2" color="textSecondary" style={{ backgroundColor: '#f7f7f7', padding: '8px' }}>
                      Este producto aún no ha sido evaluado
                    </Typography>
                  )}
                  <Button
                    onClick={() => abrirModal(producto)}
                    variant={evaluacion ? "outlined" : "contained"}
                    fullWidth
                    sx={{ marginTop: 2 }}
                  >
                    {evaluacion ? "Editar evaluación" : "Evaluar ahora"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <Dialog open={modalAbierto} onClose={cerrarModal}>
        <DialogTitle>
          Evaluar {productoSeleccionado?.nombre}
        </DialogTitle>
        <DialogContent>
          <div style={{ marginBottom: '16px' }}>
            <Typography variant="body2">Tu calificación</Typography>
            <Estrellas calificacion={calificacion} onChange={setCalificacion} />
          </div>
          <div>
            <Typography variant="body2">Tu comentario</Typography>
            <TextareaAutosize
              minRows={4}
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              placeholder="Comparte tu experiencia con este producto..."
              style={{ width: '100%', padding: '8px', marginTop: '8px' }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={cerrarModal} color="secondary">Cancelar</Button>
          <Button onClick={enviarEvaluacion} color="primary">Guardar evaluación</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
