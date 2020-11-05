import { storeProducts } from '../../data';

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const getTotalCount = (obj) => Object.values(obj).reduce((sum, obj) => obj.totalCount + sum, 0);
const getTotalPrice = (obj) => Object.values(obj).reduce((sum, obj) => obj.totalPrice + sum, 0);

const parseAndFixed = (number) => {
  return parseFloat(number.toFixed(2));
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_CART': {
      let currentProductItems;
      let currentTotalPrice;
      let currentTotalCount;
      const product = storeProducts.find((item) => item.id === action.payload);
      if (!state.items[action.payload]) {
        currentProductItems = product;
        currentTotalPrice = product.price;
        currentTotalCount = 1;
      }
      if (state.items[action.payload]) {
        currentProductItems = state.items[action.payload].item;
        currentTotalPrice = state.items[action.payload].totalPrice + product.price;
        currentTotalCount = state.items[action.payload].totalCount + 1;
      }

      const newItems = {
        ...state.items,
        [action.payload]: {
          item: currentProductItems,
          totalCount: currentTotalCount,
          totalPrice: parseAndFixed(currentTotalPrice),
        },
      };

      console.log('initialState from cart:', state);
      return {
        ...state,
        items: newItems,
        totalCount: getTotalCount(newItems),
        totalPrice: parseAndFixed(getTotalPrice(newItems)),
      };
    }
    case 'SUBTRACT_PRODUCT_CART': {
      const currentPizzaItem = state.items[action.payload];

      if (currentPizzaItem.totalCount > 1) {
        const sustractProductTotalPrice = currentPizzaItem.totalPrice - currentPizzaItem.item.price;

        return {
          ...state,
          items: {
            ...state.items,
            [action.payload]: {
              item: currentPizzaItem.item,
              totalCount: currentPizzaItem.totalCount - 1,
              totalPrice: sustractProductTotalPrice,
            },
          },
          totalCount: state.totalCount - 1,
          totalPrice: state.totalPrice - currentPizzaItem.item.price,
        };
      }

      if (currentPizzaItem.totalCount === 1) {
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
