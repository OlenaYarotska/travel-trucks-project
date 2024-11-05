import { Formik } from 'formik';
import { useId } from "react";
import * as Yup from "yup";
import DatePeaker from '../DatePicker/DatePicker';
import toast from 'react-hot-toast';
import { FormWrapper, Title, Subtitle, StyledForm, InputWrapper, StyledField, SubmitButton, Error } from './BookingForm.styled';

const BookingForm = () => {
    const formId = useId();
    const initValues = {
        name: "",
        email: "",
        date: null,
        comment: "",
    };

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Name must contain at least 3 alphabetical characters!")
            .max(50, "Name is too long!")
            .required("Name is required"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        date: Yup.date().nullable()
            .required("Please fill the date"),
    });

    const handleSubmit = (values, actions) => {
        toast.success('Thank you! Your data was successfully send!');
        actions.resetForm();   
    };

    return (
        <FormWrapper>
            <Title>Book your campervan now</Title>
            <Subtitle>Stay connected! We are always ready to help you.</Subtitle>
            <Formik
                initialValues={initValues}
                onSubmit={handleSubmit}
                validationSchema={FeedbackSchema}
                enableReinitialize={true}  
            >
                {({ setFieldValue, errors, touched, values }) => (
                    <StyledForm autoComplete='off'>
                        <InputWrapper>
                            <StyledField
                                type="text"
                                name="name"
                                id={`${formId}-name`}
                                placeholder="Name*"
                            />
                            {errors.name && touched.name ? (
                                <Error>{errors.name}</Error>
                            ) : null}
                        </InputWrapper>

                        <InputWrapper>
                            <StyledField
                                type="email"
                                name="email"
                                id={`${formId}-email`}
                                placeholder="Email*"
                            />
                            {errors.email && touched.email ? (
                                <Error>{errors.email}</Error>
                            ) : null}
                        </InputWrapper>

                        <InputWrapper>
                            <DatePeaker
                                name="date"
                                id={`${formId}-date`}
                                selected={values.date}
                                onChange={(date) => setFieldValue("date", date)}
                            />
                            {errors.date && touched.date ? (
                                <Error>{errors.date}</Error>
                            ) : null}
                        </InputWrapper>

                        <InputWrapper>
                            <StyledField
                                as="textarea"
                                name="comment"
                                id={`${formId}-comment`}
                                placeholder="Comment"
                                rows="4"
                            />
                        </InputWrapper>

                        <SubmitButton type='submit'>Send</SubmitButton>
                    </StyledForm>
                )}
            </Formik>
        </FormWrapper>
    );
};

export default BookingForm;