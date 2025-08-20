import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Submenu122 } from './submenu122';

describe('Submenu122', () => {
  let component: Submenu122;
  let fixture: ComponentFixture<Submenu122>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Submenu122]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Submenu122);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
