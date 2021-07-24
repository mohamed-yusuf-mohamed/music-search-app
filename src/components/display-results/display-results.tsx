import React, { useState, useCallback, ReactElement, Component } from 'react';
import { useSelector, useDispatch } from '../../redux/hooks';
// import { handleInput } from './search-bar/actions';
import { fetchData} from '../../redux/actions';
import { shallowEqual } from 'react-redux'
import { Button, InputAdornment, TextField, CircularProgress } from "@material-ui/core"
import {SearchRounded} from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import $ from "jquery"
import styled from "styled-components"
import debounce from "lodash/debounce"
import isEqual from "lodash/isEqual"

import {Data} from "../../redux/reducer"

const DisplayContent = () => {
  const results = useSelector(state => state.data)
  const loading = useSelector(state => state.loading)
  // TODO: mobile-ready: artworkUrl30: optimize artwork loading: mobile-ready

  // TODO:
  function onClick() {
    // take them to collectionView
  }

  return (
    <Container id="display-results-container">
      <Content id="display-results-content">
        {Object.values<Data>(results).map(({kind, trackName, artistName, artworkUrl60}: Data) => {
          return (
            <Row >
              <ArtworkContainer>
                <ArtworkStub>
                  ARTWORK
                </ArtworkStub>
              </ArtworkContainer>
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
            </Row>
          )
        })}
        <ScrollMessage >
            Scroll to see more
        </ScrollMessage>
      </Content>
    </Container>
  )
}

const ScrollMessage = styled.div`
  margin-bottom: 5rem;
  background-color: white;
  text-align: center;
  font-size: 1.3rem;
  padding: 2rem;
  text-transform: uppercase;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-direction: row;
  flex: 1;
`

const Content = styled.div`
  padding: 2rem 5rem 2rem 5rem;
  flex: 1;
  `

const Row = styled.div`
  display: flex;
  background-color: green;
`

const ArtworkContainer = styled.div`
  flex: 0.3; 
  background-color: purple; 
  padding: 1rem;
`

const ArtworkStub = styled.div`background-color: grey;`

const DetailsContainer = styled.div`
  flex: 0.7;
  background-color: yellow;
  padding: 1rem
`


const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
`

const TrackName = styled.div``


const TypeAndName = styled.div``

export default DisplayContent
