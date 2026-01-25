const SideDishesOption = ({title, options}) => {
    return(
        <div className="flex justify-between font-sans text-xl my-2.5 mx-2">
        <label className="font-sans">{title}</label>

        <select className="bg-gray-200 p-1 rounded-md">
          {options.map((option, index) => (
            <option className="" key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    )
}

export default SideDishesOption;