<template>
  <div id="base" class="">
    <div class="lg:h-screen w-full">
      <div class="spacing h-full lg:flex">
        <nav
          class="h-full lg:flex hidden justify-center items-center fixed left-10"
        >
          <div class="space-y-8">
            <a
              href="#base"
              data-title="Base"
              class="nav-dot selected-circle"
            ></a>
            <a href="#about" data-title="About" class="nav-dot"></a>
            <a href="#projects" data-title="projects" class="nav-dot"></a>
            <a
              href="#work-history"
              data-title="Work History"
              class="nav-dot"
            ></a>
            <a href="#contact" data-title="Contact" class="nav-dot"></a>
          </div>
        </nav>
        <div class="flex h-full center lg:w-8/12">
          <div>
            <h1
              class="dark:text-white text-brand-dark-body font-bold text-5xl md:text-6xl lg:text-7xl text-center lg:text-left mt-5"
            >
              Building user centered, scalable, and accessible web apps
            </h1>
            <div class="w-full flex justify-center lg:justify-start mt-12">
              <a
                href="#projects"
                class="rounded px-8 py-4 hover:bg-brand-primary hover:text-brand-dark-body transition-colors saturate-200 border-2 border-brand-primary text-brand-primary font-bold flex items-center space-x-3"
              >
                <svg
                  className="w-7 h-7"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  ></path>
                  <path
                    d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"
                  ></path>
                </svg>
                <span>View my works.</span>
              </a>
            </div>
          </div>
        </div>
        <!-- <div class="mt-10 md:mt-0 md:w-4/12 flex h-full center transition duration-200 fadeIn">
              <Image width="" src={imageList[imageIndex]} class="" />
            </div> -->
      </div>
    </div>

    <div id="about" class="py-16">
      <div class="spacing relative">
        <div
          class="relative md:overflow-visible overflow-x-hidden no-scrollbar"
        >
          <p class="section-big-title">About</p>
          <h2 id="work" class="secondary-title">In the past years ...</h2>
          <p class="section-paragraph">A few things about me</p>
        </div>
        <div
          class="dark:text-[#EFEFEF] text-brand-dark-body md:mt-10 mt-7 font-medium text-lg space-y-6"
        >
          <p class="">
            Hi! I'm Damilola, an engineering and tech enthusiast.
          </p>
          <p>
            Moving on to the present day, I have been privileged to work with an
            <a
              href="https://www.cygnusspin.com"
              class="styled-link"
            >
            Cygnusspin Software Solutions
            </a>
           Where i Worked on a betting SAAS platform with multiple services and an existing codebase, utilizing a range of front-end and back-end technologies",
      Configured a real-time module on the betting system to process live games, enabling users to place bets on live games and enhancing the overall user experience",
      Successfully reduced server load by optimizing frontend API consumption, improving system performance and user experience by 6%"
          <p>
            I've built products that solve real-life problems and help
            businesses automate processes with focus on user experience, fast
            delivery and high quality using advanced web technologies, 
          </p>
          <p class="italic text-brand-primary">
            I am also open for remote or contract work.
          </p>
        </div>
      </div>
    </div>

    <div id="projects" class="py-16">
      <div class="spacing relative">
        <div
          class="relative md:overflow-visible overflow-x-hidden no-scrollbar"
        >
          <p class="section-big-title">Projects</p>
          <h2 id="work" class="secondary-title">Some things I have Built</h2>
          <p class="section-paragraph">
            Some of my resent works and personal projects
          </p>
        </div>

        <div
          class="hidden mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div
            v-for="(project, index) in projects"
            :key="index"
            target="_blank"
            :href="project.link"
            class="group block hover:border hover:shadow-md hover:grayscale-0 grayscale filter border-brand-primary h-72 overflow-hidden relative"
          >
            <div class="relative">
              <img :src="project.image" :alt="project.imageAlt" />
            </div>
            <div
              class="group-hover:max-h-full max-h-full md:max-h-0 overflow-hidden transition-all duration-200 absolute bottom-0 bg-brand-dark-body w-full"
            >
              <div class="p-5">
                <h4 class="text-white font-semibold text-xl after-underline">
                  <a target="_blank" :href="project.link">
                    {{ project.name }}
                  </a>
                </h4>
                <p>{{ project.description }}</p>
                <div class="flex mt-5 flex-wrap">
                  <span
                    v-for="(tag, i) in project.stack"
                    :key="i"
                    class="text-brand-primary mr-2 text-xs capitalize"
                  >
                    {{ tag }} {{ i !== project.stack.length - 1 ? '|' : '' }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            v-for="project in personalProjects"
            :key="project.name"
            class="bg-white rounded shadow p-5"
          >
            <h3 class="text-brand-dark-body text-xl font-bold">
              <a :href="project.links.url" class=""> {{ project.name }}</a>
            </h3>
            <p class="text-base text-gray-500 leading-relaxed mt-5">
              {{ project.description }}
            </p>
            <div class="flex mt-5 flex-wrap">
              <span
                v-for="(tag, i) in project.stack"
                :key="i"
                class="text-brand-dark-body mr-2 text-sm capitalize"
              >
                {{ tag }} {{ i !== project.stack.length - 1 ? '|' : '' }}
              </span>
            </div>
            <div class="flex mt-5">
              <a class="text-sm" :href="project.links.github">View on Github</a>
            </div>
          </div>
        </div>

        <div class="flex flex-col mt-10 z-20 space-y-16">
          <div
            v-for="project in projects"
            :key="project.name"
            class="md:flex items-start justify-start relative"
          >
            <div class="group md:w-4/12 h-52 md:mr-5 relative mb-8 md:mb-0">
              <div
                class="absolute h-52 bg-brand-primary w-full filter group-hover:rotate-0 duration-200 transition-all rotate-2 z-0 top-0 left-0"
              ></div>
              <div
                class="h-52 shadow-lg relative group-hover:rotate-0 duration-200 transition-all group-hover:scale-105 -rotate-2 overflow-hidden"
              >
                <img
                  :src="project.image"
                  :alt="project.imageAlt"
                  class="filter object-fill relative"
                />
              </div>
            </div>

            <div class="md:w-8/12 md:ml-5">
              <div class="px-5">
                <h4
                  class="dark:text-white text-brand-dark-body font-semibold text-2xl after-underline"
                >
                  <a target="_blank" :href="project.link">
                    {{ project.name }}
                  </a>
                </h4>
                <div class="flex mt-5 flex-wrap">
                  <span
                    v-for="(tag, i) in project.stack"
                    :key="i"
                    class="text-brand-primary mr-2 text-base capitalize"
                  >
                    {{ tag }} {{ i !== project.stack.length - 1 ? '|' : '' }}
                  </span>
                </div>
                <p
                  class="mt-5 dark:text-white text-brand-dark-body text-lg font-light"
                >
                  {{ project.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="work-history" class="py-16">
      <div class="spacing relative">
        <div
          class="relative md:overflow-visible overflow-x-hidden no-scrollbar"
        >
          <p class="section-big-title">Work History</p>
          <h2 id="work" class="secondary-title">Some places I have worked</h2>
          <p class="section-paragraph">
            Places I have worked, gathered experiences and offer solutions
          </p>
        </div>
      </div>
      <div class="mt-10"></div>
    </div>

    <div id="contact" class="py-16">
      <div class="spacing relative">
        <div
          class="relative md:overflow-visible overflow-x-hidden no-scrollbar"
        >
          <p class="section-big-title">Contact</p>
          <h2 id="work" class="secondary-title">Reach out to me</h2>
          <p class="section-paragraph">
            Have a project you are working on and you need my expertise?
          </p>
        </div>

        <div class="mt-10">
          <div class="md:flex gap-10">
            <div class="md:w-7/12">
              <div class="space-y-10">
                <div>
                  <label
                    class="dark:text-white text-brand-dark-body block mb-4 text-xl font-bold"
                    >Name</label
                  >
                  <input
                    v-model="message.name"
                    class="w-full border-2 bg-slate-200 rounded px-3 py-3 focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div>
                  <label
                    class="dark:text-white text-brand-dark-body block mb-4 text-xl font-bold"
                    >Email</label
                  >
                  <input
                    v-model="message.email"
                    type="Email"
                    class="w-full border-2 bg-slate-200 rounded px-3 py-3 focus:outline-none focus:border-brand-primary"
                  />
                </div>
                <div>
                  <label
                    class="dark:text-white text-brand-dark-body block mb-4 text-xl font-bold"
                    >Message</label
                  >
                  <textarea
                    v-model="message.message"
                    type="email"
                    rows="5"
                    class="w-full border-2 bg-slate-200 rounded px-3 py-3 focus:outline-none focus:border-brand-primary resize-none"
                  >
Hello, Damilola.
I need your expertise on ...
                  </textarea>
                </div>
                <button
                  class="send-btn"
                  :disabled="disableSendButton"
                  :data-title="disableSendButton ? 'Please fill a message' : ''"
                  @click="sendMessage"
                >
                  {{ sendingMessage }}
                </button>
              </div>
            </div>
            <div class="md:w-5/12">
              <div class="mt-12">
                <!-- Contact info -->
                <p class="dark:text-white text-brand-dark-body underline">
                  <a href="tel:+2348160730668">+234 (0) 8156809217</a>
                </p>
                <a
                  href="mailto:balogundamilola.f@gmail.com"
                  class="dark:text-white text-brand-dark-body underline mt-3 block"
                  >balogundamilola.f@gmail.com</a
                >

                <!-- Socials -->
                <div class="flex mt-20 space-x-3">
                  <!-- Twitter -->
                  <nuxt-link to="/twitter">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      class="stroke-current dark:text-white text-brand-dark-body"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                      ></path>
                    </svg>
                  </nuxt-link>
                  <!-- Github -->
                  <nuxt-link to="/github">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="stroke-current dark:text-white text-brand-dark-body"
                    >
                      <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                      ></path>
                    </svg>
                  </nuxt-link>
                  <!-- LinkedIn -->
                  <nuxt-link to="/linkedin">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="stroke-current dark:text-white text-brand-dark-body"
                    >
                      <path
                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                      ></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="footer" class="py-10">
      <div class="spacing relative">
        <div
          class="lg:text-right text-center dark:text-white text-brand-dark-body text-sm"
        >
          <p class="text-opacity-50 dark:text-white text-brand-dark-body">
            &copy; Designed and Built by Damilola Balogun
            <span class="text-brand-primary">&hearts;</span>
          </p>
          <p class="dark:text-white text-brand-dark-body text-opacity-50">
            This site is built with
            <a
              href="https://nuxtjs.org"
              target="_blank"
              class="hover:underline hover:text-brand-primary text-opacity-40"
              >Nuxt.js</a
            >
            and hosted on
            <a
              href="https://vercel.com/"
              target="_blank"
              class="hover:underline hover:text-brand-primary text-opacity-40"
              >Vercel</a
            >. Source code available on
            <a
              href="https://github.com/tinabals/DevTina"
              target="_blank"
              class="hover:underline hover:text-brand-primary text-opacity-40"
              >Github</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { projects, personalProjects } from '~/data/project'

export default {
  name: 'IndexPage',
  components: {},
  data() {
    return {
      projects,
      personalProjects,
      message: {
        name: '',
        email: '',
        message: '',
      },
      sendingMessage: 'Send it!',
    }
  },
  computed: {
    disableSendButton() {
      return !this.message.message
    },
  },
  methods: {
    async sendMessage() {
      this.sendingMessage = 'Sending...'
      await this.$mail.send({
        from: this.message.name || this.message.email,
        subject: `Message from Portfolio - ${
          this.message.name || this.message.email
        }`,
        text: this.message.message,
      })
      this.sendingMessage = 'Message sent!'
      this.message = {
        name: '',
        email: '',
        message: '',
      }
      setTimeout(() => {
        this.sendingMessage = 'Send it!'
      }, 3000)
    },
  },
}
</script>

<style scoped>
.send-btn {
  @apply px-8 py-3 rounded shadow-md bg-brand-primary text-brand-dark-body font-bold disabled:bg-gray-500 disabled:cursor-not-allowed relative;
}

.send-btn:hover::after {
  opacity: 1;
}

.send-btn::after {
  content: attr(data-title);
  position: absolute;
  top: 0;
  left: 100%;
  color: #fff;
  opacity: 0;
  transition: all 0.3s ease;
  @apply text-sm font-normal w-full;
}
</style>
