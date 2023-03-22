import React from 'react'
import { Card, CardContent, TextField, Button } from '@mui/material'
import axios from 'axios';

function CategoryRegister(props) {

  const [name, setName] = React.useState("");

  function registerCategory() {
    axios.post("https://54fjyrv2wa.execute-api.us-east-1.amazonaws.com/cadastro-categoria", {
      "name": name
    }).then(r => {
      alert("Categoria foi cadastrado!")
    })
  }

  return (
    <Card style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <CardContent>
        <div style={{ fontSize: '16px' }}>{props.texto}</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '100%', margin: '14px' }}>
            <TextField value={name} onChange={(e) => {setName(e.target.value)}} fullWidth id="outlined-basic" label="Nome" variant="outlined" />
          </div>
          <div style={{ width: '100%', margin: '14px', display: 'flex', justifyContent: 'right' }}>
            <Button variant="contained" onClick={() => { registerCategory() }}>Salvar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CategoryRegister