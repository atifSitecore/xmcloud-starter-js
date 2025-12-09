import React from 'react';

export interface Testimonial {
  id: string;
  author: string;
  quote: string;
  image?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => (
  <div className="w-full flex overflow-x-auto space-x-6 py-4">
    {testimonials.map((testimonial) => (
      <div key={testimonial.id} className="min-w-[300px] border rounded p-4 bg-white shadow flex flex-col items-center">
        {testimonial.image && <img src={testimonial.image} alt={testimonial.author} className="rounded-full w-16 h-16 mb-2" />}
        <blockquote className="italic text-gray-700 mb-2">“{testimonial.quote}”</blockquote>
        <span className="text-sm font-bold text-blue-700">{testimonial.author}</span>
      </div>
    ))}
  </div>
);

export default TestimonialCarousel;
