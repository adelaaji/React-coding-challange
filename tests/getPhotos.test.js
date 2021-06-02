import { getPhotos } from "../api/unsplash";

describe("check get photos", () => {
  test("Check if we can get photos", async () => {
    const { response, originalResponse, errors } = await getPhotos();
    expect(response.results.length > 0).toBeTruthy();
  });
});
