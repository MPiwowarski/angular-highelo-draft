import { Injectable, EventEmitter, Output } from '@angular/core';
import { DuoQueuePurchaseDto } from 'src/app/models/services/mainRoute/boostPurchase/duoQueuePurchase/duoQueuePurchaseDto';

@Injectable({
  providedIn: 'root'
})
export class DuoQueuePurchaseService {

  constructor() { }

  order: DuoQueuePurchaseDto;

  @Output()
  orderChanged: EventEmitter<DuoQueuePurchaseDto> = new EventEmitter();

  onOrderChanged(order: DuoQueuePurchaseDto) {
    this.order = order;
    this.orderChanged.emit(this.order);
  }

  countPrice(orderDto: DuoQueuePurchaseDto): number{
    console.log('orderDto: ', orderDto);
    // implementation of the alghorithm
    return Math.floor(Math.random()*1000);
  }

}
