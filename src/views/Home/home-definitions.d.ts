interface ImageData {
  id: string;
  width480: string;
  preview: string;
  likes: number;
  comments: number;
}

export interface InitialState {
  data: ImageData[];
  isFetching: boolean;
  hasMore: boolean;
}
