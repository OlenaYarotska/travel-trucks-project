import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createGlobalStyle } from 'styled-components';

export const StyledPicker = styled(DatePicker)`
  padding: 18px;
  width: 599px;
  border: none;
  border-radius: 12px;
  background-color: #F2F4F7;
  font-size: 14px;
  color: #475467;
  &::placeholder {
     color: #667085;
  } 
`; 
 export const DatePickerStyles = createGlobalStyle`
  .react-datepicker {
    font-family: 'Inter', sans-serif;
    border-radius: 12px;
    border: 1px solid #101828;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }

  .react-datepicker__header {
    background-color: #ffffff;
    border-bottom: 1px solid #e4e7eb;
    padding: 8px 0;
    font-size: 16px;
    font-weight: 500;
    color: #475467;
  }

  .react-datepicker__day-names {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    padding: 8px 0;
    font-size: 14px;
    color: #667085;
    border-bottom: 1px solid #101828;
  }

  .react-datepicker__day {
    width: 36px;
    height: 36px;
    font-size: 14px;
    color: #475467;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    &:hover {
      background-color: #f9fafb;
       border-radius: 50%;
    }
  }

  .react-datepicker__day--selected {
    background-color: #475467;
    color: #ffffff;
    font-weight: 600;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #475467;
    color: #ffffff;
  }

  .react-datepicker__day--today {
    background-color: transparent;
    font-weight: 600;
    color: #475467;
  }

  .react-datepicker__navigation--previous, 
  .react-datepicker__navigation--next {
    top: 10px;
    width: 20px;
    height: 20px;
    border: none;
    background: none;
    font-weight: bold;
    color:  #101828;
    cursor: pointer;
  }

  .react-datepicker__month {
    margin: 0;
  }

  .react-datepicker__week {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
`;