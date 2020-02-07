import React from 'react';
import PropTypes from 'prop-types';

const Genres = (props) => {
  return (
      props.genres ?
          <div className="genres">
            {props.genres.map((genre) => <span className="badge" key={genre}>{genre}</span>)}
          </div>
          :
          ''
  );
};

Genres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Genres;