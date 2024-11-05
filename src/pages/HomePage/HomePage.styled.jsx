import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
padding: 260px 0;
 background-image: url("/images/picture.webp");
 background-size:cover;
 background-repeat: no-repeat;
 margin: 0 auto;
`;
export const TextWrp = styled.div`
padding: 0px 64px;
`;
export const Heading = styled.h1`
font-size: 48px;
font-weight: 600;
line-height: 32px;
color: #F7F7F7;
margin-bottom: 16px;
`;
export const Text = styled.p`
color: #F7F7F7;
font-size: 24px;
`;
export const BtnWrp = styled.div`
display: inline-flex;
align-items: center;
justify-content: center;
margin-top: 40px;
padding: 16px 48px;
background-color: #E44848;
border-radius: 100px; 
width: 80px; 
    &:hover,
    &:focus{
    background-color: #D84343;
}
`
export const Link = styled(NavLink)`
text-decoration: none;
color: #F7F7F7;
`;
