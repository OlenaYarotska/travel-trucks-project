import styled from 'styled-components';
import { Form, Field } from 'formik';


export const FormWrapper = styled.div`
  width: 641px;
  height: 588px;
  padding: 42px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #DADDE1;
  margin-top: 44px;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #101828;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #6C717B;
  margin-bottom: 24px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledField = styled(Field)`
  padding: 18px;
  border: none;
  border-radius: 12px;
  background-color: #F2F4F7;
  font-size: 14px;
  color: #667085;
  resize: none; 
  &::placeholder {
    color: #667085;
  }
`;

export const Error = styled.span`
  font-size: 12px;
  color: red;
`;

export const SubmitButton = styled.button`
  padding:16px 63px;
  width: 166px;
  background-color: #F63D3D;
  margin: 0 auto;
  color: #fff;
  border: none;
  border-radius: 200px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #E63939;
  }
`;
