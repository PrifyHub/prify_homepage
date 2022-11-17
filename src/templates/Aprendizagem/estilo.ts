import styled from 'styled-components'
import Image from 'next/image'

import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp'
import { KeyboardArrowDown } from '@styled-icons/material/KeyboardArrowDown'

export const HelloMundo = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: left;

  color: #233fc0;
  font-size: 18px;

  @media screen and (max-width: 768) {
    width: 300px;
    height: 130px;
  }

  h1 {
    padding-top: 1%;
    height: 70px;
    margin-top: 24px;
    background-color: #f0a589;
  }
`

export const HeroContent = styled.main`
  width: 100%;
  min-width: 360px;
  height: 90vh; // 628px

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: url('img/heroBg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 1200px) {
    min-width: 312px;
    height: 100vh;
  }
`

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;

  min-width: 312px;
  min-height: 193px;
  max-width: var(--container);

  padding: 0 var(--small);

  @media screen and (max-width: 768) {
    width: 312px;
    height: 193px;
  }

  div {
    margin-top: 24px;
  }
`

export const HeroTitle = styled.p`
  font-family: Anago;
  font-style: normal;
  font-size: clamp(var(--title), 5vw, 64px);
  line-height: 120%;
  font-weight: 300;

  // color: var(--green);
  color: #ff88bb;
  span {
    color: var(--green);
    font-weight: bold;
  }
`
export const ItemImage = styled(Image)`
  max-width: 100%;
  height: auto;
`
