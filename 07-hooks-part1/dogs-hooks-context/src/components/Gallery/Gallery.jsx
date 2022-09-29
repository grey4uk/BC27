import { useContext } from 'react';
import { SelectContext } from 'components/SelectContext/SelectContext';

const Gallery = () => {
  const { images } = useContext(SelectContext);

  return (
    <ol>
      {images.map((el) => (
        <li key={el}>
          <img src={el} alt='alt' width='300' />
        </li>
      ))}
    </ol>
  );
};

export default Gallery;
