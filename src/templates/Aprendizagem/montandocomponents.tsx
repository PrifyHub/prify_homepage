import React from 'react'

// import * as S from '../Home/styles'
import * as S from './estilo'

import LinkTo from 'components/LinkTo'
import useTranslation from 'next-translate/useTranslation'

import Podium from '/public/svg/home/podium.svg'

const LearningTemplate = () => {

  const { t } = useTranslation('common')

  return (
    <div>
      <S.HelloMundo>
        <h1>{t('demanda')}</h1>
      </S.HelloMundo>
      <S.HeroWrapper>
        <S.HeroTitle>
          {t('home.hero')}
          <span>{t('home.hero2')}</span>
        </S.HeroTitle>
        <LinkTo link="/services" text={t('home.servico')} color="#F7A" />
        <S.ItemImage src={Podium} />
      </S.HeroWrapper>
    </div>
  )
}

export default LearningTemplate
