import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/shared/models/owner';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/shared/services/error-handler.service';
import { RepositoryService } from 'src/shared/repository.service';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.scss'],
})
export class OwnerDetailsComponent implements OnInit {
  public owner: Owner;
  public showAccounts;
  constructor(
    private repository: RepositoryService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private errorHandlerService: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.getOwnerDetails();
  }

  private getOwnerDetails() {
    const id: string = this.activeRoute.snapshot.params.id;
    const apiUrl = `owner/${id}`;
    this.repository.getData(apiUrl).subscribe(
      (res) => {
        this.owner = res as Owner;
      },
      (error) => {
        this.errorHandlerService.handleError(error);
      }
    );
  }
}
