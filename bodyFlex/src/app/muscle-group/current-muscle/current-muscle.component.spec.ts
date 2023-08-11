import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMuscleComponent } from './current-muscle.component';

describe('CurrentMuscleComponent', () => {
  let component: CurrentMuscleComponent;
  let fixture: ComponentFixture<CurrentMuscleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentMuscleComponent]
    });
    fixture = TestBed.createComponent(CurrentMuscleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
