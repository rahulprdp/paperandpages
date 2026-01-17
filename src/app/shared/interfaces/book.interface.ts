export interface Book {
  id: string;
  volumeInfo: VolumeInfo;
}

interface VolumeInfo {
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  pageCount: number;
  categories: string[];
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  language: string;
  infoLink: string;
}