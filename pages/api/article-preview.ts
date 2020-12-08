import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchAPI } from '@lib/api'

export default async function articlePreview(
  req: NextApiRequest,
  res: NextApiResponse<{
    message: string
  }>
) {
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.STRAPI_PREVIEW_SECRET || !req.query.slug)
    res.status(401).json({ message: 'Invalid token' })

  // Fetch the headless CMS to check if the provided `slug` exists
  const article: TArticle = (
    await fetchAPI(`/articles?slug=${req.query.slug}&_publicationState=preview`)
  )[0]

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!article) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/articles/${article.slug}` })
  res.end()
}
