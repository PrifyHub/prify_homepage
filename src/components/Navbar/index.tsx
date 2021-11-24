import * as S from './styles'

import logo from '/public/svg/home/prify.svg'
import menu from '/public/svg/home/menu.svg'

const Navbar = () => {
  return (
    <S.Content>
      <S.Logo
        src={logo}
        alt="logo da prify na cor roxa, com um no lugar de letra F na cor verde."
      />
      <S.MobileMenu src={menu} alt="menu sanduíche na cor verde" />
    </S.Content>
  )
}

export default Navbar
