import styled from 'styled-components'
import Image from 'next/image'

export const Content = styled.nav`
  height: 112px;
  min-width: 360px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${`var(--medium)`};

  background: var(--white);
`

export const Logo = styled(Image)`
  max-width: var(--medium);
  max-height: var(--regular);
`

export const MobileMenu = styled(Image)`
  max-width: var(--medium);
  max-height: var(--regular);
`
