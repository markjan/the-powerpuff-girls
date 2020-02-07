import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from '../components/Spinner';
import {fetchShow} from '../actions/show';
import Genres from '../components/Genres';
import EpisodeList from '../components/EpisodeList';
import './Show.scss';

const Show = (props) => {
  const dispatch = useDispatch();
  const show = useSelector(state => state.show);
  // shortcut helper var.
  const content = show.content || {};

  useEffect(() => {
    if (!show.isLoading && !show.content.id) {
      dispatch(fetchShow);
    }
  });

  return (<section className='show'>
    {show.isLoading || !content.id ? <Spinner/> :
        <div>
          <div>
            <h2>{content.name}
              <span className='small'>
                <a href={content.officialSite} title='External link to official site'
                   target='_blank' rel="noopener noreferrer">&#x21E8;</a>
              </span>
            </h2>
            <div className='small'>{content.type} | {content.status} | {content.language} | {content.network.name}</div>
            <Genres genres={content.genres}/>
          </div>
          <div className='summary'>
            <img src={content.image.medium} alt={'medium image for ' + content.name}/>
            {/* Never use dangerouslySetInnerHTML in production. */}
            <div dangerouslySetInnerHTML={{__html: content.summary}}/>
          </div>
          <h3>List of Episodes</h3>
          <EpisodeList episodes={content._embedded.episodes}/>
        </div>
    }
  </section>);
};
Show.propTypes = {
  show: PropTypes.shape({
    isLoading: PropTypes.bool,
    content: PropTypes.object, // @todo: Specify shape.
  }),
};

export default Show;