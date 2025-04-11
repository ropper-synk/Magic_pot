interface IonIconProps {
  name: string;
  size?: string;
  color?: string;
  className?: string;
}

export default function IonIcon({ name, size, color, className }: IonIconProps) {
  return (
    <ion-icon
      name={name}
      size={size}
      color={color}
      className={className}
    />
  );
} 