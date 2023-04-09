import {
  isValidEmail,
  isValidPassword,
  validateId,
  validateIsoMark,
  validateSymbol,
  isCurrencyUnique,
} from '@/utils/validation'

describe('Validation Utilities', () => {
  describe('isValidEmail', () => {
    it.each([
      ['email@example.com', true],
      ['email@subdomain.example.com', true],
      ['email@example', false],
      ['email@.com', false],
      ['', false],
    ])('validates email "%s" as %s', (email, expected) => {
      expect(isValidEmail(email)).toBe(expected)
    })
  })

  describe('isValidPassword', () => {
    it.each([
      ['123456', true],
      ['password', true],
      ['12345', false],
      ['', false],
    ])('validates password "%s" as %s', (password, expected) => {
      expect(isValidPassword(password)).toBe(expected)
    })
  })

  describe('validateId', () => {
    it.each([
      ['123', true],
      [0, true],
      ['', false],
      [null, false],
    ])('validates id "%s" as %s', (id, expected) => {
      expect(validateId(id)).toBe(expected)
    })
  })

  describe('validateIsoMark', () => {
    it.each([
      ['USD', true],
      ['EUR', true],
      ['', false],
      [null, false],
    ])('validates isoMark "%s" as %s', (isoMark, expected) => {
      expect(validateIsoMark(isoMark)).toBe(expected)
    })
  })

  describe('validateSymbol', () => {
    it.each([
      ['$', true],
      ['€', true],
      ['', false],
      [null, false],
    ])('validates symbol "%s" as %s', (symbol, expected) => {
      expect(validateSymbol(symbol)).toBe(expected)
    })
  })

  describe('isCurrencyUnique', () => {
    const allCurrencies = [
      { id: 1, isoMark: 'USD', symbol: '$' },
      { id: 2, isoMark: 'EUR', symbol: '€' },
    ]

    it.each([
      [{ id: 3, isoMark: 'GBP', symbol: '£' }, true],
      [{ id: 1, isoMark: 'GBP', symbol: '£' }, false],
      [{ id: 3, isoMark: 'USD', symbol: '£' }, false],
      [{ id: 3, isoMark: 'GBP', symbol: '$' }, false],
    ])(
      'checks if currency is unique for given currency %j as %s',
      (currency, expected) => {
        expect(isCurrencyUnique(currency, allCurrencies)).toBe(expected)
      }
    )
  })
})
