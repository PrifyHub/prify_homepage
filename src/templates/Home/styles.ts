import styled from 'styled-components'
import Image from 'next/image'

import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp'
import { KeyboardArrowDown } from '@styled-icons/material/KeyboardArrowDown'

export const HeroContent = styled.main`
  width: 100%;
  min-width: 360px;
  height: 90vh; // 628px

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url('img/heroBg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 1200px) {
    min-width: 312px;
    height: 100vh;
  }
`

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;

  min-width: 312px;
  min-height: 193px;
  max-width: var(--container);

  padding: 0 var(--small);

  @media screen and (max-width: 768) {
    width: 312px;
    height: 193px;
  }

  div {
    margin-top: 24px;
  }
`

export const HeroTitle = styled.p`
  font-family: Anago;
  font-style: normal;
  font-size: clamp(var(--title), 5vw, 64px);
  line-height: 120%;
  font-weight: 300;

  color: var(--white);

  span {
    color: var(--white);
    font-weight: bold;
  }
`

export const ArrowDown = styled(KeyboardArrowDown)`
  width: 32px;
  color: #ffffff;

  position: absolute;
  top: 90%;
`

export const RecognitionWrapper = styled.section`
  background: var(--purple);

  min-width: 360px;
  height: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (min-width: 1200px) {
    height: 400px;
    flex-direction: row;
    align-items: center;
  }
`

export const RecognitionItem = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 360px;
  min-height: 195px;

  padding: 0 var(--large);

  p {
    margin-top: var(--regular);
  }
`

export const ItemText = styled.p`
  font-family: Anago;
  font-size: var(--regular);
  line-height: 30px;

  text-align: center;

  color: var(--white);
`

export const IntroContent = styled.section`
  min-width: 360px;
  min-height: 640px;

  background: var(--white);
`

export const IntroSectionWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: var(--large);
  padding: 0 var(--regular);

  div {
    margin-top: var(--regular);
  }

  @media screen and (min-width: 1200px) {
    margin: 0;
    padding: 0;
    justify-content: center;
  }
`

export const IntroTitle = styled.p`
  font-family: Anago;
  font-style: normal;
  font-weight: bold;
  font-size: clamp(var(--title), 5vw, 64px);
  line-height: 120%;

  color: var(--purple);
`

export const Description = styled.p`
  margin-top: var(--small);
  max-width: 100%;

  font-family: Anago;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;

  color: #bababa;

  @media screen and (min-width: 1200px) {
    max-width: 312px;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: auto;
  padding: var(--large);

  @media screen and (min-width: 1200px) {
    padding: 130px 0;
  }
`

export const IntroImage = styled(Image)`
  max-width: 100%;
  height: auto;
`

export const AboutUsContent = styled.section`
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

export const SectionTitle = styled.p`
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

export const ItemsWrapper = styled.div`
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

export const Item = styled.div`
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

export const ItemTitle = styled.p`
  margin-top: var(--small);
  text-align: center;

  font-family: Anago;
  font-size: 24px;
  line-height: 30px;

  color: var(--white);
`

export const ItemDescription = styled.p`
  margin-top: var(--small);
  text-align: center;

  font-family: Anago;
  font-size: 18px;
  line-height: 30px;

  color: var(--white);
`

export const PrivFormsContent = styled.section`
  min-width: 360px;
  min-height: 640px;
  max-width: 1920px;
  margin: 0 auto;

  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

export const PrivFormsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--large);
  padding: 0 var(--medium);

  text-align: center;

  @media screen and (min-width: 1200px) {
    text-align: start;
    margin: 0;
    max-width: 360px;
  }
`

export const PrivSectionTitle = styled.p`
  font-family: Anago;
  font-weight: bold;
  font-size: clamp(var(--title), 5vw, var(--large));
  line-height: 120%;

  color: var(--purple);
`

export const PrivFormsDescription = styled.p`
  margin-top: var(--small);

  font-family: Anago;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;

  color: var(--grey);
`

export const PrivImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: auto;
  padding: var(--large);

  @media screen and (min-width: 1200px) {
    max-width: 550px;
    max-height: 500px;
  }
`
export const PrivFormsImage = styled(Image)`
  max-width: 100%;
  height: auto;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: var(--smaller);
`

export const PrivacyContent = styled.section`
  min-width: 360px;
  min-height: 640px;

  background-image: url('img/purpleLightsBg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const PrivacyTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 var(--regular);
  max-width: 460px;

  div {
    margin-top: var(--regular);
  }
`

export const PrivacySectionTitle = styled.p`
  font-family: Anago;
  font-style: normal;
  font-size: clamp(var(--title), 5vw, var(--large));
  line-height: 120%;

  text-align: center;
  color: var(--white);
  font-weight: 300;

  span {
    font-weight: bold;
    color: var(--white);
  }
`

export const ContactUsContent = styled.section`
  min-width: 360px;
  min-height: 760px;

  background: var(--white);

  @media screen and (min-width: 1200px) {
    height: 740px;
  }
`

export const ContactSectionWrapper = styled.div`
  width: 90%;
  max-width: 1920px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 9rem 0;
  }
`

export const ContactWrapper = styled.div`
  max-width: 434px;

  display: flex;
  flex-direction: column;
  margin-top: var(--large);

  @media screen and (min-width: 1200px) {
    margin-bottom: 20rem;
  }
`

export const ContactTextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;

  @media screen and (min-width: 1200px) {
    align-items: flex-start;
    text-align: start;
  }
`

export const ContactTitle = styled.p`
  font-family: Anago;
  font-weight: bold;
  font-size: var(--title);
  line-height: 120%;

  color: var(--purple);

  @media screen and (min-width: 1200px) {
    font-size: 64px;
    margin-bottom: var(--small);
  }
`

export const ContactDescription = styled.p`
  margin-top: var(--small);

  font-family: Anago;
  font-style: normal;
  font-weight: normal;
  font-size: var(--regular);
  line-height: 32px;

  color: var(--grey);
`

export const SocialWrapper = styled.div`
  margin: var(--small) 0 0 0;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  button {
    margin-top: var(--small);
  }

  @media screen and (min-width: 1200px) {
    align-items: flex-start;
  }
`

export const Contacts = styled.p`
  font-family: Anago;
  font-style: normal;
  font-weight: normal;
  font-size: var(--regular);
  line-height: 32px;

  color: var(--purple);
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

export const BtnWrapper = styled.div`
  margin-top: var(--medium);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    min-width: 229px;
    min-height: 48px;
    margin-top: var(--medium);
  }
`

export const WhatsappButton = styled.button`
  width: 312px;
  height: 39px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: capitalize;
  font-family: Anago;
  font-size: 16px;
  font-weight: bold;
  line-height: 120%;

  background: none;
  border: 1px solid var(--purple);
  color: var(--purple);

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
