import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import rectangleimage from './assests/images/Rectangle.png'


function App() {
  return (
    <div className="App">
      <Box>
        <Card>
          <Img src={rectangleimage} alt=""></Img>
          <h2>Headline</h2>
          <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
          <ButtonOne>See more</ButtonOne>
          <ButtonTwo>Save</ButtonTwo>
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

  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.7;
    color: #abb3ba;
    margin: 20px 10px;
  }

  h2 {
    font-weight: 700;
    font-size: 16px;
    color: #000;
    margin: 20px 10px;
  }
`;

const Img = styled.img`
  border: 1px solid #000;
  border-radius: 10px;
  width: 280px;
  height: 170px;
`;

const ButtonOne = styled.button`
  border: none;
  background: #4e71fe;
  border-radius: 5px;
  width: 86px;
  height: 30px;
  margin: 0px 0px 0px 10px;

  font-weight: 700;
  font-size: 10px;
  line-height: 2;
  color: #fff;
`;

//наследование
const ButtonTwo = styled(ButtonOne)`
  border: 2px solid #4e71fe;
  background: none;
  color: #4e71fe;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;


//создание враппера
const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
