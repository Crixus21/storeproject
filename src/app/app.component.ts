import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreComponent } from "./store/store.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: []
})
export class AppComponent {
  title = 'OnlineStore';
}
