import React from 'react';
import PropTypes from 'prop-types';

import EpisodeListItem from './EpisodeListItem';

const EpisodeList = (props) => {
  return (
      props.episodes ?
          <ol className='episodes'>
            {props.episodes.map((episode) =>
                <EpisodeListItem key={episode.id} episode={episode}/>,
            )}
          </ol> : ''
  );
};

EpisodeList.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EpisodeList;