import React, {useEffect, useState} from 'react';

function FooterDetails(props) {
    // acoes dos botoes da pagina
    const primeira = () => {
        // Chama funcao no PAI para atualizar lista
        props.atualizaLista(1);
    }
    const anterior = () => {
        // Chama funcao no PAI para atualizar lista
        props.atualizaLista(props.page - 1);
    }
    const pagina = (numeroPagina) => {
        // Chama funcao no PAI para atualizar lista
        props.atualizaLista(numeroPagina);
    }
    const proxima = () => {
        // Chama funcao no PAI para atualizar lista
        props.atualizaLista(props.page + 1);
    }
    const ultima = () => {
        // Chama funcao no PAI para atualizar lista
        props.atualizaLista(totalPagina);
    }

    const [totalPagina, setTotalPagina] = useState(0);
    const [listaPaginas, setListaPaginas] = useState([]);

    useEffect(() => {
        // Atualiza lista de pagina
        let totalPagina = Math.ceil( props.totalRegistro / props.limit);
        setTotalPagina(totalPagina);
        const listaPaginas = [];
        for (let i = (props.page - 2); i < (props.page + 2); i++) {
            if (i >= 0 && i < (totalPagina)) {
                listaPaginas.push(i + 1);
            }
        }
        setListaPaginas(listaPaginas);
    }, [props.totalRegistro, props.page]);


    return (
        <footer className="footer mt-auto" hidden={props.atualizaLista}>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-default btn-outline-dark" onClick={() => {
                    primeira()
                }} disabled={props.page === 1}>Primeiro
                </button>

                <button type="button" className="btn btn-default btn-outline-dark" onClick={() => {
                    anterior()
                }} disabled={props.page === 1}>Anterior
                </button>

                {listaPaginas.map((value) => {
                    // Botoes intermediario -2 e +2
                    return <button key={value} type="button" className="btn btn-default btn-outline-dark" onClick={() => {
                        pagina(value)
                    }} disabled={props.page === value}>{value}</button>
                })}

                <button type="button" className="btn btn-default btn-outline-dark" onClick={() => {
                    proxima()
                }} disabled={props.page === totalPagina}>Proximo
                </button>

                <button type="button" className="btn btn-default btn-outline-dark" onClick={() => {
                    ultima()
                }} disabled={props.page === totalPagina}>Ultimo
                </button>
            </div>

            <div className='float-end'>
                Total de {props.totalRegistro} registros. {props.page} / {totalPagina} Paginas
            </div>
        </footer>
    );
}

export default FooterDetails;
