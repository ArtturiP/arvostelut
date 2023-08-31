import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function EnergiajuomaLista(props) {
    return (
      <div>
        <h2>Energiajuomat</h2>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
              <TableCell>Merkki</TableCell> 
              <TableCell>Nimi</TableCell> 
              <TableCell>Maku</TableCell> 
              <TableCell>Arvosana</TableCell> 
              <TableCell>Arvostelu</TableCell> 
              </TableRow>
            </TableHead>
            <TableBody>
            { props.energiat.map(energia => {
              return (
                <TableRow key={energia.id}>
                  <TableCell>{energia.merkki}</TableCell>
                  <TableCell>{energia.nimi}</TableCell>
                  <TableCell>{energia.maku}</TableCell>
                  <TableCell>{energia.arvosana}</TableCell>
                  <TableCell>{energia.arvostelu}</TableCell>
                </TableRow>
              )
            })}
            </TableBody>
          </Table>
        </Paper>      
      </div>

    );
  }
  
  export default EnergiajuomaLista;
  