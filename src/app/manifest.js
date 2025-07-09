export default function manifest() {
  return {
    name: "NullSect",
    short_name: "N∅Sect",
    description:
      "Stay updated with the latest in cybersecurity, ethical hacking, and technology trends. Explore tutorials, tools, CTF write-ups, and in-depth guides for beginners and pros alike.",
    start_url: "/",
    display: "standalone",
    // background_color: '#ffffff',
    // theme_color: '#ffffff',
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
