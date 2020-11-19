type TArticleCover = {
  category: string
  slug: string
  title: string
  author: string
  date: string
  urls: {
    image: string
  }
}

type TCategory = {
  id: number
  title: string
  slug: string
  description: string
  published_at: Date
  created_at: Date
  updated_at: Date
  cover: null
}

type TContributor = {
  id: number
  name: string
  slug: string
  role: string
  published_at: Date
  created_at: Date
  updated_at: Date
  urls: {
    id: number
    instagram: string | null
    twitter: string | null
  }
  featured: {
    id: number
    description: string
    profile_image: TStrapiImage
  } | null
}

// Strapi Types
type TStrapiImage = {
  id: number
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: {
    thumbnail: TStrapiImageFormat
    small: TStrapiImageFormat
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  created_at: Date
  updated_at: Date
}

type TStrapiImageFormat = {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  path: null
  url: string
}
