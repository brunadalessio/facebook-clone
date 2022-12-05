import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import './PgPrincipal.css';

class ImgLayout extends Component {
    render() { 
        return ( 
            <div className='imglayout__container'>
                <div className='imglayout__imglay'>
                    <Avatar className='imglayout__img' src={this.props.imagem}/>
                </div>
                <div className='imglayout__texto'>
                    {this.props.texto}
                </div>
            </div>
         );
    }
}
 
export default ImgLayout;