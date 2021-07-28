import React, {useCallback} from "react"
import { useSelector, useDispatch } from 'redux/hooks';
import { handleInput, fetchData, newSearch } from 'redux/actions';
import { InputAdornment, TextField } from "@material-ui/core"
import {SearchRounded} from '@material-ui/icons';
import styled from "styled-components"
import isEmpty from "lodash/isEmpty"

const StyledTextField = styled(TextField)`
  flex: 1;
`

const Search = () => {
  const input = useSelector(state => state.input)
  const data = useSelector(state => state.data)
  const dispatch = useDispatch();

  const dataLoaded = !isEmpty(data)

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if(e.key === "Enter") {
        if (dataLoaded) {
          return dispatch(newSearch())
        }
        return dispatch(fetchData())
      }
    },
    [dispatch, dataLoaded],
  )

  const handleIconClick = useCallback(
    () => dispatch(fetchData()),
    [dispatch],
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => dispatch(handleInput(e)),
    [dispatch],
  )

  return (
    <StyledTextField
      data-testid="search-component"
      variant="outlined"
      placeholder="Search for your favourite song, artist or album"
      onKeyDown={handleKeyDown}
      value={input}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchRounded onClick={handleIconClick}/>
          </InputAdornment>
        )
      }}
    />
  )
}

export default Search
