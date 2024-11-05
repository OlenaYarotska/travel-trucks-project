import { Wrapper, Link, Text } from "./NotFoundPage.styled";

const NotFoundPage = () => {
    return (
        <Wrapper>
            <Text>Sorry, this page not found!</Text>
            <Text>
                Please, go to{" "}
                <Link to='/'>Home Page</Link>
            </Text>
        </Wrapper>
    )
};

export default NotFoundPage;