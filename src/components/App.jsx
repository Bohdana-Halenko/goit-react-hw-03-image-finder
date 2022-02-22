import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Error from './Error/Error';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from 'services/imagesApi';

const status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

export default class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    error: '',
    status: status.IDLE,
  };

  handelFormSubmit = searchQuery => {
    this.setState({
      searchQuery,
      page: 1,
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) { 
    const prevImages = prevState.searchQuery;
    const nextImages = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevImages !== nextImages) {
      this.setState({
        status: status.PENDING, page: 1, images: [], });
      this.fetchGallery(nextImages, nextPage);
    }

    if (prevPage !== nextPage && nextPage !== 1) {
      this.fetchGallery(nextImages, nextPage);
    }

    // if (nextPage >= 1) {
    //   window.scrollTo({
    //     top: document.documentElement.scrollHeight,
    //     behavior: 'smooth',
    //   });
    // }
  }
 
  fetchGallery(nextImages, nextPage) {
    Api.fetchGallery(nextImages, nextPage)
        .then(data => {this.setState(prevState => {
          return {
            prevState,
            images: [...prevState.images, ...data.hits],
            status: status.RESOLVED,
            searchQuery: nextImages,
          };
        });
      })
      .catch(error => this.setState({ error, status: status.REJECTED }));
  }

  render() {
    const { images, status} = this.state;

    if (status === status.IDLE) {
      return (
      <>
        <Searchbar onSubmit={this.handelFormSubmit} />
        <ToastContainer autoClose={5000} theme={'colored'} />
      </>)
    }

    if (status === status.PENDIND) { 
      return (
        <Loader />
      );
    }

    if (status === status.REJECTED) { 
      return (
        <Error message={this.error.message }/>);
    }

    if (status === status.RESOLVED) {
      return (
        <div>
          <Searchbar onSubmit={this.handelFormSubmit} />
          <ImageGallery images={images}/>

          {images.length !== 0 && (
              <Button onLoadMore={this.onLoadMore} />
          )}
          <ToastContainer autoClose={5000} theme={'colored'} />
        </div>
      );
    }
  }
};

// export default App;
