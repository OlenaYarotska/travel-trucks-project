import { useDispatch } from "react-redux";
import { useId } from "react";
import { getFilters } from "../../redux/filters/slice";
import { resetFilteredItems } from "../../redux/trucks/slice";
import { fetchTrucks } from "../../redux/trucks/operations";
import { Formik, Form } from 'formik';
import sprite from '../../images/sprite.svg';
import {
    Label, FieldLoc, FieldFeat, IconLoc, WrapperInput,
    FilterText, EquipmentHead, IconVeh, EquipmentList, EquipmentItem,
    EquipmentText, Checkbox, IconVehF, EquipmentTextF, Button
} from "./TruckFilters.styled";


const initValues = {
    transmission: "",
    location: "",
    AC: false,
    form: false,
    TV: false,
    kitchen: false,
    bathroom: false,
}
const TruckFilters = () => {
    const dispatch = useDispatch();
    const fieldId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(getFilters(values));
        dispatch(resetFilteredItems());
        dispatch(fetchTrucks())
            .unwrap()
            .catch((error) => {
                console.error(error)
            });
        // actions.resetForm();
    }
    return (
        <Formik initialValues={initValues} onSubmit={handleSubmit}>
            {({ values, setFieldValue }) => (
                <Form>
                    <Label htmlFor={`${fieldId}-location`} >
                        Location
                    </Label>
                    <WrapperInput>
                        <FieldLoc type="text" name="location" id={`${fieldId}-location`} placeholder="City" />
                            <IconLoc>
                                <use xlinkHref={`${sprite}#${"icon-location"}`} />
                            </IconLoc>
                        </WrapperInput>
                    <FilterText>Filters</FilterText>
                    <EquipmentHead>Vehicle equipment</EquipmentHead>
                    <EquipmentList>
                        <EquipmentItem  $isSelected={values.AC}>
                            <label htmlFor={`${fieldId}-AC`}>
                                <FieldFeat type="checkbox" name="AC" id={`${fieldId}-AC`} />
                                <Checkbox>
                                    <IconVeh>
                                        <use xlinkHref={`${sprite}#${"icon-ac"}`} />
                                    </IconVeh>
                                    <EquipmentText data-custom-checkbox="true">
                                        AC
                                    </EquipmentText>
                                </Checkbox>
                            </label>
                        </EquipmentItem>
                         <EquipmentItem   $isSelected={values.transmission === "automatic"}>
                            <label htmlFor={`${fieldId}-transmission`}>
                                <FieldFeat type="checkbox" name="transmission" id={`${fieldId}-transmission`}
                                    checked={values.transmission === "automatic"}
                                    onChange={() => setFieldValue("transmission", values.transmission === "automatic" ? "" : "automatic")}
                                />
                                <Checkbox>
                                 <IconVeh>
                                    <use xlinkHref={`${sprite}#${"icon-transmission"}`} />
                                </IconVeh>
                                <EquipmentText>
                                    Automatic
                                </EquipmentText>
                               </Checkbox>
                            </label>
                        </EquipmentItem>
                        <EquipmentItem  $isSelected={values.kitchen}>
                            <label htmlFor={`${fieldId}-kitchen`}>
                                <FieldFeat type="checkbox" name="kitchen" id={`${fieldId}-kitchen`} />
                                 <Checkbox>
                                <IconVeh>
                                    <use xlinkHref={`${sprite}#${"icon-kitchen"}`} />
                                </IconVeh>
                                <EquipmentText>
                                    Kitchen
                                    </EquipmentText>
                                    </Checkbox>
                            </label>
                        </EquipmentItem>
                        <EquipmentItem   $isSelected={values.TV}>
                            <label htmlFor={`${fieldId}-TV`}>
                                <FieldFeat type="checkbox" name="TV" id={`${fieldId}-TV`} />
                                <Checkbox>
                                <IconVeh>
                                    <use xlinkHref={`${sprite}#${"icon-tv"}`} />
                                </IconVeh>
                                <EquipmentText>
                                    TV
                                </EquipmentText>
                                </Checkbox>
                            </label>
                        </EquipmentItem>
                        <EquipmentItem  $isSelected={values.bathroom}>
                            <label htmlFor={`${fieldId}-bathroom`}>
                               <FieldFeat type="checkbox" name="bathroom" id={`${fieldId}-bathroom`} />
                                <Checkbox>
                                <IconVeh>
                                    <use xlinkHref={`${sprite}#${"icon-bathroom"}`} />
                                </IconVeh>
                                <EquipmentText>
                                    Bathroom
                                    </EquipmentText>
                                </Checkbox>
                            </label>
                        </EquipmentItem>
                    </EquipmentList>
                    <EquipmentHead>Vehicle type</EquipmentHead>
                    <EquipmentList>
                        <EquipmentItem  $isSelected={values.form === "panelTruck"}>
                            <label>
                                <FieldFeat type="radio" name="form" value="panelTruck" />
                                <IconVeh>
                                    <use xlinkHref={`${sprite}#${"icon-van"}`} />
                                </IconVeh>
                                <EquipmentText>
                                    Van
                                </EquipmentText>
                            </label>
                        </EquipmentItem>
                        <EquipmentItem  $isSelected={values.form === "fullyIntegrated"}>
                            <label>
                                <FieldFeat type="radio" name="form" value="fullyIntegrated" />
                                <IconVehF>
                                    <use xlinkHref={`${sprite}#${"icon-fully_integrated"}`} />
                                </IconVehF>
                                <EquipmentTextF>
                                    Fully Integrated
                                </EquipmentTextF>
                            </label>
                        </EquipmentItem>
                        <EquipmentItem  $isSelected={values.form === "alcove"}>
                            <label>
                                <FieldFeat type="radio" name="form" value="alcove"  />
                                <IconVeh>
                                    <use xlinkHref={`${sprite}#${"icon-Alcove"}`} />
                                </IconVeh>
                                <EquipmentText>
                                    Alcove
                                </EquipmentText>
                            </label>
                        </EquipmentItem>
                        <Button type="submit">Search</Button>
                    </EquipmentList>
                </Form>
)}
        </Formik>
    )
};

export default TruckFilters;