import React, { Component } from 'react';
import './Postagens.css';
import { Paper, Avatar } from '@mui/material';
import aovivo from '../../../img/video.png';
import imagem from '../../../img/image.png';
import atividades from '../../../img/feelings.png';

class Postagens extends Component {
    render() { 
        return ( 
            <div>
                <Paper className='carregar__container'>
                <div className='carregar_topo'>
                    <div>
                        <Avatar className='carregar__imagem'/>
                    </div>
                    <div>
                        <input className='carregar__postagem' type='text' placeholder='No que você está pensando, Bruna?'/>
                    </div>
                </div>
                    <div className='carregar__botao'>
                        <div className='carregar__abas'>
                            <img src={aovivo} width='35px' alt='Vídeo ao vivo'/>
                            <div className='carregar__texto'>Vídeo ao vivo</div>
                        </div>
                        <div className='carregar__abameio'>
                            <img src={imagem} width='35px' alt='Foto/Vídeo'/>
                            <div className='carregar__texto'>Foto/Vídeo</div>
                        </div>
                        <div className='carregar__abas'>
                            <img src={atividades} width='35px' alt='Sentimento/Atividade'/>
                            <div className='carregar__texto'>Sentimento/Atividade</div>
                        </div>
                    </div>
                </Paper>
            </div>
         );
    }
}
 
export default Postagens;