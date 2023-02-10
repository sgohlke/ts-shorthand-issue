
export enum Elements {
    first,
    second,
    default,
    fallback
}

export function getElementOrDefaultWithoutBrackets(element?: Elements,
    useFallback?: boolean): Elements {
    return element ?? useFallback ? Elements.fallback : Elements.default
}

export function getElementOrDefaultWithBrackets(element?: Elements,
    useFallback?: boolean): Elements {
    return element ?? (useFallback ? Elements.fallback : Elements.default)
}
