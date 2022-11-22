import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {

  constructor() { }
  link1: string = "../../../assets/foto-consultorio1-editado.jpg"
  link2: string = "../../../assets/foto-consultorio2-editado.jpg"
  link3: string = "../../../assets/recepcao.jpeg"
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [this.link1, this.link2, this.link3]
  ngOnInit(): void {
  }

}
