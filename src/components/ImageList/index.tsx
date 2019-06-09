import './style.scss';
import React from 'react';
import { List, WindowScroller, AutoSizer } from 'react-virtualized';
import Image from '../Image';

const IMAGE_SIZE = 300;
const MARGIN_BOTTOM = 28;

interface Image {
  width480: string;
  preview: string;
  likes: number;
  comments: number;
}

interface ImageListProps {
  data: Image[];
  itemCount: number;
  onClick(): void;
  loadMoreItems(startIndex: number, stopIndex: number): void;
}

interface WindowScrollerProps {
  height: number;
}

interface AutoSizerProps {
  width: number;
}

function ImageList({
  data,
  itemCount,
  onClick,
  loadMoreItems,
}: ImageListProps) {
  // const [dataStatus, setDataStatus] = useState([]);

  // const isItemLoaded = (index: number) => {
  //   console.log('DATA iNDEX', index, data[index]);
  //   const status = [];
  //   const fromIndex = index * 3;
  //   const toIndex = Math.min(fromIndex + 3, data.length);
  //   const isLoaded = index <= data.length - 1;

  //   for (let i = fromIndex; i < toIndex; i++) {
  //     const isLoaded = index <= data.length - 1;

  //     status.push();
  //   }

  //   return isLoaded;
  // };

  const rowRenderer = ({ index, style }: any) => {
    const items = [];
    const fromIndex = index * 3;
    const toIndex = Math.min(fromIndex + 3, data.length);

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <Image
          src={data[i].width480}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          likes={data[i].likes}
          comments={data[i].comments}
          onClick={onClick}
        />,
      );
    }

    return (
      <div className="images-container" style={style}>
        {items}
      </div>
    );
  };

  return (
    <WindowScroller>
      {({ height }: WindowScrollerProps) => (
        <AutoSizer disabledHeight={true}>
          {({ width }: AutoSizerProps) => (
            <List
              className="image-list"
              autoHeight={true}
              width={width}
              height={height}
              rowCount={itemCount}
              rowHeight={IMAGE_SIZE + MARGIN_BOTTOM}
              rowRenderer={rowRenderer}
            ></List>
          )}
        </AutoSizer>
      )}
    </WindowScroller>
  );
}

export default ImageList;
