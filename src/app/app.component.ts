import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MySharedComponentsComponent } from 'my-shared-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MySharedComponentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngx-sample-app';
}
