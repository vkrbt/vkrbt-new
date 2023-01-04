import * as React from 'react';
import styles from './notes-list.module.css';
import {NoteCard} from '../NoteCard/NoteCard';

export interface NotesListProps {
}

export const NotesList: React.FC<NotesListProps> = ({}) => {
    return (
        <ul className={styles.notesList}>
            <li className={styles.noteItem}>
                <NoteCard
                    date="2023.01.02"
                    id="new-year-loneliness"
                    title="Новогоднее одиночество"
                    description="И как я с ним обошелся"
                />
            </li>
            <li className={styles.noteItem}>
                <NoteCard
                    date="2022.10.05"
                    id="texts-to-exes"
                    title="Общаться ли с бывшими?"
                    description="Делюсь своим опытом"
                />
            </li>
            <li className={styles.noteItem}>
                <NoteCard
                    date="2022.08.31"
                    id="frightened-laughter"
                    title="Cтрашно быть слабым"
                    description="Защитный механизм в страхе"
                />
            </li>
            <li className={styles.noteItem}>
                <NoteCard
                    date="2022.08.26"
                    id="lost-and-found"
                    title="Я потерял все, что привез с Бали"
                    description="О том, как приходит новый опыт"
                />
            </li>
            <li className={styles.noteItem}>
                <NoteCard
                    date="2022.08.18"
                    id="how-i-started-to-live"
                    title="Как я начал жить свою жизнь"
                    description="О моем кризисе в карьере"
                />
            </li>
        </ul>
    );
}
