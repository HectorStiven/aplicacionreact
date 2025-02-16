import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Rating from "@mui/material/Rating";
import Slider from "react-slick"; // Carrusel deslizante
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { setProducto } from "../../Slice/LoginSlice";
import { Grid } from "@mui/material";

// Variables externas para los productos
const products = [
  {
    id: 1,
    name: "Producto XYZ",
    price: 99.99,
    oldPrice: 129.99,
    rating: 4.5,
    stockMessage: "En stock. Entrega en 2 días.",
    description:
      "Este es un producto de alta calidad con múltiples características. Ideal para tu uso diario.",
    images: [
      "../image/fondo.jpg",
      "../image/naruto.jpg",
      "../image/fondo.jpg",
      "../image/naruto.jpg",
    ],
  },
  {
    id: 2,
    name: "Producto ABC",
    price: 79.99,
    oldPrice: 99.99,
    rating: 4.0,
    stockMessage: "En stock. Entrega en 3 días.",
    description:
      "Un excelente producto que ofrece una relación calidad-precio inigualable.",
    images: [
      "../image/fondo.jpg",
      "../image/naruto.jpg",
      "../image/fondo.jpg",
      "../image/naruto.jpg",
    ],
  },
  {
    id: 3,
    name: "Producto LMN",
    price: 49.99,
    oldPrice: 59.99,
    rating: 4.8,
    stockMessage: "En stock. Entrega en 1 día.",
    description:
      "Este producto es perfecto para quienes buscan calidad y eficiencia.",
    images: [
      "../image/fondo.jpg",
      "../image/naruto.jpg",
      "../image/fondo.jpg",
      "../image/naruto.jpg",
    ],
  },
];

export const Items = () => {
  const dispatch = useDispatch();

  // Configuración del carrusel (react-slick)
  const sliderSettings = {
    dots: true, // Mostrar indicadores de puntos
    infinite: true, // Bucle infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Mostrar una imagen por vez
    slidesToScroll: 1, // Deslizar una imagen por vez
    arrows: true, // Mostrar flechas de navegación
    autoplay: true, // Deslizar automáticamente
    autoplaySpeed: 5000, // Velocidad de auto deslizamiento
  };

  const handleSetProducto = (nombre:any) => {
    dispatch(setProducto(nombre)); // Actualizar el valor de la cédula en el store
  };

  return (
    <Grid container spacing={2} justifyContent="center"> {/* Centrar el contenido */}
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <Card
            sx={{
              maxWidth: 345,
              border: "3px solid gray",
              borderRadius: "38px",
              boxShadow: 3,
              display: "flex", // Usar flexbox para centrar
              flexDirection: "column",
              alignItems: "center", // Centrar los elementos dentro de la tarjeta
              "&:hover": {
                boxShadow: 6,
                transform: "scale(1.08)",
                transition: "transform 0.3s ease",
              },
            }}
          >
            <CardActionArea>
              {/* Carrusel de imágenes */}
              <Slider {...sliderSettings}>
                {product.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Producto ${index + 1}`} // Evitar palabras como "imagen" o "image"
                      style={{
                        width: "100%",
                        height: "180px",
                        objectFit: "cover",
                        borderRadius: "20px", // Bordes redondeados para las imágenes
                        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)", // Sombra para las imágenes
                      }}
                    />
                  </div>
                ))}
              </Slider>
              <CardContent sx={{ backgroundColor: "#f9f9f9", textAlign: "center" }}>
                {/* Nombre del producto */}
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  {product.name}
                </Typography>

                {/* Precio del producto */}
                <Typography
                  variant="h6"
                  component="div"
                  color="secondary"
                  sx={{ fontWeight: "bold" }}
                >
                  ${product.price}{" "}
                  <Typography
                    component="span"
                    sx={{
                      textDecoration: "line-through",
                      ml: 1,
                      fontSize: "0.9rem",
                      color: "text.secondary",
                    }}
                  >
                    ${product.oldPrice}
                  </Typography>
                </Typography>

                {/* Valoración del producto */}
                <Rating
                  name="read-only"
                  value={product.rating}
                  readOnly
                  precision={0.5}
                  size="small"
                />

                {/* Descripción breve del producto */}
                <Typography variant="body2" sx={{ color: "text.secondary", mt: 0 }}>
                  {product.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 2,
              }}
            >
              {/* Botón de agregar al carrito */}
              <Button
                size="large"
                color="info"
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                style={{ top: -10, margin: -10 }}
                onClick={() => handleSetProducto(product.name)} // Llama a la función con el nombre del producto
                sx={{
                  "&:hover": {
                    backgroundColor: "green",
                    transition: "background-color 0.3s ease",
                  },
                }}
              >
                Comprar ahora
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
