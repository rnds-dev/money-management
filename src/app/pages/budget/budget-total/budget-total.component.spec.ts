import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetTotalComponent } from './budget-total.component';

describe('BudgetTotalComponent', () => {
  let component: BudgetTotalComponent;
  let fixture: ComponentFixture<BudgetTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetTotalComponent]
    });
    fixture = TestBed.createComponent(BudgetTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
