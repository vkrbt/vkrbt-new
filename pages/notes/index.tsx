import * as React from 'react';
import {NotesList} from '../../components/NotesList/NotesList';
import Head from 'next/head';
import {clsJoin} from '../../helpers/clsJoin';
import styles from './notes.module.css';

export interface NotesProps {

}

const Notes: React.FC<NotesProps> = ({}) => {
    return (
        <>
            <Head>
                <title key="title">Влад Корбут | Разработчик интерфейсов | Заметки</title>
                <meta key="og:title" property="og:title" content="Влад Корбут | Заметки"/>
                <meta key="og:type" property="og:type" content="website"/>
                <meta property="og:image:width" content="200"/>
                <meta property="og:image:height" content="200"/>
            </Head>
            <section className={clsJoin(styles.notes, 'container')}>
                <h1>Мои заметки</h1>
                <NotesList />
            </section>
        </>
    );
}

export default Notes
