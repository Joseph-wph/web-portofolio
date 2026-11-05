import { cn } from '../../lib/utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-98.25 md:max-w-3xl lg:max-w-360 px-4 md:px-8 lg:px-30',
        className
      )}
    >
      {children}
    </div>
  );
}
