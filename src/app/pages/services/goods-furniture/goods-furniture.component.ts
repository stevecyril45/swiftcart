import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goods-furniture',
  templateUrl: './goods-furniture.component.html',
  styleUrls: ['./goods-furniture.component.css']
})
export class GoodsFurnitureComponent implements OnInit {

  // State equivalent: This will track the current active image index
  currentImageIndex: number = 0;

  // ViewChildren: Similar to React's useRef for multiple elements.
  // This will query all elements with the 'sliderImage' template reference variable.
  @ViewChildren('sliderImage') sliderImages!: QueryList<ElementRef>;

  // Property to hold the interval ID for cleanup
  private intervalId: any;

  // Inject Angular's Router service for smooth scrolling if you use it for navigation
  constructor(private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngAfterViewInit: Equivalent to React's useEffect with an empty dependency array for DOM interactions.
  // This hook is called once after Angular initializes the component's views and child views.
  ngAfterViewInit(): void {
    // Slider Logic
    if (this.sliderImages && this.sliderImages.length > 0) {
      // Set the initial active image
      this.sliderImages.toArray()[this.currentImageIndex].nativeElement.classList.add('active');

      // Start the interval for the slider
      this.intervalId = setInterval(() => {
        this.showNextImage();
      }, 5000);
    }

    // Smooth scroll for internal links
    // In Angular, you'd typically handle this within the template using (click)
    // or through the Router if navigating to fragments.
    // For direct DOM manipulation, you can still add a global listener,
    // but a more Angular way would be to use (click) on each 'Book a Move' button
    // and call a component method.

    // Example of handling smooth scroll via a component method (more Angular-like):
    // You would add (click)="scrollToSection('call-to-action')" to your anchor tags in HTML.
    // document.addEventListener('click', this.handleSmoothScroll.bind(this)); // If you prefer a global listener
  }

  // Method to show the next image in the slider
  showNextImage(): void {
    // Remove 'active' class from current image
    if (this.sliderImages && this.sliderImages.toArray()[this.currentImageIndex]) {
      this.sliderImages.toArray()[this.currentImageIndex].nativeElement.classList.remove('active');
    }

    // Calculate next index
    this.currentImageIndex = (this.currentImageIndex + 1) % this.sliderImages.length;

    // Add 'active' class to next image
    if (this.sliderImages && this.sliderImages.toArray()[this.currentImageIndex]) {
      this.sliderImages.toArray()[this.currentImageIndex].nativeElement.classList.add('active');
    }
  }

  // Method for smooth scrolling (called from HTML (click) event)
  scrollToSection(sectionId: string): void {
    const targetElement = document.querySelector(`#${sectionId}`);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
    // If using Angular Router for fragments:
    // this.router.navigate([], { fragment: sectionId, relativeTo: this.route });
  }

  // ngOnDestroy: Equivalent to React's cleanup function in useEffect.
  // This hook is called once before the component is destroyed.
  ngOnDestroy(): void {
    // Clear the interval to prevent memory leaks
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    // If you added a global event listener, remove it here
    // document.removeEventListener('click', this.handleSmoothScroll.bind(this));
  }

}
