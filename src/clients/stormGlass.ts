import { AxiosStatic } from 'axios';

export class StormGlass {
  constructor(protected request: AxiosStatic) {}
  public async fetchPoints(lat: number, lng: number): Promise<{}> {
    return this.request.get(
      `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}`,
      {
        headers: {
          Authorization:
            '400d26a6-d25f-11ee-94e4-0242ac130002-400d270a-d25f-11ee-94e4-0242ac130002',
        },
      }
    );
  }
}
