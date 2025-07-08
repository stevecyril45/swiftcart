// src/app/about-us/about-us.component.ts
import { Component, OnInit, OnDestroy, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('animatedSection') animatedSections!: QueryList<ElementRef>;

  private observer!: IntersectionObserver;

  constructor() { }

  ngOnInit(): void {
    // No specific initialization logic needed for static content
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          // Optionally, unobserve after animation to prevent re-triggering
          this.observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    this.animatedSections.forEach(section => {
      this.observer.observe(section.nativeElement);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.animatedSections.forEach(section => {
        this.observer.unobserve(section.nativeElement);
      });
      this.observer.disconnect();
    }
  }
}