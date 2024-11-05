import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { fetchTrucks } from "../../redux/trucks/operations";
import TrucksList from "../../components/TrucksList/TrucksList";
import { selectIsLoading } from "../../redux/trucks/selectors";
import TruckFilters from "../../components/TruckFilters/TruckFilters";
import { Wrapper } from './CatalogPage.styled';
import Loader from "../../components/Loader/Loader";

const CatalogPage = () => {

    const dispatch = useDispatch();
    const loading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchTrucks())
    },[dispatch])

    return (
        <Wrapper>
            {loading && <Loader />}
            <TruckFilters />
            <TrucksList/>
        </Wrapper>
    )
};

export default CatalogPage;