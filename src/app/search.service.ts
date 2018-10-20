import { Injectable } from '@angular/core';
import axios from 'axios';
import {environment} from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  public sendSearch(searchVal: String) {
    return new Promise((resolve) => {
      axios.get(environment.apiServer + "/search?searchword=" + searchVal + "&lang=de-at").then((res) => {
        resolve(res.data.result)
      })
    })
  }
}
