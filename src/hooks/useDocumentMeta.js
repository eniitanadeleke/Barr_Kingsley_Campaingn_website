import { useEffect } from 'react'

/**
 * Sets the document title and meta description per page.
 *
 * Both strings are carried over exactly as they appeared in the
 * <title> and <meta name="description"> of the corresponding source
 * HTML file, so nothing written for search engines is lost in the
 * move to a single-page React app.
 */
export default function useDocumentMeta(title, description) {
  useEffect(() => {
    if (title) document.title = title

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
