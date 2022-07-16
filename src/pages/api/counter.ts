import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const countHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  /*
  - Handle error via middleware
  
  const handler = withMiddleware(
    withMethodsGuard(SUPPORTED_HTTP_METHODS),
    withAuthedUser,
  )

  return withExceptionFilter(req, res)(handler)

  try {
    await handler(req, res)
  } catch(e) {
    // handle e
  }

  - log object
  {
    url,
    userId,
    referer,
    userAgent,
    message,
  }

  - response
  {
    statusCode,
    timestamp,
    path: req.url,
  }

  - middleware

  export function withExeceptionFilter(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    return async function(
      handler: NextApiHandler
    ) {
      // code...
      return handler(req, res)
    }
  }

  - error hanlder
  import { ApiError } from 'next/dist/server/api-utils'

  function getExceptionStatus(
    exception: unknown
  ) {
    return exception instanceof ApiError
      ? exception.statusCode
      : HttpStatusCode.InternalServerError;
  }

  function getExceptionMessage(
    exception: unknown
  ) {
    return isError(exception) ?
      exception.message : `Internal Server Error`;
  }

  function getExceptionStack(
    exception: unknown
  ) {
    return isError(exception) ?
      exception.stack : undefined;
  }

  function isError(
    exception: unknown
  ): exception is Error {
    return exception instanceof Error;
  }

  - usage
  const { url, headers } = req;

  const statusCode = getExceptionStatus(exception);
  const message = getExceptionMessage(exception);
  const stack = getExceptionStack(exception);

  // NB: tweak this according to how you retrieve your user in your requests
  const user = req.user;
  const userId = user?.uid ?? 'Not Authenticated';

  const referer = headers['referer'];
  const userAgent = headers['user-agent'];

  // this is the context being logged
  const requestContext = {
    url,
    userId,
    referer,
    userAgent,
    message,
  };

  // edit the message according to your preferences
  const exceptionMessage
    = `An unhandled exception occurred.`;

  logger.error(requestContext, exceptionMessage);

  // if we are able to retrieve the stack, we add it to the debugging logs
  if (stack) {
    logger.debug(stack);
  }

  const timestamp = new Date().toISOString();

  // return just enough information without leaking any data
  const responseBody = {
    statusCode,
    timestamp,
    path: req.url,
  };

  return res.status(statusCode).send(responseBody);
  */
  const { amount = 1 } = req.body

  // simulate IO latency
  await delay(2000)

  res.json({ amount })
}

export default countHandler
