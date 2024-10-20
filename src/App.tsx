import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import desert from './assests/images/desert.png'


function App() {
  return (
    <div className="App">
      <Box>
        <Card>
          <Img src={desert} alt=""/>
          <Content>
            <h2>Headline</h2>
            <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
            <ButtonGroup>
              <ButtonOne>See more</ButtonOne>
              <ButtonTwo>Save</ButtonTwo>
            </ButtonGroup>
          </Content>
        </Card>
        <Card>
          <Img src={desert} alt=""/>
          <Content>
            <h2>Headline</h2>
            <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
            </p>
            <ButtonGroup>
              <ButtonOne>See more</ButtonOne>
              <ButtonTwo>Save</ButtonTwo>
            </ButtonGroup>
          </Content>
        </Card>
        <Card>
          <Img src={desert} alt=""/>
          <Content>
            <h2>Headline</h2>
            <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
            <ButtonGroup>
              <ButtonOne>See more</ButtonOne>
              <ButtonTwo>Save</ButtonTwo>
            </ButtonGroup>
          </Content>
        </Card>
        <Card>
          <Img src={desert} alt=""/>
          <Content>
            <h2>Headline</h2>
            <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
            <ButtonGroup>
              <ButtonOne>See more</ButtonOne>
              <ButtonTwo>Save</ButtonTwo>
            </ButtonGroup>
          </Content>
        </Card>
      </Box>
    </div>
  );
}

const Card = styled.div`
  border-radius: 15px;
  width: 300px;
  min-height: 350px; //если тестировать много карточек при   min-height уже в низу никто ек выпадает из родителя
  padding: 10px 10px 20px; 

  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  background: #fff;
  display: flex;
  flex-direction: column;


  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.7;
    color: #abb3ba;
    margin: 20px 0px 20px 0px;
    flex-grow: 1; // flex-grow: 1; означает, что элемент будет занимать всю доступную свободную площадь в контейнере, если в нем есть место. Тем самым прижимаем кнопки в низ
  }

  h2 {
    font-weight: 700;
    font-size: 16px;
    color: #000;
    line-height: 1.2;
    //margin: 0px 0px 0px;
  }
`;

const Img = styled.img`
 /*  border: 1px solid #000; */
  border-radius: 10px;
  width: 100%;
  height: 170px;
/*   padding-bottom: 10px; */
  object-fit: cover; // обрезает картинку с сохранение пропорций
`;

const Content = styled.div`
  padding: 20px 10px 0px; //можно убрать верхний паддинг и задать нижний паддинг для Img в этом случает Img толкает Content
  display: flex;
  flex-direction: column;
  height: 100%;

`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const ButtonOne = styled.button`
  border: none;
  background: #4e71fe;
  border-radius: 5px;
  width: 86px;
  height: 30px;
  //margin: 0px 0px 0px 0px;

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
//во враппере стили выравнивают div по центру страницы
const Box = styled.div`
  //height: 100vh;
  display: flex;
 /*  justify-content: center;
  align-items: center; */

  gap: 15px;
  flex-wrap: wrap; //Когда в контейнере недостаточно места для размещения всех флекс-элементов в одной строке, flex-wrap: wrap; позволяет элементам переноситься на следующую строку
`;

export default App;
