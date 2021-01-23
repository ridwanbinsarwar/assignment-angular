import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective implements OnInit {
  @Input() firstName!: string;
  @Input() lastName!: string;

  constructor(private eref: ElementRef) { }
  ngOnInit(): void {
    (this.eref.nativeElement as HTMLSpanElement).textContent = this.firstName + " " + this.lastName;
  }

}
