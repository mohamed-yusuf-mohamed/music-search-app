import React from 'react';
import {render} from '@testing-library/react';
import SearchInput from "./index"
import {fetchData} from "redux/actions";
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import mock from "./__mocks__/data.json"
import fetch from "jest-fetch-mock"
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

describe("display results ", () => {
  beforeAll(async () => {
    // preload store with "justin" search data
    fetch.mockResponseOnce(() => Promise.resolve(JSON.stringify(mock)))
    await store.dispatch(fetchData())
  })

  const {getByTestId} = render(
    <Provider store={store}>
        <SearchInput />
    </Provider>
  );

  const component = getByTestId("display-results-component")

  it('renders', async () => {
    expect(component).toMatchSnapshot()
  });
})
