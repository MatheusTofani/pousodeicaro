"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

const ClientLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Quando toda a página e recursos carregarem (incluindo imagens)
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      setLoading(false); // já carregado
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) return <Loader />;
  return null;
};

export default ClientLoader;
