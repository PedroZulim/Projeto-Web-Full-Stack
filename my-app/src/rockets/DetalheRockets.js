import GetAPI from "../customHook/GetAPI";
import styled from "styled-components";
import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import GetImage from "./GetImage";
import {createPortal} from "react-dom";
import ConfirmeModal from "../modal/ConfirmeModal";

const BotaoVoltar = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
`;

function DetalheRockets() {
	const navigate = useNavigate();
	const {id} = useParams();
	const [rocket] = GetAPI('https://api.spacexdata.com/v4/rockets/' + id);

	const [showModal, setShowModal] = useState(false);
	const [disableFields, setDisableFields] = useState(true);
	var campos = [];
	var imagens = [];
	var imagemPagina = '';

	if (!rocket) {
		return <div>rocket not found</div>;
	}

	Object.keys(rocket).forEach(function(key) {
		campos.push(<span><b>{key} </b>{JSON.stringify(rocket[key])} <br/></span>);
	});

	if (rocket.flickr_images) {
		rocket.flickr_images.map(url => (
			imagens.push(<div className='col-4'>
				<img src={url} width='300' height='300' className='mt-3'></img>
			</div>)
		));
		imagemPagina = rocket.flickr_images[0];
	}
	const ativarDesativarForm = () => {
		setDisableFields(!disableFields);
	}



	return (
		<div>
			<br/>

			<div className="card card-default">
				<div className='card-header'>
					<h2>{rocket.name}
						<small>{rocket.active ? <span className="badge bg-success m-1">Ativo</span>
							: <span className="badge bg-danger m-1">Inativo</span>
						}
						</small>

						<span className='float-end'>
							<button className='btn btn-sm btn-warning m-1' onClick={() => ativarDesativarForm()}>
								Editar
							</button>

							<button className='btn btn-sm btn-danger m-1' onClick={() => setShowModal(true)}>
								Remover
							</button>

							<Link to="/spacex/rockets" className='m-1' >
								<button className='btn btn-sm btn-info'>
									Voltar
								</button>
							</Link>
						</span>
					</h2>
				</div>

				<div className='card-body'>
					<div className='row'>
						<div className='col-3'>
							<img src={imagemPagina} width='300' height='300'></img>

							<GetImage></GetImage>
							{/*<img src={imagemUrl1.current} width="300" height="300" alt="Imagem 1"/>*/}
							{/*<img src={imagemUrl2.current} width="300" height="300" alt="Imagem 2"/>*/}
						</div>
						<div className='col-9'>
							<div className="col-12">
								<label htmlFor="description" className="form-label">Descrição </label>
								<textarea className="form-control" id="description" disabled={disableFields}
										  value={rocket.description} rows='3'></textarea>
							</div>
							<div className="col-3">
								<label htmlFor="first_flight" className="form-label">Primeiro Voo </label>
								<input type="date" className="form-control" id="first_flight" disabled={disableFields}
									   value={rocket.first_flight}/>
							</div>

							<p>{campos}</p>
						</div>

					</div>


				</div>
				<div className='card-footer'> FOOTTER
				</div>

			</div>
			<br/>

			<div className="card card-default">
				<div className='card-header'>
					<h2>Imagens
					</h2>
				</div>

				<div className='card-body'>
					<div className='row'>
						{imagens}


						{/*<div className='col-4'>*/}
						{/*	<img src={imagemUrl1} width='300' height='300'></img>*/}
						{/*</div>*/}
						{/*<div className='col-4'>*/}
						{/*	<img src={imagemUrl2} width='300' height='300'></img>*/}
						{/*</div>*/}
					</div>


				</div>
				<div className='card-footer'> FOOTTER
				</div>

			</div>

			<p>{campos}</p>

			{showModal && createPortal(
				<ConfirmeModal onClose={() => setShowModal(false)} />,
				document.body
			)}
		</div>
	);
}


export default DetalheRockets;
