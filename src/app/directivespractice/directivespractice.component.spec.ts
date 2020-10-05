import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivespracticeComponent } from './directivespractice.component';

describe('DirectivespracticeComponent', () => {
  let component: DirectivespracticeComponent;
  let fixture: ComponentFixture<DirectivespracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivespracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivespracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
