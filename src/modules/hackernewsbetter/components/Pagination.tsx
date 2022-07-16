import styled from '@emotion/styled'

const StyledPagination = styled.div`
  padding: 15px 30px;
  position: fixed;
  text-align: center;
  top: 55px;
  left: 0;
  right: 0;
  z-index: 998;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 2px;
  font-weight: 500;
  cursor: default;
  user-select: none;

  .disabled {
    color: #747474;
    cursor: default;
  }

  .enabled {
    cursor: pointer;
  }

  .newsListNav a {
    margin: 0 1em;
  }
`

type AppProps = {
  storiesPerPage: number
  totalStories: number
  currentPage: number
  setCurrentPage: (arg: number) => void
  setDirection: (arg: string) => void
}

const Pagination = ({ storiesPerPage, totalStories, currentPage, setCurrentPage, setDirection }: AppProps) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalStories / storiesPerPage); i++) {
    pageNumbers.push(i)
  }

  function handleClick(direction: string) {
    if (direction === 'backward') {
      setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)
      setDirection('backward')
    } else {
      setCurrentPage(currentPage < pageNumbers.length ? currentPage + 1 : currentPage)
      setDirection('forward')
    }
  }

  return (
    <StyledPagination>
      <a onClick={() => handleClick('backward')} className={currentPage < 2 ? 'disabled' : 'enabled'}>
        &lt; prev
      </a>
      <span>
        {currentPage}/{pageNumbers.length}
      </span>
      <a onClick={() => handleClick('forward')} className={currentPage === pageNumbers.length ? 'disabled' : 'enabled'}>
        next &gt;
      </a>
    </StyledPagination>
  )
}

export default Pagination
