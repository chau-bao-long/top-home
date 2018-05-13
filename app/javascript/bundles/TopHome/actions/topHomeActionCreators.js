/* eslint-disable import/prefer-default-export */

import {TOP_HOME_NAME_UPDATE } from '../constants/topHomeConstants';

export const updateName = (text) => ({
  type: TOP_HOME_NAME_UPDATE,
  text,
});
