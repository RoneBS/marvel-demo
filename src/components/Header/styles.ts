import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: var(--deep-gray);
`
export const PageList = styled.ul`
  list-style: none;
  padding: 15px;
  a {
    color: var(--white);
    font-size: 1.5rem;
    text-decoration: none;
  }
`

export const LogoImg = styled.img`
  display: block;
  max-width: 100%;
`

export const Form = styled.form`
  padding: 15px;
`
