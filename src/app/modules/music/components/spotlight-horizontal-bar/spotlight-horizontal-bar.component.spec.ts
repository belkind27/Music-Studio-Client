import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightHorizontalBarComponent } from './spotlight-horizontal-bar.component';

describe('SpotlightHorizontalBarComponent', () => {
  let component: SpotlightHorizontalBarComponent;
  let fixture: ComponentFixture<SpotlightHorizontalBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotlightHorizontalBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotlightHorizontalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
