import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Overline } from "@/components/ui/Overline";
import { BlogCard } from "@/components/blog/BlogCard";

export function BlogsSection() {
  return (
    <section aria-labelledby="blogs-heading" className="w-full bg-white py-[var(--section-spacing-y)]">
      <div className="mx-auto flex w-full max-w-[var(--grid-width)] flex-col gap-[var(--section-header-content-gap-sm)] px-6 sm:px-10 lg:px-0">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-[var(--grid-gutter-width-lg)]">
          <div className="flex min-w-0 flex-1 flex-col items-start">
            <Overline>Blogs</Overline>
            <Heading id="blogs-heading" size="lg">
              Latest Insights And Legal Updates
            </Heading>
          </div>
          <div className="shrink-0">
            <Button href="/blogs">See All Blogs</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-[var(--grid-gutter-width-sm)] md:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
