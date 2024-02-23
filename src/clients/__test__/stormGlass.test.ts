import { StormGlass } from '@src/clients/stormGlass';

describe('StormGlass client', () => {
  it('it should return the normalize forecast from the StormGlass service', async () => {
    const lat = -32.323232;
    const lng = 151.323232;

    const stormGlass = new StormGlass();
    const response = await stormGlass.fetchPoints(lat, lng);
  });
});
