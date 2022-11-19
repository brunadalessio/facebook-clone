import React, { Component } from 'react';
import './Navbar.css';
import {Grid} from '@mui/material';
import fblogo from '../../img/logo.png';
import inicio from '../../img/home.svg';
import pagina from '../../img/pages.svg';
import assistir from '../../img/watch.svg';
import mercado from '../../img/market.svg';
import grupo from '../../img/groups.svg';

class Navbar extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <Grid container className='navbar__principal'>
                    <Grid item xs ={3}>
                        <div className='navbar__leftbar'>
                            <img className='navbar__logo' src={fblogo} width='40px' alt='Facebook Logo'/>
                            <input className='navbar__buscar' type='text' placeholder='Pesquisar no Facebook'/>
                        </div>
                    </Grid>
                    <Grid item xs ={6}>
                       <div className='navbar__container'>
                            <div className='navbar__abas ativo'>
                                <img width='35px' height='35px' src={inicio} alt='Página Inicial'/>
                            </div>
                            <div className='navbar__abas'>
                                <img width='35px' height='35px' src={pagina} alt='Página'/>
                            </div>
                            <div className='navbar__abas'>
                                <img width='35px' height='35px' src={assistir} alt='Assistir'/>
                            </div>
                            <div className='navbar__abas'>
                                <img width='35px' height='35px' src={mercado} alt='Mercado'/>
                            </div>
                            <div className='navbar__abas'>
                                <img width='35px' height='35px' src={grupo} alt='Grupo'/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs ={3}>
                        Navegação de perfil
                    </Grid>
                </Grid>
            </div>
        );
    }
}
 
export default Navbar ;