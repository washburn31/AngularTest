import { Injectable, EventEmitter } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
import { SignalViewModel } from '../models/signal-view-model';

@Injectable({
  providedIn: 'root',
})
export class SignalRService {
  private hubConnection: signalR.HubConnection;
  public signalReceived = new EventEmitter<SignalViewModel>();

  constructor() {
    this.buildConnection();
    this.startConnection();
  }

  public buildConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(environment.urlSignalR)
      .build();
  }

  public startConnection() {
    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection started');
        this.registerSignalEvents();
      })
      .catch((err) => {
        console.log('Error while starting connection ' + err);
        setTimeout(() => {
          this.startConnection();
        }, 3000);
      });
  }

  public registerSignalEvents() {
    this.hubConnection.on('SignalMessageReceived', (data: SignalViewModel) => {
      this.signalReceived.emit(data);
    });
  }
}
