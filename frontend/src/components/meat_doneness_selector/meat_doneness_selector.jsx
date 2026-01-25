import { useState } from "react";
import texts from "../../texts/texts";

const MeatDonenessSelector = () => {
    const [selected, setSelected] = useState(null)

    const options = [texts.meat_doneness.mal_passada,
                     texts.meat_doneness.ponto, 
                     texts.meat_doneness.bem_passada
                    ]

    return (
        <>
            <div className="flex justify-between mx-1 mt-2.5">
                {
                    options.map((option, index) =>(
                        <button 
                            key={index} 
                            onClick={() => setSelected(option)} 
                            className={`font-sans py-2 px-5 rounded-md ${selected === option ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"}`}
                        >
                            {option}
                        </button>
                    ))
                }
            </div>
        </>
    )
}

export default MeatDonenessSelector;