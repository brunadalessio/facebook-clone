import React, { Component } from 'react';
import { Avatar, Paper } from '@mui/material';
import postagem from '../../../img/post.jpeg';
import curtir from '../../../img/like.png';

class Postagem extends Component {
    render() { 
        return ( 
            <Paper className='postagem__container'>
                {/* Header */}
                <div  className='postagem__header'>
                    <div className='postagem__header_img'>
                        <Avatar className='postagem__pp'/>
                    </div>
                    <div className='postagem__header_texto'>
                        Bruna D'Aléssio
                    </div>
                </div>
                {/* Descrição */}
                <div className='postagem__descricao'>
                    Bom dia!
                </div>
                {/* Imagem da Postagem */}
                <div className='postagem__imagem'>
                    <img src={postagem} alt='Imagem da Postagem' width='600px'/>
                </div>
                {/* Curtidas */}
                <div className='postagem__curtidas'>
                    <div className='postagem__curtida'>
                        <img className='postagem__icone' alt='Curtir' src={curtir}/>
                    </div>
                    <div className='postagem__contagem'>
                        14
                    </div>
                </div>
                {/* Compartilhamento */}
                {/* Comentarios */}
            </Paper>
         );
    }
}
 
export default Postagem;