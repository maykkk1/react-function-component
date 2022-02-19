import { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome, sobrenome);
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          let tempNome = event.target.value;
          setNome(tempNome)
        }}
        id="Nome"
        label="Nome"
        variant="outlined"
        fullWidth={true}
        margin="normal"
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="Sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth={true}
        margin="normal"
      />
      <TextField
        id="cpf"
        label="cpf"
        variant="outlined"
        fullWidth={true}
        margin="normal"
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch name="promocoes" color="primary" defaultChecked={true} />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch name="novidades" color="primary" defaultChecked={true} />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
