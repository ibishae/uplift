import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type selectProjectSchema } from "@/server/db/schema";
import { Calendar, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { type z } from "zod";

interface Props {
  project: z.infer<typeof selectProjectSchema>;
}

export default function ProjectCard({ project }: Props) {
  const router = useRouter();

  return (
    <Card
      className="transition-all hover:cursor-pointer hover:opacity-70"
      onClick={() => router.push(`/projects/${project.id}`)}
    >
      <CardHeader>
        <CardTitle className="w-64 truncate text-sm font-medium">
          {project.name}
        </CardTitle>
        {project.description && (
          <CardDescription className="w-64 truncate">
            {project.description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="grid gap-2">
        {/* <div className="text-sm font-medium">{title}</div> */}
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4" />
          <span className="text-muted-foreground">
            {/* {Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(due)} */}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <User className="h-4 w-4" />
          {/* <span className="text-muted-foreground">Client: {client}</span> */}
        </div>
      </CardContent>
    </Card>
  );
}
