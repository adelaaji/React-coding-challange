import nodeFetch from "node-fetch";
import { UNSPLASH_ACCESS_KEY } from "../../config";
import { createApi } from "unsplash-js";
const unsplash = createApi({
  accessKey: UNSPLASH_ACCESS_KEY,
  fetch: nodeFetch,
});

export const getPhotos = (page = 1, perPage = 20) => {
  return unsplash.photos.list({ page, perPage });
};
