

export default class Serviсes {
    URL = 'https://gist.githubusercontent.com/lemonspb/fb265b2410dff216d1206776e6b1462b/raw/9094a9ab2d1bd45598f14d0457f7e6075edc5088/'

    getMedList = async (request) => {
      const res = await fetch(`${this.URL}${request}`)
      return await res.json();
    };
  
  }