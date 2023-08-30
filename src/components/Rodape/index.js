import React from 'react';
import './style.css';

function Footer({ tituloEsquerda, textoEsquerda, tituloCentro, linksCentro, tituloDireita, textoDireita, copyright, redesSociais }) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <h5>{tituloEsquerda}</h5>
                        <p>{textoEsquerda}</p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h5>{tituloCentro}</h5>
                        <ul className="list-unstyled">
                            {linksCentro.map((item, index) => (
                                <li key={index}>
                                    <a href={item.url} className="text-white">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <h5>{tituloDireita}</h5>
                        <p>{textoDireita}</p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 text-center">
                        <ul className="list-inline social-icons">
                            {redesSociais ? redesSociais.map((item, index) => (
                                <li className="list-inline-item" key={index}>
                                    <a href={item.url} className="text-white">
                                        <i className={item.icon}></i>
                                    </a>
                                </li>
                            )) : ''}
                        </ul>
                        <p className="footer-copyright">
                            &copy; {new Date().getFullYear()} {copyright}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
