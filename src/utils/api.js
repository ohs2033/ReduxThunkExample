import 'whatwg-fetch'
export const get = (url) => {
  return window.fetch(`http://localhost:3000${url}`, {
    method: 'GET'
  })
}
