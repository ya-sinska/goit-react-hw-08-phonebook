import styled from "@emotion/styled";

export const Image = styled.div`
display:flex;
justify-content:center;
text-align:center;
&:after {
  content: " ";
  display: block;
  width: 94px;
  height: 94px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #6d6d6c transparent #6d6d6c transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`