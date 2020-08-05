import { Component, OnInit, Input } from '@angular/core';
import { Account } from 'src/shared/models/account';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.scss']
})
export class AccountDataComponent implements OnInit {
  @Input() public accounts: Account[];
  
  constructor() { }

  ngOnInit() {
  }

}
