export function WheatStalk({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`wheat-stalk ${className}`}
      viewBox="0 0 100 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M47 192C61 142 51 89 66 24M46 191C32 142 29 104 28 62M47 189C67 152 76 127 81 88" />
      <path d="M58 135C27 123 29 104 31 98c17 6 26 20 27 37ZM57 113c26-10 34-29 32-35-20 4-31 18-32 35ZM58 95C35 85 39 66 42 63c15 5 18 18 16 32ZM61 73c22-8 27-24 24-30-15 4-22 16-24 30ZM65 52C50 40 53 22 58 19c11 10 10 20 7 33ZM66 30c-2-15 6-24 11-26 3 13-1 21-11 26ZM30 111C12 108 8 95 10 88c12 2 18 10 20 23ZM29 88C39 78 40 63 35 57c-9 7-10 18-6 31ZM77 112c19-5 22-19 20-24-11 2-18 10-20 24Z" />
      <path d="M47 162c-13-11-23-14-32-13m38 12c15-5 25-5 34-1" />
    </svg>
  )
}

export function Bee({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`bee ${className}`}
      viewBox="0 0 70 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M32 26c-23-17-27 6-8 9m12-9c2-27 23-15 13 0" />
      <ellipse cx="37" cy="37" rx="18" ry="12" transform="rotate(-20 37 37)" fill="var(--amber)" />
      <path d="m28 29 7 20m4-24 7 21m9-17 6-5m-9 2 1-6M18 44l-5 4" />
      <circle cx="50" cy="32" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function RollingPin() {
  return (
    <svg
      viewBox="0 0 420 320"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="rolling-pin"
    >
      <g transform="rotate(-28 210 160)">
        <rect x="96" y="116" width="228" height="75" rx="19" fill="var(--dough)" />
        <path d="M96 139H49c-18 0-18 27 0 27h47m228-27h47c18 0 18 27 0 27h-47M112 122v63m195-63v63m-180-54h145m-145 46h132m-136-30h53m20 0h69m-143 14h114" />
      </g>
      <path d="M124 241c27-22 48-25 83-6 39 21 69 15 96 0M123 257c38-13 57-12 86 3 31 16 70 10 92-3M126 241l-3 16m178-22v22" />
      <circle cx="93" cy="255" r="3" />
      <circle cx="318" cy="213" r="2" />
      <path d="m160 67 5-7m8 10 5-5m-28 14 4-5" />
    </svg>
  )
}
