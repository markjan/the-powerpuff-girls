import React from 'react';
import {render} from '@testing-library/react';
import Show from './Show';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {BrowserRouter} from 'react-router-dom';

describe('Check Show route renders correctly', () => {
  let mockStore;

  beforeEach(() => {
    const middleWares = [thunk];
    //creates the store with any initial state or middleware needed
    mockStore = configureStore(middleWares);
  });

  const renderShow = (storeData) => {
    return render(
        <Provider store={mockStore(storeData)}>
          <BrowserRouter>
            <Show/>
          </BrowserRouter>
        </Provider>,
    );
  };

  it('Is loading, no content', () => {
    const {container, getByAltText} = renderShow({
      show: {
        isLoading: true,
      },
    });
    // const nameElement = getByText('/The Powerpuff Girls/i');
    // expect(nameElement).toBeInTheDocument();
    const spinner = container.querySelector('[data-test-id="spinner"]');
    expect(spinner).toBeInTheDocument();
    const image = getByAltText('please be patient ...');
    expect(image).toBeInTheDocument();
  });

  it('Not loading, no content', () => {
    const {container, getByAltText} = renderShow({
      show: {
        content: {},
      },
    });
    // const nameElement = getByText('/The Powerpuff Girls/i');
    // expect(nameElement).toBeInTheDocument();
    const spinner = container.querySelector('[data-test-id="spinner"]');
    expect(spinner).toBeInTheDocument();
    const image = getByAltText('please be patient ...');
    expect(image).toBeInTheDocument();
  });

  it('Mock content', () => {
    const content = require('./../test-assets/tvmaze-show');
    const {getByText, getAllByText} = renderShow({
      show: {
        isLoading: false,
        content: content,
      },
    });
    expect(getAllByText('The Powerpuff Girls')).toHaveLength(2);
    expect(getByText('Comedy')).toBeInTheDocument();
    expect(getByText('S01E07: Bye Bye, Bellum')).toBeInTheDocument();
  });
});