import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  color: #1976d2;
  font-size: 18px;
  &:not(:last-child){
    margin-right:30px;
  }
  &.active {
    text-decoration:underline;
  }
`;
export const NavigationList = styled.nav`
display:flex;
align-items: center;
`