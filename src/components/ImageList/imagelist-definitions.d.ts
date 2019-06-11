export interface Image {
  id: string;
  width480: string;
  original: string;
  likes: number;
  comments: number;
}

export interface ImageListProps {
  width: string;
  data: Image[];
  hasMore: boolean;
  onClick(id: string): void;
  loadMoreItems(startIndex: number, stopIndex: number): void;
}
