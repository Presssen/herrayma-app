import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the User type
export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'customer' | 'warehouse';
}

interface AuthContextType {
    user: User | null;
    login: (username: string, pass: string) => Promise<boolean>;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    // Check for persisted user on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('herrayma_user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Failed to parse stored user", e);
                localStorage.removeItem('herrayma_user');
            }
        }
    }, []);

    const login = async (username: string, pass: string): Promise<boolean> => {
        // Mock authentication logic
        // Demo credentials: User David, Password 1234
        if (username.toLowerCase() === 'david' && pass === '1234') {
            const mockUser: User = {
                id: 'user-david',
                name: 'David',
                email: 'david@example.com',
                role: 'customer'
            };
            setUser(mockUser);
            localStorage.setItem('herrayma_user', JSON.stringify(mockUser));
            return true;
        }

        // For other demo purposes, allow admin/admin
        if (username.toLowerCase() === 'admin' && pass === 'admin') {
            const mockAdmin: User = {
                id: 'user-admin',
                name: 'Admin User',
                email: 'admin@herrayma.com',
                role: 'admin'
            };
            setUser(mockAdmin);
            localStorage.setItem('herrayma_user', JSON.stringify(mockAdmin));
            return true;
        }

        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('herrayma_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
