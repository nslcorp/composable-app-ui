'use client'
import { SfButton } from '@storefront-ui/react';
import classNames from 'classnames';

const displayDetails = [
  {
    image: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/display.png',
    title: 'Jacket Days Ahead',
    subtitle: 'Be in Jacket',
    description: 'Step out in style with our jackets collection',
    buttonText: 'Discover now',
    reverse: false,
    backgroundColor: 'bg-negative-200',
    titleClass: 'md:typography-display-2',
    subtitleClass: 'md:typography-headline-6',
    descriptionClass: 'md:typography-text-lg',
    url: '/sale?type=jacket'
  },
];

export default function DisplayHorizontalBlock() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-6 max-w-[1540px]">
      {displayDetails.map(
        ({ image, title, subtitle, description, buttonText, backgroundColor, reverse, titleClass, subtitleClass, url }) => (
          <div
            key={title}
            className={classNames(
              'relative flex md:max-w-[1536px] md:[&:not(:first-of-type)]:flex-1 md:first-of-type:w-full',
              backgroundColor,
            )}
          >
            <a
              className="absolute w-full h-full z-1 focus-visible:outline focus-visible:rounded-lg"
              aria-label={title}
              href={url}
            />
            <div
              className={classNames('flex justify-between overflow-hidden grow', {
                'flex-row-reverse': reverse,
              })}
            >
              <div className="flex flex-col justify-center items-start p-6 lg:p-10 max-w-1/2">
                <p
                  className={classNames('uppercase typography-text-xs block font-bold tracking-widest', subtitleClass)}
                >
                  {subtitle}
                </p>
                <h2 className={classNames('mb-4 mt-2 font-bold typography-display-3', titleClass)}>{title}</h2>
                <p className="typography-text-base block mb-4">{description}</p>
                <SfButton className="!bg-black">{buttonText}</SfButton>
              </div>
              <img src={image} alt={title} className="w-1/2 self-end object-contain" />
            </div>
          </div>
        ),
      )}
    </div>
  );
}