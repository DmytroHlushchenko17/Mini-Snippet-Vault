import type {
  FetchNotesParams,
  FetchNotesResponse,
  Note,
  NoteTag,
  NoteType,
} from '@mini-snipped-vault/shared';
import axios from 'axios';

const url = process.env.NEXT_PUBLIC_BASE_URL;

if (!url && process.env.NODE_ENV === 'production') {
  console.warn('Warning: NEXT_PUBLIC_BASE_URL is not defined. API calls will likely fail.');
}

const api = axios.create({ 
  baseURL: url || 'http://localhost:5000', // Fallback for local dev/build safety
  timeout: 10000 
});


export type NoteCreate = {
  title: string;
  content: string;
  tag: NoteTag;
  type: NoteType;
};

export const fetchNotes = async (
  params: FetchNotesParams,
): Promise<FetchNotesResponse> => {
  const { page = 1, perPage = 12, search = '', tag, type } = params;

  const res = await api.get<FetchNotesResponse>(`/notes`, {
    params: { page, perPage, search: search || undefined, tag, type },
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
