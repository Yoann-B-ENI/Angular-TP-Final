import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArtApiServiceService } from '../../services/art-api-service.service';
import { ArtApiResponse } from '../../models/art-api-response';
import { Artist } from '../../models/artist';
import { ShortImage } from '../../models/short-image';

@Component({
  selector: 'app-artist',
  imports: [RouterLink],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.scss'
})
export class ArtistComponent {
  id!: any
  artist!: Artist
  images!: ShortImage[]

  private route: ActivatedRoute = inject(ActivatedRoute)
  private artService: ArtApiServiceService = inject(ArtApiServiceService)

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id')
    this.artService.fetchArtist(this.id).subscribe({
      next: (response: ArtApiResponse<Artist>) => {
        console.log(response)
        this.artist = response.data
      },
      error: (error: Error) => {console.error(error);}
    })
    // 
    this.artService.fetchArtworksByArtistId(this.id).subscribe({
      next: (response: ArtApiResponse<ShortImage[]>) => {
        console.log(response)
        this.images = response.data
      },
      error: (error: Error) => {console.error(error);}
    })
  }

}
