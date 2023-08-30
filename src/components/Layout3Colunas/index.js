import React from 'react';
import './style.css';

function Layout1Coluna({ conteudoEsquerda, conteudoCentro, conteudoDireita }) {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col col-lg-4 col-md-4 col-12'>
                    {conteudoEsquerda}
                </div>
                <div className='col col-lg-4 col-md-4 col-12'>
                    {conteudoCentro}
                </div>
                <div className='col col-lg-4 col-md-4 col-12'>
                    {conteudoDireita}
                </div>
            </div>
        </div>
    );
}

export default Layout1Coluna;
