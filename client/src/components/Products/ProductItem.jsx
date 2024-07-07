import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const ProductItem = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClik = () => {
    dispatch(addProduct({ ...product, quantity: 1 }));
  };

  return (
    <div
      onClick={handleClik}
      className="product-item border hover:shadow-lg cursor-pointer transition-all"
    >
      <div className="product-img">
        <img
          className="h-28 object-cover w-full border-b"
          src={product.img}
          alt=""
        />
      </div>
      <div className="product-info flex flex-col p-3">
        <span className="font-bold">{product.title}</span>
        <span>{product.price}₺</span>
      </div>
    </div>
  );
};

export default ProductItem;
