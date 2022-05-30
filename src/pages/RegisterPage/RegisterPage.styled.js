import styled from "@emotion/styled";
import { FormControl} from "@mui/material";
import { Container } from "@mui/system";
import { BtnSubmitForm } from "components/Form/Form.styled";
import BGRegister from '../../images/BGRegister.jpg'
export const FormContainer = styled(Container)`
display: flex;
`
export const Box = styled.div`
width:50%;
`
export const RedisterForm = styled.form`
padding:30px 15px;
/* margin-bottom:30px; */
border: 1px solid #6d6d6c;
border-radius: 10px;
display: flex;
flex-direction:column;
`
export const Field = styled(FormControl)`
margin-bottom:10px;
`
export const Btn = styled(BtnSubmitForm)`
width: 30%;
align-self:center;
`
export const LogIcon = styled.div`
background-color: #6d6d6c;
color:white;
border-radius: 50%;
padding:17px;
`
export const FormTitle = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin:80px 0 20px 0;
`
export const TitleText = styled.h1`
margin: 3px 0 0 0;
color:#6d6d6c;
`
export const SteledImage = styled.div`
background-image: url(${BGRegister});
background-size: cover;
width: 40%;
margin: 40px 50px 0 0;
border-radius: 5px;
`

