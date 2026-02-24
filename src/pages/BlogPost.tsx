import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Calendar, Clock, User, Share2, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Navbar } from "@/components/Navbar";
import { getPostById, getRelatedPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const [scrollProgress, setScrollProgress] = useState(0);
  const post = postId ? getPostById(postId) : undefined;
  const relatedPosts = post ? getRelatedPosts(post.id, post.category) : [];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button variant="hero">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = `https://folky-studio-wix-starter.lovable.app/blog/${post.id}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Reading Progress */}
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <Progress value={scrollProgress} className="h-1 rounded-none bg-transparent" />
      </div>

      {/* Header */}
      <Navbar />

      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="mx-auto max-w-3xl">
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron leading-tight">{post.title}</h1>
          </div>
        </div>
      </div>

      {/* Meta & Content */}
      <article className="mx-auto max-w-3xl px-6 py-8">
        {/* Post Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-border/50 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>FT</AvatarFallback>
            </Avatar>
            <span>{post.author.name}</span>
          </div>
          <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
          <div className="flex items-center gap-2 ml-auto">
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Twitter className="h-4 w-4" /></a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
          ))}
        </div>

        {/* Article Content */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-orbitron prose-headings:bg-gradient-to-r prose-headings:from-blue-400 prose-headings:to-cyan-400 prose-headings:bg-clip-text prose-headings:text-transparent
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-strong:text-foreground
            prose-a:text-primary hover:prose-a:text-primary/80"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Bio */}
        <div className="mt-12 p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm flex items-start gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>FT</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold mb-1">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">{post.author.bio}</p>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mx-auto max-w-3xl px-6 pb-16">
          <h2 className="text-2xl font-bold font-orbitron mb-6">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedPosts.map((rp) => (
              <Link key={rp.id} to={`/blog/${rp.id}`}>
                <Card className="overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                  <div className="aspect-video overflow-hidden">
                    <img src={rp.image} alt={rp.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-base group-hover:text-primary transition-colors">{rp.title}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm py-8 px-6">
        <div className="mx-auto max-w-7xl text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Folky Studio. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
