import { env } from 'process'
import { flattenAttributes } from "@/lib/utils"

export async function getData(endpoint: string) {
  const apiPath = `${env.NEXT_PUBLIC_STRAPI_URL}${endpoint}`
  const response = await fetch(apiPath)

  if (!response.ok) {
    throw new Error('Failed to fetch page data')
  }

  const data = await response.json();
  const flattenedData = flattenAttributes(data);
  return flattenedData;
}
