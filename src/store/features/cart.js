import { createApiReducer } from "../redux/reducerFactory";
import GetDispatchers from "../redux/dispatchers";
import GetSelectors from "../redux/selectors";

const feature = "cart";

const cartReducer = createApiReducer(feature, [], {
  cartList: [],
});

export default cartReducer;

export const CartSelectors = () => {
  const { getStateProp } = GetSelectors(feature);
  return {
    cartList: getStateProp("cartList"),
  };
};

export const CartDispatchers = () => {
  const { state, setStateProp, reset } = GetDispatchers(feature);

  const addtoCart = (body) => {
    const cartIds = state.cartList.map((data) => data.image);
    if (!cartIds.includes(body.image)) {
      const newList = [...state.cartList, body];
      setStateProp("cartList", newList);
    }
  };

  const removeToCart = (value) => {
    const newList = state.cartList.filter((item) => item.image !== value);
    setStateProp("cartList", newList);
  };

  return {
    setAddtoCart: (value) => addtoCart(value),
    setRemovetoCart: (value) => removeToCart(value),
  };
};
