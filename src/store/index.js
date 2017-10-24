import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [{
      imageUrl: 'https://media.timeout.com/images/103678916/image.jpg',
      id: 'asdadasdasdasdas',
      title: 'Meetup in NYC',
      date: '2017-01-17'
    },
    {
      imageUrl: 'http://wcbct2019.org/wp-content/uploads/2016/11/AdobeStock_127125938-small-uai-1032x616.jpeg',
      id: 'asdadasdfeeefeas',
      title: 'Meetup in Berlin',
      date: '2017-01-19'
    },
    {
      imageUrl: 'http://cdn.funcheap.com/wp-content/uploads/2013/09/cityscape-of-san-francisco-from-twin-peaks-california1-563x422.jpg',
      id: 'asdadasdasdasdas',
      title: 'Meetup in San Francisco',
      date: '2017-01-12'
    }
    ],
    user: {
      id: 'asfgyruv',
      registeredMeetups: ['asfsgevfdfssd']
    }
  },
  mutations: {}, // to change state
  actions: {}, // to dispatch the mutations
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.data > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  } // use meetups in other places of app
})
