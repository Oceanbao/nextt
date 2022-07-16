import Link from 'next/link'
import styled from '@emotion/styled'

const StyledNav = styled.nav`
  .nav {
    background-color: #212121;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    margin: auto;
    height: 55px;
    width: 100%;
  }

  .linkWrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto;
    max-width: 800px;
    height: 100%;

    @media (max-width: 920px) {
      padding: 0 1.2rem;
    }

    @media (max-width: 425px) {
      justify-content: space-between;
    }

    a {
      color: hsla(0, 0%, 100%, 0.8);
      transition: color 0.2s ease;
      padding: 0.3rem;
      font-weight: bold;
      letter-spacing: 0.075em;
      margin-right: 1.8em;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        color: #fff;
      }

      @media (max-width: 425px) {
        margin: 0;
      }
    }
  }
`

const Nav = ({ setCurrentPage }: { setCurrentPage?: (page: number) => void }) => {
  return (
    <StyledNav className="nav">
      <div className="linkWrapper">
        <Link href="/top">
          <a onClick={setCurrentPage ? () => setCurrentPage(1) : undefined}>HNN</a>
        </Link>
        <Link href="/top">
          <a onClick={setCurrentPage ? () => setCurrentPage(1) : undefined}>Top</a>
        </Link>
        <Link href="/new">
          <a onClick={setCurrentPage ? () => setCurrentPage(1) : undefined}>New</a>
        </Link>
        <Link href="/show">
          <a onClick={setCurrentPage ? () => setCurrentPage(1) : undefined}>Show</a>
        </Link>
      </div>
    </StyledNav>
  )
}

export default Nav
