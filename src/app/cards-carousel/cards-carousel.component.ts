import { Component, AfterViewInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-cards-carousel',
  templateUrl: './cards-carousel.component.html',
  styleUrls: ['./cards-carousel.component.scss'],
})
export class CardsCarouselComponent {
  emptyCard: boolean = false;
  onSlideChange(e: any) {
    const activeIndex = e?.detail?.[0]?.activeIndex;
    const totalSlides = e?.detail?.[0]?.slides.length;

    if (activeIndex === totalSlides - 1) {
      this.emptyCard = true
    } else {
      this.emptyCard = false;
    }
  }

}
