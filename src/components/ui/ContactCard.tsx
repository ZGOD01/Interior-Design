import React from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { contactDetails } from "@/data/navigation";

interface ContactCardProps {
  className?: string;
  showWhatsApp?: boolean;
}

export function ContactCard({ className, showWhatsApp = true }: ContactCardProps) {
  const whatsappNumber = "919119491193";
  const whatsappMsg = encodeURIComponent(
    "Hello, I'd like to enquire about your interior design and contracting services."
  );

  return (
    <div
      className={cn(
        "bg-card border border-border/60 rounded-sm card-shadow p-7 md:p-8 space-y-6",
        className
      )}
    >
      {/* Header */}
      <div className="space-y-1">
        <h3 className="font-heading text-lg font-semibold text-foreground">Our Pune Office</h3>
        <div className="divider" />
      </div>

      {/* Contact Items */}
      <ul className="space-y-5">
        <li className="flex items-start gap-3.5">
          <div className="mt-0.5 size-8 shrink-0 flex items-center justify-center rounded-sm bg-secondary border border-border/40">
            <MapPin className="size-3.5 text-accent" />
          </div>
          <div className="space-y-0.5">
            <p className="text-xs md:text-sm font-semibold tracking-widest text-accent uppercase">Address</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {contactDetails.address.display}
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3.5">
          <div className="mt-0.5 size-8 shrink-0 flex items-center justify-center rounded-sm bg-secondary border border-border/40">
            <Phone className="size-3.5 text-accent" />
          </div>
          <div className="space-y-1">
            <p className="text-xs md:text-sm font-semibold tracking-widest text-accent uppercase">Phone</p>
            {contactDetails.phones.map((phone) => (
              <a
                key={phone.value}
                href={`tel:${phone.value.replace(/\s+/g, "")}`}
                className="block text-sm text-foreground hover:text-accent transition-fast"
              >
                {phone.value}
                <span className="ml-1.5 text-muted-foreground/60 text-xs md:text-sm">({phone.label})</span>
              </a>
            ))}
          </div>
        </li>

        <li className="flex items-start gap-3.5">
          <div className="mt-0.5 size-8 shrink-0 flex items-center justify-center rounded-sm bg-secondary border border-border/40">
            <Mail className="size-3.5 text-accent" />
          </div>
          <div className="space-y-0.5">
            <p className="text-xs md:text-sm font-semibold tracking-widest text-accent uppercase">Email</p>
            <a
              href={`mailto:${contactDetails.email}`}
              className="text-sm text-foreground hover:text-accent transition-fast"
            >
              {contactDetails.email}
            </a>
          </div>
        </li>

        <li className="flex items-start gap-3.5">
          <div className="mt-0.5 size-8 shrink-0 flex items-center justify-center rounded-sm bg-secondary border border-border/40">
            <Clock className="size-3.5 text-accent" />
          </div>
          <div className="space-y-0.5">
            <p className="text-xs md:text-sm font-semibold tracking-widest text-accent uppercase">Hours</p>
            <p className="text-sm text-foreground">{contactDetails.hours.days}</p>
            <p className="text-sm text-muted-foreground">{contactDetails.hours.time}</p>
            <p className="text-sm text-accent/70 font-medium">Sunday: {contactDetails.hours.sunday}</p>
          </div>
        </li>
      </ul>

      {/* WhatsApp CTA */}
      {showWhatsApp && (
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 w-full border border-border/60 bg-secondary rounded-sm py-3 text-sm font-semibold tracking-widest uppercase text-foreground transition-fast hover:border-accent hover:text-accent group"
        >
          <MessageCircle className="size-4 text-accent group-hover:scale-110 transition-transform" />
          Chat on WhatsApp
        </a>
      )}
    </div>
  );
}
