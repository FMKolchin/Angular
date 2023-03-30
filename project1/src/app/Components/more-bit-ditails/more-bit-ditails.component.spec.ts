import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreBitDitailsComponent } from './more-bit-ditails.component';

describe('MoreBitDitailsComponent', () => {
  let component: MoreBitDitailsComponent;
  let fixture: ComponentFixture<MoreBitDitailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreBitDitailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreBitDitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
