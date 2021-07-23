import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from './redux/hooks';
// import { handleInput } from './search-bar/actions';
import { fetchData, handleInput, test } from './redux/actions';
import { shallowEqual } from 'react-redux'
import SearchInput from "./components/search-input"
import { Button, InputAdornment, TextField, CircularProgress } from "@material-ui/core"
import {SearchRounded} from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import $ from "jquery"
import styled from "styled-components"
import debounce from "lodash/debounce"
import isEqual from "lodash/isEqual"
import DisplayResults from './components/display-results/display-results';


// TODO: delaunay triangles that react to keystrokes

function App() {
  const dispatch = useDispatch();
  // TODO: should be able to pull in as below, using shallowEqual: validate with docs
  const {loading, error, parsedInput, input, data, fetchCount} = useSelector((state) => state, shallowEqual)
  // const data = useSelector((state) => state.app.data, shallowEqual)
  // const input = useSelector((state) => state.app.input)
  // const parsedInput = useSelector((state) => state.app.parsedInput)
  // const loading = useSelector((state) => state.app.loading)

    // TODO: use ignite eslint
  // track line legnth

  // TODO: entries type

      // TODO: maybe use page? rather than fetch count:
  

  const trackScrolling = useCallback((e) => {
    // TODO: refactor
    const isBottom = Math.round($(window).scrollTop() || 0) + Math.round($(window).height() || 0) === Math.round($(document).height() || 0)
    if (isBottom) {
      return dispatch(fetchData())
    }
  }, [dispatch]);
// TODO: refactor
  const debTrackScrolling = debounce(trackScrolling, 500)

  React.useEffect(() => {
    $(window).on("wheel", debTrackScrolling)
    return () => {
      $(window).off("wheel", debTrackScrolling)
    }
  }, [debTrackScrolling])


  // TODO: semantic css? <header>
  function caching(){}

  function onType(){}

  // TODO: preform search on keydown

  function onEnterKeydown() {

  }

  // TODO: search field placeholder style: text inside? Or a header above: or just a pulsing field?
  // TODO: search on type:
  return (
    <main>
      <SearchInput />
      <DisplayResults />
      <ScrollToBottom >
            Scroll to see more
      </ScrollToBottom>
      


    </main>
  );
}

const StyledApp = styled(App)`
  width: 50%;
  border: 3px solid green;
  padding: 10px;
  margin: auto;

`

const ScrollToBottom = styled.p`
  margin-bottom: 200px;
  background-color: brown;
`

export default StyledApp;

