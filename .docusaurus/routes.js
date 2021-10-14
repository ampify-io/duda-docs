
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/search',
  component: ComponentCreator('/search','35c'),
  exact: true,
},
{
  path: '/test',
  component: ComponentCreator('/test','9d2'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','75c'),
  
  routes: [
{
  path: '/docs/about_amp',
  component: ComponentCreator('/docs/about_amp','daf'),
  exact: true,
},
{
  path: '/docs/analytics',
  component: ComponentCreator('/docs/analytics','d2a'),
  exact: true,
},
{
  path: '/docs/App',
  component: ComponentCreator('/docs/App','023'),
  exact: true,
},
{
  path: '/docs/contact',
  component: ComponentCreator('/docs/contact','a89'),
  exact: true,
},
{
  path: '/docs/customized_sites',
  component: ComponentCreator('/docs/customized_sites','7a0'),
  exact: true,
},
{
  path: '/docs/general',
  component: ComponentCreator('/docs/general','f70'),
  exact: true,
},
{
  path: '/docs/page_speed_test',
  component: ComponentCreator('/docs/page_speed_test','d87'),
  exact: true,
},
{
  path: '/docs/page_speed_test_old',
  component: ComponentCreator('/docs/page_speed_test_old','07f'),
  exact: true,
},
{
  path: '/docs/qna',
  component: ComponentCreator('/docs/qna','0fe'),
  exact: true,
},
{
  path: '/docs/view_source_amp',
  component: ComponentCreator('/docs/view_source_amp','809'),
  exact: true,
},
{
  path: '/docs/widgets',
  component: ComponentCreator('/docs/widgets','2a5'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
