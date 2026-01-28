import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactRequest {
  name: string;
  email: string;
  company?: string;
  type: "investor" | "partner" | "other";
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, company, type, message }: ContactRequest = await req.json();

    // Validate required fields
    if (!name || !email || !message || !type) {
      console.error("Missing required fields:", { name: !!name, email: !!email, message: !!message, type: !!type });
      throw new Error("Missing required fields");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format:", email);
      throw new Error("Invalid email format");
    }

    // Validate input lengths
    if (name.length > 100 || email.length > 255 || message.length > 5000) {
      console.error("Input exceeds maximum length");
      throw new Error("Input exceeds maximum length");
    }

    const typeLabels = {
      investor: "Investor Inquiry",
      partner: "Partnership Opportunity",
      other: "General Inquiry",
    };

    console.log("Sending contact email from:", name, email, "Type:", type);

    const emailResponse = await resend.emails.send({
      from: "Folky Studio Contact <onboarding@resend.dev>",
      to: ["ebaykurt@folky.info"],
      replyTo: email,
      subject: `[${typeLabels[type]}] New Contact from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #7c3aed, #ec4899); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0;">${typeLabels[type]}</p>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
            <div style="margin-bottom: 20px;">
              <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">From</strong>
              <p style="margin: 4px 0 0 0; font-size: 16px;">${name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</strong>
              <p style="margin: 4px 0 0 0; font-size: 16px;"><a href="mailto:${email}" style="color: #7c3aed;">${email}</a></p>
            </div>
            
            ${company ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Company</strong>
              <p style="margin: 4px 0 0 0; font-size: 16px;">${company}</p>
            </div>
            ` : ''}
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message</strong>
              <div style="margin: 8px 0 0 0; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;">
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          </div>
          
          <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 20px;">
            This email was sent from the Folky Studio website contact form.
          </p>
        </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
