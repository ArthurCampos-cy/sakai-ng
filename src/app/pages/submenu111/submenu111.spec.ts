import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Submenu111 } from './submenu111';

describe('Submenu111', () => {
  let component: Submenu111;
  let fixture: ComponentFixture<Submenu111>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Submenu111]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Submenu111);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
