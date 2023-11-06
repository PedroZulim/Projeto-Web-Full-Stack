import GetAPI from "../customHook/GetAPI";
import styled from "styled-components";
import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {createPortal} from "react-dom";
import ConfirmeModal from "../modal/ConfirmeModal";
import FooterDetails from "../template/FooterDetails";

const BotaoVoltar = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
`;

function DetalhesShips() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [ship] = GetAPI('https://api.spacexdata.com/v4/ships/' + id);
    const [showModal, setShowModal] = useState(false);
    const [disableFields, setDisableFields] = useState(true);

    var campos = [];


    if (!ship) {
        return <div>Ship not found</div>;
    }

    Object.keys(ship).forEach(function (key) {
        campos.push(<span><b>{key} </b>{ship[key]} <br/></span>);
    });

    const ativarDesativarForm = () => {
        setDisableFields(!disableFields);
    }

    return (
        <div>
            <br/>

            <div className="card card-default">
                <div className='card-header'>
                    <h2>{ship.name}
                        <small>{ship.active ? <span className="badge bg-success m-1">Ative</span>
                            : <span className="badge bg-danger m-1">Inactive</span>
                        }
                        </small>
                        <span className="float-end">
							<button className="btn btn-sm btn-warning m-1" onClick={() => ativarDesativarForm()}>
								Edit
							</button>

							<button className="btn btn-sm btn-danger m-1" onClick={() => setShowModal(true)}>
								Remove
							</button>

							<Link to="/Projeto-Web-Full-Stack/spacex/ships" className="m-1">
								<button className="btn btn-sm btn-info">
									Back
								</button>
							</Link>
						</span>
                    </h2>
                </div>

                <div className='card-body'>
                    <div className="row">
                        <div className="col-3 well">
                            <img src={ship.image} width='300' height='300' className="m-2"></img>
                        </div>
                        <div className="col-9">
                            <div className='row'>
                                <div className="col-3">
                                    <label htmlFor="roles" className="form-label">Roles</label>
                                    <input type="text" className="form-control" id="roles" disabled={disableFields}
                                           value={ship.roles}/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="type" className="form-label">Type</label>
                                    <input type="text" className="form-control" id="type" disabled={disableFields}
                                           value={ship.type}/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="legacy_id " className="form-label">Legacy Id</label>
                                    <input type="text" className="form-control" id="legacy_id " disabled={disableFields}
                                           value={ship.legacy_id}/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="home_port " className="form-label">Home Port</label>
                                    <input type="text" className="form-control" id="home_port" disabled={disableFields}
                                           value={ship.home_port}/>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className="col-3">
                                    <label htmlFor="last_ais_update" className="form-label">Last Ais Update</label>
                                    <input type="text" className="form-control" id="last_ais_update" disabled={disableFields}
                                           value={ship.last_ais_update}/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="model" className="form-label">Model</label>
                                    <input type="text" className="form-control" id="model" disabled={disableFields}
                                           value={ship.model}/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="imo " className="form-label">Imo</label>
                                    <input type="text" className="form-control" id="imo " disabled={disableFields}
                                           value={ship.imo}/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="mmsi " className="form-label">Mmsi</label>
                                    <input type="text" className="form-control" id="mmsi" disabled={disableFields}
                                           value={ship.mmsi}/>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className="col-3">
                                    <label htmlFor="abs" className="form-label">Abs</label>
                                    <input type="text" className="form-control" id="abs" disabled={disableFields}
                                           value={ship.abs}/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="class" className="form-label">Class</label>
                                    <input type="text" className="form-control" id="class" disabled={disableFields}
                                           value={ship.class}/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="mass_kg " className="form-label">Mass Kg</label>
                                    <input type="text" className="form-control" id="mass_kg " disabled={disableFields}
                                           value={ship.mass_kg}/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="mass_lbs " className="form-label">Mass Lbs</label>
                                    <input type="text" className="form-control" id="mass_lbs" disabled={disableFields}
                                           value={ship.mass_lbs}/>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className="col-3">
                                    <label htmlFor="year_built" className="form-label">Year Built</label>
                                    <input type="text" className="form-control" id="year_built" disabled={disableFields}
                                           value={ship.year_built}/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="status" className="form-label">Status</label>
                                    <input type="text" className="form-control" id="status" disabled={disableFields}
                                           value={ship.status}/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="speed_kn " className="form-label">Speed Kn</label>
                                    <input type="text" className="form-control" id="speed_kn " disabled={disableFields}
                                           value={ship.speed_kn}/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="course_deg " className="form-label">Course Deg</label>
                                    <input type="text" className="form-control" id="course_deg" disabled={disableFields}
                                           value={ship.course_deg}/>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className="col-3">
                                    <label htmlFor="latitude" className="form-label">Latitude</label>
                                    <input type="text" className="form-control" id="latitude" disabled={disableFields}
                                           value={ship.latitude}/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="longitude" className="form-label">Longitude</label>
                                    <input type="text" className="form-control" id="longitude" disabled={disableFields}
                                           value={ship.longitude}/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="link " className="form-label">Marine Traffic</label>
                                    <a target='_blank' className="form-control" id="link " disabled={disableFields} href={ship.link}>
                                        {ship.link ? 'Link' : 'Não Tem'}
                                    </a>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" disabled={disableFields}
                                           value={ship.name}/>
                                </div>
                            </div>
                            <div className='row mt-2'>
                                {/*<div className="col-3">*/}
                                {/*    <label htmlFor="active" className="form-label">Active</label>*/}
                                {/*    <input type="text" className="form-control" id="active" disabled={disableFields}*/}
                                {/*           value={ship.active ? 'Sim' : 'Não'}/>*/}
                                {/*</div>*/}
                                <div className="col-3">
                                    <label htmlFor="launches" className="form-label">Launches</label>
                                    <input type="text" className="form-control" id="launches" disabled={disableFields}
                                           value={ship.launches}/>
                                </div>
                                <div className="col-3">
                                    <label htmlFor="id" className="form-label">Id</label>
                                    <input type="text" className="form-control" id="id" disabled={disableFields}
                                           value={ship.id}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-footer'>
                    <FooterDetails/>
                </div>
            </div>
            {/*<p>{campos}</p>*/}

            {showModal && createPortal(
                <ConfirmeModal onClose={() => setShowModal(false)}/>,
                document.body
            )}

            <br/>

            <br/>
        </div>
    );
}


export default DetalhesShips;
