import styled from 'styled-components'

import { LinkedinWithCircle } from '@styled-icons/entypo-social'

import Image from 'next/image'

export const HeroContent = styled.main`
  width: 100%;
  min-width: 360px;
  height: 90vh; // 628px

  display: flex;
  align-items: center;
  // flex-direction: column;
  // jusify-content: center;

  background: url('img/aboutHeroBg.jpg') no-repeat center;
  background-size: cover;

  @media screen and (min-width: 1200px) {
    height: 100vh;
  }
`

export const HeroWrapper = styled.div`
  // max-width: 1920px;
  width: 100%;
  padding: 0 var(--paddingLeft2);
  align-items: initial;
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

export const AboutHeroTitle = styled.p`
  font-family: Anago;
  font-size: clamp(var(--title), 5vw, 64px);
  line-height: 120%;

  color: var(--white);
`

export const AboutUsText = styled.p`
  font-family: Anago;
  font-size: var(--regular);
  line-height: 120%;

  color: var(--white);
`

export const InfoContent = styled.section`
  min-width: 360px;
  min-height: 640px;

  padding: var(--large) var(--paddingLeft);

  background: var(--white);

  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url('img/basicInfoBg.png');
    background-repeat: no-repeat;
    background-position: right bottom;
  }
`

export const TitleWrapper = styled.div`
  max-width: 340px;
  height: 116px;
`

export const BasicInfoTitle = styled.p`
  font-family: Anago;
  font-size: clamp(var(--title), 5vw, var(--large));
  line-height: 120%;

  color: var(--purple);
`

export const InfoList = styled.ul`
  padding: 2vw 36px;

  @media screen and (min-width: 1200px) {
    padding: 30px 24px 0;
  }
`

export const InfoListItem = styled.li`
  color: var(--grey);
`

export const InfoListText = styled.p`
  font-family: Anago;
  font-size: var(--regular);
  line-height: 32px;
  font-weight: 400;

  color: var(--grey);
`

export const CitationContent = styled.section`
  min-width: 360px;
  min-height: 640px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url('img/hands.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const CitationWrapper = styled.div`
  max-width: 750px;

  text-align: center;
`

export const Citation = styled.p`
  padding: 0 52px;

  font-family: Anago;
  font-size: clamp(var(--regular), 5vw, var(--medium));
  line-height: 32px;

  color: var(--white);
`

export const AuthorWrapper = styled.div`
  margin-top: var(--regular);
  padding: 0 var(--medium);
`

export const Author = styled.p`
  font-family: Anago;
  font-weight: bold;
  font-size: var(--regular);
  line-height: 32px;

  color: var(--white);
`

export const AuthorJob = styled.p`
  font-family: Anago;
  font-weight: bold;
  font-size: var(--regular);
  line-height: 32px;

  color: var(--white);
`

export const TeamContent = styled.section`
  min-width: 360px;
  min-height: 1590px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: var(--large) 0;
`

export const TeamSectionTitle = styled.p`
  font-family: Anago;
  font-weight: bold;
  font-size: clamp(var(--title), 5vw, var(--large));
  line-height: 120%;

  color: var(--purple);

  @media screen and (min-width: 1200px) {
    margin-top: var(--large);
  }
`

export const TeamListWrapper = styled.div`
  padding: 0 var(--medium);
  text-align: center;

  @media screen and (min-width: 1200px) {
    width: 90%;
    max-width: 1920px;
    margin-top: var(--large);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
`

export const ListItem = styled.div`
  max-width: 445px;

  display: flex;
  align-items: center;
  flex-direction: column;
  margin: var(--large) 0;
`

export const CollaboratorImage = styled(Image)`
  max-width: 200px;
  max-height: 200px;

  filter: grayscale(100%);
`

export const Name = styled.p`
  margin-top: var(--medium);

  font-family: Anago;
  font-size: var(--regular);
  line-height: 30px;

  color: var(--purpleDarker);
`

export const CurriculumWrapper = styled.div`
  margin-top: var(--medium);
`

export const Job = styled.p`
  font-family: Anago;
  font-style: italic;
  font-weight: 800;
  font-size: var(--small);
  line-height: 32px;

  color: var(--grey);
`

export const Curriculum = styled.p`
  font-family: Anago;
  font-size: var(--small);
  line-height: 32px;

  color: var(--grey);
`

export const LinkedinWrapper = styled.a`
  text-transform: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  margin: var(--medium) 0;

  cursor: pointer;
`

export const Linkedin = styled(LinkedinWithCircle)`
  color: var(--green);
  border-radius: 50%;
`

export const Lattes = styled.a`
  font: 18px Anago italic normal;
  line-height: 32px;

  /* text-align: center; */
  text-decoration-line: underline;

  color: var(--grey);
`
