import { Lines, LoaderWrapper} from './Loader.styled';

const Loader = () => {
     return (
        <LoaderWrapper>
            <Lines
                visible={true}
                height="96"
                width="96"
                color="#FF6B6B"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
            />
        </LoaderWrapper>
    );
}

export default Loader;