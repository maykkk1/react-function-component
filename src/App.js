import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Component } from "react";
import { Container, Typography } from "@material-ui/core";
import '@fontsource/roboto/500.css';

class App extends Component {
  render() {
    return (
      <Container componet="article" maxWidth="sm">
        <Typography variant="h3" componet="h1" align="center">Formulário de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} cpfValidate={cpfValidate}/>
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados)
}

function cpfValidate(cpf){
  if(cpf.length != 11){
    return {valido:false, texto:"O CPF deve conter 11 digitos"}
  } else {
    return {valido:true, texto:""}
  }
}

export default App;
