import React, { FC, useRef } from 'react';
import Collection from '../components/Collection';
import { collection1, collection2 } from '../api/data';
import Gallery from '../components/Gallery';

const Home: FC = () => {
  const galleryNextSection = useRef<HTMLDivElement>(null);

  return (
    <main className='main-content'>
      <Collection heading='ut aliquip ex ea commodo consequat' items={collection1} />
      <Gallery nextSection={galleryNextSection} />
      <div ref={galleryNextSection} className='gallery-divider'>
        <Collection heading='ut aliquip ex ea commodo consequat' items={collection2} />
      </div>
    </main>
  );
};

export default Home;
