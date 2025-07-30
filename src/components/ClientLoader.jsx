
"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

const ClientLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;
  return null;
};

export default ClientLoader;
