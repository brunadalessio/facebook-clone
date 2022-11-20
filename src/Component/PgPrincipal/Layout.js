import { Grid } from '@mui/material';
import React, { Component } from 'react'; // imrc
import LadoEsquerdo from './PainelEsquerdo/LadoEsquerdo';
import './PgPrincipal.css';

// ccc
class PgPrincipal extends Component {
    render() { 
        return (  
            <div className='pgprincipal__container'>
                <Grid container>
                    <Grid item xs={3}>
                        <LadoEsquerdo/>
                    </Grid>
                    <Grid item xs={6}>
                    Meio
                    </Grid>
                    <Grid item xs={3}>
                    Direita
                    </Grid>
                </Grid>
            </div>
        );
    }
}
 
export default PgPrincipal;