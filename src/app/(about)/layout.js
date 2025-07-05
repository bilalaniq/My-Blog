import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "20+ Projects Completed",
  "3+ Years of Freelancing",
  "99% Client Satisfaction",
  "Clean Code, Clean Results 🧼",
  "10K+ Lines of Secure Code 🔐",
  "5+ Frameworks Mastered",
  "24/7 Support Available ⏰",
  "Built for Startups & Enterprises 🚀",
  "Always Learning, Always Building",
  "100% Passion for Coding 💻",
];

// Do not use RootLayout; it's only for the app folder

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}

// Route Groups are a folder convention that let you organize routes by category or team.
// to learn more about Route Groups,
// go here https://nextjs.org/docs/app/api-reference/file-conventions/route-groups
