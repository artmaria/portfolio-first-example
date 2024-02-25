import styled from "styled-components";


export const StyledHeader = styled.header`
  background-color: #1F1F20E5;
  padding: 20px 0; //сверху снизу 20, по бокам 0
  position: fixed;
  top: 0; //прижали вверху экрана
  left: 0; 
  right: 0;
  z-index: 99999; //поверх всех элементов на странице, для этого задали самый большой
`

export const S = {
    StyledHeader
}