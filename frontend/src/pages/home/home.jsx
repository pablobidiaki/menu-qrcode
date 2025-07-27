import './home.css';

import Navbar from '../../components/navbar/navbar';
import Title from '../../components/titles/title';
import texts from '../../texts/texts';

const Home = () => {
    return(
        <>
            <Navbar />
            <Title id='combos' text={texts.titles.combos} />
            <Title id='lanches_hamburguer' text={texts.titles.lanches_hamburguer} />
            <Title id='lanches_frango' text={texts.titles.lanches_frango} />
            <Title id='lanches_veganos' text={texts.titles.lanches_veganos} />
            <Title id='acompanhamentos' text={texts.titles.acompanhamentos} />
            <Title id='bebidas' text={texts.titles.bebidas} />
            <Title id='bebidas_alcoolicas' text={texts.titles.bebidas_alcoolicas} />
            <Title id='sobremesas' text={texts.titles.sobremesas} />
        </>
    )
}

export default Home;