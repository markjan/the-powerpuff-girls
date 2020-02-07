import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const EpisodeListItem = (props) => {
  const pad = (num) => String(num).padStart(2, '0');
  const imageUrl = props.episode.image ? props.episode.image.medium : '/assets/logo192.png';
  const detailUrl = `/episode/${props.episode.name}-${props.episode.id}`;
  return (
      props.episode ? <li>
            <div className='card'>
              <div className='card-header'>
                <Link to={detailUrl}>
                  <strong>S{pad(props.episode.season)}E{pad(props.episode.number)}: {props.episode.name}</strong>
                </Link>
              </div>

              <Link to={detailUrl}>
                { <img src={imageUrl} alt={'image for ' + props.episode.name}/> }
              </Link>
            </div>
          </li>
          : ''
  );
};

EpisodeListItem.propTypes = {
  episode: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.shape({
      medium: PropTypes.string,
    }),
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    season: PropTypes.number.isRequired,
  }).isRequired,
};

export default EpisodeListItem;