import { useEffect, useState } from "react"

import { CircleArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import Carousel from "../../components/carousel/carousel";
import Ingredients from "../../components/ingredients/ingredients";
import MeatDonenessSelector from "../../components/meat_doneness_selector/meat_doneness_selector";
import SideDishesContainer from "../../components/side_dishes/side_dishes_container";
import texts from "../../texts/texts";
import { productService } from "../../services/productService";

const DetailsItem = () => {
    const { id } = useParams()
    const navigate = useNavigate();

    const [item, setItem] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [meatDoneness, setMeatDoneness] = useState("Ao ponto")

    useEffect(() => {
        const LoadItem = async () => {
            try{
                setLoading(true)
                const item = await productService.getProductById(id)
                setItem(item.product)
            }catch(error){
                console.error("Erro ao carregar os produtos:", error);
                setError("Não foi possível carregar os produtos.");
            }finally{
                setLoading(false)
            }
        }

        if (id)
            LoadItem()

    }, [id])

    const handleAddOrderButton = (idItem) => {
        console.log(idItem)
        navigate("/")
        console.log(meatDoneness)
    }
   
    return(
        <>
            <div className="relative">
                <Carousel data={item} />
                <CircleArrowLeft onClick={() => navigate("/")} className="absolute top-2 left-2 z-10 text-white w-8 h-8 cursor-pointer" />
            </div>

            <div className="flex justify-between m-1 font-sans">
                <h1 className="text-2xl">{item.name}</h1>
                <p className="text-2xl text-green-500">{item.promotionPrice === null ? item.price : item.promotionPrice}</p>
            </div>
            <p className="m-1 text-gray-500 font-sans">{item.description}</p>
            <h1 className="text-center mt-6 text-2xl font-sans">{texts.titles.ingredientes}</h1>
            <Ingredients item={item}/>
            <h1 className="text-center mt-6 text-2xl font-sans">{texts.titles.ponto_carne}</h1>
            <MeatDonenessSelector onChange={setMeatDoneness}/>
            <div className="flex justify-center mt-8">
                <button onClick={() => handleAddOrderButton(item.id)} className="text-center text-xl w-[98%] p-2 rounded-md text-white bg-[#FF6A00] font-sans">{texts.adicionar_pedido}</button>
            </div>
        </>
    )
}

export default DetailsItem;
