import React from 'react'

import * as S from './styles'

import LinkTo from 'components/LinkTo'
import { DesktopButton, MobileButton } from 'components/Button'

import IntroIcon from '/public/svg/home/introIcon.svg'
import useMedia from 'hooks/useMedia'
import Navbar from 'components/Navbar'

import Pioneer from '/public/svg/home/Intro/pioner.svg'
import Vip from '/public/svg/home/Intro/vip.svg'
import Tecno from '/public/svg/home/Intro/tec.svg'

import PrivForms from '/public/svg/privForms/PrivForms.svg'
import Footer from 'components/Footer'

// import DesktopNavbar from 'components/Navbar/desktopNavbar'
import DesktopFooter from 'components/Footer/desktopFooter'
import DesktopNavbar from 'components/Navbar/desktopNavbar'
import useTranslation from 'next-translate/useTranslation'

import Podium from '/public/svg/home/podium.svg'
import Paper from '/public/svg/home/paper.svg'
import Handshake from '/public/svg/home/handshake.svg'
import useInput from 'hooks/useInput'

const HomeTemplate = () => {
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
      <S.HeroContent>
        {width >= 1200 && <DesktopNavbar />}
        <S.HeroWrapper>
          <S.HeroTitle>
            {t('home.hero')}
            <span>{t('home.hero2')}</span>
          </S.HeroTitle>
          <LinkTo link="/services" text={t('home.servico')} color="#FFFFFF" />
        </S.HeroWrapper>
        <S.ArrowDown />
      </S.HeroContent>
      <S.RecognitionWrapper>
        <S.RecognitionItem>
          <S.ItemImage src={Podium} />
          <S.ItemText>{t('home.reconhecimento')}</S.ItemText>
        </S.RecognitionItem>
        <S.RecognitionItem>
          <S.ItemImage src={Paper} />
          <S.ItemText>{t('home.reconhecimento1')}</S.ItemText>
        </S.RecognitionItem>
        <S.RecognitionItem>
          <S.ItemImage src={Handshake} />
          <S.ItemText>{t('home.reconhecimento2')}</S.ItemText>
        </S.RecognitionItem>
      </S.RecognitionWrapper>
      <S.IntroContent>
        <S.IntroSectionWrapper>
          <S.TextContainer>
            {width >= 1200 ? (
              <S.IntroTitle>
                {t('home.oi')}
                <br /> {t('home.somos')}
              </S.IntroTitle>
            ) : (
              <S.IntroTitle>{t('home.oi2')}</S.IntroTitle>
            )}
            <S.Description>{t('home.descricao')}</S.Description>
            <LinkTo link="/about" text={t('home.mais')} color="#2F1160" />
          </S.TextContainer>
          <S.ImageWrapper>
            <S.IntroImage
              src={IntroIcon}
              alt="imagem contendo uma pessoa de branco com calça marrom,
         segurando um escudo com um cadeado na cor branca, verde e roxa.
         No fundo da imagem existem um notebook,
         um monitor e um tablet na cor roxa."
            />
          </S.ImageWrapper>
        </S.IntroSectionWrapper>
      </S.IntroContent>
      <S.AboutUsContent>
        <S.SectionTitle>{t('home.sobreTitulo')}</S.SectionTitle>
        <S.ItemsWrapper>
          <S.Item>
            <S.ItemImage src={Pioneer} />
            <S.ItemTitle>{t('home.listItem1')}</S.ItemTitle>
            <S.ItemDescription>{t('home.descricao1')}</S.ItemDescription>
          </S.Item>
          <S.Item>
            <S.ItemImage src={Vip} />
            <S.ItemTitle>{t('home.listItem2')}</S.ItemTitle>
            <S.ItemDescription>{t('home.descricao2')}</S.ItemDescription>
          </S.Item>
          <S.Item>
            <S.ItemImage src={Tecno} />
            <S.ItemTitle>{t('home.listItem3')}</S.ItemTitle>
            <S.ItemDescription>{t('home.descricao3')}</S.ItemDescription>
          </S.Item>
        </S.ItemsWrapper>
      </S.AboutUsContent>
      {width >= 1200 ? (
        <S.PrivFormsContent>
          <S.PrivFormsTextWrapper>
            <S.PrivSectionTitle>
              {t('home.privform1')}
              <br /> {t('home.privform2')}
            </S.PrivSectionTitle>
            <S.PrivFormsDescription>
              {t('home.privDescricao')}
            </S.PrivFormsDescription>
            <S.ButtonWrapper>
              <MobileButton>{t('home.privButton')}</MobileButton>
            </S.ButtonWrapper>
          </S.PrivFormsTextWrapper>
          <S.PrivImageWrapper>
            <S.PrivFormsImage src={PrivForms} />
          </S.PrivImageWrapper>
        </S.PrivFormsContent>
      ) : (
        <S.PrivFormsContent>
          <S.PrivFormsTextWrapper>
            <S.PrivSectionTitle>{t('home.privform')}</S.PrivSectionTitle>
            <S.PrivFormsDescription>
              {t('home.privDescricao')}
            </S.PrivFormsDescription>
          </S.PrivFormsTextWrapper>
          <S.PrivImageWrapper>
            <S.PrivFormsImage src={PrivForms} />
          </S.PrivImageWrapper>
          <S.ButtonWrapper>
            <MobileButton>{t('home.privButton')}</MobileButton>
          </S.ButtonWrapper>
        </S.PrivFormsContent>
      )}
      <S.PrivacyContent>
        <S.PrivacyTextWrapper>
          <S.PrivacySectionTitle>
            {t('home.importancia')} <span>{t('home.porque')}</span>
          </S.PrivacySectionTitle>
          <LinkTo link="/privacy" text={t('home.mais')} color="#68E2AA" />
        </S.PrivacyTextWrapper>
      </S.PrivacyContent>
      <S.ContactUsContent>
        <S.ContactSectionWrapper>
          <S.ContactWrapper>
            <S.ContactTextWrapper>
              <S.ContactTitle>{t('home.fale')}</S.ContactTitle>
              <S.Description>{t('home.precisa')}</S.Description>
            </S.ContactTextWrapper>
            <S.SocialWrapper>
              <S.Contacts>
                <b>Email:</b> contato@prify.com
              </S.Contacts>
              <S.Contacts>
                <b>{t('home.telefone')}:</b> (85) 3366 9235
              </S.Contacts>
              <S.WhatsappButton>
                {t('home.whatsapp')}
                <S.WhatsappIcon size={16} />
              </S.WhatsappButton>
            </S.SocialWrapper>
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
              <S.BtnWrapper>
                {width >= 1200 ? (
                  <DesktopButton>{t('home.demo1')}</DesktopButton>
                ) : (
                  <MobileButton>{t('home.demo1')}</MobileButton>
                )}
              </S.BtnWrapper>
            </S.Form>
          </S.FormsWrapper>
        </S.ContactSectionWrapper>
      </S.ContactUsContent>
      {width >= 1200 ? <DesktopFooter /> : <Footer />}
    </>
  )
}

export default HomeTemplate
