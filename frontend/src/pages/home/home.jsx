import './home.css';

import Navbar from '../../components/navbar/navbar';
import Title from '../../components/titles/title';
import texts from '../../texts/texts';
import ItemLayout from '../../components/item_layout/item_layout';

const Home = () => {
    return(
        <>
            <Navbar />
            <img className='w-screen h-[18vh] brightness-50' src='https://i.imgur.com/w6x1ayy.jpeg'/>
            <Title id='combos' text={texts.titles.combos} />
            <ItemLayout />
            <Title id='lanches_hamburguer' text={texts.titles.lanches_hamburguer} />
            <Title id='lanches_frango' text={texts.titles.lanches_frango} />
            <Title id='lanches_veganos' text={texts.titles.lanches_veganos} />
            <Title id='acompanhamentos' text={texts.titles.acompanhamentos} />
            <Title id='bebidas' text={texts.titles.bebidas} />
            <Title id='bebidas_alcoolicas' text={texts.titles.bebidas_alcoolicas} />
            <Title id='sobremesas' text={texts.titles.sobremesa} />
        </>
    )
}

export default Home;