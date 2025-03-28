import { Component, inject } from '@angular/core';
import { ArtApiServiceService } from '../../services/art-api-service.service';
import { Image } from '../../models/image';
import { ActivatedRoute } from '@angular/router';
import { ArtApiResponse } from '../../models/art-api-response';

@Component({
  selector: 'app-artwork',
  imports: [],
  templateUrl: './artwork.component.html',
  styleUrl: './artwork.component.scss'
})
export class ArtworkComponent {
  artwork!: Image

  private readonly artService: ArtApiServiceService = inject(ArtApiServiceService)
  private readonly route: ActivatedRoute = inject(ActivatedRoute)
  
  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id')
    if (id != null && id != undefined){
      this.artService.fetchArtworkById(id).subscribe({
        next: (response: ArtApiResponse<Image>) => {
          this.artwork = response.data
        },
        error: (error: Error) => {console.error(error);}
      })
    }
  }

}
