import { Gear } from '@/features/gear/data';
import { Tag } from '@/shared/ui/tag';
import Image from 'next/image';

type GearItemProps = Omit<Gear, 'category'>;

export function GearItem({ name, description, image, link }: GearItemProps) {
  return (
    <li className="col-span-1 row-span-1 flex snap-start items-center gap-4 transition-opacity">
      <a
        href={link}
        target="_blank"
        className="bg-tertiary border-secondary relative aspect-square h-[4rem] w-[4rem] min-w-[4rem] overflow-hidden rounded-xl border"
      >
        <Image
          fill
          alt={name}
          src={image}
          className="h-full w-full overflow-hidden rounded-lg object-cover object-center"
        />
      </a>
      <div className="flex grow items-center justify-between gap-2">
        <div className="space-y-1">
          <h3 className="text-primary line-clamp-2 leading-tight font-medium">
            {name}
          </h3>
          <p className="text-muted-foreground line-clamp-3 text-sm leading-tight">
            {description}
          </p>
        </div>
        <div className="text-sm">
          <Tag label="Get" href={link}></Tag>
        </div>
      </div>
    </li>
  );
}
