export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e245309882d57d7ca594e7d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vhhtj2dc',
                  apiId: '923327dd-0894-4c93-b7e3-51c1220bab72'
                },
                {
                  buildHookId: '5e245309e6ddb6b25ffff5dc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-798znudy',
                  apiId: '5eacd9f4-bee8-4f0e-82d0-b0f48f6795d2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/remrem12/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-798znudy.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
