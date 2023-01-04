export function formatDate(dateString: string) {
    let date = new Date(dateString);

    return new Intl.DateTimeFormat('ru').format(date);
}
