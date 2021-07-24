import React, { useState, useCallback, FC, ReactElement } from 'react';
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
import { configureStore, ThunkAction, Action, AnyAction, applyMiddleware } from '@reduxjs/toolkit';
import {Thunk} from "./redux/store"


// import React, {  } from 'react';



// TODO: delaunay triangles that react to keystrokes

const App = () => {
  const dispatch = useDispatch();
  // TODO: use ignite eslint
  // track line legnth
  const onScroll = debounce(() => {
    // TODO: refactor
    const bottom = Math.round($(window).scrollTop() || 0) + Math.round($(window).height() || 0) === Math.round($(document).height() || 0)
    if (bottom) {
      return dispatch(fetchData())
    }
  }, 500)

  React.useEffect(() => {
    $(window).on("wheel", onScroll)
    return () => {
      $(window).off("wheel", onScroll)
    }
  }, [onScroll])

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

