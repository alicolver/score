export function getFlagUrlForCountry(country: string): string {
    return `https://predictaball-teamflagsbucketb6ca46de-2uk8faboxd6r.s3.eu-west-2.amazonaws.com/${country.toLowerCase()}.svg`
}

export function getCrestUrlForCountry(country: string): string {
    return `https://predictaball-teamflagsbucketb6ca46de-2uk8faboxd6r.s3.eu-west-2.amazonaws.com/${country.toLowerCase()}-crest.png`
}