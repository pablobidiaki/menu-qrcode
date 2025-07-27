import './title.css'

const Title = ({text, id}) => {
    return(
        <>
            <h1 id={id} className='text-center text-2xl font-bold m-8 italic uppercase'>{text}</h1>
        </>
    )
}

export default Title;