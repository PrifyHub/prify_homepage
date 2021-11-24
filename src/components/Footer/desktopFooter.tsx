import styled from 'styled-components'

import Image from 'next/image'
import Link from 'next/link'

import Prify from '/public/svg/home/prifyWhite.svg'

import { LinkedinWithCircle } from '@styled-icons/entypo-social'

import React from 'react'
import { DesktopButton } from 'components/Button'
import useTranslation from 'next-translate/useTranslation'

const Content = styled.section`
  height: 410px;
  background: var(--purple);
`
const SectionWrapper = styled.div`
  width: 90%;
  max-width: 1902px;
  margin: 0 auto;
  padding: var(--large) 0;
`

const HowToProtectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    margin-top: 32px;
  }
`

const FooterTitle = styled.p`
  font-size: 40px;
  font-family: Anago;
  line-height: 48px;
  color: var(--white);
`

const LinkedinWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Linkedin = styled(LinkedinWithCircle)`
  color: var(--white);
`

const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

const Divider = styled.div`
  width: 100%;
  border: 1px solid var(--green);
`

const FooterNavWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled(Image)``

const FooterLinkWrapper = styled.div``

const FooterLink = styled.a`
  margin-left: 40px;
  font-family: Anago;
  font-size: 18px;
  line-height: 32px;
  color: var(--white);
  text-decoration: none;
`

const Rights = styled.p`
  font-family: Anago;
  font-size: 16px;
  line-height: 10px;
  color: var(--white);
`

const FooterButton = styled.button`
  min-width: 229px;
  min-height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Anago;
  font-size: var(--small);
  font-weight: bold;
  background: var(--white);
  color: var(--purple);

  border: none;
  font-weight: bold;

  margin-top: 36px;
`

const DesktopFooter = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <Content>
        <SectionWrapper>
          <HowToProtectWrapper>
            <FooterTitle>{t('home.descubra')}</FooterTitle>
            <Link href="/contact" passHref={true}>
              <FooterButton>{t('home.demo1')}</FooterButton>
            </Link>
          </HowToProtectWrapper>
          <LinkedinWrapper>
            <Linkedin size={40} />
          </LinkedinWrapper>
          <DividerContainer>
            <Divider />
          </DividerContainer>

          <FooterNavWrapper>
            <Logo src={Prify} />
            <FooterLinkWrapper>
              <Link href="/" passHref={true}>
                <FooterLink>{t('navbar.home')}</FooterLink>
              </Link>
              <Link href="/about" passHref={true}>
                <FooterLink>{t('navbar.sobre')}</FooterLink>
              </Link>
              <Link href="/services" passHref={true}>
                <FooterLink>{t('navbar.servico')}</FooterLink>
              </Link>
              <Link href="/privacy" passHref={true}>
                <FooterLink>{t('navbar.privacidade')}</FooterLink>
              </Link>
              <Link href="/contact" passHref={true}>
                <FooterLink>{t('navbar.contato')}</FooterLink>
              </Link>
            </FooterLinkWrapper>
            <Rights>© Prify. All rights reserved</Rights>
          </FooterNavWrapper>
        </SectionWrapper>
      </Content>
    </>
  )
}

export default DesktopFooter
