import { ReactNode } from 'react'
import styled from 'styled-components'

const MobileGreenButton = styled.button`
  min-width: 312px;
  min-height: 39px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Anago;
  font-size: var(--small);
  font-weight: bold;
  background: var(--purple);
  color: var(--white);

  border: none;
`

const DesktopPurpleButton = styled.button`
  min-width: 229px;
  min-height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Anago;
  font-size: var(--small);
  font-weight: bold;
  background: var(--purple);
  color: var(--white);

  border: none;
  font-weight: bold;
`

const ButtonText = styled.p`
  font-family: Anago;
  font-size: var(--small);
  color: var(--white);
`

const DesktopSmallButton = styled.button`
  min-width: 75px;
  min-height: 39px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Anago;
  font-size: var(--small);
  font-weight: bold;
  background: var(--purple);
  color: var(--white);

  border: none;
`

type ButtonProps = {
  children: ReactNode
}

export const MobileButton: React.FC<
  ButtonProps & React.HTMLProps<HTMLButtonElement>
> = ({ children }: ButtonProps) => {
  return (
    <MobileGreenButton>
      <ButtonText>{children}</ButtonText>
    </MobileGreenButton>
  )
}

export const SmallButton: React.FC<
  ButtonProps & React.HTMLProps<HTMLButtonElement>
> = ({ children }: ButtonProps) => {
  return (
    <DesktopSmallButton>
      <ButtonText>{children}</ButtonText>
    </DesktopSmallButton>
  )
}

export const DesktopButton: React.FC<
  ButtonProps & React.HTMLProps<HTMLButtonElement>
> = ({ children }: ButtonProps) => {
  return (
    <DesktopPurpleButton>
      <ButtonText>{children}</ButtonText>
    </DesktopPurpleButton>
  )
}
