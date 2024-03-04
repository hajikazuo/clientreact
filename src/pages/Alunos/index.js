import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FiLogOut } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiUserX } from "react-icons/fi";

export default function Alunos() {
    return (
        <div className="aluno-container">
            <header>
                <span>Bem-Vindo, <strong>Nilton</strong>!</span>
                <Link className="button" to="/aluno/novo/0">Novo Aluno</Link>
                <button type="button">
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
                <li>
                    <b>Nome: </b>Paulo<br /><br />
                    <b>Email: </b>paulo@email.com<br /><br />
                    <b>Idade: </b>22<br /><br />
                    <button type="button">
                        <FiEdit size={35} color="#17202a" />
                    </button>
                    <button type="button">
                        <FiUserX size={35} color="#17202a" />
                    </button>
                </li>

                <li>
                    <b>Nome: </b>Paulo<br /><br />
                    <b>Email: </b>paulo@email.com<br /><br />
                    <b>Idade: </b>22<br /><br />
                    <button type="button">
                        <FiEdit size={35} color="#17202a" />
                    </button>
                    <button type="button">
                        <FiUserX size={35} color="#17202a" />
                    </button>
                </li>
            </ul>
        </div>
    )
}