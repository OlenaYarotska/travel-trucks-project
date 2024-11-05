import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
margin-top: 60px;
  `;
  
export const Link = styled(NavLink)`
text-decoration: underline;
color: red;
`;

export const Text = styled.p`
font-size: 20px;
`;