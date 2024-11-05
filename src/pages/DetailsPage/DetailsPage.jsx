import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { useEffect, Suspense } from "react";
import { fetchTrucksById } from "../../redux/trucks/operations";
import { selectIsLoading } from "../../redux/trucks/selectors";
import TruckCard from "../../components/TruckCard/TruckCard";
import TruckInfoNav from "../../components/TruckInfoNav/TruckInfoNav";
import BookingForm from "../../components/BookingForm/BookingForm";
import { Wrapper, PageWrapper } from "./DetailePage.styled";
import Loader from "../../components/Loader/Loader";

const DetailsPage = () => {
    const dispatch = useDispatch();
    const { current } = useSelector(state => state.trucks);
    const { id } = useParams();
    const loading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchTrucksById(id))
    }, [dispatch, id]);

    return (
        <>
            {loading && <Loader />} 
            {current && (
                <PageWrapper>
                    <TruckCard truck={current} />
                    <TruckInfoNav />
                       <Wrapper>
                        <Suspense fallback={<Loader />} >
                            <Outlet />
                        </Suspense>
                        <BookingForm />
                    </Wrapper>
                </PageWrapper>
            )}
        </>
    )
};

export default DetailsPage;