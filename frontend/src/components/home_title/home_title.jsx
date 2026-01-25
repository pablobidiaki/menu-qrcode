const HomeTitle = ({text, id}) => {
    return(
        <>
            <h1 id={id} className='text-center text-2xl font-bold m-8 italic uppercase font-sans'>{text}</h1>
        </>
    )
}

export default HomeTitle;