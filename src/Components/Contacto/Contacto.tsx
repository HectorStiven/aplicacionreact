import { Grid, TextField, Button } from '@mui/material';
import { useState } from 'react';

export const Contacto = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  // Manejador de cambios en los campos del formulario
  const handleInputChange = (event:any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejador del envío del formulario
  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log(formData);
    // Limpia los campos después de enviar el formulario
    setFormData({
      nombre: '',
      email: '',
      mensaje: ''
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Correo Electrónico"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleInputChange}
            variant="outlined"
            multiline
            rows={4}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </form>
      </Grid>
      <Grid item xs={12}>
        {/* Puedes agregar más contenido aquí */}
      </Grid>
    </Grid>
  );
};
