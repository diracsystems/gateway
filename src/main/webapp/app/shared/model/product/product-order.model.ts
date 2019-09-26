import { Moment } from 'moment';
import { IOrderItem } from 'app/shared/model/product/order-item.model';
import { OrderStatus } from 'app/shared/model/enumerations/order-status.model';

export interface IProductOrder {
  id?: number;
  placedDate?: Moment;
  status?: OrderStatus;
  code?: string;
  invoiceId?: number;
  customer?: string;
  orderItems?: IOrderItem[];
}

export class ProductOrder implements IProductOrder {
  constructor(
    public id?: number,
    public placedDate?: Moment,
    public status?: OrderStatus,
    public code?: string,
    public invoiceId?: number,
    public customer?: string,
    public orderItems?: IOrderItem[]
  ) {}
}
