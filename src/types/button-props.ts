type ButtonColorType =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | undefined;

export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: ButtonColorType;
}
