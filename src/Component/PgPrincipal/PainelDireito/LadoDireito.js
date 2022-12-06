import React, { Component } from 'react';
import './LadoDireito.css'; 
import ImgLayout from '../ImgLayout';

class LadoDireito extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
         }
    }
    getData=()=>{
        let jsondata = [
            {
                "imagem": "https://64.media.tumblr.com/43b36406ea6f361d5d4f1bb617c36082/1d79c88cfa825fe5-2a/s640x960/74cdf0058b070fd609a47cd42fcbf00dbb0c96d4.jpg",
                "texto": "Bruna D'Aléssio"
            },
            {
                "imagem": "https://64.media.tumblr.com/43b36406ea6f361d5d4f1bb617c36082/1d79c88cfa825fe5-2a/s640x960/74cdf0058b070fd609a47cd42fcbf00dbb0c96d4.jpg",
                "texto": "Bruna D'Aléssio"
            },
            {
                "imagem": "https://64.media.tumblr.com/43b36406ea6f361d5d4f1bb617c36082/1d79c88cfa825fe5-2a/s640x960/74cdf0058b070fd609a47cd42fcbf00dbb0c96d4.jpg",
                "texto": "Bruna D'Aléssio"
            },
            {
                "imagem": "https://64.media.tumblr.com/43b36406ea6f361d5d4f1bb617c36082/1d79c88cfa825fe5-2a/s640x960/74cdf0058b070fd609a47cd42fcbf00dbb0c96d4.jpg",
                "texto": "Bruna D'Aléssio"
            },
            {
                "imagem": "https://64.media.tumblr.com/43b36406ea6f361d5d4f1bb617c36082/1d79c88cfa825fe5-2a/s640x960/74cdf0058b070fd609a47cd42fcbf00dbb0c96d4.jpg",
                "texto": "Bruna D'Aléssio"
            },
            {
                "imagem": "https://64.media.tumblr.com/43b36406ea6f361d5d4f1bb617c36082/1d79c88cfa825fe5-2a/s640x960/74cdf0058b070fd609a47cd42fcbf00dbb0c96d4.jpg",
                "texto": "Bruna D'Aléssio"
            },
            {
                "imagem": "https://64.media.tumblr.com/43b36406ea6f361d5d4f1bb617c36082/1d79c88cfa825fe5-2a/s640x960/74cdf0058b070fd609a47cd42fcbf00dbb0c96d4.jpg",
                "texto": "Bruna D'Aléssio"
            },
            {
                "imagem": "https://64.media.tumblr.com/43b36406ea6f361d5d4f1bb617c36082/1d79c88cfa825fe5-2a/s640x960/74cdf0058b070fd609a47cd42fcbf00dbb0c96d4.jpg",
                "texto": "Bruna D'Aléssio"
            },
        ];
        this.setState({data : jsondata});
    }  

    componentDidMount(){
        this.getData();
    } 

    render() { 
        return ( 
            <div className='ladodireito__container'>
                <div className='ladodireito__header'>
                Contatos
                </div>
                <div className='ladodireito__conteudo'>
                {
                    this.state.data.map((item) => (
                        <ImgLayout imagem={item.imagem} texto={item.texto} />
                    ))
                }
                </div>
            </div>
         );
    }
}
 
export default LadoDireito;