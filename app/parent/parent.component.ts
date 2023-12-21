import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})



export class ParentComponent {
  @Input()
  invoerwaarde: string[] = [];
}
