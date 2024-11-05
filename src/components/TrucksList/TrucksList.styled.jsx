import styled from 'styled-components';

export const Wrapper = styled.div``;
export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 32px;
`;
export const Item = styled.li``;
export const Text = styled.p`
text-align: center;
font-size: 20px;
font-weight: 700;
`;
export const Button = styled.button`
display: inline-flex;
border: 1px solid #DADDE1;
align-items: center;
justify-content: center;
margin-top: 20px;
padding: 16px 32px;
background-color: #fff;
color: #101828;
border-radius: 100px; 
    &:hover,
    &:focus{
    border: 1px solid #D84343;
    }
`;
