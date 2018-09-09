// @flow 
import { createSelector } from "reselect"
import type { CommentState } from "../models/Comment"

export const commentSelector = (state: CommentState) => state.comment
