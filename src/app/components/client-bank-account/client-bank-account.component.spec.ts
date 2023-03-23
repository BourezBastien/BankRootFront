import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBankAccountComponent } from './client-bank-account.component';

describe('ClientBankAccountComponent', () => {
  let component: ClientBankAccountComponent;
  let fixture: ComponentFixture<ClientBankAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientBankAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
