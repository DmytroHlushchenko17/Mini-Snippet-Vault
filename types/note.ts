export type NoteTag = 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping';
export type NoteType = 'link' | 'note' | 'command';

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
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}
