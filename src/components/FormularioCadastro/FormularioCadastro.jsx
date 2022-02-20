import { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({aoEnviar, cpfValidate}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  let [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(false);
  const [novidades, setNovidades] = useState(false);
  const [error, setError] = useState({cpf:{valido:true, texto:""}})
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
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
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event)=>{
          const ehValido = cpfValidate(cpf)
          setError({cpf:ehValido})
        }}
        helperText={error.cpf.texto}
        error={!error.cpf.valido}
        id="cpf"
        label="cpf"
        variant="outlined"
        fullWidth={true}
        margin="normal"
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="promocoes"
            color="primary"
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="novidades"
            color="primary"
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
