import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesMainComponent } from './updates-main.component';

describe('UpdatesMainComponent', () => {
  let component: UpdatesMainComponent;
  let fixture: ComponentFixture<UpdatesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
