import { useEffect, useState, useCallback } from 'react';
import { getBikes } from '../api/admin.api';

export const useAdminBikes = () => {
  const [bikes, setBikes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchBikes = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getBikes();
      setBikes(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBikes();
  }, [fetchBikes]);

  return { bikes, loading, refetch: fetchBikes };
};