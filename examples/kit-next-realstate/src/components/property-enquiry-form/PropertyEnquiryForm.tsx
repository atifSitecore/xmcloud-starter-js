import React, { useState } from 'react';
import {
  TextField,
  Text as JssText,
  RichTextField,
  RichText as JssRichText,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  Heading: TextField;
  Description: RichTextField;
  SubmitButtonText: TextField;
  SuccessMessage: TextField;
}

type PropertyEnquiryFormProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const DefaultPropertyEnquiryForm = (props: PropertyEnquiryFormProps): React.JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyInterest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyInterest: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          {(props.fields?.Heading || props.fields?.Description) && (
            <div className="mb-10 text-center">
              {props.fields?.Heading && (
                <JssText
                  field={props.fields.Heading}
                  tag="h2"
                  className="mb-4 text-3xl font-light tracking-tight text-foreground md:text-4xl"
                />
              )}
              {props.fields?.Description && (
                <JssRichText
                  field={props.fields.Description}
                  className="prose prose-lg mx-auto text-muted-foreground"
                />
              )}
            </div>
          )}

          {/* Form */}
          <div className="rounded-sm bg-card p-8 shadow-lg md:p-12">
            {isSubmitted ? (
              <div className="py-12 text-center">
                <svg
                  className="mx-auto mb-4 h-16 w-16 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <JssText
                  field={props.fields?.SuccessMessage}
                  tag="p"
                  className="text-lg text-foreground"
                />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-sm border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-sm border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-sm border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Property Interest */}
                  <div>
                    <label
                      htmlFor="propertyInterest"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Property Interest
                    </label>
                    <select
                      id="propertyInterest"
                      name="propertyInterest"
                      value={formData.propertyInterest}
                      onChange={handleChange}
                      className="w-full rounded-sm border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select a property type</option>
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="penthouse">Penthouse</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-sm border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {/* Privacy Notice */}
                <div className="rounded-sm bg-muted p-4 text-sm text-muted-foreground">
                  <p>
                    By submitting this form, you agree to our privacy policy and consent to be
                    contacted by our team.
                  </p>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-sm bg-primary px-8 py-4 font-medium text-primary-foreground transition-colors hover:bg-primary-hover disabled:opacity-50 md:w-auto"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>Sending...</span>
                      </span>
                    ) : (
                      <JssText field={props.fields?.SubmitButtonText} tag="span" />
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Default = DefaultPropertyEnquiryForm;
