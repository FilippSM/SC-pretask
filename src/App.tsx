import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <Box>
        <Card></Card>
      </Box>

    </div>
  );
}

//создание стилизованного компонента
/* const StyleBtn = styled.button`
border: none;
background-color: #ab1818;
padding: 10px 20px;
border-radius: 5px;
color: snow;
font-size: 2 rem;
font-weight: bold;
` */

const Card = styled.div`
  border-radius: 15px;
  width: 300px;
  height: 350px;

  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  background: #fff;
`

//создание враппера
const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App;
