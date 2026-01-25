import Navbar from '../../components/navbar/navbar';
import HomeTitle from '../../components/home_title/home_title';
import texts from '../../texts/texts';
import ItemLayout from '../../components/item_layout/item_layout';
import Footer from '../../components/footer/footer';
import InformationItem from '../../components/information_item/information_item';

import { Clock, Hamburger, CircleDollarSign } from "lucide-react";

const Home = () => {
    return(
        <>
            <Navbar/>
            <img className='w-screen brightness-50' src='https://i.imgur.com/w6x1ayy.jpeg'/>
            <div className='flex justify-around mt-5'>
                <InformationItem icon={Clock} text={"Lanches prontos em até 20 minutos."}/>
                <InformationItem icon={Hamburger} text={"Você escolhe o ponto da sua carne."}/>
                <InformationItem icon={CircleDollarSign} text={"Preços justos pensado em todos."}/>
            </div>
            <HomeTitle id='combos' text={texts.titles.combos} />
            <ItemLayout />
            <HomeTitle id='lanches_hamburguer' text={texts.titles.lanches_hamburguer} />
            <HomeTitle id='lanches_frango' text={texts.titles.lanches_frango} />
            <HomeTitle id='lanches_veganos' text={texts.titles.lanches_veganos} />
            <HomeTitle id='acompanhamentos' text={texts.titles.acompanhamentos} />
            <HomeTitle id='bebidas' text={texts.titles.bebidas} />
            <HomeTitle id='bebidas_alcoolicas' text={texts.titles.bebidas_alcoolicas} />
            <HomeTitle id='sobremesas' text={texts.titles.sobremesa} />
            <Footer />
        </>
    )
}

export default Home;