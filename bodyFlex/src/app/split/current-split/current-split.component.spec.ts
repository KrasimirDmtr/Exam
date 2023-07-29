import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSplitComponent } from './current-split.component';

describe('CurrentSplitComponent', () => {
  let component: CurrentSplitComponent;
  let fixture: ComponentFixture<CurrentSplitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentSplitComponent]
    });
    fixture = TestBed.createComponent(CurrentSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
