import { useForm } from 'react-hook-form';
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AdminLayout from "../../components/plantillas/AdminLayout";
import React, { useState, useEffect } from 'react';


const EditarMantenimientoVehiculo = () => {
  
  const { id } = useParams();
  const { register, handleSubmit, setValue } = useForm();
  const [tiposMantenimiento, setTiposMantenimiento] = useState([]);

  useEffect(() => {
    fetchMantenimiento();
    fetchTiposMantenimiento();
  }, []);

  const fetchMantenimiento = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/vehiculo-mantenimiento/${id}`
      );
      const mantenimiento = response.data;
      setValue(
        "idVehiculoMantenimiento",
        mantenimiento.idVehiculoMantenimiento
      );
      setValue("fecha", mantenimiento.fecha);
      setValue("observacion", mantenimiento.observacion);
      setValue("fechaFutura", mantenimiento.fechaFutura);
      setValue("km", mantenimiento.km);
      setValue("tipoMantenimiento", mantenimiento.tipoMantenimiento);
      setValue("vehiculo", mantenimiento.vehiculo);
    } catch (error) {
      console.error(error);
    }
  };

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

  const handleGuardar = async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/vehiculo-mantenimiento/${id}`,
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <AdminLayout>
      <>
        <h1>Editar Mantenimiento de Vehículo</h1>
        <form onSubmit={handleSubmit(handleGuardar)}>
          <div className="mb-3">
            <label htmlFor="idVehiculoMantenimiento">
              ID del Mantenimiento
            </label>
            <input
              type="number"
              className="form-control"
              id="idVehiculoMantenimiento"
              placeholder="Ingrese el ID del mantenimiento"
              {...register("idVehiculoMantenimiento")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fecha">Fecha</label>
            <input
              type="date"
              className="form-control"
              id="fecha"
              {...register("fecha")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="observacion">Observación</label>
            <textarea
              className="form-control"
              id="observacion"
              placeholder="Ingrese la observación"
              {...register("observacion")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fechaFutura">Fecha Futura</label>
            <input
              type="date"
              className="form-control"
              id="fechaFutura"
              {...register("fechaFutura")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="km">Kilometraje</label>
            <input
              type="number"
              className="form-control"
              id="km"
              placeholder="Ingrese el kilometraje"
              {...register("km")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tipoMantenimiento">Tipo de Mantenimiento</label>
            <select
              className="form-control"
              id="tipoMantenimiento"
              {...register("tipoMantenimiento")}
            >
              <option value="">Seleccione un tipo de mantenimiento</option>
              {tiposMantenimiento.map((tipo) => (
                <option key={tipo.id} value={tipo.id}>
                  {tipo.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="vehiculo">Vehículo</label>
            <input
              type="text"
              className="form-control"
              id="vehiculo"
              placeholder="Ingrese el vehículo"
              {...register("vehiculo")}
            />
          </div>
          <div className="d-flex justify-content-start">
            <div className="me-auto">
              <button type="submit" className="btn btn-success me-2">
                Guardar
              </button>
              <button type="button" className="btn btn-primary me-2">
                <Link
                  to="/mantenimiento_vehiculos"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Mostrar
                </Link>
              </button>
            </div>
            <button type="button" className="btn btn-secondary">
              <Link
                to="/agregar_tipo_mantenimiento"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Agregar tipo de mantenimiento
              </Link>
            </button>
          </div>
        </form>
      </>
    </AdminLayout>
  );
};


export default EditarMantenimientoVehiculo;