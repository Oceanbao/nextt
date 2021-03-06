export const getPageDetails = (pathname: string) => {
  const prefix = 'Hacker News Next |'
  switch (pathname) {
    case '/top':
      return `${prefix} Top`
    case '/new':
      return `${prefix} New`
    case '/show':
      return `${prefix} Show`
  }
}
