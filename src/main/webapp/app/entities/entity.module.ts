import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module').then(m => m.GatewayCustomerModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product/product.module').then(m => m.ProductProductModule)
      },
      {
        path: 'product-category',
        loadChildren: () => import('./product/product-category/product-category.module').then(m => m.ProductProductCategoryModule)
      },
      {
        path: 'product-order',
        loadChildren: () => import('./product/product-order/product-order.module').then(m => m.ProductProductOrderModule)
      },
      {
        path: 'order-item',
        loadChildren: () => import('./product/order-item/order-item.module').then(m => m.ProductOrderItemModule)
      },
      {
        path: 'invoice',
        loadChildren: () => import('./invoice/invoice/invoice.module').then(m => m.InvoiceInvoiceModule)
      },
      {
        path: 'shipment',
        loadChildren: () => import('./invoice/shipment/shipment.module').then(m => m.InvoiceShipmentModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('./notification/notification/notification.module').then(m => m.NotificationNotificationModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: []
})
export class GatewayEntityModule {}
