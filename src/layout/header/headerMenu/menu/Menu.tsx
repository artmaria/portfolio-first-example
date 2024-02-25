import React from 'react';
import { S } from '../HeaderMenu_Styles';

export const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <ul>
            {props.menuItems.map((item, index) =>
                <S.ListItem key={index}>
                    <S.Link href=''>
                        {item}
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                    </S.Link>
                </S.ListItem>
            )}
        </ul>
    );
};


