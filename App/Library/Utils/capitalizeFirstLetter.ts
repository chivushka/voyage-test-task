export const capitalizeFirstLetter = (word: string, t: any): string  => {
    return word ? word?.charAt(0).toUpperCase() + word?.slice(1) : t('None');
}