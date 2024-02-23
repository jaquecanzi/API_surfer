import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios'

jest.mock('axios')

describe('StormGlass client', () => {
  it('it should return the normalize forecast from the StormGlass service', async () => {
    const lat = -32.323232;
    const lng = 151.323232;

    axios.get = jest.fn().mockResolvedValue({})

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);

    expect(response).toEqual({});
  });
});
