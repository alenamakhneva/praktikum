import './about.css';
import Glide, {
  Controls,
  Breakpoints,
  Swipe
} from '@glidejs/glide/dist/glide.modular.esm'

new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  peek: 88,
  breakpoints: {
    640: {
      perView: 1
    },
    1024: {
      perView: 2
    },
    1440: {
      perView: 3
    }
  }
}).mount({
  Controls,
  Breakpoints,
  Swipe
})