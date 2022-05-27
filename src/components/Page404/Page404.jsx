import { useNavigate } from "react-router-dom";
import { Notification, ContainerBox, Btn } from "./Page404.styled"
export const Page404 = () => {
    const navigate = useNavigate();

    return (
        <ContainerBox>
            <Btn variant="contained" type='button' onClick={()=>{navigate('/')}}>Back home page</Btn>
            <Notification>Can't find page 404</Notification>
        </ContainerBox>
    )
}
