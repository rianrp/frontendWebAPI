import React, { useState } from "react";
import logo from '../images/smartphone.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import api from "../Api";
import { repositoryUser } from "../Repositories/user";

export const Login = (props) => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasaccount] = useState(false);
    const [name, setName] = useState("");

    const handleChangeEmail = (e) => {
        setemail(e.target.value)
        props.setemail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
        props.setPassword(e.target.value)
    }

    const login = async () => {
        try {
            let userAdmin = {
                login: email,
                password: password
            }

            const response = await repositoryUser.post(userAdmin);
            
        } catch (error) {
            console.log("ERROR AQUI ____________ ", error)
        }
    }

    return (
        <section className="login">
            <div className="loginContainer">
                <div style={{ width: '100%', textAlign: "center", marginBottom: '30px' }}>
                    <img src={logo} width="80px" style={{ float: "center" }}></img>
                    
                </div>
                <div style={{ width: '100%', textAlign: "center", marginBottom: '10px' }}>
                <Typography style={{color: "white", marginBottom: '10px'}}>Bem Vindo de volta!</Typography>
                    
                </div>

                <label>Email</label>
                <input type="text" autoFocus required value={email} onChange={e => setemail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>
                <label>Senha</label>
                <input type="password" required value={password} onChange={e => setPassword(e.target.value)}></input>
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    <button className="button" style={{ color: "#414a7b"}} onClick={login}>Entrar</button>
                    <p style={{ textAlign: "center"}}>Esqueceu a senha?</p>
                </div>
                <div className="termos">
                    Termos de uso | Política de privacidade
                </div>
            </div>
        </section>
    )
}

export default Login