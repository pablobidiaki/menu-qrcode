import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import SideDishesOption from "./side_dishes_option";

const SideDishesContainer = ({selected, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const sodas = ["Coca-cola", "Sprite", "Guarana"]
    const fries_size = ["Grande", "Média", "Pequena"]
    
    return(
      <>
        <SideDishesOption title={"Refrigerante"} options={sodas} />
        <SideDishesOption title={"Batata Frita"} options={fries_size}/>
      </>
    )
}

export default SideDishesContainer;