export const ORDER_STATUSES = {
    PENDING: '1',
    SHIPPED: '2',
    DELIVERED: '3',
    CANCELLED: '4',
  } as const;
  
  export type OrderStatus = (typeof ORDER_STATUSES)[keyof typeof ORDER_STATUSES];
  
  export const ALL_ORDER_STATUSES = Object.values(ORDER_STATUSES);
  
  console.log(ALL_ORDER_STATUSES);