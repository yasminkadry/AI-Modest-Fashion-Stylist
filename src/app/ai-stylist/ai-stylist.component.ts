import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-ai-stylist',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './ai-stylist.component.html',
  styleUrl: './ai-stylist.component.css'
})
export class AIStylistComponent {

}
