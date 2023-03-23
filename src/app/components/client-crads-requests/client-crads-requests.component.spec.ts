import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCradsRequestsComponent } from './client-crads-requests.component';

describe('ClientCradsRequestsComponent', () => {
  let component: ClientCradsRequestsComponent;
  let fixture: ComponentFixture<ClientCradsRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCradsRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCradsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
