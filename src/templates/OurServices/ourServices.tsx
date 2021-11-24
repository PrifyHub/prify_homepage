import * as S from './styles'

import React from 'react'
import { MobileButton, SmallButton } from 'components/Button'

import DesktopNavbar from 'components/Navbar/desktopNavbar'
import Navbar from 'components/Navbar'
import DesktopFooter from 'components/Footer/desktopFooter'
import Footer from 'components/Footer'

import Health from '/public/svg/privForms/health.svg'
import Institucional from '/public/svg/privForms/institucional.svg'
import Academic from '/public/svg/privForms/academic.svg'

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
      {width >= 1200 ? <DesktopNavbar /> : <Navbar />}
      <S.HeroContent>
        <S.TextWrapper>
          <S.HeroTitle>{t('service.titulo')}</S.HeroTitle>
          <S.HeroText>{t('service.descricao')}</S.HeroText>
        </S.TextWrapper>
      </S.HeroContent>
      <S.PrinciplesPrifyWrapper>
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
      </S.PrinciplesPrifyWrapper>
      <S.PrivFormsWrapper>
        <S.HowItWorksTitle>
          {t('service.privform')} <br />
          {t('service.como-funciona')}
        </S.HowItWorksTitle>
        <S.HowItWorksList>
          <S.HowItWorksListItem>
            <S.Item>{t('service.priv-item')}</S.Item>
          </S.HowItWorksListItem>
          <S.HowItWorksListItem>
            <S.Item>{t('service.priv-item1')}</S.Item>
          </S.HowItWorksListItem>
          <S.HowItWorksListItem>
            <S.Item>{t('service.priv-item2')}</S.Item>
          </S.HowItWorksListItem>
          <S.HowItWorksListItem>
            <S.Item>{t('service.priv-item3')}</S.Item>
          </S.HowItWorksListItem>
        </S.HowItWorksList>
        <S.HowItWorksBtn>
          <MobileButton>{t('home.demo1')}</MobileButton>
        </S.HowItWorksBtn>
      </S.PrivFormsWrapper>
      <S.PrivFormsApplicationWrapper>
        <S.ApplicationSectionTitle>
          {t('service.aplicacao')}
        </S.ApplicationSectionTitle>
        <S.ApplicationListWrapper>
          <S.ApplicationItem>
            <S.ItemImage src={Institucional} />
            <S.ApplicationItemTitle>
              {t('service.titulo-item')}
            </S.ApplicationItemTitle>
            <S.ApplicationItemDescription>
              {t('service.descricao-item')}
            </S.ApplicationItemDescription>
          </S.ApplicationItem>
          <S.ApplicationItem>
            <S.ItemImage src={Health} />
            <S.ApplicationItemTitle>
              {t('service.titulo-item1')}
            </S.ApplicationItemTitle>
            <S.ApplicationItemDescription>
              {t('service.descricao-item1')}
            </S.ApplicationItemDescription>
          </S.ApplicationItem>
          <S.ApplicationItem>
            <S.ItemImage src={Academic} />
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
                {t('service.demanda-descricao')}
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
                {t('service.demanda-descricao')}
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
