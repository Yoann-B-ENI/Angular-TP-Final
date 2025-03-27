import { Component, inject } from '@angular/core';
import { ArtApiServiceService } from '../../services/art-api-service.service';
import { ArtApiResponse } from '../../models/art-api-response';
import { Artist } from '../../models/artist';

@Component({
  selector: 'app-artists',
  imports: [],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.scss'
})
export class ArtistsComponent {
  artists: any[] = []

  private readonly artService: ArtApiServiceService = inject(ArtApiServiceService)

  ngOnInit(){
    this.artService.fetchArtists().subscribe({
      next: (response: ArtApiResponse<Artist>) => {
        console.log(response)
        this.artists = response.data
      },
      error: (error: Error) => {console.error(error);}
    })
  }

}
