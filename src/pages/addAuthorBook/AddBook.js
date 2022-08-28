import "./addAuthor.scss";
import addAuthorImg from "../../images/add-author.png";
import { useRef } from "react";
import axios from "axios";
import { useAuth } from "../../hook/useAuth";
import { HeaderMenu } from "../../components/Header/HeaderMenu";
export const AddBook = () => {
  const { token } = useAuth();
  const elAuthor = useRef("");
  const elAuthorId = useRef("");
  const elTitle = useRef("");
  const elPage = useRef("");
  const elYear = useRef("");
  const elPrice = useRef("");
  const elGenreBook = useRef("");
  const elDiscription = useRef("");
  const elImgBook = useRef("");

  const hendleBook = (evt) => {
    evt.preventDefault();

    const formData = new FormData();

    formData.append("title", elTitle.current?.value);
    formData.append("page", elPage.current?.value);
    formData.append("year", elYear.current?.value);
    formData.append("price", elPrice.current?.value);
    formData.append("genre_id", elGenreBook.current?.value);
    formData.append("author_id", elAuthorId.current?.value);
    formData.append("description", elDiscription.current?.value);
    formData.append("image ", elImgBook.current?.files[0]);

    axios
      .post("https://book-service-layer.herokuapp.com/book", formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => console.log(data.data))
      .catch((er) => console.log(er));
  };

  const hendleFirstName = (evt) => {
    if (evt.target.value.length !== 0) {
      elAuthor.current.textContent = evt.target.value;
    } else {
      elAuthor.current.textContent = "book";
    }
  };
  return (
    <>
      <div className="author__wrapper">
        <div>
          <div className="container d-flex align-items-center">

              <div className="w-100 author__left pe-5">
                <img src={addAuthorImg} alt="" width={350} height={367} />
                <h2 className="mb-3 mt-3">
                  Title: <span ref={elAuthor} ></span>
                </h2>

                <input
                  ref={elImgBook}
                  className="form-control form-control-lg"
                  name="image"
                  type="file"
                  required
                />
              </div>

              <div className="w-100 pt-5">
                <div className="d-flex align-items-center justify-content-between position-relative ">
                    <h1>Add book</h1>
                    <HeaderMenu/>
                </div>
                <form
              onSubmit={hendleBook}
              className="form  "
            >
                <input
                  ref={elTitle}
                  className="form-control mb-3"
                  name="title"
                  type="text"
                  required
                  placeholder="Title"
                  onChange={hendleFirstName}
                />
                <input
                  ref={elPage}
                  className="form-control mb-3"
                  name="page"
                  type="number"
                  required
                  placeholder="Page"
                />
                <input
                  ref={elYear}
                  className="form-control mb-3"
                  name="year"
                  type="number"
                  required
                  placeholder="Year"
                />
                <input
                  ref={elPrice}
                  className="form-control mb-3"
                  name="price"
                  type="number"
                  placeholder="Price"
                />
                 <select
                  ref={elGenreBook}
                  className="form-select mb-3 "
                  name="genre_id"
                  required
                >
                  <option value="1">Temuriylar davir</option>
                  <option value="2">Jadid adabiyoti</option>
                  <option value="3">Soved davri</option>
                  <option value="4">Mustaqillik davri</option>
                </select>
                <input
                  ref={ elAuthorId}
                  className="form-control mb-3"
                  name="author_id"
                  type="number"
                  required
                  placeholder="Author"
                />

                <textarea
                  ref={elDiscription}
                  className="form-control mb-3 author__bio"
                  name="description"
                  placeholder="Description"
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
