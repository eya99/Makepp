import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppthemeComponent } from './apptheme.component';

describe('AppthemeComponent', () => {
  let component: AppthemeComponent;
  let fixture: ComponentFixture<AppthemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppthemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppthemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
