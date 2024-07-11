import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    size: string;
    color: string;
    image: string
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === 'loading') return;

        if (session) {
            fetchServerCart();
        } else {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                setCart(JSON.parse(savedCart));
            }
            setIsLoading(false);
        }

        return () => {
        };
    }, [session, status]);

    useEffect(() => {
        if (status === 'authenticated' && session) {
            mergeCarts();
        }
    }, [status, session]);

    const mergeCarts = async () => {
        const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
        if (localCart.length > 0) {
            try {
                const response = await axios.get('/api/cart');
                const serverCart = response.data.cart || [];
                const mergedCart = [...serverCart];

                localCart.forEach((localItem: CartItem) => {
                    const existingItem = mergedCart.find(serverItem =>
                        serverItem.id === localItem.id &&
                        serverItem.size === localItem.size &&
                        serverItem.color === localItem.color
                    );
                    if (existingItem) {
                        existingItem.quantity += localItem.quantity;
                    } else {
                        mergedCart.push(localItem);
                    }
                });

                await updateServerCart(mergedCart);
                setCart(mergedCart);
                localStorage.removeItem('cart');
            } catch (error) {
                console.error('Failed to merge carts:', error);
            }
        } else {
            fetchServerCart();
        }
    };

    const fetchServerCart = async () => {
        try {
            const response = await axios.get('/api/cart');
            setCart(response.data.cart);
        } catch (error) {
            console.error('Failed to fetch cart:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const updateServerCart = async (newCart: CartItem[]) => {
        try {
            const response = await axios.post('/api/cart', { cart: newCart });
            if (response.data.cart) {
                setCart(response.data.cart);
            } else {
                console.error('No cart data received from server');
            }
        } catch (error) {
            console.error('Failed to update server cart:', error);
        }
    };

    const updateCart = (newCart: CartItem[]) => {
        setCart(newCart);
        if (session) {
            updateServerCart(newCart);
        } else {
            localStorage.setItem('cart', JSON.stringify(newCart));
        }
    };

    const addToCart = (item: CartItem) => {
        const newCart = [...cart];
        const existingItem = newCart.find(cartItem =>
            cartItem.id === item.id && cartItem.size === item.size && cartItem.color === item.color
        );
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            newCart.push({ ...item });
        }
        updateCart(newCart);
    };

    const removeFromCart = (id: string) => {
        const newCart = cart.filter(item => item.id !== id);
        updateCart(newCart);
    };

    const updateQuantity = (id: string, quantity: number) => {
        const newCart = cart.map(item =>
            item.id === id ? { ...item, quantity } : item
        );
        updateCart(newCart);
    };

    const clearCart = () => {
        updateCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, isLoading }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};