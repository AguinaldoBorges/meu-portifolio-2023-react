import React from 'react';
import './style.css';

function Layout1Coluna({ conteudoEsquerda, conteudoDireita, bootstrap, css, idLayout }) {
    return (
        <div className={`container-fluid ${bootstrap}`} id={idLayout}>
            {css}
            <div className='row'>
                <div className='col col-lg-6 col-md-12 col-12'>
                    {conteudoEsquerda}
                </div>
                <div className='col col-lg-6 col-md-12 col-12'>
                    {conteudoDireita}
                </div>
            </div>
        </div>
    );
}

export default Layout1Coluna;
