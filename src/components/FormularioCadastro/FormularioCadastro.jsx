import { 
    Button, 
    TextField, 
    Switch, 
    FormControlLabel  
} from '@material-ui/core';

export const FormularioCadastro = () => {
    return(
        <form>
            <TextField id="name" label="Nome" variant="outlined" margin='normal' fullWidth />
            <TextField id="surname" label="Sobrenome" variant="outlined" margin='normal' fullWidth />
            <TextField id="cpf" label="CPF" variant="outlined" margin='normal' fullWidth />

            <FormControlLabel 
                label='Promoções' 
                control={ <Switch
                    //checked={state.checkedB}
                    //onChange={handleChange}
                    color="primary"
                    name="promocoes"
                    defaultChecked
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                /> } 
            />
            <FormControlLabel 
                label='Novidades' 
                control={ <Switch
                    //checked={state.checkedB}
                    //onChange={handleChange}
                    color="primary"
                    name="novidades"
                    defaultChecked
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                /> } 
            />
            
            <Button type='submit' variant="contained" color="primary" fullWidth>Cadastrar</Button>
        </form>
    );
}

