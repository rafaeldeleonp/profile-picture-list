import './style.scss';
import React, { memo } from 'react';
import withWidth from '@material-ui/core/withWidth'; //juat using this util
import InfiniteScroll from 'react-infinite-scroller';
import Image from '../Image';
import { ImageListProps } from './imagelist-definitions';

const SMALL = 'sm';
const XSMALL = 'xs';

function ImageList({
  width,
  data,
  hasMore,
  onClick,
  loadMoreItems,
}: ImageListProps) {
  console.log('WIDTH WIDTH', width);

  return (
    <div className="image-list">
      <InfiniteScroll pageStart={0} hasMore={hasMore} loadMore={loadMoreItems}>
        {data.map((item, index) => {
          const items = [];
          let itemPerRow = 3;

          if (width === SMALL) itemPerRow = 2;
          else if (width === XSMALL) itemPerRow = 1;

          const fromIndex = index * itemPerRow;
          const toIndex = Math.min(fromIndex + itemPerRow, data.length);

          for (let i = fromIndex; i < toIndex; i++) {
            items.push(
              <Image
                id={data[i].id}
                src={data[i].width480}
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

export default withWidth()(memo(ImageList));
