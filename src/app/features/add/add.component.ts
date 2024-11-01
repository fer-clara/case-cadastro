import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-add',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  form = new FormGroup({
    nome: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    quantidade: new FormControl<number>(0, {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  onSubmit() {
    this.form.controls.nome.value;
  }
}
