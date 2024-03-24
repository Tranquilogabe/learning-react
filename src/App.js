import React, {Component} from 'react';
import './estilo.css';

class App extends Component{


  constructor(props){
    super(props);

    this.state= { textoFrase: ''};

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [ 'O sol brilha forte no céu azul.', 'O aroma das flores invadiu o jardim.', 'O vento sussurra segredos entre as folhas.', 'As estrelas cintilam na escuridão da noite.', 'O rio serpenteia pelas montanhas, rumo ao desconhecido.'
    ];
  }

  quebraBiscoito(){
      let state = this.state;
      let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
      state.textoFrase = ' " ' + this.frases[numeroAleatorio] + '"' ;
      this.setState(state);
  }



  render(){

      return( 
      <div className='container'>
           <img src={require('./assets/biscoito.png')} className='img'/>
           <Botao nome="abrir biscoito" acaoBtn={this.quebraBiscoito}/>
           <h3 className='textoFrase'>{this.state.textoFrase}</h3>
      </div>
     );

  }
}

class Botao extends Component{
  render(){
    return(
      <div>
          <button onClick={this.props.acaoBtn} >Botao</button>
      </div>
    );
  }
}

export default  App;