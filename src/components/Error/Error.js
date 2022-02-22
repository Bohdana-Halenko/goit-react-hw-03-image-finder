import PropTypes from 'prop-types';

export default function Error({ message }) {
    return(
        <Error>
            {message}
        </Error>
    );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};