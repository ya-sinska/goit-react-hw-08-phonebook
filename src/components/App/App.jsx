import { Forma } from "../Form/Form";
import { Contacts } from '../Contacts/Contacts'
import { Filter } from "../Filter/Filter";
import { Grid, Title, Box } from "./App.styled";
import Container from '@mui/material/Container';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMainForm } from "hooks/UseMainForm";

export const App = () => {
  const { register, handleSubmit, errors, isLoading, onSubmit } = useMainForm();
  return (
    <Container>
    <ToastContainer />
    <Box>
      <Title>Your phonebook</Title>
      <Filter />
    </Box>
      <Grid>
        <Forma btnText='Add contact' register={register} handleSubmit={handleSubmit} errors={errors} onSubmit={onSubmit} isLoading={isLoading}/>
        <Contacts />
      </Grid>
    </Container>
  ) 
}