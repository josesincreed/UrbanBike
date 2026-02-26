import { useState } from 'react';
import { createUser } from '../api/auth.api';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const register = async (name: string, email: string) => {
    setLoading(true);
    try {
      const user = await createUser({ name, email });
      localStorage.setItem('urbanbike_user', JSON.stringify(user));
      return user;
    } finally {
      setLoading(false);
    }
  };

  const getUser = () => {
    const stored = localStorage.getItem('urbanbike_user');
    return stored ? JSON.parse(stored) : null;
  };

  return { register, getUser, loading };
};