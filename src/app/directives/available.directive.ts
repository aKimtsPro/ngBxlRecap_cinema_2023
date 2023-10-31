import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appAvailable]'
})
export class AvailableDirective implements OnInit, OnChanges{

  @Input() placeLeft!: number;

  constructor(private _ref: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.changeColor();
  }

  ngOnInit(): void {
    this.changeColor();
  }

  changeColor(){
    const placeLeft = this.placeLeft;
    if( placeLeft > 50 )
      this._ref.nativeElement.style.color = '#00ff00'
    else if ( placeLeft > 0)
      this._ref.nativeElement.style.color = '#ff8000'
    else
      this._ref.nativeElement.style.color = '#ff0000'
  }


}
