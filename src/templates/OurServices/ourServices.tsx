import * as S from './styles'

import React from 'react'
import { MobileButton, SmallButton } from 'components/Button'

import DesktopNavbar from 'components/Navbar/desktopNavbar'
import Navbar from 'components/Navbar'
import DesktopFooter from 'components/Footer/desktopFooter'
import Footer from 'components/Footer'

import HIWFamily from '/public/svg/services/howitworksfamily.svg'
import HIWDoctor from '/public/svg/services/howitworksmarin.svg'
import HIWPuzzle from '/public/svg/services/puzzlepiecesjm.svg'
import HIWLgpd from '/public/svg/services/lgpd.svg'
import HIWinfog from '/public/svg/services/infografic.svg'

import HIWHealth from '/public/svg/privForms/health.svg'
import HIWInstitucional from '/public/svg/privForms/institucional.svg'
import HIWAcademic from '/public/svg/privForms/academic.svg'

import PrifyPw from '/public/svg/home/prifyWhite.svg'
import PrifyWh from '/public/svg/home/prifyhubWhite.svg'

import useMedia from 'hooks/useMedia'

import useTranslation from 'next-translate/useTranslation'
import useInput from 'hooks/useInput'

const ServicesHeroTemplate = () => {
  const { width } = useMedia()
  const { t } = useTranslation('common')
  const name = useInput('')
  const companie = useInput('')
  const email = useInput('')
  const demmand = useInput('')

  const canSubmit = () => {
    let verifyCanSubmit = true
    const isEmailValid = validateEmail(email.value)

    if (!name.value) {
      verifyCanSubmit = false
      name.setRequiredValue(true)
    }

    if (!email.value) {
      verifyCanSubmit = false
      email.setRequiredValue(true)
    } else {
      if (isEmailValid) {
        verifyCanSubmit = false
        email.setInvalidField(true)
      }
    }

    if (!companie.value) {
      verifyCanSubmit = false
      companie.setRequiredValue(true)
    }

    if (!demmand.value) {
      verifyCanSubmit = false
      demmand.setRequiredValue(true)
    }

    return verifyCanSubmit
  }

  const validateEmail = (value: string) => {
    let error = false
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = true
    }
    return error
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const canSubmitForm = canSubmit()

    if (canSubmitForm) {
      try {
        const formData: any = {}
        Array.from(e.currentTarget.elements).forEach((field: any) => {
          if (!field.name) return
          formData[field.name] = field.value
        })
        await fetch('/api/mail', {
          method: 'post',
          body: JSON.stringify(formData)
        })
        clearForm()
      } catch (e) {
        clearForm()
      }
    }
  }

  const clearForm = () => {
    name.setValue('')
    companie.setValue('')
    email.setValue('')
    demmand.setValue('')
  }

  const borderColor = '#bababa'

  return (
    <>
      {width <= 1200 && <Navbar />}
      <S.HeroContentSection>
        {width >= 1200 && <DesktopNavbar />}
        <S.HeroTextWrapper>
          <S.HeroWrapper>
            <S.HeroTitle>{t('service.titulo')}</S.HeroTitle>
            <S.HeroText>{t('service.descricao')}</S.HeroText>
          </S.HeroWrapper>
        </S.HeroTextWrapper>
      </S.HeroContentSection>

      <S.PrinciplesPrifySection>
        <S.PrinciplesSectionTitle>{t('service.alem')}</S.PrinciplesSectionTitle>

        <S.PrinciplesList>
          <S.PrinciplesListItem>
            <S.Principle>{t('service.list-item')}</S.Principle>
          </S.PrinciplesListItem>
          <S.PrinciplesListItem>
            <S.Principle>{t('service.list-item1')}</S.Principle>
          </S.PrinciplesListItem>
          <S.PrinciplesListItem>
            <S.Principle>{t('service.list-item2')}</S.Principle>
          </S.PrinciplesListItem>
          <S.PrinciplesListItem>
            <S.Principle>{t('service.list-item3')}</S.Principle>
          </S.PrinciplesListItem>
        </S.PrinciplesList>
      </S.PrinciplesPrifySection>

      <S.HowItWorksSection>
        <S.HowItWorksWrapper>
          <S.HowItWorksTitle>{t('service.priv-howit')}</S.HowItWorksTitle>

          <S.HowItWorksText0>
            {t('service.priv-item0')}
            <S.HowItWorksTextAtom0>
              {t('service.priv-item1')}
            </S.HowItWorksTextAtom0>
            {t('service.priv-item2')}
          </S.HowItWorksText0>

          <S.HowItWorksText0>{t('service.priv-item3')}</S.HowItWorksText0>

          <S.HowItWorksPerson0>
            <S.HowItWorksImage0 src={HIWFamily}></S.HowItWorksImage0>
            <S.HowItWorksPTextWrapper>
              <S.HowItWorksSubtitle0>
                {t('service.priv-julio')}
              </S.HowItWorksSubtitle0>
              <S.HowItWorksText0>
                {t('service.priv-jul-item')}
              </S.HowItWorksText0>
            </S.HowItWorksPTextWrapper>
          </S.HowItWorksPerson0>

          <S.HowItWorksPerson1>
            <S.HowItWorksPTextWrapper1>
              <S.HowItWorksSubtitle1>
                {t('service.priv-mariana')}
              </S.HowItWorksSubtitle1>
              <S.HowItWorksText1>
                {t('service.priv-mar-item0')}
                <S.HowItWorksTextAtom1>
                  {t('service.priv-mar-itemJs')}
                </S.HowItWorksTextAtom1>
                {t('service.priv-mar-item1')}
              </S.HowItWorksText1>
              <S.HowItWorksText1>
                {t('service.priv-mar-item2')}
                <S.HowItWorksTextAtom1>
                  {t('service.priv-mar-itemJ')}
                </S.HowItWorksTextAtom1>
                {t('service.priv-mar-item3')}
              </S.HowItWorksText1>
            </S.HowItWorksPTextWrapper1>
            <S.HowItWorksImage1 src={HIWDoctor}></S.HowItWorksImage1>
          </S.HowItWorksPerson1>
        </S.HowItWorksWrapper>
      </S.HowItWorksSection>

      <S.WorkTogetherSection>
        <S.WorkTogetherWrapper>
          <S.WorkTogetherLeftTextWrapper>
            <S.WorkTogetherTitle>{t('service.priv-julio')}</S.WorkTogetherTitle>
            {t('service.worktg-item0')}
            <S.WorkTogetherTextAtom>
              {t('service.worktg-item1')}
            </S.WorkTogetherTextAtom>
            {t('service.worktg-item2')}
          </S.WorkTogetherLeftTextWrapper>
          <S.WorkTogetherImage1 src={HIWPuzzle}></S.WorkTogetherImage1>
          <S.WorkTogetherRightWrapper>
            <S.WorkTogetherTitle>
              <S.WorkTogetherTextAtom>
                {t('service.priv-mariana')}
              </S.WorkTogetherTextAtom>
            </S.WorkTogetherTitle>
            {t('service.worktg-item3')}
            <S.WorkTogetherTextAtom>
              {t('service.worktg-item4')}
            </S.WorkTogetherTextAtom>
            {t('service.worktg-item5')}
          </S.WorkTogetherRightWrapper>
        </S.WorkTogetherWrapper>
      </S.WorkTogetherSection>

      <S.AboutLGPDSection>
        <S.AboutLGPDWrapper>
          <S.AboutLGPDTextW1>
            <S.AboutLGPDTitle>
              <S.AboutLGPDTextAtom1>
                {t('service.lgpda-item0')}
              </S.AboutLGPDTextAtom1>
            </S.AboutLGPDTitle>
            <S.AboutLGPDText>
              {t('service.lgpda-item1')}
              <S.AboutLGPDTextAtom2>
                {t('service.lgpda-item2')}
              </S.AboutLGPDTextAtom2>
              {t('service.lgpda-item3')}
            </S.AboutLGPDText>
          </S.AboutLGPDTextW1>

          <S.AboutLGPDImgWrapper1>
            <S.AboutLGPDImage1 src={HIWLgpd}></S.AboutLGPDImage1>
          </S.AboutLGPDImgWrapper1>
        </S.AboutLGPDWrapper>

        <S.AboutLGPDWrapper>
          <S.AboutLGPDTextW2>
            <S.AboutLGPDTitle>
              <S.AboutLGPDTextAtom2>
                {t('service.lgpdb-item0')}
              </S.AboutLGPDTextAtom2>
            </S.AboutLGPDTitle>
            <S.AboutLGPDText>
              {t('service.lgpdb-item1')}
              <S.AboutLGPDTextAtom1>
                {t('service.lgpdb-item2')}
              </S.AboutLGPDTextAtom1>
              {t('service.lgpdb-item3')}
              <S.AboutLGPDTextAtom1>
                {t('service.lgpdb-item4')}
              </S.AboutLGPDTextAtom1>
              {t('service.lgpdb-item5')}
              <S.AboutLGPDTextAtom2>
                {t('service.lgpda-item2')}
              </S.AboutLGPDTextAtom2>
            </S.AboutLGPDText>
          </S.AboutLGPDTextW2>
        </S.AboutLGPDWrapper>

        <S.AboutLGPDWrapper>
          <S.AboutLGPDImgWrapper2>
            <S.AboutLGPDImage1 src={HIWinfog}></S.AboutLGPDImage1>

            <S.AboutLGPDSubtextW>
              <S.AboutLGPDText>
                <S.AboutLGPDSubtext>
                  {t('service.lgpdc-item0')}
                </S.AboutLGPDSubtext>
              </S.AboutLGPDText>
              <S.AboutLGPDText>
                <S.AboutLGPDSubtext>
                  {t('service.lgpdc-item1')}
                </S.AboutLGPDSubtext>
              </S.AboutLGPDText>
              <S.AboutLGPDLogoW>
                <S.Logo src={PrifyWh}></S.Logo>
              </S.AboutLGPDLogoW>
            </S.AboutLGPDSubtextW>
          </S.AboutLGPDImgWrapper2>
        </S.AboutLGPDWrapper>
      </S.AboutLGPDSection>

      <S.HowToAnomSection>
        <S.HowToAnomWrappBox>
          <S.HowToAnomTextWrapper>
            <S.HowToAnomTittle>{t('service.toanom-item0')}</S.HowToAnomTittle>
          </S.HowToAnomTextWrapper>
          <S.HowToAnomTextWrapper>
            <S.HowToAnomText>{t('service.toanom-item1')}</S.HowToAnomText>
          </S.HowToAnomTextWrapper>
          <S.HowToAnomTextWrapper>
            <S.HowToAnomText>{t('service.toanom-item2')}</S.HowToAnomText>
          </S.HowToAnomTextWrapper>
        </S.HowToAnomWrappBox>
      </S.HowToAnomSection>

      <S.PrivFormsApplicationWrapper>
        <S.ApplicationSectionTitle>
          {t('service.aplicacao')}
        </S.ApplicationSectionTitle>
        <S.ApplicationListWrapper>
          <S.ApplicationItem>
            <S.ItemImage src={HIWInstitucional} />
            <S.ApplicationItemTitle>
              {t('service.titulo-item')}
            </S.ApplicationItemTitle>
            <S.ApplicationItemDescription>
              {t('service.descricao-item')}
            </S.ApplicationItemDescription>
          </S.ApplicationItem>
          <S.ApplicationItem>
            <S.ItemImage src={HIWHealth} />
            <S.ApplicationItemTitle>
              {t('service.titulo-item1')}
            </S.ApplicationItemTitle>
            <S.ApplicationItemDescription>
              {t('service.descricao-item1')}
            </S.ApplicationItemDescription>
          </S.ApplicationItem>
          <S.ApplicationItem>
            <S.ItemImage src={HIWAcademic} />
            <S.ApplicationItemTitle>
              {t('service.titulo-item2')}
            </S.ApplicationItemTitle>
            <S.ApplicationItemDescription>
              {t('service.descricao-item2')}
            </S.ApplicationItemDescription>
          </S.ApplicationItem>
        </S.ApplicationListWrapper>
      </S.PrivFormsApplicationWrapper>

      {width >= 1200 ? (
        <S.DemandContactWrapper>
          <S.ContactSectionWrapper>
            <S.ContactWrapperText>
              <S.DemandTitle>{t('service.demanda1')}</S.DemandTitle>
              <S.DemandDescription>
                {t('service.demanda-descricao0')}
                <S.DemandDescriptionAtom>
                  {t('service.demanda-descricao1')}
                </S.DemandDescriptionAtom>
                {t('service.demanda-descricao2')}
              </S.DemandDescription>
            </S.ContactWrapperText>
            <S.FormsWrapper>
              <S.Form onSubmit={handleSubmit}>
                <S.FormInput
                  placeholder={t('nome')}
                  name="name"
                  style={{ border: `1px solid` + borderColor }}
                  value={name.value}
                  onChange={name.onChange}
                />
                {name.requiredValue && (
                  <p className="requiredMessage">{t('contact.obrigatorio')}</p>
                )}
                <S.FormInput
                  placeholder={t('empresa')}
                  name="companie"
                  style={{ border: `1px solid` + borderColor }}
                  value={companie.value}
                  onChange={companie.onChange}
                />
                {companie.requiredValue && (
                  <p className="requiredMessage">{t('contact.obrigatorio')}</p>
                )}
                <S.FormInput
                  placeholder={t('email')}
                  name="email"
                  style={{ border: `1px solid` + borderColor }}
                  value={email.value}
                  onChange={email.onChange}
                />
                {(email.requiredValue && (
                  <p className="requiredMessage">{t('contact.obrigatorio')}</p>
                )) ||
                  (!email.requiredValue && email.invalidField && (
                    <p className="requiredMessage">{t('contact.invalido')}</p>
                  ))}
                <S.FormTextArea
                  placeholder={t('demanda')}
                  name="message"
                  style={{ border: `1px solid` + borderColor }}
                  value={demmand.value}
                  onChange={demmand.onChange}
                />
                {demmand.requiredValue && (
                  <p className="requiredMessage">{t('contact.obrigatorio')}</p>
                )}
                <S.ButtonWrapper>
                  <SmallButton>{t('service.enviar')}</SmallButton>
                </S.ButtonWrapper>
              </S.Form>
            </S.FormsWrapper>
          </S.ContactSectionWrapper>
        </S.DemandContactWrapper>
      ) : (
        <S.DemandContactWrapper>
          <S.ContactSectionWrapper>
            <S.ContactWrapperText>
              <S.DemandTitle>{t('service.demanda1')}</S.DemandTitle>
              <S.DemandDescription>
                {t('service.demanda-descricao0')}
                <S.DemandDescriptionAtom>
                  {t('service.demanda-descricao1')}
                </S.DemandDescriptionAtom>
                {t('service.demanda-descricao2')}
              </S.DemandDescription>
            </S.ContactWrapperText>
            <S.FormsWrapper>
              <S.Form>
                <S.FormInput
                  placeholder={t('nome')}
                  style={{ border: `1px solid` + borderColor }}
                  value={name.value}
                  onChange={name.onChange}
                />
                <S.FormInput
                  placeholder={t('empresa')}
                  style={{ border: `1px solid` + borderColor }}
                  value={companie.value}
                  onChange={companie.onChange}
                />
                <S.FormInput
                  placeholder={t('email')}
                  style={{ border: `1px solid` + borderColor }}
                  value={email.value}
                  onChange={email.onChange}
                />
                <S.FormTextArea
                  placeholder={t('demanda')}
                  style={{ border: `1px solid` + borderColor }}
                  value={demmand.value}
                  onChange={demmand.onChange}
                />
              </S.Form>
              <S.ButtonWrapper>
                <MobileButton>{t('service.enviar')}</MobileButton>
              </S.ButtonWrapper>
            </S.FormsWrapper>
          </S.ContactSectionWrapper>
        </S.DemandContactWrapper>
      )}

      {width >= 1200 ? <DesktopFooter /> : <Footer />}
    </>
  )
}

export default ServicesHeroTemplate
