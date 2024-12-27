import React, { useState } from 'react';

const Register = ({ setToken, setShowRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const fetchPath = 'http://localhost:5050'

    const handleSubmit = async (e) => {
        alert("No se aceptan mas registros de momento")
    //    e.preventDefault();
    //    const response = await fetch(`${fetchPath}/api/register`, {
    //        method: 'POST',
    //        headers: {
    //            'Content-Type': 'application/json',
    //        },
    //        body: JSON.stringify({ username, password }),
    //    });
    //
    //    const data = await response.json();
    //    if (response.ok) {
    //        alert(data.message);
    //        setShowRegister(false)
    //    }
    //    else{
    //        alert("Error al registrarse")
    //    }
    };

    return (
        <div className='loginContainer'>
            <form className='formlogincontainer' onSubmit={handleSubmit}>
                <div className='formlogintitle'>Registrarse</div>
                <label>
                    <div>Nombre de Usuario:</div>
                    <input className='formlogininput' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    <div>Contraseña:</div>
                    <input className='formlogininput' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <div onClick={() => setShowRegister(false)} className='formloginregister'>¿Iniciar sesion?</div>
                <button className='formloginbutton' type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export {Register};
