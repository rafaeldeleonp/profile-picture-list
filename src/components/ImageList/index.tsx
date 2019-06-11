import './style.scss';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Image from '../Image';
import { ImageListProps, AutoSizerProps } from './imagelist-definitions';

const IMAGE_SIZE = 300;
const MARGIN_BOTTOM = 28;

function ImageList({
  data,

  isFetching,
  hasMore,
  onClick,
  loadMoreItems,
}: ImageListProps) {
  return (
    <div className="image-list">
      <InfiniteScroll pageStart={0} hasMore={hasMore} loadMore={loadMoreItems}>
        {data.map((item, index) => {
          const items = [];
          const fromIndex = index * 3;
          const toIndex = Math.min(fromIndex + 3, data.length);

          for (let i = fromIndex; i < toIndex; i++) {
            items.push(
              <Image
                id={data[i].id}
                src={data[i].width480}
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
                likes={data[i].likes}
                comments={data[i].comments}
                onClick={onClick}
              />,
            );
          }

          return <div className="images-container">{items}</div>;
        })}
      </InfiniteScroll>
    </div>
  );

  // const items = [];
  // const fromIndex = index * 3;
  // const toIndex = Math.min(fromIndex + 3, data.length);

  // for (let i = fromIndex; i < toIndex; i++) {
  //   items.push(
  //     <Image
  //       id={data[i].id}
  //       src={data[i].width480}
  //       width={IMAGE_SIZE}
  //       height={IMAGE_SIZE}
  //       likes={data[i].likes}
  //       comments={data[i].comments}
  //       onClick={onClick}
  //     />,
  //   );
  // }

  // return (
  //   <div className="images-container" style={style}>
  //     {items}
  //   </div>
  // );
}

export default ImageList;
