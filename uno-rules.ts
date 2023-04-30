import type { Rule, Shortcut } from 'unocss';
export const rules: Rule[] = [
  // font size utility classes without affecting line height
  ['fs-2xs', { 'font-size': '0.6rem' }],
  ['fs-xs', { 'font-size': '0.75rem' }],
  ['fs-sm', { 'font-size': '0.875rem' }],
  ['fs-md', { 'font-size': '1rem' }],
  ['fs-base', { 'font-size': '1rem' }],
  ['fs-lg', { 'font-size': '1.125rem' }],
  ['fs-xl', { 'font-size': '1.25rem' }],
  ['fs-2xl', { 'font-size': '1.5rem' }],
  ['fs-3xl', { 'font-size': '1.875rem' }],
  ['fs-4xl', { 'font-size': '2.25rem' }],
  ['fs-5xl', { 'font-size': '3rem' }],
  ['fs-6xl', { 'font-size': '3.75rem' }],
  ['fs-7xl', { 'font-size': '4.5rem' }],
  ['fs-8xl', { 'font-size': '6rem' }],
  ['fs-9xl', { 'font-size': '8rem' }],
  // line height utility classes
  ['max-w-main', { 'max-width': 'calc(100vw - var(--sidebar-width) - 3rem)' }],
  ['max-table-width-in-mobile', { 'max-width': 'calc(100vw - 4rem)' }],
  ['w-sidebar', { width: 'var(--sidebar-width)' }],
  ['ls-tightest', { 'letter-spacing': '-0.025em' }],
  ['ls-tighter', { 'letter-spacing': '-0.0125em' }],
  ['ls-tight', { 'letter-spacing': '-0.00625em' }],
  ['ls-normal', { 'letter-spacing': '0' }],
  ['ls-wide', { 'letter-spacing': '0.00625em' }],
  ['ls-wider', { 'letter-spacing': '0.0125em' }],
  ['ls-widest', { 'letter-spacing': '0.025em' }],
  ['rel', { position: 'relative' }],
  ['abs', { position: 'absolute' }],
  ['text-2xs', { 'font-size': '0.6rem', 'line-height': '0.9rem' }],
  [/^content-(.*)$/, ([, cnt]) => ({ content: `"${cnt}"` })],
  [
    /^grid-min-col-(.*)$/,
    ([, minColWidth]) => ({ 'grid-template-columns': `repeat(auto-fill, minmax(min(${minColWidth}, 100%), 1fr))` }),
  ],
];

