import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/assets/services/get-data.service';


type Beer = {
  id: string,
  name:string,
  description:string,
  image_url: string,
  abv: string,
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: string | null | undefined;
  beer : any;
  data: Beer[] | any;

  constructor(private route: ActivatedRoute, private getDataService : GetDataService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getDataService.getData().subscribe((data: Beer[] | any) => {  this.data = data;
      console.log(data);
      this.beer = data.find((item: Beer | any) => item.id == this.id);
      console.log(this.beer);});
  }
     

}
