// /users/:id
//REGEX - É uma expressão regular

export function buildRoutePath(path) {
  const routeParmetersRegex = /:([a-zA-z]+)/g// Busca os que tem de A a z, mais o valor global
  const pathWithParams = path.replaceAll(routeParmetersRegex, '(?<id>[a-z0-9\-_]+)')

  const pathRegex = new RegExp(`${pathWithParams}`);

  return pathRegex
}