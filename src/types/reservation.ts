export interface ReservationFormData {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string;
}

// Suppression du modificateur readonly pour permettre les modifications
export interface FormErrors {
  [key: string]: string;
}

export interface NavItem {
  readonly name: string;
  readonly anchor: string;
  readonly highlight?: boolean;
}

export interface ValueCardProps {
  readonly iconSrc: string;
  readonly title: string;
  readonly description: string;
}
