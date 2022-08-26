import './addAuthor.scss'
import addAuthorImg from '../../images/add-author.png'
import { useRef } from 'react'
import axios from 'axios'
import { useAuth } from '../../hook/useAuth'
export const AddAuthor = () => {

    const {token} = useAuth()

    const elAuthor = useRef("")
    const elFirstName = useRef("")
    const elLastName = useRef("")
    const elBirthDay = useRef("")
    const elDeadDay = useRef("")
    const elCountry = useRef("")
    const elGenre = useRef("")
    const elBio = useRef("")
    const elImg = useRef("")




    const hendleAuther = (evt) => {
        evt.preventDefault()

        const formData = new FormData()

        formData.append( "first_name", elFirstName.current.value)
        formData.append( "last_name", elLastName.current.value)
        formData.append( "date_of_birth", elBirthDay.current.value)
        formData.append( "date_of_death", elDeadDay.current.value)
        formData.append( "country", elCountry.current.value)
        formData.append( "genre_id", elGenre.current.value)
        formData.append( "bio", elBio.current.value)
        formData.append( "image ", elImg.current.files[0])

    axios.post('https://book-service-layer.herokuapp.com/author', formData, {
      headers: {
        Authorization: token,
      }
    })
    .then(data => console.log(data.data)).catch(er => console.log(er))
    }


    const hendleFirstName = (evt) =>{
        if(evt.target.value.length !== 0){
            elAuthor.current.textContent = evt.target.value
        }else{
            elAuthor.current.textContent = "Author"
        }

        console.log(evt.target.value.length);
    }
    return(
        <>

        <div  className='author__wrapper'>
            <div>
                <div className='container '>
                <form onSubmit={hendleAuther} className='form d-flex align-items-center '>
                    <div className='w-100 author__left pe-5'>
                        <img src={addAuthorImg} alt="" width={350} height={367}/>
                        <h2 ref={elAuthor} className='mb-3 mt-3'>Author</h2>

                    <input ref={elImg} className='form-control form-control-lg' name='image' type="file"  required  />
                    </div>

                    <div className='w-100 pt-5'>
                    <h1>Add author</h1>


                            <input ref={elFirstName} className='form-control mb-3' name='first_name' type="text" required placeholder='First name' onChange={hendleFirstName }/>
                            <input ref={elLastName} className='form-control mb-3' name='last_name' type="text" required placeholder='Last name'/>
                            <input ref={elBirthDay} className='form-control mb-3' name='date_of_birth' type="number" required
                            placeholder='Date of birth year'/>
                            <input ref={elDeadDay} className='form-control mb-3' name='date_of_death' type="number" placeholder='Date of death year'/>
                            <input ref={elCountry} className='form-control mb-3' name='country' type="text" required placeholder='Country'/>
                            <select  ref={elGenre} className='form-select mb-3 ' name='genre_id' required>
                                <option value="1">Temuriylar davir</option>
                                <option value="2">Jadid adabiyoti</option>
                                <option value="3">Soved davri</option>
                                <option value="4">Mustaqillik davri</option>
                            </select>
                            <textarea ref={elBio} className='form-control mb-3 author__bio' name="bio" placeholder="Bio" required ></textarea>

                            <button type='submit ' className='author-btn w-100 mt-4'>Create</button>


                    </div>

                </form>
                </div>
            </div>
        </div>
        </>
    )
}