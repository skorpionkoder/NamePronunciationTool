import { Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { INamePronunciation } from './namePronunciation';
import { Injectable } from '@angular/core';
@Injectable()
export class NamePronunciationService {
  private _baseUrl: string;

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  namePronounce(NamePronunciation: INamePronunciation): Observable<any> {
    var _Url = this._baseUrl + 'texttospeech';

    /*BatchForecast.forecasts = 12;*/

    // This is a Post so we have to pass Headers
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
      })
    };

    // Make the Angular Post
    return this._http.post(_Url, JSON.stringify(NamePronunciation), httpOptions);
  }
}
