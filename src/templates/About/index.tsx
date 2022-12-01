import React from 'react'

import * as S from './styles'

import Felipe from '/public/img/team/felipe.png'
import Javam from '/public/img/team/javam.png'
import Iago from '/public/img/team/iago.png'
import Victor from '/public/img/team/victor.png'

import Link from 'next/link'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import DesktopFooter from 'components/Footer/desktopFooter'
import useMedia from 'hooks/useMedia'
import DesktopNavbar from 'components/Navbar/desktopNavbar'
import useTranslation from 'next-translate/useTranslation'

const AboutTemplate = () => {
  const { width } = useMedia()
  const { t } = useTranslation('common')
  return (
    <>
      {width <= 1200 && <Navbar />}
      <S.HeroContent>
        {width >= 1200 && <DesktopNavbar />}
        <S.HeroWrapper>
          <S.TextWrapper>
            <S.AboutHeroTitle>{t('about.titulo')}</S.AboutHeroTitle>
            <S.AboutUsText>{t('about.descricao')}</S.AboutUsText>
          </S.TextWrapper>
        </S.HeroWrapper>
      </S.HeroContent>

      <S.InfoContent>
        <S.TitleWrapper>
          <S.BasicInfoTitle>{t('about.basic')}</S.BasicInfoTitle>
        </S.TitleWrapper>
        <S.InfoList>
          <S.InfoListItem>
            <S.InfoListText>{t('about.list-item1')}</S.InfoListText>
          </S.InfoListItem>
          <S.InfoListItem>
            <S.InfoListText>{t('about.list-item2')}</S.InfoListText>
          </S.InfoListItem>
          <S.InfoListItem>
            <S.InfoListText>{t('about.list-item3')} </S.InfoListText>
          </S.InfoListItem>
          <S.InfoListItem>
            <S.InfoListText>{t('about.list-item4')}</S.InfoListText>
          </S.InfoListItem>
          <S.InfoListItem>
            <S.InfoListText>{t('about.list-item5')}</S.InfoListText>
          </S.InfoListItem>
          <S.InfoListItem>
            <S.InfoListText>{t('about.list-item6')}</S.InfoListText>
          </S.InfoListItem>
        </S.InfoList>
      </S.InfoContent>
      <S.CitationContent>
        <S.CitationWrapper>
          <S.Citation>{t('about.citacao')}</S.Citation>
          <S.AuthorWrapper>
            <S.Author>David Temkin</S.Author>
            <S.AuthorJob>{t('about.profissao')}</S.AuthorJob>
          </S.AuthorWrapper>
        </S.CitationWrapper>
      </S.CitationContent>
      <S.TeamContent>
        <S.TeamSectionTitle>{t('about.time')}</S.TeamSectionTitle>
        <S.TeamListWrapper>
          <S.ListItem>
            <S.CollaboratorImage src={Felipe} />
            <S.Name>Felipe timbó</S.Name>
            <S.CurriculumWrapper>
              <S.Job>{t('about.cargo')}</S.Job>
              <S.Curriculum>{t('about.curriculo')}</S.Curriculum>
            </S.CurriculumWrapper>
            <Link
              href="https://www.linkedin.com/in/felipe-timb%C3%B3-b275b815/"
              passHref={true}
            >
              <S.LinkedinWrapper target="_blank">
                <S.Linkedin size={40} />
              </S.LinkedinWrapper>
            </Link>
            <Link href="http://lattes.cnpq.br/4819140338774766" passHref={true}>
              <S.Lattes target="_blank">Currículo lattes</S.Lattes>
            </Link>
          </S.ListItem>
          <S.ListItem>
            <S.CollaboratorImage src={Iago} />
            <S.Name>Iago Chaves</S.Name>
            <S.CurriculumWrapper>
              <S.Job>{t('about.cargo1')}</S.Job>
              <S.Curriculum>{t('about.curriculo1')}</S.Curriculum>
            </S.CurriculumWrapper>
            <Link href="https://www.linkedin.com/in/iagocc/" passHref={true}>
              <S.LinkedinWrapper target="_blank">
                <S.Linkedin size={40} />
              </S.LinkedinWrapper>
            </Link>
            <Link href="http://lattes.cnpq.br/5223391736264519" passHref={true}>
              <S.Lattes target="_blank">Currículo lattes</S.Lattes>
            </Link>
          </S.ListItem>
          <S.ListItem>
            <S.CollaboratorImage src={Javam} />
            <S.Name>Prof Dr. Javam Machado</S.Name>
            <S.CurriculumWrapper>
              <S.Job>{t('about.cargo2')}</S.Job>
              <S.Curriculum>{t('about.curriculo2')}</S.Curriculum>
            </S.CurriculumWrapper>
            <Link href="http://lattes.cnpq.br/9884980518986225" passHref={true}>
              <S.Lattes target="_blank">Currículo lattes</S.Lattes>
            </Link>
          </S.ListItem>
          <S.ListItem>
            <S.CollaboratorImage src={Victor} />
            <S.Name>Prof Dr. Victor Farias</S.Name>
            <S.CurriculumWrapper>
              <S.Job>{t('about.cargo3')}</S.Job>
              <S.Curriculum>{t('about.curriculo3')}</S.Curriculum>
            </S.CurriculumWrapper>
            <Link
              href="https://www.linkedin.com/in/victorfarias0/"
              passHref={true}
            >
              <S.LinkedinWrapper target="_blank">
                <S.Linkedin size={40} />
              </S.LinkedinWrapper>
            </Link>
            <Link href="http://lattes.cnpq.br/9895446406302202" passHref={true}>
              <S.Lattes target="_blank">Currículo lattes</S.Lattes>
            </Link>
          </S.ListItem>
        </S.TeamListWrapper>
      </S.TeamContent>
      {width >= 1200 ? <DesktopFooter /> : <Footer />}
    </>
  )
}

export default AboutTemplate
