import React from 'react'
import Link from 'next/link'

import styled from 'styled-components'
import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort'

type LinkProps = {
  text: string
  color: string
  link: string
}

const Container = styled.div``

const LinkWrapper = styled.a`
  font-family: Anago;
  font-size: var(--small);
  font-weight: bold;
  line-height: 28px;
  text-decoration: none;
`

const LinkTo = ({ text, color, link }: LinkProps) => {
  return (
    <Container>
      <Link href={link} passHref={true}>
        <LinkWrapper style={{ color }}>
          {text}
          <ArrowRightShort size={32} style={{ color: color }} />
        </LinkWrapper>
      </Link>
    </Container>
  )
}

export default LinkTo
