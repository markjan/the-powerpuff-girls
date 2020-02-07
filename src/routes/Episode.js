import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {fetchShow} from '../actions/show';
import {Link} from 'react-router-dom';
import './Episodes.scss';

const Episode = () => {
      const {id} = useParams();

      /**
       * This is a copy/paste from Show component.
       * We need it because you might reach this url directly,
       * but the code would be dryer if we moved the check to actions/show.
       */
      const dispatch = useDispatch();
      const show = useSelector(state => state.show);
      // shortcut helper var.
      const content = show.content || {};

      useEffect(() => {
        if (!show.isLoading && !content.id) {
          dispatch(fetchShow);
        }
      });

      if (!content._embedded) {
        return '';
      }

      const episode = content._embedded.episodes.find(episode => String(episode.id) === id);
      // We won't check if the id was valid or the requested name matches the id in this demo.

      return (
          <section className='episode'>
            <h2>Episode {episode.name}
              <span className='small'>
                <a href={episode.url} title='External link for episode'
                   rel="noopener noreferrer" target='_blank'>&#x21E8;</a>
              </span>
            </h2>
            <div className='small'>season {episode.season} | episode {episode.number} | first aired {episode.airdate}</div>
            <div className='summary'>
              {episode.image ?
                  <img src={episode.image.medium} alt={'medium image for ' + episode.name}/> : ''
              }
              {/* Never use dangerouslySetInnerHTML in production. */}
              <div dangerouslySetInnerHTML={{__html: episode.summary}}/>
            </div>
            <Link to='/'>&#x21E6; Back to Show Overview</Link>
          </section>
      );
    }
;

Episode.propTypes = {};

export default Episode;