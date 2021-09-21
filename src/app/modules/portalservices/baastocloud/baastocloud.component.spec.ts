import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaastocloudComponent } from './baastocloud.component';

describe('BaastocloudComponent', () => {
  let component: BaastocloudComponent;
  let fixture: ComponentFixture<BaastocloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaastocloudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaastocloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
