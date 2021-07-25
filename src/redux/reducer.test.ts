import {fetchData, handleInput, reset, load} from "./actions"
import reducer from "./reducer"
import {api} from "../api"
import fetch from "jest-fetch-mock"
import {store} from "./store"
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

// jest.mock("./reducer", () => jest.fn())

// TODO: ensure package.json is clean, dev and client dependances are correct

describe('reducer', () => {
  beforeEach(async () => {
    await store.dispatch(reset())
  })
  
  it('initial state', () => {
    expect(store.getState()).toEqual({
      loading: false,
      parsedInput: "",
      input: "",
      data: {},
      page: 0, // TODO: fetchCount in place of page makes more sense
      error: false
    })
  });

  it('reset', async () => { 
    await store.dispatch(reset())
    expect(store.getState()).toEqual({
      loading: false,
      parsedInput: "",
      input: "",
      data: {},
      page: 0, // TODO: fetchCount in place of page makes more sense
      error: false
    })
  });

  it('load', async () => { 
    await store.dispatch(load())
    expect(store.getState()).toEqual({
      loading: true,
      parsedInput: "",
      input: "",
      data: {},
      page: 0, // TODO: fetchCount in place of page makes more sense
      error: false
    })
  });

  it('fetch', async () => {
    fetch.mockResponseOnce(() => Promise.resolve(JSON.stringify({ results: [
      {
        trackId: 1,
        trackName: "test"
      }
    ] })))
    await store.dispatch(fetchData())
    expect(store.getState()).toEqual({
      loading: false,
      parsedInput: "",
      input: "",
      data: {
        "1": {
          trackId: 1,
          trackName: "test"
        }
      },
      page: 1, // TODO: fetchCount in place of page makes more sense
      error: false
    })
  });

  it('error', async () => {
    fetch.mockRejectOnce("error")
    await store.dispatch(fetchData())
    expect(store.getState()).toEqual({
      loading: false,
      parsedInput: "",
      input: "",
      data: {},
      page: 0, // TODO: fetchCount in place of page makes more sense
      error: true
    })
  });

  it('input', async () => {
    const e = {
      target: {
        value: "apples oranges"
      }
    }
    await store.dispatch(handleInput(e))
    expect(store.getState()).toEqual({
      loading: false,
      parsedInput: "apples+oranges",
      input: "apples oranges",
      data: {},
      page: 0, // TODO: fetchCount in place of page makes more sense
      error: false
    })
    // console.log(store.getState())
  });
});
