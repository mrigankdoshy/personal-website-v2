import { Badge } from '@/shared/ui/badge';
import { BlurReveal, BlurRevealContent } from '@/shared/ui/blur-reveal';
import { Card } from '@/shared/ui/card';
import { Link } from '@/shared/ui/link';
import { Tag } from '@/shared/ui/tag';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';

type ProjectCardProps = Readonly<{
  url?: string;
  title: string;
  description: string;
  isPrivate?: boolean;
  tags: string[];
}>;

export function ProjectCard({
  url,
  title,
  description,
  isPrivate,
  tags,
}: ProjectCardProps) {
  const { theme } = useTheme();
  return (
    <Card
      className="group text-muted-foreground flex h-full transform flex-col p-4 no-underline shadow-xs transition duration-300 hover:scale-[1.01]"
      gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
    >
      {url ? (
        <Link href={url}>
          <CardContent
            title={title}
            description={description}
            isPrivate={isPrivate}
            tags={tags}
            showIcon
          />
        </Link>
      ) : (
        <CardContent title={title} description={description} tags={tags} />
      )}
    </Card>
  );
}

type CardContentProps = Readonly<{
  title: string;
  description: string;
  isPrivate?: boolean;
  tags: string[];
  showIcon?: boolean;
}>;

function CardContent({
  title,
  description,
  isPrivate,
  tags,
  showIcon,
}: CardContentProps) {
  return (
    <BlurReveal className="flex grow flex-col justify-between gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h2 className="text-foreground text-xl font-bold">
            <BlurRevealContent>{title}</BlurRevealContent>
            {isPrivate && (
              <BlurRevealContent>
                <Badge
                  variant="outline"
                  className="border-badge/50 text-badge ml-2 inline align-middle"
                >
                  Private
                </Badge>
              </BlurRevealContent>
            )}
          </h2>
          {showIcon && (
            <BlurRevealContent>
              <FontAwesomeIcon
                className="group-hover:text-foreground size-5 transform transition duration-200"
                icon={faGithub}
              />
            </BlurRevealContent>
          )}
        </div>
        <p className="group-hover:text-foreground transform transition duration-200">
          <BlurRevealContent>{description}</BlurRevealContent>
        </p>
      </div>
      <div className="group-hover:text-foreground flex flex-wrap gap-2 text-sm">
        {tags.map((label) => (
          <BlurRevealContent key={label}>
            <Tag label={label} />
          </BlurRevealContent>
        ))}
      </div>
    </BlurReveal>
  );
}
