import React from 'react'

const variantClasses = {
  primary: 'bg-accent-500 hover:bg-accent-600 text-white shadow-cta hover:shadow-lg hover:-translate-y-0.5',
  secondary: 'bg-navy-900 hover:bg-navy-800 text-white shadow-soft hover:shadow-card hover:-translate-y-0.5',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-navy-900',
  ghost: 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-base md:text-lg',
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 active:scale-[0.98]'

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
    fullWidth ? 'w-full' : ''
  } ${className}`

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" strokeWidth={2.2} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" strokeWidth={2.2} />}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  )
}

export default Button
