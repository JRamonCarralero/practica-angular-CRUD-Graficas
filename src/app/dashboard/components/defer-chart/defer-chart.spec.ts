import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferChart } from './defer-chart';

describe('DeferChart', () => {
  let component: DeferChart;
  let fixture: ComponentFixture<DeferChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
