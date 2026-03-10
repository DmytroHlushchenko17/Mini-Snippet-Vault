'use client';
import css from './NoteDetails.module.css';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import type { Note } from '@mini-snipped-vault/shared';
import { fetchNoteById } from '@/lib/api';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';

type RouteParams = {
  id: string;
};

const NoteDetailsClient = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  const params = useParams<RouteParams>();
  const id = params.id;

  const {
    data: note,
    isLoading,
    error,
  } = useQuery<Note>({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error || !note) return <p>Some error..</p>;

  return (
    <Modal onClose={handleClick}>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
            <div className={css.meta}>
              <span className={css.tag}>{note.tag}</span>
              <span className={css.type}>{note.type}</span>
            </div>
          </div>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <p className={css.date}>
              Created at: {new Date(note.createdAt).toLocaleDateString()}
            </p>
            <button onClick={handleClick} className={css.backBtn}>
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NoteDetailsClient;
