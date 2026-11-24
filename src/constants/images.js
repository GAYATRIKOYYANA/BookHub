// Inline SVG placeholders so the app works without external files.
// Replace these with the image URLs from your Design Files if you want an exact match.
const toUri = (svg) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

export const LOGO_IMG = toUri(
  '<svg xmlns="http://www.w3.org/2000/svg" width="140" height="36" viewBox="0 0 140 36"><text x="0" y="27" font-family="Arial,sans-serif" font-size="26" font-weight="700" fill="#1e293b">Book<tspan fill="#0284c7">Hub</tspan></text></svg>'
)

export const LOGIN_HERO_IMG = toUri(
  '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0c4a6e"/><stop offset="1" stop-color="#0284c7"/></linearGradient></defs><rect width="600" height="800" fill="url(#g)"/><text x="300" y="410" text-anchor="middle" font-family="Arial,sans-serif" font-size="64" font-weight="700" fill="#fff">Book Hub</text></svg>'
)

export const FAILURE_IMG = toUri(
  '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><polygon points="60,10 112,105 8,105" fill="#fef3c7" stroke="#f59e0b" stroke-width="6" stroke-linejoin="round"/><rect x="55" y="42" width="10" height="35" rx="4" fill="#f59e0b"/><circle cx="60" cy="90" r="6" fill="#f59e0b"/></svg>'
)

export const NO_BOOKS_IMG = toUri(
  '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><circle cx="52" cy="52" r="34" fill="#e0f2fe" stroke="#0284c7" stroke-width="7"/><line x1="78" y1="78" x2="108" y2="108" stroke="#0284c7" stroke-width="9" stroke-linecap="round"/><line x1="38" y1="38" x2="66" y2="66" stroke="#0284c7" stroke-width="6" stroke-linecap="round"/><line x1="66" y1="38" x2="38" y2="66" stroke="#0284c7" stroke-width="6" stroke-linecap="round"/></svg>'
)

export const NOT_FOUND_IMG = toUri(
  '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="120" viewBox="0 0 160 120"><rect x="20" y="15" width="120" height="90" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="6"/><line x1="80" y1="15" x2="80" y2="105" stroke="#0284c7" stroke-width="5"/><text x="50" y="72" text-anchor="middle" font-family="Arial,sans-serif" font-size="26" font-weight="700" fill="#0284c7">4</text><text x="110" y="72" text-anchor="middle" font-family="Arial,sans-serif" font-size="26" font-weight="700" fill="#0284c7">04</text></svg>'
)
