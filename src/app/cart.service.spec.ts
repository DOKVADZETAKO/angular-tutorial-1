import { CartService } from './cart.service';

describe('Cart Service tests', () => {
    const service: CartService = new CartService();
    beforeEach(() => {
        const service = new CartService();
    });

    it('items default lenght should be 0', () => {
        expect(service.items).toEqual([]);
        expect(service.items.length).toBe(0);
    });

    it('Method addtoCard should add items in the array', () => {
        service.addToCart(5)
        expect(service.items[0]).toBe(5);
    });

    it('Method getItems should get items from items array', () => {
        expect(service.getItems()).toBe(service.items)
    });

    it('Method clearCart should clear all items from cart array', () => {
        expect(service.items.length).toBe(0);
        expect(service.clearCart()).toBe(service.items);
    })
    
    it('Method clearItem should clear specific item from cart array', () => {
        service.clearItem(3);
        expect(service.items[3]).toBe(undefined);
    })
});