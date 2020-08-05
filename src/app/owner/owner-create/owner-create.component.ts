import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RepositoryService } from 'src/shared/repository.service';
import { OwnerForCreation } from 'src/shared/models/ownerForCreation';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.scss'],
})
export class OwnerCreateComponent implements OnInit {
  public ownerForm: FormGroup;

  constructor(
    private location: Location,
    private repositoryService: RepositoryService
  ) {}

  ngOnInit() {
    this.ownerForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(60),
      ]),
      dateOfBirth: new FormControl(new Date()),
      address: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
    });
  }

  public hasError(controlName: string, errorName: string) {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }

  public onCancel() {
    this.location.back();
  }

  public createOwner(ownerFormValue) {
    if (this.ownerForm.valid) {
      this.executeOwnerCreation(ownerFormValue);
    }
  }

  private executeOwnerCreation(ownerFormValue: OwnerForCreation) {
    const owner: OwnerForCreation = {
      name: ownerFormValue.name,
      dateOfBirth: ownerFormValue.dateOfBirth,
      address: ownerFormValue.address,
    };
    const apiUrl = 'api/owner';
    this.repositoryService.create(apiUrl, owner).subscribe(
      (res) => {
        this.location.back();
      },
      (error) => {
        this.location.back();
      }
    );
  }
}
