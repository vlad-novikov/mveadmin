﻿namespace Mveadmin.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'Mveadmin.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}
