// Apply the saved direction before first paint. React owns subsequent changes.
try {
  const language = localStorage.getItem('beebites-language') === 'en' ? 'en' : 'ar'
  document.documentElement.lang = language
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
} catch {
  // Arabic remains the default when browser storage is unavailable.
}
