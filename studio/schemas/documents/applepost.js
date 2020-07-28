export default {
  name: 'applepost',
  type: 'document',
  title: 'Apple Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt'
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ]
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
  ]
}
