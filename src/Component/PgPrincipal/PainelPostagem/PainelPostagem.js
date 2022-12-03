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
                'usuario_imagem': "",
                'usuario_nome': "Bruna D'Aléssio",
                'descricao': "Teste 1",
                'postagem_imagem': "",
                "curtida": "25"
            },
            {
                'postagem_id': 2,
                'usuario_id': 2,
                'usuario_imagem': "",
                'usuario_nome': "Aline Targino",
                'descricao': "Teste 2",
                'postagem_imagem': "",
                "curtida": "13"
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