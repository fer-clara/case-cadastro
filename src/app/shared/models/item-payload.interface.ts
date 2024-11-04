import { Item } from "./item.interface";

export type ItemPayload = Omit<Item, 'id'>;