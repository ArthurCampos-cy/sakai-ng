import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Submenu112 } from './submenu112';

describe('Submenu112', () => {
  let component: Submenu112;
  let fixture: ComponentFixture<Submenu112>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Submenu112]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Submenu112);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
