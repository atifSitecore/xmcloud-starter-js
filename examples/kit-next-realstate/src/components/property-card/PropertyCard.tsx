import React from 'react';
import {
  ImageField,
  Image as JssImage,
  LinkField,
  Link as JssLink,
  TextField,
  Text as JssText,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  Title: TextField;
  Location: TextField;
  Image: ImageField;
  Price: TextField;
  PropertyType: TextField;
  Bedrooms: TextField;
  Bathrooms: TextField;
  Area: TextField;
  Link: LinkField;
  Status: TextField; // e.g., "For Sale", "Sold", "Under Construction"
}

type PropertyCardProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const DefaultPropertyCard = (props: PropertyCardProps): React.JSX.Element => {
  const cardContent = (
    <div className="group relative overflow-hidden rounded-sm bg-card shadow-lg transition-all duration-300 hover:shadow-2xl">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <JssImage
          field={props.fields?.Image}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Status Badge */}
        {props.fields?.Status && (
          <div className="absolute left-4 top-4">
            <JssText
              field={props.fields.Status}
              tag="span"
              className="rounded-sm bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground"
            />
          </div>
        )}

        {/* Favorite Button */}
        <button
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-md transition-all duration-300 hover:bg-white group-hover:opacity-100"
          aria-label="Add to favorites"
        >
          <svg
            className="h-5 w-5 text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <div>
          <JssText
            field={props.fields?.Title}
            tag="h3"
            className="text-xl font-semibold text-foreground transition-colors group-hover:text-accent"
          />

          {/* Location */}
          {props.fields?.Location && (
            <div className="mt-2 flex items-center space-x-2 text-muted-foreground">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <JssText field={props.fields.Location} tag="span" className="text-sm" />
            </div>
          )}
        </div>

        {/* Property Features */}
        <div className="flex items-center space-x-4 border-t border-border pt-4 text-sm text-muted-foreground">
          {props.fields?.Bedrooms && (
            <div className="flex items-center space-x-1.5">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <JssText field={props.fields.Bedrooms} tag="span" />
            </div>
          )}
          {props.fields?.Bathrooms && (
            <div className="flex items-center space-x-1.5">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <JssText field={props.fields.Bathrooms} tag="span" />
            </div>
          )}
          {props.fields?.Area && (
            <div className="flex items-center space-x-1.5">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
              <JssText field={props.fields.Area} tag="span" />
            </div>
          )}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between border-t border-border pt-4">
          {props.fields?.Price && (
            <JssText
              field={props.fields.Price}
              tag="div"
              className="text-2xl font-bold text-accent"
            />
          )}
          <button className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover">
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  // If there's a link, wrap the card in it
  if (props.fields?.Link && props.fields.Link.value?.href) {
    return (
      <JssLink field={props.fields.Link} className="block">
        {cardContent}
      </JssLink>
    );
  }

  return cardContent;
};

export const Default = DefaultPropertyCard;
