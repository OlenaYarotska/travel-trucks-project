import { Wrapper, Heading, Text, Link, TextWrp, BtnWrp } from "./HomePage.styled";

const HomePage = () => {
    return (
        <Wrapper>
            <TextWrp>
                <Heading>Campers of your dreams</Heading>   
                <Text>You can find everything you want in our catalog</Text>
            <BtnWrp>
                <Link to='/catalog'>View Now</Link>
            </BtnWrp>
            </TextWrp>
        </Wrapper>
    )
};

export default  HomePage;