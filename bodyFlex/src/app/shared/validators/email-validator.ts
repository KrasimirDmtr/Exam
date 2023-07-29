import { ValidatorFn } from '@angular/forms'

export function emailValidator(domains: string[]): ValidatorFn {
    const domainString = domains.join("|");
    const pattern = new RegExp(`[^@]{6,}@gmail\.(${domainString})$`)

    return (control) => {
        const a = control.value;
        const z = pattern.test(control.value);
        return control.value === "" || pattern.test(control.value) ? null : { emailValidator }
    }
}