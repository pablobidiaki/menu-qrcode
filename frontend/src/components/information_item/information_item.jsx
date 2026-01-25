const InformationItem = ({icon: Icon, text}) => {
    return(
        <>
            <div className="max-w-28">
                <Icon className="w-10 h-10 mx-auto"/>
                <p className="text-center"> {text} </p>
            </div>
        </>
    )
}

export default InformationItem; 