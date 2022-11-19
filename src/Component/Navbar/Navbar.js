import React, { Component } from 'react';
import './Navbar.css';
import {Grid} from '@mui/material';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <div>
                <Grid container>
                    <Grid item xs ={3}>
                        Esquerd
                    </Grid>
                    <Grid item xs ={6}>
                        Meio
                    </Grid>
                    <Grid item xs ={3}>
                        Direito
                    </Grid>
                </Grid>
            </div>
        );
    }
}
 
export default Navbar ;