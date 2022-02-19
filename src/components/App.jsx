import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';
// import Modal from './Modal/Modal';


class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    loading: false,
  }

  handelFormSubmit = searchQuery => {
    this.setState({
      searchQuery,
      page: 1,
    });
  };

  componentDidMount() {
    this.setState({loading: true})
  }

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    // const { loading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handelFormSubmit} />
        <ImageGallery/>
        
        <Loader />
        <Button onLoadMore={this.onLoadMore} />
        {/* <Modal /> */}
      </>
    );
  }
};

export default App;
