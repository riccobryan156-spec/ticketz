/**
 * Ticketz — Cinema Ticket Price Comparison Logic & UI Engine
 */

import {
  SEMARANG_CINEMAS,
  MOVIES_CATALOG,
  TICKET_FORMATS,
  getDayTier,
  formatRupiah,
  fetchMovieCatalog,
  getMovieDataFreshness
} from './data.js';

// Application State
const state = {
  selectedCinemaIds: ['xxi-paragon', 'xxi-dp-mall'],
  selectedDate: new Date('2026-08-14'), // Default date
  selectedFormat: 'Regular 2D',
  selectedMovieId: 'all',
  viewMode: 'grid', // 'grid' | 'table'
  modalSearchQuery: ''
};

// DOM Elements
const elements = {
  datePicker: document.getElementById('datePicker'),
  dayTierBadge: document.getElementById('dayTierBadge'),
  formatSelect: document.getElementById('formatSelect'),
  movieSelect: document.getElementById('movieSelect'),
  movieSyncStatus: document.getElementById('movieSyncStatus'),
  selectedChipsContainer: document.getElementById('selectedChipsContainer'),
  cinemaCountLabel: document.getElementById('cinemaCountLabel'),
  cinemaSelectorBox: document.getElementById('cinemaSelectorBox'),
  btnAddCinema: document.getElementById('btnAddCinema'),
  
  // Presets
  presetTopXXI: document.getElementById('presetTopXXI'),
  presetAllChains: document.getElementById('presetAllChains'),
  presetAllSemarang: document.getElementById('presetAllSemarang'),

  // Banner & Views
  savingsHeadline: document.getElementById('savingsHeadline'),
  savingsSubtext: document.getElementById('savingsSubtext'),
  movieBannerContainer: document.getElementById('movieBannerContainer'),
  btnViewGrid: document.getElementById('btnViewGrid'),
  btnViewTable: document.getElementById('btnViewTable'),
  comparisonContainer: document.getElementById('comparisonContainer'),

  // Cinema Selection Modal
  cinemaModalBackdrop: document.getElementById('cinemaModalBackdrop'),
  btnCloseCinemaModal: document.getElementById('btnCloseCinemaModal'),
  btnDoneCinemaModal: document.getElementById('btnDoneCinemaModal'),
  searchCinemaInput: document.getElementById('searchCinemaInput'),
  modalCinemaList: document.getElementById('modalCinemaList'),

  // Verification Modal
  verifyModalBackdrop: document.getElementById('verifyModalBackdrop'),
  btnCloseVerifyModal: document.getElementById('btnCloseVerifyModal'),
  btnOkVerifyModal: document.getElementById('btnOkVerifyModal'),
  verifyModalContent: document.getElementById('verifyModalContent')
};

/**
 * Initialize Application
 */
function initApp() {
  setupDatePicker();
  populateDropdowns();
  attachEventListeners();
  render();
}

/**
 * Configure DatePicker default to today (or 2026-08-14)
 */
function setupDatePicker() {
  const today = state.selectedDate;
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  elements.datePicker.value = `${year}-${month}-${day}`;
}

/**
 * Populate Format & Movie Select Dropdowns
 */
async function populateDropdowns() {
  // Formats
  elements.formatSelect.innerHTML = TICKET_FORMATS.map(f => 
    `<option value="${f.id}" ${f.id === state.selectedFormat ? 'selected' : ''}>${f.label}</option>`
  ).join('');

  await populateMovieDropdown();
}

/**
 * Filter and populate movie select dropdown based on selected cinema locations asynchronously
 */
