import fetch from 'node-fetch';

import config from './config';
import { Category } from './categories';
import { Picture } from './pictures';

export interface Tip {
  id: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  title: string;
  content: string;
  author: string;
  picture: Picture;
}

export interface TipWithCategories {
  categories: Category[];
}

export async function getTips(): Promise<TipWithCategories[]> {
  try {
    const tipsResponse = await fetch(`${config.apiBaseUrl}/tips`);
    const tips: TipWithCategories[] = await tipsResponse.json();
    return tips;
  } catch (error) {
    console.error(error);
  }
}
