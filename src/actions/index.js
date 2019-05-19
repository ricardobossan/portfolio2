import {
  MOVE_TOP,
  MOVE_PROJECTS,
  MOVE_CONTACT,
  SWIPE_TOP,
  SWIPE_PROJECTS,
  SWIPE_CONTACT
} from './types';

export const viewTop = () => {
  return {
    type: MOVE_TOP,
    dispatch: { view: 0, screenX: 0, screenY: 0 }
  };
};

export const viewProjects = () => {
  return {
    type: MOVE_PROJECTS,
    dispatch: { view: 1, screenX: 0, screenY: window.screen.availHeight }
  };
};
export const viewContact = () => {
  return {
    type: MOVE_CONTACT,
    dispatch: { view: 2, screenX: 0, screenY: window.screen.availHeight * 10 }
  };
};
export const swipeTop = () => {
  return {
    type: SWIPE_TOP,
    dispatch: { view: 0, screenX: 0, screenY: 0 }
  };
};

export const swipeProjects = () => {
  return {
    type: SWIPE_PROJECTS,
    dispatch: { view: 1, screenX: 0, screenY: window.screen.availHeight }
  };
};
export const swipeContact = () => {
  return {
    type: SWIPE_CONTACT,
    dispatch: { view: 2, screenX: 0, screenY: window.screen.availHeight * 10 }
  };
};
