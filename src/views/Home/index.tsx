import './style.scss';
import React, { memo, useState, useEffect } from 'react';
import SVG from 'react-inlinesvg';
import ThreeDots from '../../resources/svg/logo-three-dots.svg';
import UserInfo from '../../components/UserInfo';
import ImageList from '../../components/ImageList';
import Modal from '../../components/Modal';
import { InitialState } from './home-definitions';

const LIMIT = 15;
const KEYWORD = 'ferrari';
const URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const SLIDES = [
  {
    title: 'title 1',
    url: '/public/images/ferrari.jpeg',
    displayName: 'display name 1',
  },
  {
    title: 'title 2',
    url: '/public/images/ferrari.jpeg',
    displayName: 'display name 2',
  },
  {
    title: 'title 3',
    url: '/public/images/ferrari.jpeg',
    displayName: 'display name 3',
  },
  {
    title: 'title 4',
    url: '/public/images/ferrari.jpeg',
    displayName: 'display name 4',
  },
  {
    title: 'title 5',
    url: '/public/images/ferrari.jpeg',
    displayName: 'display name 5',
  },
];

const DATA = [
  {
    preview: 'https://media0.giphy.com/media/4PJTK4kgNXgiI/100_s.gif',
    width480: 'https://media2.giphy.com/media/4PJTK4kgNXgiI/480w_s.jpg',
  },
  {
    preview: 'https://media0.giphy.com/media/UAQut6DhqasaQ/100_s.gif',
    width480: 'https://media3.giphy.com/media/UAQut6DhqasaQ/480w_s.jpg',
  },
  {
    preview: 'https://media3.giphy.com/media/xTiTnFtDzaTqw7D2Io/100_s.gif',
    width480: 'https://media4.giphy.com/media/xTiTnFtDzaTqw7D2Io/480w_s.jpg',
  },
  {
    preview: 'https://media0.giphy.com/media/F6I9NoTZQps40/100_s.gif',
    width480: 'https://media3.giphy.com/media/F6I9NoTZQps40/480w_s.jpg',
  },
  {
    preview: 'https://media0.giphy.com/media/bfd8hxbntgfBu/100_s.gif',
    width480: 'https://media0.giphy.com/media/bfd8hxbntgfBu/480w_s.jpg',
  },
  {
    preview: 'https://media3.giphy.com/media/W2IWzXp4gemfS/100_s.gif',
    width480: 'https://media4.giphy.com/media/W2IWzXp4gemfS/480w_s.jpg',
  },
  {
    preview: 'https://media3.giphy.com/media/BBf9D5OT3gc00/100_s.gif',
    width480: 'https://media3.giphy.com/media/BBf9D5OT3gc00/480w_s.jpg',
  },
  {
    preview: 'https://media3.giphy.com/media/zu1AaqdB5LBks/100_s.gif',
    width480: 'https://media3.giphy.com/media/zu1AaqdB5LBks/480w_s.jpg',
  },
  {
    preview: 'https://media1.giphy.com/media/13hjj7WhRIEcQo/100_s.gif',
    width480: 'https://media0.giphy.com/media/13hjj7WhRIEcQo/480w_s.jpg',
  },
  {
    preview: 'https://media0.giphy.com/media/H7NXpSiEmGqgE/100_s.gif',
    width480: 'https://media0.giphy.com/media/H7NXpSiEmGqgE/480w_s.jpg',
  },
  {
    preview: 'https://media3.giphy.com/media/S7jKEqmTbee7S/100_s.gif',
    width480: 'https://media3.giphy.com/media/S7jKEqmTbee7S/480w_s.jpg',
  },
  {
    preview: 'https://media3.giphy.com/media/xA9yMCr2cT2a4/100_s.gif',
    width480: 'https://media0.giphy.com/media/xA9yMCr2cT2a4/480w_s.jpg',
  },
  {
    preview: 'https://media1.giphy.com/media/TeXVQ0AFBukqA/100_s.gif',
    width480: 'https://media2.giphy.com/media/TeXVQ0AFBukqA/480w_s.jpg',
  },
  {
    preview: 'https://media3.giphy.com/media/iJDLBX5GY8niCpZYkR/100_s.gif',
    width480: 'https://media4.giphy.com/media/iJDLBX5GY8niCpZYkR/480w_s.jpg',
  },
  {
    preview: 'https://media3.giphy.com/media/3kcZBP33hHbhu/100_s.gif',
    width480: 'https://media4.giphy.com/media/3kcZBP33hHbhu/480w_s.jpg',
  },
  {
    preview: 'https://media3.giphy.com/media/3kcZBP33hHbhu/100_s.gif',
    width480: 'https://media4.giphy.com/media/3kcZBP33hHbhu/480w_s.jpg',
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

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setModalState(true);
  };

  const handleClose = () => {
    setModalState(false);
  };

  return (
    <div className="home">
      <UserInfo
        picture="/images/profile.png"
        name="rafael de leon"
        username="@rafaeldleonp"
        posts={50}
        followers={125}
        description="Software developer. Really passionate in web developing. Can make response websites pixel perfect."
      />
      <div className="list-header-container">
        <div className="list-header-content">
          <span className="dot" style={{ backgroundColor: '#46f0f0' }} />
          <span className="dot" style={{ backgroundColor: '#f032e6' }} />
          <span className="dot" style={{ backgroundColor: '#ffe119' }} />
          <h1>posts</h1>
          <span className="dot" style={{ backgroundColor: '#000000' }} />
        </div>
      </div>
      <ImageList
        data={DATA}
        itemCount={DATA.length / 3}
        loadMoreItems={loadMoreItems}
      />
      {showModal && (
        <Modal
          show={showModal}
          slides={SLIDES}
          offset={15}
          onClose={handleClose}
        />
      )}
    </div>
  );
}

export default memo(Home);
