import { nanoid } from 'nanoid';
import { Wrapper, List, Item, Img } from './ImageGallery.styled';

const ImageGallery = ({gallery}) => {
    return (
        <Wrapper>
            <List>
                {gallery.map((photo) => (
                    <Item key={nanoid()}>
                        <Img src={photo.original}
                            alt='photo of truck'
                        />
                    </Item>
                ))}
            </List>
        </Wrapper>
    )
};

export default ImageGallery;