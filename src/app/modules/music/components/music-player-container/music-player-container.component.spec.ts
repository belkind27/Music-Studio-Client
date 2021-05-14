import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPlayerContainerComponent } from './music-player-container.component';

describe('MusicPlayerContainerComponent', () => {
  let component: MusicPlayerContainerComponent;
  let fixture: ComponentFixture<MusicPlayerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicPlayerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicPlayerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
