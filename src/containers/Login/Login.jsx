import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types/userType';
import Swal from 'sweetalert2';
import './Login.scss'
import loading from '../../img/loading.svg';


const Login = (props) => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            email: event.target.email.value,
            password: event.target.password.value
        };

        setIsLoading(true);
        await axios.post(process.env.REACT_APP_API_URL + '/users/login', userData)
            .then(res => {
                setIsLoading(false)
                props.dispatch({ type: LOGIN, payload: res.data })
                Swal.fire({
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    icon: 'success',
                    text: 'Sesión iniciada correctamente'
                })

                setTimeout(() => {
                    history.push('/')
                }, 1500)
            }).catch(err => {
                setIsLoading(false)
                Swal.fire({
                    showConfirmButton: true,
                    icon: 'error',
                    text: 'Ha habido un error. Puede ser que hayas introducido mal algún dato, o que todavía no hayas creado una cuenta.'
                })
            });
    }

    return (
        <div className="main">
            <form className="mainContainer" action="" onSubmit={handleSubmit}>
                <h3>Inicio de sesión</h3>
                <div>Correo electrónico:</div>
                <input type="email" name="email" placeholder="Introduce tu email" required />
                <div>Contraseña:</div>
                <input type="password" name="password" placeholder="Introduce tu contraseña" required />
                <div className="divButton">
                    {isLoading
                        ?
                        <div className="loadingImage">
                            <img src={loading} alt="loading" />
                        </div>
                        :
                        <button type="submit">Iniciar sesión</button>
                    }
                    <div>¿Todavía no tienes cuenta?</div>
                    <div><Link to="/register">Crear una cuenta nueva</Link></div>
                    <br/>
                    <div>¿Has olvidado tu contraseña? <Link to="/forgotpassword">Pulsa aquí</Link></div>
                </div>
            </form>
        </div>
    )
}

export default connect()(Login);