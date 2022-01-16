import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { myCart, total, addToCart, setTotal } = useContext(CartContext);

  console.log("check total", total);
  console.log("check my cart", myCart);
  const handleCheckout = () => {
    setTotal(0);
    addToCart([{}]);
  };
  const navigate = useNavigate();
  const handlegoHome = () => {
    navigate("/");
  };

  return (
    <>
      <section className="cart-container">
        <div className="cart-header">Thanh toán</div>
        <div className="cart-item">
          {
            //* slice(1) loại bỏ 1 phần tử đầu tiên trong mảng
            myCart.length <= 1 ? (
              <div className="Cart-null">
                <h4 className="Cart-null__label">
                  Bạn chưa có sản phẩm trong giỏ hàng
                </h4>
              </div>
            ) : (
              myCart.slice(1).map((item) => {
                return (
                  <div className="cart">
                    <img src={item.imageUrl} alt="" className="cart-img" />
                    <p className="cart-price">{`${item.name} : ${item.price}$`}</p>
                  </div>
                );
              })
            )
          }
        </div>

        <div className="cart-total">
          <p className="cart-total__lable">Tổng giá trị đơn hàng: {total}$</p>
        </div>
        <div>
          {total === 0 ? (
            <>
              <button
                className="btn-card btn__cart-gohome"
                onClick={() => handlegoHome()}
              >
                Về trang chủ
              </button>
            </>
          ) : (
            <>
              <button
                className="btn-card btn__cart-done"
                onClick={() => handleCheckout()}
              >
                Hoàn tất
              </button>
              <button
                className="btn-card btn__cart-gohome"
                onClick={() => handlegoHome()}
              >
                Về trang chủ
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
