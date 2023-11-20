import React from 'react'
import styled from 'styled-components'
import './App.css';

import Sidebar from './components/containers/sidebar'
import Dashboard from './components/containers/dashboard'

const StyledApp = styled.div`
  height: 1080px;
  display: flex;
`;

const App = () => {
  return (
    <>
      <StyledApp >
        <Sidebar />
        <Dashboard />
      </StyledApp>
    </>
  )
}

export default App