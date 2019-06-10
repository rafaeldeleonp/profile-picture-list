import './style.scss';
import React, { memo, useState, useEffect, useCallback } from 'react';
import uuid from 'uuid';
import SVG from 'react-inlinesvg';
import LogoThreeDots from '../../resources/svg/logo-three-dots.svg';
import UserInfo from '../../components/UserInfo';
import ListTitle from '../../components/ListTitle';
import ImageList from '../../components/ImageList';
import Modal from '../../components/Modal';
import { InitialState } from './home-definitions';

const LIMIT = 15;
const KEYWORD = 'ferrari';
const URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const DATA = [
  {
    id: uuid(),
    preview: 'https://media0.giphy.com/media/4PJTK4kgNXgiI/100_s.gif',
    width480: 'https://media2.giphy.com/media/4PJTK4kgNXgiI/480w_s.jpg',
    likes: 5,
    comments: 33,
  },
  {
    id: uuid(),
    preview: 'https://media0.giphy.com/media/UAQut6DhqasaQ/100_s.gif',
    width480: 'https://media3.giphy.com/media/UAQut6DhqasaQ/480w_s.jpg',
    likes: 15,
    comments: 40,
  },
  {
    id: uuid(),
    preview: 'https://media3.giphy.com/media/xTiTnFtDzaTqw7D2Io/100_s.gif',
    width480: 'https://media4.giphy.com/media/xTiTnFtDzaTqw7D2Io/480w_s.jpg',
    likes: 55,
    comments: 1,
  },
  {
    id: uuid(),
    preview: 'https://media0.giphy.com/media/F6I9NoTZQps40/100_s.gif',
    width480: 'https://media3.giphy.com/media/F6I9NoTZQps40/480w_s.jpg',
    likes: 20,
    comments: 3,
  },
  {
    id: uuid(),
    preview: 'https://media0.giphy.com/media/bfd8hxbntgfBu/100_s.gif',
    width480: 'https://media0.giphy.com/media/bfd8hxbntgfBu/480w_s.jpg',
    likes: 15,
    comments: 40,
  },
  {
    id: uuid(),
    preview: 'https://media3.giphy.com/media/W2IWzXp4gemfS/100_s.gif',
    width480: 'https://media4.giphy.com/media/W2IWzXp4gemfS/480w_s.jpg',
    likes: 15,
    comments: 40,
  },
  {
    id: uuid(),
    preview: 'https://media3.giphy.com/media/BBf9D5OT3gc00/100_s.gif',
    width480: 'https://media3.giphy.com/media/BBf9D5OT3gc00/480w_s.jpg',
    likes: 15,
    comments: 40,
  },
  {
    id: uuid(),
    preview: 'https://media3.giphy.com/media/zu1AaqdB5LBks/100_s.gif',
    width480: 'https://media3.giphy.com/media/zu1AaqdB5LBks/480w_s.jpg',
    likes: 15,
    comments: 40,
  },
  {
    id: uuid(),
    preview: 'https://media1.giphy.com/media/13hjj7WhRIEcQo/100_s.gif',
    width480: 'https://media0.giphy.com/media/13hjj7WhRIEcQo/480w_s.jpg',
    likes: 15,
    comments: 40,
  },
  {
    id: uuid(),
    preview: 'https://media0.giphy.com/media/H7NXpSiEmGqgE/100_s.gif',
    width480: 'https://media0.giphy.com/media/H7NXpSiEmGqgE/480w_s.jpg',
    likes: 15,
    comments: 40,
  },
  {
    id: uuid(),
    preview: 'https://media3.giphy.com/media/S7jKEqmTbee7S/100_s.gif',
    width480: 'https://media3.giphy.com/media/S7jKEqmTbee7S/480w_s.jpg',
    likes: 15,
    comments: 40,
  },
  {
    id: uuid(),
    preview: 'https://media3.giphy.com/media/xA9yMCr2cT2a4/100_s.gif',
    width480: 'https://media0.giphy.com/media/xA9yMCr2cT2a4/480w_s.jpg',
    likes: 15,
    comments: 40,
  },
  {
    id: uuid(),
    preview: 'https://media1.giphy.com/media/TeXVQ0AFBukqA/100_s.gif',
    width480: 'https://media2.giphy.com/media/TeXVQ0AFBukqA/480w_s.jpg',
    likes: 15,
    comments: 40,
  },
  {
    id: uuid(),
    preview: 'https://media3.giphy.com/media/iJDLBX5GY8niCpZYkR/100_s.gif',
    width480: 'https://media4.giphy.com/media/iJDLBX5GY8niCpZYkR/480w_s.jpg',
    likes: 15,
    comments: 40,
  },
  {
    id: uuid(),
    preview: 'https://media3.giphy.com/media/3kcZBP33hHbhu/100_s.gif',
    width480: 'https://media4.giphy.com/media/3kcZBP33hHbhu/480w_s.jpg',
    likes: 15,
    comments: 40,
  },
  {
    id: uuid(),
    preview: 'https://media3.giphy.com/media/3kcZBP33hHbhu/100_s.gif',
    width480: 'https://media4.giphy.com/media/3kcZBP33hHbhu/480w_s.jpg',
    likes: 15,
    comments: 40,
  },
];

const INITIAL_STATE: InitialState = {
  data: [],
  count: 0,
  totalCount: 0,
  skip: 0,
  isFetching: false,
};

function Home() {
  const [images, setImages] = useState(INITIAL_STATE);
  const [showModal, setModalState] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // const fetchImages = (offset: number = 0, limit: number = LIMIT) => {
  //   fetch(
  //     `${URL}/search?q=${KEYWORD}&api_key=${API_KEY}&limit=${limit}&offset=${offset}`,
  //   ).then(response => {
  //     if (response.status !== 200) {
  //       console.log('Error fething images. Status Code: ' + response.status);
  //       return;
  //     }

  //     response
  //       .json()
  //       .then(function(gifs) {
  //         const newImages = gifs.data.map((item: any) => {
  //           const images = item.images;

  //           return {
  //             width480: images['480w_still'].url,
  //             preview: images.fixed_height_small_still.url,
  //           };
  //         });

  //         setImages({
  //           data: images.data.concat(newImages),
  //           count: gifs.pagination.count,
  //           totalCount: gifs.pagination.total_count,
  //           skip: offset,
  //           isFetching: false,
  //         });
  //       })
  //       .catch(err => {
  //         setImages({ ...images, isFetching: false });
  //         console.log('Fetch Error', err);
  //       });
  //   });
  // };

  // useEffect(() => {
  //   setImages({ ...images, isFetching: true });

  //   fetchImages();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const loadMoreItems = (startIndex: number, stopIndex: number) => {
    const limit = stopIndex - startIndex;
    const offset = images.skip + images.count;

    // debugger;

    // return fetchImages(offset, limit);
  };

  const handleClick = (id: string) => {
    setModalState(true);

    const index = DATA.findIndex(item => item.id === id);

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
  const isRightArrowDisabled = currentIndex === DATA.length - 1;

  return (
    <div className="home">
      <UserInfo
        name="rafael de leon"
        username="@rafaeldleonp"
        posts={50}
        followers={125}
        description="Software developer. Really passionate in web developing. Can make pixel perfect responsive websites."
      />
      <ListTitle title="posts" />
      <ImageList
        data={DATA}
        itemCount={DATA.length / 3}
        onClick={handleClick}
        loadMoreItems={loadMoreItems}
      />
      {showModal && (
        <Modal
          show={showModal}
          data={{
            id: DATA[currentIndex].id,
            url: DATA[currentIndex].width480,
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
