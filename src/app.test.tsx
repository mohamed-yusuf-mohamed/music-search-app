import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './app';

describe("app", () => {
  it.only('renders', () => {
    const app = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  
    expect(app).toMatchSnapshot()
  });
})
