import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
border: 1px solid #DADDE1;
border-radius: 20px;
padding: 24px;
gap: 20px;
`;
export const ImgWrp = styled.div`
width: 300px;
height: 350px;
border-radius: 10px;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
`;

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;
export const TextWrp = styled.div`
width: 524px;
`;
export const Wrp = styled.div`
display: flex;
justify-content: space-between;
`;
export const Heading = styled.h3`
font-size: 24px;
font-weight: 600;
`;
export const Price = styled.p`
font-size: 24px;
font-weight: 600;
`;
export const IconS = styled.svg`
   width: 16px;
   height: 16px;
`;
export const Favourite = styled.button`
outline: none;
border: none;
cursor: pointer;
background-color: transparent;
`;
export const IconH = styled.svg`
width: 20px;
height: 20px;
margin-left: 5px;
`;

export const RatingWrp = styled.div`
display: flex; 
align-items: baseline;
gap: 16px; 
margin-bottom: 24px;
`;
export const Rating = styled.p`
font-size: 16px;
color: #101828;
`;
export const Location = styled.p`
`;
export const IconL = styled.svg`
   width: 16px;
   height: 16px;
   margin-right: 2px;
`;

export const Text = styled.p`
font-size: 16px;
max-width: 520px;
white-space: nowrap;      
overflow: hidden;         
text-overflow: ellipsis;
`;
export const Link = styled(NavLink)`
display: inline-flex;
border: none;
align-items: center;
justify-content: center;
margin-top: 15px;
padding: 16px 40px;
background-color: #E44848;
color: #FFFFFF;
border-radius: 100px; 
cursor: pointer;
transition: background-color 0.3s ease;
    &:hover,
    &:focus{
    background-color: #D84343; 
    }
`;