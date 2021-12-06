import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    templateUrl: 'app.contador.component.html'
})


export class ContadorComponent {
    titulo: string = 'Contador APP';
    numero: number = 5;
    base: number = 5;
    acumular(valor: number) {
        this.base += valor;
    }
}