import "react-datepicker/dist/react-datepicker.css";
import { StyledPicker, DatePickerStyles  } from "./DatePicker.styled";

const DatePeaker = ({selected, onChange}) => {
    return (
        <>
            <DatePickerStyles />
            <StyledPicker
                selected={selected}
                onChange={onChange}
                placeholderText="Booking date*"
                dateFormat="dd/MM/yyyy"
                />
        </>
    )
};
export default DatePeaker;