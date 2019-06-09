import './style.scss';
import React, { useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { AutoSizer } from 'react-virtualized';
import omit from 'lodash/omit';

const IMAGE_SIZE = 294;
const MARGIN_BOTTOM = 28;

interface Image {
  width480: string;
  preview: string;
}

interface ImageListProps {
  data: Image[];
  itemCount: number;
  loadMoreItems(startIndex: number, stopIndex: number): void;
}

interface AutoSizerProps {
  width: number;
  height: number;
}

function ImageList({ data, itemCount, loadMoreItems }: ImageListProps) {
  const [dataStatus, setDataStatus] = useState([]);

  const isItemLoaded = (index: number) => {
    console.log('DATA iNDEX', index, data[index]);
    const status = [];
    const fromIndex = index * 3;
    const toIndex = Math.min(fromIndex + 3, data.length);
    const isLoaded = index <= data.length - 1;

    for (let i = fromIndex; i < toIndex; i++) {
      const isLoaded = index <= data.length - 1;

      status.push();
    }

    return isLoaded;
  };

  return (
    <AutoSizer>
      {({ width, height }: AutoSizerProps) => (
        // <InfiniteLoader
        //   isItemLoaded={isItemLoaded}
        //   itemCount={itemCount}
        //   minimumBatchSize={15}
        //   loadMoreItems={loadMoreItems}
        // >
        //   {({ onItemsRendered, ref }: any) => (
        <List
          // ref={ref}
          className="image-list"
          width={width}
          height={height}
          itemCount={itemCount}
          itemSize={IMAGE_SIZE + MARGIN_BOTTOM}
          // onItemsRendered={onItemsRendered}
        >
          {({ index, style }: any) => {
            const items = [];
            const fromIndex = index * 3;
            const toIndex = Math.min(fromIndex + 3, data.length);

            for (let i = fromIndex; i < toIndex; i++) {
              items.push(
                <img
                  className="img"
                  src={data[i].width480}
                  alt="La otra foto"
                  width={IMAGE_SIZE}
                  height={IMAGE_SIZE}
                />,
              );
            }

            return (
              <div className="images-container" style={style}>
                {items}
              </div>
            );
          }}
        </List>
      )}
      {/* </InfiniteLoader>
      )} */}
    </AutoSizer>
  );
}

export default ImageList;
