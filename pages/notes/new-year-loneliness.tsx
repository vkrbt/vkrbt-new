import * as React from 'react';
import {Note} from '../../components/Note/Note';
import Head from 'next/head';

export interface PageProps {

}

export const Page :React.FC <PageProps > = ({}) => {
    let title = 'Новогоднее одиночество';

    return (
        <Note title="Новогоднее одиночество">
            <p>Последние годы на&nbsp;меня накатывало ощущение одиночества в&nbsp;предновогоднее время. При этом
                я&nbsp;находился в&nbsp;кругу близких мне людей, но&nbsp;внутреннего наполнения не&nbsp;ощущал.</p>
            <p>3&nbsp;года подряд я&nbsp;куда-то уезжал, чтоб не&nbsp;встречать новый год дома, чтобы иметь оправдание,
                почему я&nbsp;не&nbsp;смогу приехать к&nbsp;маме и&nbsp;этот новый год я&nbsp;планировал встретить тоже
                не&nbsp;в&nbsp;Минске. И&nbsp;чем ближе был праздник, тем меньше я&nbsp;понимал, как я&nbsp;хочу его
                встретить и&nbsp;где хочу быть. И&nbsp;сильно пугало, что опять накатит это невыносимое для меня чувство
                одиночества.</p>
            <p>Я&nbsp;считаю новый год семейным праздником. А&nbsp;семьи у&nbsp;меня как будто и&nbsp;нет. Родители
                давно разошлись, сестра уехала. И&nbsp;та&nbsp;семья, в&nbsp;которой я&nbsp;родился уже вроде как
                и&nbsp;не&nbsp;моя, а&nbsp;своей у&nbsp;меня еще нет.</p>
            <p>И&nbsp;мне казалось, что если я&nbsp;испытываю какой-то дефицит, то&nbsp;мне прям надо создать все
                условия, чтоб обострить его и&nbsp;&laquo;закалиться&raquo; и&nbsp;тут я&nbsp;сразу&nbsp;же наполнюсь.
                Это никогда не&nbsp;работало, а&nbsp;становилось только хуже. Ну&nbsp;и&nbsp;очевидно, что дефицит
                скорее нужно чем-то наполнять.</p>
            <p>Одиночество&nbsp;&mdash; тоже дефицит, дефицит близости, который в&nbsp;этом году я&nbsp;решил
                не&nbsp;обострять. Я&nbsp;понял, что моя семья это в&nbsp;первую очередь моя мама. В&nbsp;этом году
                я&nbsp;пригласил в&nbsp;гости маму и&nbsp;брата и&nbsp;встретил его с&nbsp;семьей. И&nbsp;наполнение
                пришло.</p>

        </Note>
    );
}

export default Page;
