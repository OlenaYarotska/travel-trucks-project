import { useDispatch } from "react-redux";
import { selectFavourites } from "../../redux/trucks/selectors";
import { useSelector } from "react-redux";
import { getFavourite } from "../../redux/trucks/slice";
import FilterCategories from "../FilterCategories/FilterCategories";
import sprite from '../../images/sprite.svg';
import { Wrapper, ImgWrp, Image, Wrp, TextWrp, Heading, Price, IconS,IconH, IconL, RatingWrp, Favourite, Rating, Location, Text, Link } from "./TruckItem.styled";


const TruckItem = ({ truck }) => {
    const dispatch = useDispatch();
    const favourites  = useSelector(selectFavourites);
   const isFavourite = favourites.some((item) => item.id === truck.id);
    const { name, price, location, rating, reviews, description, gallery, id } = truck;

    const handleClick = () => {
        dispatch(getFavourite(truck.id))
    }
    return (
        <>
        <Wrapper>
            <ImgWrp>
                <Image src={gallery[0].original} alt={name}/>
            </ImgWrp>
                <TextWrp>
                <Wrp>
                    <Heading>{name}</Heading>
                        <Price>&#8364;{price.toFixed(2)}
                            <Favourite onClick={handleClick}>
                                {isFavourite ?
                                <IconH>
                                    <use xlinkHref={`${sprite}#${"icon-heart-colored"}`} />
                                </IconH>
                                            :
                                <IconH>
                                    <use xlinkHref={`${sprite}#${"icon-heart"}`} />
                                </IconH>}
                            </Favourite>
                        </Price>   
                </Wrp>
                    <RatingWrp>
                    <Rating>
                        <IconS>
                            <use xlinkHref={`${sprite}#${"icon-colored-star"}`} />
                        </IconS>
                        {rating}({reviews.length} Reviews)
                        </Rating>
                        <Location>
                            <IconL>
                            <use xlinkHref={`${sprite}#${"icon-location"}`} />
                        </IconL>
                            {location}</Location>
                    </RatingWrp>
                    <Text>{description}</Text>
                    <FilterCategories truck={truck} />
                  <Link to={`/catalog/${id}`}>Show more</Link>   
            </TextWrp>
        </Wrapper>        
        </>
)
};

export default TruckItem;