export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const isValidPassword = (password) => {
  return password.length >= 6
}

export const validateId = (id) => {
  return id !== null && id !== undefined && id !== ''
}

export const validateIsoMark = (isoMark) => {
  return !!isoMark
}

export const validateSymbol = (symbol) => {
  return !!symbol
}

export const isCurrencyUnique = (currency, allCurrencies) => {
  const existingCurrency = allCurrencies.find(
    (c) =>
      c.id === currency.id ||
      c.isoMark === currency.isoMark ||
      c.symbol === currency.symbol
  )
  return !existingCurrency
}
