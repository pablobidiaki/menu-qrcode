import { useState } from "react"
import Carousel from "../../components/carousel/carousel";
import Ingredients from "../../components/ingredients/ingredients";
import MeatDonenessSelector from "../../components/meat_doneness_selector/meat_doneness_selector";
import SideDishesContainer from "../../components/side_dishes/side_dishes_container";
import texts from "../../texts/texts";
import { CircleArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DetailsItem = () => {

    const navigate = useNavigate();

    return(
        <>
            <div className="relative">
                <Carousel />
                <CircleArrowLeft onClick={() => navigate("/")} className="absolute top-2 left-2 z-10 text-white w-8 h-8 cursor-pointer" />
            </div>

            <div className="flex justify-between m-1 font-sans">
                <h1 className="text-2xl">Combo X-Burguer</h1>
                <p className="text-2xl text-green-500">R$20.99</p>
            </div>
            <p className="m-1 text-gray-500 font-sans">Acompanha nosso X-Burger, uma porção de fritas média e uma lata do refrigerante da sua preferência.</p>
            <h1 className="text-center mt-6 text-2xl font-sans">{texts.titles.ingredientes}</h1>
            <Ingredients />
            <h1 className="text-center mt-6 text-2xl font-sans">{texts.titles.ponto_carne}</h1>
            <MeatDonenessSelector />
            <h1 className="text-center mt-6 text-2xl font-sans">{texts.titles.acompanhamentos}</h1>
            <SideDishesContainer />
            <div className="flex justify-center mt-6">
                <button className="text-center text-xl w-[98%] p-2 rounded-md text-white bg-[#FF6A00] font-sans">{texts.adicionar_pedido}</button>
            </div>
        </>
    )
}

export default DetailsItem;
