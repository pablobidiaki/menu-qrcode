import { useEffect } from "react";
import IngredientCounter from "../ingredient_counter/ingredient_counter";
const ingredients = [["Pão", 2], ["Hamburger", 1], ["Queijo", 1]]

const Ingredients = ({}) => {
    return (
        <>
            {
                ingredients.map((ingredient, index) => (
                    <div className="flex justify-between my-4 mx-1">
                        <p className="text-xl font-sans">{ingredient[0]}</p>
                        <IngredientCounter quantity={ingredient[1]}/>
                    </div>
                ))
            }
        </>
    )
}

export default Ingredients;