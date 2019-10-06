import axios from 'axios'
import { throttleAdapterEnhancer } from 'axios-extensions'
import {APP_URL} from '../settings'

const CACHE_TIME = 2 * 1000

let headers = {
  'Content-Type': 'application/json'
}

let instance = axios.create({
  adapter: throttleAdapterEnhancer(axios.defaults.adapter, CACHE_TIME),
  headers
})

export sendUserData = (data) => {
    instance.post(`${APP_URL}/data`, data).then(_ => {

    })
}
