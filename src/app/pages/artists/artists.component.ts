import { Component, inject } from '@angular/core';
import { ArtApiServiceService } from '../../services/art-api-service.service';
import { ArtApiResponse } from '../../models/art-api-response';
import { Artist } from '../../models/artist';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-artists',
  imports: [RouterLink, SlicePipe],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.scss'
})
export class ArtistsComponent {
  artists: any[] = []
  previousUrl!: string
  nextUrl!: string
  maxPages!: number
  currentPage!: number

  private readonly artService: ArtApiServiceService = inject(ArtApiServiceService)

  ngOnInit(){
    this.artService.fetchArtists().subscribe({
      next: (response: ArtApiResponse<Artist[]>) => {
        console.log(response)
        this.artists = response.data
        this.previousUrl = response.pagination.prev_url
        this.nextUrl = response.pagination.next_url
        this.maxPages = response.pagination.total_pages
        this.currentPage = response.pagination.current_page
      },
      error: (error: Error) => {console.error(error);}
    })
  }

  
  tryPrevPage() {
    this.artService.runGetQuery<Artist[]>(this.previousUrl).subscribe({
      next: (response: ArtApiResponse<Artist[]>) => {
        console.log(response)
        this.artists = response.data
        this.previousUrl = response.pagination.prev_url
        this.nextUrl = response.pagination.next_url
        this.maxPages = response.pagination.total_pages
        this.currentPage = response.pagination.current_page
      },
      error: (error: Error) => {console.error(error);}
    })
  }
  tryNextPage() {
    this.artService.runGetQuery<Artist[]>(this.nextUrl).subscribe({
      next: (response: ArtApiResponse<Artist[]>) => {
        console.log(response)
        this.artists = response.data
        this.previousUrl = response.pagination.prev_url
        this.nextUrl = response.pagination.next_url
        this.maxPages = response.pagination.total_pages
        this.currentPage = response.pagination.current_page
      },
      error: (error: Error) => {console.error(error);}
    })
  }



}
