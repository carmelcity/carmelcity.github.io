import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to start',
    Svg: require('@site/static/img/account.svg').default,
    description: (
      <>
      Every member begins their innovation journey with a free assessment to discover their Innovation Genius Type and a secure, password-free biometric account. Each Carmel Account is fully owned by its user - not the platform - and is secured by fingerprint or face recognition, with no passwords or any private keys required whatsoever.
      </>
    ),
  },
  {
    title: 'Engage on Carmels',
    Svg: require('@site/static/img/carmels.svg').default,
    description: (
      <>
        Members unleash their innovation potential by engaging in Carmels - thoughtful debates on building a more human world. Members choose a side (pro or against) and share their position then engage in healthy discussions by commenting on each other’s ideas to collectively answer the key question: How would you build a more human world?
      </>
    ),
  },
  {
    title: 'Bring Carmels to life',
    Svg: require('@site/static/img/communities.svg').default,
    description: (
      <>
       Members form communities and propose projects to bring Carmels to life. Communities fund projects, reward members for completing challenges that drive the projects forward, and share earnings based on membership levels. Along the way, members grow by earning contribution points and learning new skills through tutorials.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
          <Heading as="h2">
            Carmel City is a community-owned platform that empowers people who are passionate about the future to awaken their personal innovation genius and work together to build a more human world.
          </Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
