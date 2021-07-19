import './App.css';
import { Container, Typography } from '@material-ui/core';
import { FormularioCadastro } from './components/FormularioCadastro/FormularioCadastro';

const App = () => {
    return (
        <Container maxWidth='sm' component='article'>
            <Typography variant='h3' align='center' component='h1'>Formulário de Cadastro</Typography>
            <FormularioCadastro />
        </Container>
    );
}

export default App;
