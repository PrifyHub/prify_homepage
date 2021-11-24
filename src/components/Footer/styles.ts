import styled from 'styled-components'
import Image from 'next/image'

import { LinkedinWithCircle } from '@styled-icons/entypo-social'

export const Content = styled.footer`
  min-width: 360px;
  min-height: 640px;

  background: var(--purple);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: var(--large) var(--medium) var(--regular);
`

export const LogoWrapper = styled.div``

export const Logo = styled(Image)``

export const SocialMediaWrapper = styled.div``

export const Linkedin = styled(LinkedinWithCircle)`
  color: var(--white);
`

export const LinkWrapper = styled.div`
  height: 275px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const LinkItem = styled.div``

export const LinktoPage = styled.a`
  font-family: Anago;
  font-size: 18px;
  line-height: 32px;
  text-decoration: none;

  color: rgba(255, 255, 255, 0.87);
`

export const Copyright = styled.div``

export const AllRights = styled.p`
  font-family: Anago;
  font-size: 12px;
  line-height: 14px;
  text-align: center;

  color: var(--white);
`
