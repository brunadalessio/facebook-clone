import React, { Component } from 'react';
import Status from './Status';
import './StatusPainel.css';

class StatusPainel extends Component {
    render() { 
        return ( 
            <div className='statuspainel_container'>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                {/* <Status/>
                <Status/> */}
            </div>
         );
    }
}
 
export default StatusPainel;