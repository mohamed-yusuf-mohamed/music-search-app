import React, { useState } from 'react';

// import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from './counterSlice';
import styles from './Counter.module.css';

// import TextField from '@material-ui/core/TextField';
// import InputAdornment from '@material-ui/core/InputAdornment';
import { Button, InputAdornment, TextField, CircularProgress } from "@material-ui/core"
import {SearchRounded} from '@material-ui/icons';
import Box from '@material-ui/core/Box';

import $ from "jquery"

import styled from "styled-components"

// import debounce from "lodash/debounce"

// TODO: remove debounce library

// TODO: delaunay triangles that react to keystrokes


export default function SearchBar({input}) {

  // TODO: types
  const [state, setState] = React.useState({
    loading: false,
    parsedInput: "",
    input: "",
    data: [],
    fetchCount: 1
  })
  // console.log('state', state);
  // TODO: 

  // GOES TO REDUX
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value
    setState({
      ...state,
      input,
      parsedInput: input.split(' ').join('+')
    })
    // parseInput(event.target.value)
    // setSearchText(event.target.value);
  };

  // GOES TO REDUX
  const fetchContent = async () => {    
    // TODO: system for offsetting
    // `https://itunes.apple.com/search?term=${state.parsedInput}&offset=${(state.fetchCount-1)*10}&limit=${state.fetchCount * 10}`
    // console.log(`https://itunes.apple.com/search?term=${state.parsedInput}&offset=${(state.fetchCount-1)*10}&limit=${state.fetchCount * 10}`);
    const url = `https://itunes.apple.com/search?term=${state.parsedInput}&offset=${(state.fetchCount-1)*10}&limit=${state.fetchCount * 10}`
    console.log('url', url);
    fetch(url)
    .then(response => {
      if(!response.body) return
      return response.json()
    })
    .then(response => {
      console.log('response', response);
      // setData(response.results)
      setState({
        ...state,
        data: response.results, 
        loading: false
      })
    }).catch((error) => {
      console.log(error)
    })
  }


  // TODO: use ignite eslint
  // track line legnth

  // TODO: entries type
  function DisplayBox(props: any) {
    // TODO:
    // mobile-ready: artworkUrl30: optimize artwork loading: mobile-ready

    function onClick() {
      // take them to collectionView
    }

    // TODO: mobile-ready

    // determine kind:
    // TODO: types here
    function displayBox({kind, artworkUrl30, artistName, trackName}: any) {
      switch (kind) {
        case "song":
          
          break;
      
        default:
          break;
      }
    }

    // TODO: types
    return props.entries.map(({kind, trackName, artistName, artworkUrl60}: any) => {
      return (
        <StyledBoxContainer>
          <ArtworkContainer>artwork</ArtworkContainer>
          <DetailsContainer>
            <DetailsBox>
              <TrackName>
                {trackName}
              </TrackName>
              <TypeAndName>
                {`${kind} : ${artistName}`}
              </TypeAndName>
            </DetailsBox>
          </DetailsContainer>
        </StyledBoxContainer>
  
      )
    })
  }

  React.useEffect(() => {
    console.log('state.fetchCount', state.fetchCount);
    fetchContent()
    return () => {
      // cleanup
    }
  }, [state.fetchCount])

  React.useEffect(() => {
    console.log('state', state);

  }, [state])


  
  function onScroll() {
    // TODO: system for attaching listener? useEffect at root component? 
    // paginate: using 'offset'
    // https://itunes.apple.com/search?term=a&offset=25&limit=25
  }
  React.useEffect(() => {
    function handleScroll() {

        // TODO: FIX: doesn't work across all screen heights:
        const reachedBottom = Math.round($(window).scrollTop() || 0) + Math.round($(window).height() || 0) >= Math.round($(document).height() || 0)
        // const reachedBottom = Math.round($(window).scrollTop() || 0) + $(window).height() || 0 >= $(document).height() || 0
        // console.log('Math.round($(document).height() || 0)', Math.round($(document).height() || 0));
        // console.log('Math.round($(window).scrollTop() || 0) + Math.round($(window).height() || 0)', Math.round($(window).scrollTop() || 0) + Math.round($(window).height() || 0));
        // console.log('reachedBottom', reachedBottom);
        if (reachedBottom) {
          setState({
            ...state,
            fetchCount: 2
          })
        }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll) 
    }
  }, [])

  function caching(){}

  function onType(){}

  // TODO: preform search on keydown

  function onEnterKeydown() {

  }

  // TODO: search field placeholder style: text inside? Or a header above: or just a pulsing field?
  // TODO: search on type:
  return (
    <div>
        <TextField
        id="music-search-field"
        variant="outlined"
        // label="Type artist to search"
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
      <Button variant="contained" color="primary" onClick={() => dispatch(fetchContent)}>
        Search
      </Button>
      {/* TODO: props for component */}
      <DisplayBox entries={data} />

      {state.loading && <CircularProgress />}
      <ScrollToBottom>
        Scroll to see more
      </ScrollToBottom>


    </div>
  );
}

const ScrollToBottom = styled.p`
  margin-bottom: 200px;
  background-color: red;
`

const StyledBoxContainer = styled.div`
  display: flex;
  width: 75%;
  background-color: green;
`

const ArtworkContainer = styled.div`
  flex-grow: 1; 
  background-color: purple; 
  margin: 5px;
`

const DetailsContainer = styled.div`
  flex-grow: 5;
  background-color: yellow;
  margin: 5px;
`


const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
`

const TrackName = styled.div``


const TypeAndName = styled.div``
