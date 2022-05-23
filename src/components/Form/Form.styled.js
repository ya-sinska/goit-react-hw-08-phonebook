import styled from "@emotion/styled";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
export const PaperForm = styled(Paper)`
   max-width:500px;
   padding: 30px 20px;
   text-align: center;
   background-color: #d6e4ee;
   max-height:250px;

`
export const InputField = styled.input`
    &:not(:last-child){
    margin-bottom:10px;
   }
    width: 300px; 
    padding: 10px; 
    box-shadow: inset 0 1px 5px rgba(0,0,0,0.2); 
    border: 1px solid #ccc; 
    color: black; 
    font-size:16px;
    padding-left: 30px; 
   `
   export const Label = styled.label`
    width: 100px; 
    text-align: right; 
    float: left; 
    margin-right: 10px; 
    line-height: 30px; 
    color: hsl(210deg 8% 20%);
    font-weight:900;
   `

export const Error = styled.p`
   margin:0;
   color: tomato;
   font-size:16px;
   text-align: center; 
   `
export const BtnSubmitForm = styled(Button)`
margin-top:30px;
`
