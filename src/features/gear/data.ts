import { StaticImageData } from 'next/image';
import AirPods from 'public/images/airpods.png';
import AppleWatch from 'public/images/apple-watch.jpg';
import Bottega from 'public/images/bottega.jpg';
import Copilot from 'public/images/copilot.jpg';
import IOU from 'public/images/iou.jpg';
import Rimowa from 'public/images/rimowa.png';
import Robinhood from 'public/images/robinhood.png';
import Warp from 'public/images/warp.png';

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
      'https://nordikbydesign.com/cdn/shop/products/Nordik-23319.jpg?v=1692357315&width=1346',
    link: 'https://nordikbydesign.com/products/laptop-dock-holder?variant=42789492654273',
  },
  {
    name: 'Nordik - Desk Shelf',
    category: 'Desk Setup',
    description:
      'Acacia hardwood desk shelf that elevates screens for a comfortable, ergonomic neck position.',
    image:
      'https://nordikbydesign.com/cdn/shop/files/side-of-desk_6a66cef2-4809-4909-b339-19e0f042fefc.jpg?v=1692250378&width=1500',
    link: 'https://nordikbydesign.com/products/dual-monitor-riser',
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
    link: 'https://apple.com/shop/product/MXK53AM/A/magic-mouse-usb',
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
      'https://branchfurniture.com/cdn/shop/files/bb2_e358b257-fee0-4c22-9782-8e45e1d4ac1b.webp?v=1734727321',
    link: 'https://branchfurniture.com/products/ergonomic-chair?variant=21246167515195',
  },
  {
    name: 'Nomad - Wireless Charging Station',
    category: 'Desk Setup',
    description: 'Sleek wireless charging station for my iPhone and AirPods.',
    image:
      'https://cdn.shopify.com/s/files/1/0384/6721/files/856500012162_A.jpg?v=1687282088&width=3000&height=3000&crop=center',
    link: 'https://nomadgoods.com/products/base-station-hub',
  },
  {
    name: 'Warp',
    category: 'Apps',
    description:
      "Best terminal I've used, with so many quality of life features. Keeps me in flow every day.",
    image: Warp,
    link: 'https://app.warp.dev/referral/J9MZ3Y',
  },
  {
    name: 'RocketSim',
    category: 'Apps',
    description:
      'Powerful Xcode Simulator tools such as network monitor, airplane mode, permission management and much more.',
    image:
      'https://www.rocketsim.app/_astro/rocketsim-app-icon.BIDtbpyG_Z137s7m.webp',
    link: 'https://rocketsim.app',
  },
  {
    name: 'Flighty',
    category: 'Apps',
    description:
      "Beautifully designed flight tracking app. I've had all my close friends download it.",
    image:
      'https://framerusercontent.com/images/DGjxvlg0VSQZq0uuXVMtDHjYyU.png',
    link: 'https://flighty.com',
  },
  {
    name: 'Robinhood',
    category: 'Apps',
    description: 'Free stock with my link. Seamless for personal investments.',
    image: Robinhood,
    link: 'https://join.robinhood.com/mrigand',
  },
  {
    name: 'IOU - Split Tab',
    category: 'Apps',
    description:
      'Hidden gem that helps split receipts between friends. Huge time saver.',
    image: IOU,
    link: 'https://apps.apple.com/us/app/iou-easily-split-your-tab/id1589968294',
  },
  {
    name: 'Copilot Money',
    category: 'Apps',
    image: Copilot,
    description:
      "'4M6HBY', 2 months free. Still new to the app but seems great for personal finance.",
    link: 'https://copilot.money/link/EPdV8p9sAqtmL1KG6',
  },
  {
    name: 'MacBook Pro - M3 Pro',
    category: 'Everyday Carry',
    description: 'Daily driver. Sleek, powerful, and intuitive.',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-gallery4-202410?wid=4000&hei=3074&fmt=jpeg&qlt=90&.v=1729264978259',
    link: 'https://apple.com/shop/buy-mac/macbook-pro/14-inch-space-black-standard-display-apple-m4-pro-chip-with-12-core-cpu-16-core-gpu-24gb-memory-512gb',
  },
  {
    name: 'Apple AirPods Pro 2',
    category: 'Everyday Carry',
    image: AirPods,
    description:
      'Wireless earphones with active noise cancellation, adaptive audio, conversation awareness and more.',
    link: 'https://apple.com/airpods-pro/',
  },
  {
    name: 'Apple AirTag',
    category: 'Everyday Carry',
    description: 'Track my keys, wallet, backpack, and more.',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=890&hei=740&fmt=jpeg&qlt=90&.v=1617761672000',
    link: 'https://apple.com/airtag/',
  },
  {
    name: 'Apple Watch - Series 9',
    category: 'Everyday Carry',
    description:
      'Stylish, all-in-one tool for health tracking, productivity, and staying connected.',
    image: AppleWatch,
    link: 'https://apple.com/watch/',
  },
  {
    name: 'Bottega Veneta - Flap Card Case',
    category: 'Everyday Carry',
    description:
      'Intrecciato leather card case, perfect for carrying upto 8 cards.',
    image: Bottega,
    link: 'https://bottegaveneta.com/en-us/flap-card-case-space-813351120.html',
  },
  {
    name: 'RIMOWA - Aluminium Case',
    category: 'Everyday Carry',
    description: 'Beautiful groovy aluminium protective case for my phone.',
    image: Rimowa,
    link: 'https://www.rimowa.com/us/en/accessories/iphone-cases/iphones-pro/black-case-for-iphone-16-pro/95116013.html',
  },
];
