import { useState } from 'react';

import sofaImg from '../../assets/sofaImg.png';
import Vector360 from '../../assets/Vector360.png';
import sofagif from '../../assets/SofaboraCodar.gif';

import { Container } from "./styles";

export function Home() {
  const [imageView, setImageView] = useState(sofaImg);

  const changeView = () => {
    setImageView((prev) => {
      if (prev !== sofaImg) {
        return sofaImg;
      }
      return sofagif;
    })
  }

  return (
    <Container>
      <div className="sofa-image">
        <img
          onClick={() => changeView()}
          className='vector360'
          src={Vector360}
          alt="vetor 360"
        />
        <img src={imageView} alt="Imagem sofá" />
      </div>
      <div className="description">
        <span className="code">CÓDIGO: 42404</span>
        <span className="tilte">Sofá Margot II - Rosé</span>
        <span className="price">R$ 4.000 </span>
        <button>ADICIONAR À CESTA</button>
      </div>
    </Container>
  )
}