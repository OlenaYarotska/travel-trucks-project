import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import sprite from '../../images/sprite.svg';
import { Wrp, List, Item, Name, Comment, ReviewWrapper, FirstLetter, RatingWrapper, Wrapper } from "./Reviews.styled";

const Reviews = () => {
    const current = useSelector(state => state.trucks.current);
    const { reviews } = current;

    const renderStars = (rating) => {
        const allStars = 5;
        const coloredStars = `${sprite}#icon-colored-star`;
        const transparentStars = `${sprite}#icon-star`;
            return (
            <div>
                {[...Array(allStars)].map((_, index) => (
                    <svg key={nanoid()} width="16" height="16">
                        <use href={index < rating ? coloredStars : transparentStars} />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <Wrapper>
            <List>
                {reviews.map((review => (
                    <Item key={nanoid()}>
                        <ReviewWrapper>
                            <FirstLetter>{review.reviewer_name[0]} </FirstLetter>
                            <Wrp>
                                <Name>{review.reviewer_name}</Name> 
                                <RatingWrapper>
                                    {renderStars(review.reviewer_rating)} 
                                </RatingWrapper>
                            </Wrp>
                        </ReviewWrapper>
                            <Comment>{review.comment}</Comment>
                    </Item>
                )))}
            </List>
        </Wrapper>
    )
};
export default Reviews;