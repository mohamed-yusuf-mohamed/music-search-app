import React from 'react';
import { useSelector } from 'redux/hooks';
import { shallowEqual } from 'react-redux';
import styled from "styled-components"
import isEmpty from "lodash/isEmpty"
import {Data} from "redux/reducer"
import LinearProgress from '@material-ui/core/LinearProgress';
import MESSAGES from "constants/messages"

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

const Message = styled.div`
  margin-bottom: 5rem;
  background-color: whitesmoke;
  text-align: center;
  font-size: 1.3rem;
  padding: 2rem;
  text-transform: uppercase;
`

const ScrollMessage = () => {
  const error = useSelector(state => state.error)
  return (
      <Message>
        {error ? MESSAGES["error"] : MESSAGES["scroll"]}
      </Message>
    )
}

const Artwork = ({url}: {url: string}) => {
  return <img src={url} alt="artwork"/>
}

const _TrackName = ({text, className}: {text: string, className?: string}) => {
  return (
    <div className={className}>
      {text}
    </div>
  )
}

const TrackName = styled(_TrackName)`
  font-size: 2rem;
  margin-bottom: 1rem;
`

const _TypeAndName = ({type, name, className}: {type: string, name: string, className?: string}) => {
  return (
    <div className={className}>
      <span className="type">{type}</span> • {name}
    </div>  
  )
}

const TypeAndName = styled(_TypeAndName)`
  & .type {
    text-transform: uppercase
  }
  font-size: 1.5rem;
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
  &:hover {
    background-color: whitesmoke;
  }
`

const ArtworkContainer = styled.div`
  flex: 0.15; 
  padding: 1rem;
`

const DetailsContainer = styled.div`
  flex: 0.85;
  padding: 1rem;
`

const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export default DisplayContent
