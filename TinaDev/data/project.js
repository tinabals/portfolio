
import ChuuseImage from '~/assets/images/projects/chuuse.webp'
import PenalougeWaiting from '~/assets/images/projects/penalogue.webp'
import BettingPlatform from '~/assets/images/projects/bettingplatform.png'
import MobileBettingPlatform from '~/assets/images/projects/mobileapp.png'
import WeatherApp from '~/assets/images/projects/weatherapp.png'
import RandomPassWordGenerator from '~/assets/images/projects/password-generator.png'
import ImageGallery from '~/assets/images/projects/imagegallery.png'
import Movie from '~/assets/images/projects/movie.png'

export const projects = [
  {
    name: 'Movie App',
    description: '',
    image: Movie,
    link: 'https://hng-x-stage-two-qt5i-xb7w7tnk7-tinabals.vercel.app/',
    stack: ['React', 'CSS'],
    imageAlt: 'Movie',
  },
  {
    name: 'Betting Platform',
    description: '',
    image: BettingPlatform,
    link: 'https://shop.fortunebetng.com/',
    stack: ['Nuxt', 'Vuex', 'bootstrap'],
    imageAlt: 'Chuuse, Adegoke Temitope',
  },
  {
    name: 'Mobile Betting Platform App',
    description: '',
    image: MobileBettingPlatform,
    link: 'https://m.fortunebetng.com/',
    stack: ['Nuxt', 'Vuex', 'bootstrap'],
    imageAlt: 'Chuuse, Adegoke Temitope',
  },
  {
    name: 'Penalogue Waiting',
    description:
      'The waiting platform uses Firebase on the backend. The frontend is built with HTML, CSS, Tailwind and JavaScript. No framework by choice ',
    image: PenalougeWaiting,
    link: 'https://www.penalogue.com/',
    stack: ['HTML', 'CSS', 'JavaScript', 'Github', 'Tailwind'],
    imageAlt: 'Penalouge Waiting developed by Damilola Balogun',
  },
  {
    name: 'Weather App',
    description: 'A weather app that displays the current weather of cities searched for built with HTML, CSS, Javascript',
    image: WeatherApp,
    link: 'https://deft-yeot-9638a2.netlify.app/',
    stack: ['HTML', 'CSS', 'Javascript'],
    imageAlt: 'Weather app Balogun Damilola',
  },
  {
    name: 'Random Password Generator',
    description: 'The password generator is built with HTML, CSS, Javascript',
    image: RandomPassWordGenerator,
    link: 'https://lighthearted-douhua-c01522.netlify.app/',
    stack: ['HTML', 'CSS', 'Javascript'],
    imageAlt: 'Password Generator Balogun Damilola',
  },
  {
    name: 'Drag and Drop Image Gallery ',
    description: 'The Drag and Drop image gallery app uses firebase on backend. The frontend is built with React, Tailwind',
    image: ImageGallery,
    link: 'https://image-gallery-seven-beta.vercel.app/',
    stack: ['React', 'Tailwind', 'Firebase'],
    imageAlt: 'Password Generator Balogun Damilola',
  },
  {
    name: 'Chuuse',
    description: '',
    image: ChuuseImage,
    link: 'https://chuuse.org',
    stack: ['Vue', 'Tailwind'],
    imageAlt: 'Chuuse, Damilola Balogun',
  },

]

export const personalProjects = []
