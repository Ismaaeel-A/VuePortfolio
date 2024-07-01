import {
  createStore
} from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'

const dataURL = 'https://ismaaeel-a.github.io/VuePortfolioData/data/'



export default createStore({
  state: {
    About: null,
    EducationExperience: null,
    Skills: null,
    Projects: null,
    Testimonials: null
  },
  getters: {},
  mutations: {
    setAbout(state, value) {
      state.About = value
    },
    setEducationExperience(state, value) {
      state.EducationExperience = value
    },
    setSkills(state, value) {
      state.Skills = value
    },
    setProjects(state, value) {
      state.Projects = value
    },
    setTestimonials(state, value) {
      state.Testimonials = value
    }
  },
  actions: {
    async fetchAbout(context) {
      try {
        let {
          About
        } = await (await axios.get(dataURL)).data
        context.commit('setAbout', About)

      } catch(e) {
        Swal.fire({
          title: "Error",
          text: "failed to load About",
          icon: "error",
          timer: 2000
        })
      }
    },
    
    async fetchEducationExperience(context) {
      try {
        let {
          EducationExperience
        } = await (await axios.get(dataURL)).data
        context.commit('setEducationExperience', EducationExperience)

      } catch(e) {
        Swal.fire({
          title: "Error",
          text: "failed to load EducationExperience",
          icon: "error",
          timer: 2000
        })
      }
    },

    async fetchSkills(context) {
      try {
        let {
          Skills
        } = await (await axios.get(dataURL)).data
        context.commit('setSkills', Skills)

      } catch(e) {
        Swal.fire({
          title: "Error",
          text: "failed to load Skills",
          icon: "error",
          timer: 2000
        })
      }
    },

    async fetchProjects(context) {
      try {
        let {
          Projects
        } = await (await axios.get(dataURL)).data
        context.commit('setProjects', Projects)

      } catch(e) {
        Swal.fire({
          title: "Error",
          text: "failed to load Projects",
          icon: "error",
          timer: 2000
        })
      }
    },

    async fetchTestimonials(context) {
      try {
        let {
          Testimonials
        } = await (await axios.get(dataURL)).data
        context.commit('setTestimonials', Testimonials)

      } catch(e) {
        Swal.fire({
          title: "Error",
          text: "failed to load Testimonials",
          icon: "error",
          timer: 2000
        })
      }
    },

  },
  modules: {}
})