import { createGlobalStyle } from 'styled-components'
import DMSans from '@/assets/font/DMSans.ttf'

export const FontStyle = createGlobalStyle`
  @font-face {
    font-family: DMSans;
    src: local('DMSans'), local('DMSans'),
    url(${DMSans}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
`
