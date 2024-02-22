import './App.css';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';



function App() {

  // Hooks
  const [country, setCountry] = useState('') 

  const handleCountry = (event) => {
    setCountry(event.target.value)
    // console.log(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <div> Please choose an option</div>
        
        <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel>Country</InputLabel>
        <Select
          autoWidth
          value={country}
          label="Country"
          onChange={handleCountry}
        > 
          <MenuItem value={'mexico'}>México</MenuItem>
          <MenuItem value={'finland'}>Finaland</MenuItem>
        </Select>
        
      </FormControl>

      </header>
    </div>
  );
}

export default App;
