import { Component, OnInit } from '@angular/core';
import { Emissor } from '../../services/emissor-eventos/emissor-eventos.service';
import { CurrentStatus } from '../../services/emissor-eventos/interfaces.interface';

@Component({
  selector: 'app-botton-bar-status',
  templateUrl: './botton-bar-status.component.html',
  styleUrls: ['./botton-bar-status.component.scss']
})
export class BottonBarStatusComponent implements OnInit {
  public currentStatus: CurrentStatus;

  constructor() { }

  ngOnInit() {

    Emissor.currentStatus.subscribe(
      data => {
        this.currentStatus = data;
      },
      error => console.log(error)
    );
  }

}
