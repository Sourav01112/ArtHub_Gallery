import { ADMIN_TYPE } from "./actionTypes";

const inState = {
  admin: false,
};

export const reducer = (state = inState, action) => {
  switch (action.type) {
    case ADMIN_TYPE: {
      return { ...state, admin: action.payload };
    }

    default: {
      return state;
    }
  }
};
