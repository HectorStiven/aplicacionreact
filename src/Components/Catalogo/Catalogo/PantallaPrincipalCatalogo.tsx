import React from "react";
import { Items } from "../../../Elements/Items/Items";
import { Grid } from "@mui/material";

export const PantallaPrincipalCatalogo = () => {
  return (
    <Grid 
      container 
      spacing={2} 
      justifyContent="center" 
      alignItems="flex-start"
    >
      <Grid
        item
        xs={12} // Full width on small screens
      >
        <Items />
      </Grid>
    </Grid>
  );
};
