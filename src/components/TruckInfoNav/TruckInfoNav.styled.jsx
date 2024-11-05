import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div``;

export const List = styled.ul`
display: flex;
gap: 40px;
padding-bottom: 24px;
border-bottom: 1px solid #F7F7F7;

`;
export const Item = styled.li``;
export const Link = styled(NavLink)`
text-decoration: none;
color: #101828;
font-size: 20px;
font-weight: 600;
position: relative;
  &.active::after {
            content: "";
            position: absolute;
            background-color: #E44848;
            width: 100%;
            height: 4px;
            left: 0;
            bottom: -30px;

        }
`;
