import { useChange } from 'hooks';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/contactsFilterSlice';
export const Filter = () => {
   const filter =useSelector(getFilterValue)
    const change = useChange.useChange();
 return (

    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
         <TextField
            id="input-with-sx"
            variant="standard"
            type="text"
            name="filter" onChange={change} 
            value={filter}
            label="Find contacts by name"
    />
      </Box>


  
)}
