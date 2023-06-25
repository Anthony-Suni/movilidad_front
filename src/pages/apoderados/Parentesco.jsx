import AdminLayout from '../../components/plantillas/AdminLayout'

function Parentesco(){
    return(
        <AdminLayout>
            <>
            <h1>Parentescos</h1>
            <div className="mb-3">
                <label className="form-label">Nuevo Parentesco</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                <br/>
                <button type="button" className="btn btn-success">Guardar</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Id</th>
                    <th scope="col">Descripción</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
            
            </>
        </AdminLayout>
    )
}

export default Parentesco;