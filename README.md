# Modular Rem Scale
Easily configure and generate modular scales in `rem`s.

## Usage
The `ModularRemScale` constructor takes a `config` object with the following properties:

| property | type | description |
|----------|------|-------------|
|`firstPower`|`number`|The power value of the first step in the scale.|
|`ratio`|`number | RatioName`|The ratio to use for the scale.|
|`rootFontSizePx`|`number`|The root font size to use when converting `rem` values to `px`.|

```javascript
import ModularRemScale from '@danscan/modular-scale';

const scale = new ModularRemScale({
  firstPower: -1,
  ratio: 'perfect-fifth',
  rootFontSizePx: 12,
});

scale.getMap(15);
// {
//   '1': '0.67rem',
//   '2': '1.00rem',
//   '3': '1.50rem',
//   '4': '2.25rem',
//   '5': '3.38rem',
//   '6': '5.06rem',
//   '7': '7.59rem',
//   '8': '11.39rem',
//   '9': '17.09rem',
//   '10': '25.63rem',
//   '11': '38.44rem',
//   '12': '57.67rem',
//   '13': '86.50rem',
//   '14': '129.75rem',
//   '15': '194.62rem'
// }

scale.getStepPx(2);
// 12px

scale.getStepPx(3);
// 18px

scale.getStepPx(4);
// 27px
```

## Named Ratios

|       Key        |    Value    |   Decimal Value   |
|------------------|-------------|-------------------|
|`minor-second`    |`16 / 15`    |1.0667             |
|`major-second`    |`9 / 8`      |1.125              |
|`minor-third`     |`6 / 5`      |1.2                |
|`augmented-fourth`|`√2`         |1.4142             |
|`perfect-fifth`   |`3 / 2`      |1.5                |
|`minor-sixth`     |`8 / 5`      |1.6                |
|`golden`          |`1.618033...`|1.61803398875      |
|`phi`             |`1.618033...`|1.61803398875      |
|`major-sixth`     |`5 / 3`      |1.6667             |
|`minor-seventh`   |`16 / 9`     |1.7778             |
|`major-seventh`   |`15 / 8`     |1.875              |
|`octave`          |`2`          |2                  |
|`major-tenth`     |`5 / 2`      |2.5                |
|`major-eleventh`  |`8 / 3`      |2.6667             |
|`major-twelfth`   |`3`          |3                  |
|`double-octave`   |`4`          |4                  |