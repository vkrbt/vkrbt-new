import * as React from 'react';
import { formatDate } from '../../helpers/formatDate';
import styles from './note-card.module.css'
import {clsJoin} from '../../helpers/clsJoin';
export interface NoteCardProps {
    id: string;
    title: string;
    description: string;
    date: string;
}

export const NoteCard: React.FC<NoteCardProps> = ({id, title, description, date}) => {
    return (
        <a className={styles.card} href={`/notes/${id}/`}>
            <div>
                <span className={clsJoin(styles.date, styles.dateMobile)}>{formatDate(date)}</span>
                <h2>{title} <span className={clsJoin(styles.date, styles.dateDt)}>— {formatDate(date)}</span></h2>
                <p>{description}</p>
            </div>
        </a>
    );
}
