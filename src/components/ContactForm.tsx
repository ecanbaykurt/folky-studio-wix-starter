import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Send, Loader2 } from "lucide-react";

const inquiryTypes = [
  { value: "investor", label: "Investor" },
  { value: "founder", label: "Founder" },
  { value: "partner", label: "Municipality or Partner" },
  { value: "press", label: "Press" },
  { value: "general", label: "General" },
] as const;

const inquiryHelperText: Record<string, string> = {
  investor: "Share your interest in our portfolio or request a call with the team.",
  founder: "Tell us about your project and how you would like to build with the studio.",
  partner: "Describe your pilot or deployment goals and how we can collaborate.",
  press: "We are happy to provide information and arrange interviews.",
  general: "Send us a message and we will get back to you.",
};

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  type: z.enum(["investor", "founder", "partner", "press", "general"], { required_error: "Please select an inquiry type" }),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000, "Message must be less than 5000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  onSuccess?: () => void;
}

export const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      type: undefined,
    },
  });

  const selectedType = watch("type");

  useEffect(() => {
    const handler = (e: CustomEvent<string>) => {
      const value = e.detail;
      if (inquiryTypes.some((t) => t.value === value)) {
        setValue("type", value as ContactFormData["type"]);
      }
    };
    window.addEventListener("contact-inquiry-type", handler as EventListener);
    return () => window.removeEventListener("contact-inquiry-type", handler as EventListener);
  }, [setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: data,
      });

      if (error) throw error;

      toast({
        title: "Message sent",
        description: "Thank you for reaching out. We will get back to you soon.",
      });

      reset();
      onSuccess?.();
    } catch (error: unknown) {
      console.error("Contact form error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or email us directly at ebaykurt@bu.edu",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground">Name *</Label>
          <Input
            id="name"
            placeholder="Your name"
            className="bg-card/50 border-border/50 focus:border-primary"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            className="bg-card/50 border-border/50 focus:border-primary"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="company" className="text-foreground">Company</Label>
          <Input
            id="company"
            placeholder="Your company (optional)"
            className="bg-card/50 border-border/50 focus:border-primary"
            {...register("company")}
          />
          {errors.company && (
            <p className="text-sm text-destructive">{errors.company.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="type" className="text-foreground">Inquiry Type *</Label>
          <Select
            value={selectedType}
            onValueChange={(value: ContactFormData["type"]) => setValue("type", value)}
          >
            <SelectTrigger className="bg-card/50 border-border/50 focus:border-primary">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {inquiryTypes.map((t) => (
                <SelectItem key={t.value} value={t.value}>
                  {t.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedType && inquiryHelperText[selectedType] && (
            <p className="text-sm text-muted-foreground">
              {inquiryHelperText[selectedType]}
            </p>
          )}
          {errors.type && (
            <p className="text-sm text-destructive">{errors.type.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground">Message *</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your interest in Folky Studio..."
          className="min-h-[150px] bg-card/50 border-border/50 focus:border-primary"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="hero"
        size="lg"
        className="w-full md:w-auto px-12 py-6 h-auto text-lg font-semibold"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};
