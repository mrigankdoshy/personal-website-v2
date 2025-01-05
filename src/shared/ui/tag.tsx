import { Link } from '@/shared/ui/link';
import { cn } from '@/shared/utils/cn';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const className =
  'hover:bg-tertiary flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline text-secondary-foreground gap-2 ';

export type TagProps = Readonly<{
  label: string;
  href?: string;
}>;

export function Tag({ label, href }: TagProps) {
  return href ? (
    <Link
      href={href}
      className={cn(
        className,
        'transform transition duration-300 hover:scale-105 hover:text-foreground'
      )}
    >
      {label}
      <FontAwesomeIcon className="h-3 w-3 -rotate-45" icon={faArrowRight} />
    </Link>
  ) : (
    <div className={className}>{label}</div>
  );
}
