import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditcontactComponent } from './add-editcontact.component';

describe('AddEditcontactComponent', () => {
  let component: AddEditcontactComponent;
  let fixture: ComponentFixture<AddEditcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditcontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
