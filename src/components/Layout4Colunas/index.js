import React from 'react';
import './style.css';

function Layout1Coluna({ conteudoEsquerda, conteudoCentroEsquerda, conteudoCentroDireita, conteudoDireita }) {
    return (
        <div className='container-fluid' id='layout-esquerda'>
            <div className='row'>
                <div className='col col-lg-3 col-md-3 col-12'>
                    {conteudoEsquerda}
                </div>
                <div className='col col-lg-3 col-md-3 col-12'>
                    {conteudoCentroEsquerda}
                </div>
                <div className='col col-lg-3 col-md-3 col-12'>
                    {conteudoCentroDireita}
                </div>
                <div className='col col-lg-3 col-md-3 col-12'>
                    {conteudoDireita}
                </div>
            </div>
        </div>
    );
}

export default Layout1Coluna;
