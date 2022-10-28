import styled from 'styled-components'

import Image from 'next/image'

//                          Global
export const Item = styled.p`
  font-family: Anago;
  font-size: var(--regular);
  line-height: 120%;

  color: var(--grey);
`

//HeroContent         Section 01

export const HeroContentSection = styled.main`
  width: 100%;
  min-width: 360px;
  height: 90vh; // 628px

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url('img/heroOurServices.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 1200px) {
    min-width: 312px;
    height: 100vh;
  }
`

export const HeroTextWrapper = styled.div`
  width: 100%;
  padding: 0 var(--paddingLeft2);
  align-items: initial;
`

export const HeroWrapper = styled.div`
  max-width: 360px;

  width: 85%;
  p + p {
    margin-top: var(--small);
  }

  @media screen and (min-width: 1200px) {
    max-width: 515px;
  }
`

export const HeroTitle = styled.p`
  font-family: Anago;
  font-size: clamp(var(--title), 5vw, 64px);
  line-height: 120%;
  font-weight: bold;

  color: var(--white);
`

export const HeroText = styled.p`
  font-family: Anago;
  font-size: var(--regular);
  line-height: 120%;

  color: var(--white);
`

//PrifyPrinciples     Section 02

export const PrinciplesPrifySection = styled.section`
  min-width: 360px;
  min-height: 666px;

  background: var(--purple);

  padding: var(--paddingTop2) var(--paddingLeft2);

  // background-image: url('img/lockerBg.png');
  // background-repeat: no-repeat;
      // background-position: right;
      // background-position-y: 18vh;
  // background-position: right bottom;
  // background-position-y: 18vh;

  @media screen and (min-width: 1200px) {
    height: 77vh;
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
  padding-left: 8px;
`

export const Principle = styled.p`
  font-family: Anago;
  font-size: var(--regular);
  line-height: 120%;
  letter-spacing: 1px;

  color: rgba(255, 255, 255, 0.87);
`

//How it Works        Section 03

export const HowItWorksSection = styled.section`
  min-width: 360px;
  min-height: 123vh; //1170px
  // max-width: 560px;
  // height: 123vh; // 1170px

  // @media screen and (min-width: 1200px) {
  //   height: 122vh;
  // }
`

export const HowItWorksWrapper = styled.div`
  padding: var(--paddingTop2) var(--paddingLeft2);
`

export const HowItWorksTitle = styled.p`
  font-family: Anago;
  font-size: clamp(var(--title), 5vw, 64px);
  line-height: 120%;

  color: var(--purple);
`

export const HowItWorksSubtitle0 = styled.p`
  font-family: Anago;
  font-size: clamp(var(--title), 5vw, 40px);
  line-height: 120%;

  color: var(--purple);
`

export const HowItWorksText0 = styled.div`
  max-width: 1250px;

  font-family: Anago;
  font-size: var(--regular);
  font-style: normal;
  font-weight: normal;

  color: var(--grey);

  padding: 2vh 0;
`

export const HowItWorksTextAtom0 = styled.text`
  color: var(--green);
`

export const HowItWorksPerson0 = styled.div`
  height: 398px;
  display: flex;

  align-items: center;

  // margin-bottom: -120px;

  // max-width: 786px;
  // display: flex;
  // height: 390px;

  // flex-direction: column;

  // background-color: #2F1160;

  @media screen and (min-width: 1200px){
    width: 1200px;
    margin: 0 auto -100px auto;
  }
`

export const HowItWorksPTextWrapper = styled.div`
  max-width: 360px;
  height: 398px;
  padding: 130px 0;
`

export const HowItWorksImage0 = styled(Image)`
  max-width: 100%;
  max-height: 100%;
`

export const HowItWorksPTextWrapper1 = styled.div`
  max-width: 360px;
  height: 398px;
  padding: 130px 0;
  margin-top: 5.5vh; //47px;
`

export const HowItWorksPerson1 = styled.div`
  min-height: 51vh; //490px;
  display: flex;

  justify-content: right;

  @media screen and (min-width: 1200px){
    width: 1200px;
    height: 490px;
    margin: auto;
  }
`

export const HowItWorksSubtitle1 = styled.p`
  font-family: Anago;
  font-size: clamp(var(--title), 5vw, 40px);
  line-height: 120%;
  color: var(--green);

  text-align: right;
`

export const HowItWorksText1 = styled.div`
  max-width: 1250px;

  font-family: Anago;
  font-size: var(--regular);
  font-style: normal;
  font-weight: normal;

  color: var(--grey);

  text-align: right;
  padding: 2vh 0;
`

export const HowItWorksTextAtom1 = styled.text`
  color: var(--purple);
`

export const HowItWorksImage1 = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  // vertical-align: top;
`

export const HowItWorksBtn = styled.div`
  @media screen and (min-width: 1200px) {
    margin-top: var(--regular);
  }
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

export const PrivFormsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: 360px;
  min-height: 666px;
  background: var(--white);

  padding: var(--paddingTop) var(--paddingLeft);
`

//WorkTogether        Section 04

export const WorkTogetherSection = styled.section`
  min-width: 360px;

  background: #a1a1a1;

  @media screen and (min-width: 1200px) {
    height: 60vh;
  }
`

//AboutLGPD           Section 05

export const AboutLgpdSection = styled.section`
  min-width: 360px;

  background: #e1e1e1;

  @media screen and (min-width: 1200px) {
    height: 135vh;
  }
`

//HowToAnon           Section 06

//AnotherWaysTecn     Section 07

//PrivateForm         Section 08

export const PrivFormsApplicationWrapper = styled.section`
  min-width: 360px;
  height: 1000px;

  background: var(--purple);

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
