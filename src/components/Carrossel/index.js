import './style.css';

function Carrossel({ imagens }) {

    return (
        <div className="container-fluid carrossel">
            <div id="carouselExampleSlidesOnly skills" class="carousel slide row" data-bs-ride="carousel">
                <div class="carousel-inner col" id='carrossel-box'>
                    <div class="carousel-item active">
                        <img src={imagens[0]} class="d-block w-100" alt="imagem da skill" />
                    </div>
                    {
                        imagens.slice(1, imagens.length).map((item) => {
                            return <div class="carousel-item ">
                                <img src={item} class="d-block w-100" alt="imagem da skill" />
                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    );
}

export default Carrossel;
