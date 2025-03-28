import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ArtApiServiceService } from '../../services/art-api-service.service';
import { ArtApiResponse } from '../../models/art-api-response';
import { Artist } from '../../models/artist';

@Component({
  selector: 'app-artist',
  imports: [],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.scss'
})
export class ArtistComponent {
  id!: any
  artist!: Artist

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
  }

}
