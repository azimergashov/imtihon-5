import './cardSingleAuth.scss'

export const CardSingleAuth = ({data}) => {
    return (
        <>
            <div>
              <h1>single Author</h1>

              <h1>{data.first_name} {data.last_name}</h1>
            </div>
        </>
    )
}