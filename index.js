import React, { useState } from "react";
import "./login.css";
import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";


const Login = ({aoEnviar}) => {

    const [mostra, setMostra] = useState("")
    const [email, setEmail] = useState("")

    const handleClick = () => {
        setMostra(!mostra)
    }
    return (

        <div className="login" onSubmit={(event) => {
            event.preventDefault()
            aoEnviar({email})
        }}>

            <div className="login-logo">
                <img src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png" alt="Login App" />
            </div>
            <div className="login-right">
                <h1>Acessar App</h1>
                <div className="login-input-email">
                    <MdEmail />
                    <input type="email" placeholder="Dígite seu email"
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}

                    ></input>

                </div>

                <div className="login-input-password">
                    <MdLock />
                    <input type={(mostra)? "text" : "password"}
                        placeholder="Dígite sua senha"></input>

                    <div className="login-eye">
                        {(mostra) ? (<HiEye onClick={handleClick} />) : (<HiEyeOff onClick={handleClick} />)

                        }
                    </div>


                </div>

                <button type="submit">Entrar</button>

                <h2>Não tenho conta!</h2>

                <button type="submit">Cadastrar</button>
            </div>
        </div>
    )
}

export default Login;
