import React from 'react'

import * as S from './styles'

// import styled from 'styled-components'
import Link from 'next/link'

// import Forms from 'components/Forms'
import Navbar from 'components/Navbar'
import { MobileButton, SmallButton } from 'components/Button'
import Footer from 'components/Footer'
import useMedia from 'hooks/useMedia'
import DesktopFooter from 'components/Footer/desktopFooter'
import DesktopNavbar from 'components/Navbar/desktopNavbar'

import useTranslation from 'next-translate/useTranslation'
import useInput from 'hooks/useInput'

const ContactTemplate = () => {
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

  const borderColor = '#5C00FF'

  return (
    <>
      {width <= 1200 && <Navbar />}
      <S.HeroContent>
        {width >= 1200 && <DesktopNavbar />}
        <S.ContactWrapper>
          <S.Title>{t('contact.titulo')}</S.Title>
          <S.ContactType>Email: contato@prify.com</S.ContactType>
          <S.ContactType>{t('home.telefone')}: (85) 3366 9235</S.ContactType>
          <Link href="/" passHref={true}>
            <S.WhatsappButton>
              {t('home.whatsapp')} <S.WhatsappIcon size={16} />
            </S.WhatsappButton>
          </Link>
        </S.ContactWrapper>
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
            {width >= 1000 ? (
              <SmallButton type="submit">{t('service.enviar')}</SmallButton>
            ) : (
              <MobileButton type="submit">{t('service.enviar')}</MobileButton>
            )}
          </S.Form>
        </S.FormsWrapper>
      </S.HeroContent>

      {width >= 1200 ? <DesktopFooter /> : <Footer />}
    </>
  )
}

export default ContactTemplate
