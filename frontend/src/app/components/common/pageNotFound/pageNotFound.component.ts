import { Component, OnInit } from '@angular/core';

@Component({
    template: '<h1 style=\'margin-top:70px\'>The page you are looking for does not exist<h1>',
})
export class PageNotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
