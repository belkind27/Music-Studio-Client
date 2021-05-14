import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightVerticalBarComponent } from './spotlight-vertical-bar.component';

describe('SpotlightVerticalBarComponent', () => {
  let component: SpotlightVerticalBarComponent;
  let fixture: ComponentFixture<SpotlightVerticalBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotlightVerticalBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotlightVerticalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
