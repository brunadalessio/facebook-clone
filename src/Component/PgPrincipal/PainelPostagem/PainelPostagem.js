import React, { Component } from 'react';
import './PainelPostagem.css';
import Postagem from './Postagem';

class PainelPostagem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
         }
    }
    getData=()=>{
        let json=[
            {
                'postagem_id': 1,
                'usuario_id': 1,
                'usuario_imagem': "https://64.media.tumblr.com/43b36406ea6f361d5d4f1bb617c36082/1d79c88cfa825fe5-2a/s640x960/74cdf0058b070fd609a47cd42fcbf00dbb0c96d4.jpg",
                'usuario_nome': "Bruna D'Aléssio",
                'descricao': "Amo essa foto!",
                'postagem_imagem': "https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg",
                "curtida": "113"
            },
            {
                'postagem_id': 2,
                'usuario_id': 2,
                'usuario_imagem': "",
                'usuario_nome': "Fulano Teste",
                'descricao': "Boa noite a todos.",
                'postagem_imagem': "",
                "curtida": "8"
            }
        ]

        this.setState({data : json});
    }

    componentDidMount(){
        this.getData();
    } 
    render() { 
        return ( 
            <div>
                {
                    this.state.data.map((item)=>(
                        <Postagem obj={item}/> 
                    ))
                }
            </div>

         );
    }
}
 
export default PainelPostagem;