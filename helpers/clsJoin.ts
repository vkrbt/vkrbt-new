export function clsJoin(...classNames: string[]): string {
    return classNames.filter(Boolean).join(' ');
}
