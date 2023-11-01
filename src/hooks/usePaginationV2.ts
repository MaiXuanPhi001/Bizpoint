import { apiStatus } from '@/constants';
import { showToastBottom } from '@/functions';
import api from '@/services/config';
import { AxiosResponseListData } from '@/types/api';
import { useEffect, useRef, useState } from 'react';

export type usePaginationResult<T, Q = any> = {
  isLoading: boolean;
  listItem?: T[];
  defaultListItem: T[];
  totalItems?: number;
  fetchData: (query?: Q | any) => void;
  onRefresh: () => void;
  onSearch: (keyWord: string) => void;
  updateLink: (newLink: string) => void;
  updateList: (callBackReturnNewList: (listItem: T[]) => T[]) => void;
  updateQuery: (query: Q) => void;
};

const usePaginationV2 = <T, Q = any>(
  link: string,
  config?: {
    isLazy?: boolean;
    params?: any;
  },
  convertData?: (listItem: T[]) => T[],
): usePaginationResult<T, Q> => {
  const page = useRef(1);
  const limit = 10;
  const keyword = useRef<string>('');
  // let total = useRef<number | null>(null);
  let total = useRef<number | null>(null);
  let totalItems = useRef<number>(0);
  const itemsPerPage = 10;
  const listItem = useRef<T[]>([]);
  const defaultListItem = useRef<T[]>([]);
  const currentLink = useRef<string>(link);
  const [isLoading, setIsLoading] = useState(false);
  const query = useRef<Q>(config?.params || {});

  const fetchData = () => {
    if (isLoading) {
      return;
    }
    if (total.current !== null && page.current > total.current) {
      showToastBottom('Đã load hết dữ liệu');
      return;
    }
    const params =
      keyword.current === ''
        ? {
            page: page.current,
            limit: itemsPerPage,
            ...query.current,
          }
        : { page: page.current, limit: itemsPerPage, search: keyword.current, ...query.current };
    setIsLoading(true);
    api
      .get(currentLink.current, {
        ...config,
        params,
      })
      .then((res: AxiosResponseListData<T>) => {
        try {
          if (res.status === apiStatus.SUCCESS) {
            const { data }: any = res.data;
            page.current = page.current + 1;
            totalItems.current = data?.total || 0;
            // totalItems.current = data?.totalItems || 0;
            total.current = data?.total || 0;
            if (convertData) {
              console.log('🚀 ~ file: usePaginationV2.ts:72 ~ .then ~ newList:', data.array);
              const newList = convertData(data?.array || []);
              // const newList = convertData(data?.items || []);
              listItem.current = [...listItem.current, ...newList];
              defaultListItem.current = [...defaultListItem.current, ...newList];
            }
            listItem.current = [...listItem.current, ...(data?.array || [])];
            defaultListItem.current = [...defaultListItem.current, ...(data?.array || [])];
          }
        } catch (err) {
        } finally {
          setIsLoading(false);
        }
      });
  };

  const onRefresh = () => {
    page.current = 1;
    total.current = null;
    setIsLoading(false);
    listItem.current = [];
    defaultListItem.current = [];
    fetchData();
  };
  const onSearch = (keyWord: string) => {
    keyword.current = keyWord.trim();
    onRefresh();
  };

  const updateLink = (newLink: string) => {
    currentLink.current = newLink;
    onRefresh();
  };

  const updateList = (callBackReturnNewList: (listItem: any[]) => any[]) => {
    setIsLoading(true);
    listItem.current = callBackReturnNewList(listItem.current);
    setIsLoading(false);
  };
  const updateQuery = (newQuery: any) => {
    query.current = newQuery;
    onRefresh();
  };

  useEffect(() => {
    if (!config || !config.isLazy) {
      fetchData();
    }
  }, []);

  return {
    isLoading,
    listItem: listItem.current,
    defaultListItem: defaultListItem.current,
    totalItems: totalItems.current,
    fetchData,
    onRefresh,
    onSearch,
    updateLink,
    updateList,
    updateQuery,
  };
};

export default usePaginationV2;
