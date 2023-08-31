import {useState, useEffect} from "react";
import EnergiajuomaLista from './EnergiajuomaLista';
import Typography from '@mui/material/Typography';


function HaeEnergiajuomat() {
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

    if (virhe.length > 0) {
        return ( <Typography>{ virhe }</Typography>);
    }

    if (energiat.length > 0) {
        return ( <EnergiajuomaLista energiat={ energiat }/>);
    }

    return ( <Typography>Yhtään energiajuomaa ei ole</Typography>)
    }
  
  
  export default HaeEnergiajuomat;
  