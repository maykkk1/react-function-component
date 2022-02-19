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
        <FormularioCadastro />
      </Container>
    );
  }
}
export default App;
