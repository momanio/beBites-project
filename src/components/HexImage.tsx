import { useState } from 'react'
import { Wheat } from 'lucide-react'
import { content } from '../data/content'
import { useLanguage } from '../lib/language-context'

interface Props {
  src: string
  alt: string
  className?: string
  eager?: boolean
  hex?: boolean
  sizes?: string
}

export function HexImage({
  src,
  alt,
  className = '',
  eager = false,
  hex = true,
  sizes = '(max-width: 640px) 90vw, 33vw',
}: Props) {
  const [failedSource, setFailedSource] = useState<string | null>(null)
  const { language } = useLanguage()
  const failed = failedSource === src
  return (
    <div className={`image-frame ${hex ? 'hex-image' : ''} ${className}`}>
      {failed ? (
        <div className="image-fallback" role="img" aria-label={alt}>
          <Wheat size={44} aria-hidden="true" />
          <span>{content[language].menu.imagePlaceholder}</span>
        </div>
      ) : (
        <img
          src={src}
          srcSet={
            src.endsWith('/honeycomb-placeholder.webp')
              ? '/images/honeycomb-small.webp 600w, /images/honeycomb-placeholder.webp 1100w'
              : undefined
          }
          sizes={sizes}
          alt={alt}
          width="640"
          height="640"
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : 'auto'}
          decoding="async"
          onError={() => setFailedSource(src)}
        />
      )}
    </div>
  )
}
