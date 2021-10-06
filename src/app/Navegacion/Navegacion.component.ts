import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular';


@Component({
  selector: 'Navegacion',
  templateUrl: './Navegacion.component.html'
})
export class NavegacionComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit(): void { }
  public onNavigate() {

    this.router.navigate(['/items']);
  }



}
