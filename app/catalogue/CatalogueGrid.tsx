'use client';

import { useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Eye, Search, X } from 'lucide-react';
import { categories, catalogueItems, type CatalogueCategory, type CatalogueItem } from './catalogue-data';
import styles from './catalogue.module.css';

type Filter = 'All' | CatalogueCategory;

function quoteHref(item: CatalogueItem) {
  return `/contact?enquiryType=${encodeURIComponent(item.enquiryType)}&item=${encodeURIComponent(item.name)}`;
}

export default function CatalogueGrid() {
  const [filter, setFilter] = useState<Filter>('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<CatalogueItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visibleItems = useMemo(() => {
    const term = query.trim().toLowerCase();
    return catalogueItems.filter((item) => {
      const matchesFilter = filter === 'All' || item.category === filter;
      const matchesQuery =
        !term || `${item.name} ${item.summary} ${item.category}`.toLowerCase().includes(term);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  function openQuickView(item: CatalogueItem) {
    setSelected(item);
    dialogRef.current?.showModal();
  }

  function closeQuickView() {
    dialogRef.current?.close();
  }

  const filters: Filter[] = ['All', ...categories];

  return (
    <section className={styles.catalogue} id="catalogue" aria-labelledby="catalogue-title">
      <div className={styles.toolbar}>
        <div>
          <p className={styles.kicker}>The collection</p>
          <h2 id="catalogue-title" className={styles.sectionTitle}>
            Browse the catalogue
          </h2>
        </div>

        <label className={styles.search}>
          <Search aria-hidden="true" size={18} />
          <span className="sr-only">Search the catalogue</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search panels, inverters, cables..."
          />
        </label>
      </div>

      <div className={styles.filters} role="group" aria-label="Filter by category">
        {filters.map((option) => (
          <button
            key={option}
            type="button"
            className={styles.filterChip}
            aria-pressed={filter === option}
            onClick={() => setFilter(option)}
          >
            {option}
            <span className={styles.filterCount}>
              {option === 'All' ? catalogueItems.length : catalogueItems.filter((item) => item.category === option).length}
            </span>
          </button>
        ))}
      </div>

      <p className={styles.resultCount} aria-live="polite">
        Showing {visibleItems.length} of {catalogueItems.length} items
      </p>

      {visibleItems.length === 0 ? (
        <div className={styles.empty}>
          <p>No items match your search.</p>
          <button
            type="button"
            className={styles.ghostBtn}
            onClick={() => {
              setQuery('');
              setFilter('All');
            }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <ul className={styles.grid}>
          {visibleItems.map((item) => (
            <li key={item.id} className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.mediaImg}
                />
                {item.badge && <span className={styles.badge}>{item.badge}</span>}
                <button type="button" className={styles.quickView} onClick={() => openQuickView(item)}>
                  <Eye aria-hidden="true" size={16} />
                  Quick view
                  <span className="sr-only">: {item.name}</span>
                </button>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.cardCategory}>{item.category}</p>
                <h3 className={styles.cardTitle}>{item.name}</h3>
                <p className={styles.cardSummary}>{item.summary}</p>

                <div className={styles.cardFooter}>
                  <div>
                    <span className={styles.priceLabel}>Price on request</span>
                    <span className={styles.supply}>{item.supply}</span>
                  </div>
                  <Link href={quoteHref(item)} className={styles.quoteBtn}>
                    Get quote <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="quick-view-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) closeQuickView();
        }}
        onClose={() => setSelected(null)}
      >
        {selected && (
          <div className={styles.dialogInner}>
            <div className={styles.dialogMedia}>
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className={styles.mediaImg}
              />
            </div>
            <div className={styles.dialogBody}>
              <button type="button" className={styles.closeBtn} onClick={closeQuickView} aria-label="Close quick view">
                <X size={20} aria-hidden="true" />
              </button>
              <p className={styles.cardCategory}>{selected.category}</p>
              <h3 id="quick-view-title" className={styles.dialogTitle}>
                {selected.name}
              </h3>
              <p className={styles.cardSummary}>{selected.summary}</p>
              <ul className={styles.highlights}>
                {selected.highlights.map((highlight) => (
                  <li key={highlight}>
                    <Check aria-hidden="true" size={16} />
                    {highlight}
                  </li>
                ))}
              </ul>
              <p className={styles.dialogNote}>
                Pricing, stock and wholesale rates are confirmed by IMB Tech when you request a quote.
              </p>
              <div className={styles.dialogActions}>
                <Link href={quoteHref(selected)} className={styles.quoteBtn}>
                  Request a quote <ArrowRight aria-hidden="true" size={16} />
                </Link>
                <a
                  href={`https://wa.me/2348106127461?text=${encodeURIComponent(`Hello IMB Tech, I'm interested in: ${selected.name}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.ghostBtn}
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
