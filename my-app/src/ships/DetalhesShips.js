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
                            <label htmlFor="roles" className="form-label">Roles </label>
                            <input type="email" className="form-control" id="roles" disabled
                                   value={ship.roles}/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="roles" className="form-label">Roles </label>
                            <input type="email" className="form-control" id="roles" disabled
                                   value={ship.roles}/>
                        </div>
                        <div className="col-3">
                            <label htmlFor="roles" className="form-label">Roles </label>
                            <input type="email" className="form-control" id="roles" disabled
                                   value={ship.roles}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-6 well">

                            <img src={ship.image} width='400' height='400'></img>
                        </div>
                    </div>
                </div>
                <div className='card-footer'> FOOTTER
                </div>

            </div>
            <p>{campos}</p>


            <br/>

            <br/>
        </div>
    );
}


export default DetalhesShips;
