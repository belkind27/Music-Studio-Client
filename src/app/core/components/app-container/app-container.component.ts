import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ScrollHandlerService } from '../../services/scroll-handler.service';

@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css'],
  providers: [ScrollHandlerService],
})
export class AppContainerComponent implements OnInit, AfterViewInit {
  title = 'Music-Studio';
  isDark = false;
  isMusic = true;
  constructor(
    private scrollService: ScrollHandlerService,
    private el: ElementRef,
    private snackBar: MatSnackBar
  ) {}
  ngAfterViewInit(): void {
    this.scrollService.darkSubject$.subscribe((res) => {
      this.isDark = res;
    });
    this.scrollService.init(this.el);
  }
  // for client desire, if songs don't load its means server is down
  isMusicLoad(res: boolean): void {
    this.isMusic = res;
    if (!this.isMusic) {
      this.snackBar.open('Unable To Connect Server', 'Dismiss', {
        duration: 4500,
      });
    }
  }
  ngOnInit(): void {}
}
