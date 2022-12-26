import { Component } from '@angular/core';
import { GetDataService } from 'src/assets/services/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  data: any;

  constructor(private getDataService : GetDataService) {
}

ngOnInit() : void{
  this.getDataService.getData().subscribe((data) => { this.data = data; console.log(data)} )
}


}
