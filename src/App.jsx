import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {
   const [amount,setAmount]=useState('');
   const [discount,setDiscount]=useState('');
   const [result,setResult]=useState('');

const dis=(e)=>{
let rslt=amount*discount/100
let rslt1=amount-rslt
setResult(rslt1)
}
const res=(e)=>{
  setAmount('')
  setDiscount('')
  setResult('')
}


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6 first">
          </div>
          <div className="col-6 second">
            <h1>Discount Calculator</h1>
            <TextField onChange={e=>setAmount(e.target.value)} id="standard-basic" label="Amount" variant="standard" value={amount} />
            <TextField onChange={e=>setDiscount(e.target.value)} id="standard-basic" label="Discount" variant="standard" value={discount} />


            <div className="button-group">
            <Button variant="contained" onClick={dis} color="success">
              Discount
            </Button>
            <Button variant="contained" onClick={res} color="info">
              Reset
            </Button>

            </div>
            <h3>Total Amount : <span style={{color:'red'}}>{result}</span></h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;