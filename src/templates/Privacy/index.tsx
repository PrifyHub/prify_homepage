import React from 'react'
import Navbar from 'components/Navbar'

import * as S from './styles'

import PrivacyImage from '/public/svg/privacyImage.svg'

import GlassIcon from '/public/svg/glassIcon.svg'
import Mecanism from '/public/svg/mecanism.svg'
import Hourglass from '/public/svg/hourglass.svg'

import LGPDImage from '/public/svg/lgpd.svg'

import Hospital from '/public/svg/hospitalbed.svg'
import MiniForm from '/public/svg/miniform.svg'

import useMedia from 'hooks/useMedia'

import Footer from 'components/Footer'
import DesktopFooter from 'components/Footer/desktopFooter'
import DesktopNavbar from 'components/Navbar/desktopNavbar'
import useTranslation from 'next-translate/useTranslation'
// import DesktopFooter from 'components/Footer/desktopFooter'

const PrivacyTemplate = () => {
  const { width } = useMedia()
  const { t } = useTranslation('common')

  return (
    <>
      {width >= 1280 ? <DesktopNavbar /> : <Navbar />}
      <S.HeroContent>
        <S.TextWrapper>
          <S.HeroTitle>{t('privacy.titulo')}</S.HeroTitle>
          <S.HeroText>{t('privacy.descricao')} </S.HeroText>
        </S.TextWrapper>
      </S.HeroContent>
      <S.ExplanationWrapper>
        <S.ExplanationTextWrapper>
          <S.Explanation>{t('privacy.explicacao')}</S.Explanation>
        </S.ExplanationTextWrapper>
        <S.ExplanationImageWrapper>
          <S.ExplanationImage src={PrivacyImage} />
        </S.ExplanationImageWrapper>
      </S.ExplanationWrapper>
      <S.PrivacyInfoWrapper>
        <S.InfoTextWrapper>
          <S.InfoText>{t('privacy.perguntas-titulo')}</S.InfoText>
        </S.InfoTextWrapper>
        <S.ItemsWrapper>
          <S.InfoItem>
            <S.InfoIcon src={GlassIcon} />
            <S.InfoItemText>{t('privacy.list-item')}</S.InfoItemText>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoIcon src={Hourglass} />
            <S.InfoItemText>{t('privacy.list-item1')} </S.InfoItemText>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoIcon src={Mecanism} />
            <S.InfoItemText>{t('privacy.list-item2')} </S.InfoItemText>
          </S.InfoItem>
        </S.ItemsWrapper>
      </S.PrivacyInfoWrapper>
      <S.LGPDContent>
        <S.LGPDTextWrapper>
          <S.LGPDTitle>{t('privacy.lgpd-titulo')}</S.LGPDTitle>
          <S.LGPDescription>{t('privacy.lgpd-descricao')}</S.LGPDescription>
        </S.LGPDTextWrapper>
        <S.LGPDImageWrapper>
          <S.LGPDImage src={LGPDImage} />
        </S.LGPDImageWrapper>
      </S.LGPDContent>

      {width > 768 ? (
        <S.AnonymityDesktopContent>
          <S.AnonymityTitle>
            {t('privacy.anonimizacao-titulo')}
          </S.AnonymityTitle>
          <S.AnonymityDescription>
            {t('privacy.anonimizacao-descricao')}
          </S.AnonymityDescription>
        </S.AnonymityDesktopContent>
      ) : (
        <S.AnonymityMobileContent>
          <S.AnonymityTitle>
            {t('privacy.anonimizacao-titulo')}
          </S.AnonymityTitle>
          <S.AnonymityDescription>
            {t('privacy.anonimizacao-descricao')}
          </S.AnonymityDescription>
        </S.AnonymityMobileContent>
      )}
      <S.ProblemsWrapper>
        <S.ProblemsSectionWrapper>
          <S.ProblemsTitleWrapper>
            <S.ProblemsTitle>{t('privacy.problemas-titulo')}</S.ProblemsTitle>
          </S.ProblemsTitleWrapper>
          <S.ProblemsExamples>
            <S.ProblemsItem>
              <S.ProblemsItemImage src={MiniForm} />
              <S.ItemSubtitle>
                {t('privacy.problemas-item-titulo')}
              </S.ItemSubtitle>
              <S.ItemText>{t('privacy.problemas-descricao')}</S.ItemText>
            </S.ProblemsItem>
            <S.ProblemsItem>
              <S.ProblemsItemImage src={Hospital} />
              <S.ItemSubtitle>
                {t('privacy.problemas-item-titulo1')}
              </S.ItemSubtitle>
              <S.ItemText>{t('privacy.problemas-descricao1')}</S.ItemText>
            </S.ProblemsItem>
          </S.ProblemsExamples>
        </S.ProblemsSectionWrapper>
      </S.ProblemsWrapper>
      {width >= 1200 ? <DesktopFooter /> : <Footer />}
    </>
  )
}

export default PrivacyTemplate
