const Gallery = ({ images }) => {
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
