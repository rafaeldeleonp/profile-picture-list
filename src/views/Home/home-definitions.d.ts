interface ImageData {
  width480: string;
  preview: string;
}

export interface InitialState {
  data: ImageData[];
  count: number;
  totalCount: number;
  skip: number;
  isFetching: boolean;
}
