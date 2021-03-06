import styled from 'styled-components'

import Image from 'next/image'

export const HeroContent = styled.main`
  min-width: 360px;
  height: 90vh; // 628px

  padding: 0 var(--paddingLeft);

  display: flex;
  align-items: center;

  background-image: url('img/heroOurServices.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 1200px) {
    height: 100vh;
  }
`

export const TextWrapper = styled.div`
  max-width: 360px;

  width: 85%;
  p + p {
    margin-top: var(--regular);
  }

  @media screen and (min-width: 1200px) {
    max-width: 600px;
  }
`

export const HeroTitle = styled.p`
  font-family: Anago;
  font-size: clamp(var(--title), 5vw, 64px);
  line-height: 120%;

  color: var(--white);
`

export const HeroText = styled.p`
  font-family: Anago;
  font-size: var(--regular);
  line-height: 120%;

  color: var(--white);
`

export const PrinciplesPrifyWrapper = styled.section`
  min-width: 360px;
  min-height: 666px;
  background: var(--purple);

  padding: var(--paddingTop) var(--paddingLeft);

  @media screen and (min-width: 1200px) {
    background-image: url('img/lockerBg.png');
    background-repeat: no-repeat;
    background-position: right bottom;
  }
`

export const PrinciplesSectionTitle = styled.p`
  max-width: 560px;

  font-family: Anago;
  font-size: clamp(var(--title), 5vw, var(--large));
  line-height: 120%;

  color: var(--green);
`

export const PrinciplesList = styled.ul`
  max-width: 486px;
  margin: var(--medium) var(--medium);

  li + li {
    margin-top: var(--small);
  }
`

export const PrinciplesListItem = styled.li`
  color: var(--white);
`

export const Principle = styled.p`
  font-family: Anago;
  font-size: var(--regular);
  line-height: 120%;

  color: rgba(255, 255, 255, 0.87);
`

export const PrivFormsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: 360px;
  min-height: 666px;
  background: var(--white);

  padding: var(--paddingTop) var(--paddingLeft);
`

export const HowItWorksTitle = styled.p`
  font-family: Anago;
  font-size: clamp(var(--title), 5vw, 64px);
  line-height: 120%;

  color: var(--purple);
`

export const HowItWorksList = styled.ul`
  max-width: 486px;
  margin: var(--medium) var(--medium);

  li + li {
    margin-top: var(--medium);
  }
`

export const HowItWorksListItem = styled.li`
  color: var(--grey);
`

export const Item = styled.p`
  font-family: Anago;
  font-size: var(--regular);
  line-height: 120%;

  color: var(--grey);
`

export const HowItWorksBtn = styled.div`
  @media screen and (min-width: 1200px) {
    margin-top: var(--regular);
  }
`

export const PrivFormsApplicationWrapper = styled.section`
  background: var(--purple);

  min-width: 360px;
  height: 1000px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    height: 520px;
  }
`

export const ApplicationSectionTitle = styled.p`
  margin-top: var(--regular);
  font-family: Anago;
  font-size: var(--title);
  font-weight: bold;
  line-height: 120%;

  text-align: center;

  color: var(--green);

  @media screen and (min-width: 1200px) {
    margin: 0;
  }
`

export const ApplicationListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  max-width: 1920px;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    margin-top: 5rem;
  }
`

export const ApplicationItem = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 312px;
  min-height: 167px;

  margin: 20px 0;
`

export const ItemImage = styled(Image)`
  max-width: 100%;
  height: auto;
`

export const ApplicationItemTitle = styled.p`
  margin-top: var(--small);
  text-align: center;

  font-family: Anago;
  font-size: 24px;
  line-height: 30px;

  color: var(--green);
`

export const ApplicationItemDescription = styled.p`
  margin-top: var(--small);
  text-align: center;

  font-family: Anago;
  font-size: 18px;
  line-height: 30px;

  color: var(--white);
`
export const DemandContactWrapper = styled.section`
  min-width: 360px;
  height: 700px;

  background: var(--white);

  padding: var(--large) var(--paddingLeft);

  @media screen and (min-width: 1200px) {
    padding: 140px var(--paddingLeft);
  }
`

export const ContactSectionWrapper = styled.div`
  /* width: 90%; */
  max-width: 1920px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: start;
  }
`

export const ContactWrapperText = styled.div`
  max-width: 470px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    margin-bottom: 20rem;
  }
`

export const DemandTitle = styled.p`
  font-family: Anago;
  font-weight: bold;
  font-size: var(--title);
  line-height: 120%;

  color: var(--purple);
  text-align: center;

  @media screen and (min-width: 1200px) {
    font-size: 64px;
    margin-bottom: var(--small);
    text-align: start;
  }
`

export const DemandDescription = styled.p`
  margin-top: var(--small);

  font-family: Anago;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;

  color: var(--grey);
`

export const FormsWrapper = styled.div`
  margin: var(--medium) 0 var(--small) 0;

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .requiredMessage {
    color: red;
    font-size: 16px;
  }
`

export const ButtonWrapper = styled.div`
  margin-top: var(--large);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-top: var(--medium);
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
  outline: none;
  resize: none;
  padding: 10px;
  min-width: 312px;
  min-height: 96px;
  max-width: 466px;

  outline: none;
  color: #000000;
  background: var(--white);

  font-size: inherit;
  font-weight: inherit;
  text-decoration: none;
  font-family: inherit;

  font-size: 18px;

  ::placeholder {
    opacity: 0.8;
  }

  @media only screen and (min-width: 1200px) {
    min-width: 466px;
    min-height: 149px;
  }
`
