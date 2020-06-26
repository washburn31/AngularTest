import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/shared/models/owner';
import { MatTableDataSource } from '@angular/material/table';
import { RepositoryService } from 'src/shared/repository.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss'],
})
export class OwnerListComponent implements OnInit {
  public displayedColumns = [
    'name',
    'dateOfBirth',
    'address',
    'details',
    'update',
    'delete',
  ];

  public dataSource = new MatTableDataSource<Owner>();

  constructor(private repositoryService: RepositoryService) {}

  ngOnInit(): void {
    this.getAllOwners();
  }

  public getAllOwners() {
    this.repositoryService.getData('api/owner').subscribe((owners) => {
      this.dataSource.data = owners as Owner[];
    });
  }

  public redirectToDetails(id: string) {}

  public redirectToUpdate(id: string) {}

  public redirectToDelete(id: string) {}
}
