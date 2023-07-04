import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/plantillas/AdminLayout";
import backgroundImg from "../../assets/mantenimiento_vehiculo.jpg"; // Ruta de la imagen de fondo local


const Mantenimiento = () => {
  const [idVehiculoMantenimiento, setIdVehiculoMantenimiento] = useState("");
  const [fecha, setFecha] = useState("");
  const [observacion, setObservacion] = useState("");
  const [fechaFutura, setFechaFutura] = useState("");
  const [km, setKm] = useState("");
  const [tipoMantenimiento, setTipoMantenimiento] = useState("");
  const [vehiculo, setVehiculo] = useState("");
  const [tiposMantenimiento, setTiposMantenimiento] = useState([]);

  useEffect(() => {
    fetchTiposMantenimiento();
  }, []);

  const fetchTiposMantenimiento = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/tipos-mantenimiento"
      );
      setTiposMantenimiento(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGuardar = async () => {
    try {
      console.log("idVehiculoMantenimiento:", idVehiculoMantenimiento);
      console.log("fecha:", fecha);
      console.log("observacion:", observacion);
      console.log("fechaFutura:", fechaFutura);
      console.log("km:", km);
      console.log("tipoMantenimiento:", tipoMantenimiento);
      console.log("vehiculo:", vehiculo);

      const response = await axios.post(
        "http://localhost:8000/api/vehiculo-mantenimiento/",
        {
          vehiculo_mantenimiento_id: idVehiculoMantenimiento,
          vehiculo_mantenimiento_fecha: fecha,
          vehiculo_mantenimiento_observacion: observacion,
          vehiculo_mantenimiento_fecha_futura: fechaFutura,
          vehiculo_mantenimiento_km: km,
          tipo_mantenimiento: tipoMantenimiento,
          vehiculo: vehiculo,
        }
      );
      console.log(response.data);

      setIdVehiculoMantenimiento("");
      setFecha("");
      setObservacion("");
      setFechaFutura("");
      setKm("");
      setTipoMantenimiento("");
      setVehiculo("");
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <AdminLayout style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <>
        <h1 style={{ color: "blue", marginBottom: "20px", fontSize: "24px" }}>
          Registro de Vehículo en Mantenimiento
        </h1>
        <div className="mb-3">
          <label htmlFor="idVehiculoMantenimiento" style={{ color: "red" }}>
            ID del Mantenimiento
          </label>
          <input
            type="number"
            className="form-control"
            id="idVehiculoMantenimiento"
            placeholder="Ingrese el ID del mantenimiento"
            value={idVehiculoMantenimiento}
            onChange={(e) => setIdVehiculoMantenimiento(e.target.value)}
            style={{ borderColor: "blue", backgroundColor: "#f2f2f2" }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha" style={{ color: "green" }}>
            Fecha
          </label>
          <input
            type="date"
            className="form-control"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            style={{ borderColor: "green", backgroundColor: "#f2f2f2" }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="observacion" style={{ color: "purple" }}>
            Observación
          </label>
          <textarea
            className="form-control"
            id="observacion"
            placeholder="Ingrese la observación"
            value={observacion}
            onChange={(e) => setObservacion(e.target.value)}
            style={{ borderColor: "purple", backgroundColor: "#f2f2f2" }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fechaFutura" style={{ color: "orange" }}>
            Fecha Futura
          </label>
          <input
            type="date"
            className="form-control"
            id="fechaFutura"
            value={fechaFutura}
            onChange={(e) => setFechaFutura(e.target.value)}
            style={{ borderColor: "orange", backgroundColor: "#f2f2f2" }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="km" style={{ color: "teal" }}>
            Kilometraje
          </label>
          <input
            type="number"
            className="form-control"
            id="km"
            placeholder="Ingrese el kilometraje"
            value={km}
            onChange={(e) => setKm(e.target.value)}
            style={{ borderColor: "teal", backgroundColor: "#f2f2f2" }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tipoMantenimiento" style={{ color: "navy" }}>
            Tipo de Mantenimiento
          </label>
          <select
            className="form-control"
            id="tipoMantenimiento"
            value={tipoMantenimiento}
            onChange={(e) => setTipoMantenimiento(e.target.value)}
            style={{ borderColor: "navy", backgroundColor: "#f2f2f2" }}
          >
            <option value="">Seleccione un tipo de mantenimiento</option>
            {tiposMantenimiento.map((tipo) => (
              <option
                key={tipo.tipo_mantenimiento_id}
                value={tipo.tipo_mantenimiento_id}
              >
                {tipo.tipo_mantenimiento_nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="vehiculo" style={{ color: "maroon" }}>
            Vehículo
          </label>
          <input
            type="text"
            className="form-control"
            id="vehiculo"
            placeholder="Ingrese el vehículo"
            value={vehiculo}
            onChange={(e) => setVehiculo(e.target.value)}
            style={{ borderColor: "maroon", backgroundColor: "#f2f2f2" }}
          />
        </div>
        <div className="d-flex justify-content-start">
          <div className="me-auto">
            <button
              type="button"
              className="btn btn-success me-2"
              onClick={handleGuardar}
              style={{ animation: "pulse 1s infinite", marginRight: "10px" }}
            >
              Guardar
            </button>
            <button
              type="button"
              className="btn btn-primary me-2"
              style={{ backgroundColor: "purple" }}
            >
              <Link
                to="/mantenimiento_vehiculos"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Mostrar
              </Link>
            </button>
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ backgroundColor: "green" }}
          >
            <Link
              to="/agregar_tipo_mantenimiento"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              Agregar tipo de mantenimiento
            </Link>
          </button>
        </div>
      </>
    </AdminLayout>
  );
};

export default Mantenimiento;