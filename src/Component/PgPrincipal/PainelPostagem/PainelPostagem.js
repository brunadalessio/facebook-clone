import React, { Component } from 'react';
import './PainelPostagem.css';
import Postagem from './Postagem';

class PainelPostagem extends Component {
    render() { 
        return ( 
            <div>
                <Postagem/>
                <Postagem/>
                <Postagem/>
                <Postagem/>
                <Postagem/>
            </div>

         );
    }
}
 
export default PainelPostagem;