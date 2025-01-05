import { Link } from '@/shared/ui/link';
import { Tag } from '@/shared/ui/tag';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cardClassName =
  'group flex h-full flex-col rounded-lg border-2 border-secondary p-4 text-muted-foreground no-underline transition duration-300 hover:scale-[1.03]';

type ProjectCardProps = Readonly<{
  url?: string;
  title: string;
  description: string;
  tags: string[];
}>;

export function ProjectCard({
  url,
  title,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <div className={cardClassName}>
      {url ? (
        <Link
          href={url}
          className="flex flex-grow flex-col justify-between gap-6"
        >
          <CardContent
            title={title}
            description={description}
            tags={tags}
            showIcon
          />
        </Link>
      ) : (
        <div className="flex flex-grow flex-col justify-between gap-6">
          <CardContent title={title} description={description} tags={tags} />
        </div>
      )}
    </div>
  );
}

type CardContentProps = Readonly<{
  title: string;
  description: string;
  tags: string[];
  showIcon?: boolean;
}>;

function CardContent({ title, description, tags, showIcon }: CardContentProps) {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="text-xl font-bold text-foreground">{title}</span>
          {showIcon && (
            <FontAwesomeIcon
              className="size-5 group-hover:text-foreground"
              icon={faGithub}
            />
          )}
        </div>
        <span className="group-hover:text-foreground">{description}</span>
      </div>
      <div className="flex flex-wrap gap-2 text-sm group-hover:text-foreground">
        {tags.map((label) => (
          <Tag key={label} label={label} />
        ))}
      </div>
    </>
  );
}
