import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import rectangleimage from './Rectangle.png'


function App() {
  return (
    <div className="App">
      <Box>
        <Card>
          <Img src={rectangleimage} alt=""></Img>
        </Card>
      </Box>

    </div>
  );
}

const Card = styled.div`
  border-radius: 15px;
  width: 300px;
  height: 350px;
  padding: 10px;

  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  background: #fff;
`
const Img = styled.img`
  border: 1px solid #000;
  border-radius: 10px;
  width: 280px;
  height: 170px;
`


//создание враппера
const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App;
