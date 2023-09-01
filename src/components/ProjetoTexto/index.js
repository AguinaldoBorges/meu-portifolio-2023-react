import React from 'react';
import './style.css';

function ProjetoTexto({ projeto }) {
    return (
        <>
            <div className='col col-12' id='projeto-texto'>
                <h2>
                    {projeto.title}
                </h2>
                <h4>
                    {projeto.technologies}
                </h4>
                <p>
                    {projeto.description}
                </p>
                <div className='container-fluid'>
                    <div className='row d-flex justify-content-start'>
                        <div className='col col-lg-4 col-md-5 col-12'>
                            <a className='btn btn-dark text-warning botao-projeto' href={projeto.links[0].url} target='_blank'>{projeto.links[0].label}</a>
                        </div>
                        {projeto.links[1] ?
                            <div className='col col-lg-4 col-md-5 col-12'>
                                <a className='btn btn-dark text-warning botao-projeto' href={projeto.links[1].url} target='_blank'>{projeto.links[1].label}</a>
                            </div>
                            :
                            ''}
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProjetoTexto;
