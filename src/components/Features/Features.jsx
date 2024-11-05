import { useSelector } from "react-redux";
import FilterCategories from "../FilterCategories/FilterCategories";
import { FilterWrp, Heading, List, Item, Text, Wrapper, DetailsWrp } from "./Features.styled";

const Features = () => {
    const current = useSelector(state => state.trucks.current)
    const { form, length, width, height, tank, consumption } = current;

    return (
        <Wrapper>
            <FilterWrp>
                <FilterCategories truck={current} />
            </FilterWrp>
            <DetailsWrp>
                <Heading>Vehicle details</Heading>
                <List>
                    <Item>
                        <Text>Form:</Text>
                        <Text>{form}</Text>
                    </Item>
                    <Item>
                        <Text>Length:</Text>
                        <Text>{length}</Text>
                    </Item>
                    <Item>
                        <Text>Width:</Text>
                        <Text>{width}</Text>
                    </Item>
                    <Item>
                        <Text>Height:</Text>
                        <Text>{height}</Text>
                    </Item>
                    <Item>
                        <Text>Tank:</Text>
                        <Text>{tank}</Text>
                    </Item>
                    <Item>
                        <Text>Consumption:</Text>
                        <Text>{consumption}</Text>
                    </Item>
                </List>
            </DetailsWrp>
        </Wrapper>
    )
};
export default Features;
 