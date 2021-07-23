import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from '../../redux/hooks';
// import { handleInput } from './search-bar/actions';
import { fetchData, handleInput, test } from '../../redux/actions';
import { shallowEqual } from 'react-redux'
import { Button, InputAdornment, TextField, CircularProgress } from "@material-ui/core"
import {SearchRounded} from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import $ from "jquery"
import styled from "styled-components"
import debounce from "lodash/debounce"
import isEqual from "lodash/isEqual"

const DisplayContent = () => {
  const results = useSelector(state => state.data)
  const loading = useSelector(state => state.loading)
  // TODO:
  // mobile-ready: artworkUrl30: optimize artwork loading: mobile-ready

  function onClick() {
    // take them to collectionView
  }

  // TODO: mobile-ready


  

  // TODO: types

  return <>{Object.values(results).map(({kind, trackName, artistName, artworkUrl60}: any) => {
    return (
      <StyledBoxContainer onScroll={console.log}>
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
        {loading && <CircularProgress />}
      </StyledBoxContainer>
    )
  })}</>
}



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

export default DisplayContent
