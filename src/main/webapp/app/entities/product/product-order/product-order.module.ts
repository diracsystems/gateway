import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaySharedModule } from 'app/shared/shared.module';
import { ProductOrderComponent } from './product-order.component';
import { ProductOrderDetailComponent } from './product-order-detail.component';
import { ProductOrderUpdateComponent } from './product-order-update.component';
import { ProductOrderDeletePopupComponent, ProductOrderDeleteDialogComponent } from './product-order-delete-dialog.component';
import { productOrderRoute, productOrderPopupRoute } from './product-order.route';

const ENTITY_STATES = [...productOrderRoute, ...productOrderPopupRoute];

@NgModule({
  imports: [GatewaySharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ProductOrderComponent,
    ProductOrderDetailComponent,
    ProductOrderUpdateComponent,
    ProductOrderDeleteDialogComponent,
    ProductOrderDeletePopupComponent
  ],
  entryComponents: [ProductOrderComponent, ProductOrderUpdateComponent, ProductOrderDeleteDialogComponent, ProductOrderDeletePopupComponent]
})
export class ProductProductOrderModule {}
