import GetAPI from "../customHook/GetAPI";
import styled from "styled-components";
import {Link} from "react-router-dom";
import React, {useState} from "react";

const BotaoDetalhe = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
`;

function ListaRockets() {
	const [rocketsTotal] = GetAPI('https://api.spacexdata.com/v4/rockets');

	const [lista, setLista] = useState([]);

	const qntPagina = 2;
	const totalDePagina = rocketsTotal.length / qntPagina;
	const numeroPagina = 1;


	return (
		<div className="card card-default">
			<div className='card-header'>
				<h1>Lista de Naves Espaciais da SpaceX</h1>
				<span className='float-end'>
					{rocketsTotal.length} Total de registos
				</span>
			</div>

			<div className='card-body'>
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th width='150px'>Nome</th>
							<th>Descrição</th>
							<th className='col-1'>Primeiro voo</th>
							<th>Imagem</th>
						</tr>
					</thead>
					<tbody>
						{rocketsTotal.map(rocket => (
							<tr key={rocket.id}>
								<td>
									<Link to={rocket.id}>
										{rocket.name}
									</Link>
								</td>
								<td>{rocket.description}</td>
								<td>{rocket.first_flight}</td>
								<td>
									<img src={rocket.flickr_images[0]} width='100' height='100'></img>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default ListaRockets;
