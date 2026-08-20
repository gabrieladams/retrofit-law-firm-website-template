import type { BlogPost } from "@/data/blogPosts";
import { BodyText } from "@/components/ui/BodyText";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Overline } from "@/components/ui/Overline";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card>
      <div className="flex h-full flex-col items-start p-6">
        <Overline>{post.category}</Overline>
        <Heading size="md" className="pb-4">
          {post.title}
        </Heading>
        <BodyText>{post.excerpt}</BodyText>
        <div className="mt-5 flex items-center gap-4 text-base leading-[1.6] text-[#b3b3b3]">
          <time dateTime={post.dateTime}>{post.date}</time>
          <span aria-hidden="true" className="h-6 w-px bg-[#d9d9d9]" />
          <span>{post.readTime}</span>
        </div>
        <Button
          href={post.href}
          variant='secondary-dark'
          className="mt-auto"
          aria-label={`Learn more about ${post.title}`}
        >
          Learn More
        </Button>
      </div>
    </Card>
  );
}
