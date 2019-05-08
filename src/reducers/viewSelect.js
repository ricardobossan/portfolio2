import { MOVE_TOP, MOVE_PROJECTS, MOVE_CONTACT } from '../actions/types';

const initialState = { view: 0 };

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVE_TOP:
      return { view: action.dispatch };
    case MOVE_PROJECTS:
      return { view: action.dispatch };
    case MOVE_CONTACT:
      return { view: action.dispatch };
    default:
      return state;
  }
};
