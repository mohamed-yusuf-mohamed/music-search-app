import PropTypes from "prop-types"
import React from "react"
import { useSelector, useDispatch } from '../../redux/hooks';
import { handleInput, fetchData } from '../../redux/actions';
import { Button, InputAdornment, TextField, CircularProgress } from "@material-ui/core"
import {SearchRounded} from '@material-ui/icons';
import styled from "styled-components"

// TODO: @ imports

// TODO: mixture of single quotes and double quotes, stick to double quotes

const SearchInput = () => {
  const input = useSelector(state => state.input)
  const dispatch = useDispatch();

  return (
    <>
    <StyledTextField
    id="search-input"
    variant="outlined"
    placeholder="Search for your favourite song, artist or album"
    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
      if(e.key === "Enter") {
        return dispatch(fetchData())
      }
    }}
    value={input}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(handleInput(e))}
    InputProps={{
      endAdornment: (
        <InputAdornment position="start">
          <SearchRounded onClick={() => dispatch(fetchData())}/>
        </InputAdornment>
      )
    }}
  />
  </>
  )
}

// TODO: make icon button

// TODO: align input text center

// TODO: wrapping container element
const Container = styled.div`
  flex: 1
`

const StyledTextField = styled(TextField)`
  flex: 1;
`

export default SearchInput
