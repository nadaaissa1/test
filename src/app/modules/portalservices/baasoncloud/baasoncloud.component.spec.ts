import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaasoncloudComponent } from './baasoncloud.component';

describe('BaasoncloudComponent', () => {
  let component: BaasoncloudComponent;
  let fixture: ComponentFixture<BaasoncloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaasoncloudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaasoncloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
