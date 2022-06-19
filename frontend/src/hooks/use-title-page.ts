import { useEffect, useState } from "react";

const useTitlePage = (title: string) => {
  useEffect(() => {
    document.title = `${title} | Dss Final Project`;
  }, []);
};

export default useTitlePage;
