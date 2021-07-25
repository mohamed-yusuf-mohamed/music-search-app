import React from 'react';
import { render } from '@testing-library/react';
import Error from "./error"

describe("error component", () => {
  const {getByTestId} = render(
    <Error />
  );
  const component = getByTestId("error-component")
  it('renders', () => {
    expect(component).toMatchSnapshot()
  });
})
