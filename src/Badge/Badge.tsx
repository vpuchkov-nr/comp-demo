import React from 'react';
import { Badge as PrimeBadge } from 'primereact/badge';
import { BadgeProps } from './Badge.ts';
import './Badge.scss';
import ThemeProvider from '../ThemeProvider';

function Badge(props: BadgeProps) {
  const {
    value,
    onClickBadge,
    icon = '',
    iconFontSize = '16px',
    type = 'danger',
    size = 'large',
  } = props;

  const handleClick = () => {
    onClickBadge && onClickBadge(props);
  };

  const iconClassName = `${icon} p-overlay-badge`;
  const iconStyle = { fontSize: iconFontSize };

  const Component = () => (
    <PrimeBadge value={value} severity={type} size={size} />
  );

  return (
    <ThemeProvider>
      <div className="badge-container test" onClick={handleClick}>
        {icon ? (
          <i className={iconClassName} style={iconStyle}>
            <Component />
          </i>
        ) : (
          <Component />
        )}
      </div>
    </ThemeProvider>
  );
}

export default Badge;
