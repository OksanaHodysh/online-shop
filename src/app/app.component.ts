import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('appTitle')
  headingField: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit(): void {
    this.headingField.nativeElement.innerText = 'Online Shopping App';
  }
}
