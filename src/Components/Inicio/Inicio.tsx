import { Grid, Switch, Checkbox, Select, TextField, MenuItem, FormControl, InputLabel } from "@material-ui/core";

export const Inicio = () => {
  return (
    <Grid
      container
      style={{
        position: 'relative',
        background: '#FAFAFA',
        borderRadius: '15px',
        padding: '20px',
        // mb: '20px',
        boxShadow: '0px 3px 6px #042F4A26'
      }}
    >
      <Grid item xs={12}>
        {/* Aquí puede ir cualquier componente que desees */}
      </Grid>
      <Grid item xs={12}>
        <hr />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          style={{ marginTop: 15 ,width:"90%"}}
          size="small"
          variant="outlined"
          label="Tipo de Documento"
          value=""
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          style={{ marginTop: 15 ,width:"90%"}}
          size="small"
          variant="outlined"
          label="Número de Documento"
          value=""
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          style={{ marginTop: 15,width:"90%" }}
          size="small"
          variant="outlined"
          label="Nombre"
          value=""
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          style={{ marginTop: 15,width:"90%" }}
          size="small"
          variant="outlined"
          label="Edad"
          type="number"
          value=""
        />
      </Grid>
   
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          style={{ marginTop: 15,width:"90%" }}
          size="small"
          variant="outlined"
          label="Correo Electrónico"
          type="email"
          value=""
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          style={{ marginTop: 15 ,width:"90%"}}
          size="small"
          variant="outlined"
          label="Dirección"
          value=""
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth style={{ marginTop: 15,width:"90%" }}>
          <InputLabel>Estado Civil</InputLabel>
          <Select
            value=""
            labelId="estadoCivil-label"
            id="estadoCivil"
          >
            <MenuItem value="Soltero">Soltero</MenuItem>
            <MenuItem value="Casado">Casado</MenuItem>
            <MenuItem value="Divorciado">Divorciado</MenuItem>
            <MenuItem value="Viudo">Viudo</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormControl fullWidth style={{ marginTop: 15,width:"90%" }}>
          <InputLabel>Estado Civil</InputLabel>
          <Select
            value=""
            labelId="estadoCivil-label"
            id="estadoCivil"
          >
            <MenuItem value="Soltero">Soltero</MenuItem>
            <MenuItem value="Casado">Casado</MenuItem>
            <MenuItem value="Divorciado">Divorciado</MenuItem>
            <MenuItem value="Viudo">Viudo</MenuItem>
          </Select>
        </FormControl>
      </Grid>

 
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth style={{ marginTop: 15,width:"90%"}}>
          <InputLabel>Género</InputLabel>
          <Select
            value=""
            labelId="genero-label"
            id="genero"
          >
            <MenuItem value="Masculino">Masculino</MenuItem>
            <MenuItem value="Femenino">Femenino</MenuItem>
            <MenuItem value="Otro">Otro</MenuItem>
          </Select>
        </FormControl>
      </Grid>
  
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth style={{ marginTop: 15,width:"90%" }}>
          <InputLabel>Intereses</InputLabel>
          <Select
            multiple
            value={[]}
            labelId="intereses-label"
            id="intereses"
          >
            <MenuItem value="Deportes">Deportes</MenuItem>
            <MenuItem value="Música">Música</MenuItem>
            <MenuItem value="Tecnología">Tecnología</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3} >
        <FormControl style={{ marginTop: 15 }}>
          <InputLabel>Notificaciones</InputLabel>
          <Switch />
        </FormControl>
      </Grid>

      <Grid item xs={3} >
        <FormControl fullWidth style={{ marginTop: 15}}>
          <InputLabel>Switch</InputLabel>
          <Switch />
        </FormControl>
      </Grid>
      <Grid item xs={3} >
        <FormControl style={{ marginTop: 15 }}>
          <Checkbox />
          Checkbox
        </FormControl>
      </Grid>

      <Grid item xs={3} >
        <FormControl style={{ marginTop: 15 }}>
          <Checkbox />
          Acepto los términos y condiciones
        </FormControl>
      </Grid>
    </Grid>
  );
};
