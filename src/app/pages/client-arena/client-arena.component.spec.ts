import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientArenaComponent } from './client-arena.component';

describe('ClientArenaComponent', () => {
  let component: ClientArenaComponent;
  let fixture: ComponentFixture<ClientArenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientArenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
