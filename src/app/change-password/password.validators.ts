import { AbstractControl } from "@angular/forms";
import { ResolveEnd } from "@angular/router";


export class PasswordValidators {
    static validOldPassword(control: AbstractControl){
        return new Promise((resolve) => {
            if (control.value !== 'dewan')
                resolve({ invalidOldPassword: true}); 
            else 
            resolve(null);
        })
    }


    static passwordShouldMatch(control: AbstractControl){
        return new Promise((resolve) => {
            let newPassword = control.get('newPassward');
            let confirmPassword = control.get('confirmPassword')

            if (newPassword.value !== confirmPassword.value){
                return({ passwordShouldMatch : true})}
                return null;
        })
    }
} 