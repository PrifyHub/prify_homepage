import React from 'react'

import styled from 'styled-components'
import Link from 'next/link'

import Forms from 'components/Forms'
import Navbar from 'components/Navbar'
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp'
import { MobileButton, SmallButton } from 'components/Button'
import Footer from 'components/Footer'
import useMedia from 'hooks/useMedia'
import DesktopFooter from 'components/Footer/desktopFooter'
import DesktopNavbar from 'components/Navbar/desktopNavbar'

import useTranslation from 'next-translate/useTranslation'
import useInput from 'hooks/useInput'

const Content = styled.section`
  min-width: 360px;
  min-height: 90vh; // 628px

  background: url('img/contactMobileBg.png') no-repeat center;
  background-size: cover;

  @media screen and (min-width: 1000px) {
    height: 100vh;
    min-height: 800px;
    display: flex;
    justify-content: space-around;
    background: url('img/contactBg.png') no-repeat center;
    background-size: cover;
  }
`

const ContactWrapper = styled.div`
  padding: var(--paddingTop) var(--paddingLeft);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 1000px) {
    margin-top: 120px;
  }
`

const Title = styled.p`
  font-size: clamp(var(--title), 5vw, 64px);
  font-family: Anago;
  line-height: 120%;
  color: var(--white);

  @media screen and (min-width: 1200px) {
    margin-bottom: 24px;
  }
`

const ContactType = styled.p`
  font-size: 18px;
  font-family: Anago;
  line-height: 32px;
  color: var(--green);
`

const WhatsappButton = styled.button`
  width: 312px;
  height: 39px;
  margin-top: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: capitalize;
  font-family: Anago;
  font-size: 16px;
  font-weight: bold;
  line-height: 120%;

  background: none;
  border: 1px solid var(--green);
  color: var(--green);

  @media screen and (min-width: 1200px) {
    width: 273px;
    height: 40px;
    margin-top: var(--medium);
    align-self: flex-start;
  }
`

const WhatsappIcon = styled(Whatsapp)`
  margin-left: 10px;
  color: var(--green);
`

const FormsWrapper = styled.div`
  padding: var(--paddingTop) var(--paddingLeft);

  textarea {
    height: 149px;
  }

  button {
    margin-top: 24px;
  }

  @media screen and (min-width: 1200px) {
    button {
      max-width: 75px;
      max-height: 48px;
    }
  }

  @media screen and (min-width: 1000px) {
    margin-top: 120px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input + input {
    margin-top: var(--small);
  }

  textarea {
    margin-top: var(--small);
  }

  .requiredMessage {
    color: red;
    font-size: 16px;
  }
`

const FormInput = styled.input`
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

const FormTextArea = styled.textarea`
  font-size: inherit;
  font-weight: inherit;
  text-decoration: none;
  font-family: inherit;

  outline: none;
  resize: none;
  padding: 10px;
  min-width: 312px;
  min-height: 96px;
  max-width: 466px;

  outline: none;
  color: #000000;
  background: var(--white);
  font-size: 18px;

  ::placeholder {
    opacity: 0.8;
  }

  @media only screen and (min-width: 1200px) {
    min-width: 466px;
    min-height: 149px;
  }
`

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
      {width >= 1200 ? <DesktopNavbar /> : <Navbar />}
      <Content>
        <ContactWrapper>
          <Title>{t('contact.titulo')}</Title>
          <ContactType>Email: contato@prify.com</ContactType>
          <ContactType>{t('home.telefone')}: (85) 3366 9235</ContactType>
          <Link href="/" passHref={true}>
            <WhatsappButton>
              {t('home.whatsapp')} <WhatsappIcon size={16} />
            </WhatsappButton>
          </Link>
        </ContactWrapper>
        <FormsWrapper>
          <Form onSubmit={handleSubmit}>
            <FormInput
              placeholder={t('nome')}
              name="name"
              style={{ border: `1px solid` + borderColor }}
              value={name.value}
              onChange={name.onChange}
            />
            {name.requiredValue && (
              <p className="requiredMessage">{t('contact.obrigatorio')}</p>
            )}
            <FormInput
              placeholder={t('empresa')}
              name="companie"
              style={{ border: `1px solid` + borderColor }}
              value={companie.value}
              onChange={companie.onChange}
            />
            {companie.requiredValue && (
              <p className="requiredMessage">{t('contact.obrigatorio')}</p>
            )}
            <FormInput
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
            <FormTextArea
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
          </Form>
        </FormsWrapper>
      </Content>
      {width >= 1200 ? <DesktopFooter /> : <Footer />}
    </>
  )
}

export default ContactTemplate
