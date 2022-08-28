import { useAuth } from '../../../hook/useAuth'
import '../singleBookCenter_2/singleBookCenterTwo.scss'

export const SingleBookCenterThree = () =>{
  const {theme} = useAuth()
    return(
        <>
            <div>
              <p className={!theme ? 'single-book-center-two__text-light' : 'single-book-center-two__text'}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti earum maiores molestiae adipisci porro, doloremque illum eum. Ut magnam explicabo vitae facilis repudiandae doloremque iusto, eveniet eaque sapiente similique fuga!
              </p>
            </div>
        </>
    )
}