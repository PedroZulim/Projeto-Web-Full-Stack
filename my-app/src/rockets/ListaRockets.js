import GetAPI from "../customHook/GetAPI";
import styled from "styled-components";
import {Link} from "react-router-dom";
import React, {useEffect, useMemo, useRef, useState} from "react";
import FooterLista from "../template/FooterLista";

const BotaoDetalhe = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
`;

function ListaRockets() {
	const [controleAcoes, setControleAcoes] = useState([]);
	const [totalRegistro, setTotalRegistro] = useState([]);

	const [rocketsLista] = GetAPI('http://localhost:5000/api/rockets');

	// ------ Pagina
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(5);

	const atualizaLista = (page) => {
		setPage(page);
		// forca atualizar lista ships
		setControleAcoes(!controleAcoes);
	}

	// -- userRef textoBuscar
	const textoBuscar = useRef('');

	useEffect(() => {
		// forca atualizar lista ships
		setControleAcoes(!controleAcoes);
	}, [rocketsLista]);

	const onBuscarClick = () => {
		setPage(1);
		// forca atualizar lista rocket
		setControleAcoes(!controleAcoes);
	};

	const rocketPaginada = useMemo(() => {
		let listaFiltro = rocketsLista;
		const texto = textoBuscar.current?.value || '';
		if (texto.length > 0) {
			listaFiltro = rocketsLista.filter((rocket) => {
				return rocket.name.toLowerCase().includes(texto.toLowerCase()) ||
					('' + rocket.first_flight).includes(texto.toLowerCase()) ||
					rocket.description.toLowerCase().includes(texto.toLowerCase())
			});
		}
		setTotalRegistro(listaFiltro.length);
		let totalPagina = listaFiltro.length;
		if ((page * limit) < totalPagina) {
			totalPagina = (page * limit);
		}
		let listaPaginada = [];
		for (let i = (page - 1) * limit; i < totalPagina; i++) {
			listaPaginada.push(listaFiltro[i]);
		}
		return listaPaginada;
	}, [ page, controleAcoes]);


	return (
		<div className="card card-default">
			<div className='card-header'>
				<h1>SpaceX Rockets List</h1>
			</div>

			<div className='card-body'>
				<table className="table table-striped table-hover">
					<thead>
					<tr>
						<th colSpan='4'>
							Busca
							{/*INPUT usando REF*/}
							<input type="text" className="form-control" id="engines_second_stage"
								   placeholder='Buscar...'
								   ref={textoBuscar}/>

							<button onClick={onBuscarClick} className="mt-2 btn btn-outline-dark">Buscar</button>
							<Link to="/spacex/rockets/novo">
								<button className="mt-2 ms-1 btn btn-outline-dark">Novo</button>
							</Link>
						</th>
					</tr>
						<tr>
							<th width='150px'>Name</th>
							<th>Description</th>
							<th className='col-1'>First Flight</th>
							<th>Image</th>
						</tr>
					</thead>
					<tbody>
					{rocketPaginada.length > 0 ? (
						rocketPaginada.map(rocket => (
							<tr key={rocket?._id}>
								<td>
									<Link to={rocket?._id}>
										{rocket?.name}
									</Link>
								</td>
								<td>{rocket?.description}</td>
								<td>{rocket?.first_flight}</td>
								<td>
									<img src={rocket?.flickr_images[0]} width='100' height='100'></img>
								</td>
							</tr>
						))
						):(
						<tr>
							<td colSpan="4" style={{ textAlign: 'center' }}>Nenhum registro encontrado.</td>
						</tr>
						)}
					</tbody>
				</table>
				<div>
					<div className='card-footer'>
						{/*Utilizacao de Context entre PAI e Filho.*/}
						<FooterLista atualizaLista={atualizaLista} page={page} totalRegistro={totalRegistro} limit={limit}/>
					</div>
					<div className='card-footer'>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ListaRockets;
