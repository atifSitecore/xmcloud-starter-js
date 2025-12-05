import React from 'react';
import {
  ImageField,
  Image as JssImage,
  TextField,
  Text as JssText,
  LinkField,
  Link as JssLink,
  RichTextField,
  RichText as JssRichText,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  Title: TextField;
  Excerpt: RichTextField;
  Image: ImageField;
  Date: TextField;
  Category: TextField;
  Author: TextField;
  Link: LinkField;
}

type NewsCardProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const DefaultNewsCard = (props: NewsCardProps): React.JSX.Element => {
  const cardContent = (
    <article className="group overflow-hidden rounded-sm bg-card shadow-md transition-all duration-300 hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <JssImage
          field={props.fields?.Image}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {props.fields?.Category && (
          <div className="absolute left-4 top-4">
            <JssText
              field={props.fields.Category}
              tag="span"
              className="rounded-sm bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Meta Info */}
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          {props.fields?.Date && (
            <div className="flex items-center space-x-1.5">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <JssText field={props.fields.Date} tag="time" />
            </div>
          )}
          {props.fields?.Author && (
            <div className="flex items-center space-x-1.5">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <JssText field={props.fields.Author} tag="span" />
            </div>
          )}
        </div>

        {/* Title */}
        <JssText
          field={props.fields?.Title}
          tag="h3"
          className="text-xl font-semibold text-foreground transition-colors group-hover:text-accent line-clamp-2"
        />

        {/* Excerpt */}
        {props.fields?.Excerpt && (
          <JssRichText
            field={props.fields.Excerpt}
            tag="div"
            className="prose prose-sm text-muted-foreground line-clamp-3"
          />
        )}

        {/* Read More Link */}
        <div className="flex items-center space-x-2 pt-2 text-sm font-medium text-primary transition-colors group-hover:text-accent">
          <span>Read More</span>
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </article>
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

export const Default = DefaultNewsCard;
