"use client";

import { testConnection } from "~/server/test.connection";

export default function Home() {
  const clickfunction = async () => {
    try {
      const conn = await testConnection();
      console.log(conn);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={clickfunction}>Test the connection</button>
    </main>
  );
}
