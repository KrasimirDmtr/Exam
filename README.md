<!-- # Exam
BodyFlexGym
<form [formGroup]="registerForm" (ngSubmit)="handleSubmit()">
        <div class="form-group">
            <input type="text" id="email" name="email" formControlName="email">
            <label for="email">Email</label>
        </div>
        <!-- Email Error -->
        <div *ngIf="registerForm.get('email')?.touched">
            <p class="error" *ngIf="registerForm.get('email')?.errors?.['required']">
                Email is Required!
            </p>
        </div>
        <ng-container formGroupname="passGroup">
            <div class="form-group">
                <input type="text" id="password" name="password" formControlName="password">
                <label for="password">Password</label>
            </div>

            <!-- Password Error -->
            <ng-container *ngIf="registerForm.get('passGroup')?.touched">
                <p class="error" *ngIf="registerForm.get('passGroup.password')?.errors?.['required']">
                    Password is Required!
                </p>
                <p class="error" *ngIf="registerForm.get('passGroup.password')?.errors?.['minLength']">
                    Password length must be at least
                    {{registerForm.get('password')?.errors?.['minLength']?.['requiredLength']}}
                    characters !
                </p>
            </ng-container>
            <div class="form-group">
                <input type="text" id="repeatPassword" name="repeatPassword" formControlName="repeatPassword">
                <label for="repeatPassword">Repeat Password</label>
            </div>
            <ng-container *ngIf="registerForm.get('passGroup')?.get('repeatPassword')?.touched">
                <p class="error" *ngIf="registerForm.get('repeatPassword')?.errors?.['matchPassValidator']||
                    registerForm.get('passGroup')?.get('repeatPassword')?.errors?.['required']">
                    Passwords doesn't match!
                </p>
            </ng-container>

        </ng-container> -->