import PropTypes from 'prop-types';

const ImageGalleryItem = ({id, webformatURL, tags, largeImageURL, onClickItem,}) => {
  return (
    <li key={id}>
      <img
        className='galleryImage'
        alt={tags}
        src={webformatURL}
        data-source={largeImageURL}
        onClick={onClickItem}
      />
    </li>
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