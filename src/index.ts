import ratios from './ratios';

export type RatioName = keyof typeof ratios;
export type RatioInput = number | RatioName;

type ModularRemScaleConfiguration = {
  firstPower: number;
  ratio: RatioInput;
  rootFontSizePx: number;
};

export type ModularRemScaleMap = { [step: string]: string };

export default class ModularRemScale {
  firstPower: number;

  ratio: number;

  rootFontSizePx: number;

  constructor({
    rootFontSizePx,
    firstPower,
    ratio,
  }: ModularRemScaleConfiguration) {
    const ratioValue = typeof ratio === 'number' ? ratio : ratios[ratio];

    this.rootFontSizePx = rootFontSizePx;
    this.firstPower = firstPower;
    this.ratio = ratioValue;
  }

  stepPower(step: number): number {
    return step + this.firstPower - 1;
  }

  scalePowerValue(power: number): string {
    return (this.ratio ** power).toFixed(2);
  }

  getMap(steps: number): ModularRemScaleMap {
    const map: ModularRemScaleMap = {};

    // Build rem scale of steps 1 to 15 (powers -1 to 13)
    for (let step = 1; step <= steps; step++) {
      map[step] = `${(this.ratio ** this.stepPower(step)).toFixed(2)}rem`;
    }

    return map;
  }

  getStepPx(step: number): string {
    const value = (
      this.rootFontSizePx *
      this.ratio ** this.stepPower(step)
    ).toFixed(0);

    return `${value}px`;
  }
}
