import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditclientComponent } from './add-editclient.component';

describe('AddEditclientComponent', () => {
  let component: AddEditclientComponent;
  let fixture: ComponentFixture<AddEditclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
