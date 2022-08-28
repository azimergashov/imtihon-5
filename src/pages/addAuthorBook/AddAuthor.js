import "./addAuthor.scss";
import addAuthorImg from "../../images/add-author.png";
import { useRef } from "react";
import axios from "axios";
import { useAuth } from "../../hook/useAuth";
import { HeaderMenu } from "../../components/Header/HeaderMenu";

export const AddAuthor = () => {
  const { token } = useAuth();

  const elAuthor = useRef("");
  const elFirstName = useRef("");
  const elLastName = useRef("");
  const elBirthDay = useRef("");
  const elDeadDay = useRef("");
  const elCountry = useRef("");
  const elGenre = useRef("");
  const elBio = useRef("");
  const elImg = useRef("");


  const hendleAuther = (evt) => {
    evt.preventDefault()
  //   console.log(elFirstName.current.value);
  // console.log(elLastName.current.value);
  // console.log(elBirthDay.current.value);
  // console.log(elDeadDay.current.value);
  // console.log(elCountry.current.value);
  // console.log(elGenre.current.value);
  // console.log(elBio.current.value);
  // console.log(elImg.current.files);

    const formData = new FormData();
    formData.append("first_name",  elFirstName.current.value);
    formData.append("last_name",  elLastName.current.value);
    formData.append("date_of_birth",  elBirthDay.current.value);
    formData.append("date_of_death",  elDeadDay.current.value);
    formData.append("country",  elCountry.current.value);
    formData.append("genre_id", elGenre.current.value);
    formData.append("bio",   elBio.current.value);
    formData.append("image ", elImg.current.files[0]);

    axios.post(`https://book-service-layer.herokuapp.com/author`, formData, {
        headers: {
          'Accept': 'application/json',
          Authorization: token,
        }
      }).then((data) => console.log(data)).catch((er) => console.log(er));
  };

  const hendleFirstName = (evt) => {
    if (evt.target.value.length !== 0) {
      elAuthor.current.textContent = evt.target.value;
    } else {
      elAuthor.current.textContent = "author";
    }

    console.log(evt.target.value);
  };
  return (
    <>

      <div className="author__wrapper">
        <div>
          <div className="container d-flex align-items-center">

              <div className="w-100 author__left pe-5">
                <img src={addAuthorImg} alt="" width={350} height={367} />
                <h2  className="mb-3 mt-3">
                  Author: <span ref={elAuthor}>author</span>
                </h2>

                <input
                  ref={elImg}
                  className="form-control form-control-lg"
                  type="file"
                  name="image"
                  required
                />
              </div>

              <div className="w-100 pt-5">
                <div className="d-flex align-items-center justify-content-between position-relative ">
                    <h1>Add author</h1>
                    <HeaderMenu/>
                </div>
                <form
              onSubmit={hendleAuther}
              className="form  "
            >
                <input
                  ref={elFirstName}
                  className="form-control mb-3"
                  type="text"
                  name="first_name"
                  required
                  placeholder="First name"
                  onChange={hendleFirstName}
                />
                <input
                  ref={elLastName}
                  className="form-control mb-3"
                  type="text"
                  name="last_name"
                  required
                  placeholder="Last name"
                />
                <input
                  ref={elBirthDay}
                  className="form-control mb-3"
                  type="number"
                  name="date_of_birth"
                  required
                  placeholder="Date of birth year"
                />
                <input
                  ref={elDeadDay}
                  className="form-control mb-3"
                  type="number"
                  name="date_of_death"
                  placeholder="Date of death year"
                />
                <input
                  ref={elCountry}
                  className="form-control mb-3"
                  type="text"
                  name="country"
                  required
                  placeholder="Country"
                />
                <select
                  ref={elGenre}
                  className="form-select mb-3 "
                  required
                  name="genre_id"
                >
                  <option value="1">Temuriylar davir</option>
                  <option value="2">Jadid adabiyoti</option>
                  <option value="3">Soved davri</option>
                  <option value="4">Mustaqillik davri</option>
                </select>
                <textarea
                  ref={elBio}
                  className="form-control mb-3 author__bio"
                  placeholder="Bio"
                  name="bio"
                  required
                ></textarea>

                <button type="submit " className="author-btn w-100 mt-4">
                  Create
                </button>
                </form>
              </div>

          </div>
        </div>
      </div>
    </>
  );
};
