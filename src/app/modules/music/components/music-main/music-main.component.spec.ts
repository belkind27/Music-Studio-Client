import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicMainComponent } from './music-main.component';

describe('MusicMainComponent', () => {
  let component: MusicMainComponent;
  let fixture: ComponentFixture<MusicMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
