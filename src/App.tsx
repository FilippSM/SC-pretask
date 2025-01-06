import styled from 'styled-components';
import { CardBox } from './Components/Card';
import imgOne from './assests/images/desert.png'
import imgTwo from './assests/images/Ocean.webp'

const cardsData = [
  {
    id: 1,
    imgSrc: imgOne,
    title: "Desert",
    description: "Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."
  },
  {
    id: 2,
    imgSrc: imgTwo,
    title: "Ocean",
    description: "Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."
  }
];

function App() {
  return (
    <Box>
      {cardsData.map(card => {
        return <CardBox key={card.id} imgSrc={card.imgSrc} title={card.title} description={card.description} />
      })}
    </Box>
  )
}

export default App;

//создание враппера
//во враппере стили выравнивают div по центру страницы
const Box = styled.div`
  //height: 100vh;
  display: flex;
  // justify-content: center;align-items: center; 

  gap: 15px;
  flex-wrap: wrap; //Когда в контейнере недостаточно места для размещения всех флекс-элементов в одной строке, flex-wrap: wrap; позволяет элементам переноситься на следующую строку
`;

/* import styled from 'styled-components';
import { CardBox } from './Components/Card';
import img from './assests/images/desert.png'



function App() {
  return (
      <CardBox></CardBox> 
  );
}



export default App;
 */