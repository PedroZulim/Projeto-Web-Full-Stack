import GetAPI from "../customHook/GetAPI";
import styled from "styled-components";
import React, {useEffect, useRef, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import GetImage from "./GetImage";
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

function DetalheRockets() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [rocket] = GetAPI("http://localhost:5000/api/rockets/" + id);

    const [showModal, setShowModal] = useState(false);
    const [disableFields, setDisableFields] = useState(true);
    var campos = [];
    var imagens = [];
    var imagemPagina = "";

    if (!rocket) {
        return <div>Rocket Not Found</div>;
    }

    Object.keys(rocket).forEach(function (key) {
        campos.push(<span><b>{key} </b>{JSON.stringify(rocket[key])} <br/></span>);
    });

    if (rocket.flickr_images) {
        rocket.flickr_images.map(url => (
            imagens.push(<div className="col-4">
                <img src={url} width="300em" height="300em" className="mt-3"></img>
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
                <div className="card-header">
                    <h2>{rocket.name}
                        <small>{rocket.active ? <span className="badge bg-success m-1">Ative</span>
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

							<Link to="/spacex/rockets" className="m-1">
								<button className="btn btn-sm btn-info">
									Back
								</button>
							</Link>
						</span>
                    </h2>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-3">
                            <img src={imagemPagina} width="300em" height="300em"></img>
                            {/*<GetImage/>*/}
                        </div>
                        <div className="col-9">
                            <div className="col-12">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea className="form-control" id="description" disabled={disableFields}
                                          value={rocket.description} rows="3"></textarea>
                            </div>
                            <div className="row">
                                <div className="col-3 mt-1">
                                    <label htmlFor="first_flight" className="form-label">First Flight</label>
                                    <input type="date" className="form-control" id="first_flight"
                                           disabled={disableFields}
                                           value={rocket.first_flight}/>
                                </div>
                                <div className="col-3 mt-1">
                                    <label htmlFor="height" className="form-label">Rocket Height</label>
                                    <input type="text" className="form-control" id="height" disabled={disableFields}
                                           value={`Meters: ${rocket.height?.meters}, Feet: ${rocket.height?.feet}`}/>
                                </div>
                                <div className="col-3 mt-1">
                                    <label htmlFor="feet" className="form-label">Rocket Diameter</label>
                                    <input type="text" className="form-control" id="feet" disabled={disableFields}
                                           value={`Meters: ${rocket.diameter?.meters}, Feet: ${rocket.diameter?.feet}`}/>
                                </div>
                                <div className="col-3 mt-1">
                                    <label htmlFor="feet" className="form-label">Rocket Mass</label>
                                    <input type="text" className="form-control" id="feet" disabled={disableFields}
                                           value={`Kg: ${rocket.mass?.kg}, lb: ${rocket.mass?.lb}`}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 mt-1">
                                    <label htmlFor="landing_legs" className="form-label">Landing Legs</label>
                                    <input type="text" className="form-control" id="landing_legs"
                                           disabled={disableFields}
                                           value={`Number: ${rocket.landing_legs?.number}, Material: ${rocket.landing_legs?.material}`}/>
                                </div>
                                <div className="col-3 mt-1">
                                    <label htmlFor="boosters" className="form-label">Boosters</label>
                                    <input type="text" className="form-control" id="boosters" disabled={disableFields}
                                           value={rocket.boosters}/>
                                </div>
                                <div className="col-3 mt-1">
                                    <label htmlFor="cost_per_launch" className="form-label">Cost Per Launch (USD)</label>
                                    <input type="text" className="form-control" id="cost_per_launch" disabled={disableFields}
                                           value={`US$: ${rocket.cost_per_launch}`}/>
                                </div>
                                <div className="col-3 mt-1">
                                    <label htmlFor="success_rate_pct" className="form-label">Success Rate</label>
                                    <input type="text" className="form-control" id="success_rate_pct" disabled={disableFields}
                                           value={`${rocket.success_rate_pct}%`}/>
                                </div>
                            </div>
                            <div className="card card-body mt-3">
                                <h5 className="fs-5 fw-bold">First Stage</h5>
                                <div className="row">
                                    <div className="col-3 mt-1">
                                        <label htmlFor="thrust_sea_level_first_stage" className="form-label">Thrust Sea
                                            Level</label>
                                        <input type="text" className="form-control" id="thrust_sea_level_first_stage"
                                               disabled={disableFields}
                                               value={`kN: ${rocket.first_stage?.thrust_sea_level.kN}, lbf: ${rocket.first_stage?.thrust_sea_level.lbf}`}/>
                                    </div>
                                    <div className="col-3 mt-1">
                                        <label htmlFor="thrust_vacuum_first_stage" className="form-label">Thrust
                                            Vacuum</label>
                                        <input type="text" className="form-control" id="thrust_vacuum_first_stage"
                                               disabled={disableFields}
                                               value={`kN: ${rocket.first_stage?.thrust_vacuum.kN}, lbf: ${rocket.first_stage?.thrust_vacuum.lbf}`}/>
                                    </div>
                                    <div className="col-3 mt-1">
                                        <label htmlFor="reusable_first_stage" className="form-label">Reusable</label>
                                        <input type="text" className="form-control" id="reusable_first_stage"
                                               disabled={disableFields}
                                               value={rocket.first_stage?.reusable ? "Yes" : "No"}/>
                                    </div>
                                    <div className="col-3 mt-1">
                                        <label htmlFor="engines_first_stage" className="form-label">Engines</label>
                                        <input type="text" className="form-control" id="engines_first_stage"
                                               disabled={disableFields}
                                               value={rocket.first_stage?.engines}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3 mt-1">
                                        <label htmlFor="fuel_amount_tons_first_stage" className="form-label">Fuel Amount
                                            (tons)</label>
                                        <input type="text" className="form-control" id="fuel_amount_tons_first_stage"
                                               disabled={disableFields}
                                               value={rocket.first_stage?.fuel_amount_tons}/>
                                    </div>
                                    <div className="col-3 mt-1">
                                        <label htmlFor="burn_time_sec_first_stage" className="form-label">Burn Time
                                            (sec)</label>
                                        <input type="text" className="form-control" id="burn_time_sec_first_stage"
                                               disabled={disableFields}
                                               value={rocket.first_stage?.burn_time_sec}/>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-body mt-3">
                                <h5 className="fs-5 fw-bold">Second Stage</h5>
                                <div className="row">
                                    <div className="col-3 mt-1">
                                        <label htmlFor="thrust" className="form-label">Thrust</label>
                                        <input type="text" className="form-control" id="thrust"
                                               disabled={disableFields}
                                               value={`kN: ${rocket.second_stage?.thrust.kN}, lbf: ${rocket.second_stage?.thrust.lbf}`}/>
                                    </div>
                                    <div className="col-3 mt-1">
                                        <label htmlFor="composite_fairing_height" className="form-label">Composite
                                            Fairing -
                                            Height</label>
                                        <input type="text" className="form-control" id="composite_fairing_height"
                                               disabled={disableFields}
                                               value={`Meters: ${rocket.second_stage?.payloads.composite_fairing.height.meters}, Feet: ${rocket.second_stage?.payloads.composite_fairing.height.feet}`}/>
                                    </div>
                                    <div className="col-3 mt-1">
                                        <label htmlFor="composite_fairing_diameter" className="form-label">Composite
                                            Fairing
                                            - Diameter</label>
                                        <input type="text" className="form-control" id="composite_fairing_diameter"
                                               disabled={disableFields}
                                               value={`Meters: ${rocket.second_stage?.payloads.composite_fairing.diameter.meters}, Feet: ${rocket.second_stage?.payloads.composite_fairing.diameter.feet}`}/>
                                    </div>
                                    <div className="col-3 mt-1">
                                        <label htmlFor="reusable_second_stage" className="form-label">Reusable</label>
                                        <input type="text" className="form-control" id="reusable_second_stage"
                                               disabled={disableFields}
                                               value={rocket.second_stage?.reusable ? "Yes" : "No"}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3 mt-1">
                                        <label htmlFor="engines_second_stage" className="form-label">Engines</label>
                                        <input type="text" className="form-control" id="engines_second_stage"
                                               disabled={disableFields}
                                               value={rocket.second_stage?.engines}/>
                                    </div>
                                    <div className="col-3 mt-1">
                                        <label htmlFor="fuel_amount_tons_second_stage" className="form-label">Fuel
                                            Amount
                                            (tons)</label>
                                        <input type="text" className="form-control" id="fuel_amount_tons_second_stage"
                                               disabled={disableFields}
                                               value={rocket.second_stage?.fuel_amount_tons}/>
                                    </div>
                                    <div className="col-3 mt-1">
                                        <label htmlFor="burn_time_sec_second_stage" className="form-label">Burn Time
                                            (sec)</label>
                                        <input type="text" className="form-control" id="burn_time_sec_second_stage"
                                               disabled={disableFields}
                                               value={rocket.second_stage?.burn_time_sec}/>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-body mt-3">
                                <h5 className="fs-5 fw-bold">Engines</h5>
                                <div className="row">
                                    <div className="col-3 mt-1">
                                        <label htmlFor="isp_sea_level" className="form-label">Isp - Sea Level</label>
                                        <input type="text" className="form-control" id="isp_sea_level"
                                               disabled={disableFields}
                                               value={rocket.engines?.isp.sea_level}/>
                                    </div>
                                    <div className="col-3 mt-1">
                                        <label htmlFor="isp_vacuum" className="form-label">Isp - Vacuum</label>
                                        <input type="text" className="form-control" id="isp_vacuum"
                                               disabled={disableFields}
                                               value={rocket.engines?.isp.vacuum}/>
                                    </div>
                                    <div className="col-3 mt-1">
                                        <label htmlFor="engines_number" className="form-label">Number</label>
                                        <input type="text" className="form-control" id="engines_number"
                                               disabled={disableFields}
                                               value={rocket.engines?.number}/>
                                    </div>
                                    <div className="col-3 mt-1">
                                        <label htmlFor="engines_type" className="form-label">Type</label>
                                        <input type="text" className="form-control" id="engines_type"
                                               disabled={disableFields}
                                               value={rocket.engines?.type}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3 mt-1">
                                        <label htmlFor="engines_version" className="form-label">Version</label>
                                        <input type="text" className="form-control" id="engines_version"
                                               disabled={disableFields}
                                               value={rocket.engines?.version}/>
                                    </div>
                                    <div className="col-3 mt-1">
                                        <label htmlFor="engines_layout" className="form-label">Layout</label>
                                        <input type="text" className="form-control" id="engines_layout"
                                               disabled={disableFields}
                                               value={rocket.engines?.layout}/>
                                    </div>
                                    <div className="col-3 mt-1">
                                        <label htmlFor="engine_loss_max" className="form-label">Engine Loss Max</label>
                                        <input type="text" className="form-control" id="engine_loss_max"
                                               disabled={disableFields}
                                               value={rocket.engines?.engine_loss_max}/>
                                    </div>
                                    <div className="col-3 mt-1">
                                        <label htmlFor="engines_propellant_1" className="form-label">Propellant
                                            1</label>
                                        <input type="text" className="form-control" id="engines_propellant_1"
                                               disabled={disableFields}
                                               value={rocket.engines?.propellant_1}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3 mt-1">
                                        <label htmlFor="engines_propellant_2" className="form-label">Propellant
                                            2</label>
                                        <input type="text" className="form-control" id="engines_propellant_2"
                                               disabled={disableFields}
                                               value={rocket.engines?.propellant_2}/>
                                    </div>
                                    <div className="col-3 mt-1">
                                        <label htmlFor="engines_thrust_to_weight" className="form-label">Thrust to
                                            Weight</label>
                                        <input type="text" className="form-control" id="engines_thrust_to_weight"
                                               disabled={disableFields}
                                               value={rocket.engines?.thrust_to_weight}/>
                                    </div>
                                </div>
                            </div >
                            {/*<div className="card card-body mt-3">*/}
                            {/*    <h5 className="fs-5 fw-bold">Payload Weights</h5>*/}
                            {/*    <div className="row">*/}
                            {/*        <div className="row">*/}
                            {/*            <div className="col-3 mt-1">*/}
                            {/*                <label htmlFor="landing_legs" className="form-label">Id</label>*/}
                            {/*                <input type="text" className="form-control" id="landing_legs"*/}
                            {/*                       disabled={disableFields}*/}
                            {/*                       value={rocket.payload_weights?.id}/>*/}
                            {/*            </div>*/}
                            {/*            <div className="col-3 mt-1">*/}
                            {/*                <label htmlFor="height" className="form-label">Rocket Height</label>*/}
                            {/*                <input type="text" className="form-control" id="height" disabled={disableFields}*/}
                            {/*                       value={`Meters: ${rocket.height?.meters}, Feet: ${rocket.height?.feet}`}/>*/}
                            {/*            </div>*/}
                            {/*            <div className="col-3 mt-1">*/}
                            {/*                <label htmlFor="feet" className="form-label">Rocket Diameter</label>*/}
                            {/*                <input type="text" className="form-control" id="feet" disabled={disableFields}*/}
                            {/*                       value={`Meters: ${rocket.diameter?.meters}, Feet: ${rocket.diameter?.feet}`}/>*/}
                            {/*            </div>*/}
                            {/*            <div className="col-3 mt-1">*/}
                            {/*                <label htmlFor="feet" className="form-label">Rocket Mass</label>*/}
                            {/*                <input type="text" className="form-control" id="feet" disabled={disableFields}*/}
                            {/*                       value={`Kg: ${rocket.mass?.kg}, lb: ${rocket.mass?.lb}`}/>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <FooterDetails/>
                </div>

            </div>
            <br/>

            <div className="card card-default">
                <div className="card-header">
                    <h2>Images
                    </h2>
                </div>

                <div className="card-body">
                    <div className="row">
                        {imagens}
                    </div>

                </div>
                <div className="card-footer">
                    <FooterDetails/>
                </div>

            </div>

            {/*<p>{campos}</p>*/}

            {showModal && createPortal(
                <ConfirmeModal onClose={() => setShowModal(false)}/>,
                document.body
            )}
        </div>
    );
}


export default DetalheRockets;
