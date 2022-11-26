import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.interface';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: Client;
  hasBalance: boolean;
  showBalanceUpdateInput: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.clientService.getClient(this.id)
      .subscribe(client => {
        // if (client.balance > 0) {
        //   this.hasBalance = true;
        // }
        this.client = client;
        console.log(this.client)
      });
  }

}