export const shortcuts: Shortcut[] = [
  {
    'iso-rel': 'relative isolate',
    field: 'px-2 py-1 rd b-1 b-transparent bg-gray3',
    chip: 'no-underline rd-xl px-4 py-2 bg-gray1 c-gray11 hover:(bg-gray2)',
    'chip-link': 'chip data-[in-path=true]:(bg-orange9 c-orange1)',
    jc: 'justify-center',
    jb: 'justify-between',
    ic: 'items-center',
    ac: 'items-center',
    'tab-link': 'b rd-lg text-center  px-4 py-2 hover:(b-orange7 c-orange11) data-[in-path]:(b-orange7 c-orange11)',
    'tab-radix': 'b b-orange6 c-orange11 rd-2xl hover:(b-orange7 c-orange12)  data-[state=active]:(bg-orange3)',
    'btn-disabled': '!c-gray9 !bg-gray5 !b-gray5',
    'btn-prm':
      'b-1   fw-500 px-4 py-1 rd-lg b-orange10 bg-orange10 c-white  hover:(bg-orange9 b-orange9) focus:(bg-orange9 b-orange9) active:(bg-orange11 b-orange9) disabled:(btn-disabled)',
    'btn-danger':
      'b-1 fw-500 px-4 py-1 rd-lg b-red10 bg-red10 c-white  hover:(bg-red9 b-red9) focus:(bg-red9 b-red9) active:(bg-red11 b-red9) disabled:(btn-disabled)',
    'btn-text':
      'b-1  fw-500 px-4 py-1 rd-lg b-transparent bg-transparent c-gray12  hover:(bg-gray2 b-gray2) focus:(bg-gray2 b-gray2) active:(bg-gray3 b-gray3) disabled:(btn-disabled)',
    'btn-text-prm':
      'b-1  fw-500 px-4 py-1 rd-lg b-transparent bg-transparent c-orange11  hover:(bg-orange2 b-orange2) focus:(bg-orange2 b-orange2) active:(bg-orange3 b-orange3) disabled:(btn-disabled)',
    btn: 'b-1   fw-500 px-4 py-1 rd-lg b-gray10 bg-gray10 c-white  hover:(bg-gray9 b-gray9) focus:(bg-gray9 b-gray9) active:(bg-gray11 b-gray9) disabled:(btn-disabled)',
    'btn-ghost-prm':
      ' b-1   fw-500 px-4 py-1 rd-lg b-prm7 c-prm11 active:(b-prm11 bg-prm1) hover:(b-prm9  bg-prm1)  focus:(b-prm9  bg-prm1) disabled:(btn-disabled)',
    'btn-ghost':
      ' b-1 fw-500 px-4 py-1 rd-lg b-gray7 c-gray11 active:(b-gray11 bg-gray1) hover:(b-gray9  bg-gray1)  focus:(b-gray9  bg-gray1) disabled:(btn-disabled)',
    // "btn-link-prm":
    //   " b-1 b-transparent   fw-500 px-4 py-1 rd-lg  c-orange11 active:(b-orange3 bg-orange3) hover:(b-orange2  bg-orange2) focus:(b-orange2 bg-orange2) disabled:(btn-disabled)",
    // "btn-link":
    //   " b-1 b-transparent   fw-500 px-4 py-1 rd-lg  c-gray11 active:(b-gray3 bg-gray3) hover:(b-gray2  bg-gray2) focus:(b-gray2 bg-gray2) disabled:(btn-disabled)",
    'snack-info':
      'text-sm b-1 b-blue7 b-l-4 bg-blue3 c-blue11 rd-lg p-4 pis-12 rel isolate before:(inline-block content-none  i-ph-info vertical-text-top abs top-5 left-4)',
    'snack-warning':
      'text-sm b-1 b-yellow7 b-l-4 bg-yellow3 c-yellow11 rd-lg p-4 pis-12 rel isolate before:(inline-block content-none  i-ph-warning vertical-text-top abs top-5 left-4)',
    'snack-success':
      'text-sm b-1 b-green7 b-l-4 bg-green3 c-green11 rd-lg p-4 pis-12 rel isolate before:(inline-block content-none  i-ph-check-circle vertical-text-top abs top-5 left-4)',
    'snack-error':
      'text-sm b-1 b-red7 b-l-4 bg-red3 c-red11 rd-lg p-4 pis-12 rel isolate before:(inline-block content-none  i-ph-x-circle vertical-text-top abs top-5 left-4)',
    'snack-danger':
      'text-sm b-1 b-red7 b-l-4 bg-red3 c-red11 rd-lg p-4 pis-12 rel isolate before:(inline-block content-none  i-ph-warning-octagon vertical-text-top abs top-5 left-4)',
    'info-line': 'bf-i-ph-info before:c-blue11 before:opacity-100 text-sm c-blue10 ',
    'success-line': 'bf-i-ph-check-circle before:c-green11 before:opacity-100 text-sm c-green10',
    'warning-line': 'bf-i-ph-warning before:c-yellow11 before:opacity-100 text-sm c-yellow10',
    'error-line': 'bf-i-ph-x-circle before:c-red11 before:opacity-100 text-sm c-red10',
    'danger-line': 'bf-i-ph-warning-octagon before:c-red11 before:opacity-100 text-sm c-red10',
    snack: 'b b-gray7 bg-gray3 c-gray11 rd-lg p-4 text-sm',
    H1: 'text-4xl fw-900 ls-tightest c-gray10',
    H2: 'text-3xl fw-900 ls-tight c-gray12',
    H3: 'text-xl fw-900 ls-wide c-gray12 ',
    H4: 'fw-900 ls-widest c-gray12',
    text: 'fw-400 text-base',
    'text-note': 'c-gray11 text-sm',
    'text-tiny-note': 'c-gray11 text-xs',
    'card-ghost': 'rd-xl p-4 b b-gray6',
    'card-solid': 'rd-xl p-4 b b-transparent bg-gray9 ',
    'table-header-cell': 'px-2 py-1 pt-2 first-of-type:(pis-4 rd-tl-xl)  last-of-type:(pie-4  last-of-type:rd-tr-xl)',
    'table-body-cell': 'px-2 py-4 first-of-type:pis-4  last-of-type:pie-4',
    'table-footer-cell':
      'b-gray5 px-2 py-1 pb-3 first-of-type:(pis-4 rd-bl-xl)  last-of-type:(pie-4  last-of-type:rd-br-xl) b-e-1 ',
  },
  [
    /^bf-i-(.*)$/,
    ([, iconName]) =>
      `before:opacity-100 before:mie-2 empty:before:mie-0 before:vertical-middle before:scale-120 -before:translate-y-0.25  before:content-none before:inline-block before:i-${iconName}`,
  ],
  [
    /^af-i-(.*)$/,
    ([, iconName]) =>
      `after:opacity-100 after:mis-2 empty:after:mis-0 after:vertical-middle after:scale-120 -after:translate-y-0.25 after:content-none before:inline-block after:i-${iconName}`,
  ],
  [/^ol-(.*)$/, ([, val]) => `outline-${val}`],
];
