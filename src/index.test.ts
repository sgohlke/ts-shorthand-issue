import {
    Elements,
    getElementOrDefaultWithBrackets, getElementOrDefaultWithoutBrackets
} from './index'

test('Should get correct Element when calling getElementOrDefaultWithBrackets', () => {
    expect(getElementOrDefaultWithBrackets(Elements.first)).toBe(Elements.first)
    expect(getElementOrDefaultWithBrackets(Elements.second)).toBe(Elements.second)
    expect(getElementOrDefaultWithBrackets(undefined, true)).toBe(Elements.fallback)
    expect(getElementOrDefaultWithBrackets(undefined, false)).toBe(Elements.default)
})

test('Should get correct Element when calling getElementOrDefaultWithoutBrackets', () => {
    expect(getElementOrDefaultWithoutBrackets(Elements.first)).toBe(Elements.first)
    expect(getElementOrDefaultWithoutBrackets(Elements.second)).toBe(Elements.second)
    expect(getElementOrDefaultWithoutBrackets(undefined, true)).toBe(Elements.fallback)
    expect(getElementOrDefaultWithoutBrackets(undefined, false)).toBe(Elements.default)
})
