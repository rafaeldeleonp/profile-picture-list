import './style.scss';
import React, { memo, useState, useEffect } from 'react';
import uuid from 'uuid';
import classnames from 'classnames';
import UserInfo from '../../components/UserInfo';
import ListTitle from '../../components/ListTitle';
import ImageList from '../../components/ImageList';
import Modal from '../../components/Modal';
import { InitialState } from './home-definitions';

const LIMIT = 15;
const KEYWORD = 'ferrari';
const URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const INITIAL_STATE: InitialState = {
  data: [],
  hasMore: false,
};

function Home() {
  const [images, setImages] = useState(INITIAL_STATE);
  const [showModal, setModalState] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cls = classnames('home', {
    'showing-modal': showModal,
  });

  const fetchImages = (offset: number = 0, limit: number = LIMIT) => {
    fetch(
      `${URL}/search?q=${KEYWORD}&api_key=${API_KEY}&limit=${limit}&offset=${offset}`,
    ).then(response => {
      if (response.status !== 200) {
        console.log('Error fething images. Status Code: ' + response.status);
        return;
      }

      response
        .json()
        .then(function(gifs) {
          const newImages = gifs.data.map((item: any) => {
            const images = item.images;

            return {
              id: uuid(),
              width480: images['480w_still'].url,
              original: images.original_still.url,
              likes: Math.floor(Math.random() * 99),
              comments: Math.floor(Math.random() * 99),
            };
          });

          setImages({
            data: images.data.concat(newImages),
            hasMore: gifs.pagination.count !== gifs.pagination.total_count,
          });
        })
        .catch(err => {
          setImages({ ...images });
          console.log('Fetch Error', err);
        });
    });
  };

  useEffect(() => {
    setImages({ ...images });

    fetchImages();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const loadMoreItems = (page: number) => {
    const offset = LIMIT * page;

    fetchImages(offset);
  };

  const handleClick = (id: string) => {
    setModalState(true);

    const index = images.data.findIndex(item => item.id === id);

    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    const index = currentIndex - 1;
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const index = currentIndex + 1;
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setModalState(false);
  };

  const isLeftArrowDisabled = currentIndex === 0;
  const isRightArrowDisabled = currentIndex === images.data.length - 1;

  return (
    <div className={cls}>
      <UserInfo
        name="rafael de leon"
        username="@rafaeldeleonp"
        posts={50}
        followers={125}
        description="Software developer. Really passionate in web developing. Can make pixel perfect responsive websites."
      />
      <ListTitle title="posts" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ImageList
          data={images.data}
          hasMore={images.hasMore}
          onClick={handleClick}
          loadMoreItems={loadMoreItems}
        />
      </div>
      {showModal && (
        <Modal
          show={showModal}
          data={{
            id: images.data[currentIndex].id,
            url: images.data[currentIndex].original,
          }}
          disableLeftArrow={isLeftArrowDisabled}
          disableRightArrow={isRightArrowDisabled}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          onClose={handleClose}
        />
      )}
    </div>
  );
}

export default memo(Home);
