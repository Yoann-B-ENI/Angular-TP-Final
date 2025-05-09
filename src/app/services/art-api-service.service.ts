import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArtApiResponse } from '../models/art-api-response';
import { Artist } from '../models/artist';
import { ShortImage } from '../models/short-image';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ArtApiServiceService {
  
  ART_URL = environment.art_api //HTTPS already
  //AICHeader = 'AIC-User-Agent' //TODO how to call it below?
  AICHeaderContent = 'angular project (yoann.battu2024@campus-eni.fr)'

  // should also work for HTTPS request as the URL in environment.dev is in HTTPS
  private readonly http: HttpClient = inject(HttpClient)

  constructor() { }

  fetchArtists() {
    const headers = new HttpHeaders({
      'AIC-User-Agent': this.AICHeaderContent
    })
    // https://api.artic.edu/api/v1/artists?page=2&limit=10&fields=id,title,birth_date,death_date,description
    return this.http.get<ArtApiResponse<Artist[]>>(this.ART_URL+'/artists?page=2&limit=9&fields=id,title,birth_date,death_date,description', {headers})
  }
  
  fetchArtist(id: number){
    const headers = new HttpHeaders({
      'AIC-User-Agent': this.AICHeaderContent
    })
    return this.http.get<ArtApiResponse<Artist>>(this.ART_URL+'/artists/'+id+'?fields=id,title,birth_date,death_date,description', {headers})
  }

  runGetQuery<T>(url: string){
    const headers = new HttpHeaders({
      'AIC-User-Agent': this.AICHeaderContent
    })
    return this.http.get<ArtApiResponse<T>>(url, {headers})
  }

  fetchArtworksByArtistId(artistId: string){
    const headers = new HttpHeaders({
      'AIC-User-Agent': this.AICHeaderContent
    })
    return this.http.get<ArtApiResponse<ShortImage[]>>(
      this.ART_URL+'/artworks/search?query[term][artist_id]='+artistId+'&fields=id,title,thumbnail', {headers}
    )
  }

  fetchArtworkById(artworkId: string){
    const headers = new HttpHeaders({
      'AIC-User-Agent': this.AICHeaderContent
    })
    return this.http.get<ArtApiResponse<Image>>(
      this.ART_URL+'/artworks/'+artworkId, {headers}
    )
  }

}
