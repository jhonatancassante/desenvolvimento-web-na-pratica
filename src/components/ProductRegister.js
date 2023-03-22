import React from 'react';
import { Card, CardContent, Button, TextField, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import axios from 'axios';

function ProductRegister(props) {

  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://54fjyrv2wa.execute-api.us-east-1.amazonaws.com/listar-categorias").then(
      r => {
        setCategories(r.data.response);
      }
    )
  }, []);

  function registerProduct() {
    axios.post("https://54fjyrv2wa.execute-api.us-east-1.amazonaws.com/cadastro-produto", {
      "name": name,
      "price": price,
      "category": category
    }).then(r => {
      alert("Produto foi cadastrado!")
    })
  }

  return (
    <Card>
      <CardContent>
        <div style={{ fontSize: '16px' }}>{props.texto}</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '60%', margin: '14px' }}>
            <TextField value={name} onChange={(e) => { setName(e.target.value) }} fullWidth id="outlined-basic" label="Nome" variant="outlined" />
          </div>
          <div style={{ width: '60%', margin: '14px' }}>
            <TextField value={price} onChange={(e) => { setPrice(e.target.value) }} fullWidth id="outlined-basic" label="Preço" variant="outlined" />
          </div>
          <div style={{ width: '60%', margin: '14px' }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Categorias"
                onChange={(e) => {setCategory(e.target.value)}}
              >
                {
                  categories.map(c => (
                    <MenuItem value={c.id}>{c.name}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </div>
          <div style={{ width: '60%', margin: '14px', display: 'flex', justifyContent: 'right' }}>
            <Button variant="contained" onClick={() => { registerProduct() }}>Salvar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductRegister