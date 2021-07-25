import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchInput from "./index"
import {fetchData, handleInput} from "../../redux/actions";
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import userEvent from '@testing-library/user-event'

jest.mock("../../redux/actions", () => ({
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

  it('renders', () => {
    expect(component).toMatchSnapshot()
  });

  it("on input change", () => {
    userEvent.type(input, "apples oranges")
    expect(input.value).toBe("apples oranges")
  })

  it.only("on pressing enter", () => {
    userEvent.type(input, "bananas grapes")
    userEvent.keyboard("{Enter}")
    expect(fetchData).toHaveBeenCalled()
  })
})
