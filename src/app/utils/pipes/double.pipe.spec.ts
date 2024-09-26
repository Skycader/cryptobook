import { DoublePipe } from './utils/pipes/double.pipe';

describe('DoublePipe', () => {
  it('create an instance', () => {
    const pipe = new DoublePipe();
    expect(pipe).toBeTruthy();
  });
});
