import styled from 'styled-components'

import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp'

export const HeroContent = styled.section`
  width: 100%;
  min-width: 360px;
  min-height: 90vh; // 628px

  background: url('img/contactMobileBg.png') no-repeat center;
  background-size: cover;

  @media screen and (min-width: 1000px) {
    height: 100vh;
    min-height: 800px;
    display: flex;
    justify-content: space-around;
    background: url('img/contactBg.png') no-repeat center;
    background-size: cover;
  }
`

export const ContactWrapper = styled.div`
  padding: var(--paddingTop) var(--paddingLeft);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 1000px) {
    margin-top: 120px;
  }
`

export const Title = styled.p`
  font-size: clamp(var(--title), 5vw, 64px);
  font-family: Anago;
  line-height: 120%;
  color: var(--white);

  @media screen and (min-width: 1200px) {
    margin-bottom: 24px;
  }
`

export const ContactType = styled.p`
  font-size: 18px;
  font-family: Anago;
  line-height: 32px;
  color: var(--green);
`

export const WhatsappButton = styled.button`
  width: 312px;
  height: 39px;
  margin-top: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: capitalize;
  font-family: Anago;
  font-size: 16px;
  font-weight: bold;
  line-height: 120%;

  background: none;
  border: 1px solid var(--green);
  color: var(--green);

  @media screen and (min-width: 1200px) {
    width: 273px;
    height: 40px;
    margin-top: var(--medium);
    align-self: flex-start;
  }
`

export const WhatsappIcon = styled(Whatsapp)`
  margin-left: 10px;
  color: var(--green);
`

export const FormsWrapper = styled.div`
  padding: var(--paddingTop) var(--paddingLeft);

  textarea {
    height: 149px;
  }

  button {
    margin-top: 24px;
  }

  @media screen and (min-width: 1200px) {
    button {
      max-width: 75px;
      max-height: 48px;
    }
  }

  @media screen and (min-width: 1000px) {
    margin-top: 120px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input + input {
    margin-top: var(--small);
  }

  textarea {
    margin-top: var(--small);
  }

  .requiredMessage {
    color: red;
    font-size: 16px;
  }
`

export const FormInput = styled.input`
  min-width: 312px;
  min-height: 48px;
  max-width: 466px;
  max-height: 62px;
  padding: 10px;

  outline: none;
  background: var(--white);
  color: #000000;

  font-size: inherit;
  font-weight: inherit;
  text-decoration: none;
  font-family: inherit;

  font-size: 18px;

  &::placeholder {
    opacity: 0.8;
  }

  @media only screen and (min-width: 1200px) {
    min-width: 466px;
    min-height: 62px;
  }
`

export const FormTextArea = styled.textarea`
  font-size: inherit;
  font-weight: inherit;
  text-decoration: none;
  font-family: inherit;

  outline: none;
  resize: none;
  padding: 10px;
  min-width: 312px;
  min-height: 96px;
  max-width: 466px;

  outline: none;
  color: #000000;
  background: var(--white);
  font-size: 18px;

  ::placeholder {
    opacity: 0.8;
  }

  @media only screen and (min-width: 1200px) {
    min-width: 466px;
    min-height: 149px;
  }
`
