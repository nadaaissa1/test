import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditcontratComponent } from './add-editcontrat.component';

describe('AddEditcontratComponent', () => {
  let component: AddEditcontratComponent;
  let fixture: ComponentFixture<AddEditcontratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditcontratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditcontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
