import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://www.flaticon.com/svg/static/icons/svg/702/702013.svg" 
          nome="Bianca" 
          descricao="Oie, eu sou a Bianca. Estudante da Labenu. Adoro pedir pizza na sexta-feira e pra compensar corro aos finais de semana, trabalhava com moda e agora to migrando pra programação!."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
        imagem= "https://www.flaticon.com/svg/static/icons/svg/3616/3616474.svg"
        nome= "Email:"
        descricao= "bianca.dev@labenumenota.com.br"
        />

        <CardPequeno
        imagem= "https://www.flaticon.com/svg/static/icons/svg/3617/3617276.svg"
        nome= "Endereço:"
        descricao= "Rua Labenu, 10"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências pessoais</h2>
        <CardGrande 
          imagem="https://www.flaticon.com/svg/static/icons/svg/1382/1382073.svg" 
          nome="Criadora de jingles" 
          descricao="Crio jingles ruins para atividades do dia a dia" 
        />
        
        <CardGrande 
          imagem="https://www.flaticon.com/svg/static/icons/svg/1456/1456703.svg" 
          nome="Facilitadora de escolhas" 
          descricao="Expert em escolher filmes em streaming em 05 minutos" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
