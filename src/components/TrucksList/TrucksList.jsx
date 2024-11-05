import { useSelector, useDispatch } from "react-redux";
import TruckItem from "../TruckItem/TruckItem";
import { loadMoreTrucks } from "../../redux/trucks/slice";
import { selectError, selectTrucks } from "../../redux/trucks/selectors";
import { fetchTrucks } from "../../redux/trucks/operations";
import { Wrapper, List, Item, Text, Button } from "./TrucksList.styled";


const TrucksList = () => {
    const dispatch = useDispatch();
    const trucks = useSelector(selectTrucks);
    const error = useSelector(selectError);
    const loadPage = useSelector(state => state.trucks.loadPage); 

    const handleLoadMore = () => {
        if (loadPage) {
            dispatch(loadMoreTrucks());
            dispatch(fetchTrucks());
        }    
    };

    return (
        <Wrapper>
            {trucks.length > 0 ? (
                <List>
                    {trucks.map(truck => (
                        <Item key={truck.id}>
                            <TruckItem truck={truck} />
                        </Item>
                    ))}
                </List>
            ) : (
                <Text>No trucks available</Text>
            )}
            {!error && loadPage && (
                <Button onClick={handleLoadMore}>Load More</Button>
            )}
        </Wrapper>
    );
}

export default TrucksList;
