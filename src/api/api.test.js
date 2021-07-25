import Api from "./index"
import fetch from "jest-fetch-mock"
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

describe('api', () => {
  const api = new Api()
  it('fetch success', () => {
    fetch.mockResponseOnce(() => Promise.resolve(JSON.stringify({ results: [
      {
        trackId: 1,
        trackName: "test"
      }
    ] })))
    const res = api.fetch()

    expect(res).resolves.toStrictEqual({
      "1": {
        trackId: 1,
        trackName: "test"
      }
    })
    
  });
  it('fetch error', () => {
    fetch.mockRejectOnce("error")
    expect(api.fetch()).rejects.toMatch("error")
  });
});
