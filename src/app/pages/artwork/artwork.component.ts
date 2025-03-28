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
  image_path!: string

  private readonly artService: ArtApiServiceService = inject(ArtApiServiceService)
  private readonly route: ActivatedRoute = inject(ActivatedRoute)
  
  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id')
    if (id != null && id != undefined){
      this.artService.fetchArtworkById(id).subscribe({
        next: (response: ArtApiResponse<Image>) => {
          this.artwork = response.data
          this.image_path = response.config.iiif_url + "/" + this.artwork.image_id + "/full/843,/0/default.jpg"
        },
        error: (error: Error) => {console.error(error);}
      })
    }
  }

}
