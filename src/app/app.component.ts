import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MySharedComponentsComponent } from '../dist/my-shared-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MySharedComponentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppComponent {
  title = 'ngx-sample-app';
}
