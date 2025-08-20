import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Submenu121 } from './submenu121';

describe('Submenu121', () => {
  let component: Submenu121;
  let fixture: ComponentFixture<Submenu121>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Submenu121]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Submenu121);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
