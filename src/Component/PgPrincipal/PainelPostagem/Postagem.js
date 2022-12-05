import React, { Component } from 'react';
import { Avatar, Paper } from '@mui/material';
// import postagem from '../../../img/post.jpeg';
import curtir from '../../../img/like.png';
import btncurtir from '../../../img/likebutton.png';
import btncomentar from '../../../img/comment.png';
import btncompartilhar from '../../../img/share.png';


class Postagem extends Component {
    ImagemPostagemDisponivel=(data)=>{
        return data===""?false:true;
    }
    ImagemAvatarDisponivel=(data)=>{
        return data===""?false:true;
    }
    render() { 
        return ( 
            <Paper className='postagem__container'>
                {/* Header */}
                <div  className='postagem__header'>
                    <div className='postagem__header_img'>
                        {
                            this.ImagemAvatarDisponivel(this.props.obj.usuario_imagem) ? <Avatar className='postagem__pp' src={this.props.obj.usuario_imagem}/> : <Avatar className='postagem__pp'/>
                        }
                    </div>
                    <div className='postagem__header_texto'>
                        {this.props.obj.usuario_nome}
                    </div>
                </div>
                {/* Descrição */}
                <div className='postagem__descricao'>
                    {this.props.obj.descricao}
                </div>
                {/* Imagem da Postagem */}
                <div className='postagem__imagem'>
                    {
                        this.ImagemPostagemDisponivel(this.props.obj.postagem_imagem) ? <img src={this.props.obj.postagem_imagem} alt='Imagem da Postagem' width='600px'/> : <span></span>
                    }
                </div>
                {/* Curtidas */}
                <div className='postagem__curtidas'>
                    <div className='postagem__curtida'>
                        <img className='postagem__icone' alt='Curtir' src={curtir}/>
                    </div>
                    <div className='postagem__contagem'>
                        {this.props.obj.curtida}
                    </div>
                </div>
                {/* Compartilhamento */}
                <div className='postagem__compartilhamento'>
                    <div className='postagem__aba'>
                        <div className='postagem__primeira_aba'>
                            <img className='postagem__img_aba' alt='Curtir' src={btncurtir}/>
                        </div>
                        <div className='postagem__texto_aba'>
                            Curtir
                        </div>
                    </div>
                    <div className='postagem__aba'>
                        <div className='postagem__primeira_aba'>
                            <img className='postagem__img_aba' alt='Comentar' src={btncomentar}/>
                        </div>
                        <div className='postagem__texto_aba'>
                            Comentar
                        </div>
                    </div>
                    <div className='postagem__aba'>
                        <div className='postagem__primeira_aba'>
                            <img className='postagem__img_aba' alt='Compartilhar' src={btncompartilhar}/>
                        </div>
                        <div className='postagem__texto_aba'>
                            Compartilhar
                        </div>
                    </div>
                </div>
                {/* Comentarios */}
                <div className='postagem__comentario'>
                    <div className='carregar_topo'>
                        <div>
                            <Avatar className='carregar__imagem' src='https://64.media.tumblr.com/43b36406ea6f361d5d4f1bb617c36082/1d79c88cfa825fe5-2a/s640x960/74cdf0058b070fd609a47cd42fcbf00dbb0c96d4.jpg'/>
                        </div>
                        <div>
                            <input className='carregar__postagem' type='text' placeholder='Escreva um comentário...'/>
                        </div>
                    </div>
                </div>
            </Paper>
         );
    }
}
 
export default Postagem;