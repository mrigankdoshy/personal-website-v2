import { StaticImageData } from 'next/image';

type Category = 'Apps' | 'Desk Setup';

export type Gear = Readonly<{
  name: string;
  description: string;
  category: Category;
  link: string;
  image: string | StaticImageData;
}>;

export const gear: Gear[] = [
  {
    name: 'Elephant Desks - Abundance Series',
    category: 'Desk Setup',
    image:
      'https://elephantdesks.com/cdn/shop/products/WalnutSolidWood71_BlackElephantStandingDeskMainProductPicture_2.jpg?v=1668774317&width=1980',
    description: 'Beautiful American Walnut height adjustable standing desk.',
    link: 'https://elephantdesks.com/products/abundance-standing-desk?variant=43368506228965',
  },
  {
    name: 'Nordik - Desk Shelf',
    category: 'Desk Setup',
    image:
      'https://www.nordikbydesign.com/cdn/shop/files/side-of-desk_6a66cef2-4809-4909-b339-19e0f042fefc.jpg?v=1692250378&width=1500',
    description:
      'Acacia hardwood desk shelf that elevates screens for a comfortable, ergonomic neck position.',
    link: 'https://www.nordikbydesign.com/products/dual-monitor-riser',
  },
];
