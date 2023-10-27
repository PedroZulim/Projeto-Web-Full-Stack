import GetAPI from "../customHook/GetAPI";
import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

const BotaoDetalhe = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
`;

function ListaShips() {
    const [ships] = GetAPI('https://api.spacexdata.com/v4/ships');
    return (
        <div className="card card-default">
            <div className='card-header'>
                <h1>Lista de Embarcações da SpaceX</h1>
            </div>

            <div className='card-body'>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>Ações</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Ativo</th>
                        <th>Ano de Construção</th>
                        <th>Imagem</th>
                    </tr>
                    </thead>
                    <tbody>
                    {ships.map(ship => (
                        <tr key={ship.id}>
                            <td>
                                <Link to={ship.id}>
                                    <button>Detalhes</button>
                                </Link>
                            </td>
                            <td>{ship.name}</td>
                            <td>{ship.type}</td>
                            <td>{ship.active ? 'Sim' : 'Não'}</td>
                            <td>{ship.year_built}</td>
                            <td>
                                <img src={ship.image} width='100' height='100'></img>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className='card-footer'> {ships.length} Total de registo
            </div>

        </div>
    );
}

export default ListaShips;
