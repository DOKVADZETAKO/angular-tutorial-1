import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.scss']
})
export class GuardComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  disallow(){
    this.authService.disallow();
  }

  allow(){
    this.authService.allow();
  }

  get access(){
    return this.authService.isEnabled();
  }

}
