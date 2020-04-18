/* global describe, expect, it */
import ModularRemScale from '../src/index';

describe('ModularRemScale', () => {
  const scale = new ModularRemScale({
    firstPower: -1,
    ratio: 'perfect-fifth',
    rootFontSizePx: 12,
  });

  it('returns the expected map', () => {
    const scaleMap = scale.getMap(15);

    expect(scaleMap['3']).toBe('1.50rem');
    expect(scaleMap['4']).toBe('2.25rem');
    expect(scaleMap['5']).toBe('3.38rem');
    expect(scaleMap['15']).toBe('194.62rem');
  });

  it('generates the configured number of steps', () => {
    const scaleMap = scale.getMap(15);

    expect(scaleMap['15']).toBeDefined();
    expect(scaleMap['16']).toBeUndefined();
  });

  it('correctly converts scaleMap values to pixels', () => {
    expect(scale.getStepPx(1)).toBe('8px');
    expect(scale.getStepPx(2)).toBe('12px');
    expect(scale.getStepPx(3)).toBe('18px');
    expect(scale.getStepPx(11)).toBe('461px');
    expect(scale.getStepPx(12)).toBe('692px');
    expect(scale.getStepPx(13)).toBe('1038px');
  });
});
