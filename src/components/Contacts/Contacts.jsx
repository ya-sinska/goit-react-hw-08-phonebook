import {PaperBoxContacts, SecondTitle } from './Contacts.styled'
import { ContactItem } from '../ContactItem/ContactItem';
import List from '@mui/material/List';
import { useContacts } from 'hooks';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


export const Contacts = () => {
    const { filteredContacts, isLoading, isSuccess } = useContacts.useContacts();
    return (
        <PaperBoxContacts elevation={3}>
            <SecondTitle>Contacts List</SecondTitle>
            {(isLoading||!isSuccess)? Array.from(new Array(7)).map((_, index) =>
                (<Skeleton key={index} width={360} height={50} />)) :
                ( <>
                    {filteredContacts.length > 0 ?
                    (<List dense sx={{ width: '100%', maxWidth: 600, bgcolor: '#d6e4ee', maxHeight:350, overflow:'scroll' }}>
                        {filteredContacts.map(({ id, name, number }) =>
                            <ContactItem
                                key={id}
                                name={name}
                                number={number}
                                id={id}
                            />
                            )}</List>) :
                        (<Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="error">There is No contact in your contacts list!</Alert>
                        </Stack>)
                    }
                </> 
                )
            }

        </PaperBoxContacts>
    )
};
