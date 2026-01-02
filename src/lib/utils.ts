import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Smooth scroll to element
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Share property functionality
export function shareProperty(title: string, url: string) {
  if (navigator.share) {
    navigator.share({
      title: title,
      url: url,
    }).catch(() => {
      // Fallback to clipboard
      copyToClipboard(url);
    });
  } else {
    copyToClipboard(url);
  }
}

// Copy to clipboard
export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    // You could show a toast notification here
  });
}
