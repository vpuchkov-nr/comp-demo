export type badgeType = 'success' | 'warning' | 'danger' | 'info';

export interface BadgeProps {
  value: string;
  type?: badgeType | 'danger';
  size?: 'large' | 'xlarge';
  icon?: string;
  iconFontSize?: string;
  onClickBadge?: (badge: BadgeProps) => void;
}
