import Image from 'next/image';
import Link from 'next/link';

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export default function BrandLogo({ className = '', priority = false }: BrandLogoProps) {
  return (
    <Link href="/" className={`brand-lockup ${className}`} aria-label="IMB Tech home">
      <Image
        src="/imb-tech-logo.png"
        alt="IMB Tech — solar, wiring and electrical services"
        className="brand-logo"
        width={768}
        height={768}
        sizes="(max-width: 700px) 58px, 72px"
        priority={priority}
      />
      <span className="brand-copy">
        <span className="brand-name">IMB Tech</span>
        <span className="brand-tag">Electrical • Solar • Wiring</span>
      </span>
    </Link>
  );
}
