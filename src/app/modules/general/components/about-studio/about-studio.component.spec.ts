import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStudioComponent } from './about-studio.component';

describe('AboutStudioComponent', () => {
  let component: AboutStudioComponent;
  let fixture: ComponentFixture<AboutStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutStudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
