import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;
  @Output() emitNav = new EventEmitter<string>();

  onEmitNav(link:string) {
    this.emitNav.emit(link)
  }

}
