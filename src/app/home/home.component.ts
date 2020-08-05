import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { SignalRService } from 'src/shared/services/signal-r.service';
import { SignalViewModel } from 'src/shared/models/signal-view-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public signals: SignalViewModel[] = [];

  constructor(private signalRService: SignalRService) {}

  ngOnInit(): void {
    this.signalRService.signalReceived.subscribe((signal: SignalViewModel) => {
      this.signals.push(signal);
    });
  }

  public executeSelectedChange(event: MatTabChangeEvent) {
    console.log(event);
  }
}
