import type {
  ContentAssetI,
  ContentRichTextI,
  ContentTaxonomyGroupI,
  ContentTextI,
  ElementBaseI
} from '@/interfaces'

export interface InsightElementI extends ElementBaseI {
  body: ContentRichTextI
  categories: ContentTaxonomyGroupI
  description: ContentTextI
  feature: ContentAssetI
  introduction: ContentTextI
  subtitle: ContentTextI
  title: ContentTextI
}
