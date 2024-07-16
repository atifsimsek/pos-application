import { Button, Modal, Popconfirm } from "antd";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearCart,
  decraseProduct,
  incraseProduct,
} from "../../redux/cartSlice";

const CartTotals = () => {
  const confirm = Modal.confirm;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, total, tax } = useSelector((state) => state.cart);

  const handleClearCart = () => {
    confirm({
      title: "Uyarı",
      content: "Sepeti temizlemek istediğinize emin misiniz?",
      okText: "Evet",
      okType: "danger",
      cancelText: "Hayır",
      transitionName: "",
      centered: true,

      onOk() {
        dispatch(clearCart());
      },
      onCancel() {},
    });
  };

  const incrase = (product) => {
    dispatch(incraseProduct(product));
  };

  const decrase = (product) => {
    dispatch(decraseProduct(product));
  };

  return (
    <div className="cart h-full max-h-[calc(100vh-91px)] flex flex-col -mt-[2px]">
      <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide flex flex-col">
        Sepetteki Ürünler
      </h2>
      <ul className="cart-items px-2 flex flex-col gap-y-3 overflow-y-auto">
        {cartItems &&
          cartItems.map((product) => (
            <li key={product._id} className="cart-item flex justify-between">
              <div className="flex items-center">
                <img
                  className="w-16 h-16 object-cover pt-2"
                  src={product.img}
                  alt=""
                />
                <div className="flex flex-col ml-2">
                  <b>{product.name}</b>
                  <span>
                    {product.price}₺ x {product.quantity}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  onClick={() => incrase(product)}
                  type="primary"
                  size="middle"
                  className="flex justify-center items-center rounded-full"
                  icon={<PlusCircleOutlined />}
                />
                <span className="font-bold">{product.quantity}</span>
                {product.quantity === 1 ? (
                  <Popconfirm
                    title="Ürünü silmek istediğinize emin misiniz?"
                    okText="Evet"
                    cancelText="Hayır"
                    onConfirm={() => decrase(product)}
                  >
                    <Button
                      type="primary"
                      size="middle"
                      className="flex bg-red justify-center items-center rounded-full"
                      icon={<MinusCircleOutlined />}
                    />
                  </Popconfirm>
                ) : (
                  <Button
                    onClick={() => decrase(product)}
                    type="primary"
                    size="middle"
                    className="flex bg-red justify-center items-center rounded-full"
                    icon={<MinusCircleOutlined />}
                  />
                )}
              </div>
            </li>
          ))}
      </ul>
      <div className="cart-totals mt-auto">
        <div>
          <div className="flex justify-between p-2 border-t">
            <b>Total</b>
            <span>{total === 0 ? "0" : total.toFixed(2)}₺</span>
          </div>
          <div className="flex justify-between p-2 border-b">
            <b>KDV %{tax}</b>
            <span className="text-red-700">
              {total === 0 ? "0" : ((total * tax) / 100).toFixed(2)}₺
            </span>
          </div>
          <div className="flex justify-between p-2 mt-4">
            <b className="text-xl text-green-500">Genel Toplam</b>
            <span className="text-xl">
              {total === 0 ? "0" : (total + (total * tax) / 100).toFixed(2)}₺
            </span>
          </div>
          <div className="py-4 px-2">
            <Button
              type="primary"
              size="large"
              className="w-full"
              disabled={total === 0 ? true : false}
              onClick={() => navigate("/cart")}
            >
              Create Order
            </Button>
            <Button
              type="primary"
              size="large"
              className="w-full mt-2 flex justify-center items-center"
              danger
              disabled={total === 0 ? true : false}
              icon={<ClearOutlined />}
              onClick={handleClearCart}
            >
              Clear Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
