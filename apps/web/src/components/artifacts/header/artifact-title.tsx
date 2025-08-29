import { CircleX, LoaderCircle } from "lucide-react";

interface ArtifactTitleProps {
  title: string;
  isArtifactSaved: boolean;
  artifactUpdateFailed: boolean;
}

export function ArtifactTitle(props: ArtifactTitleProps) {
  return (
    <div className="pl-[6px] pt-3 flex items-center justify-between ml-[6px] gap-4 max-w-1/2">
      <h1 className="text-xl font-medium text-gray-600 line-clamp-1 pl-[40px] flex-1">
        {props.title}
      </h1>
      <span className="flex-shrink-0">
        {props.isArtifactSaved ? null : !props.artifactUpdateFailed ? (
          <span className="flex items-center justify-start gap-1 text-gray-400">
            <LoaderCircle className="animate-spin w-[10px] h-[10px]" />
            <p className="text-xs font-light">Saving</p>
          </span>
        ) : props.artifactUpdateFailed ? (
          <span className="flex items-center justify-start gap-1 text-red-300">
            <CircleX className="w-[10px] h-[10px]" />
            <p className="text-xs font-light">Failed to save</p>
          </span>
        ) : null}
      </span>
    </div>
  );
}
