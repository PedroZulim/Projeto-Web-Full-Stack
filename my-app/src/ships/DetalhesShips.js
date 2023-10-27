import GetAPI from "../customHook/GetAPI";
import styled from "styled-components";
import React, {useEffect, useRef} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';

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

    var campos = [];

    if (!ship) {
        return <div>Ship not found</div>;
    }

    Object.keys(ship).forEach(function(key) {
        campos.push(<span><b>{key} </b>{ship[key]} <br/></span>);
    });
    // const roleAtualizado = useRef( );
    //
    // useEffect(() => {
    // 	if(ship) {
    // 		roleAtualizado.current.focus();
    // 	}
    // }, [ship]);

    return (
        <div>
            <br/>

            <div className="card card-default">
                <div className='card-header'>
                    <h2>{ship.name}
                        <span className='float-end'>
							<Link to="/spacex/ships" >
								<button className='btn btn-warning'>
									Voltar
								</button>
							</Link>
						</span>
                    </h2>
                </div>

                <div className='card-body'>
                    <div className='row'>
                        <div className="col-3">
                            <label htmlFor="roles" className="form-label">Roles</label>
                            <input type="text" className="form-control" id="roles" disabled
                                   value={ship.roles}/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="type" className="form-label">Type</label>
                            <input type="text" className="form-control" id="type" disabled
                                   value={ship.type}/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="legacy_id " className="form-label">Legacy Id</label>
                            <input type="text" className="form-control" id="legacy_id " disabled
                                   value={ship.legacy_id }/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="home_port " className="form-label">Home Port</label>
                            <input type="text" className="form-control" id="home_port" disabled
                                   value={ship.home_port }/>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className="col-3">
                            <label htmlFor="last_ais_update" className="form-label">Last Ais Update</label>
                            <input type="text" className="form-control" id="last_ais_update" disabled
                                   value={ship.last_ais_update}/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="model" className="form-label">Model</label>
                            <input type="text" className="form-control" id="model" disabled
                                   value={ship.model}/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="imo " className="form-label">Imo</label>
                            <input type="text" className="form-control" id="imo " disabled
                                   value={ship.imo }/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="mmsi " className="form-label">Mmsi</label>
                            <input type="text" className="form-control" id="mmsi" disabled
                                   value={ship.mmsi }/>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className="col-3">
                            <label htmlFor="abs" className="form-label">Abs</label>
                            <input type="text" className="form-control" id="abs" disabled
                                   value={ship.abs}/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="class" className="form-label">Class</label>
                            <input type="text" className="form-control" id="class" disabled
                                   value={ship.class}/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="mass_kg " className="form-label">Mass Kg</label>
                            <input type="text" className="form-control" id="mass_kg " disabled
                                   value={ship.mass_kg }/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="mass_lbs " className="form-label">Mass Lbs</label>
                            <input type="text" className="form-control" id="mass_lbs" disabled
                                   value={ship.mass_lbs }/>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className="col-3">
                            <label htmlFor="year_built" className="form-label">Year Built</label>
                            <input type="text" className="form-control" id="year_built" disabled
                                   value={ship.year_built}/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="status" className="form-label">Status</label>
                            <input type="text" className="form-control" id="status" disabled
                                   value={ship.status}/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="speed_kn " className="form-label">Speed Kn</label>
                            <input type="text" className="form-control" id="speed_kn " disabled
                                   value={ship.speed_kn }/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="course_deg " className="form-label">Course Deg</label>
                            <input type="text" className="form-control" id="course_deg" disabled
                                   value={ship.course_deg }/>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className="col-3">
                            <label htmlFor="latitude" className="form-label">Latitude</label>
                            <input type="text" className="form-control" id="latitude" disabled
                                   value={ship.latitude}/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="longitude" className="form-label">Longitude</label>
                            <input type="text" className="form-control" id="longitude" disabled
                                   value={ship.longitude}/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="link " className="form-label">Marine Traffic</label>
                            <a target='_blank' className="form-control" id="link " disabled href={ship.link}>
                                {ship.link ? 'Link' : 'Não Tem'}
                            </a>
                        </div>
                        <div className="col-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" disabled
                                   value={ship.name}/>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className="col-3">
                            <label htmlFor="active" className="form-label">Active</label>
                            <input type="text" className="form-control" id="active" disabled
                                   value={ship.active ? 'Sim' : 'Não'}/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="launches" className="form-label">Launches</label>
                            <input type="text" className="form-control" id="launches" disabled
                                   value={ship.launches}/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="id" className="form-label">Id</label>
                            <input type="text" className="form-control" id="id" disabled
                                   value={ship.id}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-6 well">
                            <img src={ship.image} width='400' height='400' className="m-2"></img>
                        </div>
                    </div>
                </div>
                <div className='card-footer'> FOOTTER
                </div>

            </div>
            {/*<p>{campos}</p>*/}

            <br/>

            <br/>
        </div>
    );
}


export default DetalhesShips;
