import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import config from '~/config.json';
import styles from './skills.module.css';

export const Skills = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div ref={nodeRef} className={styles.content}>
            <Text className={styles.contentTitle} data-visible={visible} as="h1">
              Skills
            </Text>
            <div className={styles.tag} aria-hidden>
              <Divider
                notchWidth="64px"
                notchHeight="8px"
                collapsed={!visible}
                collapseDelay={1000}
              />
              <div className={styles.tagText} data-visible={visible}>
                Frontend
              </div>
            </div>
            <div className={styles.column}>
              {config.skills
                .filter(skill => skill.type === 'frontend')
                .map(skill => {
                  return (
                    <Button
                      className={styles.button}
                      data-visible={visible}
                      secondary
                      key={skill}
                    >
                      {skill.skill}
                    </Button>
                  );
                })}
            </div>

            <div className={styles.tag} aria-hidden>
              <Divider
                notchWidth="64px"
                notchHeight="8px"
                collapsed={!visible}
                collapseDelay={1000}
              />
              <div className={styles.tagText} data-visible={visible}>
                Backend
              </div>
            </div>
            <div className={styles.column}>
              {config.skills
                .filter(skill => skill.type === 'backend')
                .map(skill => {
                  return (
                    <Button
                      className={styles.button}
                      data-visible={visible}
                      secondary
                      key={skill}
                    >
                      {skill.skill}
                    </Button>
                  );
                })}
            </div>

            <div className={styles.tag} aria-hidden>
              <Divider
                notchWidth="64px"
                notchHeight="8px"
                collapsed={!visible}
                collapseDelay={1000}
              />
              <div className={styles.tagText} data-visible={visible}>
                Blockchain
              </div>
            </div>
            <div className={styles.column}>
              {config.skills
                .filter(skill => skill.type === 'blockchain')
                .map(skill => {
                  return (
                    <Button
                      className={styles.button}
                      data-visible={visible}
                      secondary
                      key={skill}
                    >
                      {skill.skill}
                    </Button>
                  );
                })}
            </div>

            <div className={styles.tag} aria-hidden>
              <Divider
                notchWidth="64px"
                notchHeight="8px"
                collapsed={!visible}
                collapseDelay={1000}
              />
              <div className={styles.tagText} data-visible={visible}>
                Extra
              </div>
            </div>
            <div className={styles.column}>
              {config.skills
                .filter(skill => skill.type === 'extra')
                .map(skill => {
                  return (
                    <Button
                      className={styles.button}
                      data-visible={visible}
                      secondary
                      key={skill}
                    >
                      {skill.skill}
                    </Button>
                  );
                })}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
