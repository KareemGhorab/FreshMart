export type TCurrency = 'EGP' | '$' | '€'
export type TLanguage = 'ar' | 'en'

export interface ILocale {
	language: TLanguage
	currency: TCurrency
}
