import {
  MOVE_TOP,
  MOVE_PROJECTS,
  MOVE_CONTACT
} from '../constants/ActionTypes';

const initialState = { view: 'top' };

const viewSelect = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_TOP:
      return { view: 'top' };
    case MOVE_PROJECTS:
      return { view: 'projects' };
    case MOVE_CONTACT:
      return { view: 'contact' };
    default:
      return state;
  }
};

export default viewSelect;
