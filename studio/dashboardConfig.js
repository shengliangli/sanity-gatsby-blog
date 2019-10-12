export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5da16d9204b5b378a22e0b62',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-gb7mxqv4',
                  apiId: 'b2c6962d-1db1-48b0-8b51-081f96bf2f48'
                },
                {
                  buildHookId: '5da16d92816c819c63ee81e2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-udg2e95r',
                  apiId: 'fb45be67-b99a-49d8-8190-c45b40f664b9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shengliangli/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-udg2e95r.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
