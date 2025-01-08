import { BlurReveal, BlurRevealContent } from '@/shared/ui/blur-reveal';
import { Link } from '@/shared/ui/link';
import { Tag } from '@/shared/ui/tag';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cardClassName =
  'group flex h-full flex-col rounded-lg border-2 border-secondary p-4 text-muted-foreground no-underline transform transition duration-300 hover:scale-[1.02]';

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
        <Link href={url}>
          <CardContent
            title={title}
            description={description}
            tags={tags}
            showIcon
          />
        </Link>
      ) : (
        <CardContent title={title} description={description} tags={tags} />
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
    <BlurReveal className="flex flex-grow flex-col justify-between gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold text-foreground">
            <BlurRevealContent>{title}</BlurRevealContent>
          </h2>
          {showIcon && (
            <BlurRevealContent>
              <FontAwesomeIcon
                className="size-5 transform transition duration-200 group-hover:text-foreground"
                icon={faGithub}
              />
            </BlurRevealContent>
          )}
        </div>
        <p className="transform transition duration-200 group-hover:text-foreground">
          <BlurRevealContent>{description}</BlurRevealContent>
        </p>
      </div>
      <div className="flex flex-wrap gap-2 text-sm group-hover:text-foreground">
        {tags.map((label) => (
          <BlurRevealContent key={label}>
            <Tag label={label} />
          </BlurRevealContent>
        ))}
      </div>
    </BlurReveal>
  );
}
