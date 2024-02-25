import React from 'react';
import { S } from './HeaderMenu_Styles';
import {Menu} from "./menu/Menu";

export const HeaderMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.HeaderMenu>
            <Menu menuItems={props.menuItems}/>
        </S.HeaderMenu>
    );
};



