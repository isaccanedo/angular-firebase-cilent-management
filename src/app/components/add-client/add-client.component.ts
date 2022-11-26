import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  form: FormGroup;
  disableBalance: true;

  constructor(
    private router: Router,
    private builder: FormBuilder,
    private clientService: ClientService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.form = this.builder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.required],
      balance: [{value: 0,  disabled: true}],
    });
  }

  submit() {
    if (!this.form.valid) {
      console.log('not valid');
      this.toastr.error('Valiadation Error', 'Please fill up required fields');
    } else {
      this.clientService.addClients(this.form.value);
      this.toastr.success(this.form.get('firstName').value, 'is added');
      this.router.navigate(['/']);
    }
    // this.toastr.error('Hello world!', 'Toastr fun!');
  }

}
