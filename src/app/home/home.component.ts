import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
// import { AIStylistComponent } from '../ai-stylist/ai-stylist.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,HeaderComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
