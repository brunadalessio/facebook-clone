import React, { Component } from 'react';
import ImgLayout from '../ImgLayout';
import './LadoEsquerdo.css';
import covid from '../../../img/covid.png';
import amigos from '../../../img/groups.png';
import grupos from '../../../img/grupos.png';
import lembrancas from '../../../img/memories.png';
import mercado from '../../../img/mercado.png';
import assistir from '../../../img/assistir.png';
import adm from '../../../img/admanager.png';
import ads from '../../../img/ads.png';
import msgkids from '../../../img/messengerkids.png';
import doacao from '../../../img/blood.png';

class LadoEsquerdo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
         }
    }
    getData=()=>{
        let jsondata = [
            {
                "imagem": "",
                "texto": "Bruna D'Aléssio"
            },
            {
                "imagem": amigos,
                "texto": "Amigos"
            },
            {
                "imagem": grupos,
                "texto": "Grupos"
            },
            {
                "imagem": mercado,
                "texto": "Marketplace"
            },
            {
                "imagem": assistir,
                "texto": "Watch"
            },
            {
                "imagem": lembrancas,
                "texto": "Lembranças"
            },
            {
                "imagem": ads,
                "texto": "Central de Anúncios"
            },
            {
                "imagem": covid,
                "texto": "COVID-19: Central de Informações"
            },
            {
                "imagem": doacao,
                "texto": "Doações de Sangue"
            },
            {
                "imagem": adm,
                "texto": "Gerenciador de Anúncios"
            },
            {
                "imagem": msgkids,
                "texto": "Messenger Kids"
            },
        ];
        this.setState({data : jsondata});
    }  

    componentDidMount(){
        this.getData();
    } 
    render() { 
        return ( 
            <div>
            {
                this.state.data.map((item) => (
                    <ImgLayout imagem={item.imagem} texto={item.texto} />
                ))
            }
            </div>
         );
    }
}
 
export default LadoEsquerdo;