async function populateMovieDropdown() {
  if (!elements.movieSelect) return;

  if (elements.movieSyncStatus) {
    elements.movieSyncStatus.textContent = 'Syncing...';
  }

  const { movies, freshness } = await fetchMovieCatalog(state.selectedCinemaIds);

  const isStillAvailable = movies.some(m => m.id === state.selectedMovieId);
  if (!isStillAvailable) {
    state.selectedMovieId = 'all';
  }

  const optionsHtml = movies.map(m => 
    `<option value="${m.id}" ${m.id === state.selectedMovieId ? 'selected' : ''}>${m.title}</option>`
  ).join('');

  if (elements.movieSelect.innerHTML !== optionsHtml) {
    elements.movieSelect.innerHTML = optionsHtml;
  }
  elements.movieSelect.value = state.selectedMovieId;

  if (elements.movieSyncStatus) {
    elements.movieSyncStatus.textContent = freshness.label;
  }
}

/**
 * Attach UI Event Listeners
 */
function attachEventListeners() {
  // Date Picker Change
  elements.datePicker.addEventListener('change', (e) => {
    if (e.target.value) {
      state.selectedDate = new Date(e.target.value);
      render();
    }
  });

  // Format Select Change
  elements.formatSelect.addEventListener('change', (e) => {
    state.selectedFormat = e.target.value;
    render();
  });

  // Movie Select Change
  elements.movieSelect.addEventListener('change', (e) => {
    state.selectedMovieId = e.target.value;
    render();
  });

  // Cinema Selector Modal Triggers
  elements.cinemaSelectorBox.addEventListener('click', (e) => {
    if (!e.target.closest('.cinema-chip-remove')) {
      openCinemaModal();
    }
  });
  elements.btnAddCinema.addEventListener('click', (e) => {
    e.stopPropagation();
    openCinemaModal();
  });
  elements.btnCloseCinemaModal.addEventListener('click', closeCinemaModal);
  elements.btnDoneCinemaModal.addEventListener('click', closeCinemaModal);
  elements.searchCinemaInput.addEventListener('input', (e) => {
    state.modalSearchQuery = e.target.value.toLowerCase();
    renderModalCinemaList();
  });

  // Preset Shortcuts
  elements.presetTopXXI.addEventListener('click', () => {
    state.selectedCinemaIds = ['xxi-paragon', 'xxi-dp-mall'];
    render();
  });
  elements.presetAllChains.addEventListener('click', () => {
    state.selectedCinemaIds = ['xxi-paragon', 'xxi-transmart-majapahit', 'cinepolis-java-supermall'];
    render();
  });
  elements.presetAllSemarang.addEventListener('click', () => {
    state.selectedCinemaIds = SEMARANG_CINEMAS.map(c => c.id);
    render();
  });

  // View Mode Switches
  elements.btnViewGrid.addEventListener('click', () => {
    state.viewMode = 'grid';
    elements.btnViewGrid.classList.add('active');
    elements.btnViewTable.classList.remove('active');
    renderComparisonView();
  });
  elements.btnViewTable.addEventListener('click', () => {
    state.viewMode = 'table';
    elements.btnViewTable.classList.add('active');
    elements.btnViewGrid.classList.remove('active');
    renderComparisonView();
  });

  // Verification Modal Close
  elements.btnCloseVerifyModal.addEventListener('click', closeVerifyModal);
  elements.btnOkVerifyModal.addEventListener('click', closeVerifyModal);
}

/**
 * Open/Close Modal Functions
 */
function openCinemaModal() {
  elements.cinemaModalBackdrop.classList.add('open');
  elements.searchCinemaInput.value = '';
  state.modalSearchQuery = '';
  renderModalCinemaList();
}

function closeCinemaModal() {
  elements.cinemaModalBackdrop.classList.remove('open');
}

