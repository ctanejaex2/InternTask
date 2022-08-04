import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomUserDetailComponent } from './random-user-detail.component';

describe('RandomUserDetailComponent', () => {
  let component: RandomUserDetailComponent;
  let fixture: ComponentFixture<RandomUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomUserDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
