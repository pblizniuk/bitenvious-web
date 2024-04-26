export function flattenAttributes(data: any): any {
  // Check if data is a plain object; return as is if not
  if (
    typeof data !== "object" ||
    data === null ||
    data instanceof Date ||
    typeof data === "function"
  ) {
    return data;
  }

  // If data is an array, apply flattenAttributes to each element and return as array
  if (Array.isArray(data)) {
    return data.map((item) => flattenAttributes(item));
  }

  // Initialize an object with an index signature for the flattened structure
  let flattened: { [key: string]: any } = {};

  // Iterate over each key in the object
  for (let key in data) {
    // Skip inherited properties from the prototype chain
    if (!data.hasOwnProperty(key)) continue;

    // If the key is 'attributes' or 'data', and its value is an object, merge their contents
    if (
      (key === "attributes" || key === "data") &&
      typeof data[key] === "object" &&
      !Array.isArray(data[key])
    ) {
      Object.assign(flattened, flattenAttributes(data[key]));
    } else {
      // For other keys, copy the value, applying flattenAttributes if it's an object
      flattened[key] = flattenAttributes(data[key]);
    }
  }

  return flattened;
}

export function getStrapiURL() {
  return process.env.NEXT_PUBLIC_STRAPI_URL ?? "https://kind-hodgkin.216-225-194-227.plesk.page";
}

export function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${getStrapiURL()}${url}`;
}

export function categoryHelper(categoryId: number) {
  let categoryGradient;
  let categoryColor;
  let categoryIcon;
  if (categoryId === 1) {
    categoryGradient = 'from-pink-500 to-fuchsia-600';
    categoryIcon = 'digitalMarketing'
    categoryColor = 'text-pink-500'
  } else if (categoryId === 2) {
    categoryGradient = 'from-lime-500 to-green-600';
    categoryIcon = 'design'
    categoryColor = 'text-lime-500'
  } else if (categoryId === 3) {
    categoryGradient = 'from-orange-500 to-red-600';
    categoryIcon = 'brandIdentity'
    categoryColor = 'text-orange-500'
  } else if (categoryId === 4) {
    categoryGradient = 'from-blue-500 to-indigo-600';
    categoryIcon = 'development'
    categoryColor = 'text-blue-500'
  } else if (categoryId === 5) {
    categoryGradient = 'from-stone-500 to-stone-600';
    categoryIcon = 'other'
    categoryColor = 'text-stone-500'
  }  else {
    categoryGradient = 'from-stone-500 to-stone-600';
    categoryIcon = 'other'
    categoryColor = 'text-stone-500'
  }
  return {categoryGradient, categoryIcon, categoryColor};
}