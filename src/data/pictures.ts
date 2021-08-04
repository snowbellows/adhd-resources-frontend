export interface Picture {
  id: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    small: {
      ext: string;
      url: string;
      hash: string;
      mime: string;
      name: string;
      path?: number;
      size: number;
      width: number;
      height: number;
    };
    medium: {};
    thumbnail: {};
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: {};
  related: string;
  created_by: string;
  updated_by: string;
}