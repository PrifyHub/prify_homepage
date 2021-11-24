import React, { useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import logo from '/public/svg/home/prify.svg'

import styled from 'styled-components'
import { useRouter } from 'next/dist/client/router'
import useTranslation from 'next-translate/useTranslation'

const Content = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 4.5%;
`

const NavWrapper = styled.div`
  width: 85%;
  height: 83px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 0 0 var(--medium);

  background: var(--white);
  border-radius: 12px;
`

const NavList = styled.ul`
  width: 65%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`

const NavListItem = styled.li`
  margin-left: var(--large);
`

const NavLink = styled.a`
  font-family: Anago;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;

  color: var(--purple);

  text-decoration: none;
`

const LanguagueOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

type LanguageProps = {
  readonly active: boolean
}
const Portuguese = styled.button<LanguageProps>`
  border: none;
  background: none;

  font-family: Anago;
  font-size: 18px;
  line-height: 32px;

  color: ${props => (props.active ? `var(--green)` : `var(--grey)`)};
`

const English = styled.button<LanguageProps>`
  border: none;
  background: none;

  font-family: Anago;
  font-size: 18px;
  line-height: 32px;

  color: ${props => (props.active ? `var(--green)` : `var(--grey)`)};
`

const Divider = styled.div`
  margin: 0 8px;
  height: 20px;
  border-left: 1px solid #000000;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 83px;
  width: 140px;
  border-radius: 0 12px 12px 0;
  background: var(--purple);

  cursor: pointer;
`

const DemoWrapper = styled.button`
  border: none;
  background: none;

  font-family: Anago;
  font-size: var(--small);
  line-height: 32px;
  font-weight: bold;

  color: var(--white);
`

const Logo = styled(Image)`
  max-width: var(--medium);
  max-height: var(--regular);

  cursor: pointer;
`

const LogoLink = styled.a`
  text-decoration: none;
`

const DesktopNavbar = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const { locale } = router

  const [currentLanguage, setCurrentLanguage] = useState<string | undefined>(
    locale
  )

  useEffect(() => {
    setCurrentLanguage(locale)
  }, [locale])

  return (
    <>
      <Content>
        <NavWrapper>
          <Link href="/" passHref={true}>
            <LogoLink>
              <Logo src={logo} />
            </LogoLink>
          </Link>
          <NavList>
            <NavListItem>
              <Link href="/about" passHref={true}>
                <NavLink>{t('navbar.sobre')}</NavLink>
              </Link>
            </NavListItem>
            <NavListItem>
              <Link href="/services" passHref={true}>
                <NavLink>{t('navbar.servico')}</NavLink>
              </Link>
            </NavListItem>
            <NavListItem>
              <Link href="/privacy" passHref={true}>
                <NavLink>{t('navbar.privacidade')}</NavLink>
              </Link>
            </NavListItem>
            <NavListItem>
              <Link href="/contact" passHref={true}>
                <NavLink>{t('navbar.contato')}</NavLink>
              </Link>
            </NavListItem>
          </NavList>
          <LanguagueOptionWrapper>
            <Link href={router.asPath} passHref={true} locale="pt-BR">
              <Portuguese active={currentLanguage === 'pt-BR'}>PT</Portuguese>
            </Link>
            <Divider />
            <Link href={router.asPath} passHref={true} locale="en-US">
              <English active={currentLanguage === 'en-US'}>EN</English>
            </Link>
          </LanguagueOptionWrapper>
          <Link href="/contact" passHref={true}>
            <ButtonWrapper>
              <DemoWrapper>{t('navbar.demo')}</DemoWrapper>
            </ButtonWrapper>
          </Link>
        </NavWrapper>
      </Content>
    </>
  )
}

export default DesktopNavbar
