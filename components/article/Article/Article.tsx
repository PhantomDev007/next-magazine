import ReactMarkdown from 'react-markdown'
import { Date } from '@components/ui'
import { Author, AuthorCard, CategoryTag, Title } from '../ui'
import ImageRenderer from '../ui/ImageRenderer'
import ShareButton from '@components/core/ShareButton/ShareButton'
import AddToListButton from '@components/core/AddToListButton/AddToListButton'

function Article({ article }: { article: TArticle | undefined }) {
  if (!article) return <p>something went wrong</p>

  return (
    <article>
      <header className="py-10">
        <CategoryTag category={article.category} />
        <Title title={article.title} />
        <Author author={article.author} />
        <Date date={article.published_at as string} />
      </header>
      <ul className="flex justify-end">
        <li>
          <AddToListButton article={article} />
        </li>
        <li>
          <ShareButton
            path={`/articles/${article.slug}`}
            title={article.title}
            message={'Check this article'}
          />
        </li>
      </ul>

      <section className="markdown">
        <ReactMarkdown renderers={{ image: ImageRenderer }}>
          {article.content || ''}
        </ReactMarkdown>
      </section>

      <footer className="border-t border-primary py-6">
        <AuthorCard author={article.author} />
        <ul className="flex justify-end">
          <li>
            <AddToListButton article={article} />
          </li>
          <li>
            <ShareButton
              path={`/articles/${article.slug}`}
              title={article.title}
              message={'Check this article'}
            />
          </li>
        </ul>
      </footer>
    </article>
  )
}

export default Article
