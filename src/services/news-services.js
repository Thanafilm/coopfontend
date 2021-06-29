import axios from 'axios'
import { API_NEWS } from './../config/config.env'

export default class NewsService {

    getNews(body) {
        if(body){
            return axios.get(API_NEWS + "/news/"+body)
        }
        else{
            return axios.get(API_NEWS + "/news")
        }
        
        
    }
    getNewsBySearchText(body) {
       
            return axios.get(API_NEWS + "/news"+body)
     
        
        
    }
    getNewsId(body) {
        return axios.get(API_NEWS + "/news/"+body)
    }
    getGallary(id) {
        if(id){
            return axios.get(API_NEWS + "/gallery/"+id)
        }
        else{
            return axios.get(API_NEWS + "/gallery")
        }
        
    }

    getfile() {
        return axios.get(API_NEWS + "/file")
    }

    getcoopdetail() {
        return axios.get(API_NEWS + "/coopdetail")
    }

    getcompany() {
        return axios.get(API_NEWS + "/company")
    }
    getbanner() {
        return axios.get(API_NEWS + "/banner")
    }

    getschedulee() {
        return axios.get(API_NEWS + "/schedule/edu")
    }

    getschedulec() {
        return axios.get(API_NEWS + "/schedule/coop")
    }



}
