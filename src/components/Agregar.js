import React, { useState } from "react";

var Agregar = () => {
    var [nombre, setNombre] = useState("");
    var [apellido, setApellido] = useState("");
    var [telefono, setTel] = useState("");

    var subir = (persona) => {
        persona.preventDefault();
        var newPost = {nombre,apellido,telefono};

        fetch('http://www.raydelto.org/agenda.php',{
            method: 'POST',
            body: JSON.stringify(newPost),
        }).then(()=> {
            alert("El contacto se ha agregado, Actualize la pagina para visualizar los cambios")
            setNombre("")
            setApellido("")
            setTel("")
        })
    }
    
    return(
        <div>
            <form onSubmit={subir}>
                <label><i> Nombre </i></label>
                <input placeholder="Nombre" type="text" value={nombre} onChange={(persona) => setNombre(persona.target.value)} />
                <label><i> Apellido </i></label>
                <input placeholder="Apellido" type="text" value={apellido} onChange={(persona) => setApellido(persona.target.value)} />
                <label><i> Telefono </i></label>
                <input placeholder="Telefono" type="text" value={telefono} onChange={(persona) => setTel(persona.target.value)} />
                <label>     </label>
                <button> Agregar contacto </button>
            </form>    
        </div>
    )
}

export default Agregar;