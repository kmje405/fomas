/* lib/sanity/image.ts */
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

type ImageUrlBuilder = ReturnType<typeof imageUrlBuilder>;
type ImageSource = Parameters<ImageUrlBuilder["image"]>[0];

export const urlFor = (source: ImageSource) =>
  imageUrlBuilder(client).image(source);