import fetch from 'node-fetch';

import config from './config';
import { Picture } from './pictures';

export interface Page {
  id: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  name: string;
  content: string;
  slug: string;
  coverPicture: Picture;
}

export async function getPage(slug: string): Promise<Page> {
  try {
    const tipsResponse = await fetch(`${config.apiBaseUrl}/pages/${slug}`);
    const page: Page = await tipsResponse.json();
    return page;
  } catch (error) {
    console.error(error);
  }
}
