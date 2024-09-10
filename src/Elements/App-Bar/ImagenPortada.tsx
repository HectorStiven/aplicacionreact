
export  const ImagenPortada = () => {
  return (
    <div>
      <img src='../image/naruto.jpg'  alt="Instagram" style={{ width:250}}/>
    </div>
  )
}




export  const ImagenFondo = () => {
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }}>
      <img src="../image/fondo.jpg" alt="Instagram" style={{ width: "100%", height: "100%", objectFit: "cover", zIndex: -1,opacity: 0.5 }} />
    </div>
  )
}


