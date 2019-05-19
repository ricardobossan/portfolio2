import {
  MOVE_TOP,
  MOVE_PROJECTS,
  MOVE_CONTACT,
  SWIPE_TOP,
  SWIPE_PROJECTS,
  SWIPE_CONTACT
} from '../actions/types';

const initialState = { view: 0, screenY: 0, screenX: 0 };

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVE_TOP:
      return {
        ...state,
        view: action.dispatch.view,
        screenX: action.dispatch.screenX,
        screenY: action.dispatch.screenY
      };
    case MOVE_PROJECTS:
      return {
        ...state,
        view: action.dispatch.view,
        screenX: action.dispatch.screenX,
        screenY: action.dispatch.screenY
      };
    case MOVE_CONTACT:
      return {
        ...state,
        view: action.dispatch.view,
        screenX: action.dispatch.screenX,
        screenY: action.dispatch.screenY
      };
    case SWIPE_TOP:
      return {
        ...state,
        view: action.dispatch.view
      };
    case SWIPE_PROJECTS:
      return {
        ...state,
        view: action.dispatch.view
      };
    case SWIPE_CONTACT:
      return {
        ...state,
        view: action.dispatch.view
      };

    default:
      return state;
  }
};
