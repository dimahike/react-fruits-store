import { storeProducts } from '../../data';

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const getTotalCount = (obj) => Object.values(obj).reduce((sum, obj) => obj.totalCount + sum, 0);
const getTotalPrice = (obj) => Object.values(obj).reduce((sum, obj) => obj.totalPrice + sum, 0);
const getTotalPriceWithDiscount = (obj) =>
  Object.values(obj).reduce((sum, obj) => obj.totalPriceWithDiscount + sum, 0);

const parseAndFixed = (number) => {
  return parseFloat(number.toFixed(2));
};

const countDiscount50 = (amountProducts, priceProduct) => {
  let quantityDiscount = Math.floor(amountProducts / 3);

  return quantityDiscount * (priceProduct / 2);
};

const cart = (state = initialState, action) => {
  let currentProductItems;
  let currentTotalPriceWithDiscount;
  let currentTotalPriceWithOutDiscount;
  let currentTotalCount;
  let discount;
  switch (action.type) {
    case 'ADD_PRODUCT_CART': {
      const product = storeProducts.find((item) => item.id === action.payload);
      if (!state.items[action.payload]) {
        currentProductItems = product;
        currentTotalPriceWithDiscount = product.price;
        currentTotalPriceWithOutDiscount = product.price;
        currentTotalCount = 1;
      }
      if (state.items[action.payload]) {
        // currentProductItems = state.items[action.payload].item;
        // currentTotalPrice = state.items[action.payload].totalPrice + product.price;
        // currentTotalCount = state.items[action.payload].totalCount + 1;

        currentProductItems = state.items[action.payload].item;
        currentTotalCount = state.items[action.payload].totalCount + 1;
        currentTotalPriceWithOutDiscount = currentTotalCount * product.price;

        if (product.discount) {
          discount = countDiscount50(currentTotalCount, product.price);
          currentTotalPriceWithDiscount = currentTotalPriceWithOutDiscount - discount;
        } else {
          currentTotalPriceWithDiscount = currentTotalPriceWithOutDiscount;
        }
      }

      const newItems = {
        ...state.items,
        [action.payload]: {
          item: currentProductItems,
          totalCount: currentTotalCount,

          // totalPrice: parseAndFixed(currentTotalPrice),
          totalPrice: currentTotalPriceWithOutDiscount,
          totalPriceWithDiscount: currentTotalPriceWithDiscount,
        },
      };

      console.log('initialState from cart:', state);
      return {
        ...state,
        items: newItems,
        totalCount: getTotalCount(newItems),
        totalPrice: parseAndFixed(getTotalPrice(newItems)),
        totalPriceWithDiscount: parseAndFixed(getTotalPriceWithDiscount(newItems)),
      };
    }
    case 'SUBTRACT_PRODUCT_CART': {
      const currentFruitsItem = state.items[action.payload];
      let stateDiscont = currentFruitsItem.item.discount; // discount have or don`t have
      const sustractProductTotalPrice = currentFruitsItem.totalPrice - currentFruitsItem.item.price;
      currentTotalCount = currentFruitsItem.totalCount - 1;

      if (currentFruitsItem.totalCount > 1) {
        if (stateDiscont) {
          discount = countDiscount50(currentTotalCount, currentFruitsItem.item.price);
          currentTotalPriceWithDiscount = sustractProductTotalPrice - discount;
          console.log('stateDiscont true', currentTotalPriceWithDiscount);
        } else {
          currentTotalPriceWithDiscount = sustractProductTotalPrice;
          console.log('stateDiscont false', currentTotalPriceWithDiscount);
        }

        return {
          ...state,
          items: {
            ...state.items,
            [action.payload]: {
              item: currentFruitsItem.item,
              totalCount: currentTotalCount,
              totalPrice: sustractProductTotalPrice,
              totalPriceWithDiscount: currentTotalPriceWithDiscount,
            },
          },
          totalCount: state.totalCount - 1,
          totalPrice: state.totalPrice - currentFruitsItem.item.price,
        };
      }

      if (currentFruitsItem.totalCount === 1) {
        delete state.items[action.payload];
        console.log(' state.items', state.items[action.payload]);
        console.log(' state.items', state.items);
        return {
          ...state,
          items: {
            ...state.items,
          },
          totalCount: state.totalCount - 1,
          totalPrice: parseAndFixed(getTotalPrice(state.items)),
          totalPriceWithDiscount: parseAndFixed(getTotalPriceWithDiscount(state.items)),
        };
      } else {
        console.log('something ran wrong in subtractProductToCart');
      }
    }

    case 'DELETE_PRODUCT_CART': {
      const totalCountItems = state.totalCount - state.items[action.payload].totalCount;
      delete state.items[action.payload];
      console.log(' state.items', state.items[action.payload.id]);
      console.log(' state.items', state.items);
      return {
        ...state,
        items: {
          ...state.items,
        },
        totalCount: totalCountItems,
        totalPrice: parseAndFixed(getTotalPrice(state.items)),
        totalPriceWithDiscount: parseAndFixed(getTotalPriceWithDiscount(state.items)),
      };
    }

    case 'CLEAR_CART': {
      return initialState;
    }

    default:
      return state;
  }
};

export default cart;
