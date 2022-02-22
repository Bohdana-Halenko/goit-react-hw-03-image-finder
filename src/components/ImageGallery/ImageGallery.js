import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

function ImageGallery({ images, toggleModal }) {
  return (
    <ImageGallery>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onClickItem={() => {
            toggleModal(largeImageURL);
          }}
        />
      ))}
    </ImageGallery>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  onClickItem: PropTypes.func,
};
export default ImageGallery;