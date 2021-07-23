import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from './redux/hooks';
// import { handleInput } from './search-bar/actions';
import { fetchData } from './redux/actions';
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
  // TODO: use ignite eslint
  // track line legnth
  
  const trackScrolling = useCallback((e) => {
    // TODO: refactor
    const bottom = Math.round($(window).scrollTop() || 0) + Math.round($(window).height() || 0) === Math.round($(document).height() || 0)
    if (bottom) {
      return dispatch(fetchData())
    }
  }, [dispatch]);
  const debTrackScrolling = debounce(trackScrolling, 500)

  React.useEffect(() => {
    $(window).on("wheel", debTrackScrolling)
    return () => {
      $(window).off("wheel", debTrackScrolling)
    }
  }, [debTrackScrolling])

  return (
    <Container id="flex-container">
      <Content id="content">
        <Header id="header">
          <SearchInput />
        </Header>
        <DisplayResults />
      </Content>
    </Container>
  );
}

const Header = styled.div`
  background-color: whitesmoke;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 10rem 5rem 2rem 5rem;

`

const Container = styled.main`
  display: flex; 
  justify-content: center; 
  flex-direction: row; 
  background-color: grey;
`

const Content = styled.div`
  background-color: pink; 
  flex: 0.5; 
  flex-direction: column; 
  display: flex;
`

export default App;

