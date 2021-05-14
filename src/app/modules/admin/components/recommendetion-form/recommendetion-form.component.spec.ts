import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendetionFormComponent } from './recommendetion-form.component';

describe('RecommendetionFormComponent', () => {
  let component: RecommendetionFormComponent;
  let fixture: ComponentFixture<RecommendetionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendetionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendetionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
