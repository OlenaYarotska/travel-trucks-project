import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 8px;
margin-top: 24px;
margin-bottom: 24px;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  background-color: #F2F4F7;
  border-radius: 20px; 
  padding: 12px 18px; 
  gap: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
`;
export const Icon = styled.svg`
 width: 20px;
  height: 20px;
`;
export const Text = styled.span`
font-size: 14px;
  color: #101828;
  font-weight: 500;
`;