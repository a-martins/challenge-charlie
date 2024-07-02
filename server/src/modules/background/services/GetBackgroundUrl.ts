const axios = require("axios").default;

type Image = {
  url: string;
};

type Background = {
  images: Array<Image>;
};

class GetBackgroundUrl {
  public async execute(): Promise<Image> {
    return new Promise<Image>(async (resolve, reject) => {
      try {
        const url = process.env.REACT_APP_BING_IMAGE_ARCHIVE_URL as string;
        const response = (await axios
          .get(`${url}?format=js&idx=0&n=1&mkt=pt-US`)
          .then((response) => {
            return {
              url: `${process.env.REACT_APP_BING_BASE_URL}${response.data.images[0].url}`,
            };
          })) as Image;
        resolve(response);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }
}

export default GetBackgroundUrl;
