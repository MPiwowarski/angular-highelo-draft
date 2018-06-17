import { Component, OnInit } from '@angular/core';
import { DuoQueuePurchaseService } from 'src/app/services/mainRoute/boostPurchase/duoQueuePurchase/duo-queue-purchase.service';
import { DuoQueuePurchaseDto } from 'src/app/models/services/mainRoute/boostPurchase/duoQueuePurchase/duoQueuePurchaseDto';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public price: number;

  constructor(private duoQueuePurchaseService: DuoQueuePurchaseService) { }

  ngOnInit() {
    this.duoQueuePurchaseService.orderChanged.subscribe(x => {
      this.price = this.duoQueuePurchaseService.countPrice(x);   
    });
  }

}
