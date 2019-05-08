import { MOVE_TOP, MOVE_PROJECTS, MOVE_CONTACT } from './types';

export const viewTop = () => {
  return {
    type: MOVE_TOP,
    dispatch: 0
  };
};

export const viewProjects = () => {
  return {
    type: MOVE_PROJECTS,
    dispatch: 1
  };
};
export const viewContact = () => {
  return {
    type: MOVE_CONTACT,
    dispatch: 2
  };
};
