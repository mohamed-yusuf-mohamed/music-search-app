import React, {useCallback} from "react"
import { useSelector, useDispatch } from '../../redux/hooks';
import { handleInput, fetchData, newSearch } from '../../redux/actions';
import { Button, InputAdornment, TextField } from "@material-ui/core"
import {SearchRounded} from '@material-ui/icons';
import styled from "styled-components"
import isEmpty from "lodash/isEmpty"

// TODO: @ imports

// TODO: mixture of single quotes and double quotes, stick to double quotes

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
        endAdornment: (
          <InputAdornment position="start">
            <SearchRounded onClick={handleIconClick}/>
          </InputAdornment>
        )
      }}
    />
  )
}

// TODO: make icon button

// TODO: align input text center

// TODO: wrapping container element
// const Container = styled.div`
//   flex: 1
// `

const StyledTextField = styled(TextField)`
  flex: 1;
`

export default Search
