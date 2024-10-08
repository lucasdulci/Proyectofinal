import './Form.css'

export const Form = ({ datosForm, guardarDatosInput, enviarOrden }) => {
    return (
        <div className='form-container'>
            <h2>Compretar con sus datos para seguir con la compra</h2>
            <form onSubmit={enviarOrden}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput} required />

                <label htmlFor="telefono">Telefono</label>
                <input type="number" id="telefono" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput} required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={datosForm.email} onChange={guardarDatosInput} required />

                <label htmlFor="emailRepetido">Repetir Email</label>
                <input type="email" id="emailRepetido" name="emailRepetido" value={datosForm.emailRepetido} onChange={guardarDatosInput} required />

                <button className='button' type="submit">Enviar Orden</button>
            </form>
        </div>
    )
}
