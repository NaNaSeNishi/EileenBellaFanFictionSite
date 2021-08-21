import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '贝拉 Bella',
    Svg: require('../../static/img/Bella.svg').default,
    description: (
      <>
        Bella is the leader and key dancer of the group. She is very strict about other members' dance skills.
      </>
    ),
  },
  {
    title: '',
    Svg: require('../../static/img/B&E.svg').default,
    description: (
      <>
        Painted  by  @陌芋marginal
      </>
    ),
  },
  {
    title: '乃琳 Eileen',
    Svg: require('../../static/img/Eileen.svg').default,
    description: (
      <>
        Eileen is knowledgeable and working hard for law degrees.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  if(title == ''){
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg1} alt={title} />
        <h6>{description}</h6>
      </div>
    </div>
  );
  } else{
    return (
      <div className={clsx('col col--4')}>
        <div className="text--center">
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
        </div>
      </div>
    );
  }
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
