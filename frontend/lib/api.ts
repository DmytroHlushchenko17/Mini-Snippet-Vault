import type {
  FetchNotesParams,
  FetchNotesResponse,
  Note,
  NoteTag,
} from '../types/note';
import axios from 'axios';

const url = process.env.BASE_URL;
const api = axios.create({ baseURL: url });

export type NoteCreate = {
  title: string;
  content: string;
  tag: NoteTag;
};

export const fetchNotes = async (
  params: FetchNotesParams,
): Promise<FetchNotesResponse> => {
  const { page = 1, perPage = 12, search = '', tag } = params;

  const res = await api.get<FetchNotesResponse>(`/notes`, {
    params: { page, perPage, search: search || undefined, tag },
  });
  return res.data;
};

export const createNote = async (value: NoteCreate): Promise<Note> => {
  const response = await api.post<Note>(`/notes`, value);
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await api.delete<Note>(`/notes/${id}`);
  return response.data;
};

export async function fetchNoteById(id: string): Promise<Note> {
  const { data } = await api.get<Note>(`/notes/${id}`);
  return data;
}

export const getNotes = async (tag?: string | undefined): Promise<Note[]> => {
  const { data } = await api.get<FetchNotesResponse>('/notes', {
    params: { perPage: 12 },
  });
  if (!tag) return data.notes;
  return data.notes.filter((note) => note.tag === tag);
};
