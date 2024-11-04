import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ItemsService } from '../../shared/services/items.service';
import { unidadeDeMedida } from '../../shared/models/item.interface';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  itemService = inject(ItemsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

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
    this.itemService.postItem({
      nome: this.form.controls.nome.value,
      unidadeDeMedida: unidadeDeMedida.kg,
      quantidade: 1,
      preco: 1,
      perecivel: true
    }).subscribe(() => {
      this.matSnackBar.open('Cadastrado com sucesso!', 'Ok', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });

      this.router.navigateByUrl('/');

    })
  }
}