function openVerifyModal(cinemaId) {
  const cinema = SEMARANG_CINEMAS.find(c => c.id === cinemaId);
  if (!cinema) return;

  const v = cinema.verification;
  const dateFormatted = new Date(v.lastChecked).toLocaleString('id-ID', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  elements.verifyModalContent.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="background-color: var(--brand-ivory-warm); padding: 1rem; border-radius: var(--radius-md);">
        <h4 style="font-size: 1.1rem; color: var(--brand-navy); font-weight: 800; margin-bottom: 0.25rem;">${cinema.name}</h4>
        <p style="font-size: 0.85rem; color: var(--brand-navy-muted);">${cinema.address}</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--brand-ivory-dark); padding-bottom: 0.5rem;">
          <span style="font-weight: 600; color: var(--brand-navy-muted); font-size: 0.9rem;">Verification Status:</span>
          <span style="font-weight: 800; color: var(--color-success); font-size: 0.9rem;">✓ Verified Source</span>
        </div>

        <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--brand-ivory-dark); padding-bottom: 0.5rem;">
          <span style="font-weight: 600; color: var(--brand-navy-muted); font-size: 0.9rem;">Source Name:</span>
          <span style="font-weight: 700; color: var(--brand-navy); font-size: 0.9rem;">${v.sourceName}</span>
        </div>

        <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--brand-ivory-dark); padding-bottom: 0.5rem;">
          <span style="font-weight: 600; color: var(--brand-navy-muted); font-size: 0.9rem;">Last Checked:</span>
          <span style="font-weight: 700; color: var(--brand-navy); font-size: 0.9rem;">${dateFormatted}</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.35rem; margin-top: 0.5rem;">
          <span style="font-weight: 600; color: var(--brand-navy-muted); font-size: 0.85rem;">Official Source Link:</span>
          <a href="${v.sourceUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--brand-burgundy); font-weight: 700; font-size: 0.9rem; word-break: break-all;">
            ${v.sourceUrl} &rarr;
          </a>
        </div>
      </div>
    </div>
  `;

  elements.verifyModalBackdrop.classList.add('open');
}

function closeVerifyModal() {
  elements.verifyModalBackdrop.classList.remove('open');
}

/**
 * Render Modal Cinema Selection List
 */
function renderModalCinemaList() {
  const filtered = SEMARANG_CINEMAS.filter(c => 
    c.name.toLowerCase().includes(state.modalSearchQuery) ||
    c.location.toLowerCase().includes(state.modalSearchQuery)
  );

  elements.modalCinemaList.innerHTML = filtered.map(cinema => {
    const isSelected = state.selectedCinemaIds.includes(cinema.id);
    return `
      <div class="cinema-select-item ${isSelected ? 'selected' : ''}" data-id="${cinema.id}">
        <div>
          <div style="font-weight: 700; color: var(--brand-navy); font-size: 0.95rem;">${cinema.name}</div>
          <div style="font-size: 0.8rem; color: var(--brand-navy-muted);">${cinema.location}</div>
        </div>
        <input type="checkbox" ${isSelected ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: var(--brand-burgundy);" />
      </div>
    `;
  }).join('');

  elements.modalCinemaList.querySelectorAll('.cinema-select-item').forEach(item => {
    item.addEventListener('click', () => {
      const cid = item.getAttribute('data-id');
      if (state.selectedCinemaIds.includes(cid)) {
        if (state.selectedCinemaIds.length > 1) {
          state.selectedCinemaIds = state.selectedCinemaIds.filter(id => id !== cid);
        } else {
          alert('You must compare at least 1 or 2 cinemas.');
          return;
        }
      } else {
        state.selectedCinemaIds.push(cid);
      }
      renderModalCinemaList();
      render();
    });
  });
}

/**
 * Main Render Pipeline
 */
async function render() {
  renderDayTierBadge();
  renderSelectedChips();
  await populateMovieDropdown();
  renderMovieBanner();
  renderComparisonView();
  
  // Re-initialize Lucide Icons after DOM updates
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * Render Movie Banner for Selected Movie
 */
function renderMovieBanner() {
  if (!elements.movieBannerContainer) return;

  if (state.selectedMovieId === 'all') {
    elements.movieBannerContainer.innerHTML = '';
    return;
  }

  const movie = MOVIES_CATALOG.find(m => m.id === state.selectedMovieId);
  if (!movie) {
    elements.movieBannerContainer.innerHTML = '';
    return;
  }

  elements.movieBannerContainer.innerHTML = `
    <div class="movie-detail-card">
      <div class="movie-poster-box" style="background: ${movie.posterBg};">
        <i data-lucide="film" class="poster-icon"></i>
        <span style="font-size: 0.7rem; letter-spacing: 0.04em;">NOW SHOWING</span>
      </div>

      <div class="movie-info-body">
        <div class="movie-info-header">
          <h3 class="movie-card-title">${movie.title}</h3>
          <button class="btn-clear-movie" id="btnClearMovieFilter" title="Clear movie selection">
            <i data-lucide="x" style="width: 14px; height: 14px;"></i> Clear Filter
          </button>
        </div>

        <div class="movie-meta-tags">
          <span class="rating-badge">${movie.rating}</span>
          <span class="duration-chip"><i data-lucide="clock" style="width: 12px; height: 12px;"></i> ${movie.duration}</span>
          <span class="genre-chip">${movie.genre}</span>
        </div>

        <p class="movie-card-desc">${movie.description}</p>
      </div>
    </div>
  `;

  const btnClear = document.getElementById('btnClearMovieFilter');
  if (btnClear) {
    btnClear.addEventListener('click', () => {
      state.selectedMovieId = 'all';
      elements.movieSelect.value = 'all';
      render();
    });
  }
}

/**
 * Render Day Tier Badge
 */
function renderDayTierBadge() {
  const tierInfo = getDayTier(state.selectedDate);
  elements.dayTierBadge.textContent = tierInfo.label;
}

/**
 * Render Selected Cinema Chips
 */
function renderSelectedChips() {
  const selectedCinemas = SEMARANG_CINEMAS.filter(c => state.selectedCinemaIds.includes(c.id));
  
  elements.cinemaCountLabel.textContent = `${selectedCinemas.length} selected`;

  elements.selectedChipsContainer.innerHTML = selectedCinemas.map(c => `
    <span class="cinema-chip">
      ${c.shortName}
      <span class="cinema-chip-remove" data-id="${c.id}" title="Remove cinema">
        <i data-lucide="x" style="width: 14px; height: 14px;"></i>
      </span>
    </span>
  `).join('');

  // Attach click listeners for chip removals
  elements.selectedChipsContainer.querySelectorAll('.cinema-chip-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const cid = btn.getAttribute('data-id');
      if (state.selectedCinemaIds.length > 1) {
        state.selectedCinemaIds = state.selectedCinemaIds.filter(id => id !== cid);
        render();
      } else {
        alert('You must compare at least 1 or 2 cinemas.');
      }
    });
  });
}

/**
 * Render Comparison View (Cards vs Table) & Dynamic Savings Summary
 */
function renderComparisonView() {
  const dayTierObj = getDayTier(state.selectedDate);
  const tier = dayTierObj.tier; // 'weekday' | 'friday' | 'weekend'
  const format = state.selectedFormat;

  const selectedMovie = MOVIES_CATALOG.find(m => m.id === state.selectedMovieId);

  // Process pricing data for selected cinemas
  const items = state.selectedCinemaIds.map(cid => {
    const cinema = SEMARANG_CINEMAS.find(c => c.id === cid);

    // 1. Movie schedule availability check
    if (selectedMovie && selectedMovie.id !== 'all' && selectedMovie.cinemaIds) {
      const isMovieShowing = selectedMovie.cinemaIds.includes(cid);
      if (!isMovieShowing) {
        return {
          cinema,
          price: null,
          available: false,
          reason: `Not scheduled at this cinema`
        };
      }
    }

    // 2. Format availability check
    const formatPricing = cinema ? cinema.pricing[format] : null;
    if (!formatPricing) {
      return {
        cinema,
        price: null,
        available: false,
        reason: `${format} format is not available at this cinema.`
      };
    }

    const price = formatPricing[tier];
    return {
      cinema,
      price,
      available: true
    };
  });

  // Calculate cheapest valid option
  const validItems = items.filter(i => i.available && typeof i.price === 'number');
  validItems.sort((a, b) => a.price - b.price);

  const cheapestItem = validItems.length > 0 ? validItems[0] : null;
  const mostExpensiveItem = validItems.length > 0 ? validItems[validItems.length - 1] : null;

  const movieTagStr = (selectedMovie && selectedMovie.id !== 'all') ? ` for "${selectedMovie.title}"` : '';

  // Update Savings Summary Banner
  if (cheapestItem && mostExpensiveItem && validItems.length >= 2) {
    const diff = mostExpensiveItem.price - cheapestItem.price;
    if (diff > 0) {
      elements.savingsHeadline.textContent = `${cheapestItem.cinema.shortName} is the cheapest option${movieTagStr} at ${formatRupiah(cheapestItem.price)}!`;
      elements.savingsSubtext.textContent = `Save ${formatRupiah(diff)} per ticket compared to ${mostExpensiveItem.cinema.shortName} (${formatRupiah(mostExpensiveItem.price)}) on ${dayTierObj.label}.`;
    } else {
      elements.savingsHeadline.textContent = `All showing cinemas have equal pricing${movieTagStr} at ${formatRupiah(cheapestItem.price)}.`;
      elements.savingsSubtext.textContent = `Standard price for ${format} on ${dayTierObj.label} across your selected locations.`;
    }
  } else if (cheapestItem) {
    if (items.length > 1) {
      elements.savingsHeadline.textContent = `${cheapestItem.cinema.shortName} is the only selected cinema showing${movieTagStr} in ${format} format at ${formatRupiah(cheapestItem.price)}.`;
      elements.savingsSubtext.textContent = `Other selected cinemas do not have this movie or format scheduled on ${dayTierObj.label}.`;
    } else {
      elements.savingsHeadline.textContent = `${cheapestItem.cinema.shortName} ticket price${movieTagStr}: ${formatRupiah(cheapestItem.price)}`;
      elements.savingsSubtext.textContent = `Showing verified price for ${format} on ${dayTierObj.label}. Add more cinemas to compare savings!`;
    }
  } else {
    if (selectedMovie && selectedMovie.id !== 'all') {
      elements.savingsHeadline.textContent = `"${selectedMovie.title}" is not showing in ${format} format at selected cinemas.`;
      elements.savingsSubtext.textContent = `Try selecting different cinemas or switching ticket format (e.g. Regular 2D).`;
    } else {
      elements.savingsHeadline.textContent = `Format ${format} unavailable for current selection.`;
      elements.savingsSubtext.textContent = `Please select a different format (e.g. Regular 2D) or change your cinema selection.`;
    }
  }

  // Render Layout Mode
  if (state.viewMode === 'grid') {
    renderCardsGrid(items, cheapestItem);
  } else {
    renderTable(items, cheapestItem);
  }
}

/**
 * Render Cards Grid View
 */
function renderCardsGrid(items, cheapestItem) {
  elements.comparisonContainer.innerHTML = `
    <div class="cards-grid">
      ${items.map(item => {
        const { cinema, price, available, reason } = item;
        const isCheapest = cheapestItem && available && cinema.id === cheapestItem.cinema.id;
        const priceDiff = cheapestItem && available && price ? price - cheapestItem.price : 0;

        return `
          <div class="cinema-card ${isCheapest ? 'is-cheapest' : ''}">
            ${isCheapest ? `
              <div class="cheapest-ribbon">
                <i data-lucide="award" style="width: 14px; height: 14px;"></i> Cheapest Option
              </div>
            ` : ''}

            <div>
              <div class="card-header">
                <div>
                  <span class="cinema-chain-tag ${cinema.chain}">${cinema.chain}</span>
                  <h3 class="card-title" style="margin-top: 0.4rem;">${cinema.name}</h3>
                </div>
              </div>
              <div class="card-location">
                <i data-lucide="map-pin" style="width: 14px; height: 14px;"></i> ${cinema.location} (${cinema.distanceKm} km)
              </div>
            </div>

            <div class="price-block">
              <span class="price-format-label">${state.selectedFormat} Format</span>
              ${available ? `
                <span class="price-main">${formatRupiah(price)}</span>
                ${isCheapest ? `
                  <span class="price-diff-tag">★ Lowest Price Available</span>
                ` : `
                  <span class="price-diff-tag more-expensive">+${formatRupiah(priceDiff)} vs cheapest</span>
                `}
              ` : `
                <span class="price-main" style="font-size: 1.2rem; color: var(--brand-navy-muted);">Unavailable</span>
                <span class="price-diff-tag more-expensive" style="color: var(--color-warning);">${reason}</span>
              `}
            </div>

            <div class="card-footer">
              <div class="freshness-indicator">
                <span class="freshness-dot"></span>
                <span>Verified Source</span>
              </div>
              <button class="btn-card-action btn-verify-details" data-id="${cinema.id}">
                Details & Source &rarr;
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Attach verify modal event listeners
  elements.comparisonContainer.querySelectorAll('.btn-verify-details').forEach(btn => {
    btn.addEventListener('click', () => {
      openVerifyModal(btn.getAttribute('data-id'));
    });
  });
}

/**
 * Render Table View
 */
function renderTable(items, cheapestItem) {
  elements.comparisonContainer.innerHTML = `
    <div class="table-wrapper">
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Cinema</th>
            <th>Location</th>
            <th>Format</th>
            <th>Ticket Price</th>
            <th>Price Difference</th>
            <th>Data Source</th>
          </tr>
        </thead>
        <tbody>
          ${items.map(item => {
            const { cinema, price, available, reason } = item;
            const isCheapest = cheapestItem && available && cinema.id === cheapestItem.cinema.id;
            const priceDiff = cheapestItem && available && price ? price - cheapestItem.price : 0;

            return `
              <tr class="${isCheapest ? 'is-cheapest' : ''}">
                <td>
                  <div style="font-weight: 800; color: var(--brand-navy);">${cinema.name}</div>
                  <span class="cinema-chain-tag ${cinema.chain}" style="font-size: 0.7rem; padding: 0.1rem 0.4rem;">${cinema.chain}</span>
                </td>
                <td>${cinema.location}</td>
                <td><strong>${state.selectedFormat}</strong></td>
                <td>
                  ${available ? `
                    <span style="font-size: 1.1rem; font-weight: 800; color: ${isCheapest ? 'var(--brand-burgundy)' : 'var(--brand-navy)'};">
                      ${formatRupiah(price)}
                    </span>
                  ` : `
                    <span style="color: var(--brand-navy-muted); font-size: 0.9rem;">N/A</span>
                  `}
                </td>
                <td>
                  ${available ? (
                    isCheapest ? '<span style="color: var(--color-success); font-weight: 800;">Cheapest</span>' : `+${formatRupiah(priceDiff)}`
                  ) : `<span style="color: var(--color-warning); font-size: 0.8rem;">${reason}</span>`}
                </td>
                <td>
                  <button class="btn-card-action btn-verify-details" data-id="${cinema.id}">
                    ${cinema.verification.sourceName}
                  </button>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;

  // Attach verify modal event listeners
  elements.comparisonContainer.querySelectorAll('.btn-verify-details').forEach(btn => {
    btn.addEventListener('click', () => {
      openVerifyModal(btn.getAttribute('data-id'));
    });
  });
}

// Boot application when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
