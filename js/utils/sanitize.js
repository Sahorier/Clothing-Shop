/**
 * HTML Sanitization and Escaping Utility
 */

export function escapeHTML(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function sanitizeAttribute(str) {
  if (!str) return "";
  return String(str).replace(/["'<>]/g, "");
}
