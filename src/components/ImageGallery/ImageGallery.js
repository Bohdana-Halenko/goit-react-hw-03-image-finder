import React from 'react';
// import propTypes from 'prop-types';

const ImageGallery = ({ children }) => (
	<>
		<ul className='imageGallery'>
			{children}
		</ul>
	</>
);

// ImageGallery.propTypes = {
//     children: propTypes.node.isRequired,
// };

export default ImageGallery;