import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdUpComponent } from './client-ad-up.component';

describe('ClientAdUpComponent', () => {
  let component: ClientAdUpComponent;
  let fixture: ComponentFixture<ClientAdUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientAdUpComponent]
    });
    fixture = TestBed.createComponent(ClientAdUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
