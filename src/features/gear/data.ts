import { StaticImageData } from 'next/image';

type Category = 'Apps' | 'Desk Setup' | 'Everyday Carry' | 'Other';

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
    description:
      'Beautiful American Walnut height adjustable standing desk. Also the best customer service I have ever had.',
    image:
      'https://elephantdesks.com/cdn/shop/products/WalnutSolidWood71_BlackElephantStandingDeskMainProductPicture_2.jpg?v=1668774317&width=1980',
    link: 'https://elephantdesks.com/products/abundance-standing-desk?variant=43368506228965',
  },
  {
    name: 'Lenovo - ThinkVision P27h-20',
    category: 'Desk Setup',
    description:
      'Bezel-less, crisp resolution, bright beautiful colors, and awesome build!',
    image: 'https://m.media-amazon.com/images/I/51ZhH09C46L._AC_SL1200_.jpg',
    link: 'https://a.co/d/fIerNNw',
  },
  {
    name: 'Nordik - Laptop Dock',
    category: 'Desk Setup',
    description:
      'Perfect to use both my laptops in clam-shell mode, keeping my workspace efficient and tidy.',
    image:
      'https://www.nordikbydesign.com/cdn/shop/products/Nordik-23319.jpg?v=1692357315&width=1346',
    link: 'https://www.nordikbydesign.com/products/laptop-dock-holder?variant=42789492654273',
  },
  {
    name: 'Nordik - Desk Shelf',
    category: 'Desk Setup',
    description:
      'Acacia hardwood desk shelf that elevates screens for a comfortable, ergonomic neck position.',
    image:
      'https://www.nordikbydesign.com/cdn/shop/files/side-of-desk_6a66cef2-4809-4909-b339-19e0f042fefc.jpg?v=1692250378&width=1500',
    link: 'https://www.nordikbydesign.com/products/dual-monitor-riser',
  },
  {
    name: 'Grovemade - The Desk Pad',
    category: 'Desk Setup',
    description:
      'The matte desk pad brings visual structure and organization to my workspace. Love the quality!',
    image:
      'https://grovemade.imgix.net/https%3A%2F%2Fgrovemade.com%2Fshop-static%2Fshop%2Fvariant%2Fforbo-desk-pad-black-small-galA-C2_h5fPDPu.jpg%3F_v%3D1628785320.653645?auto=format&ixlib=python-1.1.2&w=1500&s=883ba4830397f64a4f3ed73db716aaa3',
    link: 'https://grovemade.com/product/matte-desk-pad/?initial=531',
  },
  {
    name: 'Apple - Magic Mouse',
    category: 'Desk Setup',
    description: 'The go-to mouse for my MacBook Pro. Great for gestures.',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXK53?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1730508286345',
    link: 'https://www.apple.com/shop/product/MXK53AM/A/magic-mouse-usb',
  },
  {
    name: 'Minisopuru - DisplayLink Dock',
    category: 'Desk Setup',
    description:
      'Great inexpensive triple monitor docking station for MacBooks, with many port options.',
    image: 'https://m.media-amazon.com/images/I/71En6hft0kL._AC_SL1500_.jpg',
    link: 'https://minisopuru.com/products/ds808',
  },
  {
    name: 'Lumina - 4K Webcam',
    category: 'Desk Setup',
    description:
      '4K webcam with pretty good color correction, gestures, and tracking.',
    image: 'https://m.media-amazon.com/images/I/51nEqE+RtbL._AC_SL1500_.jpg',
    link: 'https://getlumina.com',
  },
  {
    name: 'Branch - Ergonomic Chair',
    category: 'Desk Setup',
    description: "An ergonomic chair + headrest that's actually comfortable.",
    image:
      'https://www.branchfurniture.com/cdn/shop/files/bb2_e358b257-fee0-4c22-9782-8e45e1d4ac1b.webp?v=1734727321',
    link: 'https://www.branchfurniture.com/products/ergonomic-chair?variant=21246167515195',
  },
  {
    name: 'Nomad - Wireless Charging Station',
    category: 'Desk Setup',
    description: 'Sleek wireless charging station for my iPhone and AirPods.',
    image:
      'https://cdn.shopify.com/s/files/1/0384/6721/files/856500012162_A.jpg?v=1687282088&width=3000&height=3000&crop=center',
    link: 'https://nomadgoods.com/products/base-station-hub',
  },
  // {
  //   name: 'Apple Magic Trackpad',
  //   category: 'Home Desk Setup',
  //   description: 'The go-to trackpad for my MacBook Pro. Great for gestures.',
  //   image: 'https://m.media-amazon.com/images/I/41KZtzhlK+L._AC_SL1500_.jpg',
  //   link: 'https://amzn.to/3vrq148',
  // },
  // {
  //   name: 'Superhuman Mail',
  //   category: 'Apps',
  //   image: Superhuman,
  //   description:
  //     'Use link for 1 Month FREE code. The fastest email experience with cool AI features.',
  //   link: 'https://superhuman.com/refer/bspuaqpo',
  // },
  // {
  //   name: 'Raycast',
  //   category: 'Apps',
  //   description:
  //     'The quickest way to get things done on your Mac. Using Raycast daily.',
  //   image: Raycast,
  //   link: 'https://raycast.com/?via=brianruiz',
  // },
  // {
  //   name: 'Epidemic Sound',
  //   category: 'Apps',
  //   image: EpidemicSound,
  //   description:
  //     '1 Month Free. This is where I get 95% of the music for my videos. Skip the hassle that is licensing.',
  //   link: 'https://share.epidemicsound.com/j2d0ao',
  // },
  // {
  //   name: 'Copilot Money',
  //   category: 'Apps',
  //   image: Copilot,
  //   description:
  //     "'BRIANRUIZ', 2 months FREE. For all things personal finance, this is a must.",
  //   link: 'https://copilot.money/link/cxkfRAoUGeybxipT7',
  // },
  // {
  //   name: 'MacroFactor',
  //   category: 'Apps',
  //   description:
  //     "code 'brianruiz' for extended trial. I use this to stay on top of my diet.",
  //   image: Macrofactor,
  //   link: 'https://macrofactorapp.com/',
  // },
  // {
  //   name: 'Sony Cinema Line FX3',
  //   category: 'Camera Setup (Video)',
  //   image:
  //     'https://m.media-amazon.com/images/I/81lVg8e3bHL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
  //   description:
  //     'Dream camera, 4k 10bit, built-in cooling, and great low light performance.',
  //   link: 'https://amzn.to/3TR2lzz',
  // },
  // {
  //   name: 'Sony 24-70mm f/2.8 GM II',
  //   category: 'Camera Setup (Video)',
  //   description:
  //     'Super versatile and high quality glass. Great investment for a cinematic lens.',
  //   image: 'https://m.media-amazon.com/images/I/71i0q2J-iEL._AC_SL1500_.jpg',
  //   link: 'https://amzn.to/3TABciO',
  // },
  // {
  //   name: 'Peak Design Carbon Fiber Tripod',
  //   category: 'Camera Setup (Video)',
  //   description: 'Compact, lightweight, sturdy, and good looking.',
  //   image: 'https://m.media-amazon.com/images/I/818QVv6AzPL._AC_SL1500_.jpg',
  //   link: 'https://amzn.to/43CoF31',
  // },
  // {
  //   name: 'Sennheiser MKE 600',
  //   category: 'Camera Setup (Video)',
  //   image: 'https://m.media-amazon.com/images/I/51tVQAKlvJL._AC_SL1200_.jpg',
  //   description:
  //     'My go-to XLR shotgun microphone for my videos and voice-overs.',
  //   link: 'https://amzn.to/3Dm3z1m',
  // },
  // {
  //   name: 'DJI Mic, Wireless Lavalier Microphone',
  //   category: 'Camera Setup (Video)',
  //   description: 'Great for on-the-go vlogging and voice-overs. In-frame.',
  //   image: 'https://m.media-amazon.com/images/I/71jTh1T3jGL._AC_SL1500_.jpg',
  //   link: 'https://amzn.to/4cuVVxj',
  // },
  // {
  //   name: 'GoPro HERO10 Black action camera',
  //   category: 'Other',
  //   image: 'https://m.media-amazon.com/images/I/61p2fYdYP+L._AC_SX679_.jpg',
  //   description: 'Awesome for action video, I use it for my POV shots.',
  //   link: 'https://amzn.to/3exkZuq',
  // },
  // {
  //   name: 'PolarPro Peter McKinnon Variable ND Filter 2-5 Stop',
  //   category: 'Camera Setup (Video)',
  //   description:
  //     'Necessary for FX3 at base ISO, control exposure, and motion blur.',
  //   image: 'https://m.media-amazon.com/images/I/61CdnSGKaAL._AC_SL1500_.jpg',
  //   link: 'https://amzn.to/3TSAJdg',
  // },
  // {
  //   name: 'Tiffen Black Pro-Mist 1/8 Filter',
  //   category: 'Camera Setup (Video)',
  //   description:
  //     'Subtly Softens image. Reduces highlights and contrast, great for skin.',
  //   image:
  //     'https://m.media-amazon.com/images/I/51uqnCKf2WL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
  //   link: 'https://amzn.to/4cyEUSJ',
  // },
  // {
  //   name: 'Sony a7C II',
  //   category: 'Camera Setup (Photo)',
  //   description:
  //     'Compact lightweight full-frame camera, flip screen, 4k, 33MP, b-roll camera.',
  //   image: 'https://m.media-amazon.com/images/I/61O5jFfqbSL._AC_SL1000_.jpg',
  //   link: 'https://amzn.to/3TQbJmO',
  // },
  // {
  //   name: 'Sony 40mm f/2.5 G Lens',
  //   category: 'Camera Setup (Photo)',
  //   description:
  //     'Ultra-compact fast prime w/ G series lens quality and performance.',
  //   image: 'https://m.media-amazon.com/images/I/81Yq6eLrf2L._AC_SL1500_.jpg',
  //   link: 'https://amzn.to/3YTBdCz',
  // },
  // {
  //   name: 'Peak Design Leash Camera Strap',
  //   category: 'Camera Setup (Photo)',
  //   description: 'Quick-connecting, ultra-light, and compact camera strap.',
  //   image: 'https://m.media-amazon.com/images/I/71DytxHtVaL._AC_SL1500_.jpg',
  //   link: 'https://amzn.to/3VFfptf',
  // },
  // {
  //   name: 'Urth Arkose Modular Camera Backpack',
  //   category: 'Everyday Carry',
  //   image: 'https://m.media-amazon.com/images/I/81AY7f9OwnL._AC_SL1500_.jpg',
  //   description: 'Compact Camera Backpack - A Minimalist & Travel-friendly',
  //   link: 'https://m.media-amazon.com/images/I/71Qpc9j5JiL._AC_SL1500_.jpg',
  // },
  // {
  //   name: 'Suptig Chest Mount for GoPro',
  //   category: 'Other',
  //   image: 'https://m.media-amazon.com/images/I/81y-UqVnYAL._AC_SL1500_.jpg',
  //   description: 'This is how I record my POV bike rides! :)',
  //   link: 'https://amzn.to/3DonSG9',
  // },
  // {
  //   name: 'DJI Mini 3 Pro Drone',
  //   category: 'Other',
  //   description: 'A great DJI drone for beginners, and a great vlogging tool.',
  //   image:
  //     'https://m.media-amazon.com/images/I/61Y1P6uIRFL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
  //   link: 'https://amzn.to/3mdZenf',
  // },
  // {
  //   name: 'DJI RS 3 Mini Gimbal',
  //   category: 'Other',
  //   description: 'small footprint and portable.',
  //   image: 'https://m.media-amazon.com/images/I/51owwMmtiBL._AC_SL1500_.jpg',
  //   link: 'https://amzn.to/40LPcJa',
  // },
  // // {
  // //   name: "HP DisplayLink Hub",
  // //   category: "Office Desk Setup",
  // //   image: "https://m.media-amazon.com/images/I/51Akvh02nDL._AC_SL1280_.jpg",
  // //   description: "A hub that enables dual monitors on M1 MBP.",
  // //   link: "https://amzn.to/3UnTbJo",
  // // },
  // // {
  // //   name: "Dell UltraSharp U2722D",
  // //   category: "Office Desk Setup",
  // //   link: "https://amzn.to/3KLucN1",
  // //   image: "https://m.media-amazon.com/images/I/81siJZnLDaL._AC_SL1500_.jpg",
  // //   description: "A 27 inch 4K monitor",
  // // },
  // // {
  // //   name: "VIVO Dual Monitor Stand",
  // //   category: "Office Desk Setup",
  // //   link: "https://amzn.to/40U0jzC",
  // //   image: "https://m.media-amazon.com/images/I/61JPGtCI0GL._AC_SL1500_.jpg",
  // //   description: "White articulating pneumatic monitor stand",
  // // },
  // {
  //   name: 'MacBook Pro M1 Pro 16-inch',
  //   category: 'Everyday Carry',
  //   image: 'https://m.media-amazon.com/images/I/61bwiPRcv2L._AC_SL1500_.jpg',
  //   description: 'Daily driver. Sleek, great display, and performant.',
  //   link: 'https://amzn.to/41fkhEH',
  // },
  // {
  //   name: 'Apple AirPods Max',
  //   category: 'Everyday Carry',
  //   image: 'https://m.media-amazon.com/images/I/81OdA-ITspL._AC_SL1500_.jpg',
  //   description: 'Active Noise Cancelling, Transparency Mode, Spatial Audio',
  //   link: 'https://amzn.to/3mie64b',
  // },
  // {
  //   name: 'Apple AirPods Pro',
  //   category: 'Everyday Carry',
  //   image:
  //     'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83_AV5?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1660803961739',
  //   description:
  //     'Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency.',
  //   link: 'https://amzn.to/3UmMQhq',
  // },
  // {
  //   name: 'Apple AirTag',
  //   category: 'Everyday Carry',
  //   image: 'https://m.media-amazon.com/images/I/81Lq1AfCYpS._AC_SL1500_.jpg',
  //   description: 'Track your keys, wallet, backpack, and more.',
  //   link: 'https://amzn.to/41dXoSa',
  // },
  // {
  //   name: 'Orbitkey Key Organizer',
  //   category: 'Everyday Carry',
  //   description: 'Carry your keys in a neat and organized way.',
  //   image: 'https://m.media-amazon.com/images/I/61myalb0+DL._AC_SY879_.jpg',
  //   link: 'https://amzn.to/49clTTh',
  // },
  // {
  //   name: 'Samsung T7 Shield SSD',
  //   category: 'Other',
  //   description:
  //     'Fast, reliable, and secure storage. To edit videos on the go.',
  //   image: 'https://m.media-amazon.com/images/I/61MDz7gI-zL._AC_SL1500_.jpg',
  //   link: 'https://amzn.to/3vwoD03',
  // },
];
