import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private backend: BackEndService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  saveData() {
    this.backend.saveData();
  }
  fetchData() {
    this.backend.fetchData();
  }
}
