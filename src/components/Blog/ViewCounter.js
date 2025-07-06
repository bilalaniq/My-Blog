    "use client";
    import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
    import React, { useEffect, useState } from "react";

    const supabase = createClientComponentClient();

    const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
    const [views, setViews] = useState(0);

    useEffect(() => {
        const incrementView = async () => {
        try {
            let { error } = await supabase.rpc("increment", {
            slug_text: slug,
            });
            if (error) {
            console.error("Error incrementing view count in try block:", error);
            }
        } catch (error) {
            console.error("Error incrementing view count:", error);
        }
        };

        if (!noCount) {
        incrementView();
        }
    }, [slug, noCount]);

    useEffect(() => {
        const getView = async () => {
        try {
            let { data, error } = await supabase
            .from("views")
            .select("count")
            .match({ slug: slug })
            .single();
            if (error) {
            console.error("Error while geting view count in try block:", error);
            }

            console.log("Data fetched from views table:", data);
            setViews(data ? data.count : 0);
        } catch (error) {
            console.error("Error while geting view count:", error);
        }
        };

        getView();
    }, [slug]);

    if (showCount) {
        return <div>{views} views</div>;
    } else {
        return null;
    }
    };

    export default ViewCounter;





//  React 18+ (especially in Next.js 13+ with the App Router) runs useEffect twice on purpose in development to help catch bugs.

// This only affects:

// Development builds (npm run dev or next dev)

// Client components that use useEffect

// so donot wory if the view count is incremented twice in development mode. In production, it will only increment once.
