export default {
  widgets: [
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
                  buildHookId: '5ebb26cbbbbe317337b3641f',
                  title: 'Sanity Studio',
                  name: 'dotan-me-ks-studio',
                  apiId: '48cc38dd-ddd0-4365-8c92-431336bcc4ca'
                },
                {
                  buildHookId: '5ebb26cbd4d582816fad0c95',
                  title: 'Blog Website',
                  name: 'dotan-me-ks',
                  apiId: '8981cee0-208a-44b8-aaaa-d19c968228f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thezenvan/dotan-me-ks',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://dotan-me-ks.netlify.app', category: 'apps'}
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
