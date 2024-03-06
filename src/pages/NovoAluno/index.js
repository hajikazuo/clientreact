import React, {useState} from 'react';
import './styles.css';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

import novoAluno from '../../assets/AddUser.png'

export default function NovoAluno() {

    const [id, setId] = useState(null);
    const {alunoId} = useParams();
    
    return (
        <div className="novo-aluno-container">
            <div className="content">  
                <section className="form">
                    <img src={novoAluno} alt="novoAluno"></img>
                    <h1>{alunoId === '0'? 'Incluir Novo Aluno' : 'Atualizar Aluno'}</h1>
                    <Link className="back-link" to="/alunos">
                        <FiArrowLeft size="15" color="#17202a" />
                        Retornar
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome" />
                    <input placeholder="Email" />
                    <input placeholder="Idade" />
                    <button className="button" type="submit">{alunoId === '0'? 'Incluir' : 'Atualizar'}</button>
                </form>
            </div>
        </div>
    )
}