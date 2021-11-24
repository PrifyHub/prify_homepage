import React from 'react'

import * as S from './styles'

import Link from 'next/link'

import Logo from '/public/svg/home/prifyWhite.svg'

const Footer = () => {
  return (
    <S.Content>
      <S.LogoWrapper>
        <S.Logo src={Logo} />
      </S.LogoWrapper>
      <S.SocialMediaWrapper>
        <S.Linkedin size={40} />
      </S.SocialMediaWrapper>
      <S.LinkWrapper>
        <S.LinkItem>
          <Link href="/" passHref={true}>
            <S.LinktoPage>Home</S.LinktoPage>
          </Link>
        </S.LinkItem>
        <S.LinkItem>
          <Link href="/about" passHref={true}>
            <S.LinktoPage>Sobre</S.LinktoPage>
          </Link>
        </S.LinkItem>
        <S.LinkItem>
          <Link href="/services" passHref={true}>
            <S.LinktoPage>Nosso serviço</S.LinktoPage>
          </Link>
        </S.LinkItem>
        <S.LinkItem>
          <Link href="/privacy" passHref={true}>
            <S.LinktoPage>Por que privacidade importa?</S.LinktoPage>
          </Link>
        </S.LinkItem>
        <S.LinkItem>
          <Link href="/contact" passHref={true}>
            <S.LinktoPage>Contato</S.LinktoPage>
          </Link>
        </S.LinkItem>
      </S.LinkWrapper>
      <S.Copyright>
        <S.AllRights>© Prify. All rights reserved</S.AllRights>
      </S.Copyright>
    </S.Content>
  )
}

export default Footer
