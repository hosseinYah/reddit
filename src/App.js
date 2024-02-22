import './App.css';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Button from '@mui/material/Button';


function App() {

  // Hooks
  const [country, setCountry] = useState('') 
  const [data, setData] = useState([])

  const handleCountry = (event) => {
    setCountry(event.target.value)
    // console.log(event.target.value);
  }

  const handleRequest = async () => {
    let link = `https://api.reddit.com/r/${country}.json`

   try{
    const response = await fetch(link);
    let json = await response.json();
    console.log(json.data.children)
    let data_to_display = json.data.children; 
    setData(data_to_display)
   }catch (error){
   console.log(error)
  }
}

  const handleRemoveResults = () =>{
    setCountry('')
    setData([])
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

      <Button 
      variant="contained"  
      disabled={country === ''? true :false}
      onClick={ handleRequest}
      >Request data</Button>

      <Button 
      variant="contained"  
      disabled={data.length === 0? true :false}
      onClick={ handleRemoveResults }
      >Delete Reuslts</Button>

<div style={{ fontSize : '1rem' }}>
      {
        data.length === 0 ? null : 
        (
          
          data.map((element, index) => 
          { 
            return <div key={index}>{element.data.title}</div>
          })
          )
      }
</div>
      </header>
    </div>
  );
}

export default App;
