
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {
  email: string = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.route.params.subscribe(params => {
     console.log("params", params)
      this.email = params['email'];
    });
  }

}
