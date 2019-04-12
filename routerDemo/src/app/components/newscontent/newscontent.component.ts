import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.scss']
})
export class NewscontentComponent implements OnInit {


  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      console.log(data);
    });
  }
}
