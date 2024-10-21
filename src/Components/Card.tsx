import styled from "styled-components";

type CardsPropsType = {
    imgSrc: string
    title: string
    description: string
}

export const CardBox = (props: CardsPropsType) => {
    return (
        <Card>
            <Img src={props.imgSrc} alt="" />
            <Content>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
                <ButtonGroup>
                    <ButtonOne>See more</ButtonOne>
                    <ButtonTwo>Save</ButtonTwo>
                </ButtonGroup>
            </Content>
        </Card>
    );
};

const Card = styled.div`
    border-radius: 15px;
    width: 300px;
    min-height: 350px; //если тестировать много карточек при   min-height уже в низу никто ек выпадает из родителя
    padding: 10px 10px 20px; 

    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    background: #fff;
    display: flex;
    flex-direction: column;
`

const Title = styled.h2`
    font-weight: 700;
    font-size: 16px;
    color: #000;
    line-height: 1.2;
    //margin: 0px 0px 0px;
`

const Description = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 1.7;
    color: #abb3ba;
    margin: 20px 0px 20px 0px;
    flex-grow: 1; // flex-grow: 1; означает, что элемент будет занимать всю доступную свободную площадь в контейнере, если в нем есть место. Тем самым прижимаем кнопки в низ
`

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

    &:hover {
    background: #fff;
    color: #4e71fe;
    border: 2px solid #4e71fe;
    }
`;

//наследование
const ButtonTwo = styled(ButtonOne)`
    border: 2px solid #4e71fe;
    background: #fff;
    color: #4e71fe;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    &:hover {
    background: #4e71fe;
    color: #fff;
    }
`;

/*  import styled from "styled-components";
import imgOne from '../assests/images/desert.png'
import imgTwo from '../assests/images/Ocean.webp'

const cardsData = [
    {
        id: 1,
        imgSrc: imgOne,
        title: "Desert",
        description: "Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."
    },
    {
        id: 2,
        imgSrc: imgTwo,
        title: "Ocean",
        description: "Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."
    }
];

export const CardBox = () => {
    return (
        <Box>
            {cardsData.map(card => {
                return <Card key={card.id}>
                    <Img src={card.imgSrc} alt="" />
                    <Content>
                        <Title>{card.title}</Title>
                        <Description>{card.description}</Description>
                        <ButtonGroup>
                            <ButtonOne>See more</ButtonOne>
                            <ButtonTwo>Save</ButtonTwo>
                        </ButtonGroup>
                    </Content>
                </Card>
            }
            )}
        </Box>
    );
};


//создание враппера
//во враппере стили выравнивают div по центру страницы
const Box = styled.div`
  //height: 100vh;
  display: flex;
  // justify-content: center;align-items: center; 

  gap: 15px;
  flex-wrap: wrap; //Когда в контейнере недостаточно места для размещения всех флекс-элементов в одной строке, flex-wrap: wrap; позволяет элементам переноситься на следующую строку
`;


const Card = styled.div`
    border-radius: 15px;
    width: 300px;
    min-height: 350px; //если тестировать много карточек при   min-height уже в низу никто ек выпадает из родителя
    padding: 10px 10px 20px; 

    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    background: #fff;
    display: flex;
    flex-direction: column;
`

const Title = styled.h2`
    font-weight: 700;
    font-size: 16px;
    color: #000;
    line-height: 1.2;
    //margin: 0px 0px 0px;
`

const Description = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 1.7;
    color: #abb3ba;
    margin: 20px 0px 20px 0px;
    flex-grow: 1; // flex-grow: 1; означает, что элемент будет занимать всю доступную свободную площадь в контейнере, если в нем есть место. Тем самым прижимаем кнопки в низ
`

const Img = styled.img`
    //  border: 1px solid #000; 
    border-radius: 10px;
    width: 100%;
    height: 170px;
    //   padding-bottom: 10px; 
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

    &:hover {
    background: #fff;
    color: #4e71fe;
    border: 2px solid #4e71fe;
    }
`;

//наследование
const ButtonTwo = styled(ButtonOne)`
    border: 2px solid #4e71fe;
    background: #fff;
    color: #4e71fe;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    &:hover {
    background: #4e71fe;
    color: #fff;
    }
`; */