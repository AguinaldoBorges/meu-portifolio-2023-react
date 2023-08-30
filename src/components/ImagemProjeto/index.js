import { React, useState } from 'react';
import './style.css';

function ImagemProjeto({ url }) {
    const [estatica, setEstatica] = useState(true)
    return (
        <div onMouseMove={() => setEstatica(false)} onMouseOut={() => setEstatica(true)}>
            {estatica ?
                <img src={`${process.env.PUBLIC_URL}${url}`} alt="imagem do projeto" id='imagem-do-projeto' />
                :
                <img src={`${process.env.PUBLIC_URL}${url.slice(0, -4) + '.gif'}`} alt="imagem do projeto" id='imagem-do-projeto' />
            }

            <h3 id='imagem-do-projeto-texto'>
                <span class="badge text-bg-warning">Toque na imagem</span>
            </h3>
        </div>

    );
}

export default ImagemProjeto;
