import styled from "styled-components"
import MESSAGES from "constants/messages"
import { useSelector } from 'redux/hooks';
import {Component} from "./types"

export const Message = styled.div`
  margin-bottom: 5rem;
  background-color: whitesmoke;
  text-align: center;
  font-size: 1.3rem;
  padding: 2rem;
  text-transform: uppercase;
`

export const ScrollMessage = () => {
  const error = useSelector(state => state.error)
  return (
      <Message>
        {error ? MESSAGES["error"] : MESSAGES["scroll"]}
      </Message>
    )
}

export const Artwork = ({url}: Component.Artwork) => {
  return <img src={url} alt="artwork"/>
}

const _TrackName = ({text, className}: Component.TrackName) => {
  return (
    <div className={className}>
      {text}
    </div>
  )
}

export const TrackName = styled(_TrackName)`
  font-size: 2rem;
  margin-bottom: 1rem;
`

const _TypeAndName = ({type, name, className}: Component.TypesAndName) => {
  return (
    <div className={className}>
      <span className="type">{type}</span> • {name}
    </div>  
  )
}

export const TypeAndName = styled(_TypeAndName)`
  & .type {
    text-transform: capitalize
  }
  font-size: 1.5rem;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-direction: row;
  flex: 1;
`

export const Content = styled.div`
  padding: 2rem 5rem 2rem 5rem;
  flex: 1;
  `

export const Row = styled.div`
  display: flex;
  &:hover {
    background-color: whitesmoke;
  }
`

export const ArtworkContainer = styled.div`
  flex: 0.15; 
  padding: 1rem;
`

export const DetailsContainer = styled.div`
  flex: 0.85;
  padding: 1rem;
`

export const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
