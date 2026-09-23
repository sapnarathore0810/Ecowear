import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ECOWEAR — Your Circular Style System" },
      {
        name: "description",
        content:
          "Build a visual wardrobe, track every wear, and get personalized outfit recommendations from clothes you own.",
      },
      { property: "og:title", content: "ECOWEAR — Your Circular Style System" },
      {
        property: "og:description",
        content:
          "A personalized circular-fashion wardrobe and outfit recommendation experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="h-dvh min-h-0 overflow-hidden bg-background">
      <iframe
        className="block h-full w-full border-0"
        src="/ecowear-dashboard.html"
        title="ECOWEAR circular style system"
      />
    </main>
  );
}
