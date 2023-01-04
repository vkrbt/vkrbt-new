import * as React from 'react';
import styles from './note.module.css';
import Head from 'next/head';
import {clsJoin} from '../../helpers/clsJoin';

export interface NoteProps {
    title: string;
}

export const Note: React.FC<NoteProps & React.PropsWithChildren> = ({children, title}) => {
    return (
        <div className={clsJoin(styles.note, 'container')}>
            <Head>
                <title key="title">{title} | Заметки Влада Корбута</title>
                <meta key="og:title" property="og:title" content={`${title} | Заметки Влада Корбута`}/>
                <meta key="og:type" property="og:type" content="article"/>
            </Head>
            <h1 className={styles.title}>{title}</h1>
            {children}
        </div>
    );
}
