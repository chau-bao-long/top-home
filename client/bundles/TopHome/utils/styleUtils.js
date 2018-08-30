import { css } from 'styled-components'

export const breakpoint = {
  xxs: (...args) => css`
    @media (max-width: 576px) { ${css(...args)} }
  `,
  xs: (...args) => css`
    @media (max-width: 767.98px) { ${css(...args)} }
  `,
  sm: (...args) => css`
    @media (max-width: 991.98px) { ${css(...args)} }
  `,
  md: (...args) => css`
    @media (max-width: 1199.98px) { ${css(...args)} }
  `,
  lg: (...args) => css`
    @media (min-width: 1200px) { ${css(...args)} }
  `,
}
