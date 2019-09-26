import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GatewayTestModule } from '../../../../test.module';
import { OrderItemDetailComponent } from 'app/entities/product/order-item/order-item-detail.component';
import { OrderItem } from 'app/shared/model/product/order-item.model';

describe('Component Tests', () => {
  describe('OrderItem Management Detail Component', () => {
    let comp: OrderItemDetailComponent;
    let fixture: ComponentFixture<OrderItemDetailComponent>;
    const route = ({ data: of({ orderItem: new OrderItem(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GatewayTestModule],
        declarations: [OrderItemDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(OrderItemDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(OrderItemDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.orderItem).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
