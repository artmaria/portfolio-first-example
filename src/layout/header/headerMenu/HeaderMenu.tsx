import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) =>
                    <ListItem key={index}>
                        <Link href=''>
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                )}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: space-between;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block; //отображается как строчный элемент, но содержимое форматируется как блок
  height: 50%;
  overflow: hidden;
  // outline: 1px solid red;
  color: ${theme.color.accent};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%); //поднимаем верхнюю часть на 50% выше, чтобы отобразить низ
    }
  }
`

const ListItem = styled.li`
  position: relative;

  &::before { //псевдоэлемент 
    content: '';
    display: inline-block;
    height: 3px;
    background-color: ${theme.color.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0); //без наведения линии нет
  }

  &:hover {
    &::before {
      transform: scale(1); //при наведении линия появляется
    }

    ${Mask} {
      transform: skewX(12deg) translateX(5px); //Х горионталь
      color: ${theme.color.font};
      //тут маска внутри маски (вторая), & отсылка к родительскому элементу
      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px); //сдвигать в другую сторону
      }
    }
  }
`

const Link = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  color: transparent;
`

