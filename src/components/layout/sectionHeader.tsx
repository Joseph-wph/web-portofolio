type SectionHeaderProps = {
  title: React.ReactNode;
  content?: string;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  alignment?: 'center' | 'left';
};

export default function SectionHeader({
  title,
  content,
  className = '',
  titleClassName = '',
  contentClassName = '',
  alignment = 'center',
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col justify-center ${
        alignment === 'left'
          ? 'items-start text-left'
          : 'items-center text-center'
      } ${className}`}
    >
      <h2 className={`font-bold ${titleClassName}`}>{title}</h2>

      {content && (
        <p className={`font-medium ${contentClassName}`}>{content}</p>
      )}
    </div>
  );
}
