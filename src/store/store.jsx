import { configureStore } from '@reduxjs/toolkit'

import navbarReducer from './slices/navSlice/navSlice'
import loaderReducer from './slices/loaderSlice/loaderSlice'

export default configureStore({
  reducer: {
    nav: navbarReducer,
    load: loaderReducer
  },
})