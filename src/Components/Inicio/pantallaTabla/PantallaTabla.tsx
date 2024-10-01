import React, { useState } from "react";
import {

  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import {
  Add as AddIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
} from "@mui/icons-material";
import axios from "axios";

interface Account {
  id: number;
  contractName: string;
  creationDate: string;
  status: string;
}

const initialAccounts: Account[] = [
  {
    id: 1,
    contractName: "Contrato A",
    creationDate: "2023-09-30",
    status: "Pendiente",
  },
  {
    id: 2,
    contractName: "Contrato B",
    creationDate: "2023-09-29",
    status: "Aprobada",
  },
  {
    id: 3,
    contractName: "Contrato C",
    creationDate: "2023-09-28",
    status: "Rechazada",
  },
];

export const PantallaTabla = () => {
  const [accounts] = useState<Account[]>(initialAccounts);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
  });

  const handleAddAccount = () => {
    setNotification({
      open: true,
      message: "Redirigiendo a formulario de nueva cuenta...",
    });

    // Datos simulados
    const data = {
      username: "usuario_simulado",
      password: "123456",
    };
    console.log(notification);
    // Enviar la solicitud con axios
    axios
      .post("http://localhost:8080/auth/login", data)
      .then((response) => {
        console.log("Respuesta del servidor:", response.data);
        // Aquí puedes manejar lo que ocurre cuando el login es exitoso
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        // Aquí puedes manejar los errores
      
      });
  };

  const handleViewAccount = (id: number) => {
    setNotification({
      open: true,
      message: `Viendo detalles de la cuenta ${id}`,
    });
  };

  const handleEditAccount = (id: number) => {
    setNotification({ open: true, message: `Editando cuenta ${id}` });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gestión de Cuentas de Cobro
          </Typography>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Cuentas de Cobro</Button>
          <Button color="inherit">Reportes</Button>
          <Button color="inherit">Configuración</Button>
        </Toolbar>
      </AppBar> */}
      <Box sx={{ padding: 3 }}>
      
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddAccount}
          sx={{ mb: 2 }}
        >
          Nueva Cuenta de Cobro
        </Button>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID de Cuenta</TableCell>
                <TableCell>Nombre del Contrato</TableCell>
                <TableCell>Fecha de Creación</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accounts.map((account) => (
                <TableRow key={account.id}>
                  <TableCell>{account.id}</TableCell>
                  <TableCell>{account.contractName}</TableCell>
                  <TableCell>{account.creationDate}</TableCell>
                  <TableCell>{account.status}</TableCell>
                  <TableCell>
                    <Button
                      startIcon={<VisibilityIcon />}
                      onClick={() => handleViewAccount(account.id)}
                      sx={{ mr: 1 }}
                    >
                      Ver Detalle
                    </Button>
                    <Button
                      startIcon={<EditIcon />}
                      onClick={() => handleEditAccount(account.id)}
                    >
                      Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
