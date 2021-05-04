import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.scss']
})
export class GirisComponent implements OnInit {
  adi: string;
  email: string;
  constructor() { }

  ngOnInit(): void {
  }

}
