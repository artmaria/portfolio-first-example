import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Contact = styled.section`

`

const Form = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto; //способ центрирования стандартный

  textarea {
    resize: none; //не тянется форма мануально
    height: 155px;
  }
`


const Field = styled.input`
  width: 100%;
  background-color: ${theme.color.secondaryBg};
  border: 1px solid ${theme.color.borderColor};
  padding: 7px 15px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: ${theme.color.font};

  &::placeholder {
    color: ${theme.color.placeholderColor};
    text-transform: capitalize;
  }

  &:focus-visible { //outline при наведении на элемент
    outline: 1px solid ${theme.color.borderColor};
  }
`

export const S = {
    Contact,
    Form,
    Field,
}