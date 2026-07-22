export function formatPrice(price: number, language: string = 'fr') {
  const locale = language.startsWith('en') ? 'en-CA' : 'fr-CA';
 
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'CAD',
  }).format(price);
}