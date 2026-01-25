const OrderSummaryLine = ({title, value}) => {
    return (
        <>
            <div className="flex justify-between m-2 my-1">
                <p>{title}</p>
                <p>R$ {value}</p>
            </div>
            <hr className="mx-2"/>
        </>
    )
}

export default OrderSummaryLine;