import { FormBuilder } from '@angular/forms';
import { CountryComponent } from './country.component';

describe('CounterComponent', () => {

    let component: CountryComponent

    beforeEach(() => {
        component = new CountryComponent(new FormBuilder())
    })

    it('should increment country by 1', () => {
        component.increment()
        expect(component.country).toBe(1);
    })

    it('should decrement country by 1', () => {
        component.decrement()
        expect(component.country).toBe(-1);
    })

    it('should increment value by event emitter', () => {
        let result = null;
        component.counterEmitter.subscribe(v => result = v)

        component.increment()

        expect(result).toBe(1)
    })

    it('should create form with 2 controls', () => {
        expect(component.form.contains('login')).toBeTruthy()
        expect(component.form.contains('email')).toBeTruthy()
    })

    it('should mark login as invalid if empt value', () => {
        const control = component.form.get('login')
        control.setValue(''),
        expect(control.valid).toBeFalsy()
    })

})