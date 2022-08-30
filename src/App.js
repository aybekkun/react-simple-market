import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import closeImg from "./assets/img/close.svg";
import succesImg from "./assets/img/succes.png";
import { useInput } from "./hooks/useInput";
import Footer from "./components/Footer/Footer";
function App() {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({ name: "", id: 0 });

  const [nameProps, resetName] = useInput("");
  const [phoneProps, resetPhone] = useInput("+998");
  const [countProps, resetCount] = useInput(1);
  const [radioBtn, setRadioBtn] = useState("");

  const [isAccept, setIsAccept] = useState(false);
  const [send, setSend] = useState(false);
  useEffect(() => {
    axios
      .get(`https://shop.bookie.uz/api/v1/products?limit=8&page=${currentPage}`)
      .then((res) => {
        setProducts(res.data.data);
        const totalPage = Math.ceil(Number(res.data.meta.total) / 8);
        setPageCount(totalPage);
      })
      .catch((error) => {
        console.log(error);
        alert("Нет данных");
      });
  }, [currentPage]);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected + 1);
  };

  const onClickBuy = ({ name, id }) => {
    setOpen(true);
    setCurrentProduct({ id, name });
  };

  const onSubmitProduct = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("product_id", currentProduct.id);
    fd.append("name", nameProps.value);
    fd.append("count", countProps.value);
    fd.append("phone", phoneProps.value);
    fd.append("size", radioBtn);
    setSend(true);
    await axios
      .post(`https://shop.bookie.uz/api/v1/histories`, fd, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
     
        setIsAccept(true);
        clearItems();
      })
      .catch((error) => {
        setSend(false);
        console.log(error);
        setIsAccept(false);
        clearItems();
        alert("Заказ не оформлен");
      });
  };

  const onAcceptButton = () => {
    setOpen(false);
    setIsAccept(false);
    clearItems();
  };

  function clearItems() {
    setRadioBtn("");
    setCurrentProduct({ name: "", id: 0 });
    setSend(false)
    resetCount();
    resetPhone();
    resetName();
  }
  return (
    <div className="wrapper">
      <div
        className="drawer"
        onClick={onAcceptButton}
        style={{ display: open ? "flex" : "none" }}
      >
        <div className="overlay" onClick={(e) => e.stopPropagation()}>
          {!isAccept ? (
            <>
              <h3>
                {currentProduct.name}
                <img
                  onClick={onAcceptButton}
                  width={32}
                  height={32}
                  src={closeImg}
                  alt="close"
                />
              </h3>
              <form onSubmit={onSubmitProduct}>
                <div className="input-group form">
                  <label htmlFor="userName">Atıńız</label>
                  <input
                    type="text"
                    name="userName"
                    required
                    placeholder="Atıńız"
                    {...nameProps}
                  />
                </div>
                <div className="input-group form">
                  <label htmlFor="phone">Telefon nomer</label>
                  <input
                    type="phone"
                    name="phone"
                    required
                    placeholder="998 --- --- ----"
                    {...phoneProps}
                  />
                </div>
                <div className="input-group form">
                  <label htmlFor="number">Dana (neshe futbolka)</label>
                  <input
                    type="number"
                    name="number"
                    max={100}
                    min={1}
                    placeholder="1"
                    required
                    {...countProps}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="radio">Ólshem</label>
                  <div className="radio-group">
                    <label className="radio-label" htmlFor="radio-s">
                      S
                      <input
                        id="radio-s"
                        type="radio"
                        name="radio"
                        value="S"
                        onChange={(e) => setRadioBtn(e.target.value)}
                      />
                    </label>
                    <label className="radio-label" htmlFor="radio-m">
                      M
                      <input
                        id="radio-m"
                        type="radio"
                        name="radio"
                        value="M"
                        onChange={(e) => setRadioBtn(e.target.value)}
                      />
                    </label>
                    <label className="radio-label" htmlFor="radio-l">
                      L
                      <input
                        id="radio-l"
                        type="radio"
                        name="radio"
                        value="L"
                        onChange={(e) => setRadioBtn(e.target.value)}
                      />
                    </label>
                    <label className="radio-label" htmlFor="radio-xl">
                      XL
                      <input
                        id="radio-xl"
                        type="radio"
                        name="radio"
                        value="XL"
                        onChange={(e) => setRadioBtn(e.target.value)}
                      />
                    </label>
                    <label className="radio-label" htmlFor="radio-xll">
                      XLL
                      <input
                        id="radio-xll"
                        type="radio"
                        name="radio"
                        value="XLL"
                        onChange={(e) => setRadioBtn(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
                <button type="submit" disabled={send}>Buyırtpa beriw</button>
              </form>
            </>
          ) : (
            <div className="order" onClick={onAcceptButton}>
              <h3>Buyırtpańız qabıl etildi</h3>
              <img src={succesImg} alt="Оформлен" />
              <button>OK</button>
            </div>
          )}
        </div>
      </div>
      <Header />
      <div className="container">
        <div className="container-inner">
          {products.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.title}
              price={item.price}
              img={item.photo}
              onClickBuy={onClickBuy}
            />
          ))}
        </div>
        {pageCount > 1 && (
          <div className="pagination">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
//json-server --watch db.json --port 8000 для хранения БД
