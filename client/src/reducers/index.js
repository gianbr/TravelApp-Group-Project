import { addItemToCart, addItemToWish, removeAllItemsFromWish } from "../cart-utils/index";
import { removeItemFromCart } from "../cart-utils/index";
import { addItemFromCartInCart } from "../cart-utils/index";
import { removeAllItemsFromCart } from "../cart-utils/index";

const initialState = {
  plains: [],
  plainsCopy: [],
  destination: [],
  detail: [],
  plainsDestacados: [],
  users: {},
  cartPlains: [],
  userLogout: {},
  lugares: [],
  checkout: [],
  isAdmin: false,
  wishList:[]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PLAINS":
      return {
        ...state,
        plains: action.payload,
        plainsCopy: action.payload,
      };
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
    case "FILTER_BY_PROVINCE":
      const allPlains = state.plainsCopy;
      const provinceFilter =
        action.payload === "All"
          ? allPlains
          : allPlains.filter((e) => e.location === action.payload);
      return {
        ...state,
        plains: provinceFilter,
      };
    case "ORDER_BY_PRICE":
      const sortByPrice =
        action.payload === "asc"
          ? state.plains.slice().sort(function (a, b) {
              if (a.price > b.price) {
                return 1;
              }
              if (b.price > a.price) {
                return -1;
              }
              return 0;
            })
          : state.plains.slice().sort(function (a, b) {
              if (a.price > b.price) {
                return -1;
              }
              if (b.price > a.price) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        plains: sortByPrice,
      };
    case "ORDER_BY_SCORE":
      const sortByScore =
        action.payload === "asc"
          ? state.plains.slice().sort(function (a, b) {
              if (a.score > b.score) {
                return 1;
              }
              if (b.score > a.score) {
                return -1;
              }
              return 0;
            })
          : state.plains.slice().sort(function (a, b) {
              if (a.score > b.score) {
                return -1;
              }
              if (b.score > a.score) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        plains: sortByScore,
      };
    case "SEARCH_DESTINATION":
      return {
        ...state,
        plains: action.payload,
      };
    case "CLEAR_STATE":
      return {
        ...state,
        detail: [],
      };

    case "GET_PLAINS_DESTACADOS":
      let res = action.payload.slice().sort(function (a, b) {
        if (a.score > b.score) {
          return -1;
        }
        if (b.score > a.score) {
          return 1;
        }
        return 0;
      });
      let respuesta = [
        res[res.findIndex((e) => e.location === "Mendoza")],
        res[res.findIndex((e) => e.location === "Buenos Aires")],
        res[res.findIndex((e) => e.location === "Río Negro")],
        res[res.findIndex((e) => e.location === "Misiones")],
      ];
      return {
        ...state,
        plainsDestacados: respuesta,
      };
    case "SIGNIN":
      return {
        ...state,
        users: action.payload,
      };
    case "SIGNUP":
      return {
        ...state,
        users: action.payload,
      };
    case "LOGOUT":
      localStorage.clear();

      return { ...state, users: null };
    case "GOOGLE_LOGIN":
      return {
        ...state,
        users: action.payload,
      };

    case "ADD_ITEM":
      return {
        ...state,
        cartPlains: addItemToCart(state.cartPlains, action.payload),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cartPlains: removeItemFromCart(state.cartPlains, action.payload),
      };

    case "ADD_ITEM_IN_CART":
      return {
        ...state,
        cartPlains: addItemFromCartInCart(state.cartPlains, action.payload),
      };

    case "REMOVE_ALL_ITEMS_IN_CART":
      return {
        ...state,
        cartPlains: removeAllItemsFromCart(state.cartPlains, action.payload),
      };

    case "GET_PROVINCE":
      return {
        ...state,
        lugares: action.payload,
      };
    case "GET_CITY":
      return {
        ...state,
        lugares: action.payload,
      };

    case "UPDATE_PLAIN":
      return {
        ...state,
        update: state.plains.filter((plain) =>
          plain._id === action.payload._id ? action.payload : plain
        ),
      };

    case "DELETE_PLAIN":
      return {
        ...state,
        plains: state.plains.filter((plain) => plain._id !== action.payload),
      };
    case "GET_IS_ADMIN":
      console.log("isAdmin", action.payload);
      return {
        ...state,
        isAdmin: action.payload,
      };
    case "ADD_REVIEW":
      return {
        ...state,
        plains: action.payload,
      };

      case "ADD_ITEM_TO_WISH":
        return {
          ...state,
          wishList: addItemToWish(state.wishList, action.payload),
        };
      case "REMOVE_ALL_ITEMS_IN_WISH":
          return {
            ...state,
            wishList: removeAllItemsFromWish(state.wishList, action.payload),
          };
      case "CHECKOUT": 
        console.log("checkout", action.payload);
        return {
          ...state,
          checkout: action.payload,
        }
    default:
      return state;
  }
}
export default rootReducer;
