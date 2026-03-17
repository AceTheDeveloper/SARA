interface OrderItem {
  name: string;
  quantity: number;
}

export interface Order {
  name: string;
  items: OrderItem[];
}
