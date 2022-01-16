import "./Dogs.css";
import { useState, useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
const DogsCard = (props) => {
  const { id, breed, price, src, name, desc } = props;
  const [isAdded, setAdded] = useState(false);
  const { addToCart, setTotal } = useContext(CartContext);
  const handleAdded = () => {
    setAdded(true);
    //[chota , husky , corgy]
    const newItems = {
      name: name,
      price: price,
      imageUrl: src,
    };
    addToCart((item) =>
      //*   ...item giữ lại giá trị mà bạn đã thêm vào , giá trị mới thêm vào
      [...item, newItems]
    );
    setTotal((total) => total += Number(price));
    
  };
  return (
    <>
      <section className="dog-item">
        <div style={{ display: "flex", padding: "10px" }}>
          <div className="wrapped-left">
            <img src={src} alt={`picture of ${name}`} className="dog-img" />
          </div>
          <div className="wrapped-right">
            <div className="doc-infor">
              <p>Biệt danh: {name}</p>
              <p>Giống: {breed}</p>
            </div>
          </div>
        </div>
        <div style={{ width: "100%", height: "120px", padding: "3px 16px" }}>
          <div style={{ height: "30px" }}>
            <p style={{ textAlign: "center", color: "darkslategrey" }}>
              Tính cách:{desc}
            </p>
          </div>

          <div style={{ marginTop: "50px" }}>
            <p
              style={{
                marginTop: "15px",
                fontStyle: "oblique",
                color: "#0088ad",
                textAlign: "center",
                fontSize: "15px",
                fontWeight: "700",
              }}
            >
              {" "}
              Giá:{price}$
            </p>
          </div>
        </div>
        <div style={{ margin: "0 18px " }}>
          {isAdded ? (
            <button disabled className="btn btn-disable">
              Đã thêm
            </button>
          ) : (
            <button className="btn btn-added" onClick={() => handleAdded()}>
              Thêm vào giỏ
            </button>
          )}
          {/* <button className="btn btn-buy" onClick={handleAdded}>Thêm vào giỏ</button>  */}
        </div>
      </section>
    </>
  );
};

export default DogsCard;
