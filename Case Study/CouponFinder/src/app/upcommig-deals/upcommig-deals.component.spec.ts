import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommigDealsComponent } from './upcommig-deals.component';

describe('UpcommigDealsComponent', () => {
  let component: UpcommigDealsComponent;
  let fixture: ComponentFixture<UpcommigDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcommigDealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcommigDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
