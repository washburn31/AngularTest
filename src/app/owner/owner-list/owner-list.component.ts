import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Owner } from 'src/shared/models/owner';
import { MatTableDataSource } from '@angular/material/table';
import { RepositoryService } from 'src/shared/repository.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ErrorHandlerService } from 'src/shared/services/error-handler.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss'],
})
export class OwnerListComponent implements OnInit, AfterViewInit {
  public displayedColumns = [
    'name',
    'dateOfBirth',
    'address',
    'details',
    'update',
    'delete',
  ];

  public dataSource = new MatTableDataSource<Owner>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private repositoryService: RepositoryService,
    private errorHandlerService: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.getAllOwners();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getAllOwners() {
    this.repositoryService.getData('owner').subscribe(
      (owners) => {
        this.dataSource.data = owners as Owner[];
      },
      (error) => {
        this.errorHandlerService.handleError(error);
      }
    );
  }

  public doFilter(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public redirectToDetails(id: string) {}

  public redirectToUpdate(id: string) {}

  public redirectToDelete(id: string) {}
}
