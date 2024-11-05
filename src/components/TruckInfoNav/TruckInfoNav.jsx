import { List, Item, Link, Wrapper } from "./TruckInfoNav.styled";

const TruckInfoNav = () => {
    return (
        <Wrapper>
            <List>
                <Item>
                    <Link to="features">
                        Features
                    </Link>
                </Item>
                <Item>
                    <Link to="reviews">
                        Reviews
                    </Link>
                </Item>
            </List>
        </Wrapper>
    )
};

export default TruckInfoNav;