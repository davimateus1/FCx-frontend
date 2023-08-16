import { useEffect } from 'react';

export const useDocumentTitle = ({ title }: { title: string }) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} | FCx Labs`;
    }
  }, [title]);
};
