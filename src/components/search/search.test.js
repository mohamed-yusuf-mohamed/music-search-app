import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchInput from "./index"
import {fetchData} from "redux/actions";
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import userEvent from '@testing-library/user-event'

jest.mock("redux/actions", () => ({
  ...jest.requireActual("../../redux/actions"),
  fetchData: jest.fn(() => ({type: ""}))
}))

describe("search input component", () => {
  const {getByTestId} = render(
    <Provider store={store}>
        <SearchInput />
    </Provider>
  );
  const input = document.querySelector("[data-testid=search-component] input")
  const component = getByTestId("search-component")

  it("on pressing enter", () => {
    // only works when the first test, time-constrained to resolve
    input.focus()
    userEvent.keyboard("{Enter}")
    expect(fetchData).toHaveBeenCalled()
    input.blur()
  })

  it('renders', () => {
    expect(component).toMatchSnapshot()
  });

  it("on input change", () => {
    const e = {target: { value: "apples oranges" }}
    fireEvent.change(input, e)
    expect(input.value).toBe("apples oranges")
  })
})
