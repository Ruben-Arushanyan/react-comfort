import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function HeroBanner() {
  const {siteConfig} = useDocusaurusContext();
  const {
    organizationName,
    projectName,
  } = siteConfig;

  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
        <h1 className={styles.heroProjectTitle}>
          {siteConfig.title}
          <img
            alt='logo'
            className={styles.heroLogo}
            src={useBaseUrl('/images/1200x1200.png')}
            width="350"
            height="350"
          />
        </h1>
        <h2 className={styles.heroProjectTagline}>
            <b>Feel</b> more <b>comfortable</b> in React.
        </h2>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs/introduction">
            Get Started
          </Link>
          {/* <Link className="button button--info" to="/docs/introduction">
            Try a Demo
          </Link> */}
          <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
              className={styles.indexCtasGitHubButton}
              src={`https://ghbtns.com/github-btn.html?user=${organizationName}&repo=${projectName}&type=star&count=true&size=large`}
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span>
        </div>
      </div>
    </div>
  )
}