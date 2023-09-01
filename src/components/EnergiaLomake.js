import React, { useState } from 'react';

import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import ClearIcon from '@mui/icons-material/Clear';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


import axios from 'axios';

const url = 'https://open-price-production.up.railway.app';

function EnergiaLomake () {
    const [energia, setEnergia] = useState({
      merkki: '',  
      nimi: '',
      maku: '',
      arvosana: '',
      arvostelu: ''
    });

    const [viesti, setViesti] = useState('');
  
    const muuta = (e) => {
       setEnergia({
         ...energia,
         [e.target.name]: e.target.value
       });
     };

  
    const lisaaEnergia = (e) => {
      const formData = {
        merkki: energia.merkki,
        nimi: energia.nimi,
        maku: energia.maku,
        arvosana: energia.arvosana,
        arvostelu: energia.arvostelu,
        dippivalinta: energia.dippivalinta
      }

      axios.post(url + '/api/energiat', formData)
        .then(response => {
            if (response.status === 200) {
                setEnergia({
                  merkki: '',
                  nimi: '',
                  maku: '',
                  arvosana: '',
                  arvostelu: ''
                });
                setViesti('Lisättiin');
            } else {
                setViesti('Lisäys ei onnistunut');
              }
        })

    }

    const tyhjenna = (e) => {
      setEnergia({
        merkki: '',  
        nimi: '',
        maku: '',
        arvosana: '',
        arvostelu: ''
      });
  
      setViesti('');
    }

    return (
      <div>   
        <Paper sx={ {padding:'10px', margin:'10px'} }>
        <h2>Lisää uusi energiajuoma-arvostelu:</h2>  
        <form>
    
          <TextField label='Valmistaja' name='merkki' value={ energia.merkki }
            onChange={ (e) => muuta(e) } style = {{width: '20%'}}/>
        
          <TextField label='Nimi' name='nimi' value={ energia.nimi }
            onChange={ (e) => muuta(e) } style = {{width: '20%'}}/>
        
          <TextField label='Maku' name='maku' value={ energia.maku }
            onChange={ (e) => muuta(e) } style = {{width: '20%'}}/>
        
          <TextField label='Arvosana' name='arvosana' value={ energia.arvosana }
            onChange={ (e) => muuta(e) } style = {{width: '20%'}}/>   
            
          <TextField label='Arvostelu' name='arvostelu' value={ energia.arvostelu }
            onChange={ (e) => muuta(e) } style = {{width: '20%'}}/>           
    
          <Box sx={ {textAlign: 'center'} }>
            <Button onClick={ (e) => lisaaEnergia(e) } variant='contained' sx={ {marginRight:3} } startIcon={ <CreateIcon /> }>Lisää</Button>
            <Button onClick={ (e) => tyhjenna(e) } variant='contained' color='secondary' startIcon={ <ClearIcon /> }>Tyhjennä</Button>
          </Box>
        </form>
        <Typography sx={ {marginTop: 3} }>{ viesti }</Typography>
        </Paper>
      </div>
      

    );
  
}
export default EnergiaLomake;
