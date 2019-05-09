import { MOVE_TOP, MOVE_PROJECTS, MOVE_CONTACT } from '../actions/types';

const initialState = { view: 0, screenY: [0, 0] };

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVE_TOP:
      return {
        ...state,
        view: action.dispatch.view,
        screenY: action.dispatch.screenX,
        screenY: action.dispatch.screenY
      };
    case MOVE_PROJECTS:
      return {
        ...state,
        view: action.dispatch.view,
        screenY: action.dispatch.screenX,
        screenY: action.dispatch.screenY
      };
    case MOVE_CONTACT:
      return {
        ...state,
        view: action.dispatch.view,
        screenY: action.dispatch.screenX,
        screenY: action.dispatch.screenY
      };
    default:
      return state;
  }
};
