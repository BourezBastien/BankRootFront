import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArenaComponent } from './admin-arena.component';

describe('AdminArenaComponent', () => {
  let component: AdminArenaComponent;
  let fixture: ComponentFixture<AdminArenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminArenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
