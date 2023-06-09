// unocss.config.ts
import { defineConfig, Preset, presetIcons, presetUno, presetWebFonts, SourceCodeTransformer } from 'unocss';
import type { Theme } from 'unocss/preset-uno';
import presetTheme from 'unocss-preset-theme';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import * as colors from '@radix-ui/colors';
import { rules, shortcuts } from './uno-rules';
// import presetPrimitives from "unocss-preset-primitives";

const colorScale = (colorName) => colorName.replace('Dark', '');
const colorScaleObj = (colorName) => {
  const res = {};
  const color = colors[colorName];
  for (let i = 1; i < 13; i++) {
    const colorScaleName = colorScale(colorName);
    res[i] = color[`${colorScaleName}${i}`];
  }
  return res;
};

const lightColorNames = Object.keys(colors).filter((cn) => !cn.includes('Dark'));
const darkColorNames = Object.keys(colors).filter((cn) => cn.includes('Dark'));

const colorConfig = (listOfColorNames) => {
  const res = {};

  listOfColorNames.forEach((colorName) => {
    const colorScaleName = colorScale(colorName);
    res[colorScaleName] = colorScaleObj(colorName);
  });
  return res;
};

const lightColorsConfig = colorConfig(lightColorNames);
const darkColorsConfig = colorConfig(darkColorNames);

export default defineConfig({
  rules,
  shortcuts,
  transformers: [transformerVariantGroup()],
  theme: {
    colors: {
      ...lightColorsConfig,
      prm: {
        ...colorScaleObj('orange'),
      },
    },
  },
  presets: [
    presetUno({
      dark: 'class',
    }),
    presetIcons(),
    // ...
    // presetPrimitives( {
    //   prefix: 'attr',
    //   variants: 'enable|disable',
    //   selector: 'data-in-path'
    //   isAttrBoolean = true,
    // }),
    presetTheme<Theme>({
      selectors: {
        dark: '.dark',
        light: '.light',
      },
      prefix: '--rdx',
      theme: {
        dark: {
          colors: {
            ...darkColorsConfig,
            prm: {
              ...colorScaleObj('orange'),
            },
          },
        },
      },
    }),
  ],
});
