import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: "ai-infrastructure-safety",
    title: "How AI is Revolutionizing Infrastructure Safety Assessment",
    excerpt: "Discover how machine learning algorithms are transforming the way we monitor and predict structural integrity in buildings and bridges.",
    category: "Infrastructure",
    author: "Folky Team",
    date: "2025-01-25",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
  },
  {
    id: "climate-resilience-ai",
    title: "Building Climate Resilience with Predictive AI Models",
    excerpt: "Learn how FloodTrack uses satellite data and AI forecasting to help communities prepare for climate challenges.",
    category: "Climate Tech",
    author: "Folky Team",
    date: "2025-01-20",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=800&h=400&fit=crop",
  },
  {
    id: "democratizing-ai-education",
    title: "Democratizing AI: Making Machine Learning Accessible to Everyone",
    excerpt: "Explore how Nodes is breaking down barriers in AI education through interactive, visual learning experiences.",
    category: "Education",
    author: "Folky Team",
    date: "2025-01-15",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
  },
  {
    id: "hvac-design-future",
    title: "The Future of HVAC Design: AI-Powered Collaboration",
    excerpt: "See how Cosync is transforming mechanical engineering with real-time 3D collaboration and AI optimization.",
    category: "Engineering",
    author: "Folky Team",
    date: "2025-01-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=400&fit=crop",
  },
  {
    id: "healthcare-ai-insights",
    title: "Transforming Healthcare with Data-Driven Insights",
    excerpt: "How HealthLine is using predictive models to improve community health outcomes and optimize hospital resources.",
    category: "Healthcare",
    author: "Folky Team",
    date: "2025-01-05",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop",
  },
  {
    id: "custom-ai-models",
    title: "Why Custom AI Models Matter for Your Business",
    excerpt: "Understanding the power of tailored machine learning solutions with SunnySett's model marketplace.",
    category: "AI/ML",
    author: "Folky Team",
    date: "2024-12-28",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-xl font-bold font-orbitron bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Folky Blog
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl font-orbitron">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Insights & Innovation
            </span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Explore the latest in AI, machine learning, and technology innovation from Folky Studio.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card 
                key={post.id} 
                className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 border-t border-border/50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold font-orbitron">
            Want to learn more about our ventures?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Explore our portfolio of AI-powered solutions transforming industries.
          </p>
          <Link to="/ventures">
            <Button variant="hero" size="lg">
              View Our Ventures
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm py-8 px-6">
        <div className="mx-auto max-w-7xl text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Folky Studio. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Blog;
