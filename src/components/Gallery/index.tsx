import React, { FC, RefObject, useEffect, useRef } from 'react';
import { scrollSlider } from '../../helpers/scrollSlider';
import { galleryItems } from '../../api/data';
import styles from './Gallery.module.scss';
import Heading from '../Collection/Heading';

interface GalleryProps {
  nextSection: RefObject<HTMLDivElement>;
}

const Gallery: FC<GalleryProps> = ({ nextSection }) => {
  const gallery = useRef<HTMLDivElement>(null);
  const gallerySection = useRef<HTMLDivElement>(null);
  const galleryItem = useRef<HTMLDivElement>(null);
  const gallerySectionHeading = useRef<HTMLHeadingElement>(null);
  const galleryWrapper = useRef<HTMLDivElement>(null);

  useEffect(function () {
    if (
      gallerySection.current &&
      galleryWrapper.current &&
      gallerySectionHeading.current &&
      gallery.current &&
      galleryItem.current &&
      nextSection.current
    ) {
      const handleScroll = scrollSlider(
        {
          galleryItem: galleryItem.current,
          gallerySection: gallerySection.current,
          gallerySectionHeading: gallerySectionHeading.current,
          galleryWrapper: galleryWrapper.current,
          gallery: gallery.current,
          nextSection: nextSection.current,
        },
        galleryItems.length
      );

      window.addEventListener('scroll', handleScroll);

      return function () {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  return (
    <section className={styles.gallerySection} ref={gallerySection}>
      <div className={styles.galleryWrapper} ref={galleryWrapper}>
        <div className='container' ref={gallerySectionHeading}>
          <Heading text='Lorem ipsum dolor sit amet' />
        </div>
        <div className={styles.gallery} ref={gallery}>
          {galleryItems.map((item, index) => (
            <div className={styles.photoWrapper} key={index} ref={index === 0 ? galleryItem : null}>
              <img src={item} alt='img' className={styles.photo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
