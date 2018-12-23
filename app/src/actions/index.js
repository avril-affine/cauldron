// @flow

import uuid from 'uuid';
import pdfjs from 'pdfjs-dist/webpack';
import { pageTypes } from '../types';
import type { T_PageTypes } from '../types';

/*
 * Page Types
 */
export const REQUEST_NEW_PAGE = 'REQUEST_NEW_PAGE';
export const RECEIVE_NEW_PAGE = 'RECEIVE_NEW_PAGE';
export const REQUEST_PUT_TITLE = 'REQUEST_PUT_TITLE';
export const RECEIVE_PUT_TITLE = 'RECEIVE_PUT_TITLE';
export const REQUEST_PUT_PAGETYPE = 'REQUEST_PUT_PAGETYPE';
export const RECEIVE_PUT_PAGETYPE = 'RECEIVE_PUT_PAGETYPE';
export const REQUEST_FETCH_ALL_PAGES = 'REQUEST_FETCH_ALL_PAGES';
export const RECEIVE_FETCH_ALL_PAGES = 'RECEIVE_FETCH_ALL_PAGES';

/*
 * Tag Types
 */
export const REQUEST_ADD_TAG = 'REQUEST_ADD_TAG';
export const RECEIVE_ADD_TAG = 'RECEIVE_ADD_TAG';
export const REQUEST_DELETE_TAG = 'REQUEST_DELETE_TAG';
export const RECEIVE_DELETE_TAG = 'RECEIVE_DELETE_TAG';
export const REQUEST_FETCH_TAGS_BY_PAGE = 'REQUEST_FETCH_TAGS_BY_PAGE';
export const RECEIVE_FETCH_TAGS_BY_PAGE = 'RECEIVE_FETCH_TAGS_BY_PAGE';

/*
 * PDF Types
 */
export const REQUEST_UPLOAD_PDF = 'REQUEST_UPLOAD_PDF';
export const RECEIVE_UPLOAD_PDF = 'RECEIVE_UPLOAD_PDF';
export const REQUEST_PUT_HIGHLIGHT = 'REQUEST_PUT_HIGHLIGHT';
export const RECEIVE_PUT_HIGHLIGHT = 'RECEIVE_PUT_HIGHLIGHT';
