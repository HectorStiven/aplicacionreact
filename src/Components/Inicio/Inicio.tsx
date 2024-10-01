import { Grid } from "@material-ui/core";
import { PantallaTabla } from "./pantallaTabla/PantallaTabla";

export const Inicio = () => {
  return (
    <Grid container style={{ padding: "20px" }}>
      <Grid
        item
        xs={12}
        style={{
          position: "relative",
          background: "#FAFAFA",
          borderRadius: "15px",

          boxShadow: "0px 3px 6px #042F4A26",
        }}
      >
        <PantallaTabla />
      </Grid>
    </Grid>
  );
};
