import { UNSPLASH_ACCESS_KEY } from "../../config";
import { createApi } from "unsplash-js";
const unsplash = createApi({
  accessKey: UNSPLASH_ACCESS_KEY,
});

export const getPhotos = (page = 1, perPage = 50) => {
  return unsplash.photos.list({ page, perPage });
};
