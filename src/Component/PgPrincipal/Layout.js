import { Grid } from '@mui/material';
import React, { Component } from 'react'; // imrc
import LadoEsquerdo from './PainelEsquerdo/LadoEsquerdo';
import './PgPrincipal.css';
import Postagens from './Postagens/Postagens';
import StatusPainel from './StatusPainel/StatusPainel';
// ccc
class PgPrincipal extends Component {
    render() { 
        return (  
            <div className='pgprincipal__container'>
                <Grid container>
                    <Grid item xs={3}>
                        <LadoEsquerdo/>
                    </Grid>
                    <Grid item xs={6} className='meio__container'>
                        <StatusPainel/>
                        <Postagens/>
                    </Grid>
                    <Grid item xs={3}>
                        Contatos
                    </Grid>
                </Grid>
            </div>
        );
    }
}
 
export default PgPrincipal;