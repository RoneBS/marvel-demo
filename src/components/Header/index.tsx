import logoImg from '../../assets/marvel-logo.svg'
import * as C from './styles'

export const Header = () => {
  return (
    <>
      <C.Navbar>
        <C.PageList>
          <li>
            <a href="/">Home</a>
          </li>
        </C.PageList>
        <C.LogoImg src={logoImg} alt="Marvel logo" />
        <C.Form>
          <input type="text" id="name" placeholder="Search..." />
        </C.Form>
      </C.Navbar>
    </>
  )
}
