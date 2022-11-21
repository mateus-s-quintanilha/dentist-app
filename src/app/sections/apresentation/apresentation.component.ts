import { Component, OnInit } from '@angular/core';

import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-apresentation',
  templateUrl: './apresentation.component.html',
  styleUrls: ['./apresentation.component.scss']
})
export class ApresentationComponent implements OnInit {

  faArrowAltCircleRight = faArrowAltCircleRight

  constructor() { }

  ngOnInit(): void {
  }

}
