import './about.css';
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    peek: 20,
    gap: 16,
  }).mount({ Controls, Breakpoints }) 


