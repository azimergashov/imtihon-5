
export const CardBook = ({e}) =>{
    return(
        <>
            <li className="card-book">
                <img src="" alt={e.id} width={164} height={246}/>

                <h1 className="card-book__title">{e.title}</h1>

                <p className="c">{e.year}</p>

            </li>
        </>
    )
}