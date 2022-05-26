import styled from "@emotion/styled";
export const HomeSection = styled.section`
  position: relative;
  text-align: center;
  padding-top: 65px;
  padding-bottom: 50px;
  height: 700px;
  overflow: hidden;
`    
export const DecorImage = styled.img`
  position: absolute;
  z-index: 0;
  right: -2vw;
`
export const Title = styled.h1`
  position: relative;
  top: 20px;
  color: white;
  font-family: "Poppins", sans-serif;
  line-height: 1em;
  letter-spacing: -0.02em;
  text-shadow: 0px 0px 10px rgb(0 0 0 / 35%);
  font-weight: 700;
`
export const SmallTitleAccent = styled.span`
 position: absolute;
  z-index: 1;
  top: 50px;
  left: 20vw;
  display: block;
  font-size: 60px;
  line-height: 1.36667;
  font-weight: 300;
`
export const BiggerTitleAccent = styled.span`
  position: absolute;
  z-index: 1;
  top: 100px;
  left: 35vw;
  display: block;
  font-size: 110px;
  color: #1976d2;
`
export const BigTitleAccent = styled.span`
  position: absolute;
  z-index: 1;
  top: 230px;
  left: 15vw;
  display: block;
  font-size: 130px;
`

export const Slogan = styled.p`
  position: absolute;
  top: 450px;
  left: 21vw;
  font-size: 30px;
  font-family: "Playfair Display", serif;
  line-height: 1.5;
  padding: 8px 0px 10px 0px;
  letter-spacing: 0.03em;
  color: #1976d2;
  &::before{
    content: "";
  display: block;
  width: 157px;
  background-color: #ffffff;
  height: 3px;
  position: absolute;
  top: 63%;
  left: -200px;
  transform: translateY(-50%);
  }
`
