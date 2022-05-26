import { Container } from "@mui/system"
import { HomeSection, Title, SmallTitleAccent, BiggerTitleAccent, BigTitleAccent, Slogan} from "./HomePage.styled"
export default function HomePage() {
    return (
      <HomeSection>
        <Container>
          <Title>
            <SmallTitleAccent>Your</SmallTitleAccent>
            <BiggerTitleAccent>privat</BiggerTitleAccent>
            <BigTitleAccent>Phonebook.</BigTitleAccent>
          </Title>
          <Slogan>We save Your Contacts</Slogan>
        </Container>
      </HomeSection>
    )
}