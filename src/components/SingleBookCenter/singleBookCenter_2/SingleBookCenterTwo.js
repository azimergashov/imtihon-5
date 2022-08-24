import "./singleBookCenterTwo.scss";
import SingleBookCenter from '../../../images/1.png';

export const SingleBookCenterTwo = () => {
  return (
    <>
      <div className="single-book-center-two d-flex  justify-content-between">
        <div className="single-book-center-two__wrapper me-5">
          <img className="mb-3"
            src={SingleBookCenter}
            alt="single-book-center-two"
            width={60}
            height={60}
          />
          <p className="single-book-center-two__text">
            Inson bolasi ne kunlarni ko‘rmaydi?! Har bir odam o‘z g‘ami bilan
            bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib o‘tsa,
            bu moddiy olam shu kunlarga yetolarmidi? Hayot to‘lqini ojizlarni
            qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza olganlar, to‘lqinni
            egarlaganlargina ertangi kunga yetib keladi.
          </p>
        </div>

        <div className="single-book-center-two__wrapper">
          <img className="mb-3"
            src={SingleBookCenter}
            alt="single-book-center-two"
            width={60}
            height={60}
          />
          <p className="single-book-center-two__text">
          Yer kurrasida chumolidek mehnat qilayotganlardan ko‘ra, tuproq tagida yotganlar ko‘p. Yer qatlami odam suyaklariga to‘lib ketgan.
          </p>
        </div>
      </div>
    </>
  );
};
