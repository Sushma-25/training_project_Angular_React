import { BusTransport } from './bus-transport';

describe('BusTransport', () => {
  it('should create an instance', () => {
    expect(new BusTransport( 0,""," ")).toBeTruthy();
  });
});
