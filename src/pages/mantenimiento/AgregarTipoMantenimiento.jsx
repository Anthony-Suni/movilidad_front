import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/plantillas/AdminLayout";

const AgregarTipoMantenimiento = () => {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8000/api/tipos-mantenimiento/",
                {
                    tipo_mantenimiento_nombre: nombre,
                    tipo_mantenimiento_descripcion: descripcion,
                }
            );
            console.log(response.data);

            // Limpiar el formulario después de enviar los datos
            setNombre("");
            setDescripcion("");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AdminLayout>
            <div>
                <h1>Agregar Tipo de Mantenimiento</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            placeholder="Ingrese el nombre del tipo de mantenimiento"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea
                            className="form-control"
                            id="descripcion"
                            placeholder="Ingrese la descripción del tipo de mantenimiento"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary">
                            Guardar
                        </button>
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
                </form>
            </div>
        </AdminLayout>
    );
};

export default AgregarTipoMantenimiento;