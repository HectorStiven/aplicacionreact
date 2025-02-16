import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
  Grid,
  Typography,
  Alert,
  Modal,
  Box,
  IconButton,
  Switch,
} from "@mui/material";
import { CheckCircle, Save, Add, Close } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";

interface Permiso {
  id: string;
  nombre: string;
  horaInicio: string;
  horaFin: string;
  observacion: string;
  leido: boolean;
}

const styleModal = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  bgcolor: "background.paper",
  border: "2px solid #64b5f6",
  borderRadius: "15px", // Border radius para el modal
  boxShadow: 24,
  p: 4,
};

export const AgendaPermisos = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [permiso, setPermiso] = useState<Omit<Permiso, "id" | "leido">>({
    nombre: "",
    horaInicio: "",
    horaFin: "",
    observacion: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [permisos, setPermisos] = useState<Permiso[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPermiso((prev) => ({ ...prev, [name]: value }));
  };

  const validarFormulario = (): boolean => {
    if (
      !permiso.nombre ||
      !permiso.horaInicio ||
      !permiso.horaFin ||
      !permiso.observacion
    ) {
      setError("Todos los campos son obligatorios.");
      return false;
    }
    if (permiso.horaFin <= permiso.horaInicio) {
      setError("La hora de fin debe ser posterior a la hora de inicio.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (validarFormulario()) {
      const nuevoPermiso: Permiso = {
        ...permiso,
        id: uuidv4(),
        leido: false, // Estado inicial de no leído
      };
      setPermisos((prev) => [...prev, nuevoPermiso]);
      setMostrarFormulario(false);
      setPermiso({ nombre: "", horaInicio: "", horaFin: "", observacion: "" });
    }
  };

  const handleSwitchChange = (id: string) => {
    setPermisos((prev) =>
      prev.map((permiso) =>
        permiso.id === id ? { ...permiso, leido: !permiso.leido } : permiso
      )
    );
  };

  return (
    <div style={{ marginTop: 10 }}>
      {!mostrarFormulario && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setMostrarFormulario(true)}
          startIcon={<Add />} // Icono de añadir
          style={{ backgroundColor: "green" }} // Estilos personalizados
        >
          Crear Permiso
        </Button>
      )}
      <Modal
        open={mostrarFormulario}
        onClose={() => setMostrarFormulario(false)}
      >
        <Box sx={styleModal}>
          <Typography variant="h6" style={{ textAlign: "center" }}>
            {" "}
            {/* Título centrado */}
            Crear Permiso
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="nombre"
                  name="nombre"
                  label="Nombre del usuario"
                  value={permiso.nombre}
                  onChange={handleInputChange}
                  required
                  fullWidth
                />
              </Grid>

              {/* Columna para horaInicio y horaFin */}
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      id="horaInicio"
                      name="horaInicio"
                      type="time"
                      label="Hora de inicio"
                      InputLabelProps={{ shrink: true }}
                      value={permiso.horaInicio}
                      onChange={handleInputChange}
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="horaFin"
                      name="horaFin"
                      type="time"
                      label="Hora de fin"
                      InputLabelProps={{ shrink: true }}
                      value={permiso.horaFin}
                      onChange={handleInputChange}
                      required
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* Campo de Observación */}
              <Grid item xs={12}>
                <TextField
                  id="observacion"
                  name="observacion"
                  label="Observación"
                  value={permiso.observacion}
                  onChange={handleInputChange}
                  multiline
                  rows={2}
                  fullWidth
                  required
                />
              </Grid>

              {error && (
                <Grid item xs={12}>
                  <Alert severity="error">{error}</Alert>
                </Grid>
              )}

              <Grid item xs={12}>
                <CardActions style={{ justifyContent: "space-between" }}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => setMostrarFormulario(false)}
                    startIcon={<Close />} // Icono de cancelar
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    startIcon={<Save />}
                  >
                    Guardar {/* Botón verde y con icono */}
                  </Button>
                </CardActions>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>

      <Grid container spacing={3}>
        {permisos.map((p) => (
          <Grid item xs={12} sm={4} md={4} key={p.id}>
            <Card
              className="shadow-lg"
              style={{
                margin: "8px",
                height: "250px",
                border: "2px solid #64b5f6",
                borderRadius: "15px", // Border radius para la tarjeta
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Sombra para la tarjeta
                padding: "16px",
              }}
            >
              <CardContent>
                <Typography variant="h6">{p.nombre}</Typography>
                <Typography variant="body2">
                  <strong>Inicio:</strong> {p.horaInicio}
                </Typography>
                <Typography variant="body2">
                  <strong>Fin:</strong> {p.horaFin}
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    maxHeight: "60px", // Define la altura máxima para la observación
                    overflowY: "auto", // Añade desplazamiento si el contenido es mayor que la altura
                    whiteSpace: "pre-wrap", // Respeta los saltos de línea en el texto
                    wordWrap: "break-word", // Asegura que las palabras largas se dividan en varias líneas
                  }}
                >
                  <strong>Observación:</strong> {p.observacion}
                </Typography>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  style={{ marginTop: "16px" }}
                >
                  <Switch
                    checked={p.leido}
                    onChange={() => handleSwitchChange(p.id)}
                    color={p.leido ? "success" : "error"}
                  />
                  <IconButton size="small" disabled>
                    {p.leido ? (
                      <>
                        <CheckCircle color="success" />
                        <CheckCircle color="success" />
                      </>
                    ) : (
                      <CheckCircle color="error" />
                    )}
                  </IconButton>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
