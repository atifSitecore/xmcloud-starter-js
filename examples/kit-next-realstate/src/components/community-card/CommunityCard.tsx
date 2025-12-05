import React from 'react';
import {
  ImageField,
  Image as JssImage,
  TextField,
  Text as JssText,
  LinkField,
  Link as JssLink,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  Title: TextField;
  Description: TextField;
  Image: ImageField;
  Location: TextField;
  PropertyCount: TextField;
  Link: LinkField;
}

type CommunityCardProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const DefaultCommunityCard = (props: CommunityCardProps): React.JSX.Element => {
  const cardContent = (
    <div className="group relative overflow-hidden rounded-sm bg-card shadow-md transition-all duration-300 hover:shadow-xl">
      {/* Image with Overlay */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <JssImage
          field={props.fields?.Image}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          {props.fields?.Location && (
            <div className="mb-2 flex items-center space-x-2 text-sm text-white/90">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              </svg>
              <JssText field={props.fields.Location} tag="span" />
            </div>
          )}

          <JssText field={props.fields?.Title} tag="h3" className="mb-2 text-2xl font-semibold" />

          {props.fields?.Description && (
            <JssText
              field={props.fields.Description}
              tag="p"
              className="mb-3 line-clamp-2 text-sm text-white/90"
            />
          )}

          {props.fields?.PropertyCount && (
            <div className="flex items-center space-x-2 text-sm">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <JssText field={props.fields.PropertyCount} tag="span" />
              <span>Properties</span>
            </div>
          )}

          {/* Explore Link */}
          <div className="mt-4 flex items-center space-x-2 text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span>Explore Community</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  if (props.fields?.Link && props.fields.Link.value?.href) {
    return (
      <JssLink field={props.fields.Link} className="block">
        {cardContent}
      </JssLink>
    );
  }

  return cardContent;
};

export const Default = DefaultCommunityCard;
