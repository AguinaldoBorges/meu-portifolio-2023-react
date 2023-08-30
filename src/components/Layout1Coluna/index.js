import React from 'react';
import './style.css';

function Layout1Coluna({ conteudo }) {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col col-12'>
                    {conteudo}
                </div>
            </div>
        </div>
    );
}

export default Layout1Coluna;
