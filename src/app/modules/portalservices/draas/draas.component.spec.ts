import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraasComponent } from './draas.component';

describe('DraasComponent', () => {
  let component: DraasComponent;
  let fixture: ComponentFixture<DraasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
