import PropTypes from 'prop-types';

const ImageGalleryItem = ({id, webformatURL, tags, largeImageURL, onClickItem,}) => {
  return (
    <ImageGalleryItem key={id}>
      <img
        alt={tags}
        src={webformatURL}
        data-source={largeImageURL}
        onClick={onClickItem}
      />
    </ImageGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClickItem: PropTypes.func,
};

export default ImageGalleryItem;