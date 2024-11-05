import styled from 'styled-components';
import { Field } from 'formik'

export const Label = styled.label`
    font-size: 16px;
    color: #6C717B;
`;
export const WrapperInput = styled.div``;

export const FieldLoc = styled(Field)`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
appearance: none;
border: none;
outline: transparent;
border-radius: 12px;
background-color: #F7F7F7;
width: 250px;
padding: 18px 40px;
    &:placeholder {
        font-size: 16px;
    }
`;
export const IconLoc = styled.svg`
position: absolute; 
top: 180px;
left: 310px; 
width: 18px;
height: 18px;
    &:focus,
    &:hover {
        color: #101828;
    }
`;
export const FilterText = styled.p`
margin-top: 40px;
color: #475467;
font-size: 16px;
`;

export const EquipmentHead = styled.h3`
margin-top: 32px;
padding-bottom: 24px;
color: #101828;
font-size: 20px;
border-bottom: 1px solid #DADDE1;
`;
export const EquipmentList = styled.ul`
position: relative;
margin-top: 24px;
margin-bottom: 32px;
 display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
export const Checkbox = styled.div`
  cursor: pointer;
`;
export const EquipmentItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 90px;
  height: 90px;
   border: 2px solid ${({ $isSelected }) => ($isSelected ? '#FF4747' : '#E5E7EB')};
  border-radius: 12px;
  background-color: #fff;
  position: relative;
`;
export const FieldFeat = styled(Field)`
  visibility: hidden;
  width: 90px;
  height: 90px;
  opacity: 0;
`;


export const IconVeh = styled.svg`
position: absolute;
top: 20px;
left: 20px;
 width: 30px;
height: 30px;
`;
export const IconVehF = styled.svg`
position: absolute;
top: 10px;
left: 20px;
 width: 30px;
height: 30px;
`;

export const EquipmentText = styled.span`
position: absolute;
top: 55px;
left: 15px;
font-size: 14px;
color: #101828;
`;

export const EquipmentTextF = styled.span`
position: absolute;
top: 45px;
left: 15px;
font-size: 14px;
color: #101828;
`;
export const Button = styled.button`
display: inline-flex;
border: none;
align-items: center;
justify-content: center;
margin-top: 20px;
padding: 16px 48px;
background-color: #E44848;
color: #FFFFFF;
border-radius: 100px; 
width: 160px; 
cursor: pointer;
transition: background-color 0.3s ease;
    &:hover,
    &:focus{
    background-color: #D84343; 
    }
`;



