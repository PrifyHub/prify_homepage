import styled from 'styled-components'

import Image from 'next/image'

export const HeroContent = styled.main`
  min-width: 360px;
  height: 90vh; // 628px

  padding: 0 var(--paddingLeft);

  display: flex;
  align-items: center;

  background-image: url('img/privacyHero.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 1200px) {
    height: 100vh;
  }
`

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  p + p {
    width: 85%;
    margin-top: var(--regular);
  }
`

export const HeroTitle = styled.p`
  max-width: 600px;
  font-family: Anago;
  font-size: clamp(var(--title), 5vw, 64px);
  line-height: 120%;

  color: var(--purple);
`

export const HeroText = styled.p`
  font-family: Anago;
  font-size: var(--regular);
  line-height: 120%;

  color: var(--white);
`

export const ExplanationWrapper = styled.section`
  min-width: 360px;
  height: 1000px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  margin: 0 auto;
  padding: 0 var(--regular);

  @media screen and (min-width: 1200px) {
    height: 740px;
    flex-direction: row;
    /* max-width: 1920px; */
  }
`

export const ExplanationTextWrapper = styled.div`
  max-width: 800px;
  max-height: 550px;

  @media screen and (min-width: 1200px) {
    max-width: 466px;
    max-height: 485px;
  }
`

export const Explanation = styled.p`
  font-family: Anago;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;

  color: var(--grey);
`

export const ExplanationImageWrapper = styled.div``

export const ExplanationImage = styled(Image)`
  max-width: 100%;
  height: auto;
`

export const PrivFormsApplicationWrapper = styled.section`
  background: var(--green);

  min-width: 360px;
  min-height: 984px;

  padding: var(--large) 0 0 0;
`

export const ApplicationSectionTitle = styled.p`
  font-family: Anago;
  font-size: var(--title);
  font-weight: bold;
  line-height: 120%;

  padding: 0 32px;
  text-align: center;

  color: var(--purple);
`

export const PrivacyInfoWrapper = styled.section`
  background: var(--green);

  min-width: 360px;
  max-height: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 0 var(--paddingLeft);

  @media screen and (min-width: 1200px) {
    padding: var(--large) var(--large);
    height: 520px;
  }
`

export const InfoTextWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 90%;

  margin: var(--large) 0;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    max-width: 1920px;
    margin: 0 auto;
  }
`

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 312px;
  height: 200px;

  margin: 20px 0;
`

export const InfoIcon = styled(Image)`
  width: 100%;
  height: auto;
`

export const InfoText = styled.p`
  max-width: 933px;
  min-height: 90px;
  margin-top: var(--small);
  text-align: center;

  font-family: Anago;
  font-size: var(--title);
  line-height: 120%;

  color: var(--purple);
`

export const InfoItemText = styled.p`
  margin-top: var(--small);
  text-align: center;

  font-family: Anago;
  font-size: 24px;
  line-height: 30px;

  color: var(--purple);
`

export const LGPDContent = styled.section`
  min-width: 360px;
  min-height: 965px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
    min-height: 740px;
  }
`

export const LGPDTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: var(--large);
  padding: 0 var(--medium);
  max-width: 621px;

  div {
    margin-top: var(--regular);
  }
`

export const LGPDTitle = styled.p`
  font-family: Anago;
  font-style: normal;
  font-weight: bold;
  font-size: clamp(var(--title), 5vw, var(--large));
  line-height: 120%;
  color: var(--purple);
`

export const LGPDescription = styled.p`
  margin-top: var(--small);
  font-family: Anago;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;

  color: #bababa;
`
export const LGPDImageWrapper = styled.div`
  margin: var(--medium) 0;
  padding: 0 var(--medium);
`

export const LGPDImage = styled(Image)`
  max-width: 100%;
  height: auto;
`

export const AnonymityMobileContent = styled.section`
  min-height: 640px;
  min-width: 360px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 var(--paddingLeft);

  background: url('img/mobileAnonymity.png') center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const AnonymityDesktopContent = styled.section`
  height: 680px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 var(--paddingLeft);

  background: url('img/anonymity.png') center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const AnonymityTitle = styled.p`
  font-family: Anago;
  font-size: var(--title);
  line-height: 120%;

  color: var(--white);
`

export const AnonymityDescription = styled.p`
  margin-top: var(--small);
  max-width: 460px;

  font-family: Anago;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;

  color: var(--white);
`

export const ProblemsWrapper = styled.section`
  min-width: 360px;
  background: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1200px) {
    height: 740px;
  }
`

export const ProblemsSectionWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  background: var(--white);
`

export const ProblemsTitleWrapper = styled.div`
  padding: var(--large) var(--paddingLeft) 0;
`

export const ProblemsTitle = styled.p`
  max-width: 760px;
  font-family: Anago;
  font-size: var(--title);
  line-height: 120%;

  color: var(--green);
`

export const ProblemsExamples = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 var(--paddingLeft);
  margin-bottom: var(--large);

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`

export const ProblemsItem = styled.div`
  max-width: 500px;
  margin: var(--large) 0 0 0;
`

export const ProblemsItemImage = styled(Image)`
  max-width: 100%;
  height: auto;
`

export const ItemSubtitle = styled.p`
  margin-top: var(--regular);
  font-family: Anago;
  font-size: 24px;
  line-height: 30px;
  color: var(--green);
  margin-bottom: var(--small);
`

export const ItemText = styled.p`
  font-family: Anago;
  font-size: 18px;
  line-height: 30px;

  color: #bababa;
`
