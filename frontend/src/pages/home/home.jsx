import { useEffect, useState } from 'react';

import Navbar from '../../components/navbar/navbar';
import HomeTitle from '../../components/home_title/home_title';
import texts from '../../texts/texts';
import ItemLayout from '../../components/item_layout/item_layout';
import Footer from '../../components/footer/footer';
import InformationItem from '../../components/information_item/information_item';
import { orderService } from '../../services/orderService';

import { Clock, Hamburger, CircleDollarSign } from "lucide-react";

const Home = () => {
    const [items, setItems] = useState([])

    const handleItemAdded = (novoItem) => {
        setItems(prevItems => [...prevItems, novoItem]);
    };

    useEffect(() => {
        const getItems = async () => {
            try{
                const items = await orderService.getOrders()
                setItems(items.orders)
                console.log(items.orders)
            }
            catch(error){
                console.error(`Error try checking the orders ${error}`)
                throw error
            }
        }
        
        getItems()
    },[])

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
            <ItemLayout type ='Combo' itemType='Combo' onAddItem={handleItemAdded}/>
            <HomeTitle id='lanches_hamburguer' text={texts.titles.lanches_hamburguer} />
            <ItemLayout type ='Hamburguer' itemType='Hamburguer' onAddItem={handleItemAdded}/>
            <HomeTitle id='lanches_frango' text={texts.titles.lanches_frango} />
            <ItemLayout type ='Frango' itemType='Hamburguer' onAddItem={handleItemAdded}/>
            <HomeTitle id='lanches_veganos' text={texts.titles.lanches_veganos} />
            <ItemLayout type ='Vegano' itemType='Hamburguer' onAddItem={handleItemAdded}/>
            <HomeTitle id='acompanhamentos' text={texts.titles.acompanhamentos} />
            <ItemLayout type ='Acompanhamento' itemType='Acompanhamento' onAddItem={handleItemAdded}/>
            <HomeTitle id='bebidas' text={texts.titles.bebidas} />
            <ItemLayout type ='Bebida' itemType='Bebida' onAddItem={handleItemAdded}/>
            <HomeTitle id='bebidas_alcoolicas' text={texts.titles.bebidas_alcoolicas} />
            <ItemLayout type ='Bebida Alcoolica' itemType='Bebida' onAddItem={handleItemAdded}/>
            <HomeTitle id='sobremesas' text={texts.titles.sobremesa} />
            <ItemLayout type ='Sobremesa' itemType='Sobremesa' onAddItem={handleItemAdded}/>
            {items.length > 0 && <Footer itens_quantity={items.length}/>}
        </>
    )
}

export default Home;