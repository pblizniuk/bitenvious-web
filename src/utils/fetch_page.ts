import { env } from 'process'
import { flattenAttributes } from "@/lib/utils"
import { getStrapiURL } from "@/lib/utils"

export async function getData(endpoint: string) {
  const apiPath = `${getStrapiURL()}${endpoint}`
  const response = await fetch(apiPath, { next: { revalidate: 86400 } })

  if (!response.ok) {
    throw new Error('Failed to fetch page data')
  }

  const data = await response.json();
  const flattenedData = flattenAttributes(data);
  return flattenedData;
}
