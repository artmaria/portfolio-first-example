import React from 'react';
import {Links} from '../../../../components/Links'
import { S } from './TabMenu_Styles';


export const TabMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <S.TabMenu>
            <ul>
                {props.menuItems.map((item, index)=>
                    <S.ListItem key={index}>
                        <Links href=''>{item}</Links>
                    </S.ListItem>
                )}
            </ul>
        </S.TabMenu>
    );
};


