import { cn } from 'app/lib/merge';

type HorizontalDividerProps = {
  className?: string;
};

export const HorizontalDivider = ({ className }: HorizontalDividerProps) => {
  return (
    <div
      className={cn('w-full border-b border-b-strawberry/35', className)}
    ></div>
  );
};
