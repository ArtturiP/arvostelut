import {useState, useEffect} from "react";

import { DataGrid } from '@mui/x-data-grid';

import Typography from '@mui/material/Typography';
import EnergiaLomake from "./EnergiaLomake";


function EnergiajuomaLista() {
  const [energiat, setEnergiat] = useState([]);
  const [virhe, setVirhe] = useState('Haetaan');

  const haeKaikkiEnergiat = async () => {
    try {
        const response = await fetch('https://open-price-production.up.railway.app/api/energiat');
        const data = await response.json();
        console.log(data.data);
        setEnergiat(data.data);
        setVirhe('');
    } catch (error) {
        setEnergiat([]);
        setVirhe('Tietojen haku ei onnistunut');
    }
}

useEffect(() => {
    haeKaikkiEnergiat();
}, []);

  const columns = [
    { field: 'merkki', headerName: 'Merkki', width: 300 },
    { field: 'nimi', headerName: 'Nimi', width: 300 },
    { field: 'maku', headerName: 'Maku', width: 300 },
    { field: 'arvosana', headerName: 'Arvosana' },
    { field: 'arvostelu', headerName: 'Arvostelu', width: 500 },
  ];

  if (virhe.length > 0) {
    return ( <Typography>{ virhe }</Typography>);
}

if (energiat.length > 0) {
    return ( 
        <div style={{ margin: 'auto', width: '80%' }}>
          <h2>Energiajuomat</h2>
          <DataGrid
            rows={energiat}
            columns={columns}
          />       
          <EnergiaLomake />                
        </div>

    );
}

return ( <Typography>Yhtään energiajuomaa ei ole</Typography>)
}


  export default EnergiajuomaLista;
  