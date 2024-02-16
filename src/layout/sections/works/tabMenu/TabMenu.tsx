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
    gap: 20px;
    justify-content: center;
    margin-bottom: 40px;
  }
`

const ListItem = styled.li `
    
`

