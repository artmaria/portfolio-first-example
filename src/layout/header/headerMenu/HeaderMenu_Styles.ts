import {theme} from "../../../styles/Theme";
import styled, {css} from "styled-components";

//Menu
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

//Mobile menu
const MobileMenu = styled.nav`
    
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  background-color: rgba(31, 31, 32, 0.9);
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 99999;
  display: none;
  
  ${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  
  
  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
  }
`

const BurgerBtn = styled.button<{isOpen: boolean}>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.color.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.color.font};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0px);
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.color.font};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0px);
        width: 36px;
      `}
    }
  }
`

//Header / desktop menu
const HeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: space-between;
  }
`

export const S = {
    Link,
    Mask,
    ListItem,
    MobileMenu,
    BurgerBtn,
    MobileMenuPopup,
    HeaderMenu,
}