import React from 'react';
import styled from "styled-components";

function FooterDetails() {
    return (
        <footer className="footer mt-auto">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-default">Primeiro</button>
                <button type="button" className="btn btn-default">Anterior</button>
                <button type="button" className="btn btn-default">1</button>
                <button type="button" className="btn btn-default">2</button>
                <button type="button" className="btn btn-default">3</button>
                <button type="button" className="btn btn-default">Proximo</button>
                <button type="button" className="btn btn-default">Ultimo</button>
            </div>
        </footer>
    );
}

export default FooterDetails;
