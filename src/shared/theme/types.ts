export type ThemeName = 'light' | 'dark' | 'digital' | 'monochrome';

export interface PrimitiveTokens {
  colors: {
    neutral: Record<number, string>;
    red: Record<number, string>;
    green: Record<number, string>;
    blue: Record<number, string>;
    amber: Record<number, string>;
  };
}

export interface SemanticTokens {
  color: {
    // Background
    'bg-primary': string;
    'bg-secondary': string;
    'bg-tertiary': string;

    // Background status
    'bg-danger': string;
    'bg-warning': string;
    'bg-success': string;
    'bg-info': string;

    // Text
    'text-primary': string;
    'text-secondary': string;
    'text-tertiary': string;

    // Text status
    'text-danger': string;
    'text-warning': string;
    'text-success': string;
    'text-info': string;

    // Border
    'border-primary': string;
    'border-secondary': string;
    'border-tertiary': string;

    // Border status
    'border-danger': string;
    'border-warning': string;
    'border-success': string;
    'border-info': string;
  };

  radius: {
    sm: string;
    md: string;
    lg: string;
  };

  shadow: {
    sm: string;
    md: string;
  };
}

export interface Theme {
  name: ThemeName;
  tokens: SemanticTokens;
  isProductionReady: boolean;
}