import React from 'react';
import whastappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';

function TeacherItem(){
  return(
    <article className="teacher-item">
    <header>
      <img src="https://avatars2.githubusercontent.com/u/49041179?s=460&u=b769f1f3c79698be942e4c2d3b90284df2337f07&v=4" alt="Marcos Wergles"/>
      <div>
        <strong>Marcos Wergles</strong>
        <span>Quimica</span>
      </div>
    </header>

    <p>
    Entusiasta das melhores tecnologias de química avançada.
    <br /> <br />
    Apaixonado por explodir coisas em laboratório e por mudar a
     vida das pessoas através de experiências. Mais de 200.000 
     pessoas já passaram por uma das minhas explosões.
    </p>

    <footer>
      <p>
        Preço/Hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whastappIcon} alt="Entre em contato" />
        Entrar em Contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;