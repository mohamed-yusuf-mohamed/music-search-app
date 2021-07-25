import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './app';

describe("app", () => {
  const {getByTestId} = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const app = getByTestId("app-container")
  it('renders', () => {
    expect(app).toMatchSnapshot()
  });
})
