import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={'name'}/>
                    <Field placeholder={'subject'}/>
                    <Field as={'textarea'} placeholder={'message'}/>
                    <Button type={'submit'}>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  
`

const StyledForm = styled.form`
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