import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from 'src/app/modules/beer-module/data/interfaces';
import { GetDataService } from '../../services/get-data.service';

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
