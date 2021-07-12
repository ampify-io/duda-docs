import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>About AMP</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
      </>
    ),
  },
  {
    title: <>About Site Widgets</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
      </>
    ),
  },
  {
    title: <>Troubleshooting</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
      </>
    ),
  }, {
    title: <>About AMP speed test</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
      </>
    ),
  },
];


function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--3', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 class="text--center">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
