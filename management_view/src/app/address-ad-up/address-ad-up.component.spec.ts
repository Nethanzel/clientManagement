import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressAdUpComponent } from './address-ad-up.component';

describe('AddressAdUpComponent', () => {
  let component: AddressAdUpComponent;
  let fixture: ComponentFixture<AddressAdUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressAdUpComponent]
    });
    fixture = TestBed.createComponent(AddressAdUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
