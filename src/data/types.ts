export type Language = 'ar' | 'en'
export type Localized = Record<Language, string>
export type Category = 'sweet' | 'savory' | 'cookies' | 'custom'

export interface Product {
  id: string
  category: Category
  name: Localized
  description: Localized
  unit: Localized
  price: number | null
  image: string
  imageAlt: Localized
  badge?: Localized
}
