import { FaWhatsapp } from 'react-icons/fa';
import { memo, useCallback } from 'react';
import { ButtonBase, LoadingSpinner } from './Button.styles';

const Button = memo(({
  children,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  as,
  to,
  href,
  target,
  ...props
}) => {
  const handleClick = useCallback((e) => {
    if (loading || disabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  }, [loading, disabled, onClick]);

  const buttonProps = {
    $variant: variant,
    $size: size,
    $loading: loading,
    disabled: disabled || loading,
    onClick: handleClick,
    type,
    as,
    to,
    href,
    target,
    ...props
  };

  return (
    <ButtonBase {...buttonProps}>
      {loading && <LoadingSpinner className="spinner" />}
      {variant === 'whatsapp' && !loading && <FaWhatsapp />}
      {children}
    </ButtonBase>
  );
});

Button.displayName = 'Button';

export default Button;