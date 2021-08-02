import React from 'react';
import { useSelector } from 'redux/hooks';
import { shallowEqual } from 'react-redux';
import isEmpty from "lodash/isEmpty"
import {Data} from "redux/reducer"
import LinearProgress from '@material-ui/core/LinearProgress';
import {Container, Content, Row, ArtworkContainer, Artwork, DetailsContainer, DetailsBox, TrackName, TypeAndName, ScrollMessage} from "./components"

const DisplayContent = () => {
  const results = useSelector(state => state.data)
  const loading = useSelector(state => state.loading)
  const data = useSelector(state => state.data, shallowEqual)

  return (
    <Container data-testid="display-results-component">
      <Content id="display-results-content">
        {Object.values<Data>(results).map(({kind, trackName, artistName, artworkUrl100, trackId}: Data) => {
          return (
            <Row key={trackId}>
              <ArtworkContainer>
                <Artwork url={artworkUrl100} />
              </ArtworkContainer>
              <DetailsContainer>
                <DetailsBox>
                  <TrackName text={trackName} />
                  <TypeAndName type={kind} name={artistName} />
                </DetailsBox>
              </DetailsContainer>
            </Row>
          )
        })}
        {loading && <LinearProgress />}
        {!isEmpty(data) && !loading && <ScrollMessage />}
      </Content>
    </Container>
  )
}

export default DisplayContent
