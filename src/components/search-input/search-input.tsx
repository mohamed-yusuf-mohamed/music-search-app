import PropTypes from "prop-types"
import React from "react"
import { useSelector, useDispatch } from '../../redux/hooks';
import { handleInput, fetchData } from '../../redux/actions';
import { Button, InputAdornment, TextField, CircularProgress } from "@material-ui/core"
import {SearchRounded} from '@material-ui/icons';

// TODO: @ imports

// TODO: mixture of single quotes and double quotes, stick to double quotes

const SearchInput = () => {
  const input = useSelector((state) => state.input)
  const dispatch = useDispatch();

  // TODO: the search button thing: to make it, onType shows results, remove search button

  return (
    <>
    <TextField
    id="search-input"
    variant="outlined"
    placeholder="Search for your favourite song, artist or album"
    value={input}
    onChange={(e) => dispatch(handleInput(e))}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchRounded />
        </InputAdornment>
      ),
    }}
  />
    <Button variant="contained" color="primary" onClick={() => dispatch(fetchData())}>
        Search
    </Button>
  </>
  )
}

export default SearchInput
