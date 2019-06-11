export interface Image {
  id: string;
  width480: string;
  preview: string;
  likes: number;
  comments: number;
}

export interface ImageListProps {
  data: Image[];
  isFetching: boolean;
  hasMore: boolean;
  onClick(id: string): void;
  loadMoreItems(startIndex: number, stopIndex: number): void;
}

export interface WindowScrollerProps {
  height: number;
}

export interface AutoSizerProps {
  width: number;
  height: number;
}
