import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
padding: 28px 64px;
background-color: #F2F4F7;
display: flex;
align-items: center;
position: sticky;
top: 0;
z-index: 9999;
`;
export const Logo = styled.p`
font-size: 20px;
font-weight: 700;
color: #101828;
`;
export const LogoWrp = styled.span`
font-weight:700;
color: #6c717b;
`;
export const Nav = styled.nav`
margin-left: auto;
margin-right: auto;
display: flex;
gap: 32px;
`;
export const Link = styled(NavLink)`
 color: #101828;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;

  &:focus,
  &:hover {
    color: #D84343;
  }

  &.active {
    color: #E44848;
    font-weight: 600;
  }
`;

