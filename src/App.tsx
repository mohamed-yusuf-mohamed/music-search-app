import React from 'react';
import { useDispatch } from 'redux/hooks';
import { fetchData } from 'redux/actions';
import SearchInput from "components/search"
import $ from "jquery"
import styled from "styled-components"
import debounce from "lodash/debounce"
import DisplayResults from 'components/display-results';

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
  font-family: sans-serif;
`

const Content = styled.div`
  flex: 0.5; 
  flex-direction: column; 
  display: flex;
`

const App = () => {
  const dispatch = useDispatch();
  const handleScroll = debounce(() => {
    const bottom = Math.round($(window).scrollTop() || 0) + Math.round($(window).height() || 0) === Math.round($(document).height() || 0)
    if (bottom) {
      return dispatch(fetchData())
    }
  }, 500)

  React.useEffect(() => {
    $(window).on("wheel", handleScroll)
    return () => {
      $(window).off("wheel", handleScroll)
    }
  }, [handleScroll])

  return (
    <Container data-testid="app-container">
      <Content id="app-content">
        <Header id="app-header">
          <SearchInput />
        </Header>
        <DisplayResults />
      </Content>
    </Container>
  );
}

export default App;

