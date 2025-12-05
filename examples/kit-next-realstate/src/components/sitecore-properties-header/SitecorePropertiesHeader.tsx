import React from 'react';
import {
  ImageField,
  Image as JssImage,
  TextField,
  Text as JssText,
  LinkField,
  Link as JssLink,
} from '@sitecore-content-sdk/nextjs';

interface NavigationLink {
  fields: {
    Title: TextField;
    Link: LinkField;
  };
}

interface Fields {
  Logo: ImageField;
  SiteName: TextField;
  NavigationLinks: NavigationLink[];
  ContactButtonText: TextField;
  ContactButtonLink: LinkField;
  PhoneNumber: TextField;
}

type SitecorePropertiesHeaderProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const DefaultSitecorePropertiesHeader = (
  props: SitecorePropertiesHeaderProps
): React.JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {props.fields?.Logo && <JssImage field={props.fields.Logo} className="h-10 w-auto" />}
            {props.fields?.SiteName && (
              <JssText
                field={props.fields.SiteName}
                tag="span"
                className="text-xl font-bold text-primary"
              />
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {props.fields?.NavigationLinks?.map((link, index) => (
              <JssLink
                key={index}
                field={link.fields?.Link}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              />
            ))}
          </nav>

          {/* Contact Button & Phone */}
          <div className="hidden md:flex items-center space-x-6">
            {props.fields?.PhoneNumber && (
              <div className="flex items-center space-x-2 text-sm">
                <svg
                  className="h-4 w-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <JssText field={props.fields.PhoneNumber} tag="span" className="font-medium" />
              </div>
            )}
            {props.fields?.ContactButtonLink && (
              <JssLink
                field={props.fields.ContactButtonLink}
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {props.fields?.ContactButtonText?.value || 'Contact Us'}
              </JssLink>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              {props.fields?.NavigationLinks?.map((link, index) => (
                <JssLink
                  key={index}
                  field={link.fields?.Link}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                />
              ))}
              {props.fields?.ContactButtonLink && (
                <JssLink
                  field={props.fields.ContactButtonLink}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-sm"
                >
                  {props.fields?.ContactButtonText?.value || 'Contact Us'}
                </JssLink>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export const Default = DefaultSitecorePropertiesHeader;
