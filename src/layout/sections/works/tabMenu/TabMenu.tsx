import React from 'react';
import styled from "styled-components";
import {Links} from '../../../../components/Links'


export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index)=>
                    <ListItem key={index}>
                        <Links href=''>{item}</Links>
                    </ListItem>
                )}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    margin: 0 auto 40px;
    max-width: 352px;
    width: 100%; //резиновый элемент к родителю
  }
`

const ListItem = styled.li `
    
`

