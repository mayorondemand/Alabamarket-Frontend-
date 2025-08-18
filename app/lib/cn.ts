// utils/cn.ts (or cn.js if you're not using TypeScript)
export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}
