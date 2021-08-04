import fetch from 'node-fetch';

import config from './config';
import { Tip } from './tips';

export interface Category {
  id: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  description: string;
  name: string;
  slug: string;
}

export interface CategoryWithTips extends Category {
  tips: Tip[];
}

const categoriesUrl = `${config.apiBaseUrl}/categories`;

export async function getCategories(): Promise<Category[]> {
  try {
    const categoriesResponse = await fetch(categoriesUrl);
    const categories: Category[] = await categoriesResponse.json();
    return categories;
  } catch (error) {
    console.error(error);
  }
}

export async function getCategoriesWithTips(): Promise<CategoryWithTips[]> {
  try {
    const categoriesResponse = await fetch(categoriesUrl);
    const categories: Category[] = await categoriesResponse.json();
    const categoryWithTipsRequests = categories.map((category) =>
      fetch(`${config.apiBaseUrl}/categories/${category.slug}/tips`)
    );
    const categoriesWithTipsResponses = await Promise.all(
      categoryWithTipsRequests
    );
    const categoriesWithTipsResults = categoriesWithTipsResponses.map((res) =>
      res.json()
    );
    const categoriesWithTips: CategoryWithTips[] = await Promise.all(
      categoriesWithTipsResults
    );
    return categoriesWithTips;
  } catch (error) {
    console.error(error);
  }
}
