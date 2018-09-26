import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getDataPlayers() {
    return this.http.get('https://5b7d8ce5b4516f00148782e9.mockapi.io/players');
  }

  getPlayerById(playerId) {
    return this.http.get(`https://5b7d8ce5b4516f00148782e9.mockapi.io/players/${playerId}`);
  }

}
