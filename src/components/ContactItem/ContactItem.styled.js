import styled from "@emotion/styled";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
export const Item = styled(ListItem)`
&:not(:last-child){
    margin-bottom:10px;
}
&:hover{
    background-color: #f0efed;
}
min-width:370px;
`
export const AvatarIcon = styled(Avatar)`
margin-right:10px;
`
export const Name = styled(ListItemText)`
text-transform: capitalize;
`
export const Delete = styled(DeleteIcon)`
margin-right: -10px; 
margin-left: 4px;
`
export const Edit = styled(EditIcon)`
margin-right: -10px; 
margin-left: 4px;
`
export const BtnDelete = styled(Button)`
min-width:40px;
margin-right:5px;
`
export const BtnEdit = styled(Button)`
min-width:40px;
`