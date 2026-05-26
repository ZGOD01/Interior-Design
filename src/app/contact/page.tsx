import React from "react";
import type { Metadata } from "next";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Building,
  Map
} from "lucide-react";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { buttonVariants } from "@/components/ui/button";
import { contactDetails } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Book Free Consultation | Site Audit Pune Limits | IIC Limited",
  description:
    "Contact IIC Limited to arrange a 1-hour site measurement audit. Access direct phone numbers, WhatsApp links, and book custom spatial consultations in Pune.",
  alternates: {
    canonical: "https://www.iiclimited.com/contact",
  },
};

export default function ContactPage() {
  const whatsappUrl = "https://wa.me/919119491193?text=Hello%2C%20I%27d%20like%20to%20book%20a%20free%20consultation.";

  return (
    <>
      <Header />

      <main className="flex-1 overflow-x-hidden pt-28 bg-background pb-28 md:pb-0">
        
        {/* ── 1. EDITORIAL HERO ── */}
        <section className="py-16 md:py-20 border-b border-border/20">
          <Container>
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-clay/40" />
                <Badge variant="clay">Contact Us</Badge>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-charcoal leading-[1.1] max-w-2xl">
                Initiate your space planning with clarity.
              </h1>

              <p className="font-sans text-lg font-light text-clay leading-relaxed tracking-tight max-w-xl">
                Reach our Bhandarkar Road office directly or fill out the consultation audit request to outline budgets.
              </p>
            </div>
          </Container>
        </section>

        {/* ── 2. SPLIT CONTACT & FORM SECTION ── */}
        <Section variant="ivory" className="py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Side: Contact Details, Hours, WhatsApp */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* Info Card */}
                <div className="bg-card border border-border/40 rounded-[1.5rem] p-8 space-y-8 text-left">
                  <div className="space-y-1.5">
                    <span className="tag-label">DIRECT DETAILS</span>
                    <h3 className="font-heading text-xl font-light text-charcoal leading-none">
                      Connect with the Studio
                    </h3>
                  </div>

                  <ul className="space-y-6 text-sm text-charcoal-muted font-light font-sans">
                    {/* Address */}
                    <li className="flex items-start gap-4.5">
                      <div className="p-2 rounded-full bg-clay/5 border border-clay/10 shrink-0 mt-0.5">
                        <MapPin className="size-4.5 text-clay" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider">Office Address</h4>
                        <p className="text-xs text-charcoal-muted leading-relaxed">
                          {contactDetails.address.display}
                        </p>
                      </div>
                    </li>

                    {/* Phones */}
                    <li className="flex items-start gap-4.5">
                      <div className="p-2 rounded-full bg-clay/5 border border-clay/10 shrink-0 mt-0.5">
                        <Phone className="size-4.5 text-clay" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider">Mobile Direct</h4>
                        <div className="flex flex-col space-y-1">
                          {contactDetails.phones.map((phone) => (
                            <a
                              key={phone.value}
                              href={`tel:${phone.value.replace(/\s+/g, "")}`}
                              className="hover:text-clay transition-colors"
                            >
                              {phone.value} <span className="text-[10px] opacity-75">({phone.label})</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </li>

                    {/* Email */}
                    <li className="flex items-start gap-4.5">
                      <div className="p-2 rounded-full bg-clay/5 border border-clay/10 shrink-0 mt-0.5">
                        <Mail className="size-4.5 text-clay" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider">Email Inquiry</h4>
                        <a
                          href={`mailto:${contactDetails.email}`}
                          className="hover:text-clay transition-colors"
                        >
                          {contactDetails.email}
                        </a>
                      </div>
                    </li>

                    {/* Working Hours */}
                    <li className="flex items-start gap-4.5">
                      <div className="p-2 rounded-full bg-clay/5 border border-clay/10 shrink-0 mt-0.5">
                        <Clock className="size-4.5 text-clay" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-semibold text-charcoal uppercase tracking-wider">Office Hours</h4>
                        <p className="text-xs text-charcoal-muted leading-none">{contactDetails.hours.days}</p>
                        <p className="text-[10px] text-charcoal-muted/70 leading-none pt-0.5">{contactDetails.hours.time}</p>
                      </div>
                    </li>
                  </ul>

                  {/* Direct WhatsApp Callout */}
                  <div className="pt-6 border-t border-border/20">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "w-full gap-2 rounded-full border-border/80 text-charcoal hover:bg-clay hover:text-white hover:border-clay transition-all duration-300 font-sans font-medium"
                      )}
                    >
                      <MessageCircle className="size-5 text-clay group-hover:text-white" />
                      Discuss on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side: Consultation booking form */}
              <div className="lg:col-span-7 bg-card border border-border/40 rounded-[1.5rem] p-8 md:p-10 space-y-6">
                <div className="space-y-1.5 border-b border-border/20 pb-4 text-left">
                  <span className="tag-label">SCHEDULING FORM</span>
                  <h3 className="font-heading text-2xl font-light text-charcoal tracking-tight">
                    Book Free Site Consultation
                  </h3>
                  <p className="text-xs text-charcoal-muted font-sans font-light">
                    Share your requirements to schedule a 1-hour site measurement audit in Pune limits.
                  </p>
                </div>

                <ConsultationForm />
              </div>

            </div>
          </Container>
        </Section>

        {/* ── 3. MAP PLACEHOLDER SECTION ── */}
        <Section variant="sand" className="border-b border-border/30 py-16 md:py-24 bg-sand/20">
          <Container className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="tag-label">PHYSICAL LOCATION</span>
              <h2 className="font-heading text-3xl font-light text-charcoal tracking-tight">
                Our Bhandarkar Road Office
              </h2>
              <p className="text-xs md:text-sm text-charcoal-muted font-light leading-relaxed max-w-lg mx-auto">
                Visit our design studio and turnkey operations center in Shivaji Nagar, Pune.
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="relative w-full aspect-video max-h-[480px] rounded-[2rem] border border-border/40 overflow-hidden bg-card p-1.5 shadow-sm">
              <div className="relative w-full h-full rounded-[1.75rem] bg-sand/35 overflow-hidden flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="p-3 bg-clay/5 border border-clay/10 rounded-full text-clay">
                  <Map className="size-8" />
                </div>
                
                <div className="space-y-1.5">
                  <h3 className="font-heading text-lg font-light text-charcoal tracking-tight">
                    Interactive Map Integration
                  </h3>
                  <p className="text-xs text-charcoal-muted font-sans font-light max-w-md mx-auto leading-relaxed">
                    {/* TODO: Integrate official Google Maps embed iframe or API coordinates for Bhandarkar Road, Pune. */}
                    [ Map Location Placeholder: International Interior Contractor Pvt. Ltd. Office, Bhandarkar Road, Shivaji Nagar, Pune - 411004 ]
                  </p>
                </div>
                
                <a
                  href="https://maps.google.com/?q=Bhandarkar+Road,+Shivaji+Nagar,+Pune+411004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "rounded-full border-border/80 text-charcoal hover:bg-card"
                  )}
                >
                  Open in Google Maps <Building className="size-3.5 ml-1.5" />
                </a>
              </div>
            </div>
          </Container>
        </Section>
        
        {/* Floating actions & mobile sticky CTAs */}
        <WhatsAppButton />
        <StickyMobileCTA />
      </main>

      <Footer />
    </>
  );
}
