// /users/:id
//REGEX - É uma expressão regular

export function buildRoutePath(path) {
  const routeParmetersRegex = /:([a-zA-z]+)/g
  console.log(Array.from(path.matchAll(routeParmetersRegex)))
}