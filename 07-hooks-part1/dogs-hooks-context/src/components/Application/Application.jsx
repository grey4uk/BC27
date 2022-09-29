import { useState, useContext, useEffect } from 'react';
import { getImages } from 'services/api';
import { SelectContext } from 'components/SelectContext/SelectContext';
import Loader from 'components/Loader/Loader';
import Gallery from 'components/Gallery/Gallery';
import SelectCounty from 'components/SelectCounty/SelectCounty';

const STATUSES = {
  idle: 'IDLE',
  pending: 'PENDING',
  success: 'SUCCESS',
  error: 'ERROR',
};

const Application = () => {
  const { count, handleSelect, setImages } =
    useContext(SelectContext);
  const [status, setStatus] = useState(STATUSES.idle);
  const [error, setError] = useState('');

  useEffect(() => {
    if (count) {
      const getImagesForGallery = async () => {
        try {
          const { data } = await getImages(count);
          setStatus(STATUSES.success);
          setImages((prev) => [...prev, ...data.message]);
        } catch (error) {
          setStatus(STATUSES.error);
          setError(error.message);
        } finally {
          handleSelect(0);
        }
      };
      getImagesForGallery();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.error && <h2>{error}</h2>}
      {(status === STATUSES.success ||
        status === STATUSES.idle) && <SelectCounty />}

      <Gallery />
    </>
  );
};

export default Application;
