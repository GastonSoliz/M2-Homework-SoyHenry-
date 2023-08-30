import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const InfoEnviada = () => {
  const { formulario } = useSelector((state) => {
    return state;
  });

  const [informacion, setInformacion] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  useEffect(() => {
    setInformacion({ ...informacion, ...formulario });
  }, [formulario]);

  return (
    <div>
      <h1>Informacion que enviaste por el formulario...</h1>
      <h3>{informacion.nombre}</h3>
      <h3>{informacion.email}</h3>
      <h3>{informacion.asunto}</h3>
      <h3>{informacion.mensaje}</h3>
    </div>
  );
};

export default InfoEnviada;
