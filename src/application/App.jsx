import React from 'react';
import {
  Wrapper,
} from './StyledComponents';
import Searchbar from './components/searchbar/Searchbar';
import ImageGalleryItem from './components/imageGalleryItem/ImageGalleryItem';
import Modal from './components/modal/Modal';
import Button from './components/button/Button';


const App = () => {
  return (
    <Wrapper>
      <Searchbar/>
      <ImageGalleryItem/>
      <Modal/>
      <Button/>
      ДЩД
    </Wrapper>
  );
};

export default App;
