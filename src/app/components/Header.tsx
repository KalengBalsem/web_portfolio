import { Avatar } from "@/components/avatar";
import { Button } from "@/components/ui/button";

export function Header({ profile }: { profile: any }) {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex-1 space-y-3">
        <h1 className="text-3xl font-bold">{profile.name}</h1>
        <p className="text-sm text-foreground/80">{profile.title}</p>
        <p className="whitespace-pre-line text-sm text-foreground/70">
          {profile.about}
        </p>
        <div className="flex gap-2 pt-2">
          {profile.socials.map((s: any) => (
            <Button
              key={s.name}
              className="size-8"
              variant="outline"
              size="icon"
              asChild
            >
              <a href={s.url} aria-label={s.name} target="_blank" rel="noopener noreferrer">
                <s.icon className="size-4" />
              </a>
            </Button>
          ))}
        </div>
      </div>
      <Avatar
        className="size-32"
        src={profile.avatarUrl}
        alt={`${profile.name} profile picture`}
        fallback="AB"
      />
    </header>
  );
}
