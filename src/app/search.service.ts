import { Injectable } from '@angular/core';
import axios from 'axios';
import {environment} from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public search;
  public wasSearched: Boolean = false;

  constructor() { }
  public sendSearch(searchVal: String) {
    axios.get(environment.apiServer + "/search?searchword=" + searchVal + "&lang=de").then((res) => {
      this.wasSearched = true;
      this.search = res.data.result;
    })
  }
}
