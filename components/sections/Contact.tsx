"use client";

import { useState, type FormEvent } from "react";
import { WhatsappLogo, Phone } from "@phosphor-icons/react/dist/ssr";
import { contactContent } from "@/data/contact";
import { siteConfig } from "@/constants/site";
import { Section } from "@/components/ui/Section";
import { cn } from "@/utils/cn";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: "", email: "", phone: "", message: "" };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please share your name.";
  if (!emailPattern.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.phone.trim()) errors.phone = "Please share a phone number.";
  if (!values.message.trim()) errors.message = "Tell us a little about what you're looking for.";
  return errors;
}

export function Contact() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setStatus("submitted");
    }
  };

  return (
    <Section id="contact" className="bg-ivory">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="font-serif-display text-4xl leading-[1.1] md:text-5xl">{contactContent.heading}</h2>
          <p className="mt-5 max-w-[50ch] text-base leading-relaxed text-ink/70">{contactContent.description}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-champagne"
            >
              <WhatsappLogo size={18} weight="light" />
              WhatsApp
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s|\(|\)|-/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-champagne"
            >
              <Phone size={18} weight="light" />
              Call Now
            </a>
          </div>
        </div>

        <form noValidate onSubmit={handleSubmit} className="rounded-[1.75rem] border border-ink/8 bg-warm-white p-8">
          {status === "submitted" ? (
            <div role="status" className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
              <p className="font-serif-display text-2xl">Thank you.</p>
              <p className="mt-2 max-w-[32ch] text-sm text-ink/70">
                A residence advisor will reach out within one business day to arrange your visit.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <Field
                label="Name"
                id="contact-name"
                value={values.name}
                onChange={handleChange("name")}
                error={errors.name}
                autoComplete="name"
              />
              <Field
                label="Email"
                id="contact-email"
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                error={errors.email}
                autoComplete="email"
              />
              <Field
                label="Phone"
                id="contact-phone"
                type="tel"
                value={values.phone}
                onChange={handleChange("phone")}
                error={errors.phone}
                autoComplete="tel"
              />
              <Field
                label="Message"
                id="contact-message"
                as="textarea"
                rows={4}
                value={values.message}
                onChange={handleChange("message")}
                error={errors.message}
              />

              <button
                type="submit"
                className="w-full rounded-full bg-charcoal py-3.5 text-sm font-medium tracking-wide text-warm-white transition-colors hover:bg-ink"
              >
                Book Site Visit
              </button>
            </div>
          )}
        </form>
      </div>
    </Section>
  );
}

type FieldProps = {
  label: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
  autoComplete?: string;
};

function Field({ label, id, value, onChange, error, type = "text", as = "input", rows, autoComplete }: FieldProps) {
  const errorId = `${id}-error`;
  const sharedClassName = cn(
    "w-full rounded-xl border bg-warm-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-champagne/60",
    error ? "border-red-400" : "border-ink/15",
  );

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          rows={rows}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={sharedClassName}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={sharedClassName}
        />
      )}
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
