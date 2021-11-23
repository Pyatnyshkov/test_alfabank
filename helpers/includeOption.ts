export default function includeOption(array: string[], string: string) {
    return array?.includes(string) ? 'content__table-check' : 'content__table-uncheck';
}