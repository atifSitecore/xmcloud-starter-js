import React from 'react';
import {
  Placeholder,
  TextField,
  Text as JssText,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  Heading: TextField;
  Subheading: TextField;
}

type CommunityShowcaseProps = {
  rendering: ComponentRendering;
  params: { [key: string]: string };
  fields: Fields;
};

const DefaultCommunityShowcase = (props: CommunityShowcaseProps): React.JSX.Element => {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        {(props.fields?.Heading || props.fields?.Subheading) && (
          <div className="mx-auto mb-12 max-w-3xl text-center">
            {props.fields?.Heading && (
              <JssText
                field={props.fields.Heading}
                tag="h2"
                className="mb-4 text-3xl font-light tracking-tight text-foreground md:text-4xl lg:text-5xl"
              />
            )}
            {props.fields?.Subheading && (
              <JssText
                field={props.fields.Subheading}
                tag="p"
                className="text-lg text-muted-foreground"
              />
            )}
          </div>
        )}

        {/* Community Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Placeholder name="community-showcase" rendering={props.rendering} />
        </div>

        {/* View All Button */}
        {props.params?.ShowViewAll === '1' && (
          <div className="mt-12 text-center">
            <button className="rounded-sm border-2 border-primary px-8 py-3 font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground">
              View All Communities
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export const Default = DefaultCommunityShowcase;
