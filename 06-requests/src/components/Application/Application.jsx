import { Component } from 'react';

import Loader from 'components/Loader/Loader';
import Gallery from 'components/Gallery/Gallery';
import { getImages } from 'services/api';
import SelectCounty from 'components/SelectCounty/SelectCounty';

const STATUSES = {
  idle: 'IDLE',
  pending: 'PENDING',
  success: 'SUCCESS',
  error: 'ERROR',
};

class Application extends Component {
  state = {
    images: [],
    status: STATUSES.idle,
    count: 0,
    error: '',
  };

  getImagesForGallery = async () => {
    const { count } = this.state;
    try {
      const { data } = await getImages(count);

      this.setState((prevState) => ({
        status: STATUSES.success,
        images: [...prevState.images, ...data.message],
      }));
    } catch (error) {
      this.setState({
        status: STATUSES.error,
        error: error.message,
      });
    } finally {
      this.setState({ count: 0 });
    }
  };

  handleSelect = ({ target: { value } }) => {
    //     console.log('value :>> ', typeof value);
    this.setState({
      count: value,
      status: STATUSES.pending,
      error: '',
    });
  };

  componentDidUpdate(_, prevState) {
    const prevCount = prevState.count;
    const nextCount = this.state.count;

    console.log('componentDidUpdate out');
    if (nextCount === 0) {
      return;
    }

    if (prevCount !== nextCount) {
      console.log('componentDidUpdate in');
      this.getImagesForGallery();
    }
  }

  render() {
    const { images, status, count } = this.state;
    const { handleSelect } = this;
    return (
      <>
        {status === STATUSES.pending && <Loader />}
        {status === STATUSES.error && <h2>ERROR</h2>}
        {/* {status === STATUSES.error ? <h2>ERROR</h2>:<Gallery images={images}/>} */}
        {(status === STATUSES.success ||
          status === STATUSES.idle) && (
          <SelectCounty
            handleSelect={handleSelect}
            value={count}
          />
        )}
        {/* {status === STATUSES.success && ( */}
        <Gallery images={images} />
        {/* )} */}
      </>
    );
  }
}

export default Application;
