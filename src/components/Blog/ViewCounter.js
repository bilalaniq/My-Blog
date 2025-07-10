"use client";

import React, { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    if (!slug || noCount) return;

    const incrementView = async () => {
      try {
        const { error } = await supabase.rpc("increment", {
          slug_text: slug,
        });
        if (error) {
          console.error("Error incrementing view count:", error);
        }
      } catch (err) {
        console.error("Unexpected error during increment:", err);
      }
    };

    incrementView();
  }, [slug, noCount]);

  useEffect(() => {
    if (!slug) return;

    const getViewCount = async () => {
      try {
        const { data, error } = await supabase
          .from("views")
          .select("count")
          .eq("slug", slug)
          .single();

        if (error) {
          console.error("Error fetching view count:", error);
        } else {
          setViews(data?.count || 0);
        }
      } catch (err) {
        console.error("Unexpected error fetching view count:", err);
      }
    };

    getViewCount();
  }, [slug]);

  if (!showCount) return null;

  return <div>{views.toLocaleString()} views</div>;
};

export default ViewCounter;

//  React 18+ (especially in Next.js 13+ with the App Router) runs useEffect twice on purpose in development to help catch bugs.

// This only affects:

// Development builds (npm run dev or next dev)

// Client components that use useEffect

// so donot wory if the view count is incremented twice in development mode. In production, it will only increment once.
