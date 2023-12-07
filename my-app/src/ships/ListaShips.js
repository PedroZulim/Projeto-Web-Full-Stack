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

function ListaShips() {
    const [controleAcoes, setControleAcoes] = useState([]);
    const [totalRegistro, setTotalRegistro] = useState([]);

    const [shipsLista] = GetAPI('http://localhost:5000/api/ships');

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
    const onBuscarClick = () => {
        setPage(1);
        // forca atualizar lista ships
        setControleAcoes(!controleAcoes);
    };

    useEffect(() => {
        // forca atualizar lista ships
        setControleAcoes(!controleAcoes);
    }, [shipsLista]);

    const shipsPaginada = useMemo(() => {
        let listaFiltro = shipsLista;
        const texto = textoBuscar.current?.value || '';
        if (texto.length > 0) {
            listaFiltro = shipsLista.filter((ship) => {
                return ship.name.toLowerCase().includes(texto.toLowerCase()) ||
                    ('' + ship.year_built).includes(texto.toLowerCase()) ||
                    ship.type.toLowerCase().includes(texto.toLowerCase())
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
                <h1>SpaceX Ships List</h1>
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
                        </th>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Year of Construction</th>
                        <th>Image</th>
                    </tr>
                    </thead>
                    <tbody>
                    {shipsPaginada.length > 0 ? (
                        shipsPaginada.map(ship => (
                            <tr key={ship?._id}>
                                <td>
                                    <Link to={ship?._id}>
                                        {ship?.name}
                                    </Link>
                                </td>
                                <td>{ship?.type}</td>
                                <td>{ship?.year_built}</td>
                                <td>
                                    <img src={ship?.image} width='100' height='100' />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center' }}>Nenhum registro encontrado.</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

            <div className='card-footer'>
                {/*Utilizacao de Context entre PAI e Filho.*/}
                <FooterLista atualizaLista={atualizaLista} page={page} totalRegistro={totalRegistro} limit={limit}/>
            </div>
            <div className='card-footer'>
            </div>

        </div>
    )
}

export default ListaShips;
