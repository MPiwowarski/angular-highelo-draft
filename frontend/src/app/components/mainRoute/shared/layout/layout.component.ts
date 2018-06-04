import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-route-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    todayDate: number = Date.now();

    constructor() { }

    ngOnInit(): void { }
    
}
