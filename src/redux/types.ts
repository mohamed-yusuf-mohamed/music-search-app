export interface ResponseData {
  artistName: string,
  kind: string,
  trackName: string, 
  artworkUrl60: string   
}

// TODO: types
export interface SearchBarState {
  loading: boolean,
  error: boolean,
  // status: 'loading' | 'loaded' | 'error',
  parsedInput: string,
  input: string,
  data: ResponseData[],
  fetchCount: number
}

const initialState: SearchBarState = {
  // status: ""
  loading: false,
  error: false,
  parsedInput: "",
  input: "",
  data: [],
  fetchCount: 1
};