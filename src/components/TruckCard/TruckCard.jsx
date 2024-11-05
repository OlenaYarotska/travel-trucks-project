import ImageGallery from "../ImageGallery/ImageGallery";
import sprite from '../../images/sprite.svg';
import { Wrapper, Name, Rating, Loc, Price, Descr, Wrp, IconS, IconL } from "./TruckCard.styled";


const TruckCard = ({ truck }) => {
    const { name, price, location, rating, reviews, description, gallery } = truck;
    
    return (
        <>
            <Wrapper>
                <Name>{name}</Name>
                <Wrp>
                    <Rating>
                        <IconS>
                            <use xlinkHref={`${sprite}#${"icon-colored-star"}`} />
                        </IconS>
                        {rating}({reviews.length})Reviews
                    </Rating>
                     
                    <Loc>
                        <IconL>
                            <use xlinkHref={`${sprite}#${"icon-location"}`} />
                        </IconL>
                        {location}
                    </Loc>
                </Wrp>
                <Price>&#8364;{price.toFixed(2)}</Price>
                <ImageGallery gallery={gallery}  />
                <Descr>{description}</Descr>
            </Wrapper>

        </>
    )
};

export default TruckCard;