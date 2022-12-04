export function parseJwt(token: string) {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`
      })
      .join('')
  )

  return JSON.parse(jsonPayload)
}

export const setUrlQuery = (name: any, value: any, resetAll = 0) => {
  const searchParams = new URLSearchParams(resetAll ? '' : window.location.search)
  if (value === null || value === undefined) {
    searchParams.delete(name)
  } else {
    searchParams.set(name, value)
  }
  return searchParams.toString()
}

export function convertToLabel(row: string) {
  const capitalize = row.charAt(0).toUpperCase() + row.slice(1)
  const giveSpaceBeforeUppercaseChar = capitalize.replace(/([a-z])([A-Z])/g, '$1 $2')
  return giveSpaceBeforeUppercaseChar
}
