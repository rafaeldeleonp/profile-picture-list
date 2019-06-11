interface ImageData {
  id: string;
  width480: string;
  original: string;
  likes: number;
  comments: number;
}

export interface InitialState {
  data: ImageData[];
  hasMore: boolean;
}
