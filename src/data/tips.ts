import fetch from 'node-fetch';

import { Category } from './categories';

export interface Tip {
  id: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  title: string;
  content: string;
  author: string;
  pictures: Picture[];
}

export interface TipWithCategories {
  categories: Category[];
}

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

export async function getTips(): Promise<TipWithCategories[]> {
  try {
    const tipsResponse = await fetch('http://localhost:1337/tips');
    const tips: TipWithCategories[] = await tipsResponse.json();
    return tips;
  } catch (error) {
    console.error(error);
  }
}
