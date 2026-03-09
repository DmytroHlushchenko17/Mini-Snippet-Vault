import NoteForm from '@/components/NoteForm/NoteForm';
import css from './CreateNote.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create notes',
  description: 'Create notes',
  openGraph: {
    title: 'Create notes',
    description: 'Create notes',
    url: '',
    images: [
      {
        url: 'https://share.google/EhqMtvzsAgLh9op7x',
        width: 1200,
        height: 630,
        alt: 'Snipped',
      },
    ],
  },
};

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
