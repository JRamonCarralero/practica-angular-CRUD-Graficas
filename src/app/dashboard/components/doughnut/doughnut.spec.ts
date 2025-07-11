import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doughnut } from './doughnut';

describe('Doughnut', () => {
  let component: Doughnut;
  let fixture: ComponentFixture<Doughnut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Doughnut]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Doughnut);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
