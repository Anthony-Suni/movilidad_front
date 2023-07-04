import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AdminLayout from "../../components/plantillas/AdminLayout";

const VehiculosEnMantenimiento = () => {
  const [vehiculos, setVehiculos] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [filteredVehiculos, setFilteredVehiculos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehiculosEnMantenimiento = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/vehiculo-mantenimiento/"
        );
        setVehiculos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVehiculosEnMantenimiento();
  }, []);

  useEffect(() => {
    setFilteredVehiculos(
      vehiculos.filter((vehiculo) =>
        vehiculo.vehiculo_mantenimiento_id.toString().includes(searchId)
      )
    );
  }, [searchId, vehiculos]);

  const handleSearch = (e) => {
    setSearchId(e.target.value);
  };

  const handleEliminar = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8000/api/vehiculo-mantenimiento/${id}/eliminar_mantenimiento/`
      );
      setVehiculos((prevVehiculos) =>
        prevVehiculos.filter(
          (vehiculo) => vehiculo.vehiculo_mantenimiento_id !== id
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>
      <div>
        <h1>Vehículos en Mantenimiento</h1>
        <div className="mb-3">
          <label htmlFor="searchId" className="form-label">
            Buscar por ID:
          </label>
          <input
            type="text"
            className="form-control"
            id="searchId"
            value={searchId}
            onChange={handleSearch}
          />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Fecha</th>
              <th scope="col">Observación</th>
              <th scope="col">Fecha Futura</th>
              <th scope="col">Kilometraje</th>
              <th scope="col">Tipo de Mantenimiento</th>
              <th scope="col">Vehículo</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredVehiculos.map((vehiculo) => (
              <tr key={vehiculo.vehiculo_mantenimiento_id}>
                <th scope="row">{vehiculo.vehiculo_mantenimiento_id}</th>
                <td>{vehiculo.vehiculo_mantenimiento_fecha}</td>
                <td>{vehiculo.vehiculo_mantenimiento_observacion}</td>
                <td>{vehiculo.vehiculo_mantenimiento_fecha_futura}</td>
                <td>{vehiculo.vehiculo_mantenimiento_km}</td>
                <td>{vehiculo.tipo_mantenimiento}</td>
                <td>{vehiculo.vehiculo}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      handleEliminar(vehiculo.vehiculo_mantenimiento_id)
                    }
                  >
                    Eliminar
                  </button>
                  <Link
                    to={`/mantenimiento/editar/${vehiculo.vehiculo_mantenimiento_id}`}
                    className="btn btn-primary"
                    onClick={() =>
                      handleEditar(vehiculo.vehiculo_mantenimiento_id)
                    }
                  >
                    Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" className="btn btn-secondary">
          <Link
            to="/mantenimiento"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            Regresar
          </Link>
        </button>
      </div>
    </AdminLayout>
  );
};

export default VehiculosEnMantenimiento;
