import React from 'react';
import {Links} from "../../../../components/Links";
import {Button} from "../../../../components/Button";
import { S } from './Works_Styles';

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt={''}/>
                <Button>View Project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Links href={'#'}>demo</Links>
                <Links href={'#'}>code</Links>
            </S.Description>
        </S.Work>
    );
};

