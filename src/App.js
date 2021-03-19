import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Character from  './components/Character.js'
import { BASE_URL } from './constants/index';
import styled from 'styled-components'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.


  const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: column wrap;
    h1 {
      color: #FFD700;
      font-family: font-family: 'Notable', sans-serif;
      font-size: 3rem;
      font-weight: 400;
      text-shadow: 1px 1px 5px #000;
    }
  `;


  const [peopleList, setPeopleList] = useState([])

  const fetchPeople = () => {
    axios.get(`${BASE_URL}people/`)
      .then(res => {
        console.log('the API is running, catch it!')
        setPeopleList(res.data)
      })
      .catch(err => {
        console.log('The API did Ups!')
      })
  }

  useEffect(fetchPeople, [])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <AppContainer className="App">
    <h1>Characters</h1>
    {
      peopleList.map(element => {
        return <Character key={element.name} data={element} />
      })
    }

  </AppContainer>
  );
}

export default App;
