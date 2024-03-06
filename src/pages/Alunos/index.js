import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';

import { FiLogOut } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiUserX } from "react-icons/fi";

export default function Alunos() {

    const [nome, setNome] = useState('');
    const [alunos, setAlunos] = useState([]);

    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');

    const history = useNavigate();

    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        api.get('api/alunos', authorization).then(
            response => {
                setAlunos(response.data);
            }, token)
    })
    
    async function logout(){
        try {
            localStorage.clear();
            localStorage.setItem('token','');
            authorization.headers ='';
            history('/');
        } catch (error) {
            alert('Não foi possivel fazer o logout' + error)
        }
    }

    return (
        <div className="aluno-container">
            <header>
                <span>Bem-Vindo, <strong>{email}</strong>!</span>
                <Link className="button" to="/aluno/novo/0">Novo Aluno</Link>

                <button onClick={logout} type="button">
                    <FiLogOut size={35} color="#17202a" />
                </button>
            </header>

            <form>
                <input type='text' placeholder="Nome" />
                <button type="button" class='button'>
                    Filtrar aluno por nome
                </button>
            </form>
            <h1>Relações de alunos</h1>

            <ul>
                {alunos.map(aluno => (
                    <li key={aluno.id}>
                        <b>Nome: </b>{aluno.nome}<br /><br />
                        <b>Email: </b>{aluno.email}<br /><br />
                        <b>Idade: </b>{aluno.idade}<br /><br />

                        <button type="button">
                            <FiEdit size={35} color="#17202a" />
                        </button>

                        <button type="button">
                            <FiUserX size={35} color="#17202a" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}