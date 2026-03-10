import { TAGS } from '../constants/tags.js';
import { TYPES } from '../constants/noteTypes.js';

export type NoteTag = (typeof TAGS)[number];
export type NoteType = (typeof TYPES)[number];

export interface Note {
  id: string;
  title: string;
  content: string;
  tag: NoteTag;
  type: NoteType;
  createdAt: string;
  updatedAt: string;
}

export interface FetchNotesParams {
  page?: number;
  perPage?: number;
  search?: string;
  tag?: NoteTag;
  type?: NoteType;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}
