import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-country',
    template: `Country {{country}}`
})

export class CountryComponent {
    country = 0

    public form: FormGroup

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            login: ['', Validators.required],
            email: ['']
        })
    }

    @Output() counterEmitter = new EventEmitter<number>()

    

    increment() {
        this.country++;
        this.counterEmitter.emit(this.country)
    }

    decrement() {
        this.country--;
    }

}