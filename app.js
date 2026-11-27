const icons = {
    history: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>',
    coffee: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>',
    utensils: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    bed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>',
    dumbbell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.4 14.4 9.6 9.6M18.5 2.1l3.4 3.4M2.1 18.5l3.4 3.4M21.2 5.5l-2.8-2.8M5.5 21.2l-2.8-2.8M18.4 8.5 15.5 5.6M8.5 18.4l-2.9-2.9"/></svg>',
    medical: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M13 2 9 10l-7 3 7 3 4 8 4-8 5-3-5-3-4-8Z"/><path d="M19 2v5"/><path d="M21.5 4.5h-5"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m6 9 6 6 6-6"/></svg>',
    expand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="M9 21H3v-6"/><path d="m3 21 7-7"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/></svg>',
    ticket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 9a3 3 0 0 0 0 6v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3a3 3 0 0 0 0-6V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.1 19.1 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z"/></svg>',
    building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 12H4a2 2 0 0 0-2 2v8"/><path d="M18 9h2a2 2 0 0 1 2 2v11"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>',
    arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m15 18-6-6 6-6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m20 6-11 11-5-5"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
    send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
    minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
    heartFilled: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',
    monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
    mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>'
};


window.yeriChatState = { lastResultIds: [], lastIntent: null, businessesById: {} };

function rememberYeriBusinesses(businesses) {
    if (!Array.isArray(businesses)) return;
    const cache = window.yeriChatState.businessesById ||= {};
    businesses.forEach(business => {
        if (business && business.id != null) cache[String(business.id)] = business;
    });
}
window.yeriLocationState = { position: null };

function yeriDistanceLabel(value) {
    const distance = value == null ? NaN : Number(value);
    return Number.isFinite(distance) && distance >= 0
        ? `<span data-yeri-distance data-yeri-distance-value="${distance}">${escapeUiHtml(distance.toLocaleString(userLocale(), { maximumFractionDigits: 2 }))} ${escapeUiHtml(uiSource("km kuş uçuşu"))}</span>`
        : '';
}

function isExplicitYeriRouteRequest(message) {
    const text = message.trim().toLocaleLowerCase('tr-TR');
    return /(?:^|\s)(?:rota(?:yı|sı|ya|nı)?|plan(?:ı)?|route|itinerary)(?=\s|$|[.!?])|(?:önce|first).*?(?:sonra|then)|(?:مسار|خطة|أولا).*(?:ثم|بعدها)?/u.test(text);
}

function clearYeriDistanceDisplay() {
    document.querySelectorAll('.message.ai').forEach(message => {
        if (message.querySelector('[data-yeri-distance]') && !message.querySelector('[data-yeri-stale-location]')) {
            const note = document.createElement('div');
            note.dataset.yeriStaleLocation = '';
            note.textContent = uiSource("Konum değişti. Güncel mesafe için yeniden ara.");
            message.querySelector('.msg-content')?.appendChild(note);
        }
    });
    document.querySelectorAll('[data-yeri-distance]').forEach(label => label.remove());
    document.querySelectorAll('[data-yeri-score]').forEach(label => label.remove());
    document.querySelectorAll('[data-yeri-insight]').forEach(insight => insight.remove());
    window.yeri_insight_shown = false;
    if (window.yeriChatState) {
        window.yeriChatState.radiusContextToken = null;
        window.yeriChatState.nextRadiusKm = null;
        window.yeriChatState.pendingRadiusExpansion = null;
    }
    window.yeriLocationState.version = (window.yeriLocationState.version || 0) + 1;
}

function currentYeriLocation() {
    const location = window.yeriLocationState.position;
    if (!location) return null;
    const fresh = Number.isFinite(location.obtainedAt) &&
        location.obtainedAt <= Date.now() + 60000 && Date.now() - location.obtainedAt <= 300000;
    const valid = Number.isFinite(location.lat) && Number.isFinite(location.lng) &&
        location.lat >= -90 && location.lat <= 90 && location.lng >= -180 && location.lng <= 180 &&
        Number.isFinite(location.accuracy) && location.accuracy >= 0 && location.accuracy <= 1000;
    if (fresh && valid) return location;
    window.yeriLocationState.position = null;
    clearYeriDistanceDisplay();
    return null;
}

async function ensureYeriLocation(signal) {
    const existing = currentYeriLocation();
    if (existing) return existing;
    if (!navigator.geolocation) return null;
    return new Promise(resolve => {
        navigator.geolocation.getCurrentPosition(pos => {
            if (signal.aborted || !useHomeMapLocation(pos)) return resolve(null);
            resolve(currentYeriLocation());
        }, () => resolve(null), { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 });
    });
}

window.yerbulMapState = {
    currentBusinesses: [],
    isPlan: false,
    routeBusinesses: [],
    focusedBusiness: null,
    selectedBusinessId: null,
    zoomScale: 1,
    translateX: 0,
    translateY: 0
};

window.calculateMapPosition = function(lat, lng) { return null; };

window.renderMapMarkers = function({ focusResults = true } = {}) {
    if (!window.mapInstance || !window.maplibregl) return;

    // Clear existing markers
    if (window.yerbulMapState.markers) {
        window.yerbulMapState.markers.forEach(m => m.remove());
    }
    window.yerbulMapState.markers = [];
    
    // Day plan polyline
    if (window.mapInstance.getSource('plan-route')) {
        window.mapInstance.removeLayer('plan-route-line');
        window.mapInstance.removeSource('plan-route');
    }
    
    const routeBusinesses = window.yerbulMapState.routeBusinesses || [];
    if (window.yerbulMapState.isPlan && routeBusinesses.length > 1) {
        const path = routeBusinesses.filter(b => b.latitude && b.longitude).map(b => [b.longitude, b.latitude]);
        if (path.length > 1) {
            window.mapInstance.addSource('plan-route', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': { 'type': 'LineString', 'coordinates': path }
                }
            });
            window.mapInstance.addLayer({
                'id': 'plan-route-line',
                'type': 'line',
                'source': 'plan-route',
                'layout': { 'line-join': 'round', 'line-cap': 'round' },
                'paint': { 'line-color': '#3b82f6', 'line-width': 4, 'line-dasharray': [2, 2] }
            });
        }
    }

    // Render new markers
    const displayedBusinesses = [...window.yerbulMapState.currentBusinesses];
    for (const business of [...routeBusinesses, window.yerbulMapState.focusedBusiness].filter(Boolean)) {
        if (!displayedBusinesses.some(item => String(item.id) === String(business.id))) displayedBusinesses.push(business);
    }
    displayedBusinesses.forEach(b => {
        const latitude = Number(b.latitude);
        const longitude = Number(b.longitude);
        if (b.latitude == null || b.longitude == null || !Number.isFinite(latitude) ||
            !Number.isFinite(longitude) || Math.abs(latitude) > 90 || Math.abs(longitude) > 180) {
            return;
        }
        
        let pinClass = "pin";
        let icon = icons.pin;
        
        let catObj = window.yerbulMapState.categories ? window.yerbulMapState.categories.find(c => c.id === b.categoryId) : null;
        let cat = (catObj ? catObj.name : '').toLowerCase();
        let mapIconId = catObj ? catObj.mapIcon : '';

        if (mapIconId === "cart" || cat.includes("market")) { pinClass += " market"; icon = icons.cart; }
        else if (mapIconId === "restaurant" || cat.includes("restoran")) { pinClass += " restaurant"; icon = icons.utensils; }
        else if (mapIconId === "coffee" || cat.includes("kafe") || cat.includes("cafe")) { pinClass += " cafe"; icon = icons.coffee; }
        else if (mapIconId === "medical" || cat.includes("eczane") || cat.includes("sağlık") || cat.includes("hastane")) { pinClass += " health"; icon = icons.medical; }
        else if (mapIconId === "gym" || cat.includes("spor")) { pinClass += " gym"; icon = icons.dumbbell; }
        else if (mapIconId === "hotel" || cat.includes("otel") || cat.includes("konaklama")) { pinClass += " hotel"; icon = icons.home; }
        else { pinClass += " default"; icon = icons.pin; }
        
        const routeIndex = window.yerbulMapState.isPlan ? routeBusinesses.findIndex(item => String(item.id) === String(b.id)) : -1;
        let label = routeIndex >= 0 ? (routeIndex + 1) : `<div class="icon-inner">${icon}</div>`;
        let badge = b.hasCampaign ? `<div class="campaign-badge" style="position:absolute; top:-4px; right:-4px; background:var(--primary); width:12px; height:12px; border-radius:50%; border:2px solid #fff;"></div>` : '';
        
        let markerStyle = routeIndex >= 0
            ? `background:var(--primary); color:#fff; border-color:var(--primary); border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; font-weight:bold;`
            : ``; 
            
        let isSelected = window.yerbulMapState.selectedBusinessId === String(b.id);
        if (isSelected) pinClass += " selected";

        let distanceStr = b.distance ? `<span>${b.distance} km</span>` : '';
        let ratingStr = b.rating ? `<span>⭐ ${b.rating}</span>` : '';

        // Create DOM element for MapLibre Marker
        const div = document.createElement('div');
        div.className = pinClass;
        div.dataset.businessId = String(b.id);
        div.style.zIndex = isSelected ? "100" : "10";
        // MapLibre uses DOM markers directly
        div.onclick = (e) => { e.stopPropagation(); window.handleMarkerClick(b.id); };
        
        div.innerHTML = `
            <div class="aura"></div>
            ${badge}
            <div class="pin-marker" style="${markerStyle}">${label}</div>
            <div class="pin-card" id="popup-${b.id}">
                <strong data-user-content>${escapeUiHtml(b.name || '')}</strong>
                <div style="font-size:12px; color:var(--muted); display:flex; gap:6px; flex-wrap: wrap;">
                    <span data-user-content>${escapeUiHtml(b.categoryName || b.category || '')}</span>
                    ${distanceStr}
                    ${ratingStr}
                </div>
                <div style="display:flex; gap:6px; margin-top:8px;">
                    <button class="outline-button" onclick="event.stopPropagation(); window.openBusinessDetail(${b.id});" style="flex:1; height:32px; font-size:12px; padding:6px 10px;">Detay</button>
                    <button class="outline-button" data-map-favorite-id="${b.id}" style="flex:1; height:32px; font-size:12px; padding:6px 10px;">Kaydet</button>
                </div>
            </div>
        `;
        div.querySelector("[data-map-favorite-id]")?.addEventListener("click", event => {
            event.stopPropagation();
            window.toggleFavoriteAction(event.currentTarget, b.id, b.name, b.categoryId,
                b.rating ?? null, b.coverImagePath || "", null, null);
        });
        
        const marker = new maplibregl.Marker({ element: div, anchor: 'bottom' })
            .setLngLat([b.longitude, b.latitude])
            .addTo(window.mapInstance);
        
        window.yerbulMapState.markers.push(marker);
    });
    
    // Fit Bounds if not explicitly zoomed by user
    if (focusResults && window.yerbulMapState.selectedBusinessId) {
        // Just center on selected
        const sel = displayedBusinesses.find(b => String(b.id) === window.yerbulMapState.selectedBusinessId);
        if (sel && sel.latitude && sel.longitude) {
            window.mapInstance.flyTo({ center: [sel.longitude, sel.latitude], zoom: 16 });
        }
    } else if (focusResults && window.yerbulMapState.isPlan && routeBusinesses.length) {
        const routeBounds = new maplibregl.LngLatBounds();
        routeBusinesses.forEach(b => {
            if (Number.isFinite(Number(b.latitude)) && Number.isFinite(Number(b.longitude)))
                routeBounds.extend([Number(b.longitude), Number(b.latitude)]);
        });
        if (!routeBounds.isEmpty()) window.mapInstance.fitBounds(routeBounds, { padding: 50, maxZoom: 16 });
    }
    
    bindHoverEffects();
};

const app = document.getElementById("app");
const AUTH_KEY = "yerbul:isAuthenticated";

function uiText(key, fallback, params) {
    const translated = window.yerbulI18n?.t(key, params);
    return translated && translated !== key ? translated : fallback;
}

function uiSource(source) {
    return window.yerbulI18n?.userText(source) || source;
}

function updateYeriQuickPrompts() {
    document.querySelectorAll('.quick-prompt-btn[data-prompt-source]').forEach(btn => {
        const translated = uiSource(btn.dataset.promptSource);
        btn.textContent = translated;
        btn.dataset.promptText = translated.replace(/^\S+\s*/, '').trim();
        btn.lang = window.yerbulI18n?.language || 'tr';
        btn.dir = btn.lang === 'ar' ? 'rtl' : 'ltr';
    });
}

document.addEventListener('yerbul:languagechange', updateYeriQuickPrompts);
document.addEventListener('yerbul:languagechange', () => {
    document.querySelectorAll('[data-yeri-stale-location]').forEach(note => {
        note.textContent = uiSource("Konum değişti. Güncel mesafe için yeniden ara.");
    });
    const locateButton = document.querySelector('.locate-me-btn');
    if (locateButton && !locateButton.querySelector('.spinner'))
        locateButton.innerHTML = `${icons.target} ${escapeUiHtml(uiSource("Konumumu Bul"))}`;
    document.querySelectorAll('[data-yeri-distance-value]').forEach(distanceLabel => {
        const distance = Number(distanceLabel.dataset.yeriDistanceValue);
        if (Number.isFinite(distance))
            distanceLabel.textContent = `${distance.toLocaleString(userLocale(), { maximumFractionDigits: 2 })} ${uiSource("km kuş uçuşu")}`;
    });
    document.querySelectorAll('[data-yeri-expand-radius]').forEach(button => {
        button.textContent = uiText('yeriRadius.expand', `${button.dataset.yeriExpandRadius} km'ye kadar ara`,
            { km: button.dataset.yeriExpandRadius });
    });
});

function userLocale() {
    const language = window.yerbulI18n?.language || 'tr';
    return language === 'ar' ? 'ar-EG-u-nu-latn' : language === 'en' ? 'en-US' : 'tr-TR';
}

function escapeUiHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[char]);
}

function campaignText(value) {
    return escapeUiHtml(value ?? '');
}

function safeCampaignImageUrl(value) {
    if (typeof value !== 'string' || !/^(https?:\/\/|\/(?!\/))/i.test(value) ||
        /[^\w\-._~:/?#\[\]@!$&*+,;=%]/.test(value)) return '';
    try {
        const url = new URL(value, window.location.origin);
        return ['http:', 'https:'].includes(url.protocol) ? escapeUiHtml(url.href) : '';
    } catch (_) {
        return '';
    }
}

function topbarText(key, fallback) {
    const lang = window.yerbulI18n?.textLanguage(key) || 'tr';
    const dir = lang === 'ar' ? ' dir="rtl"' : '';
    const value = escapeUiHtml(uiText(key, fallback));
    return `<span data-i18n="${key}" lang="${lang}"${dir}>${value}</span>`;
}

// Clean up any legacy JWT tokens stored in localStorage to enforce pure HttpOnly cookie auth
try {
    localStorage.removeItem("yerbul:token");
} catch (_) {}

function getAuthHeaders(extraHeaders = {}) {
    return {
        'X-Requested-With': 'XMLHttpRequest',
        ...extraHeaders
    };
}

async function apiCall(url, options = {}, isJson = true) {
    const opts = { ...options };
    const headers = getAuthHeaders(opts.headers || {});
    if (isJson && !headers['Content-Type'] && opts.body && !(opts.body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
    }
    opts.headers = headers;
    opts.credentials = 'same-origin';
    return await fetch(url, opts);
}

const fallbackLocations = [
    { id: 1, name: "İstanbul", districts: ["Kadıköy", "Beşiktaş", "Şişli", "Üsküdar", "Bakırköy"] },
    { id: 2, name: "Ankara", districts: ["Çankaya", "Yenimahalle", "Keçiören", "Mamak", "Etimesgut"] },
    { id: 3, name: "İzmir", districts: ["Konak", "Bornova", "Karşıyaka", "Buca", "Çeşme"] },
    { id: 4, name: "Trabzon", districts: ["Ortahisar", "Akçaabat", "Yomra", "Arsin", "Sürmene"] },
    { id: 5, name: "Bursa", districts: ["Osmangazi", "Nilüfer", "Yıldırım", "Mudanya"] },
    { id: 6, name: "Antalya", districts: ["Muratpaşa", "Konyaaltı", "Kepez", "Alanya"] }
];

async function logout() {
    try {
        await fetch('/api/auth/logout', { 
            method: 'POST',
            headers: getAuthHeaders(),
            credentials: 'same-origin'
        });
    } catch (err) {
        console.error('Logout request failed:', err);
    }
    localStorage.removeItem(AUTH_KEY);
    try { localStorage.removeItem("yerbul:token"); } catch (_) {}
    window.profileCache = null;
    window.businessCache = null;
    window.location.href = '/';
}

document.addEventListener('click', async (e) => {
    if (e.target.closest('#logoutBtn')) {
        e.preventDefault();
        await logout();
    }
});

function isAuthenticated() {
    return localStorage.getItem(AUTH_KEY) === "true";
}

function getFavorites() {
    try { return JSON.parse(localStorage.getItem("yerbul:favorites")) || []; } catch { return []; }
}
function isFavorite(id) {
    return getFavorites().some(f => f.id === id);
}
window.toggleFavoriteAction = function(btn, id, name, categoryId, rating, coverImagePath, openTime, address) {
    let favs = getFavorites();
    const isFav = favs.some(f => f.id === id);
    if (isFav) {
        favs = favs.filter(f => f.id !== id);
        btn.innerHTML = icons.heart + ' Kaydet';
        btn.style.color = '';
        btn.classList.remove('saved');
    } else {
        favs.push({id, name, categoryId, rating, coverImagePath, openTime, address});
        btn.innerHTML = icons.heartFilled + ' Kaydedildi';
        btn.style.color = '#ef4444';
        btn.classList.add('saved');
    }
    localStorage.setItem("yerbul:favorites", JSON.stringify(favs));
}

window.recordVisit = async function(businessId, btn) {
    if (!btn) return;
    if (btn._isProcessing) return; // Prevent duplicate requests while processing

    if (!isAuthenticated()) {
        showToast("Ziyaret kaydetmek için lütfen giriş yapın.", "error");
        return;
    }

    btn._isProcessing = true;
    btn.disabled = true;
    const originalHtml = btn.innerHTML;
    btn.innerHTML = 'Kaydediliyor...';
    
    try {
        const res = await fetch('/api/visits/record', {
            method: 'POST',
            headers: getAuthHeaders({ 'Content-Type': 'application/json' }),
            credentials: 'same-origin',
            body: JSON.stringify({ businessId })
        });
        
        if (res.ok) {
            btn.innerHTML = icons.check + ' Kaydedildi';
            btn.style.color = '#16a34a';
            btn.style.background = '#dcfce7';
            btn.style.borderColor = '#bbf7d0';
            btn.disabled = true;
            btn._isProcessing = false;
            showToast("Ziyaret kaydedildi", "success");
        } else if (res.status === 401) {
            btn.innerHTML = originalHtml;
            btn.disabled = false;
            btn._isProcessing = false;
            showToast("Oturum süreniz dolmuş veya geçersiz. Lütfen tekrar giriş yapın.", "error");
        } else if (res.status >= 500) {
            btn.innerHTML = originalHtml;
            btn.disabled = false;
            btn._isProcessing = false;
            showToast("Sunucu hatası: Ziyaret kaydedilemedi.", "error");
        } else {
            let errorMsg = "Ziyaret kaydedilemedi.";
            try {
                const errData = await res.json();
                if (errData && errData.message) errorMsg = errData.message;
            } catch (ignored) {}
            btn.innerHTML = originalHtml;
            btn.disabled = false;
            btn._isProcessing = false;
            showToast(errorMsg, "error");
        }
    } catch (e) {
        btn.innerHTML = originalHtml;
        btn.disabled = false;
        btn._isProcessing = false;
        showToast("Bağlantı hatası: Sunucuya ulaşılamadı.", "error");
    }
};

window.recordBusinessVisit = function(businessId) {
    const btn = document.getElementById('recordVisitBtn');
    return window.recordVisit(businessId, btn);
};

function brand(className = "brand") {
    return `<a href="/" class="${className}" aria-label="Önersene ana sayfa"><span class="brand-logo-frame"><img class="brand-logo-light" src="/brand-logo-light.png" alt=""><img class="brand-logo-dark" src="/brand-logo-dark.png" alt=""></span></a>`;
}

// ==========================================
// CENTRALIZED THEME MANAGEMENT
// ==========================================

window.getThemePreference = function() {
    try {
        return localStorage.getItem('yerbul_theme') || 'system';
    } catch(e) {
        return 'system';
    }
};

window.getEffectiveTheme = function() {
    const pref = window.getThemePreference();
    if (pref === 'light') return 'light';
    if (pref === 'dark') return 'dark';
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
};

window.getCurrentThemeIcon = function() {
    const pref = window.getThemePreference();
    if (pref === 'dark') return icons.moon;
    if (pref === 'light') return icons.sun;
    return icons.monitor;
};

window.applyTheme = function(preference) {
    try {
        localStorage.setItem('yerbul_theme', preference);
    } catch(e) {}

    const effective = preference === 'system'
        ? ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light')
        : preference;

    document.documentElement.setAttribute('data-theme', effective);
    document.documentElement.setAttribute('data-theme-preference', preference);
    document.documentElement.style.colorScheme = effective;

    const icon = window.getCurrentThemeIcon();
    document.querySelectorAll('#themeToggleBtn').forEach(b => {
        b.innerHTML = icon;
        b.dataset.i18nTitle = `topbar.themeTitle.${preference}`;
        b.setAttribute('title', uiText(b.dataset.i18nTitle, `Tema: ${preference}`));
    });

    if (window.mapInstance) {
        try {
            const targetStyle = effective === 'dark'
                ? 'https://tiles.openfreemap.org/styles/dark'
                : 'https://tiles.openfreemap.org/styles/positron';
            window.mapInstance.setStyle(targetStyle);
            window.mapInstance.once('style.load', () => {
                if (effective === 'dark') {
                    window.enhanceDarkMapReadability(window.mapInstance);
                }
                if (window.renderMapMarkers) window.renderMapMarkers({ focusResults: false });
            });
        } catch(e) {
            console.warn('[MapTheme] Could not switch map style:', e);
        }
    }

    if (window.bpMap) {
        try {
            const targetStyle = effective === 'dark'
                ? 'https://tiles.openfreemap.org/styles/dark'
                : 'https://tiles.openfreemap.org/styles/positron';
            window.bpMap.setStyle(targetStyle);
            window.bpMap.once('style.load', () => {
                if (effective === 'dark') {
                    window.enhanceDarkMapReadability(window.bpMap);
                }
            });
        } catch(e) {}
    }
};

window.setThemePreference = function(pref) {
    window.applyTheme(pref);
    window.closeThemeDropdown();
};

window.toggleThemeDropdown = function(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    const menu = document.getElementById('themeDropdownMenu');
    const btn = document.getElementById('themeToggleBtn');
    if (!menu) return;

    const isVisible = menu.style.display !== 'none';
    if (isVisible) {
        window.closeThemeDropdown();
    } else {
        const pref = window.getThemePreference();
        menu.innerHTML = `
            <button type="button" class="theme-option-btn ${pref === 'light' ? 'active' : ''}" onclick="window.setThemePreference('light')" role="menuitem">
                ${icons.sun} ${topbarText('topbar.theme.light', 'Açık')} ${pref === 'light' ? `<span class="theme-check">${icons.check}</span>` : ''}
            </button>
            <button type="button" class="theme-option-btn ${pref === 'dark' ? 'active' : ''}" onclick="window.setThemePreference('dark')" role="menuitem">
                ${icons.moon} ${topbarText('topbar.theme.dark', 'Koyu')} ${pref === 'dark' ? `<span class="theme-check">${icons.check}</span>` : ''}
            </button>
            <button type="button" class="theme-option-btn ${pref === 'system' ? 'active' : ''}" onclick="window.setThemePreference('system')" role="menuitem">
                ${icons.monitor} ${topbarText('topbar.theme.system', 'Sistem')} ${pref === 'system' ? `<span class="theme-check">${icons.check}</span>` : ''}
            </button>
        `;
        menu.style.display = 'flex';
        if (btn) btn.setAttribute('aria-expanded', 'true');
    }
};

window.closeThemeDropdown = function() {
    const menu = document.getElementById('themeDropdownMenu');
    const btn = document.getElementById('themeToggleBtn');
    if (menu) menu.style.display = 'none';
    if (btn) btn.setAttribute('aria-expanded', 'false');
};

document.addEventListener('click', (e) => {
    const menu = document.getElementById('themeDropdownMenu');
    const btn = document.getElementById('themeToggleBtn');
    if (menu && menu.style.display !== 'none') {
        if (!menu.contains(e.target) && !btn?.contains(e.target)) {
            window.closeThemeDropdown();
        }
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
        window.closeThemeDropdown();
    }
});

if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (window.getThemePreference() === 'system') {
            window.applyTheme('system');
        }
    });
}

// Initial theme apply
window.applyTheme(window.getThemePreference());

function getAvatarUrl(avatarKey) {
    return avatarKey ? `/assets/avatars/${avatarKey}.png` : null;
}

function topbar() {
    const authenticated = isAuthenticated();
    let userAvatar = `<span data-topbar-avatar><div class="avatar-small">${icons.user}</div></span>`;
    
    if (authenticated && window.profileCache?.profileData) {
        if (window.profileCache.profileData.accountType === "business") {
             if (window.businessCache?.businessData?.logoPath) {
                 const logoSrc = getBusinessLogoUrl(window.businessCache.businessData.logoPath) + "?t=" + Date.now();
                 userAvatar = `<span data-topbar-avatar><img src="${logoSrc}" class="avatar-small" style="width: 34px; height: 34px; object-fit: cover; border-radius: 50%;"></span>`;
             } else {
                 userAvatar = `<span data-topbar-avatar><div class="avatar-small" style="width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: var(--soft); color: var(--blue); font-size: 16px;">${icons.building}</div></span>`;
             }
        } else if (window.profileCache.profileData.avatarKey) {
            const url = getAvatarUrl(window.profileCache.profileData.avatarKey);
            if (url) {
                userAvatar = `<span data-topbar-avatar><img src="${url}" class="avatar-small" style="width: 34px; height: 34px; object-fit: cover; border-radius: 50%;"></span>`;
            }
        }
    }
    const currentPref = window.getThemePreference();
    const lang = window.yerbulI18n?.language || 'tr';
    const languageName = uiText(`language.${lang}`, 'Türkçe');
    const languageButtonLabel = uiText('topbar.languageButton', 'Dil seçimi', { language: languageName });

    return `<header class="topbar">
        ${brand()}
        <div class="top-actions">
            <div class="lang-select">
                <button type="button" class="lang-trigger" id="languageToggleBtn" aria-label="${escapeUiHtml(languageButtonLabel)}" aria-haspopup="menu" aria-expanded="false" aria-controls="languageMenu">
                    ${icons.globe} <span class="lang-text" dir="ltr">${lang.toUpperCase()}</span> ${icons.chevron}
                </button>
                <div class="lang-dropdown" id="languageMenu" role="menu" aria-label="${escapeUiHtml(uiText('topbar.selectLanguage', 'Dil seçimi'))}" data-i18n-aria-label="topbar.selectLanguage" hidden>
                    <button type="button" class="lang-option" data-language-option="tr" role="menuitemradio" aria-checked="${lang === 'tr'}"><span class="lang-code" dir="ltr">TR</span>${topbarText('language.tr', 'Türkçe')}<span class="lang-check" aria-hidden="true">${icons.check}</span></button>
                    <button type="button" class="lang-option" data-language-option="en" role="menuitemradio" aria-checked="${lang === 'en'}"><span class="lang-code" dir="ltr">EN</span>${topbarText('language.en', 'İngilizce')}<span class="lang-check" aria-hidden="true">${icons.check}</span></button>
                    <button type="button" class="lang-option" data-language-option="ar" role="menuitemradio" aria-checked="${lang === 'ar'}"><span class="lang-code" dir="ltr">AR</span>${topbarText('language.ar', 'Arapça')}<span class="lang-check" aria-hidden="true">${icons.check}</span></button>
                </div>
            </div>
            <div class="theme-dropdown-container">
                <button class="icon-button" id="themeToggleBtn" aria-label="${escapeUiHtml(uiText('topbar.selectTheme', 'Tema seçimi'))}" data-i18n-aria-label="topbar.selectTheme" aria-haspopup="menu" aria-expanded="false" onclick="window.toggleThemeDropdown(event)" title="${escapeUiHtml(uiText(`topbar.themeTitle.${currentPref}`, 'Tema'))}" data-i18n-title="topbar.themeTitle.${currentPref}">
                    ${window.getCurrentThemeIcon()}
                </button>
                <div id="themeDropdownMenu" class="theme-dropdown-menu" style="display: none;" role="menu">
                    <button type="button" class="theme-option-btn ${currentPref === 'light' ? 'active' : ''}" onclick="window.setThemePreference('light')" role="menuitem">
                        ${icons.sun} ${topbarText('topbar.theme.light', 'Açık')} ${currentPref === 'light' ? `<span class="theme-check">${icons.check}</span>` : ''}
                    </button>
                    <button type="button" class="theme-option-btn ${currentPref === 'dark' ? 'active' : ''}" onclick="window.setThemePreference('dark')" role="menuitem">
                        ${icons.moon} ${topbarText('topbar.theme.dark', 'Koyu')} ${currentPref === 'dark' ? `<span class="theme-check">${icons.check}</span>` : ''}
                    </button>
                    <button type="button" class="theme-option-btn ${currentPref === 'system' ? 'active' : ''}" onclick="window.setThemePreference('system')" role="menuitem">
                        ${icons.monitor} ${topbarText('topbar.theme.system', 'Sistem')} ${currentPref === 'system' ? `<span class="theme-check">${icons.check}</span>` : ''}
                    </button>
                </div>
            </div>
            ${authenticated ? `<button class="profile-btn" id="logoutBtn">${userAvatar} ${topbarText('topbar.signOut', 'Çıkış Yap')}</button>` : `<a class="primary-button" href="/auth">${topbarText('topbar.signIn', 'Giriş Yap')}</a>`}
        </div>
    </header>`;
}

function closeLanguageMenu(restoreFocus = false) {
    const menu = document.getElementById('languageMenu');
    const trigger = document.getElementById('languageToggleBtn');
    if (menu) menu.hidden = true;
    if (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
        if (restoreFocus) trigger.focus();
    }
}

document.addEventListener('click', async (event) => {
    const option = event.target.closest('#languageMenu [data-language-option]');
    if (option) {
        event.preventDefault();
        const changed = await window.yerbulI18n?.setLanguage(option.dataset.languageOption);
        if (changed === false) showToast(uiText('topbar.languageLoadError', 'Dil yüklenemedi. Lütfen tekrar deneyin.'));
        closeLanguageMenu(true);
        return;
    }

    const trigger = event.target.closest('#languageToggleBtn');
    if (trigger) {
        event.preventDefault();
        const menu = document.getElementById('languageMenu');
        if (!menu) return;
        const willOpen = menu.hidden;
        if (willOpen) window.closeThemeDropdown();
        menu.hidden = !willOpen;
        trigger.setAttribute('aria-expanded', String(willOpen));
        return;
    }

    const menu = document.getElementById('languageMenu');
    if (menu && !menu.hidden && !menu.contains(event.target)) closeLanguageMenu();
});

document.addEventListener('keydown', (event) => {
    const menu = document.getElementById('languageMenu');
    if (event.key === 'Escape' && menu && !menu.hidden) closeLanguageMenu(true);
});

document.addEventListener('yerbul:languagechange', () => {
    const lang = window.yerbulI18n.language;
    const trigger = document.getElementById('languageToggleBtn');
    const code = document.querySelector('#languageToggleBtn .lang-text');
    if (code) code.textContent = lang.toUpperCase();
    if (trigger) {
        const name = uiText(`language.${lang}`, 'Türkçe');
        trigger.setAttribute('aria-label', uiText('topbar.languageButton', 'Dil seçimi', { language: name }));
    }
    document.querySelectorAll('#languageMenu [data-language-option]').forEach(option => {
        option.setAttribute('aria-checked', String(option.dataset.languageOption === lang));
    });
});

function bottomNav(active = "home", accountType = "individual") {
    if (accountType === "business") {
        return `<nav class="bottom-nav floating">
            <a class="nav-item ${active === "home" ? "active" : ""}" href="/"><span class="nav-icon">${icons.grid}</span><span>Panel</span></a>
            <a class="nav-item ${active === "campaigns" ? "active" : ""}" href="#" onclick="window.history.pushState({}, '', '/business-campaigns'); route(); return false;"><span class="nav-icon">${icons.ticket}</span><span>Kampanyalarım</span></a>
            <a class="nav-item ${active === "menu" ? "active" : ""}" href="#" onclick="window.history.pushState({}, '', '/menu'); route(); return false;"><span class="nav-icon">${icons.grid}</span><span>Menüm</span></a>
            <a class="nav-item ${active === "business-profile" ? "active" : ""}" href="#" onclick="window.history.pushState({}, '', '/business-profile'); route(); return false;"><span class="nav-icon">${icons.building}</span><span>İşletmem</span></a>
        </nav>`;
    }
    return `<nav class="bottom-nav floating">
        <a class="nav-item ${active === "home" ? "active" : ""}" href="/"><span class="nav-icon">${icons.home}</span><span>Anasayfa</span></a>
        <a class="nav-item ${active === "campaigns" ? "active" : ""}" href="/campaigns"><span class="nav-icon">${icons.ticket}</span><span>Kampanyalar</span></a>
        <a class="nav-item ${active === "categories" ? "active" : ""}" href="/categories"><span class="nav-icon">${icons.grid}</span><span>Kategoriler</span></a>
        <a class="nav-item ${active === "profile" ? "active" : ""}" href="/profile.html"><span class="nav-icon">${icons.user}</span><span>Profil</span></a>
    </nav>`;
}


function applyMapCategoryResults() {
    const state = window.yerbulMapState;
    if (!state.categoryBusinesses) return;
    // Location sets the viewport only; category selection controls the business list.
    state.currentBusinesses = state.categoryBusinesses;
    window.renderMapMarkers({ focusResults: false });
}

function focusHomeMapOnLocation(location) {
    const radiusKm = 5;
    const latOffset = radiusKm / 111;
    const lngOffset = radiusKm / (111 * Math.max(0.2, Math.cos(location.lat * Math.PI / 180)));
    window.mapInstance?.fitBounds([
        [location.lng - lngOffset, location.lat - latOffset],
        [location.lng + lngOffset, location.lat + latOffset]
    ], { padding: 40, maxZoom: 14, duration: 700 });
}

function useHomeMapLocation(pos, automatic = false) {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const accuracy = pos.coords.accuracy;
    const obtainedAt = pos.timestamp;
    if (!Number.isFinite(lat) || !Number.isFinite(lng) || lat < -90 || lat > 90 ||
        lng < -180 || lng > 180 || !Number.isFinite(accuracy) || accuracy < 0 ||
        accuracy > 1000 || !Number.isFinite(obtainedAt) ||
        obtainedAt > Date.now() + 60000 || Date.now() - obtainedAt > 300000) return false;

    const state = window.yerbulMapState;
    window.yeriLocationState.position = { lat, lng, accuracy, obtainedAt };
    clearYeriDistanceDisplay();
    fetchNearbyInsights();
    if (window.mapInstance) {
        if (state.userMarker) state.userMarker.setLngLat([lng, lat]);
        else {
            const userPin = document.createElement('div');
            userPin.className = 'user-location-marker';
            userPin.style.zIndex = '10000';
            userPin.innerHTML = `<div class="user-location-visual"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6A2,2 0 0,1 10,4A2,2 0 0,1 12,2M10.5,7H13.5A2,2 0 0,1 15.5,9V14.5H14V22H10V14.5H8.5V9A2,2 0 0,1 10.5,7Z"/></svg></div>`;
            state.userMarker = new maplibregl.Marker({ element: userPin, anchor: 'bottom' })
                .setLngLat([lng, lat]).addTo(window.mapInstance);
        }
    }
    if (automatic) state.initialLocationPending = !state.autoFocusCancelled;
    if (!automatic) focusHomeMapOnLocation({ lat, lng });
    else if (state.categoryBusinesses && state.initialLocationPending) {
        focusHomeMapOnLocation({ lat, lng });
        state.initialLocationPending = false;
    }
    return true;
}

window.loadMapCategory = async function(categoryId) {
    const state = window.yerbulMapState;
    const requestId = state.categoryRequestId = (state.categoryRequestId || 0) + 1;
    state.activeCategoryId = categoryId;
    try {
        const url = categoryId === 'all' ? '/api/businesses' : `/api/businesses?categoryId=${categoryId}`;
        const res = await fetch(url, { cache: 'no-store' });
        if (res.ok && requestId === state.categoryRequestId) {
            state.categoryBusinesses = await res.json();
            if (requestId === state.categoryRequestId) {
                applyMapCategoryResults();
                if (state.initialLocationPending && !state.autoFocusCancelled && window.yeriLocationState.position) {
                    focusHomeMapOnLocation(window.yeriLocationState.position);
                    state.initialLocationPending = false;
                }
            }
        }
    } catch(e) {
        console.error("Map data fetch failed:", e);
    }
};

// An approved business can become visible while the home map remains open.
let lastMapRefreshAt = 0;
function refreshVisibleHomeMap() {
    const map = window.mapInstance;
    if (document.hidden || !map || document.getElementById('yerbul-map') !== map.getContainer()) return;
    const now = Date.now();
    if (now - lastMapRefreshAt < 2000) return;
    lastMapRefreshAt = now;
    window.loadMapCategory(window.yerbulMapState.activeCategoryId || 'all');
}
window.addEventListener('focus', refreshVisibleHomeMap);
document.addEventListener('visibilitychange', refreshVisibleHomeMap);

window.handleMapFilterClick = function(btn, categoryId) {
    // UI Update
    document.querySelectorAll('.map-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    window.yerbulMapState.autoFocusCancelled = true;
    window.yerbulMapState.initialLocationPending = false;
    window.yerbulMapState.selectedBusinessId = null;
    window.yerbulMapState.focusedBusiness = null;
    window.yerbulMapState.routeBusinesses = [];
    window.yerbulMapState.isPlan = false;
    
    // Fetch and render markers
    window.loadMapCategory(categoryId);
};

window.enhanceDarkMapReadability = function(map) {
    if (!map || typeof map.getStyle !== 'function') return;
    try {
        const style = map.getStyle();
        if (!style || !style.layers) return;

        // 1. Direct explicit layer adjustments for OpenFreeMap dark style
        const directRules = {
            // Background & Land - Soft charcoal / deep navy foundation (eliminates crushed black)
            'background': { 'background-color': '#131b26' },
            'landuse_residential': { 'fill-color': '#16202e', 'fill-opacity': 0.5 },
            'landcover_wood': { 'fill-color': '#152627', 'fill-opacity': 0.7 },
            'landuse_park': { 'fill-color': '#152627' },
            'landcover_ice_shelf': { 'fill-color': '#131b26' },
            'landcover_glacier': { 'fill-color': '#131b26' },

            // Water bodies - Clean deep slate-navy contrast
            'water': { 'fill-color': '#0c1e33', 'fill-opacity': 1.0 },
            'waterway': { 'line-color': '#142e4d', 'line-opacity': 1.0 },
            'water_name': { 'text-color': '#7dd3fc', 'text-halo-color': '#0c1e33', 'text-halo-width': 1.5 },

            // Buildings & City Blocks - Clearly visible boundaries and subtle elevated fill
            'building': { 'fill-color': '#1a2636', 'fill-outline-color': '#2d3d52', 'fill-opacity': 0.95 },

            // Small & Local Streets (Street Lines) - High readability soft gray
            'highway_minor': { 'line-color': '#3f4f63', 'line-opacity': 1.0, 'line-width': 1.6 },
            'highway_path': { 'line-color': '#2e3d50', 'line-opacity': 0.85, 'line-width': 1.2 },
            'road_pier': { 'line-color': '#2b3a4d' },
            'road_area_pier': { 'fill-color': '#16202e' },

            // Major & Secondary Roads - Prominent clear slate arteries (thicker)
            'highway_major_casing': { 'line-color': '#1f2e42', 'line-opacity': 1.0, 'line-width': 4.5 },
            'highway_major_inner': { 'line-color': '#64748b', 'line-opacity': 1.0, 'line-width': 3.0 },
            'highway_major_subtle': { 'line-color': '#4a5d75' },

            // Motorways & Expressways - Top-tier arterial highlights (even thicker)
            'highway_motorway_casing': { 'line-color': '#1a2c42', 'line-opacity': 1.0, 'line-width': 6.0 },
            'highway_motorway_inner': { 'line-color': '#94a3b8', 'line-opacity': 1.0, 'line-width': 4.2 },
            'highway_motorway_subtle': { 'line-color': '#526680' },

            // Railways & Aeroways
            'railway': { 'line-color': '#3d4f66' },
            'railway_transit': { 'line-color': '#3d4f66' },
            'railway_minor': { 'line-color': '#3d4f66' },
            'railway_dashline': { 'line-color': '#131b26' },
            'railway_transit_dashline': { 'line-color': '#131b26' },
            'railway_minor_dashline': { 'line-color': '#131b26' },
            'aeroway-taxiway': { 'line-color': '#283647' },
            'aeroway-runway': { 'line-color': '#283647' },
            'aeroway-runway-casing': { 'line-color': '#3b4e66' },
            'aeroway-area': { 'fill-color': '#1a2636' },

            // Administrative Boundaries
            'boundary_state': { 'line-color': '#37485e', 'line-opacity': 0.9 },
            'boundary_country_z0-4': { 'line-color': '#37485e', 'line-opacity': 0.9 },
            'boundary_country_z5-': { 'line-color': '#37485e', 'line-opacity': 0.9 },

            // Street & Road Labels - Clear, readable text with dark halo
            'highway_name_other': { 'text-color': '#cbd5e1', 'text-halo-color': '#101827', 'text-halo-width': 1.5 },
            'highway_name_motorway': { 'text-color': '#e2e8f0', 'text-halo-color': '#101827', 'text-halo-width': 1.5 },

            // Places, Suburbs & City Labels
            'place_other': { 'text-color': '#d1d5db', 'text-halo-color': '#101827', 'text-halo-width': 1.5 },
            'place_suburb': { 'text-color': '#d1d5db', 'text-halo-color': '#101827', 'text-halo-width': 1.5 },
            'place_village': { 'text-color': '#d1d5db', 'text-halo-color': '#101827', 'text-halo-width': 1.5 },
            'place_town': { 'text-color': '#e2e8f0', 'text-halo-color': '#101827', 'text-halo-width': 1.8 },
            'place_city': { 'text-color': '#e2e8f0', 'text-halo-color': '#101827', 'text-halo-width': 1.8 },
            'place_city_large': { 'text-color': '#f1f5f9', 'text-halo-color': '#101827', 'text-halo-width': 2.0 },
            'place_state': { 'text-color': '#cbd5e1', 'text-halo-color': '#101827', 'text-halo-width': 1.5 },
            'place_country_other': { 'text-color': '#e2e8f0', 'text-halo-color': '#101827', 'text-halo-width': 1.8 },
            'place_country_minor': { 'text-color': '#e2e8f0', 'text-halo-color': '#101827', 'text-halo-width': 1.8 },
            'place_country_major': { 'text-color': '#f1f5f9', 'text-halo-color': '#101827', 'text-halo-width': 2.0 }
        };

        const adjustedLayerIds = new Set();
        Object.keys(directRules).forEach(layerId => {
            if (map.getLayer(layerId)) {
                const props = directRules[layerId];
                Object.keys(props).forEach(prop => {
                    try { map.setPaintProperty(layerId, prop, props[prop]); } catch(e) {}
                });
                adjustedLayerIds.add(layerId);
            }
        });

        // 2. Pattern-based fallback for any other layers not explicitly matched
        style.layers.forEach(layer => {
            if (adjustedLayerIds.has(layer.id)) return;
            const lid = layer.id.toLowerCase();
            
            if (layer.type === 'line') {
                try {
                    if (lid.includes('motorway')) {
                        map.setPaintProperty(layer.id, 'line-color', '#94a3b8');
                        map.setPaintProperty(layer.id, 'line-opacity', 1.0);
                        map.setPaintProperty(layer.id, 'line-width', 4.0);
                    } else if (lid.includes('major') || lid.includes('primary') || lid.includes('trunk') || lid.includes('secondary')) {
                        map.setPaintProperty(layer.id, 'line-color', '#64748b');
                        map.setPaintProperty(layer.id, 'line-opacity', 1.0);
                        map.setPaintProperty(layer.id, 'line-width', 2.8);
                    } else if (lid.includes('minor') || lid.includes('street') || lid.includes('service') || lid.includes('road') || lid.includes('transportation')) {
                        map.setPaintProperty(layer.id, 'line-color', '#3f4f63');
                        map.setPaintProperty(layer.id, 'line-opacity', 0.95);
                        map.setPaintProperty(layer.id, 'line-width', 1.5);
                    }
                } catch(e) {}
            } else if (layer.type === 'fill') {
                try {
                    if (lid.includes('building')) {
                        map.setPaintProperty(layer.id, 'fill-color', '#1a2636');
                        map.setPaintProperty(layer.id, 'fill-outline-color', '#2d3d52');
                        map.setPaintProperty(layer.id, 'fill-opacity', 0.95);
                    } else if (lid.includes('water')) {
                        map.setPaintProperty(layer.id, 'fill-color', '#0c1e33');
                    }
                } catch(e) {}
            } else if (layer.type === 'symbol') {
                try {
                    map.setPaintProperty(layer.id, 'text-color', '#cbd5e1');
                    map.setPaintProperty(layer.id, 'text-halo-color', '#101827');
                    map.setPaintProperty(layer.id, 'text-halo-width', 1.5);
                } catch(e) {}
            }
        });
    } catch(err) {
        console.warn('[MapTheme] Road and label readability notice:', err);
    }
};

let lastFrequentModalTrigger = null;

window.getOrCreateFrequentVisitsModal = function() {
    let backdrop = document.getElementById('frequentVisitsModalBackdrop');
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.id = 'frequentVisitsModalBackdrop';
        backdrop.className = 'frequent-modal-backdrop';
        backdrop.style.display = 'none';
        backdrop.setAttribute('role', 'dialog');
        backdrop.setAttribute('aria-modal', 'true');
        backdrop.setAttribute('aria-labelledby', 'frequentModalTitle');
        backdrop.setAttribute('aria-describedby', 'frequentModalSubtitle');

        backdrop.innerHTML = `
            <div class="frequent-modal-container" onclick="event.stopPropagation()">
                <div class="frequent-modal-header">
                    <div class="frequent-modal-header-text">
                        <div class="frequent-modal-icon-badge">
                            ${icons.history}
                        </div>
                        <div>
                            <h3 id="frequentModalTitle" class="frequent-modal-title">Sık Gittiğim Yerler</h3>
                            <p id="frequentModalSubtitle" class="frequent-modal-subtitle">En sık ziyaret ettiğin işletmeleri keşfet.</p>
                        </div>
                    </div>
                    <button type="button" class="frequent-modal-close-btn" aria-label="Kapat" onclick="window.closeFrequentVisitsModal()" title="Kapat">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div class="frequent-modal-body" id="frequentVisitsModalBody">
                </div>
            </div>
        `;

        // Close on backdrop click (click outside modal container)
        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) {
                window.closeFrequentVisitsModal();
            }
        });

        document.body.appendChild(backdrop);
    }
    return backdrop;
};

window.openFrequentVisitsModal = function(btn) {
    lastFrequentModalTrigger = btn || document.getElementById('frequentVisitsBtn');
    const backdrop = window.getOrCreateFrequentVisitsModal();
    if (!backdrop) return;

    window.renderFrequentVisitsModalContent();

    backdrop.style.display = 'flex';
    document.body.classList.add('frequent-modal-open');

    if (lastFrequentModalTrigger) {
        lastFrequentModalTrigger.classList.add('active');
        lastFrequentModalTrigger.setAttribute('aria-expanded', 'true');
    }

    // Auto-focus close button for accessibility
    const closeBtn = backdrop.querySelector('.frequent-modal-close-btn');
    if (closeBtn) {
        try { closeBtn.focus(); } catch(e) {}
    }

    if (isAuthenticated() && (typeof window.frequentVisits === 'undefined' || !window.frequentVisits)) {
        fetch('/api/visits/frequent', { headers: getAuthHeaders(), credentials: 'same-origin' })
            .then(res => res.ok ? res.json() : [])
            .then(data => {
                window.frequentVisits = Array.isArray(data) ? data : [];
                window.renderFrequentVisitsModalContent();
            })
            .catch(() => {
                window.frequentVisits = [];
                window.renderFrequentVisitsModalContent();
            });
    }
};

window.closeFrequentVisitsModal = function() {
    const backdrop = document.getElementById('frequentVisitsModalBackdrop');
    if (backdrop) {
        backdrop.style.display = 'none';
    }
    document.body.classList.remove('frequent-modal-open');

    if (lastFrequentModalTrigger) {
        lastFrequentModalTrigger.classList.remove('active');
        lastFrequentModalTrigger.setAttribute('aria-expanded', 'false');
        try { lastFrequentModalTrigger.focus(); } catch(e) {}
    } else {
        const trigger = document.getElementById('frequentVisitsBtn');
        if (trigger) {
            trigger.classList.remove('active');
            trigger.setAttribute('aria-expanded', 'false');
        }
    }
};

// Aliases for backward compatibility
window.toggleFrequentVisitsPopover = function(btn, event) {
    if (event) { event.preventDefault(); event.stopPropagation(); }
    window.openFrequentVisitsModal(btn);
};
window.openFrequentVisitsPopover = window.openFrequentVisitsModal;
window.closeFrequentVisitsPopover = window.closeFrequentVisitsModal;

window.renderFrequentVisitsModalContent = function() {
    const container = document.getElementById('frequentVisitsModalBody');
    if (!container) return;

    if (!isAuthenticated()) {
        container.innerHTML = `
            <div style="padding: 36px 20px; text-align: center; color: var(--muted); display: flex; flex-direction: column; align-items: center; gap: 14px; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0;">
                <div style="width: 52px; height: 52px; border-radius: 50%; background: #f0f9ff; color: #0284c7; display: flex; align-items: center; justify-content: center; font-size: 24px;">
                    ${icons.user}
                </div>
                <div>
                    <h4 style="margin: 0 0 6px 0; font-size: 15px; font-weight: 700; color: #1e293b;">Giriş Yapmalısın</h4>
                    <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #64748b;">Sık ziyaret ettiğin işletmeleri görüntülemek için lütfen hesabına giriş yap.</p>
                </div>
                <a href="/auth" onclick="event.preventDefault(); window.history.pushState({}, '', '/auth'); renderAuth('login'); window.closeFrequentVisitsModal();" class="primary-button" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 24px; font-size: 13px; font-weight: 600; text-decoration: none; border-radius: 99px; margin-top: 6px; background: #0284c7; color: white;">
                    Giriş Yap
                </a>
            </div>
        `;
        return;
    }

    const visits = (window.frequentVisits || []).filter(v => v && v.business);
    if (visits.length === 0) {
        container.innerHTML = `
            <div style="padding: 36px 20px; text-align: center; color: var(--muted); display: flex; flex-direction: column; align-items: center; gap: 14px; background: #ffffff; border-radius: 16px; border: 1px dashed #cbd5e1;">
                <div style="width: 52px; height: 52px; border-radius: 50%; background: #f8fafc; color: #94a3b8; display: flex; align-items: center; justify-content: center; font-size: 24px;">
                    ${icons.pin}
                </div>
                <div>
                    <h4 style="margin: 0 0 6px 0; font-size: 15px; font-weight: 700; color: #1e293b;">Henüz Ziyaret Kaydın Yok</h4>
                    <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #64748b; max-width: 360px;">Gittiğin işletmelerin detay sayfasında <strong>"Buraya Gittim"</strong> butonuna tıklayarak ziyaretlerini kaydedebilirsin.</p>
                </div>
            </div>
        `;
        return;
    }

    const top5 = visits.slice(0, 5);
    const categoryMap = {};
    (window.yerbulMapState?.categories || []).forEach(c => { categoryMap[c.id] = c.name; });

    container.innerHTML = top5.map(v => {
        const b = v.business;
        const catName = categoryMap[b.categoryId] || 'İşletme';
        let imageUrl = b.coverImagePath;
        if (imageUrl && imageUrl.startsWith('/')) imageUrl = window.location.origin + imageUrl;
        if (!imageUrl) imageUrl = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80';
        
        let lastVisitStr = '';
        if (v.lastVisit) {
            try {
                const d = new Date(v.lastVisit);
                if (!isNaN(d.getTime())) {
                    lastVisitStr = d.toLocaleDateString(userLocale(), { day: 'numeric', month: 'short' });
                }
            } catch(e) {}
        }

        const safeName = (b.name || uiSource('İşletme')).replace(/"/g, '&quot;');

        return `
            <div class="frequent-modal-card">
                <img src="${imageUrl}" alt="${safeName}" class="frequent-modal-card-img" onerror="this.src='https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80'">
                <div class="frequent-modal-card-content">
                    <div>
                        <div class="frequent-modal-card-top">
                            <span class="frequent-modal-category">${catName}</span>
                            <span class="frequent-modal-visit-badge">
                                ${icons.history || ''} <span data-user-visit-count="${Number(v.visitCount) || 0}">${Number(v.visitCount) || 0} ziyaret</span>
                            </span>
                        </div>
                        <h4 class="frequent-modal-card-name" title="${safeName}">${safeName}</h4>
                        ${lastVisitStr ? `<div class="frequent-modal-last-visit"><span>Son ziyaret:</span> <span data-user-visit-date="${escapeUiHtml(v.lastVisit)}" dir="ltr">${lastVisitStr}</span></div>` : ''}
                    </div>
                    <div class="frequent-modal-card-actions">
                        <button type="button" class="frequent-modal-btn-focus" onclick="window.focusBusinessOnMap(${b.id}); window.closeFrequentVisitsModal();">
                            ${icons.target} Haritada Göster
                        </button>
                        <button type="button" class="frequent-modal-btn-detail" onclick="window.openBusinessDetail(${b.id}); window.closeFrequentVisitsModal();">
                            Detaylar
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
};

window.renderFrequentVisitsPopoverContent = window.renderFrequentVisitsModalContent;

// Global Escape listener for frequent visits modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
        const backdrop = document.getElementById('frequentVisitsModalBackdrop');
        if (backdrop && backdrop.style.display !== 'none') {
            window.closeFrequentVisitsModal();
        }
    }
});

async function renderHome(active = "home") {
    let prefCats = [];
    let allCats = [];
    let profileData = null;
    let businessData = null;

    // Temporary loading shell
    app.innerHTML = `<div class="app-shell">${topbar()}<main class="home-layout" style="display:flex; justify-content:center; align-items:center;"><div class="spinner"></div></main>${bottomNav("home")}</div>`;

    try {
        const catRes = await fetch('/api/categories');
        if (catRes.ok) { allCats = await catRes.json(); window.yerbulMapState.categories = allCats; }
        
        if (isAuthenticated()) {
            const meRes = await fetch('/api/auth/me', { 
                cache: 'no-store',
                headers: getAuthHeaders(),
                credentials: 'same-origin'
            });
            if (meRes.status === 401) {
                // Session expired or invalid - reset auth state
                localStorage.removeItem(AUTH_KEY);
                localStorage.removeItem("yerbul:token");
                window.profileCache = null;
            } else if (meRes.ok) {
                profileData = await meRes.json();
                if (profileData.role === 'admin' && profileData.redirectUrl === '/admin') {
                    window.location.assign('/admin');
                    return;
                }
                window.profileCache = window.profileCache || {};
                window.profileCache.profileData = profileData;
                if (profileData.preferences) {
                    try {
                        const prefs = typeof profileData.preferences === 'string' ? JSON.parse(profileData.preferences) : profileData.preferences;
                        window.profileCache.preferences = prefs;
                        prefCats = prefs.preferredCategories || [];
                    } catch(e) {}
                }
                if (profileData.accountType === "business") {
                    try {
                        const bRes = await fetch('/api/businesses/me', { 
                            cache: 'no-store',
                            headers: getAuthHeaders(),
                            credentials: 'same-origin'
                        });
                        if (bRes.ok) {
                            businessData = await bRes.json();
                        }
                    } catch (e) {}
                }
            }
        }
    } catch(e) {}

    // Check if preferences were cached from recent profile updates
    if (prefCats.length === 0 && window.profileCache && window.profileCache.preferences && window.profileCache.preferences.preferredCategories) {
        prefCats = window.profileCache.preferences.preferredCategories;
    }

    // Match preferred categories against active allCats to ensure:
    // 1. Only active categories in allCats are used
    // 2. Authoritative category objects (id, name, mapIcon) are matched
    // 3. No duplicates
    // 4. Handles both {id, name} object and scalar id formats
    const prefCatIds = new Set();
    const userPreferredActiveCats = [];
    if (Array.isArray(prefCats)) {
        prefCats.forEach(p => {
            const id = typeof p === 'object' && p !== null ? Number(p.id) : Number(p);
            if (!isNaN(id) && !prefCatIds.has(id)) {
                const matched = allCats.find(c => Number(c.id) === id);
                if (matched) {
                    prefCatIds.add(id);
                    userPreferredActiveCats.push(matched);
                }
            }
        });
    }

    // Unauthenticated users or users without preferred categories get a sensible fallback
    const displayPrefCats = userPreferredActiveCats.length > 0 
        ? userPreferredActiveCats 
        : allCats.slice(0, 3);

    const displayPrefIds = new Set(displayPrefCats.map(c => Number(c.id)));
    const otherCats = allCats.filter(c => !displayPrefIds.has(Number(c.id)));

    let filterHtml = `<button class="map-filter-btn active" onclick="window.handleMapFilterClick(this, 'all')"><span class="filter-icon">${icons.target}</span> Tümü</button>`;
    
    displayPrefCats.forEach(c => {
        filterHtml += `<button class="map-filter-btn" onclick="window.handleMapFilterClick(this, ${c.id})">${getCategoryIcon(c.name)} ${c.name}</button>`;
    });

    if (otherCats.length > 0) {
        filterHtml += `
            <div style="position:relative;" class="more-dropdown-container">
                <button class="more" onclick="this.nextElementSibling.classList.toggle('show'); event.stopPropagation();">${icons.link} Daha Fazlası ${icons.chevron}</button>
                <div class="more-dropdown" style="display:none; position:absolute; top:100%; right:0; background:var(--surface-primary, #fff); box-shadow:0 4px 12px rgba(0,0,0,0.15); border:1px solid var(--border-primary, var(--line)); border-radius:8px; padding:8px; z-index:100; min-width:160px; flex-direction:column; gap:4px;">
                    ${otherCats.map(c => `<button class="map-filter-btn outline-button" onclick="window.handleMapFilterClick(this, ${c.id}); this.parentElement.classList.remove('show');" style="border:none; justify-content:flex-start; text-align:left; width:100%; font-size: 13px; color:var(--text-primary);">${getCategoryIcon(c.name)} ${c.name}</button>`).join('')}
                </div>
            </div>
            <style>
                .more-dropdown.show { display: flex !important; }
            </style>
        `;
    }

    filterHtml += `
        <button type="button" class="frequent-visits-trigger-btn" id="frequentVisitsBtn" onclick="window.openFrequentVisitsModal()" aria-haspopup="dialog" aria-expanded="false" title="Sık Gittiğim Yerler">
            <span class="frequent-icon">${icons.history}</span>
            <span>Sık Gittiklerim</span>
        </button>`;

    if (!window._moreDropdownListenerAttached) {
        window._moreDropdownListenerAttached = true;
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.more-dropdown-container')) {
                document.querySelectorAll('.more-dropdown').forEach(d => d.classList.remove('show'));
            }
        });
    }


    const isBusiness = profileData?.accountType === "business";
    const accountType = profileData?.accountType || "individual";

    if (isBusiness) {
        // Business Dashboard Logic
        let businessName = "Bilgi Bulunamadı";
        let businessCategory = "Kategori Belirtilmedi";
        let isApprovedText = "Onay Bekleniyor";
        const rejectionReason = businessData?.rejectionReason?.trim() || "";
        
        if (businessData) {
            businessName = businessData.name || businessName;
            const bCat = allCats.find(c => c.id === businessData.categoryId);
            businessCategory = bCat ? bCat.name : businessCategory;
            isApprovedText = businessData.isApproved ? 'Onaylı İşletme' : rejectionReason ? 'Başvuru Reddedildi' : 'Onay Bekleniyor';
        } else if (profileData) {
            businessName = profileData.fullName ? profileData.fullName + " İşletmesi" : businessName;
            const pCat = allCats.find(c => c.id === parseInt(profileData.businessType));
            businessCategory = pCat ? pCat.name : businessCategory;
        }

        let completedFields = 0;
        let totalFields = 5;
        const missingFields = [];
        
        if (businessData && businessData.address && businessData.address.trim().length > 0) completedFields++; else missingFields.push("Açık adres eksik");
        if (profileData && profileData.phone) completedFields++; else missingFields.push("Telefon");
        if (businessData && businessData.latitude && businessData.longitude) completedFields++; else missingFields.push("Konum henüz bulunamadı");
        if (businessData && (businessData.logoPath || businessData.coverImagePath)) completedFields++; else missingFields.push("İşletme Görseli / Logo");
        if (businessData && businessData.openTime && businessData.closeTime) completedFields++; else missingFields.push("Çalışma Saatleri");
        
        const completionPercentage = Math.round((completedFields / totalFields) * 100);

        const alerts = [];
        if (completionPercentage < 100) alerts.push("İşletme profiliniz eksik, lütfen tamamlayın.");

        app.innerHTML = `<div class="app-shell home-shell">
            ${topbar()}
            <main class="home-layout">
                <section class="left-panel">
                    <div class="chat-header">
                        <div class="mascot-small">
                            <model-viewer src="/yeri.glb" autoplay style="width: 100%; height: 100%; background-color: transparent;"></model-viewer>
                        </div>
                        <div class="header-text">
                            <h1>Yeri ile Keşfet</h1>
                            <p>İşletmene özel asistanın</p>
                        </div>
                    </div>
                    <div class="chat-scroll" data-chat-scroll>
                        <div class="message ai">
                            <div class="msg-content"><span data-business-source="Merhaba! İşletmenle ilgili bana danışmak istediğin bir şey var mı?">Merhaba! İşletmenle ilgili bana danışmak istediğin bir şey var mı?</span><span class="msg-time" dir="ltr">${new Date().toLocaleTimeString(userLocale(), { hour: '2-digit', minute: '2-digit' })}</span></div>
                        </div>
                    </div>
                    
                    <div class="chat-input-area">
                        <form class="chat-form" data-yeri-search>
                            <input type="text" placeholder="Yeri'ye işletmeni sor..." aria-label="Yeri'ye işletmeni sor">
                            <button type="submit" class="send-btn" aria-label="Gönder">${icons.send}</button>
                        </form>
                    </div>
                </section>
                <section class="dashboard-wrapper" style="flex: 1; position: relative; display: flex; flex-direction: column; overflow: hidden; background: #E8EDF3;">
                    <div class="dashboard-section" style="padding: 24px; overflow-y: auto; width: 100%; flex: 1;">
                    
                    <div class="dashboard-header" style="background: #fff; padding: 24px; border-radius: 16px; margin-bottom: 24px; border: 1px solid #DCE3EA; box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06); display: flex; align-items: center; gap: 16px;">
                        <div style="width: 90px; height: 90px; flex: 0 0 90px; border-radius: 50%; background: var(--primary-light); display: flex; align-items: center; justify-content: center; color: var(--primary); overflow: hidden;">
                            ${businessData && businessData.logoPath ? `<img src="${businessData.logoPath}?t=${Date.now()}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" /><span style="display: none; align-items: center; justify-content: center;">${icons.building}</span>` : icons.building}
                        </div>
                        <div style="min-width: 0;">
                            <h2 data-user-content style="margin: 0; font-size: 24px; color: var(--text); overflow-wrap: anywhere;">${businessName}</h2>
                            <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 8px; font-size: 14px; color: var(--subtext);">
                                <span data-user-content style="display: flex; align-items: center; gap: 4px;">${icons.grid} ${businessCategory}</span>
                                <span style="display: flex; align-items: center; gap: 4px; color: ${businessData?.isApproved ? 'var(--success-text)' : rejectionReason ? 'var(--danger-text)' : 'var(--warning-text)'};">${icons.check} ${isApprovedText}</span>
                                ${businessData ? '<span id="dashboard-follower-count" class="follow-count" hidden></span>' : ''}
                            </div>
                            <p id="dashboard-approval-reason" hidden style="margin: 8px 0 0; color: var(--danger-text); font-size: 13px;"></p>
                        </div>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div class="dashboard-card" style="background: #fff; padding: 20px; border-radius: 16px; border: 1px solid #DCE3EA; box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06); display: flex; flex-direction: column; height: 100%;">
                            <h3 style="margin: 0 0 12px 0; font-size: 16px;">İşletme Profilini Tamamla</h3>
                            <div style="margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 13px; font-weight: 500;">
                                    <span>Tamamlanma Oranı</span>
                                    <span>%<span data-business-number="${completionPercentage}"></span></span>
                                </div>
                                <div style="height: 6px; background: #EEF2F6; border-radius: 999px; overflow: hidden; border: 1px solid #D5DEE8;">
                                    <div style="height: 100%; width: ${completionPercentage}%; background: var(--primary); border-radius: 999px;"></div>
                                </div>
                            </div>
                            ${missingFields.length > 0 ? `
                            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">
                                ${missingFields.map(field => `
                                    <li style="display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--subtext);">
                                        <span style="color: #ef4444; width: 14px; height: 14px;">${icons.target || ''}</span> <span>Eksik:</span> <span>${field}</span>
                                    </li>
                                `).join('')}
                            </ul>
                            <button class="primary-button" onclick="window.history.pushState({}, '', '/business-profile'); route(); return false;" style="margin-top: auto; margin-left: auto; width: auto; padding: 6px 16px; font-size: 13px;">Profili Düzenle</button>
                            ` : `<p style="color: var(--success); font-size: 13px; margin: 0; padding: 8px; background: #f0fdf4; border-radius: 8px;">Tebrikler! Profiliniz tamamen dolu.</p>`}
                        </div>

                        <div class="dashboard-card" style="background: #fff; padding: 20px; border-radius: 16px; border: 1px solid #DCE3EA; box-shadow: 0 4px 18px rgba(15, 23, 42, 0.06); display: flex; flex-direction: column; height: 100%;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                                <h3 style="margin: 0; font-size: 16px;">İstatistikler</h3>
                                <select style="border: 1px solid var(--line); border-radius: 6px; padding: 4px 8px; font-size: 12px; color: var(--subtext); background: #f8fafc; cursor: pointer; height: fit-content;">
                                    <option>Son 7 Gün</option>
                                    <option>Son 30 Gün</option>
                                    <option>Tüm Zamanlar</option>
                                </select>
                            </div>

                            <!-- Toplam Görüntülenme (Donut / Metric) -->
                            <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: #f0fdfa; border-radius: 12px; margin-bottom: 12px; border: 1px solid #ccfbf1;">
                                <div style="position: relative; width: 56px; height: 56px; border-radius: 50%; background: conic-gradient(#e2e8f0 100%, transparent 0); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                    <div style="width: 44px; height: 44px; background: #f0fdfa; border-radius: 50%;"></div>
                                </div>
                                <div>
                                    <div style="font-size: 13px; color: #0f766e; font-weight: 500; margin-bottom: 2px;">Toplam Görüntülenme</div>
                                    <div style="font-size: 24px; font-weight: 700; color: var(--text); line-height: 1;">—</div>
                                    <div style="font-size: 12px; color: #0f766e; opacity: 0.8; margin-top: 2px;">Henüz veri yok</div>
                                </div>
                            </div>

                            <!-- Günlük Görüntülenme (Bar chart placeholder) -->
                            <div style="padding: 12px; background: #f8fafc; border-radius: 12px; margin-bottom: 12px; border: 1px solid var(--line);">
                                <div style="font-size: 12px; color: var(--subtext); margin-bottom: 12px; font-weight: 500;">Günlük Görüntülenme</div>
                                <div style="display: flex; align-items: flex-end; justify-content: space-between; height: 40px; padding: 0 6px;">
                                    <div style="width: 10%; height: 100%; background: #e2e8f0; border-radius: 3px 3px 0 0; opacity: 0.4;"></div>
                                    <div style="width: 10%; height: 100%; background: #e2e8f0; border-radius: 3px 3px 0 0; opacity: 0.4;"></div>
                                    <div style="width: 10%; height: 100%; background: #e2e8f0; border-radius: 3px 3px 0 0; opacity: 0.4;"></div>
                                    <div style="width: 10%; height: 100%; background: #e2e8f0; border-radius: 3px 3px 0 0; opacity: 0.4;"></div>
                                    <div style="width: 10%; height: 100%; background: #e2e8f0; border-radius: 3px 3px 0 0; opacity: 0.4;"></div>
                                    <div style="width: 10%; height: 100%; background: #e2e8f0; border-radius: 3px 3px 0 0; opacity: 0.4;"></div>
                                    <div style="width: 10%; height: 100%; background: #e2e8f0; border-radius: 3px 3px 0 0; opacity: 0.4;"></div>
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 6px; font-size: 10px; color: #94a3b8; padding: 0 6px;">
                                    <span>Pzt</span><span>Sal</span><span>Çar</span><span>Per</span><span>Cum</span><span>Cmt</span><span>Paz</span>
                                </div>
                            </div>

                            <!-- Two small metric cards -->
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: auto;">
                                <div style="padding: 12px; background: #eff6ff; border-radius: 12px; border: 1px solid #dbeafe;">
                                    <div style="display: flex; align-items: center; gap: 6px; color: #1d4ed8; margin-bottom: 6px;">
                                        <div style="width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; background: #dbeafe; border-radius: 4px;">${icons.heart || icons.star || ''}</div> 
                                        <span style="font-size: 12px; font-weight: 500;">Kaydedilme</span>
                                    </div>
                                    <div style="font-size: 20px; font-weight: 700; color: var(--text);">—</div>
                                </div>
                                <div style="padding: 12px; background: #fff1f2; border-radius: 12px; border: 1px solid #ffe4e6;">
                                    <div style="display: flex; align-items: center; gap: 6px; color: #be123c; margin-bottom: 6px;">
                                        <div style="width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; background: #ffe4e6; border-radius: 4px;">${icons.ticket || ''}</div>
                                        <span style="font-size: 12px; font-weight: 500;">Kampanya Gös.</span>
                                    </div>
                                    <div style="font-size: 20px; font-weight: 700; color: var(--text);">—</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div style="position: absolute; bottom: 0; left: 0; right: 0; display: flex; justify-content: center; pointer-events: none; z-index: 100;">
                        ${bottomNav(active, accountType).replace('class="bottom-nav floating"', 'class="bottom-nav floating" style="position: relative; left: auto; transform: none; bottom: 24px; pointer-events: auto;"')}
                    </div>
                </section>
            </main>
        </div>`;
        if (rejectionReason) {
            const reasonLabel = document.getElementById('dashboard-approval-reason');
            if (reasonLabel) {
                reasonLabel.innerHTML = '<span>Ret gerekçesi:</span> <span data-user-content></span>';
                reasonLabel.querySelector('[data-user-content]').textContent = rejectionReason;
                reasonLabel.hidden = false;
            }
        }
        if (businessData) {
            fetch('/api/businesses/me/follower-count', { cache: 'no-store', credentials: 'same-origin', headers: getAuthHeaders() })
                .then(res => res.ok ? res.json() : null)
                .then(data => {
                    const label = document.getElementById('dashboard-follower-count');
                    if (label && data) {
                        label.textContent = `${Number(data.followerCount) || 0} takipçi`;
                        label.hidden = false;
                    }
                }).catch(() => {});
        }
    } else {
    app.innerHTML = `<div class="app-shell home-shell">
        ${topbar()}
        <main class="home-layout">
            <section class="left-panel">
                <div class="chat-header">
                    <div class="mascot-small">
                        <model-viewer src="/yeri.glb" autoplay style="width: 100%; height: 100%; background-color: transparent;"></model-viewer>
                    </div>
                    <div class="header-text">
                        <h1>Yeri ile Keşfet</h1>
                        <p>Yerin iyi, Yeri yanında!</p>
                    </div>
                </div>
                <div class="chat-scroll" data-chat-scroll>
                    <div class="message ai">
                        <div class="msg-content">Merhaba! Bugün etrafında ne arıyorsun? Sana uygun yerleri bulabilirim.<span class="msg-time">${new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}</span></div>
                    </div>
                </div>
                
                <div class="chat-input-area">
                    <div class="quick-prompts-row">
                        <button type="button" class="quick-prompt-btn" data-prompt-source="☕ Çalışabileceğim bir kafe"></button>
                        <button type="button" class="quick-prompt-btn" data-prompt-source="🛒 Yakın market"></button>
                        <button type="button" class="quick-prompt-btn" data-prompt-source="🍽️ İyi bir restoran"></button>
                        <button type="button" class="quick-prompt-btn" data-prompt-source="🎟️ Kampanyalı yerler"></button>
                    </div>
                    <form class="chat-form" data-yeri-search>
                        <input type="text" placeholder="Yeri'ye bir şey sor..." aria-label="Yeri'ye sor">
                        <button type="submit" class="send-btn" aria-label="Gönder">${icons.send}</button>
                    </form>
                </div>
            </section>
            <section class="map-section">
                <div class="map-filters">
                    ${filterHtml}
                </div>
                <div class="map-frame" style="position:relative;">
                    <div id="yerbul-map" style="width: 100%; height: 100%; position: absolute; inset: 0;"></div>
                    <div class="map-pins" id="dynamic-map-pins" style="display:none; pointer-events:none;">
                        <!-- Hidden container for fallback or temporary elements -->
                    </div>
                </div>
                <div class="map-controls-right">
                    <button class="map-control" aria-label="Genişlet" title="Genişlet">${icons.expand}</button>
                    <div class="zoom-controls">
                        <button class="map-control" aria-label="Haritayı Yakınlaştır" title="Haritayı Yakınlaştır">${icons.plus}</button>
                        <button class="map-control" aria-label="Haritayı Uzaklaştır" title="Haritayı Uzaklaştır">${icons.minus}</button>
                    </div>
                </div>
                <button class="locate-me-btn">${icons.target} ${escapeUiHtml(uiSource("Konumumu Bul"))}</button>
                <div class="map-mascot">
                    <model-viewer src="/yeri.glb" style="width: 100%; height: 100%; background-color: transparent;"></model-viewer>
                </div>
                <div style="position: absolute; bottom: 0; left: 0; right: 0; display: flex; justify-content: center; pointer-events: none; z-index: 100;">
                    ${bottomNav(active, accountType).replace('class="bottom-nav floating"', 'class="bottom-nav floating" style="position: relative; left: auto; transform: none; bottom: 24px; pointer-events: auto;"')}
                </div>
            </section>
        </main>
    </div>`;
    
    // Quick Prompt listeners
    updateYeriQuickPrompts();
    const quickPrompts = document.querySelectorAll('.quick-prompt-btn');
    const searchForm = document.querySelector('.chat-form');
    const searchInput = searchForm?.querySelector('input');
    
    quickPrompts.forEach(btn => {
        btn.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = btn.dataset.promptText || '';
                searchForm.dispatchEvent(new Event('submit'));
            }
        });
    });

    const quickRow = document.querySelector('.quick-prompts-row');
    if (quickRow) {
        quickRow.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0 && quickRow.scrollWidth > quickRow.clientWidth) {
                e.preventDefault();
                quickRow.scrollLeft += e.deltaY;
            }
        }, { passive: false });
    }

    bindGlobalActions();

    // Properly initialize MapLibre on every home render
    const mapEl = document.getElementById("yerbul-map");
    if (mapEl) {
        window.yerbulMapState.categoryBusinesses = null;
        window.yerbulMapState.selectedBusinessId = null;
        // Since SPA routing destroys and recreates the DOM container,
        // we must destroy the old map instance and create a new one bound to the new DOM node.
        let previousView = null;
        if (window.mapInstance) {
            previousView = { center: window.mapInstance.getCenter(), zoom: window.mapInstance.getZoom() };
            window.mapInstance.remove();
            window.mapInstance = null;
            window.yerbulMapState.userMarker = null;
        }
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const initialStyle = currentTheme === 'dark'
            ? 'https://tiles.openfreemap.org/styles/dark'
            : 'https://tiles.openfreemap.org/styles/positron';

        window.mapInstance = new maplibregl.Map({
            container: 'yerbul-map',
            style: initialStyle,
            center: previousView?.center || [29.0010, 41.0450],
            zoom: previousView?.zoom || 12.5,
            attributionControl: true
        });
        const homeMap = window.mapInstance;
        // Business markers are DOM elements and do not depend on map tiles loading.
        window.loadMapCategory('all');
        homeMap.on('dragstart', () => {
            window.yerbulMapState.autoFocusCancelled = true;
            window.yerbulMapState.initialLocationPending = false;
        });
        
        homeMap.on('load', () => {
            // Force resize in case container dimensions changed during SPA render
            homeMap.resize();
            if (currentTheme === 'dark') {
                window.enhanceDarkMapReadability(homeMap);
            }
            if (!window.yerbulMapState.autoLocationRequested && navigator.geolocation) {
                window.yerbulMapState.autoLocationRequested = true;
                navigator.geolocation.getCurrentPosition(pos => {
                    if (document.getElementById('yerbul-map') && window.mapInstance?.getContainer().isConnected) {
                        useHomeMapLocation(pos, true);
                    }
                }, () => {
                    // Keep the default map and the manual location button available.
                }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 });
            }
        });
    }


    }
    if (active === "home") {
        fetchNearbyInsights();
    }
}

async function fetchNearbyInsights() {
    if (window.yeri_insight_shown) return;
    const sharedLocation = currentYeriLocation();
    if (!sharedLocation) return;
    window.yeri_insight_shown = true;

    setTimeout(async () => {
        const liveLocation = currentYeriLocation();
        if (!liveLocation || liveLocation.obtainedAt !== sharedLocation.obtainedAt) return;
        const { lat, lng } = liveLocation;
        try {
            const res = await fetch(`/api/chat/insight?lat=${lat}&lng=${lng}`);
            
            if (res.status === 200) {
                const data = await res.json();
                if (data && data.text) {
                    const chatScroll = document.querySelector(".chat-scroll");
                    if (chatScroll) {
                        let btnHtml = "";
                        if (data.actionType === "map_focus") {
                            btnHtml = `<button class="outline-button" onclick="focusBusinessOnMap(${data.businessId})" style="font-size:12px; padding:6px 10px;">📍 Haritada Göster</button>`;
                        } else if (data.actionType === "detail") {
                            btnHtml = `<button class="outline-button" onclick="window.openBusinessDetail(${data.businessId});" style="font-size:12px; padding:6px 10px;">🔍 Detay</button>`;
                        } else if (data.actionType === "campaigns") {
                            btnHtml = `<button class="outline-button" onclick="window.history.pushState({}, '', '/campaigns'); route();" style="font-size:12px; padding:6px 10px;">🎟️ Kampanyaları Gör</button>`;
                        } else if (data.actionType === "category_search") {
                            btnHtml = `<button class="outline-button" onclick="document.querySelector('.chat-form input').value='${data.categoryName}'; document.querySelector('.chat-form').dispatchEvent(new Event('submit'));" style="font-size:12px; padding:6px 10px;">✨ Keşfet</button>`;
                        }

                        const msgHtml = `<div class="message ai" data-yeri-insight style="margin-top: 12px; animation: fadeIn 0.3s ease;">
                            <div class="msg-content" style="border: 1px solid var(--primary); background: #f0f7ff; max-width: 90%;">
                                <div style="font-weight: 600; font-size: 13px; color: var(--primary); margin-bottom: 4px;">✨ Yeri'den bir fikir</div>
                                <span data-user-content>${data.text}</span>
                                <div style="margin-top: 8px; display: flex; gap: 6px;">
                                    ${btnHtml}
                                </div>
                                <span class="msg-time">${new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}</span>
                            </div>
                        </div>`;
                        const wasNearBottom = (chatScroll.scrollHeight - chatScroll.scrollTop - chatScroll.clientHeight) <= 120;
                        chatScroll.insertAdjacentHTML("beforeend", msgHtml);
                        if (wasNearBottom) {
                            requestAnimationFrame(() => {
                                chatScroll.scrollTop = chatScroll.scrollHeight;
                            });
                        }
                        console.log("[NearbyInsights] rendered");
                    } else {
                        console.log("[NearbyInsights] error: chatScroll container not found");
                    }
                }
            } else {
                console.log("[NearbyInsights] candidates found: none");
            }
        } catch(e) {
            // Location and nearby lookup details stay out of browser logs.
        }
    }, 1000);
}

function authShell(content, tall = false, showBack = true) {
    app.innerHTML = `<main class="auth-page">
        <section class="auth-card ${tall ? "tall" : ""}">
            <div class="auth-card-top">
                <a class="crumb" href="/">${icons.home} Anasayfa</a>
                ${showBack ? `<button class="back-link" data-back>${icons.arrowLeft} Geri Dön</button>` : ""}
            </div>
            ${content}
        </section>
    </main>`;
    const back = document.querySelector("[data-back]");
    if (back) back.addEventListener("click", () => renderAuth("start"));
}

function renderAuth(mode = "start") {
    if (typeof registrationMap !== 'undefined' && registrationMap) {
        registrationMap.remove();
        registrationMap = null;
        registrationMarker = null;
        registrationLookupVersion++;
    }
    if (mode === "login") {
        authShell(`${brand("brand-card")}
            <h1 class="auth-title">Giriş Yap</h1>
            <p class="auth-subtitle">E-posta ve şifrenizle giriş yapın</p>
            <form class="form-stack" data-account-type="${mode}">
                ${field('E-posta', icons.mail, "ornek@email.com", "email", true)}
                ${passwordField('Şifre', false, true)}
                <a class="forgot-link" href="#">Şifremi Unuttum</a>
                <button class="primary-button" type="button" data-login-complete>Giriş Yap</button>
            </form>`);
        bindLoginButtons();
        fetch('/api/categories').then(r => r.json()).then(cats => {
            const grid = document.getElementById('dynamic-interests');
            if(grid) {
                grid.innerHTML = cats.map(c => interest(c.id, c.name, c.image || 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80')).join('');
                bindInterestCards();
            }
        });
        return;
    }

    if (mode === "account") {
        authShell(`${brand("brand-card")}
            <h1 class="auth-title">Hesap Türü Seçin</h1>
            <p class="auth-subtitle">Size uygun hesap türünü seçin</p>
            <div class="choice-grid">
                <button class="choice-card" data-auth="personal">${icons.user}<strong>Bireysel Hesap</strong><span>Kişisel kullanım için</span></button>
                <button class="choice-card" data-auth="business">${icons.building}<strong>Kurumsal Hesap</strong><span>İşletme sahipleri için</span></button>
            </div>`);
        bindAuthButtons();
        return;
    }

    if (mode === "personal" || mode === "business") {
        const businessFields = mode === "business" ? `
            <div class="field"><label>İşletme Türü *</label><div class="radio-row"><label><input type="radio" name="businessType" value="Şahıs Şirketi" checked> Şahıs Şirketi</label><label><input type="radio" name="businessType" value="Limited veya Anonim Şirketi"> Limited veya Anonim Şirketi</label></div></div>
            <div class="form-row" style="display:grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                ${selectField('Vergi Dairesi İli *', 'İl seçin', "tax-city", true)}
                ${selectField('Vergi Dairesi *', 'Önce il seçin', "tax-office", true)}
            </div>
            <div class="form-row" style="display:grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                ${field('Vergi Kimlik No *', "", "1234567890", "text", true)}
                ${field('TC Kimlik No *', "", "12345678901", "text", true)}
            </div>
            <div class="field">
                <label>İşletme Kategorisi *</label>
                <div class="input-wrap select-wrap">
                    <select data-category-select required><option value="">Kategori seçin</option></select>
                    ${icons.chevron}
                </div>
            </div>` : "";
        authShell(`${brand("brand-card")}
            <h1 class="auth-title">${mode === "business" ? 'Kurumsal Hesap' : 'Bireysel Hesap'}</h1>
            <p class="auth-subtitle">${mode === "business" ? 'İşletme bilgilerinizi girin' : 'Kişisel bilgilerinizi girin'}</p>
            <form class="form-stack" data-account-type="${mode}">
                ${mode === "business" ? `
                <div class="form-row" style="display:grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    ${field('Yetkili Kişi Ad Soyad *', icons.user, "Adınız Soyadınız", "text", true)}
                    ${field('İşletme Adı / Ticari Unvan *', icons.building, "İşletme Adı", "text", true)}
                </div>
                ${field('Açık Adres *', icons.mapPin, "Mahalle, cadde, sokak, bina no...", "text", true)}
                ` : `
                ${field('İsim Soyisim *', icons.user, "Adınız Soyadınız", "text", true)}
                `}
                ${field('E-posta' + " *", icons.mail, "ornek@email.com", "email", true)}
                ${passwordField('Şifre' + " *", true, true)}
                ${field(`Telefon ${mode === "business" ? "*" : "(" + 'opsiyonel' + ")"}`, icons.phone, "05XX XXX XX XX", "tel", mode === "business")}
                <div class="form-row">${selectField('İl', 'İl seçin', "city", true)}${selectField('İlçe', 'İlçe seçin', "district", true)}</div>
                ${mode === "business" ? `<div class="field"><label>İşletme konumu</label>
                    <div id="registration-map" style="height:240px; border-radius:8px; border:1px solid #DCE3EA;"></div>
                    <button type="button" class="outline-button" data-registration-retry-address style="margin-top:10px;">Adresi tekrar bul</button>
                    <p id="registration-location-message" role="status" style="font-size:13px; margin:8px 0;"></p>
                    <small>Adres konumu © OpenStreetMap katkıcıları. Pini sürükleyin veya haritaya tıklayın.</small>
                </div>` : ""}
                ${businessFields}
                <label class="check-row"><input type="checkbox" required><span>Üyelik Sözleşmesi'ni okudum ve kabul ediyorum *</span></label>
                <button class="primary-button" type="button" ${mode === "personal" ? 'data-auth="intro"' : "data-login-complete"} data-validate-step="profile">${mode === "personal" ? 'Devam Et →' : 'Hesap Oluştur'}</button>
            </form>`, true);
        bindAuthButtons();
        bindLoginButtons();
        bindLocationSelects();
        bindPasswordRules();
        if (mode === "business") bindBusinessFormExtra();
        if (mode === "business") initRegistrationMap();
        return;
    }

    if (mode === "intro") {
        authShell(`${brand("brand-card")}
            <h1 class="auth-title">Seni Tanıyalım</h1>
            <p class="auth-subtitle">Adım 2/3 · Kısa birkaç soru</p>
            <div class="step-icon">${icons.spark}</div>
            <h2 class="auth-title">Seni daha iyi tanıyalım</h2>
            <p class="auth-subtitle">Bu bilgiler sana özel kampanya ve öneriler sunmamıza yardımcı olur. İstediğini boş bırakabilirsin.</p>
            ${pillSet('Yaş aralığın', ["18-24", "25-34", "35-44", "45+"], "", null, "ageRange")}
            ${pillSet('Cinsiyet', [{value: "Kadın", label: 'Kadın'}, {value: "Erkek", label: 'Erkek'}, {value: "Belirtmek istemiyorum", label: 'Belirtmek istemiyorum'}], "three", null, "gender")}
            ${pillSet('Kampanyalardan ne sıklıkla yararlanıyorsun?', ["Her gün", "Haftada birkaç kez", "Ayda birkaç kez", "Nadiren", "Hiç kullanmıyorum"], "", null, "campaignUsageFrequency")}
            <div class="field budget-field">
                <label>Aylık dışarıda yeme, içme ve aktivitelere ne kadar bütçe ayırıyorsun? (opsiyonel)</label>
                <div class="input-wrap" style="display:flex; gap:8px;">
                    <input type="number" id="introMonthlyBudgetAmount" placeholder="Örn: 150" min="0" step="any" style="flex:1;" oninput="this.value = this.value.replace(/[^0-9.]/g, ''); if(this.value < 0) this.value = '';">
                    <select id="introMonthlyBudgetCurrency" style="width:80px; flex-shrink:0; cursor:pointer; background:#fff; border:none; outline:none; font-size:14px; padding:0 8px;">
                        <option value="EUR">€</option>
                        <option value="TRY">₺</option>
                        <option value="USD">$</option>
                    </select>
                </div>
                <div id="introBudgetError" style="display:none; color:red; font-size:12px; margin-top:4px;">Lütfen geçerli pozitif bir sayı girin.</div>
            </div>
            ${field('İlgi/hobi (opsiyonel)', "", 'Örn: spor, kahve, sohbet, sinema')}
            <button class="primary-button" type="button" data-auth="interests" data-validate-step="intro">Devam Et →</button>`, true);
        bindAuthButtons();
        bindPillGroups();
        return;
    }

    if (mode === "interests") {
        authShell(`${brand("brand-card")}
            <h1 class="auth-title">İlgi Alanların</h1>
            <p class="auth-subtitle">Adım 3/3</p>
            <div class="step-icon">${icons.spark}</div>
            <h2 class="auth-title">İlgi alanlarını seç</h2>
            <p class="auth-subtitle">Sana en uygun işletme ve kampanyaları önerebilmemiz için ilgilendiğin kategorileri seç. (En az 1)</p>
            <div class="interest-grid" id="dynamic-interests">
                <div class="spinner"></div><p>Kategoriler yükleniyor...</p>
            </div>
            <div class="selected-count" data-selected-count>0 kategori seçildi</div>
            <button class="primary-button" type="button" data-login-complete data-validate-step="interests">Hesap Oluştur</button>`, true);
        bindInterestCards();
        bindLoginButtons();
        fetch('/api/categories').then(r => r.json()).then(cats => {
            const grid = document.getElementById('dynamic-interests');
            if(grid) {
                grid.innerHTML = cats.map(c => interest(c.id, c.name, c.image || 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80')).join('');
                bindInterestCards();
            }
        });
        return;
    }

    authShell(`${brand("brand-card")}
        <h1 class="auth-title">Hoş Geldiniz</h1>
        <p class="auth-subtitle">Devam etmek için bir seçenek belirleyin</p>
        <div class="auth-actions">
            <button class="primary-button" data-auth="login">Giriş Yap</button>
            <button class="outline-button" data-auth="account">Hesap Oluştur</button>
            <div class="divider">VEYA</div>
            <button class="outline-button"><strong style="color:#4285f4">G</strong> Google ile giriş yap</button>
        </div>`, false, false);
    bindAuthButtons();
}

function field(label, icon, placeholder, type = "text", required = false) {
    const registrationKey = { "Adınız Soyadınız": "fullname", "İşletme Adı": "business-name", "Mahalle, cadde, sokak, bina no...": "address" }[placeholder];
    const stableAttr = registrationKey ? ` data-registration-${registrationKey}` : placeholder === 'Örn: spor, kahve, sohbet, sinema' ? ' data-registration-hobby' : '';
    return `<div class="field"><label>${label}</label><div class="input-wrap">${icon || ""}<input type="${type}" placeholder="${placeholder}"${stableAttr}${required ? " required" : ""}></div></div>`;
}

function passwordField(label, showRules, required = false) {
    return `<div class="field password-field">
        <label>${label}</label>
        <div class="input-wrap">${icons.lock}<input type="password" placeholder="••••••••" data-password-input${required ? " required" : ""}></div>
        ${showRules ? `<div class="password-rules" data-password-rules>
            <div data-rule="length"><span></span>En az 8 karakter</div>
            <div data-rule="upper"><span></span>En az 1 büyük harf</div>
            <div data-rule="special"><span></span>En az 1 özel karakter</div>
            <div data-rule="number"><span></span>En az 1 sayı</div>
        </div>` : ""}
    </div>`;
}

function selectField(label, placeholder, role = "", required = false) {
    const attr = role ? ` data-${role}-select` : "";
    return `<div class="field"><label>${label}</label><div class="input-wrap select-wrap"><select${attr}${required ? " required" : ""}><option value="">${placeholder}</option></select>${icons.chevron}</div></div>`;
}

function pillSet(title, items, extra = "", selectedValue = null, groupKey = "") {
    const keyAttr = groupKey ? ` data-pref-key="${groupKey}"` : "";
    return `<div class="field"${keyAttr}><label>${title}</label><div class="pill-grid ${extra}" data-pill-group>${items.map((item) => {
        const val = (typeof item === 'object' && item !== null) ? item.value : item;
        const lbl = (typeof item === 'object' && item !== null) ? item.label : item;
        const isActive = val === selectedValue || lbl === selectedValue;
        return `<button class="pill ${isActive ? 'active' : ''}" type="button" data-value="${val}">${lbl}</button>`;
    }).join("")}</div></div>`;
}

function interest(id, name, image, isSelected = false) {
    const style = image ? ` style="background-image:url('${image}')"` : "";
    return `<button class="interest-card ${isSelected ? 'selected' : ''}" type="button" data-id="${id}" data-name="${name}">
        <span class="interest-card-inner">
            <span class="interest-face interest-front"><span>${name}</span></span>
            <span class="interest-face interest-back"${style}><span>${name}</span><span class="check">${icons.check}</span></span>
        </span>
    </button>`;
}

function bindAuthButtons() {
    document.querySelectorAll("[data-auth]").forEach((button) => {
        button.addEventListener("click", () => {
            if (!validateStep(button.dataset.validateStep)) return;
            
            if (button.dataset.validateStep === "profile") {
                window.registrationData = collectRegistrationData();
            } else if (button.dataset.validateStep === "intro") {
                window.registrationData = { ...(window.registrationData || {}), ...collectIntroData() };
            }
            
            renderAuth(button.dataset.auth);
        });
    });
}


window.loadTaxOffices = async function(cityId, officeSelect) {
    console.log('tax city id:', cityId);
    if (!cityId) {
        officeSelect.innerHTML = '<option value="">Önce il seçin</option>';
        officeSelect.disabled = true;
        return;
    }
    officeSelect.innerHTML = '<option value="">Yükleniyor...</option>';
    officeSelect.disabled = true;
    try {
        const url = `/api/locations/cities/${cityId}/tax-offices`;
        console.log('tax office URL:', url);
        
        const res = await fetch(url, { cache: "no-store" });
        
        console.log('status:', res.status);
        console.log('content-type:', res.headers.get('content-type'));
        
        if (!res.ok) throw new Error(`API hatası: ${res.status} ${res.statusText}`);
        
        // Ensure we only parse as JSON if the content type is actually JSON
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") === -1) {
            const text = await res.text();
            console.error("Beklenmeyen yanıt (JSON değil):", text.substring(0, 100));
            throw new Error("Sunucu JSON yerine HTML/Text döndürdü (Bkz. Console)");
        }
        
        const offices = await res.json();
        console.log('tax offices response:', offices);
        
        officeSelect.innerHTML = '<option value="">Vergi dairesi seçin</option>';
        if (Array.isArray(offices) && offices.length > 0) {
            offices.forEach(o => {
                officeSelect.insertAdjacentHTML('beforeend', `<option value="${o.id}">${o.name}</option>`);
            });
            officeSelect.disabled = false;
        } else {
            officeSelect.innerHTML = '<option value="">Vergi dairesi bulunamadı</option>';
        }
    } catch(e) {
        console.error("Tax office fetch error:", e);
        officeSelect.innerHTML = `<option value="">Hata: ${e.message}</option>`;
    }
}

function bindBusinessFormExtra() {
    const taxCitySelect = document.querySelector("[data-tax-city-select]");
    const taxOfficeSelect = document.querySelector("[data-tax-office-select]");
    const categorySelect = document.querySelector("[data-category-select]");

    if (taxCitySelect && taxOfficeSelect) {
        taxOfficeSelect.disabled = true;
        loadCities().then(cities => {
            taxCitySelect.innerHTML = '<option value="">İl seçin</option>';
            cities.forEach(city => {
                taxCitySelect.insertAdjacentHTML('beforeend', `<option value="${city.id}">${city.name}</option>`);
            });
        });
        taxCitySelect.addEventListener("change", (e) => {
            const selectedCityId = e.target.value;
            window.loadTaxOffices(selectedCityId, taxOfficeSelect);
        });
    }

    if (categorySelect) {
        fetch('/api/categories')
            .then(r => r.json())
            .then(cats => {
                cats.forEach(c => categorySelect.insertAdjacentHTML('beforeend', `<option value="${c.id}">${c.name}</option>`));
            })
            .catch(e => console.error("Category fetch error:", e));
    }
}

var registrationMap = null;
var registrationMarker = null;
var registrationLookupVersion = 0;
var registrationLookupPromise = null;
var registrationLookupKey = null;
var registrationResolvedKey = null;
var registrationManualKey = null;
var registrationPinPrecision = 'none';
var registrationPin = null;
var registrationPinProof = null;
var registrationManualPinVersion = 0;

function registrationAddressKey() {
    const form = document.querySelector('.form-stack[data-account-type="business"]');
    return [form?.querySelector('[data-registration-address]')?.value.trim(),
        form?.querySelector('[data-city-select]')?.value,
        form?.querySelector('[data-district-select]')?.value].join('|');
}

function registrationAddressEdited() {
    registrationLookupVersion++;
    registrationLookupKey = null;
    registrationLookupPromise = null;
    registrationManualKey = null;
    registrationPin = null;
    registrationPinProof = null;
    registrationPinPrecision = 'none';
    registrationResolvedKey = null;
    if (registrationMarker) { registrationMarker.remove(); registrationMarker = null; }
    const message = document.getElementById('registration-location-message');
    if (message) message.textContent = '';
}

function registrationPlacePin(lat, lng, manual, saveable = true) {
    if (!registrationMap) return;
    if (!registrationMarker) {
        registrationMarker = new maplibregl.Marker({ draggable: true, color: '#2563eb' })
            .setLngLat([lng, lat]).addTo(registrationMap);
        registrationMarker.on('dragend', () => {
            const point = registrationMarker.getLngLat();
            registrationPlacePin(point.lat, point.lng, true);
        });
    } else registrationMarker.setLngLat([lng, lat]);
    registrationPin = saveable ? { latitude: lat, longitude: lng } : null;
    if (manual) {
        registrationManualPinVersion++;
        registrationManualKey = registrationAddressKey();
        registrationPinProof = null;
        registrationPinPrecision = 'manual';
        const message = document.getElementById('registration-location-message');
        if (message) message.textContent = 'Seçtiğiniz pin konumu kaydedilecek.';
    } else registrationManualKey = null;
}

function geocodeFailureText(failure) {
    if (failure === 'ratelimited') return 'Adres hizmeti hız sınırına ulaştı. Biraz sonra tekrar deneyin veya haritadan pin seçin.';
    if (failure === 'unavailable') return 'Adres hizmetine ulaşılamadı. Sokak sonucu doğrulanamadı; daha sonra tekrar deneyin.';
    return 'Nominatim bu adres için uygun sokak sonucu döndürmedi. Adresi tamamlayın veya haritadan pin seçin.';
}

function focusAddressPreview(map, result) {
    const { latitude, longitude } = result.location;
    const bounds = result.bounds;
    if (result.precision === 'street' && bounds && bounds.north > bounds.south && bounds.east > bounds.west) {
        map.fitBounds([[bounds.west, bounds.south], [bounds.east, bounds.north]],
            { padding: 40, maxZoom: 17.5, duration: 900 });
    } else {
        map.flyTo({ center: [longitude, latitude],
            zoom: result.precision === 'district' ? 11 : result.precision === 'neighborhood' ? 14 : 17 });
    }
}

function initRegistrationMap() {
    const container = document.getElementById('registration-map');
    if (!container || !window.maplibregl) return;
    registrationLookupVersion++;
    registrationLookupPromise = null;
    registrationLookupKey = null;
    registrationResolvedKey = null;
    registrationManualKey = null;
    registrationPin = null;
    registrationPinProof = null;
    registrationPinPrecision = 'none';
    registrationMap = new maplibregl.Map({
        container, style: 'https://tiles.openfreemap.org/styles/positron',
        center: [35.3213, 39.0590], zoom: 5
    });
    registrationMap.on('click', event => registrationPlacePin(event.lngLat.lat, event.lngLat.lng, true));
    const form = document.querySelector('.form-stack[data-account-type="business"]');
    form.querySelector('[data-registration-address]')?.addEventListener('input', registrationAddressEdited);
    form.querySelector('[data-registration-address]')?.addEventListener('change', () => searchRegistrationAddress());
    form.querySelector('[data-registration-retry-address]')?.addEventListener('click', () => searchRegistrationAddress(true));
    for (const selector of ['[data-city-select]', '[data-district-select]']) {
        form.querySelector(selector)?.addEventListener('change', () => {
            registrationAddressEdited();
            searchRegistrationAddress();
        });
    }
}

async function searchRegistrationAddress(forceRefresh = false) {
    const form = document.querySelector('.form-stack[data-account-type="business"]');
    if (!form) return;
    const address = form.querySelector('[data-registration-address]')?.value.trim();
    const cityId = form.querySelector('[data-city-select]')?.value;
    const districtId = form.querySelector('[data-district-select]')?.value;
    const message = document.getElementById('registration-location-message');
    if (!address || !cityId || !districtId) {
        if (forceRefresh && message) message.textContent = 'Adresi tekrar bulmak için açık adres, il ve ilçe girin.';
        return;
    }
    if (!forceRefresh && registrationManualKey === registrationAddressKey()) return;
    const key = registrationAddressKey();
    if (registrationLookupKey === key && registrationLookupPromise) return registrationLookupPromise;
    const version = ++registrationLookupVersion;
    const manualPinVersion = registrationManualPinVersion;
    const retryButton = form.querySelector('[data-registration-retry-address]');
    if (retryButton) retryButton.disabled = true;
    if (message) message.textContent = 'Adres aranıyor…';
    const params = new URLSearchParams({ address, cityId, districtId });
    if (forceRefresh) params.set('refresh', 'true');
    const lookup = (async () => {
        try {
            const response = await fetch(`/api/businesses/geocode-preview?${params}`, { cache: 'no-store' });
            const result = await response.json();
            if (version !== registrationLookupVersion || key !== registrationAddressKey() ||
                manualPinVersion !== registrationManualPinVersion) return;
            if (!response.ok) throw new Error(result.message || 'Adres aranamadı.');
            if (!result.location) {
                if (message) message.textContent = geocodeFailureText(result.failure) +
                    (registrationMarker ? ' Mevcut pin korunuyor.' : '');
                return;
            }
            const { latitude, longitude } = result.location;
            focusAddressPreview(registrationMap, result);
            registrationPlacePin(latitude, longitude, false, result.canSavePin);
            registrationPinProof = result.canSavePin ? result.pinProof || null : null;
            registrationPinPrecision = result.precision;
            if (message) message.textContent = result.precision === 'building'
                ? 'Adres konumu bulundu. Pini gerekirse işletmenizin tam konumuna taşıyabilirsiniz.'
                : result.canSavePin
                    ? 'Yaklaşık konum bulundu. Pini işletmenizin tam konumuna taşıyabilirsiniz.'
                    : result.precision === 'neighborhood'
                        ? 'Sokak bulunamadı; yalnızca mahalle bulundu. Haritada işletmenizin tam noktasını seçin.'
                        : 'Sokak ve mahalle bulunamadı; yalnızca ilçe bulundu. Haritada işletmenizin tam noktasını seçin.';
        } catch (error) {
            if (version === registrationLookupVersion && key === registrationAddressKey() &&
                manualPinVersion === registrationManualPinVersion && message)
                message.textContent = (error.message || 'Adres aranamadı. Haritadan pin seçin.') +
                    (registrationMarker ? ' Mevcut pin korunuyor.' : '');
        }
    })();
    registrationLookupKey = key;
    registrationLookupPromise = lookup;
    await lookup;
    if (version === registrationLookupVersion && key === registrationAddressKey())
        registrationResolvedKey = key;
    if (registrationLookupPromise === lookup) {
        registrationLookupPromise = null;
        registrationLookupKey = null;
        if (retryButton?.isConnected) retryButton.disabled = false;
    }
}

async function prepareRegistrationPin() {
    const key = registrationAddressKey();
    const message = document.getElementById('registration-location-message');
    if (registrationLookupKey === key && registrationLookupPromise) {
        if (message) message.textContent = 'Adres araması tamamlanıyor; lütfen bekleyin...';
        await registrationLookupPromise;
    }
    if (registrationManualKey === key && registrationPin) return;
    if (!registrationPin && registrationResolvedKey !== key) {
        if (message) message.textContent = 'Adres araması tamamlanıyor; lütfen bekleyin...';
        await searchRegistrationAddress();
    } else if (registrationPin && !registrationPinProof) {
        if (message) message.textContent = 'Pin konumu doğrulanıyor; lütfen bekleyin...';
        await searchRegistrationAddress();
    }
    if (key !== registrationAddressKey())
        throw new Error('Adres arama sırasında değişti. Son adresi yeniden kaydedin.');
    if (registrationPinPrecision === 'neighborhood' || registrationPinPrecision === 'district')
        throw new Error('Yalnızca bölge bulundu. Kaydetmek için haritada işletmenizin tam noktasını seçin.');
    if (registrationPin && !registrationPinProof)
        throw new Error('Haritada görünen pin doğrulanamadı. Adresi yeniden arayın veya pini elle seçin.');
    if (!registrationPin && message) {
        const reason = message.textContent && !message.textContent.includes('tamamlanıyor')
            ? message.textContent + ' ' : '';
        message.textContent = reason + 'Hesap açılabilir; haritada görünmek için adresi düzeltin veya pin seçin.';
    }
}

function collectRegistrationData() {
    const form = document.querySelector(".form-stack");
    if (!form) return {};

    const formAccountType = form.dataset.accountType;
    const accountType = formAccountType || "individual";
    const visiblePin = accountType === 'business' && registrationPin && registrationMarker
        ? registrationMarker.getLngLat() : null;
    const markerMoved = visiblePin && registrationPin &&
        (Math.abs(visiblePin.lat - registrationPin.latitude) > 0.0000001 ||
            Math.abs(visiblePin.lng - registrationPin.longitude) > 0.0000001);
    const manuallyPlaced = accountType === 'business' && !!registrationPin &&
        (registrationManualKey === registrationAddressKey() || markerMoved);

    return {
        accountType: accountType,
        fullName: form.querySelector('[data-registration-fullname]')?.value,
        businessName: accountType === "business" ? form.querySelector('[data-registration-business-name]')?.value : null,
        address: accountType === "business" ? form.querySelector('[data-registration-address]')?.value : null,
        latitude: visiblePin?.lat ?? null,
        longitude: visiblePin?.lng ?? null,
        manualPinSelected: manuallyPlaced,
        pinProof: accountType === "business" && !manuallyPlaced
            ? registrationPinProof : null,
        categoryId: accountType === "business" ? (form.querySelector("[data-category-select]")?.value ? parseInt(form.querySelector("[data-category-select]").value) : null) : null,
        email: form.querySelector('input[type="email"]')?.value,
        password: form.querySelector('input[type="password"]')?.value,
        phone: form.querySelector('input[type="tel"]')?.value,
        city: form.querySelector("[data-city-select] option:checked")?.text,
        cityId: form.querySelector("[data-city-select] option:checked")?.value,
        district: form.querySelector("[data-district-select] option:checked")?.text,
        districtId: form.querySelector("[data-district-select] option:checked")?.value,
        businessType: form.querySelector('input[type="radio"]:checked')?.value,
        taxOffice: form.querySelector("[data-tax-office-select] option:checked")?.value ? form.querySelector("[data-tax-office-select] option:checked")?.text : null,
        taxCity: form.querySelector("[data-tax-city-select] option:checked")?.value ? form.querySelector("[data-tax-city-select] option:checked")?.text : null,
        taxNumber: form.querySelector('input[placeholder="1234567890"]')?.value,
        tcKimlikNo: form.querySelector('input[placeholder="12345678901"]')?.value
    };
}

function bindPillGroups() {
    document.querySelectorAll("[data-pill-group]").forEach((group) => {
        group.querySelectorAll(".pill").forEach((button) => {
            button.addEventListener("click", () => {
                group.querySelectorAll(".pill").forEach((item) => item.classList.remove("active"));
                button.classList.add("active");
                group.classList.remove("field-error");
                document.querySelector("[data-step-error]")?.remove();
            });
        });
    });
}

function bindInterestCards() {
    const cards = document.querySelectorAll(".interest-card");
    const counter = document.querySelector("[data-selected-count]");

    const updateCounter = () => {
        const count = document.querySelectorAll(".interest-card.selected").length;
        if (counter) counter.textContent = `${count} kategori seçildi`;
    };

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.toggle("selected");
            document.querySelector(".interest-grid")?.classList.remove("field-error");
            document.querySelector("[data-step-error]")?.remove();
            updateCounter();
        });
    });

    updateCounter();
}

function bindLocationSelects() {
    const citySelects = document.querySelectorAll("[data-city-select]");
    citySelects.forEach(async (citySelect) => {
        const row = citySelect.closest(".form-row");
        const districtSelect = row ? row.querySelector("[data-district-select]") : null;
        const cities = await loadCities();

        citySelect.innerHTML = `<option value="">İl seçin</option>`;
        cities.forEach((city) => {
            citySelect.insertAdjacentHTML("beforeend", `<option value="${city.id}">${city.name}</option>`);
        });

        if (districtSelect) {
            districtSelect.innerHTML = `<option value="">Önce il seçin</option>`;
            districtSelect.disabled = true;
        }

        citySelect.addEventListener("change", async () => {
            citySelect.closest(".field")?.classList.remove("field-error");
            document.querySelector("[data-step-error]")?.remove();
            if (!districtSelect) return;
            const cityId = citySelect.value;
            districtSelect.innerHTML = `<option value="">İlçe seçin</option>`;
            districtSelect.disabled = !cityId;
            if (!cityId) return;

            const districts = await loadDistricts(cityId, cities);
            districts.forEach((district) => {
                districtSelect.insertAdjacentHTML("beforeend", `<option value="${district.id || district.name}">${district.name}</option>`);
            });
        });

        districtSelect?.addEventListener("change", () => {
            districtSelect.closest(".field")?.classList.remove("field-error");
            document.querySelector("[data-step-error]")?.remove();
        });
    });
}

async function loadCities() {
    try {
        const response = await fetch("/api/locations/cities");
        if (!response.ok) throw new Error("City API failed");
        const cities = await response.json();
        if (Array.isArray(cities) && cities.length > 0) return cities;
    } catch {
        // Local fallback keeps the form usable before the database is seeded.
    }
    return fallbackLocations.map(({ id, name }) => ({ id, name }));
}

async function loadDistricts(cityId, loadedCities) {
    try {
        const response = await fetch(`/api/locations/cities/${cityId}/districts`);
        if (!response.ok) throw new Error("District API failed");
        const districts = await response.json();
        if (Array.isArray(districts) && districts.length > 0) return districts;
    } catch {
        // Local fallback keeps the form usable before the database is seeded.
    }

    const fallbackCity = fallbackLocations.find((city) => String(city.id) === String(cityId))
        || fallbackLocations.find((city) => city.name === loadedCities.find((item) => String(item.id) === String(cityId))?.name);

    return (fallbackCity?.districts || []).map((name, index) => ({ id: `${cityId}-${index}`, name }));
}

function bindPasswordRules() {
    document.querySelectorAll("[data-password-input]").forEach((input) => {
        const fieldElement = input.closest(".password-field");
        const rulesElement = fieldElement ? fieldElement.querySelector("[data-password-rules]") : null;
        if (!rulesElement) return;

        const update = () => {
            const value = input.value;
            const checks = {
                length: value.length >= 8,
                upper: /[A-ZÇĞİÖŞÜ]/.test(value),
                special: /[^A-Za-z0-9ÇĞİÖŞÜçğıöşü]/.test(value),
                number: /\d/.test(value)
            };

            Object.entries(checks).forEach(([rule, passed]) => {
                const item = rulesElement.querySelector(`[data-rule="${rule}"]`);
                if (item) item.classList.toggle("passed", passed);
            });
        };

        input.addEventListener("input", update);
        input.addEventListener("input", () => {
            input.closest(".field")?.classList.remove("field-error");
            document.querySelector("[data-step-error]")?.remove();
        });
        input.addEventListener("focus", () => rulesElement.classList.add("visible"));
        input.addEventListener("blur", () => rulesElement.classList.toggle("visible", input.value.length > 0));
        update();
    });
}

function bindLoginButtons() {
    document.querySelectorAll("[data-login-complete]").forEach((button) => {
        button.addEventListener("click", async () => {
            if (!validateStep(button.dataset.validateStep)) return;
            
            button.disabled = true;
            const originalText = button.innerText;
            button.innerText = "Lütfen Bekleyin...";

            try {
                let response;
                if (document.querySelector('.form-stack')?.dataset.accountType === 'login') {
                    const form = document.querySelector(".form-stack");
                    const email = form.querySelector('input[type="email"]').value;
                    const password = form.querySelector('input[type="password"]').value;
                    
                    response = await fetch("/api/auth/login", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email, password })
                    });
                } else {
                    if (document.querySelector('.form-stack')?.dataset.accountType === 'business') {
                        await prepareRegistrationPin();
                    }
                    if (button.dataset.validateStep === "profile") {
                        window.registrationData = collectRegistrationData();
                    } else if (button.dataset.validateStep === "interests") {
                        window.registrationData = { ...(window.registrationData || {}), ...collectInterestsData() };
                    }
                    const data = window.registrationData || {};
                    response = await fetch("/api/auth/register", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data)
                    });
                }

                if (!response.ok) {
                    const err = await response.json();
                    throw new Error(err.message || "Bir hata oluştu.");
                }

                const authResult = await response.json();
                localStorage.removeItem("yerbul:token");
                localStorage.setItem(AUTH_KEY, "true");
                if (authResult.redirectUrl === "/admin") {
                    window.location.assign("/admin");
                    return;
                }
                window.history.pushState({}, "", "/");
                renderHome("home");
                if (authResult.locationWarning) alert(uiSource(authResult.locationWarning));
            } catch (error) {
                alert(uiSource(error.message));
                button.disabled = false;
                button.innerText = originalText;
            }
        });
    });
}

function validateStep(step) {
    if (!step) return true;

    if (step === "profile") {
        const form = document.querySelector(".form-stack");
        if (!form) return true;

        let isValid = true;
        form.querySelectorAll("[required]").forEach((input) => {
            const fieldElement = input.closest(".field") || input.closest(".check-row");
            const valid = input.type === "checkbox" ? input.checked : Boolean(input.value.trim()) && input.checkValidity();
            fieldElement?.classList.toggle("field-error", !valid);
            if (!valid) isValid = false;
        });

        const password = form.querySelector("[data-password-input]");
        const passwordValid = !password || isPasswordValid(password.value);
        password?.closest(".field")?.classList.toggle("field-error", !passwordValid);
        if (!passwordValid) isValid = false;

        if (!isValid) showStepError('Lütfen zorunlu alanları doğru şekilde doldurun.');
        return isValid;
    }

    if (step === "intro") {
        let isBudgetValid = true;
        const budgetInput = document.getElementById('introMonthlyBudgetAmount');
        if (budgetInput && budgetInput.value) {
            const val = parseFloat(budgetInput.value);
            if (isNaN(val) || val < 0) {
                isBudgetValid = false;
                budgetInput.closest('.field').classList.add('field-error');
                const err = document.getElementById('introBudgetError');
                if (err) err.style.display = 'block';
            } else {
                budgetInput.closest('.field').classList.remove('field-error');
                const err = document.getElementById('introBudgetError');
                if (err) err.style.display = 'none';
            }
        }

        const groups = [...document.querySelectorAll("[data-pill-group]")];
        const isGroupsValid = groups.every((group) => group.querySelector(".pill.active"));
        groups.forEach((group) => group.classList.toggle("field-error", !group.querySelector(".pill.active")));

        const isValid = isGroupsValid && isBudgetValid;
        if (!isValid) showStepError(isGroupsValid ? 'Lütfen geçerli bir bütçe girin.' : 'Lütfen zorunlu seçimleri tamamlayın.');
        return isValid;
    }

    if (step === "interests") {
        const isValid = document.querySelectorAll(".interest-card.selected").length > 0;
        document.querySelector(".interest-grid")?.classList.toggle("field-error", !isValid);
        if (!isValid) showStepError('Lütfen en az 1 ilgi alanı seçin.');
        return isValid;
    }

    return true;
}

function isPasswordValid(value) {
    return value.length >= 8
        && /[A-ZÇĞİÖŞÜ]/.test(value)
        && /[^A-Za-z0-9ÇĞİÖŞÜçğıöşü]/.test(value)
        && /\d/.test(value);
}

function showStepError(message) {
    let error = document.querySelector("[data-step-error]");
    if (!error) {
        error = document.createElement("div");
        error.className = "step-error";
        error.dataset.stepError = "";
        const form = document.querySelector(".form-stack") || document.querySelector(".auth-card");
        form?.appendChild(error);
    }
    error.textContent = message;
}

function renderYeriScore(score) {
    if (!score || !Array.isArray(score.criteria)) return "";
    const language = window.yerbulI18n?.language || "tr";
    const labels = ({
        tr: { title: "Öneri uyumu", partial: "Kesin puan yok", coverage: "Veri kapsamı",
            unknown: "Bilinmiyor", range: "Olası puan aralığı", why: "Puan nasıl hesaplandı?",
            CampaignAdvantage: "Aktif kampanya", Distance: "Kuş uçuşu mesafe",
            UserPreferences: "Tercih ve ziyaret geçmişi", BusinessRating: "Analiz edilmiş yorumlar" },
        en: { title: "Recommendation match", partial: "No definitive score", coverage: "Data coverage",
            unknown: "Unknown", range: "Possible score range", why: "How was this calculated?",
            CampaignAdvantage: "Active campaign", Distance: "Straight-line distance",
            UserPreferences: "Preferences and visit history", BusinessRating: "Analyzed reviews" },
        ar: { title: "توافق التوصية", partial: "لا توجد درجة نهائية", coverage: "تغطية البيانات",
            unknown: "غير معروف", range: "نطاق الدرجة المحتمل", why: "كيف حُسبت الدرجة؟",
            CampaignAdvantage: "عرض نشط", Distance: "المسافة المباشرة",
            UserPreferences: "التفضيلات وسجل الزيارات", BusinessRating: "التعليقات المحللة" }
    })[language] || null;
    if (!labels) return "";
    const number = value => typeof value === "number" && Number.isFinite(value)
        ? value.toLocaleString(userLocale(), { maximumFractionDigits: 1 }) : labels.unknown;
    const summary = score.total != null && score.coveragePercent === 100
        ? `${labels.title}: ${number(score.total)}/100`
        : `${labels.partial} · ${labels.coverage}: %${number(score.coveragePercent)}`;
    return `<details data-yeri-score style="margin-top:8px;font-size:12px;color:var(--muted);" dir="auto">
        <summary>${escapeUiHtml(summary)}</summary>
        <div>${escapeUiHtml(labels.why)}</div>
        ${score.criteria.filter(c => Object.hasOwn(labels, c.criterion)).map(c =>
            `<div>${escapeUiHtml(labels[c.criterion])} (%${number(c.weightPercent)}):
                ${c.contribution == null ? escapeUiHtml(labels.unknown) : `${number(c.contribution)}/${number(c.weightPercent)}`}</div>`).join("")}
        ${score.total == null ? `<div>${escapeUiHtml(labels.range)}: ${number(score.lowerBound)}–${number(score.upperBound)}</div>` : ""}
    </details>`;
}

async function waitForYeriModel(signal, showWaiting) {
    const deadline = Date.now() + 120000;
    while (Date.now() < deadline) {
        const response = await fetch('/api/yeri/status', { signal, cache: 'no-store' });
        if (!response.ok) return; // Keep the chat usable against an older server.
        const state = await response.json();
        if (state.status === 'ready') return;
        if (state.status === 'unavailable') {
            const error = new Error('YERI_MODEL_UNAVAILABLE');
            error.code = state.errorCode;
            throw error;
        }
        showWaiting();
        await new Promise(resolve => setTimeout(resolve, 2000));
        if (signal.aborted) throw new DOMException('Aborted', 'AbortError');
    }
    throw new Error('YERI_MODEL_WARMUP_TIMEOUT');
}

function bindGlobalActions() {
    const searchForm = document.querySelector(".chat-form") || document.querySelector("[data-yeri-search]");
    if (searchForm) {
        searchForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            if (!isAuthenticated()) {
                openYeriLoginModal();
                return;
            }
            
            const input = searchForm.querySelector("input");
            const message = input.value.trim();
            if (!message) return;
            
            input.value = "";
            const chatScroll = document.querySelector(".chat-scroll");
            if (!chatScroll) return;

            const time = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
            
            const userMsg = document.createElement("div");
            userMsg.className = "message user";
            userMsg.innerHTML = `<span data-user-content>${escapeUiHtml(message)}</span><span class="msg-time">${time} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="double-check"><path d="m18 6-11 11-5-5"/><path d="m22 6-11 11-5-5" stroke-dasharray="16" stroke-dashoffset="16" opacity="0.6"/></svg></span>`;
            chatScroll.appendChild(userMsg);
            chatScroll.scrollTop = chatScroll.scrollHeight;

            const aiMsg = document.createElement("div");
            aiMsg.className = "message ai";
            aiMsg.innerHTML = `<div class="msg-content"><span data-user-content>${escapeUiHtml(uiSource("Yeri düşünüyor..."))}</span><span class="msg-time">${time}</span></div>`;
            chatScroll.appendChild(aiMsg);
            chatScroll.scrollTop = chatScroll.scrollHeight;
            
            // disable form submission while processing
            const sendBtn = searchForm.querySelector("button[type='submit']");
            if (sendBtn) sendBtn.disabled = true;
            const requestController = new AbortController();
            const cancelOnPageHide = () => requestController.abort();
            window.addEventListener("pagehide", cancelOnPageHide, { once: true });

            try {
                if (!currentYeriLocation()) {
                    aiMsg.querySelector('.msg-content [data-user-content]').textContent = uiSource("Konumun alınıyor...");
                }
                await ensureYeriLocation(requestController.signal);
                await waitForYeriModel(requestController.signal, () => {
                    aiMsg.querySelector('.msg-content [data-user-content]').textContent = uiSource("Yeri'nin modeli hazırlanıyor, lütfen bekle...");
                });
                aiMsg.querySelector('.msg-content [data-user-content]').textContent = uiSource("Yeri düşünüyor...");
                const location = currentYeriLocation();
                const locationVersion = window.yeriLocationState.version || 0;
                const pendingExpansion = window.yeriChatState?.pendingRadiusExpansion || null;
                if (window.yeriChatState) window.yeriChatState.pendingRadiusExpansion = null;
                const res = await fetch("/api/chat", {
                    method: "POST",
                    signal: requestController.signal,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ 
                        message,
                        language: window.yerbulI18n?.language || 'tr',
                        previousResultIds: window.yeriChatState?.lastResultIds,
                        conversationToken: window.yeriChatState?.conversationToken || null,
                        userLat: location?.lat ?? null,
                        userLng: location?.lng ?? null,
                        searchContextToken: pendingExpansion?.token || window.yeriChatState?.radiusContextToken || null,
                        expandToKm: pendingExpansion?.radiusKm ?? null
                    })
                });
                const data = await res.json();
                if (locationVersion !== (window.yeriLocationState.version || 0)) {
                    aiMsg.querySelector('.msg-content').innerHTML = `<span data-user-content>${escapeUiHtml(uiSource("Konum değişti. Güncel mesafe için yeniden ara."))}</span><span class="msg-time">${time}</span>`;
                    return;
                }
                if (!res.ok || !data || typeof data !== 'object') throw new Error('Invalid Yeri response');
                if (data.action === 'plan' && !isExplicitYeriRouteRequest(message)) {
                    data.action = 'chat';
                    data.message = uiSource("Bu aramayı işleyemedim. Lütfen yeniden dene.");
                    data.results = [];
                }
                if (!['chat', 'search', 'followup', 'plan', 'decision', 'replace_stop', 'discovery', 'compare', 'map_focus', 'open_detail', 'favorite', 'show_route'].includes(data.action)) {
                    data.action = 'chat';
                    data.message = uiSource("Bu aramayı işleyemedim. Lütfen yeniden dene.");
                }
                if ((data.action === 'search' || data.action === 'plan') && !Array.isArray(data.results)) {
                    data.action = 'chat';
                    data.message = uiSource("Bu aramayı işleyemedim. Lütfen yeniden dene.");
                }
                if (data.locationRequired === true && !navigator.geolocation)
                    data.message = uiSource("Tarayıcı konuma erişemiyor. HTTPS veya localhost üzerinden açıp tekrar dene.");
                if (data.action === 'search') {
                    window.yeriChatState.currentPlan = null;
                    window.yeriChatState.lastResultIds = [];
                    window.yerbulMapState.routeBusinesses = [];
                    window.yerbulMapState.focusedBusiness = null;
                    window.yerbulMapState.selectedBusinessId = null;
                    window.yerbulMapState.isPlan = false;
                    window.renderMapMarkers({ focusResults: false });
                }
                if (!window.yeriChatState) window.yeriChatState = {};
                if (['search', 'plan', 'decision', 'discovery'].includes(data.action) || data.type === 'needs_search')
                    window.yeriChatState.conversationToken = data.conversationToken || null;
                window.yeriChatState.radiusContextToken = data.searchContextToken || null;
                window.yeriChatState.nextRadiusKm = Number.isFinite(Number(data.nextRadiusKm)) && data.nextRadiusKm != null
                    ? Number(data.nextRadiusKm) : null;
                
                let html = `<span data-user-content>${escapeUiHtml(data.message || "").replace(/\n/g, "<br>")}</span>`;
                
                if (data.action === "search" && Array.isArray(data.results) && data.results.length > 0) {
                    if (!window.yeriChatState) window.yeriChatState = {};
                    window.yeriChatState.lastResultIds = data.results.map(r => r.id);
                    rememberYeriBusinesses(data.results);
                    
                    html += `<div style="display:flex; flex-direction:column; gap:16px; margin-top:16px;">`;
                    data.results.forEach((b, idx) => {
                        const distance = b.distanceKm == null ? null : Number(b.distanceKm);
                        const hasMapPoint = b.latitude != null && b.longitude != null &&
                            Number.isFinite(Number(b.latitude)) && Number.isFinite(Number(b.longitude)) &&
                            Math.abs(Number(b.latitude)) <= 90 && Math.abs(Number(b.longitude)) <= 180;
                        const isFav = isFavorite(b.id);
                        const favColor = isFav ? "var(--primary-dark)" : "var(--muted)";
                        const favIcon = isFav ? icons.heartFilled : icons.heart;
                        const bImgSafe = typeof b.coverImagePath === "string" && /^(?:\/(?!\/)|https?:\/\/)[A-Za-z0-9/_?.=&%:#-]+$/i.test(b.coverImagePath)
                            ? b.coverImagePath : "";
                        const productPrice = b.matchedProductPrice == null ? null : Number(b.matchedProductPrice);
                        const campaignPrice = b.campaignFixedPrice == null ? null : Number(b.campaignFixedPrice);
                        const formatRecordedPrice = value => Number.isFinite(value) && value >= 0
                            ? ` · ${value.toLocaleString(userLocale(), { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (${escapeUiHtml(uiSource("Para birimi belirtilmedi"))})`
                            : "";
                        
                        html += `
                        <div class="recommendation-card" data-card-id="${b.id}" style="width:100%; max-width:320px; padding:10px; background:#fff; border-radius:12px; border:1px solid var(--line); display:flex; flex-direction:column; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.04); font-size:13px; transition: transform 0.2s ease, box-shadow 0.2s ease;">
                            <div style="display:flex; gap:10px;">
                                <div style="width:80px; height:80px; border-radius:8px; flex-shrink:0; background-color:var(--soft); ${bImgSafe ? `background-image:url('${escapeUiHtml(bImgSafe)}');` : ''} background-size:cover; background-position:center;"></div>
                                <div style="flex:1; display:flex; flex-direction:column; justify-content:center;">
                                    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:4px;">
                                        <div data-user-content style="font-weight:700; color:var(--text); font-size:14px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; line-height:1.2;">${escapeUiHtml(b.name || '')}</div>
                                        ${b.rating != null ? `<span style="background:var(--soft); color:var(--primary-dark); padding:2px 6px; border-radius:6px; font-weight:700; font-size:12px;">★ ${escapeUiHtml(b.rating)}</span>` : ''}
                                    </div>
                                    <div style="color:var(--muted); font-size:12px; display:flex; gap:6px; margin-bottom:4px;">
                                        ${b.category ? `<span data-user-content>${escapeUiHtml(b.category)}</span>` : ''}
                                        ${Number.isFinite(distance) ? `<span data-yeri-distance>•</span><span data-yeri-distance data-yeri-distance-value="${distance}">${escapeUiHtml(distance.toLocaleString(userLocale(), { maximumFractionDigits: 2 }))} ${escapeUiHtml(uiSource("km kuş uçuşu"))}</span>` : ''}
                                    </div>
                                    ${b.matchedProductName ? `<div style="font-size:12px; color:var(--muted);"><span>${escapeUiHtml(uiSource("Ürün:"))}</span> <span data-user-content>${escapeUiHtml(b.matchedProductName)}</span>${formatRecordedPrice(productPrice)}</div>` : ''}
                                    ${b.hasCampaign && b.campaignTitle ? `<div style="font-size:12px; color:var(--muted);">${icons.spark} <span>${escapeUiHtml(uiSource("Kampanya:"))}</span> <span data-user-content>${escapeUiHtml(b.campaignTitle)}</span>${formatRecordedPrice(campaignPrice)}</div>` : ''}
                                    ${b.recommendationReason ? `<div style="font-size:12px; color:var(--blue); font-style:italic; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; line-height:1.3;">"${escapeUiHtml(b.recommendationReason)}"</div>` : ''}
                                    ${renderYeriScore(b.scoreBreakdown)}
                                </div>
                            </div>
                            <div style="margin-top:10px; display:flex; flex-wrap:wrap; gap:6px;">
                                ${hasMapPoint ? `<button class="primary-button" onclick="focusBusinessOnMap(${b.id})" style="flex:1; height:32px; padding:0 8px; font-size:12px; display:flex; justify-content:center; align-items:center; gap:4px;">
                                    ${icons.target} Haritada Göster
                                </button>` : ''}
                                <button class="outline-button" onclick="window.openBusinessDetail(${b.id});" style="flex:1; height:32px; padding:0 8px; font-size:12px;">
                                    Detay
                                </button>
                                <button class="outline-button ${isFav ? 'saved' : ''}" data-yeri-favorite-id="${b.id}" style="height:32px; padding:0 10px; color:${favColor};">
                                    ${favIcon}
                                </button>
                            </div>
                        </div>`;
                    });
                    html += `</div>`;
                } else if (data.action === "decision" && data.winner) {
                    if (!window.yeriChatState) window.yeriChatState = {};
                    const allResults = [data.winner, ...(data.alternatives || [])];
                    window.yeriChatState.lastResultIds = allResults.map(r => r.id);
                    rememberYeriBusinesses(allResults);

                    html += `<div style="display:flex; flex-direction:column; gap:16px; margin-top:16px;">`;
                    
                    html += `
                    <div class="decision-winner-card" data-card-id="${data.winner.id}" style="width:100%; max-width:320px; background: linear-gradient(145deg, #fffbeb, #fef3c7); border-radius:12px; border:2px solid #fbbf24; display:flex; flex-direction:column; overflow:hidden; box-shadow:0 4px 16px rgba(251, 191, 36, 0.2); font-size:13px; transition: transform 0.2s ease;">
                        <div style="background: #f59e0b; color: white; padding: 6px 12px; font-weight: 700; font-size: 13px; display: flex; align-items: center; gap: 6px;">
                            ✨ Yeri'nin Seçimi
                        </div>
                        <div style="padding:10px; display:flex; flex-direction:column; gap:6px;">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <div data-user-content style="font-weight:800; color:#92400e; font-size:15px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; line-height:1.2;">${data.winner.name}</div>
                                <div style="background:#fef3c7; color:#b45309; padding:2px 6px; border-radius:8px; font-weight:800; font-size:12px; border: 1px solid #fcd34d;">
                                    ${data.winner.decisionScore}% Uyum
                                </div>
                            </div>
                            <div style="color:#b45309; font-size:12px; display:flex; gap:6px; margin-bottom:2px;">
                                <span>${data.winner.category}</span>
                                <span>•</span>
                                ${yeriDistanceLabel(data.winner.distance)}
                                ${data.winner.distance != null ? '<span>•</span>' : ''}
                                <span>★ ${data.winner.rating || 'N/A'}</span>
                            </div>
                            <div style="display:flex; flex-wrap:wrap; gap:4px;">
                                ${(data.winner.matchReasons || []).map(r => `<span data-user-content style="background:white; color:#d97706; border:1px solid #fde68a; padding:2px 6px; border-radius:12px; font-size:11px; font-weight:600;">✓ ${r}</span>`).join('')}
                            </div>
                            <div data-user-content style="font-size:12px; color:#92400e; font-style:italic; background:rgba(255,255,255,0.5); padding:6px; border-radius:8px; margin-top:2px; display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden; line-height:1.3;">
                                "${data.message}"
                            </div>
                        </div>
                        <div style="padding: 10px; background: rgba(255,255,255,0.6); border-top: 1px solid #fde68a; display: flex; flex-wrap:wrap; gap: 6px;">
                            <button class="primary-button" onclick="focusBusinessOnMap(${data.winner.id})" style="flex: 1; height:32px; padding:0 8px; font-size: 12px; display: flex; justify-content: center; align-items: center; gap: 4px; background: #f59e0b; border-color: #f59e0b; color: white;">
                                ${icons.target} Haritada Göster
                            </button>
                            <button class="outline-button" onclick="window.openBusinessDetail(${data.winner.id});" style="flex: 1; height:32px; padding:0 8px; font-size: 12px; border-color: #fcd34d; color: #b45309;">
                                Detay
                            </button>
                        </div>
                    </div>`;

                    if (data.alternatives && data.alternatives.length > 0) {
                        html += `<div style="font-weight: 700; color: var(--text); font-size: 13px; margin-top: 8px;">Diğer güçlü seçenekler:</div>`;
                        data.alternatives.forEach(b => {
                            html += `
                            <div class="recommendation-card" data-card-id="${b.id}" style="width:100%; max-width:320px; background:#fff; border-radius:12px; border:1px solid var(--line); display:flex; flex-direction:column; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.04); font-size:13px;">
                                <div style="padding:10px; display:flex; flex-direction:column;">
                                    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:4px;">
                                        <div data-user-content style="font-weight:700; color:var(--text); font-size: 13px;">${b.name}</div>
                                        <span style="background:var(--soft); color:var(--primary-dark); padding:2px 6px; border-radius:6px; font-weight:700; font-size:11px;">${b.decisionScore}% Uyum</span>
                                    </div>
                                    <div style="display:flex; flex-wrap:wrap; gap:4px; margin-top: 2px;">
                                        ${(b.matchReasons || []).map(r => `<span data-user-content style="background:var(--bg); color:var(--muted); padding:2px 6px; border-radius:12px; font-size:11px;">✓ ${r}</span>`).join('')}
                                    </div>
                                </div>
                                <div style="padding: 8px 10px; background: #f8fafc; border-top: 1px solid var(--line); display: flex; gap: 6px;">
                                    <button class="outline-button" onclick="focusBusinessOnMap(${b.id})" style="flex: 1; height:32px; padding: 0 8px; font-size: 12px;">${icons.target} Haritada Göster</button>
                                </div>
                            </div>`;
                        });
                    }
                    html += `</div>`;
                } else if (data.action === "plan") {
                    if (!window.yeriChatState) window.yeriChatState = {};
                    window.yeriChatState.currentPlan = data.results;
                    window.yeriChatState.lastResultIds = data.results.map(r => r.id);
                    
                    rememberYeriBusinesses(data.results);
                    window.yerbulMapState.routeBusinesses = data.results;
                    window.yerbulMapState.selectedBusinessId = null;
                    window.yerbulMapState.isPlan = true;
                    
                    let planHtml = renderPlanCard(data.results);
                    html += planHtml;
                    window.renderMapMarkers();
                } else if (data.action === "replace_stop") {
                    if (window.yeriChatState && window.yeriChatState.currentPlan) {
                        let idx = data.targetIndex;
                        if (idx >= 0 && idx < window.yeriChatState.currentPlan.length) {
                            window.yeriChatState.currentPlan[idx] = data.newStop;
                            window.yeriChatState.lastResultIds = window.yeriChatState.currentPlan.map(r => r.id);
                        }
                        
                        rememberYeriBusinesses(window.yeriChatState.currentPlan);
                        window.yerbulMapState.routeBusinesses = window.yeriChatState.currentPlan;
                        window.yerbulMapState.selectedBusinessId = null;
                        window.yerbulMapState.isPlan = true;
                        
                        let planHtml = renderPlanCard(window.yeriChatState.currentPlan);
                        html += planHtml;
                        window.renderMapMarkers();
                    } else {
                        html += `<div style="font-size:12px; color:var(--muted); margin-top:8px;">Plan bulunamadı. Lütfen yeni bir plan oluşturun.</div>`;
                    }
                } else if (data.action === "discovery") {
                    window.yeriChatState.lastResultIds = data.ids;
                    let discHtml = `<div style="display:flex; flex-direction:column; gap:8px; margin-top:12px; width:100%; max-width:320px;">
                        <div style="font-weight: 700; color: var(--primary-dark); font-size: 14px; margin-bottom: 4px;">✨ Yeri bugün senin için seçti</div>
                        <div style="display:flex; flex-direction:column; gap:8px;">`;
                    
                    data.results.forEach(item => {
                        discHtml += `
                        <div class="recommendation-card" data-card-id="${item.id}" style="background:#fff; border-radius:8px; border:1px solid var(--line); display:flex; flex-direction:column; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.02); font-size:12px; transition: transform 0.2s ease;">
                            <div style="padding:8px 12px; display:flex; flex-direction:column; gap:4px;">
                                <div style="display:flex; align-items:center; gap:6px;">
                                    <span style="font-size:14px;">${item.icon}</span>
                                    <span style="font-weight:700; color:var(--text); font-size: 13px;">${item.category}</span>
                                </div>
                                <div style="font-size:13px; color:var(--text); font-weight:600; padding-left:22px;">${item.name}</div>
                                <div style="font-size:11px; color:var(--muted); padding-left:22px;">${yeriDistanceLabel(item.distance)}</div>
                            </div>
                            <div style="padding: 6px 8px; background: #f8fafc; border-top: 1px solid var(--line); display: flex; gap: 6px;">
                                <button class="outline-button" onclick="focusBusinessOnMap(${item.id})" style="flex: 1; height:28px; padding: 0 4px; font-size: 11px;">
                                    Haritada Göster
                                </button>
                                <button class="outline-button" onclick="window.openBusinessDetail(${item.id});" style="flex: 1; height:28px; padding: 0 4px; font-size: 11px;">
                                    Detay
                                </button>
                            </div>
                        </div>`;
                    });
                    discHtml += `</div></div>`;
                    html += discHtml;
                } else if (data.action === "compare") {
                    rememberYeriBusinesses(data.results);
                    
                    let compareHtml = renderCompareCard(data.results, data.winnerId);
                    html += compareHtml;
                } else if (data.action === "map_focus" && data.businessId) {
                    setTimeout(() => focusBusinessOnMap(data.businessId), 500);
                } else if (data.action === "open_detail" && data.businessId) {
                    setTimeout(() => {
                        window.openBusinessDetail(data.businessId);
                    }, 500);
                } else if (data.action === "favorite" && data.businessId) {
                    setTimeout(() => {
                        if (!isFavorite(data.businessId)) {
                            const business = data.business;
                            if (!business) return;
                            const favs = getFavorites();
                            favs.push(business);
                            localStorage.setItem('yerbul:favorites', JSON.stringify(favs));
                        }
                    }, 500);
                } else if (data.action === "show_route") {
                    if (window.yeriChatState && window.yeriChatState.currentPlan && window.yeriChatState.currentPlan.length >= 2) {
                        rememberYeriBusinesses(window.yeriChatState.currentPlan);
                        window.yerbulMapState.routeBusinesses = window.yeriChatState.currentPlan;
                        window.yerbulMapState.selectedBusinessId = null;
                        window.yerbulMapState.isPlan = true;
                        window.renderMapMarkers();
                        setTimeout(() => {
                            const mapSection = document.querySelector(".map-section");
                            if (mapSection) mapSection.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    } else {
                        html = "Önce sana bir rota oluşturalım.";
                    }
                } else if (data.action === "search" && data.locationRequired === true) {
                    window.yeriChatState.lastResultIds = [];
                    html += `<div style="margin-top:12px;"><button type="button" class="outline-button" data-yeri-retry-location dir="auto">${escapeUiHtml(uiSource("Konumu tekrar dene"))}</button></div>`;
                } else if (data.action === "search" && data.searchReady === true && Array.isArray(data.results) && data.results.length === 0) {
                    if (!window.yeriChatState) window.yeriChatState = {};
                    window.yeriChatState.lastResultIds = [];
                    if (window.yeriChatState.radiusContextToken && window.yeriChatState.nextRadiusKm) {
                        const nextRadiusKm = window.yeriChatState.nextRadiusKm;
                        html += `<div style="margin-top:12px;"><button type="button" class="outline-button" data-yeri-expand-radius="${nextRadiusKm}" dir="auto">${escapeUiHtml(uiText('yeriRadius.expand', `${nextRadiusKm} km'ye kadar ara`, { km: nextRadiusKm }))}</button></div>`;
                    }
                    // Empty state actions
                    if (data.showSearchFilters !== false) html += `<div style="display:flex; flex-direction:column; gap:8px; margin-top:12px;">
                        <button class="outline-button" onclick="document.querySelector('.chat-form input').value='Daha uzağa bak'; document.querySelector('.chat-form').dispatchEvent(new Event('submit'))" style="font-size:13px; text-align:left; padding:8px 12px;">🔍 Daha uzağa bak</button>
                        <button class="outline-button" onclick="document.querySelector('.chat-form input').value='Kampanya şartını kaldır'; document.querySelector('.chat-form').dispatchEvent(new Event('submit'))" style="font-size:13px; text-align:left; padding:8px 12px;">❌ Kampanya şartını kaldır</button>
                    </div>`;
                }

                const wasNearBottom = (chatScroll.scrollHeight - chatScroll.scrollTop - chatScroll.clientHeight) <= 120;
                aiMsg.querySelector(".msg-content").innerHTML = `${html}<span class="msg-time">${time}</span>`;
                aiMsg.querySelector('[data-yeri-retry-location]')?.addEventListener('click', () => {
                    input.value = message;
                    searchForm.dispatchEvent(new Event('submit', { cancelable: true }));
                });
                aiMsg.querySelector('[data-yeri-expand-radius]')?.addEventListener('click', event => {
                    const radiusKm = Number(event.currentTarget.dataset.yeriExpandRadius);
                    if (!Number.isFinite(radiusKm) || !data.searchContextToken ||
                        window.yeriChatState?.radiusContextToken !== data.searchContextToken) return;
                    if (!currentYeriLocation()) {
                        alert(uiSource("Konum alınamadı veya yeterince güncel değil. Lütfen tekrar dene."));
                        return;
                    }
                    window.yeriChatState.pendingRadiusExpansion = { token: data.searchContextToken, radiusKm };
                    input.value = uiText('yeriRadius.expand', `${radiusKm} km'ye kadar ara`, { km: radiusKm });
                    searchForm.dispatchEvent(new Event('submit', { cancelable: true }));
                });
                if (data.action === "search" && Array.isArray(data.results)) {
                    aiMsg.querySelectorAll("[data-yeri-favorite-id]").forEach(button => {
                        const business = data.results.find(item => String(item.id) === button.dataset.yeriFavoriteId);
                        if (business) button.addEventListener("click", () => window.toggleFavoriteAction(
                            button, business.id, business.name, business.categoryId, business.rating ?? null,
                            business.coverImagePath || "", business.openTime || null, business.address || null));
                    });
                }
                
                // Replaced inline hover logic because it's handled by bindHoverEffects internally.
                if (wasNearBottom) {
                    requestAnimationFrame(() => {
                        chatScroll.scrollTop = chatScroll.scrollHeight;
                    });
                }
            } catch (err) {
                if (err.name === "AbortError") {
                    aiMsg.remove();
                    return;
                }
                console.error("Yeri request failed");
                const wasNearBottom = (chatScroll.scrollHeight - chatScroll.scrollTop - chatScroll.clientHeight) <= 120;
                const errorText = err.message === 'YERI_MODEL_UNAVAILABLE'
                    ? err.code === 'ModelMissing'
                        ? uiSource("Yeri'nin modeli kurulu değil. Ollama modelini kontrol edip tekrar dene.")
                        : uiSource("Yeri'nin modeli hazırlanamadı. Ollama'yı kontrol edip tekrar dene.")
                    : err.message === 'YERI_MODEL_WARMUP_TIMEOUT'
                        ? uiSource("Yeri'nin modeli beklenenden uzun sürede hazırlanıyor. Biraz sonra tekrar dene.")
                        : uiSource("Yeri şu anda sana cevap veremiyor. Daha sonra tekrar dener misin?");
                aiMsg.querySelector(".msg-content").innerHTML = `<span data-user-content>${escapeUiHtml(errorText)}</span><span class="msg-time">${time}</span>`;
                if (wasNearBottom) {
                    requestAnimationFrame(() => {
                        chatScroll.scrollTop = chatScroll.scrollHeight;
                    });
                }
            } finally {
                window.removeEventListener("pagehide", cancelOnPageHide);
                if (sendBtn) sendBtn.disabled = false;
            }
        });
    }

    const searchInput = document.querySelector("[data-yeri-search]");
    if (searchInput) {
        searchInput.addEventListener("click", () => {
            if (!isAuthenticated()) openYeriLoginModal();
        });
    }

    const logout = document.querySelector("[data-logout]");
    if (logout) {
        logout.addEventListener("click", () => {
            localStorage.removeItem(AUTH_KEY);
            renderHome("home");
        });
    }

    // --- Map Controls: Zoom ---
    const zoomControls = document.querySelectorAll('.zoom-controls .map-control');
    if (zoomControls.length >= 2) {
        const changeMapZoom = (delta) => {
            if (window.mapInstance) {
                window.mapInstance.zoomTo(window.mapInstance.getZoom() + delta, {duration: 300});
            }
        };
        const zIn = zoomControls[0].cloneNode(true);
        const zOut = zoomControls[1].cloneNode(true);
        zoomControls[0].parentNode.replaceChild(zIn, zoomControls[0]);
        zoomControls[1].parentNode.replaceChild(zOut, zoomControls[1]);
        
        zIn.addEventListener('click', () => changeMapZoom(1));
        zOut.addEventListener('click', () => changeMapZoom(-1));
    }

    // --- Map Controls: Locate Me ---
    const locateBtn = document.querySelector('.locate-me-btn');
    if (locateBtn) {
        const newLocateBtn = locateBtn.cloneNode(true);
        locateBtn.parentNode.replaceChild(newLocateBtn, locateBtn);
        newLocateBtn.addEventListener('click', () => {
            window.yerbulMapState.autoFocusCancelled = true;
            window.yerbulMapState.initialLocationPending = false;
            if (!navigator.geolocation) {
                alert(uiSource("Tarayıcınız konum özelliğini desteklemiyor."));
                return;
            }
            newLocateBtn.innerHTML = `<span class="spinner" style="width:14px; height:14px; border-width:2px; margin-right:4px;"></span> ${escapeUiHtml(uiSource("Konum aranıyor..."))}`;
            
            navigator.geolocation.getCurrentPosition((pos) => {
                if (!useHomeMapLocation(pos)) {
                    window.yeriLocationState.position = null;
                    clearYeriDistanceDisplay();
                    newLocateBtn.innerHTML = `${icons.target} ${escapeUiHtml(uiSource("Konumumu Bul"))}`;
                    alert(uiSource("Konum alınamadı veya yeterince güncel değil. Lütfen tekrar dene."));
                    return;
                }
                newLocateBtn.innerHTML = `${icons.target} ${escapeUiHtml(uiSource("Konum Bulundu"))}`;
                setTimeout(() => { newLocateBtn.innerHTML = `${icons.target} ${escapeUiHtml(uiSource("Konumumu Bul"))}`; }, 3000);
            }, (err) => {
                window.yeriLocationState.position = null;
                clearYeriDistanceDisplay();
                newLocateBtn.innerHTML = `${icons.target} ${escapeUiHtml(uiSource("Konumumu Bul"))}`;
                alert(uiSource("Konum alınamadı veya izin verilmedi. Tarayıcı iznini kontrol edip tekrar dene."));
            }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 });
        });
    }

    const initialMascot = document.querySelector('.map-section .map-mascot');
    if (initialMascot) positionMapMascot(initialMascot, null, null, false);
    bindHoverEffects();
}

function mapMascotBounds(mascot) {
    const section = mascot.closest('.map-section');
    const frame = section?.querySelector('.map-frame');
    if (!frame) return null;

    const sectionRect = section.getBoundingClientRect();
    const frameRect = frame.getBoundingClientRect();
    // The flying state scales and rotates Yeri; the model also bobs upward 10px.
    const radius = Math.hypot(mascot.offsetWidth, mascot.offsetHeight) * 0.7 + 10;
    const gap = 8;
    const left = frameRect.left + radius;
    let right = frameRect.right - radius;
    let top = frameRect.top + radius;
    let bottom = frameRect.bottom - radius - 10;
    for (const selector of ['.map-filters', '.more-dropdown.show']) {
        const obstacle = section.querySelector(selector);
        if (obstacle && obstacle.getClientRects().length) {
            top = Math.max(top, obstacle.getBoundingClientRect().bottom + radius + gap);
        }
    }
    const controls = section.querySelector('.map-controls-right');
    if (controls && controls.getClientRects().length) {
        const controlsRect = controls.getBoundingClientRect();
        const sideRight = controlsRect.left - radius - gap;
        if (sideRight >= left) right = Math.min(right, sideRight);
        else top = Math.max(top, controlsRect.bottom + radius + gap);
    }
    for (const selector of ['.locate-me-btn', '.bottom-nav.floating']) {
        const obstacle = section.querySelector(selector);
        if (obstacle && obstacle.getClientRects().length) {
            bottom = Math.min(bottom, obstacle.getBoundingClientRect().top - radius - gap);
        }
    }
    return {
        left: left - sectionRect.left,
        right: right - sectionRect.left,
        top: top - sectionRect.top,
        bottom: bottom - sectionRect.top
    };
}

function positionMapMascot(mascot, wantedLeft, wantedTop, animate = true) {
    const bounds = mapMascotBounds(mascot);
    if (!bounds || bounds.left > bounds.right || bounds.top > bounds.bottom) {
        mascot.style.visibility = 'hidden';
        return;
    }
    mascot.style.visibility = '';
    const left = wantedLeft ?? (bounds.left + bounds.right) / 2;
    const top = wantedTop ?? (bounds.top + bounds.bottom) / 2;
    if (!animate) mascot.style.transition = 'none';
    mascot.style.left = `${Math.max(bounds.left, Math.min(left, bounds.right))}px`;
    mascot.style.top = `${Math.max(bounds.top, Math.min(top, bounds.bottom))}px`;
    if (!animate) requestAnimationFrame(() => { mascot.style.transition = ''; });
}

window.addEventListener('resize', () => {
    const mascot = document.querySelector('.map-section .map-mascot');
    if (mascot) positionMapMascot(mascot, parseFloat(mascot.style.left) || null,
        parseFloat(mascot.style.top) || null, false);
});

document.addEventListener('click', (event) => {
    const mascot = document.querySelector('.map-section .map-mascot');
    if (!mascot || (!event.target.closest('.map-filters') && mascot.style.visibility !== 'hidden')) return;
    requestAnimationFrame(() => {
        if (mascot.isConnected) positionMapMascot(mascot, parseFloat(mascot.style.left) || null,
            parseFloat(mascot.style.top) || null, false);
    });
});

window.highlightBusinessPin = function(id) {
    const cards = document.querySelectorAll(".result-card, .plan-card, .recommendation-card");
    const pins = document.querySelectorAll(".pin");
    const mapMascot = document.querySelector(".map-mascot");
    const mapFrame = document.querySelector(".map-frame");

    cards.forEach(c => c.classList.remove("selected"));
    pins.forEach(p => {
        p.classList.remove("selected");
        const aura = p.querySelector(".aura");
        if (aura) aura.remove();
    });

    // Normalize IDs for comparison
    const targetId = String(id);

    const card = Array.from(cards).find(c => (c.dataset.id === targetId || c.dataset.cardId === targetId));
    if (card) card.classList.add("selected");

    const pin = Array.from(pins).find(p => (p.dataset.businessId === targetId));
    
    if (pin) {
        pin.classList.add("selected");
        if (!pin.querySelector(".aura")) {
            pin.insertAdjacentHTML('afterbegin', '<div class="aura"></div>');
        }

        if (mapMascot) {
            const mapSection = document.querySelector(".map-section");
            if (!mapSection) return;
            const pinRect = pin.getBoundingClientRect();
            const sectionRect = mapSection.getBoundingClientRect();
            
            // Calculate pin position relative to .map-section
            let relativeLeft = pinRect.left - sectionRect.left;
            let relativeTop = pinRect.top - sectionRect.top;

            let yeriRectBefore = mapMascot.getBoundingClientRect();
            let yeriLeft = relativeLeft + 40; // Default: right of pin
            let yeriTop = relativeTop - 30;   // Default: slightly above
            
            if (relativeLeft > sectionRect.width - 100) {
                yeriLeft = relativeLeft - 80;
            }
            if (relativeTop > sectionRect.height - 100) {
                yeriTop = relativeTop - 80;
            }

            positionMapMascot(mapMascot, yeriLeft, yeriTop);
            mapMascot.classList.add("flying");

            // Give the browser a tick to update bounding rect before logging
            setTimeout(() => {
                let yeriRectAfter = mapMascot.getBoundingClientRect();
                
                // Adjust popup position if it overflows map boundaries
                const popup = pin.querySelector('.pin-card');
                if (popup) {
                    popup.className = "pin-card"; // reset
                    const pRect = popup.getBoundingClientRect();
                    if (pinRect.left + pRect.width > sectionRect.right - 20) {
                        popup.classList.add("popup-left");
                    }
                    if (pinRect.top - (pRect.height/2) < sectionRect.top + 20) {
                        popup.classList.add("popup-bottom");
                    } else if (pinRect.bottom + (pRect.height/2) > sectionRect.bottom - 20) {
                        popup.classList.add("popup-top");
                    }
                }

                console.log("[MAP TEST] focus details:", {
                    clickedBusinessId: targetId,
                    "marker selector used": `[data-business-id="${targetId}"]`,
                    "marker found": !!pin,
                    "marker dataset businessId": pin.dataset.businessId,
                    "marker bounding rect": pinRect,
                    "map section bounding rect": sectionRect,
                    "Yeri element found": true,
                    "Yeri bounding rect BEFORE": yeriRectBefore,
                    "Yeri bounding rect AFTER": yeriRectAfter,
                    "final marker classes": pin.className,
                    "final Yeri inline top": mapMascot.style.top,
                    "final Yeri inline left": mapMascot.style.left,
                    "final Yeri transform": mapMascot.style.transform
                });
            }, 10);

            if (mapMascot.flyTimeout) clearTimeout(mapMascot.flyTimeout);

            mapMascot.flyTimeout = setTimeout(() => {
                mapMascot.classList.remove("flying");
            }, 1200);
        }
    } else {
        console.warn("[MAP TEST] marker not found for id", targetId);
    }
};

function bindHoverEffects() {
    const cards = document.querySelectorAll(".result-card, .plan-card, .recommendation-card");
    const pins = document.querySelectorAll(".pin");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => window.highlightBusinessPin(card.dataset.id || card.dataset.cardId));
    });
    
    pins.forEach(pin => {
        pin.addEventListener("mouseenter", () => window.highlightBusinessPin(pin.dataset.businessId));
        pin.addEventListener("mouseleave", () => {
            if (window.yerbulMapState.selectedBusinessId !== pin.dataset.businessId) {
                pin.classList.remove("selected", "hovered");
            }
        });
    });
}

function openYeriLoginModal() {
    if (document.querySelector(".yeri-modal-backdrop")) return;

    const modal = document.createElement("div");
    modal.className = "yeri-modal-backdrop";
    modal.innerHTML = `<section class="yeri-modal" role="dialog" aria-modal="true" aria-labelledby="yeri-modal-title">
        <header class="yeri-modal-head">
            <span class="mini-yeri-icon">${icons.spark}</span>
            <div><h2 id="yeri-modal-title">Yeri</h2><p>Yapay zeka asistanın ile şehri keşfet</p></div>
            <button class="modal-close" aria-label="Kapat">×</button>
        </header>
        <div class="yeri-modal-body">
            <div class="login-required-icon">${icons.arrowLeft}</div>
            <h3>Üyelik Gerekli</h3>
            <p>Yeri'yi kullanmak için lütfen giriş yapın veya hesap oluşturun.</p>
            <a class="primary-button" href="/auth">${icons.arrowLeft} Giriş Yap</a>
        </div>
        <form class="yeri-modal-input">
            <input disabled placeholder="Giriş yapın...">
            <button disabled aria-label="Gönder">${icons.search}</button>
        </form>
    </section>`;
    document.body.appendChild(modal);

    modal.addEventListener("click", (event) => {
        if (event.target === modal || event.target.closest(".modal-close")) {
            modal.remove();
        }
    });
}

function yeriMascot() {
    return `<aside class="yeri-mascot" aria-label="Yeri asistan">
        <model-viewer src="/yeri.glb" autoplay style="width: 100%; height: 100%; background-color: transparent;"></model-viewer>
        <div class="yeri-name">Yeri</div>
    </aside>`;
}

function getBusinessDetailSource(source) {
    if (!source || typeof source.url !== 'string') return null;
    try {
        const url = new URL(source.url, window.location.origin);
        if (url.origin !== window.location.origin) return null;
        const path = url.pathname.toLowerCase().replace(/\/$/, '') || '/';
        const active = {
            '/': 'home', '/index.html': 'home', '/ai-chat': 'home',
            '/categories': 'categories', '/campaigns': 'campaigns',
            '/profile': 'profile', '/profile.html': 'profile'
        }[path];
        if (!active) return null;
        const profileSections = ['profile-info', 'preferences', 'following', 'saved-campaigns', 'saved-businesses', 'saved-routes'];
        return {
            url: url.pathname + url.search,
            active,
            profileSection: active === 'profile' && profileSections.includes(source.profileSection) ? source.profileSection : 'profile-info'
        };
    } catch (_) {
        return null;
    }
}

window.openBusinessDetail = function(id) {
    const businessId = Number(id);
    if (!Number.isInteger(businessId) || businessId <= 0) return;
    const source = getBusinessDetailSource({
        url: window.location.pathname + window.location.search,
        profileSection: window.activeProfileSection
    });
    if (source?.active === 'profile') {
        window.history.replaceState({ ...(window.history.state || {}), profileSection: source.profileSection }, '', window.location.href);
    }
    window.history.pushState({ businessDetailSource: source }, '', `/business-detail?id=${businessId}`);
    route();
};

window.backFromBusinessDetail = function() {
    if (getBusinessDetailSource(window.history.state?.businessDetailSource)) {
        window.history.back();
    } else {
        window.history.replaceState({}, '', '/categories');
        route();
    }
};

async function renderBusiness() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const detailSource = getBusinessDetailSource(window.history.state?.businessDetailSource);
    const detailUrl = window.location.href;
    
    if (!id) {
        app.innerHTML = `<div class="app-shell"><main class="content-page" style="padding: 2rem;"><h1>İşletme ID bulunamadı</h1><button class="outline-button" onclick="window.backFromBusinessDetail()">Geri Dön</button></main></div>`;
        return;
    }

    app.innerHTML = `<div class="app-shell"><main class="content-page"><div class="campaigns-loading"><div class="spinner"></div><p>İşletme yükleniyor...</p></div></main></div>`;

    try {
        const response = await fetch(`/api/businesses/${id}`);
        if (!response.ok) throw new Error("İşletme bulunamadı");
        
        const business = await response.json();
        let followInfo = null;
        try {
            const followRes = await fetch(`/api/businesses/${id}/follow`, { cache: 'no-store', credentials: 'same-origin' });
            if (followRes.ok) followInfo = await followRes.json();
        } catch (_) {}
        
        const categoryMap = {1: 'Restoran', 2: 'Kafe', 7: 'Market', 8: 'Eczane'};
        const categoryName = categoryMap[business.categoryId] || 'İşletme';
        
        let imageUrl = business.coverImagePath;
        if (!imageUrl) {
            if (categoryName === 'Market') imageUrl = 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=80';
            else if (categoryName === 'Restoran') imageUrl = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80';
            else if (categoryName === 'Kafe') imageUrl = 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80';
            else if (categoryName === 'Eczane') imageUrl = 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80';
            else imageUrl = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80';
        }

        // Fetch campaigns for this business
        let activeCampaignHtml = '';
        let hasCampaign = false;
        try {
            const campRes = await fetch('/api/campaigns');
            if (campRes.ok) {
                const allCampaigns = await campRes.json();
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const businessCampaigns = allCampaigns.filter(c => {
                    const end = new Date(c.endDate);
                    end.setHours(0, 0, 0, 0);
                    return c.businessId === id && end >= today;
                });
                hasCampaign = businessCampaigns.length > 0;
                if (hasCampaign) {
                    activeCampaignHtml = `
                        <div class="panel business-detail-campaign" style="margin-top: 24px; border: 1px solid #fed7aa; background: #fff7ed; padding: 20px; border-radius: 16px;">
                            <h3 style="margin: 0 0 16px 0; color: #ea580c; font-size: 16px; display: flex; align-items: center; gap: 8px;">
                                ${icons.spark} Bu işletmede fırsat var
                            </h3>
                            <div style="display: flex; flex-direction: column; gap: 16px;">
                                ${businessCampaigns.map(c => `
                                    <div style="display: flex; justify-content: space-between; align-items: center; gap: 16px;">
                                        <div>
                                            <h4 data-user-content style="margin: 0 0 4px 0; font-size: 16px; color: var(--text);">${campaignText(c.title)}</h4>
                                            <p data-user-content style="margin: 0 0 8px 0; font-size: 13px; color: var(--muted);">${campaignText(c.description)}</p>
                                            <span style="font-size: 12px; font-weight: 500; color: #ea580c; display: inline-flex; align-items: center; gap: 4px;">
                                                <svg style="width: 14px; height: 14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <span data-user-remaining="${escapeUiHtml(c.endDate)}">${getRemainingTimeText(c.endDate)}</span>
                                            </span>
                                        </div>
                                        <button class="primary-button outline" onclick="document.querySelector('.campaigns-link').click(); setTimeout(() => document.querySelector('[data-campaign-id=\\'${Number(c.id)}\\']').click(), 500);" style="white-space: nowrap; font-size: 13px; padding: 6px 12px; border-color: #fdba74; color: #ea580c;">Kampanyayı Gör</button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }
            }
        } catch (e) {
            console.error('Failed to fetch campaigns', e);
        }

        const rawRating = business.rating;
        const parsedRating = rawRating == null || rawRating === '' ? NaN : Number(rawRating);
        const ratingNum = Number.isFinite(parsedRating) && parsedRating > 0 && parsedRating <= 10
            ? parsedRating : null;

        const isFav = isFavorite(business.id);
        const favIcon = isFav ? icons.heartFilled : icons.heart;
        const favText = isFav ? 'Kaydedildi' : 'Kaydet';
        const favColor = isFav ? '#ef4444' : '';

        const bizNameSafe = (business.name || '').replace(/'/g, "\\'");
        const bizImgSafe = (imageUrl || '').replace(/'/g, "\\'");
        const bizAddrSafe = (business.address || '').replace(/'/g, "\\'");

        if (window.location.href !== detailUrl) return;
        app.innerHTML = `<div class="app-shell">
            ${topbar()}
            <main class="content-page business-detail-page" style="padding-bottom: 100px;">
                <div class="content-wrap" style="max-width: 800px; margin: 0 auto; padding-top: 24px;">
                    <button class="outline-button" onclick="window.backFromBusinessDetail()" style="margin-bottom: 16px;">${icons.arrowLeft} Geri Dön</button>
                    
                    <div style="background: var(--surface-primary); border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); margin-bottom: 24px;">
                        <!-- Minimal Hero Image -->
                        <div style="width: 100%; height: 200px; background-image: url('${imageUrl}'); background-size: cover; background-position: center; position: relative;">
                            <div style="position: absolute; top: 16px; left: 16px; background: rgba(255,255,255,0.9); backdrop-filter: blur(4px); padding: 6px 12px; border-radius: 8px; font-size: 13px; font-weight: 600; color: var(--blue); display: flex; align-items: center; gap: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                                ${icons.grid} ${categoryName}
                            </div>
                        </div>
                        
                        <div style="padding: 24px;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 16px;">
                                <div>
                                    <h1 data-user-content style="margin: 0 0 8px 0; font-size: 24px; color: var(--text);">${business.name}</h1>
                                    ${followInfo ? `<div class="follow-count" data-follow-count="${business.id}">${Number(followInfo.followerCount) || 0} takipçi</div>` : ''}
                                    <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center; font-size: 13px; color: var(--muted);">
                                        ${hasCampaign ? `<span class="business-detail-promo" style="display: flex; align-items: center; gap: 4px; background: #fff7ed; padding: 4px 8px; border-radius: 6px; font-weight: 500; color: #ea580c;">${icons.ticket} Kampanyalı</span>` : ''}
                                    </div>
                                </div>
                                <div style="text-align: center; background: var(--surface-secondary); padding: 8px 16px; border-radius: 12px; border: 1px solid var(--border-primary); flex-shrink: 0;">
                                    <span style="display: block; font-size: 11px; color: var(--muted); font-weight: 600; text-transform: uppercase;">${escapeUiHtml(uiSource("İşletme puanı"))}</span>
                                    <strong style="font-size: ${ratingNum == null ? 13 : 20}px; color: var(--accent-primary);">${ratingNum == null ? escapeUiHtml(uiSource("Henüz puan yok")) : ratingNum.toFixed(1)}</strong>
                                </div>
                            </div>

                            ${business.address ? `<div style="display: flex; align-items: flex-start; gap: 8px; color: var(--text-secondary); font-size: 14px; margin-bottom: 12px;">
                                <div style="color: var(--muted); margin-top: 2px;">${icons.pin}</div>
                                <span data-user-content style="line-height: 1.5;">${business.address}</span>
                            </div>` : ''}

                            ${business.openTime && business.closeTime ? `<div style="display: flex; align-items: center; gap: 8px; color: var(--text-secondary); font-size: 14px; margin-bottom: 16px;">
                                <div style="color: var(--green);">${icons.check}</div>
                                <span>Şu an açık <span style="color: var(--muted);">(${business.openTime.substring(0,5)} - ${business.closeTime.substring(0,5)})</span></span>
                            </div>` : ''}

                            <!-- Action Bar -->
                            <div style="display: flex; gap: 12px; margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--line); flex-wrap: wrap;">
                                ${followInfo && (!followInfo.authenticated || followInfo.canFollow) ? `<button class="outline-button follow-toggle" data-follow-business="${business.id}" data-authenticated="${followInfo.authenticated ? 'true' : 'false'}" data-following="${followInfo.isFollowing ? 'true' : 'false'}" onclick="window.toggleBusinessFollow(this, ${business.id})">${followInfo.isFollowing ? 'Takip Ediliyor' : 'Takip Et'}</button>` : ''}
                                <button class="outline-button" id="recordVisitBtn" onclick="window.recordBusinessVisit(${business.id})" style="flex: 1; min-width: 140px; display: flex; justify-content: center; align-items: center; gap: 8px; font-size: 14px; padding: 10px;">
                                    ${icons.check} Buraya gittim
                                </button>
                                
                                <button class="primary-button" onclick="focusBusinessOnMap(${business.id})" style="flex: 1; min-width: 140px; display: flex; justify-content: center; align-items: center; gap: 8px; font-size: 14px; padding: 10px;">
                                    ${icons.target} Haritada Göster
                                </button>
                                <button class="outline-button ${isFav ? 'saved' : ''}" onclick="window.toggleFavoriteAction(this, ${business.id}, '${bizNameSafe}', ${business.categoryId}, ${ratingNum}, '${bizImgSafe}', '${business.openTime || ''}', '${bizAddrSafe}')" style="flex: 1; min-width: 140px; display: flex; justify-content: center; align-items: center; gap: 8px; font-size: 14px; padding: 10px; color: ${favColor};">
                                    ${favIcon} ${favText}
                                </button>
                                ${business.phone ? `
                                <button class="outline-button business-detail-call" onclick="window.location.href='tel:${business.phone}'" style="flex: 1; min-width: 100px; display: flex; justify-content: center; align-items: center; gap: 8px; font-size: 14px; padding: 10px; background: #f0fdf4; border-color: #bbf7d0; color: #16a34a;">
                                    ${icons.phone} Ara
                                </button>` : ''}
                            </div>
                        </div>
                    </div>

                    ${activeCampaignHtml}

                    ${business.description ? `
                    <div class="panel" style="background: var(--surface-primary); padding: 24px; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); margin-top: 24px;">
                        <h2 style="font-size: 18px; margin: 0 0 12px 0; color: var(--primary-dark);">Hakkında</h2>
                        <p data-user-content style="color: var(--text); line-height: 1.6; margin: 0; font-size: 15px;">${business.description}</p>
                    </div>` : ''}
                    
                </div>
            </main>
            ${isAuthenticated() ? yeriMascot() : ""}
            ${bottomNav(detailSource?.active || '')}
        </div>`;
        bindGlobalActions();
    } catch (error) {
        if (window.location.href !== detailUrl) return;
        app.innerHTML = `<div class="app-shell"><main class="content-page" style="padding: 2rem;"><h1>İşletme Bulunamadı</h1><p>${error.message}</p><button class="outline-button" onclick="window.backFromBusinessDetail()">Geri Dön</button></main></div>`;
    }
}


window.removeFavorite = function(id) {
    let favs = getFavorites();
    favs = favs.filter(f => f.id !== id);
    localStorage.setItem("yerbul:favorites", JSON.stringify(favs));
    renderProfile();
};

window.profileCache = window.profileCache || { profileData: null, preferences: {}, favListHtml: '' };

async function renderProfile() {
    window.activeProfileSection = window.activeProfileSection || 'profile-info';
    window.isSavedExpanded = window.isSavedExpanded || false;
    
    const favs = getFavorites();
    const categoryMap = {1: 'Restoran', 2: 'Kafe', 7: 'Market', 8: 'Eczane'};
    
    let favListHtml = '';
    if (favs.length === 0) {
        favListHtml = '<div class="profile-empty-state" style="background: var(--surface-primary); padding: 48px 32px; border-radius: 14px; border: 1px solid var(--border-primary); text-align: center; color: var(--text-secondary);"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="margin-bottom: 16px; opacity: 0.9; color: var(--text-secondary); display: inline-block;"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg><p style="font-size: 15px; font-weight: 500; color: var(--text-secondary); margin: 0;">Henüz kaydettiğin bir işletme yok.</p></div>';
    } else {
        favListHtml = favs.map(f => {
            const catName = categoryMap[f.categoryId] || 'İşletme';
            let imageUrl = f.coverImagePath;
            if (imageUrl && imageUrl.startsWith('/')) imageUrl = window.location.origin + imageUrl;
            
            return `
            <div class="favorite-item" style="border: 1px solid var(--border-primary); border-radius: 12px; overflow: hidden; background: var(--surface-primary); margin-bottom: 16px;">
                <div style="display: flex; cursor: pointer;" onclick="window.openBusinessDetail(${f.id});">
                    <img src="${imageUrl || 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80'}" style="width: 120px; height: 120px; object-fit: cover;">
                    <div style="padding: 12px; display: flex; flex-direction: column; justify-content: center;">
                        <span style="font-size: 11px; font-weight: 600; color: #f59e0b; text-transform: uppercase; letter-spacing: 0.5px;">${catName}</span>
                        <h3 style="margin: 4px 0 8px 0; font-size: 16px; color: var(--text-primary);">${f.name}</h3>
                    </div>
                </div>
                <div class="favorite-item-footer" style="padding: 12px; background: var(--surface-secondary); border-top: 1px solid var(--border-primary); display: flex; gap: 8px;">
                    <button class="primary-button" onclick="focusBusinessOnMap(${f.id})" style="flex: 1; padding: 6px; font-size: 12px; display: flex; justify-content: center; align-items: center; gap: 4px;">
                        ${icons.target} Haritada Göster
                    </button>
                    <button class="outline-button" onclick="window.openBusinessDetail(${f.id});" style="flex: 1; padding: 6px; font-size: 12px;">
                        Detay
                    </button>
                    <button class="outline-button favorite-remove-btn" onclick="window.removeFavorite(${f.id})" style="padding: 6px 12px; font-size: 12px; color: var(--danger-text, #ef4444); border-color: rgba(239, 68, 68, 0.4);">
                        Kaldır
                    </button>
                </div>
            </div>`;
        }).join('');
    }
    
    window.profileCache.favListHtml = favListHtml;

    if (isAuthenticated()) {
        try {
            app.innerHTML = `<div class="app-shell">${topbar()}<main class="content-page"><div class="spinner"></div></main>${bottomNav("profile")}</div>`;
            const res = await fetch('/api/auth/me', { 
                cache: 'no-store',
                headers: getAuthHeaders(),
                credentials: 'same-origin'
            });
            if (res.status === 401) {
                localStorage.removeItem(AUTH_KEY);
                try { localStorage.removeItem("yerbul:token"); } catch (_) {}
                window.profileCache = null;
                window.location.href = '/auth';
                return;
            }
            if (res.ok) {
                const profileData = await res.json();
                window.profileCache.profileData = profileData;
                if (profileData.accountType !== 'individual' && window.activeProfileSection === 'following') {
                    window.activeProfileSection = 'profile-info';
                }
                if (profileData.preferences) {
                    try {
                        window.profileCache.preferences = typeof profileData.preferences === 'string' ? JSON.parse(profileData.preferences) : profileData.preferences;
                    } catch(err) {
                        console.error("Failed to parse preferences:", err);
                        window.profileCache.preferences = {};
                    }
                }
            }
        } catch(e) {
            console.error("GET /api/auth/me error:", e);
        }
    }

    app.innerHTML = `<div class="app-shell">
        ${topbar()}
        <main class="content-page">
            <div class="content-wrap profile-panel" style="display: flex; width: calc(100% - 48px); max-width: 1320px; margin: 28px auto; background: var(--surface-primary, #fff); border: 1px solid var(--border-primary, var(--line)); border-radius: 12px; overflow: hidden; align-items: stretch; margin-bottom: 40px; min-height: 600px;">
                <aside class="profile-side" id="profile-sidebar-container" style="width: 260px; flex-shrink: 0; border-right: 1px solid var(--border-primary, var(--line)); padding: 32px 16px; background: var(--surface-primary, #fff); display: flex; flex-direction: column;"></aside>
                <section class="profile-main" id="profile-content" style="flex: 1; min-width: 0; padding: 36px 32px; background: var(--surface-secondary, #fafcff);"></section>
            </div>
        </main>
        ${isAuthenticated() ? yeriMascot() : ""}
        ${bottomNav("profile")}
    </div>`;

    bindGlobalActions();

    window.renderProfileSidebar = function() {
        const sidebar = document.getElementById('profile-sidebar-container');
        if (!sidebar) return;
        
        const active = window.activeProfileSection;
        const expanded = window.isSavedExpanded;
        const pData = window.profileCache.profileData || {};
        
        const avatarUrl = getAvatarUrl(pData.avatarKey);
        const avatarHtml = avatarUrl 
            ? `<img src="${avatarUrl}" style="width: 56px; height: 56px; border-radius: 50%; object-fit: cover;">`
            : `<div class="avatar" style="width: 56px; height: 56px; background: var(--soft); color: var(--blue); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px;">${icons.user}</div>`;
        
        sidebar.innerHTML = `
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 32px; padding: 0 8px;">
                ${avatarHtml}
                <div>
                    <h2 data-user-content style="font-size: 18px; margin: 0 0 4px 0; color: var(--text-primary); font-weight: 700;">${pData.fullName || uiSource('Kullanıcı')}</h2>
                    <p style="font-size: 13px; color: var(--text-muted); margin: 0;">${pData.accountType === 'business' ? 'Kurumsal' : 'Bireysel'} Hesap</p>
                </div>
            </div>
            
            <div class="profile-menu" style="display: flex; flex-direction: column; gap: 4px;">
                <button class="profile-menu-btn ${active === 'profile-info' ? 'active' : ''}" onclick="window.setProfileSection('profile-info')">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    Profil Bilgilerim
                </button>
                <button class="profile-menu-btn ${active === 'preferences' ? 'active' : ''}" onclick="window.setProfileSection('preferences')">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                    Tercihlerim
                </button>
                ${pData.accountType === 'individual' ? `<button class="profile-menu-btn ${active === 'following' ? 'active' : ''}" onclick="window.setProfileSection('following')">${icons.building} Takip Ettiklerim</button>` : ''}
                <button class="profile-menu-btn ${(['saved-campaigns', 'saved-businesses', 'saved-routes'].includes(active) || expanded) ? 'active' : ''} ${expanded ? 'expanded' : ''}" onclick="window.setProfileSection('saved-menu-toggle')">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                    Kaydettiklerim
                    <span class="profile-menu-chevron" style="margin-left: auto; font-size: 16px;">${expanded ? '▾' : '▴'}</span>
                </button>
                
                <div class="profile-submenu" style="max-height: ${expanded ? '300px' : '0'}; overflow: hidden; transition: max-height .2s ease, opacity .2s ease; opacity: ${expanded ? '1' : '0'}; display: flex; flex-direction: column;">
                    <button class="profile-submenu-btn ${active === 'saved-campaigns' ? 'active' : ''}" onclick="window.setProfileSection('saved-campaigns')">Kaydettiğim Kampanyalar</button>
                    <button class="profile-submenu-btn ${active === 'saved-businesses' ? 'active' : ''}" onclick="window.setProfileSection('saved-businesses')">Kaydettiğim İşletmeler</button>
                    <button class="profile-submenu-btn ${active === 'saved-routes' ? 'active' : ''}" onclick="window.setProfileSection('saved-routes')">Kaydettiğim Rotalar</button>
                </div>
            </div>
        `;
    };

    window.selectProfileAvatar = function(el) {
        document.querySelectorAll('.avatar-option').forEach(img => img.classList.remove('selected'));
        el.classList.add('selected');
        const key = el.getAttribute('data-avatar');
        window.selectedAvatarForProfile = key;
        const url = getAvatarUrl(key);
        if(url) {
            const preview = document.getElementById('profile-preview-avatar');
            if (preview) preview.src = url;
        }
    };

    window.saveProfileInfo = async function() {
        const payload = {
            fullName: document.getElementById('pi-fullname')?.value || '',
            phone: document.getElementById('pi-phone')?.value || '',
            city: document.getElementById('pi-city')?.value || '',
            district: document.getElementById('pi-district')?.value || '',
            avatarKey: window.selectedAvatarForProfile
        };
        const emailInput = document.getElementById('pi-email')?.value || '';
        const currentEmail = window.profileCache.profileData?.email;

        if(!emailInput || !emailInput.includes('@')) {
            showToast("Geçerli bir e-posta girin.");
            return;
        }

        const btn = document.querySelector('button[onclick="window.saveProfileInfo()"]');
        const originalText = btn ? btn.innerText : "";
        if (btn) {
            btn.innerText = "Kaydediliyor...";
            btn.disabled = true;
        }

        if (window.profileCache.profileData?.accountType === 'business') {
            payload.businessType = document.getElementById('pi-businesstype')?.value || '';
            payload.taxCity = document.getElementById('pi-taxcity')?.value || '';
            payload.taxOffice = document.getElementById('pi-taxoffice')?.value || '';
            payload.taxNumber = document.getElementById('pi-taxnumber')?.value || '';
            payload.tcKimlikNo = document.getElementById('pi-tckimlik')?.value || '';
        }

        try {
            const profileRes = await fetch("/api/auth/me/profile", {
                method: "PUT",
                headers: getAuthHeaders({ "Content-Type": "application/json" }),
                credentials: 'same-origin',
                body: JSON.stringify(payload)
            });

            let profileError = null;
            if (!profileRes.ok) {
                const err = await profileRes.json();
                profileError = err.message || "Profil güncellenirken hata oluştu.";
            }

            let emailError = null;
            let emailUpdated = false;
            if (emailInput !== currentEmail && !profileError) {
                const emailRes = await fetch("/api/auth/me/email", {
                    method: "PUT",
                    headers: getAuthHeaders({ "Content-Type": "application/json" }),
                    credentials: 'same-origin',
                    body: JSON.stringify({ newEmail: emailInput })
                });
                
                if (!emailRes.ok) {
                    const err = await emailRes.json();
                    emailError = err.message || "E-posta güncellenemedi.";
                } else {
                    emailUpdated = true;
                }
            }

            if (profileError) {
                showToast(profileError);
            } else if (emailError) {
                showToast(emailError);
            } else {
                showToast("Profil bilgileriniz güncellendi.");
                window.profileCache.profileData = { ...window.profileCache.profileData, ...payload };
                if (emailUpdated) {
                    window.profileCache.profileData.email = emailInput;
                }
                renderProfileSidebar();
                if (window.refreshTopbarAvatar) window.refreshTopbarAvatar();
            }
        } catch (e) {
            console.error(e);
            showToast("Bağlantı hatası.");
        } finally {
            if (btn) {
                btn.innerText = originalText;
                btn.disabled = false;
            }
        }
    };

    window.saveProfileEmail = async function() {
        const email = document.getElementById('pi-email')?.value;
        if(!email || !email.includes('@')) {
            showToast("Geçerli bir e-posta girin.");
            return;
        }
        
        const btn = document.querySelector('button[onclick="window.saveProfileEmail()"]');
        const originalText = btn ? btn.innerText : "";
        if (btn) {
            btn.innerText = "Bekleyin...";
            btn.disabled = true;
        }

        try {
            const res = await fetch("/api/auth/me/email", {
                method: "PUT",
                headers: getAuthHeaders({ "Content-Type": "application/json" }),
                credentials: 'same-origin',
                body: JSON.stringify({ newEmail: email })
            });
            if (res.ok) {
                showToast("E-posta adresiniz güncellendi.");
                if (window.profileCache.profileData) window.profileCache.profileData.email = email;
            } else {
                const err = await res.json();
                showToast(err.message || "E-posta güncellenemedi.");
            }
        } catch (e) {
            console.error(e);
            showToast("Bağlantı hatası.");
        } finally {
            if (btn) {
                btn.innerText = originalText;
                btn.disabled = false;
            }
        }
    };

    window.saveProfilePassword = async function() {
        const cur = document.getElementById('pi-current-pw')?.value;
        const newPw = document.getElementById('pi-new-pw')?.value;
        const confPw = document.getElementById('pi-confirm-pw')?.value;

        if(!cur || !newPw || !confPw) {
            showToast("Lütfen tüm şifre alanlarını doldurun.");
            return;
        }
        if (newPw !== confPw) {
            showToast("Yeni şifreler eşleşmiyor.");
            return;
        }

        const btn = document.querySelector('button[onclick="window.saveProfilePassword()"]');
        const originalText = btn ? btn.innerText : "";
        if (btn) {
            btn.innerText = "Bekleyin...";
            btn.disabled = true;
        }

        try {
            const res = await fetch("/api/auth/me/password", {
                method: "PUT",
                headers: getAuthHeaders({ "Content-Type": "application/json" }),
                credentials: 'same-origin',
                body: JSON.stringify({ currentPassword: cur, newPassword: newPw, confirmPassword: confPw })
            });
            if (res.ok) {
                showToast("Şifreniz başarıyla değiştirildi.");
                if (document.getElementById('pi-current-pw')) document.getElementById('pi-current-pw').value = '';
                if (document.getElementById('pi-new-pw')) document.getElementById('pi-new-pw').value = '';
                if (document.getElementById('pi-confirm-pw')) document.getElementById('pi-confirm-pw').value = '';
            } else {
                const err = await res.json();
                showToast(err.message || "Şifre güncellenemedi.");
            }
        } catch (e) {
            console.error(e);
            showToast("Bağlantı hatası.");
        } finally {
            if (btn) {
                btn.innerText = originalText;
                btn.disabled = false;
            }
        }
    };

    window.renderProfileContent = function() {
        const content = document.getElementById('profile-content');
        if (!content) return;
        
        const active = window.activeProfileSection;
        
        if (active === 'profile-info') {
            const user = window.profileCache.profileData || {};
            const defAvatar = user.avatarKey ? '/assets/avatars/' + user.avatarKey + '.png' : '/assets/avatars/avatar-1.png';
            window.selectedAvatarForProfile = user.avatarKey || 'avatar-1';
            
            content.innerHTML = `
                <h1 style="margin-bottom: 24px; color: var(--text-primary); font-size: 26px; font-weight: 700;">Profil Bilgilerim</h1>
                
                <div class="profile-card" style="background: var(--surface-primary); border: 1px solid var(--border-primary); border-radius: 14px; padding: 24px; margin-bottom: 24px;">
                    <h2 class="profile-card-title" style="font-size: 18px; margin-bottom: 16px; color: var(--text-primary); font-weight: 600;">Profil Fotoğrafı</h2>
                    <div class="avatar-selection-area" style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
                        <img id="profile-preview-avatar" src="${defAvatar}" class="avatar-large-preview" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid var(--blue, #0284c7);">
                        <div class="avatar-grid" style="display: flex; gap: 10px; flex-wrap: wrap;">
                            ${[1,2,3,4,5,6,7,8].map(i => `<img src="/assets/avatars/avatar-${i}.png" class="avatar-option ${window.selectedAvatarForProfile === 'avatar-'+i ? 'selected' : ''}" data-avatar="avatar-${i}" onclick="window.selectProfileAvatar(this)" style="width: 48px; height: 48px; border-radius: 50%; cursor: pointer; border: 2px solid ${window.selectedAvatarForProfile === 'avatar-'+i ? 'var(--blue, #0284c7)' : 'transparent'}; transition: all 0.2s;">`).join('')}
                        </div>
                    </div>
                </div>

                <div class="profile-card" style="background: var(--surface-primary); border: 1px solid var(--border-primary); border-radius: 14px; padding: 24px; margin-bottom: 24px;">
                    <h2 class="profile-card-title" style="font-size: 18px; margin-bottom: 16px; color: var(--text-primary); font-weight: 600;">Hesap Bilgileri</h2>
                    <div class="profile-form-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
                        <div class="form-group">
                            <label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-muted); margin-bottom: 6px;">Ad / Kullanıcı Adı</label>
                            <input type="text" id="pi-fullname" value="${user.fullName || ''}" class="profile-input" style="width: 100%; height: 42px; padding: 0 12px; border-radius: 8px; border: 1px solid var(--border-primary); background: var(--surface-secondary); color: var(--text-primary);">
                        </div>
                        <div class="form-group">
                            <label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-muted); margin-bottom: 6px;">E-posta</label>
                            <input type="email" id="pi-email" value="${user.email || ''}" class="profile-input" style="width: 100%; height: 42px; padding: 0 12px; border-radius: 8px; border: 1px solid var(--border-primary); background: var(--surface-secondary); color: var(--text-primary);">
                        </div>
                        <div class="form-group">
                            <label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-muted); margin-bottom: 6px;">Telefon</label>
                            <input type="text" id="pi-phone" value="${user.phone || ''}" class="profile-input" style="width: 100%; height: 42px; padding: 0 12px; border-radius: 8px; border: 1px solid var(--border-primary); background: var(--surface-secondary); color: var(--text-primary);">
                        </div>
                        <div class="form-group">
                            <label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-muted); margin-bottom: 6px;">İl</label>
                            <input type="text" id="pi-city" value="${user.city || ''}" class="profile-input" style="width: 100%; height: 42px; padding: 0 12px; border-radius: 8px; border: 1px solid var(--border-primary); background: var(--surface-secondary); color: var(--text-primary);">
                        </div>
                        <div class="form-group">
                            <label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-muted); margin-bottom: 6px;">İlçe</label>
                            <input type="text" id="pi-district" value="${user.district || ''}" class="profile-input" style="width: 100%; height: 42px; padding: 0 12px; border-radius: 8px; border: 1px solid var(--border-primary); background: var(--surface-secondary); color: var(--text-primary);">
                        </div>
                        <div class="form-group">
                            <label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-muted); margin-bottom: 6px;">Hesap Türü</label>
                            <input type="text" data-user-account-type value="${user.accountType === 'business' ? 'Kurumsal Hesap' : uiSource('Bireysel Hesap')}" ${window.yerbulI18n?.language === 'ar' ? 'dir="rtl"' : ''} class="profile-input" readonly style="width: 100%; height: 42px; padding: 0 12px; border-radius: 8px; border: 1px solid var(--border-primary); background: var(--surface-secondary); color: var(--text-muted); cursor: not-allowed;">
                        </div>
                        ${user.accountType === 'business' ? `
                            <div class="form-group"><label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-muted); margin-bottom: 6px;">Şirket Türü</label><input type="text" id="pi-businesstype" value="${user.businessType || ''}" class="profile-input" style="width: 100%; height: 42px; padding: 0 12px; border-radius: 8px; border: 1px solid var(--border-primary); background: var(--surface-secondary); color: var(--text-primary);"></div>
                            <div class="form-group"><label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-muted); margin-bottom: 6px;">Vergi Dairesi İl</label><input type="text" id="pi-taxcity" value="${user.taxCity || ''}" class="profile-input" style="width: 100%; height: 42px; padding: 0 12px; border-radius: 8px; border: 1px solid var(--border-primary); background: var(--surface-secondary); color: var(--text-primary);"></div>
                            <div class="form-group"><label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-muted); margin-bottom: 6px;">Vergi Dairesi</label><input type="text" id="pi-taxoffice" value="${user.taxOffice || ''}" class="profile-input" style="width: 100%; height: 42px; padding: 0 12px; border-radius: 8px; border: 1px solid var(--border-primary); background: var(--surface-secondary); color: var(--text-primary);"></div>
                            <div class="form-group"><label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-muted); margin-bottom: 6px;">Vergi No</label><input type="text" id="pi-taxnumber" value="${user.taxNumber || ''}" class="profile-input" style="width: 100%; height: 42px; padding: 0 12px; border-radius: 8px; border: 1px solid var(--border-primary); background: var(--surface-secondary); color: var(--text-primary);"></div>
                            <div class="form-group"><label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-muted); margin-bottom: 6px;">TC Kimlik No</label><input type="text" id="pi-tckimlik" value="${user.tcKimlikNo || ''}" class="profile-input" style="width: 100%; height: 42px; padding: 0 12px; border-radius: 8px; border: 1px solid var(--border-primary); background: var(--surface-secondary); color: var(--text-primary);"></div>
                        ` : ''}
                    </div>
                    <div class="profile-actions" style="margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap;">
                        <button class="primary-button" onclick="window.saveProfileInfo()">Kişisel Bilgileri Kaydet</button>
                        <button class="outline-button" onclick="window.saveProfileEmail()">E-postayı Değiştir</button>
                    </div>
                </div>

                <div class="profile-card" style="background: var(--surface-primary); border: 1px solid var(--border-primary); border-radius: 14px; padding: 24px;">
                    <h2 class="profile-card-title" style="font-size: 18px; margin-bottom: 16px; color: var(--text-primary); font-weight: 600;">Şifre Değiştir</h2>
                    <div class="profile-form-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
                        <div class="form-group">
                            <label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-muted); margin-bottom: 6px;">Mevcut Şifre</label>
                            <input type="password" id="pi-current-pw" class="profile-input" style="width: 100%; height: 42px; padding: 0 12px; border-radius: 8px; border: 1px solid var(--border-primary); background: var(--surface-secondary); color: var(--text-primary);">
                        </div>
                        <div class="form-group">
                            <label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-muted); margin-bottom: 6px;">Yeni Şifre</label>
                            <input type="password" id="pi-new-pw" class="profile-input" style="width: 100%; height: 42px; padding: 0 12px; border-radius: 8px; border: 1px solid var(--border-primary); background: var(--surface-secondary); color: var(--text-primary);">
                        </div>
                        <div class="form-group">
                            <label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-muted); margin-bottom: 6px;">Yeni Şifre Tekrar</label>
                            <input type="password" id="pi-confirm-pw" class="profile-input" style="width: 100%; height: 42px; padding: 0 12px; border-radius: 8px; border: 1px solid var(--border-primary); background: var(--surface-secondary); color: var(--text-primary);">
                        </div>
                    </div>
                    <div class="profile-actions" style="margin-top: 24px;">
                        <button class="primary-button" onclick="window.saveProfilePassword()">Şifreyi Değiştir</button>
                    </div>
                </div>
            `;
        } 
        else if (active === 'preferences') {
            const preferences = window.profileCache.preferences || {};
            const ageRange = preferences.ageRange || "";
            const gender = preferences.gender || "";
            const campaignUsageFrequency = preferences.campaignUsageFrequency || preferences.campaignFrequency || "";
            const budgetPreference = preferences.budgetPreference || "";
            const monthlyBudgetAmount = preferences.monthlyBudgetAmount || "";
            const monthlyBudgetCurrency = preferences.monthlyBudgetCurrency || "EUR";
            const hobby = preferences.hobby || "";
            
            content.innerHTML = `
                <h1 style="margin-bottom: 24px; color: var(--text-primary); font-size: 26px; font-weight: 700;">Tercihlerim</h1>
                <div class="preferences-section">
                    <style>
                        .preferences-section {
                            background: var(--surface-primary, #fff); 
                            padding: 24px; 
                            border-radius: 14px; 
                            border: 1px solid var(--border-primary, var(--line));
                            margin-bottom: 120px;
                        }
                        .compact-preferences { 
                            display: flex; 
                            flex-direction: column;
                            gap: 24px; 
                            margin-bottom: 32px; 
                        }
                        @media (min-width: 768px) { 
                            .compact-preferences { 
                                display: grid; 
                                grid-template-columns: 1fr 1fr; 
                                gap: 32px;
                            } 
                        }
                        .compact-preferences .field { margin-bottom: 0; }
                        .compact-preferences .field > label { 
                            font-size: 14px; 
                            font-weight: 600; 
                            color: var(--text-primary); 
                            margin-bottom: 12px; 
                            display: block; 
                            line-height: 1.4;
                        }
                        .compact-preferences .pill-grid { 
                            display: flex; 
                            flex-wrap: wrap; 
                            gap: 10px; 
                        }
                        .compact-preferences .pill-grid.campaign-freq-grid {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
                            gap: 10px;
                        }
                        .compact-preferences .pill { 
                            padding: 10px 14px; 
                            font-size: 14px; 
                            min-height: 48px;
                            height: auto;
                            white-space: normal;
                            text-align: center;
                            line-height: 1.25;
                        }
                        .compact-preferences input:not([type="number"]),
                        .budget-field .input-wrap input,
                        .budget-field .input-wrap select {
                            background: var(--surface-secondary, #f8fafc);
                            border: 1px solid var(--border-primary, var(--line));
                            border-radius: 10px;
                            padding: 0 16px;
                            height: 48px;
                            font-size: 15px;
                            color: var(--text-primary);
                            transition: border-color 0.2s;
                            box-sizing: border-box;
                        }
                        .compact-preferences input:focus,
                        .budget-field .input-wrap input:focus,
                        .budget-field .input-wrap select:focus {
                            border-color: var(--blue);
                            outline: none;
                        }
                        .budget-field .input-wrap {
                            display: flex; 
                            gap: 12px;
                            padding: 0;
                            border: none;
                            background: transparent;
                        }
                        .budget-field .input-wrap select {
                            width: 120px;
                            flex-shrink: 0;
                            cursor: pointer;
                            appearance: auto;
                        }
                        .budget-field .input-wrap input {
                            flex: 1;
                        }
                        .compact-preferences-cats { grid-column: 1 / -1; }
                        .compact-preferences-cats .interest-grid { display: flex; flex-wrap: wrap; gap: 10px; grid-template-columns: none; }
                        .compact-preferences-cats .interest-card {
                            display: inline-flex; align-items: center; justify-content: center;
                            padding: 10px 16px; border-radius: 10px; border: 1px solid var(--border-primary, var(--line));
                            background: var(--surface-primary, #fff); color: var(--text-primary); font-size: 14px; font-weight: 500; height: auto; transition: all 0.2s; cursor: pointer;
                        }
                        .compact-preferences-cats .interest-card:hover { background: var(--surface-secondary, #f8fafc); border-color: var(--blue); }
                        .compact-preferences-cats .interest-card.selected { background: var(--soft, #eaf6fd); border-color: var(--blue); color: var(--blue); font-weight: 600; }
                        .save-btn-wrapper {
                            grid-column: 1 / -1;
                            display: flex;
                            justify-content: flex-end;
                            margin-top: 16px;
                        }
                        .save-btn-wrapper button {
                            width: 100%;
                            max-width: 250px;
                            height: 48px;
                            font-size: 15px;
                            font-weight: 600;
                            border-radius: 10px;
                        }
                    </style>
                    <form id="preferences-form">
                        <div class="compact-preferences">
                            ${pillSet("Yaş aralığın", ["18-24", "25-34", "35-44", "45+"], "", ageRange, "ageRange")}
                            ${pillSet("Cinsiyet", ["Kadın", "Erkek", "Belirtmek istemiyorum"], "", gender, "gender")}
                            
                            <div style="grid-column: 1 / -1;">
                                ${pillSet("Kampanyalardan ne sıklıkla yararlanıyorsun?", ["Her gün", "Haftada birkaç kez", "Ayda birkaç kez", "Nadiren", "Hiç kullanmıyorum"], "campaign-freq-grid", campaignUsageFrequency, "campaignUsageFrequency")}
                            </div>
                            
                            <div class="field budget-field" style="grid-column: 1 / -1; max-width: 600px;">
                                <label>Aylık dışarıda yeme, içme ve aktivitelere ne kadar bütçe ayırıyorsun? (opsiyonel)</label>
                                <div class="input-wrap">
                                    <input type="number" id="profileMonthlyBudgetAmount" placeholder="Örn: 1500" min="0" step="any" value="${monthlyBudgetAmount}" oninput="this.value = this.value.replace(/[^0-9.]/g, ''); if(this.value < 0) this.value = '';">
                                    <select id="profileMonthlyBudgetCurrency">
                                        <option value="EUR" ${monthlyBudgetCurrency === 'EUR' ? 'selected' : ''}>€</option>
                                        <option value="TRY" ${monthlyBudgetCurrency === 'TRY' ? 'selected' : ''}>₺</option>
                                        <option value="USD" ${monthlyBudgetCurrency === 'USD' ? 'selected' : ''}>$</option>
                                    </select>
                                </div>
                                <div id="profileBudgetError" style="display:none; color:red; font-size:12px; margin-top:6px;">Lütfen geçerli pozitif bir sayı girin.</div>
                            </div>
                            
                            <div class="field" style="grid-column: 1 / -1; max-width: 600px;">
                                <label>İlgi/hobi (opsiyonel)</label>
                                <div class="input-wrap">
                                    <input type="text" id="pref-hobby" placeholder="Örn: spor, kahve, sohbet, sinema" value="${hobby}" style="width: 100%;">
                                </div>
                            </div>
                            
                            <div class="field compact-preferences-cats">
                                <label>Tercih edilen kategoriler</label>
                                <div class="interest-grid" id="profile-interests">
                                    <div class="spinner"></div><p>Kategoriler yükleniyor...</p>
                                </div>
                            </div>

                            <div class="save-btn-wrapper">
                                <button type="submit" class="primary-button" id="savePreferencesBtn">Değişiklikleri Kaydet</button>
                            </div>
                        </div>
                    </form>
                </div>
            `;
            
            // Categories loading for preferences
            const prefCats = preferences.preferredCategories || [];
            fetch('/api/categories').then(res => {
                if (!res.ok) throw new Error("HTTP " + res.status);
                return res.json();
            }).then(cats => {
                const container = document.getElementById('profile-interests');
                if(!container) return;
                
                const selectedIds = new Set(prefCats.map(c => typeof c === 'object' && c !== null ? Number(c.id) : Number(c)));
                
                container.innerHTML = cats.map(c => `
                    <div class="interest-card ${selectedIds.has(Number(c.id)) ? 'selected' : ''}" data-id="${c.id}" data-name="${c.name}">
                        <span>${c.name}</span>
                    </div>
                `).join('');

                container.querySelectorAll('.interest-card').forEach(card => {
                    card.addEventListener('click', () => {
                        card.classList.toggle('selected');
                    });
                });
            }).catch(e => {
                console.error("Kategoriler yüklenemedi:", e);
                const container = document.getElementById('profile-interests');
                if(container) container.innerHTML = `<p style="color:red">Kategoriler yüklenemedi</p>`;
            });

            // Form Submit for preferences
            const form = document.getElementById('preferences-form');
            if (form) {
                form.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    const btn = document.getElementById('savePreferencesBtn');
                    const orig = btn.innerText;
                    btn.innerText = "Kaydediliyor...";
                    btn.disabled = true;

                    const budgetInput = document.getElementById('profileMonthlyBudgetAmount');
                    const budgetError = document.getElementById('profileBudgetError');
                    if (budgetInput && budgetInput.value) {
                        const val = parseFloat(budgetInput.value);
                        if (isNaN(val) || val < 0) {
                            if (budgetError) budgetError.style.display = 'block';
                            btn.innerText = orig;
                            btn.disabled = false;
                            return;
                        }
                    }
                    if (budgetError) budgetError.style.display = 'none';

                    const getPillValue = (key) => document.querySelector(`#preferences-form [data-pref-key="${key}"] .pill.active`)?.dataset.value;

                    const existingPrefs = window.profileCache.preferences || {};
                    const safePrefs = {
                        ...existingPrefs,
                        ageRange: getPillValue("ageRange") || existingPrefs.ageRange,
                        gender: getPillValue("gender") || existingPrefs.gender,
                        campaignUsageFrequency: getPillValue("campaignUsageFrequency") || existingPrefs.campaignUsageFrequency,
                        campaignFrequency: getPillValue("campaignUsageFrequency") || existingPrefs.campaignFrequency,
                        hobby: document.getElementById('pref-hobby')?.value,
                        preferredCategories: Array.from(document.querySelectorAll('#profile-interests .interest-card.selected')).map(c => ({
                            id: parseInt(c.dataset.id),
                            name: c.dataset.name
                        }))
                    };
                    
                    if (budgetInput && budgetInput.value) {
                        safePrefs.monthlyBudgetAmount = parseFloat(budgetInput.value);
                        safePrefs.monthlyBudgetCurrency = document.getElementById('profileMonthlyBudgetCurrency')?.value || 'EUR';
                    } else {
                        safePrefs.monthlyBudgetAmount = null;
                        safePrefs.monthlyBudgetCurrency = document.getElementById('profileMonthlyBudgetCurrency')?.value || 'EUR';
                    }

                    try {
                        const res = await fetch('/api/auth/me/preferences', {
                            method: 'PUT',
                            headers: getAuthHeaders({'Content-Type': 'application/json'}),
                            credentials: 'same-origin',
                            body: JSON.stringify(safePrefs)
                        });
                        if (res.ok) {
                            btn.innerText = "Kaydedildi!";
                            window.profileCache.preferences = safePrefs;
                            if (window.profileCache.profileData) {
                                window.profileCache.profileData.preferences = safePrefs;
                            }
                            showToast("Tercihleriniz güncellendi.");
                            setTimeout(() => { btn.innerText = orig; btn.disabled = false; }, 2000);
                        } else {
                            btn.innerText = "Hata oluştu";
                            showToast("Tercihler kaydedilemedi.");
                            setTimeout(() => { btn.innerText = orig; btn.disabled = false; }, 2000);
                        }
                    } catch(err) {
                        btn.innerText = "Bağlantı hatası";
                        showToast("Bağlantı hatası.");
                        setTimeout(() => { btn.innerText = orig; btn.disabled = false; }, 2000);
                    }
                });
            }
        }
        else if (active === 'following') {
            content.innerHTML = `<h1 style="margin-bottom: 24px; color: var(--text-primary); font-size: 26px; font-weight: 700;">Takip Ettiklerim</h1><div id="profile-following-list"></div>`;
            window.loadFollowedBusinesses();
        }
        else if (active === 'saved-campaigns') {
            content.innerHTML = `
                <h1 style="margin-bottom: 24px; color: var(--text-primary); font-size: 26px; font-weight: 700;">Kaydettiğim Kampanyalar</h1>
                <div id="profile-saved-campaigns"></div>
            `;
            if (typeof window.fetchAndRenderSavedCampaigns === 'function') {
                window.fetchAndRenderSavedCampaigns();
            }
        }
        else if (active === 'saved-businesses') {
            content.innerHTML = `
                <h1 style="margin-bottom: 24px; color: var(--text-primary); font-size: 26px; font-weight: 700;">Kaydettiğim İşletmeler</h1>
                <div class="favorite-list" style="display: block;">
                    ${window.profileCache.favListHtml}
                </div>
            `;
        }
        else if (active === 'saved-routes') {
            content.innerHTML = `
                <h1 style="margin-bottom: 24px; color: var(--text-primary); font-size: 26px; font-weight: 700;">Kaydettiğim Rotalar</h1>
                <div class="saved-routes-empty" style="background: var(--surface-primary); padding: 48px 32px; border-radius: 14px; border: 1px solid var(--border-primary); text-align: center; color: var(--text-secondary);">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 16px; opacity: 0.8; display: inline-block;"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    <p style="font-size: 15px; font-weight: 500; margin: 0;">Henüz kaydettiğin bir rota yok.</p>
                </div>
            `;
        }
    };

    window.setProfileSection = function(section) {
        if (['saved-campaigns', 'saved-businesses', 'saved-routes'].includes(section)) {
            window.isSavedExpanded = true;
        }
        if (section === 'saved-menu-toggle') {
            window.isSavedExpanded = !window.isSavedExpanded;
            renderProfileSidebar();
            return;
        }
        window.activeProfileSection = section;
        window.history.replaceState({ ...(window.history.state || {}), profileSection: section }, '', window.location.href);
        renderProfileSidebar();
        renderProfileContent();
    };

    renderProfileSidebar();
    renderProfileContent();
}

// --- FAVORITE CAMPAIGNS IN PROFILE ---

window.fetchAndRenderSavedCampaigns = async function() {
    const container = document.getElementById('profile-saved-campaigns');
    if(!container) return;
    
    container.innerHTML = `<div class="spinner"></div><p style="margin-top:8px;">Yükleniyor...</p>`;
    try {
        const res = await fetch('/api/auth/me/favorites/campaigns', { cache: 'no-store', credentials: 'same-origin', headers: getAuthHeaders() });
        if(!res.ok) throw new Error("API hatası");
        const data = await res.json();
        
        window.savedCampaigns = new Set(data.map(c => Number(c.id)));
        
        if (data.length === 0) {
            container.innerHTML = `<div class="empty-state" style="background: var(--surface-primary); padding: 36px 24px; border-radius: 12px; border: 1px solid var(--border-primary); text-align: center; color: var(--text-secondary); font-size: 14px;">Henüz kaydedilmiş kampanya yok.</div>`;
            return;
        }
        
        window.savedCampaignPage = window.savedCampaignPage || 0;
        const totalPages = Math.max(1, Math.ceil(data.length / 2));
        if (window.savedCampaignPage >= totalPages) {
            window.savedCampaignPage = Math.max(0, totalPages - 1);
        }

        const start = window.savedCampaignPage * 2;
        const visibleCampaigns = data.slice(start, start + 2);

        let html = `
        <div class="saved-campaigns-carousel">
            <button class="saved-carousel-prev" aria-label="Önceki" style="${window.savedCampaignPage > 0 ? '' : 'display:none;'}">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <div class="saved-campaigns-grid">
        `;
        
        html += visibleCampaigns.map(c => `<div class="saved-campaign-card">${renderCampaignCard(c)}</div>`).join("");
        html += `
            </div>
            <button class="saved-carousel-next" aria-label="Sonraki" style="${window.savedCampaignPage < totalPages - 1 ? '' : 'display:none;'}">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
        </div>`;
        
        container.innerHTML = html;
        
        document.querySelectorAll('#profile-saved-campaigns .saved-carousel-prev').forEach(btn => {
            btn.addEventListener('click', () => {
                window.savedCampaignPage--;
                window.fetchAndRenderSavedCampaigns();
            });
        });
        
        document.querySelectorAll('#profile-saved-campaigns .saved-carousel-next').forEach(btn => {
            btn.addEventListener('click', () => {
                window.savedCampaignPage++;
                window.fetchAndRenderSavedCampaigns();
            });
        });
        
        document.querySelectorAll('#profile-saved-campaigns .save-campaign-btn').forEach(btn => {
            btn.onclick = null;
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                window.removeSavedCampaignFromProfile(btn.dataset.saveCampaignId);
            });
        });
        
        document.querySelectorAll('#profile-saved-campaigns [data-campaign-id]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.campaignId;
                const campaign = data.find(c => c.id == id);
                if (campaign) showCampaignDetail(campaign);
            });
        });
        
    } catch(e) {
        console.error("[SAVED CAMPAIGNS ERROR]", e);
        container.innerHTML = `<div style="color:var(--red);">Bir hata oluştu</div>`;
    }
};

window.removeSavedCampaignFromProfile = async function(id) {
    try {
        const res = await fetch(`/api/auth/me/favorites/campaigns/${id}`, { method: 'DELETE', credentials: 'same-origin', headers: getAuthHeaders() });
        if(res.ok) {
            window.savedCampaigns.delete(Number(id));
            window.fetchAndRenderSavedCampaigns();
        }
    } catch(e) { console.error(e); }
};

window.ensureProfileData = async function() {
    if (!isAuthenticated()) return null;
    if (window.profileCache?.profileData) return window.profileCache.profileData;
    
    try {
        const response = await fetch('/api/auth/me', { cache: 'no-store', headers: getAuthHeaders(), credentials: 'same-origin' });
        if (!response.ok) return null;
        const data = await response.json();
        window.profileCache = window.profileCache || {};
        window.profileCache.profileData = data;
        
        if (data.preferences) {
            try {
                window.profileCache.preferences = typeof data.preferences === 'string' ? JSON.parse(data.preferences) : data.preferences;
            } catch(e) {}
        }
        return data;
    } catch (e) {
        return null;
    }
};

function renderChat() {
    // One functional conversation/map surface for both entry points.
    return renderHome("home");
}

function renderUnderConstruction(activeMenu) {
    app.innerHTML = `<div class="app-shell">
        ${topbar()}
        <main class="content-page" style="display: flex; justify-content: center; align-items: center; height: 100%;">
            <div style="text-align: center; padding: 2rem;">
                <h1 style="font-size: 2.5rem; color: var(--primary); margin-bottom: 1rem;">🚧 Yapım Aşamasında 🚧</h1>
                <p style="color: var(--text-muted); font-size: 1.2rem;">Bu sayfa şu an yapım aşamasında. Çok yakında sizlerle!</p>
            </div>
        </main>
        ${isAuthenticated() ? yeriMascot() : ""}
        ${bottomNav(activeMenu)}
    </div>`;
    bindGlobalActions();}

let currentCampaigns = [];

async function renderCampaigns() {
    app.innerHTML = `<div class="app-shell">
        ${topbar()}
        <main class="content-page campaigns-page">
            <div class="content-wrap">
                <div class="campaigns-header">
                    <div class="header-text">
                        <h1>Kampanyalar</h1>
                        <p>Yakınındaki işletmelerin güncel fırsatlarını keşfet.</p>
                    </div>
                    <div class="campaign-filters" data-campaign-filters id="dynamic-campaign-filters">
                        <button class="filter-chip active" data-category="Tümü">Tümü</button>
                    </div>
                </div>
                
                <div class="campaigns-content" id="campaigns-content">
                    <div class="campaigns-loading">
                        <div class="spinner"></div>
                        <p>Kampanyalar yükleniyor...</p>
                    </div>
                </div>
            </div>
        </main>
        ${bottomNav("campaigns")}
    </div>`;
    bindGlobalActions();
    
    document.querySelectorAll('.filter-chip').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            fetchAndRenderCampaigns(e.target.dataset.category);
        });
    });

    fetch('/api/categories').then(r => r.json()).then(cats => {
        const filters = document.getElementById('dynamic-campaign-filters');
        if(filters) {
            cats.forEach(c => {
                const btn = document.createElement('button');
                btn.className = 'filter-chip';
                btn.dataset.category = c.name;
                btn.innerText = c.name;
                btn.addEventListener('click', (e) => {
                    document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                    fetchAndRenderCampaigns(e.target.dataset.category);
                });
                filters.appendChild(btn);
            });
        }
    });

    await fetchAndRenderCampaigns("Tümü");
}

async function fetchAndRenderCampaigns(category) {
    const container = document.getElementById('campaigns-content');
    if (!container) return;

    container.innerHTML = `<div class="campaigns-loading"><div class="spinner"></div><p>Kampanyalar yükleniyor...</p></div>`;

    try {
        const query = category && category !== "Tümü" ? `?category=${encodeURIComponent(category)}` : "";
        const res = await fetch(`/api/campaigns${query}`);
        if (!res.ok) throw new Error("API hatası");
        const campaigns = await res.json();
        currentCampaigns = campaigns;
        
        if (campaigns.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">${icons.ticket}</div>
                    <h3>Aktif Kampanya Bulunamadı</h3>
                    <p>Henüz aktif bir kampanya bulunmuyor.</p>
                    <button class="outline-button" onclick="document.querySelector('.filter-chip[data-category=\\'Tümü\\']').click()">Tüm Kategorileri Gör</button>
                </div>
            `;
            return;
        }

        container.innerHTML = `<div class="campaigns-grid">${campaigns.map(c => renderCampaignCard(c)).join("")}</div>`;
        
        document.querySelectorAll('[data-campaign-id]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.campaignId;
                const campaign = currentCampaigns.find(c => c.id == id);
                if (campaign) showCampaignDetail(campaign);
            });
        });

    } catch (err) {
        container.innerHTML = `
            <div class="error-state">
                <p>Kampanyalar yüklenirken bir hata oluştu. Lütfen tekrar deneyin.</p>
                <button class="outline-button" onclick="fetchAndRenderCampaigns('${category}')">Tekrar Dene</button>
            </div>
        `;
    }
}

function getRemainingTimeText(endDate) {
    const now = new Date();
    const end = new Date(endDate);
    const diffTime = end.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return uiSource("Süresi doldu");
    if (diffDays === 0) return uiSource("Bugün bitiyor");
    if (diffDays === 1) return uiSource("Yarın bitiyor");
    if (diffDays <= 15) return uiSource(`${diffDays} gün kaldı`);
    return uiText('userTime.until', `${end.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' })}'e kadar`, {
        date: end.toLocaleDateString(userLocale(), { day: 'numeric', month: 'long' })
    });
}

document.addEventListener('yerbul:languagechange', () => {
    if (!window.yerbulI18n?.isUserPage()) return;
    document.querySelectorAll('[data-user-account-type]').forEach(node => {
        node.value = uiSource('Bireysel Hesap');
        if (window.yerbulI18n.language === 'ar') node.dir = 'rtl';
        else node.removeAttribute('dir');
    });
    document.querySelectorAll('[data-user-remaining]').forEach(node => {
        node.textContent = getRemainingTimeText(node.dataset.userRemaining);
    });
    document.querySelectorAll('[data-user-campaign-date]').forEach(node => {
        node.textContent = new Date(node.dataset.userCampaignDate).toLocaleDateString(userLocale(), {
            day: 'numeric', month: 'long', year: 'numeric'
        });
    });
    document.querySelectorAll('[data-user-visit-date]').forEach(node => {
        node.textContent = new Date(node.dataset.userVisitDate).toLocaleDateString(userLocale(), {
            day: 'numeric', month: 'short'
        });
    });
    document.querySelectorAll('[data-user-visit-count]').forEach(node => {
        node.textContent = uiText('userDynamic.visits', `${node.dataset.userVisitCount} ziyaret`, {
            count: node.dataset.userVisitCount
        });
    });
});

function renderCampaignCard(campaign) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const campaignEnd = new Date(campaign.endDate);
    campaignEnd.setHours(0, 0, 0, 0);
    const isExpired = campaignEnd < today;
    const opacityStyle = isExpired ? 'opacity: 0.6; filter: grayscale(1);' : '';
    const badgeBg = isExpired ? 'var(--muted)' : 'var(--orange)';
    
    return `
        <div class="campaign-card-ui" style="${opacityStyle}">
            <div class="campaign-image" style="background-image: url('${safeCampaignImageUrl(campaign.imageUrl)}')">
                <div class="campaign-badge" style="background: ${badgeBg}">${isExpired ? 'Süresi doldu' : campaignText(campaign.discountLabel)}</div>
            </div>
            <div class="campaign-info">
                <div class="campaign-meta">
                    <span class="business-name">${campaignText(campaign.businessName)}</span>
                    <span class="distance-badge">${icons.target} ${campaignText(campaign.distance)}</span>
                </div>
                <h3 class="campaign-title">${campaignText(campaign.title)}</h3>
                <p class="campaign-desc">${campaignText(campaign.description)}</p>
            </div>
            <div class="campaign-footer" style="padding: 16px 20px; border-top: 1px solid var(--line); display: flex; justify-content: space-between; align-items: center; background: #fafafa;">
                <span class="campaign-date" style="font-size: 13px; color: var(--muted); font-weight: 500;">
                    <svg style="width: 14px; height: 14px; vertical-align: text-bottom; margin-right: 4px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span data-user-remaining="${escapeUiHtml(campaign.endDate)}">${getRemainingTimeText(campaign.endDate)}</span>
                </span>
                <button class="primary-button" data-campaign-id="${Number(campaign.id)}" style="padding: 8px 16px; font-size: 14px;" ${isExpired ? 'disabled' : ''}>Detayları Gör</button>
            </div>
        </div>
    `;
}

window.focusBusinessOnMap = function(businessId) {
    console.log("[MAP TEST] focusBusinessOnMap called with:", businessId);
    
    const modal = document.querySelector(".yeri-modal-backdrop");
    const cmpModal = document.querySelector(".campaign-modal-backdrop");
    if (modal) modal.remove();
    if (cmpModal) cmpModal.remove();
    document.body.style.overflow = "";

    if (window.location.pathname !== "/" && !document.querySelector(".map-section")) {
        window.history.pushState({}, "", "/");
        route();
    }

    setTimeout(() => {
        const mapSection = document.querySelector(".map-section");
        const mapPins = document.getElementById("dynamic-map-pins");
        
        console.log("[MAP TEST] Containers:", {
            "focusBusinessOnMap called": true,
            "mapSection found": !!mapSection,
            "mapPins container found": !!mapPins
        });
        
        if (mapSection) {
            mapSection.scrollIntoView({ behavior: 'smooth' });
        }

        window.yerbulMapState.selectedBusinessId = String(businessId);
        window.yerbulMapState.focusedBusiness =
            window.yerbulMapState.currentBusinesses.find(b => String(b.id) === String(businessId)) ||
            window.yerbulMapState.routeBusinesses.find(b => String(b.id) === String(businessId)) ||
            window.yeriChatState?.businessesById?.[String(businessId)] || null;
        
        // Step 1: Render markers so DOM elements exist properly (removes old auras, injects fresh selected states based on state)
        window.renderMapMarkers(); 
        
        // Give the DOM a tick to apply the new elements, then highlight
        setTimeout(() => {
            if (window.highlightBusinessPin) {
                window.highlightBusinessPin(String(businessId));
            }
        }, 50);

    }, 100);
}

window.handleMarkerClick = function(id) {
    event.stopPropagation();
    window.focusBusinessOnMap(id);
    
    // Highlight chat card
    const cards = document.querySelectorAll(".result-card");
    cards.forEach(c => c.classList.remove("highlight-pulse"));
    
    const targetCard = Array.from(cards).find(c => c.dataset.id === String(id));
    if (targetCard) {
        targetCard.classList.add("highlight-pulse");
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

window.handleChatCardHover = function(id, isHover) {
    const pins = document.querySelectorAll(".pin");
    const pin = Array.from(pins).find(p => p.dataset.businessId === String(id));
    if (pin) {
        if (isHover) pin.classList.add("hovered");
        else pin.classList.remove("hovered");
    }
}

// Map cleanup on empty click
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.map-section') && !e.target.closest('.pin') && !e.target.closest('.map-mascot')) {
            if (window.yerbulMapState.selectedBusinessId) {
                window.yerbulMapState.selectedBusinessId = null;
                const pins = document.querySelectorAll(".pin");
                pins.forEach(p => p.classList.remove("selected", "hovered"));
                const mapMascot = document.querySelector(".map-mascot");
                if (mapMascot) {
                    const bounds = mapMascotBounds(mapMascot);
                    if (bounds) positionMapMascot(mapMascot, bounds.left, bounds.top);
                }
            }
        }
    });
});

window.focusAllPlanOnMap = function() {
    if (window.location.pathname !== "/") {
        window.history.pushState({}, "", "/");
        route();
    }
    setTimeout(() => {
        const mapSection = document.querySelector(".map-section");
        if (mapSection) mapSection.scrollIntoView({ behavior: 'smooth' });
        window.yerbulMapState.selectedBusinessId = null;
        window.yerbulMapState.routeBusinesses = window.yeriChatState?.currentPlan || [];
        window.yerbulMapState.isPlan = true;
        window.renderMapMarkers();
    }, 100);
}

window.drawRoutePolyline = function(stops) {
    // Replaced by SVG generated inside renderMapMarkers
}

function savePlan() {
    if (!window.yeriChatState || !window.yeriChatState.currentPlan) return;
    localStorage.setItem("saved_yeri_plan", JSON.stringify(window.yeriChatState.currentPlan));
    alert(uiSource("Rotanız kaydedildi! (Demo V1)"));
}

function renderPlanCard(stops) {
    let html = `<div style="display:flex; flex-direction:column; gap:8px; margin-top:12px; width:100%; max-width:320px;">`;
    html += `<div style="font-weight: 700; color: var(--primary-dark); display: flex; align-items: center; gap: 8px; font-size: 14px; margin-bottom: 4px;">🗺️ Yeri Rotam</div>`;
    
    stops.forEach((b, idx) => {
        const distance = yeriDistanceLabel(b.distanceKm ?? b.distance);
        const isFav = isFavorite(b.id);
        const favColor = isFav ? "var(--primary-dark)" : "var(--muted)";
        const favIcon = isFav ? icons.heartFilled : icons.heart;

        const bNameSafe = (b.name||'').replace(/'/g, "\\'");
        
        html += `
        <div class="recommendation-card plan-card" data-card-id="${b.id}" style="background:#fff; border-radius:8px; border:1px solid var(--line); display:flex; flex-direction:column; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.02); font-size:12px; transition: transform 0.2s ease;">
            <div style="display:flex; align-items:stretch;">
                <div style="width:28px; background:var(--primary); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:13px;">${idx + 1}</div>
                <div style="padding:8px; flex:1; display:flex; flex-direction:column; justify-content:center;">
                    <div data-user-content style="font-weight:700; color:var(--text); font-size: 13px; display:-webkit-box; -webkit-line-clamp:1; -webkit-box-orient:vertical; overflow:hidden;">${escapeUiHtml(b.name)}</div>
                    <div style="color:var(--muted); font-size:11px; display:flex; gap:6px; margin-top:2px;">
                        <span>${escapeUiHtml(b.category || "")}</span>
                        ${distance ? '<span>•</span>' : ''}
                        ${distance}
                    </div>
                    ${renderYeriScore(b.scoreBreakdown)}
                </div>
            </div>
            <div style="padding: 6px 8px; background: #f8fafc; border-top: 1px solid var(--line); display: flex; gap: 6px;">
                <button class="outline-button" onclick="focusBusinessOnMap(${b.id})" style="flex: 1; height:28px; padding: 0 4px; font-size: 11px; display: flex; justify-content: center; align-items: center;">
                    Haritada Göster
                </button>
                <button class="outline-button" onclick="window.openBusinessDetail(${b.id});" style="flex: 1; height:28px; padding: 0 4px; font-size: 11px;">
                    Detay
                </button>
                <button class="outline-button ${isFav ? 'saved' : ''}" onclick="window.toggleFavoriteAction(this, ${b.id}, '${bNameSafe}', ${b.categoryId || 0}, ${b.rating ?? 'null'}, '', '${b.openTime || ''}', '')" style="height:28px; padding: 0 8px; color: ${favColor};">
                    ${favIcon}
                </button>
            </div>
        </div>`;
    });
    
    html += `
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:4px;">
            <button class="primary-button" onclick="focusAllPlanOnMap()" style="flex:1; height:32px; padding: 0 8px; display: flex; justify-content: center; align-items: center; gap: 6px; font-size: 12px;">
                🗺️ Haritada Rotayı Göster
            </button>
            <button class="outline-button" onclick="savePlan()" style="flex:1; height:32px; padding: 0 8px; display: flex; justify-content: center; align-items: center; gap: 6px; font-size: 12px;">
                💾 Rotayı Kaydet
            </button>
        </div>
    </div>`;
    
    drawRoutePolyline(stops);
    
    return html;
}

function renderCompareCard(results, winnerId) {
    if (!results || results.length === 0) return "";
    
    let html = `<div style="display:flex; flex-direction:column; gap:8px; margin-top:12px; width:100%; max-width:320px;">
        <div style="font-weight: 700; color: var(--primary-dark); font-size: 14px; margin-bottom: 4px;">📊 Karşılaştırma Sonucu</div>
        <div class="compare-container" style="display:flex; flex-direction:column; gap:6px;">
    `;
    
    results.forEach((b, idx) => {
        const isWinner = b.id === winnerId;
        const borderStyle = isWinner ? `border:2px solid #fbbf24; background: linear-gradient(145deg, #fffbeb, #fef3c7); box-shadow:0 4px 12px rgba(251,191,36,0.15);` : `border:1px solid var(--line); background:#fff;`;
        
        html += `
        <div class="compare-card" style="border-radius:8px; ${borderStyle} display:flex; flex-direction:column; overflow:hidden; font-size:12px; transition: transform 0.2s ease;">
            ${isWinner ? `<div style="background: #f59e0b; color: white; padding: 4px 8px; font-weight: 700; font-size: 11px; display: flex; align-items: center; gap: 4px;">✨ Yeri'nin Seçimi</div>` : ''}
            <div style="padding:8px; display:flex; flex-direction:column; justify-content:center;">
                <div data-user-content style="font-weight:700; color:var(--text); font-size: 13px; display:-webkit-box; -webkit-line-clamp:1; -webkit-box-orient:vertical; overflow:hidden;">${idx + 1}. ${b.name}</div>
                <div style="color:var(--muted); font-size:11px; display:flex; flex-wrap:wrap; gap:4px; margin-top:4px;">
                    ${yeriDistanceLabel(b.distance)}
                    ${b.distance != null ? '<span>•</span>' : ''}
                    <span style="color:var(--primary-dark); font-weight:600;">%${b.decisionScore || 85} Uyum</span>
                    ${b.hasCampaign ? `<span>•</span><span style="color:#b45309; font-weight:600;">Kampanya</span>` : ''}
                </div>
            </div>
            <div style="padding: 6px 8px; background: rgba(255,255,255,0.5); border-top: 1px solid ${isWinner ? '#fde68a' : 'var(--line)'}; display: flex; gap: 6px;">
                <button class="${isWinner ? 'primary-button' : 'outline-button'}" onclick="focusBusinessOnMap(${b.id})" style="flex: 1; height:28px; padding: 0 4px; font-size: 11px; display: flex; justify-content: center; align-items: center; ${isWinner ? 'background: #f59e0b; border-color: #f59e0b; color: white;' : ''}">
                    Haritada Göster
                </button>
                <button class="outline-button" onclick="window.openBusinessDetail(${b.id});" style="flex: 1; height:28px; padding: 0 4px; font-size: 11px; ${isWinner ? 'border-color: #fcd34d; color: #b45309;' : ''}">
                    Detay
                </button>
            </div>
        </div>
        `;
    });
    
    html += `</div></div>`;
    
    setTimeout(() => {
        if (winnerId) {
            focusBusinessOnMap(winnerId);
        }
    }, 500);
    
    return html;
}

function showCampaignDetail(campaign) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const campaignEnd = new Date(campaign.endDate);
    campaignEnd.setHours(0, 0, 0, 0);
    const isExpired = campaignEnd < today;
    
    const startDate = new Date(campaign.startDate).toLocaleDateString(userLocale(), { day: 'numeric', month: 'long', year: 'numeric' });
    const endDate = new Date(campaign.endDate).toLocaleDateString(userLocale(), { day: 'numeric', month: 'long', year: 'numeric' });
    
    const modal = document.createElement("div");
    modal.className = "campaign-modal-backdrop";
    // Reuse backdrop styles but without conflicts
    modal.style.cssText = "position: fixed; inset: 0; display: grid; place-items: center; padding: 20px; background: rgba(0, 0, 0, 0.68); backdrop-filter: blur(5px); z-index: 9999;";
    
    modal.innerHTML = `<section class="campaign-detail-dialog" role="dialog" style="
        width: min(720px, calc(100vw - 40px)); 
        height: auto; 
        max-height: calc(100vh - 40px); 
        display: flex; 
        flex-direction: column; 
        overflow: hidden; 
        background: #fff; 
        border-radius: 16px; 
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        margin: auto;
    ">
        <header style="position: sticky; top: 0; background: #fff; z-index: 10; padding: 20px 24px; border-bottom: 1px solid var(--line); display: flex; justify-content: space-between; align-items: flex-start; flex-shrink: 0;">
            <div>
                <h2 data-user-content style="margin: 0 0 4px 0; font-size: 20px; color: var(--text);">${campaignText(campaign.businessName)}</h2>
                <p style="margin: 0; font-size: 13px; color: var(--muted);">${campaignText(campaign.category)}</p>
            </div>
            <button class="modal-close" aria-label="Kapat" style="background: none; border: none; font-size: 28px; cursor: pointer; color: var(--muted); padding: 0; line-height: 1; margin-top: -4px;">&times;</button>
        </header>
        
        <div style="padding: 24px; overflow-y: auto; flex: 1; display: block;">
            ${isExpired ? `<div style="background: var(--red); color: white; padding: 8px 12px; border-radius: 6px; font-weight: 600; font-size: 13px; margin-bottom: 16px; text-align: center;">SÜRESİ DOLDU</div>` : ''}
            
            <div style="display: flex; gap: 8px; margin-bottom: 16px;">
                <span class="badge" style="background: ${isExpired ? '#e2e8f0' : 'var(--soft)'}; color: ${isExpired ? '#64748b' : 'var(--blue)'}; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">${campaignText(campaign.discountLabel)}</span>
                <span class="badge" style="background: #f1f5f9; color: #475569; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">${icons.target} ${campaignText(campaign.distance)}</span>
            </div>
            
            <h3 data-user-content style="font-size: 22px; margin: 0 0 8px 0; color: var(--text); font-weight: 700; line-height: 1.3;">${campaignText(campaign.title)}</h3>
            <p data-user-content style="color: var(--text-light); line-height: 1.5; margin: 0 0 24px 0; font-size: 15px;">${campaignText(campaign.description)}</p>
            
            ${campaign.conditions ? `
            <div style="margin-bottom: 20px;">
                <h4 style="font-size: 12px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0;">Kampanya Koşulları</h4>
                <p data-user-content style="font-size: 14px; color: var(--text); margin: 0; line-height: 1.5; border-left: 3px solid var(--primary); padding-left: 12px;">${campaignText(campaign.conditions)}</p>
            </div>` : ''}

            <div style="margin-bottom: 20px;">
                <h4 style="font-size: 12px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0;">Geçerlilik</h4>
                <p style="font-size: 14px; color: var(--text); margin: 0;">
                    <span data-user-campaign-date="${escapeUiHtml(campaign.startDate)}">${startDate}</span> - <span data-user-campaign-date="${escapeUiHtml(campaign.endDate)}">${endDate}</span>
                    <span style="color: ${isExpired ? 'var(--red)' : 'var(--orange)'}; font-weight: 600; margin-left: 8px;">(<span data-user-remaining="${escapeUiHtml(campaign.endDate)}">${getRemainingTimeText(campaign.endDate)}</span>)</span>
                </p>
            </div>

            ${campaign.address ? `
            <div style="margin-bottom: 8px;">
                <h4 style="font-size: 12px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 6px 0;">İşletme Adresi</h4>
                <p data-user-content style="font-size: 14px; color: var(--text); margin: 0; line-height: 1.4;">${campaignText(campaign.address)}</p>
            </div>` : ''}
        </div>
        
        <footer style="padding: 16px 24px; border-top: 1px solid var(--line); background: #fafafa; display: flex; gap: 12px; flex-shrink: 0; flex-wrap: wrap;">
            <button class="primary-button" onclick="focusBusinessOnMap(${Number(campaign.businessId)})" style="flex: 1; display: flex; justify-content: center; align-items: center; gap: 8px; min-width: 140px; margin: 0;">
                ${icons.target} Haritada Göster
            </button>
            <button class="outline-button" onclick="window.openBusinessDetail(${Number(campaign.businessId)}); document.querySelector('.campaign-modal-backdrop').remove(); document.body.style.overflow = '';" style="flex: 1; min-width: 140px; margin: 0;">
                İşletmeye Git
            </button>
        </footer>
    </section>`;

    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";

    const closeBtn = modal.querySelector(".modal-close");
    const close = () => {
        modal.remove();
        document.body.style.overflow = "";
        document.removeEventListener("keydown", escHandler);
    };

    closeBtn.addEventListener("click", close);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) close();
    });

    const escHandler = (e) => {
        if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", escHandler);
}

function route() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes("menu")) return renderMenu();
    if (path.includes("business-profile")) return renderBusinessProfile();
    if (path.includes("auth")) return renderAuth("start");
    if (path.includes("profile")) return renderProfile();
    if (path.includes("business-detail")) return renderBusiness();
    if (path.includes("ai-chat")) return renderChat();
    if (path.includes("business-campaigns")) return renderBusinessCampaigns();
    if (path.includes("campaigns")) return renderCampaigns();
    if (path.includes("categories")) {
        const params = new URLSearchParams(window.location.search);
        if (params.get("id")) return renderCategoryResults(params.get("id"));
        if (params.get("q")) return renderCategoryResults(null, params.get("q"));
        return renderCategories();
    }
    return renderHome("home");
}

document.addEventListener("DOMContentLoaded", () => {
    Promise.resolve(window.yerbulI18n?.ready).then(route, route);
});
window.addEventListener('popstate', (event) => {
    const path = window.location.pathname.toLowerCase();
    if (path === '/profile' || path === '/profile.html') {
        window.activeProfileSection = event.state?.profileSection || 'profile-info';
    }
    route();
});





// ==========================================
// CATEGORIES MODULE
// ==========================================

function getCategoryIcon(name) {
    if (!name) return icons.target;
    if (name.includes('Market')) return icons.ticket;
    if (name.includes('Restoran')) return icons.pin;
    if (name.includes('Kafe')) return icons.grid;
    if (name.includes('Eczane')) return icons.building;
    if (name.includes('Hastane')) return icons.building;
    if (name.includes('ATM')) return icons.pin;
    if (name.includes('Alışveriş')) return icons.ticket;
    return icons.target;
}

function getCategorySubtitle(name) {
    if (!name) return 'Mekanları keşfet';
    const subs = {
        'Market': 'Yakındaki marketleri keşfet',
        'Kafe': 'Kahve ve çalışma mekanları',
        'Eczane': 'Yakındaki eczaneleri bul',
        'Hastane': 'Sağlık kuruluşlarını keşfet',
        'Restoran': 'Lezzetli yemekler',
        'ATM': 'Nakit ihtiyaçların için',
        'Akaryakıt': 'Yakındaki istasyonlar',
        'Alışveriş': 'Giyim, teknoloji ve daha fazlası',
        'Spor': 'Spor salonları ve tesisler',
        'Eğlence': 'Eğlence mekanları'
    };
    return subs[name] || 'Mekanları keşfet';
}

async function renderCategories() {
    app.innerHTML = `<div class="app-shell"><main class="content-page"><div class="campaigns-loading"><div class="spinner"></div><p>Kategoriler yükleniyor...</p></div></main>${bottomNav("categories")}</div>`;

    try {
        const res = await fetch('/api/categories');
        if (!res.ok) throw new Error("Kategoriler yüklenemedi");
        const categories = await res.json();

        app.innerHTML = `<div class="app-shell">
            ${topbar()}
            <main class="content-page" style="padding-bottom: 100px;">
                <div class="content-wrap" style="max-width: 1000px; margin: 0 auto; padding: 24px 16px;">
                    
                    <!-- HERO SECTION -->
                    <section style="margin-bottom: 32px; text-align: center;">
                        <h1 style="font-size: 28px; color: var(--primary-dark); margin: 0 0 12px 0;">Ne arıyorsun?</h1>
                        <p style="color: var(--muted); font-size: 16px; margin: 0 0 24px 0;">İhtiyacın olan yeri keşfet, Yeri sana en uygun seçenekleri bulsun.</p>
                        
                        <div style="position: relative; max-width: 500px; margin: 0 auto;">
                            <form id="cat-search-form" onsubmit="event.preventDefault(); const q=document.getElementById('cat-search').value.trim(); if(q) { window.history.pushState({}, '', '/categories?q=' + encodeURIComponent(q)); route(); }">
                                <input type="text" id="cat-search" placeholder="Kategori veya mekan ara..." 
                                    style="width: 100%; height: 54px; padding: 0 48px 0 20px; border-radius: 12px; border: 1px solid var(--line); font-size: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
                                <button type="submit"
                                    style="position: absolute; right: 8px; top: 8px; width: 38px; height: 38px; border-radius: 8px; border: none; background: var(--primary); color: white; display: grid; place-items: center; cursor: pointer;">
                                    ${icons.search}
                                </button>
                            </form>
                        </div>
                    </section>

                    <!-- CATEGORY GRID -->
                    <section style="margin-bottom: 40px;">
                        <h2 style="font-size: 18px; color: var(--text); margin: 0 0 20px 0;">Kategoriler</h2>
                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 16px;">
                            ${categories.map(c => `
                                <a href="javascript:void(0)" onclick="window.history.pushState({}, '', '/categories?id=${c.id}'); route();" 
                                   style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #fff; padding: 24px 16px; border-radius: 16px; border: 1px solid var(--line); box-shadow: 0 4px 12px rgba(0,0,0,0.02); transition: all 0.2s; cursor: pointer;"
                                   onmouseover="this.style.borderColor='var(--primary)'; this.style.transform='translateY(-2px)';"
                                   onmouseout="this.style.borderColor='var(--line)'; this.style.transform='none';">
                                    <div style="width: 48px; height: 48px; border-radius: 12px; background: var(--soft); color: var(--blue); display: grid; place-items: center; margin-bottom: 12px;">
                                        ${getCategoryIcon(c.name)}
                                    </div>
                                    <strong style="color: var(--text); font-size: 15px; text-align: center; margin-bottom: 4px;">${c.name}</strong>
                                    <span style="color: var(--muted); font-size: 11px; text-align: center; line-height: 1.3;">${getCategorySubtitle(c.name)}</span>
                                </a>
                            `).join('')}
                        </div>
                    </section>

                    <!-- NEED BASED DISCOVERY -->
                    <section>
                        <h2 style="font-size: 18px; color: var(--text); margin: 0 0 20px 0;">Şu an neye ihtiyacın var?</h2>
                        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
                            ${[
                                { label: '☕ Kahve içmek istiyorum', cat: 'Kafe' },
                                { label: '🍽️ Acıktım', cat: 'Restoran' },
                                { label: '🛍️ Alışveriş yapacağım', cat: 'Alışveriş' },
                                ].map(n => {
                                const matchedCat = categories.find(c => c.name === n.cat);
                                const onclick = matchedCat ? `window.history.pushState({}, '', '/categories?id=${matchedCat.id}'); route();` : `alert(uiSource('Yakında!'))`;
                                return `
                                <button onclick="${onclick}" style="background: #fff; border: 1px solid var(--line); padding: 12px 20px; border-radius: 20px; font-size: 14px; font-weight: 500; color: var(--text); cursor: pointer; transition: all 0.2s; box-shadow: 0 2px 8px rgba(0,0,0,0.02);"
                                        onmouseover="this.style.borderColor='var(--primary)'; this.style.color='var(--blue)';"
                                        onmouseout="this.style.borderColor='var(--line)'; this.style.color='var(--text)';">
                                    ${n.label}
                                </button>`;
                            }).join('')}
                        </div>
                    </section>
                </div>
            </main>
            ${isAuthenticated() ? yeriMascot() : ""}
            ${bottomNav("categories")}
        </div>`;
        bindGlobalActions();
        
    } catch (e) {
        app.innerHTML = `<div class="app-shell"><main class="content-page" style="padding: 2rem;"><h1>Hata Oluştu</h1><p>${e.message}</p><button class="outline-button" onclick="window.history.back()">Geri Dön</button></main>${bottomNav("categories")}</div>`;
    }
}

async function renderCategoryResults(categoryId, query = "") {
    app.innerHTML = `<div class="app-shell"><main class="content-page"><div class="campaigns-loading"><div class="spinner"></div><p>Sonuçlar yükleniyor...</p></div></main>${bottomNav("categories")}</div>`;
    
    try {
        const searchPage = Math.max(1, parseInt(new URLSearchParams(window.location.search).get('page')) || 1);
        let usingFollowSearch = false;
        let searchTotal = 0;
        let businesses = [];
        if (!categoryId && query) {
            try {
                const searchRes = await fetch(`/api/businesses/search?q=${encodeURIComponent(query)}&page=${searchPage}&pageSize=12`, { cache: 'no-store' });
                if (searchRes.ok) {
                    const data = await searchRes.json();
                    businesses = data.items || [];
                    searchTotal = data.total || 0;
                    usingFollowSearch = true;
                } else if (searchRes.status < 500) {
                    usingFollowSearch = true;
                }
            } catch (_) {}
        }
        if (!usingFollowSearch) {
            const url = categoryId ? `/api/businesses?categoryId=${categoryId}` : `/api/businesses?search=${encodeURIComponent(query)}`;
            const res = await fetch(url);
            businesses = res.ok ? await res.json() : [];
        }
        
        let headerTitle = 'Sonuçlar';
        let headerSubtitle = 'Yakınınızdaki işletmeler';
        
        if (categoryId) {
            const catRes = await fetch('/api/categories');
            if (catRes.ok) {
                const cats = await catRes.json();
                const matched = cats.find(c => c.id == categoryId);
                if (matched) {
                    headerTitle = matched.name;
                    headerSubtitle = getCategorySubtitle(matched.name);
                }
            }
        } else if (query) {
            headerTitle = `"${escapeFollowHtml(query)}" Sonuçları`;
            headerSubtitle = 'Sonuçlar';
        }
        
        if (businesses.length === 0) {
            app.innerHTML = `<div class="app-shell">
                ${topbar()}
                <main class="content-page" style="padding-bottom: 100px;">
                    <div class="content-wrap" style="max-width: 800px; margin: 0 auto; padding: 24px 16px;">
                        <button onclick="window.history.pushState({}, '', '/categories'); route();" style="background:none; border:none; color:var(--muted); font-size:14px; margin-bottom:16px; cursor:pointer; display:flex; align-items:center; gap:4px;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="width:16px; height:16px; transform:rotate(180deg)"><path d="m6 9 6 6 6-6"/></svg> Geri
                        </button>
                        <div class="empty-state" style="text-align:center; padding: 60px 20px; background: #fff; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
                            <div class="empty-icon" style="font-size: 48px; color: var(--line); margin-bottom: 16px;">${icons.target}</div>
                            <h3 style="color: var(--primary-dark); font-size: 20px; margin-bottom: 8px;">Aramanıza uygun sonuç bulunamadı.</h3>
                            <p style="color: var(--muted); margin-bottom: 24px;">Bu arama için henüz yakınında bir işletme bulamadık.</p>
                            <button class="primary-button" onclick="window.history.pushState({}, '', '/'); route();">Haritada Keşfet</button>
                        </div>
                    </div>
                </main>
                ${isAuthenticated() ? yeriMascot() : ""}
                ${bottomNav("categories")}
            </div>`;
            bindGlobalActions();
            return;
        }

        // Active Campaigns for badges
        let allCampaigns = [];
        if (!usingFollowSearch) {
            try {
                const campRes = await fetch('/api/campaigns');
                if (campRes.ok) allCampaigns = await campRes.json();
            } catch (e) {}
        }

        const today = new Date();
        today.setHours(0,0,0,0);
        
        app.innerHTML = `<div class="app-shell">
            ${topbar()}
            <main class="content-page" style="padding-bottom: 100px;">
                <div class="content-wrap" style="max-width: 800px; margin: 0 auto; padding: 24px 16px;">
                    <button onclick="window.history.pushState({}, '', '/categories'); route();" style="background:none; border:none; color:var(--muted); font-size:14px; margin-bottom:16px; cursor:pointer; display:flex; align-items:center; gap:4px;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="width:16px; height:16px; transform:rotate(180deg)"><path d="m6 9 6 6 6-6"/></svg> Geri
                    </button>
                    
                    <h1 style="font-size: 24px; color: var(--text); margin: 0 0 4px 0;">${headerTitle}</h1>
                    <p style="color: var(--muted); font-size: 14px; margin: 0 0 24px 0;">${headerSubtitle}</p>
                    
                    <div style="display: flex; flex-direction: column; gap: 16px;">
                        ${businesses.map(b => {
                            const bCampaigns = allCampaigns.filter(c => {
                                const end = new Date(c.endDate); end.setHours(0,0,0,0);
                                return c.businessId === b.id && end >= today;
                            });
                            return usingFollowSearch ? renderBusinessSearchCard(b) : renderBusinessResultCard(b, bCampaigns.length > 0);
                        }).join('')}
                    </div>
                    ${usingFollowSearch && searchTotal > 12 ? `<div class="follow-search-pages">
                        ${searchPage > 1 ? `<button class="outline-button" onclick="window.changeBusinessSearchPage(${searchPage - 1})">Önceki</button>` : ''}
                        <span>Sayfa ${searchPage} / ${Math.ceil(searchTotal / 12)}</span>
                        ${searchPage * 12 < searchTotal ? `<button class="outline-button" onclick="window.changeBusinessSearchPage(${searchPage + 1})">Sonraki</button>` : ''}
                    </div>` : ''}
                </div>
            </main>
            ${isAuthenticated() ? yeriMascot() : ""}
            ${bottomNav("categories")}
        </div>`;
        bindGlobalActions();
        
    } catch(e) {
        app.innerHTML = `<div class="app-shell"><main class="content-page" style="padding: 2rem;"><h1>Hata Oluştu</h1><p>${e.message}</p><button class="outline-button" onclick="window.history.back()">Geri Dön</button></main>${bottomNav("categories")}</div>`;
    }
}

function escapeFollowHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

window.changeBusinessSearchPage = function(page) {
    const params = new URLSearchParams(window.location.search);
    params.set('page', page);
    window.history.pushState({}, '', `/categories?${params.toString()}`);
    route();
};

function renderBusinessSearchCard(business) {
    const id = Number(business.id);
    return `<a class="follow-business-card" href="/business-detail?id=${id}" onclick="event.preventDefault(); window.openBusinessDetail(${id});">
        <span class="follow-business-logo">${business.logoPath ? `<img src="${escapeFollowHtml(business.logoPath)}" alt="" loading="lazy">` : icons.building}</span>
        <span class="follow-business-copy"><strong>${escapeFollowHtml(business.name)}</strong><small>${escapeFollowHtml(business.categoryName || 'İşletme')}</small><small data-follow-count="${id}">${Number(business.followerCount) || 0} takipçi</small></span>
        <span aria-hidden="true">${icons.chevron}</span>
    </a>`;
}

const followRequestsInFlight = new Set();

window.toggleBusinessFollow = async function(button, businessId) {
    if (followRequestsInFlight.has(businessId)) return;
    if (button.dataset.authenticated !== 'true') {
        window.history.pushState({}, '', '/auth');
        route();
        return;
    }
    const wasFollowing = button.dataset.following === 'true';
    followRequestsInFlight.add(businessId);
    button.disabled = true;
    try {
        const response = await apiCall(`/api/businesses/${businessId}/follow`, {
            method: wasFollowing ? 'DELETE' : 'POST'
        }, false);
        if (response.status === 401) {
            window.history.pushState({}, '', '/auth');
            route();
            return;
        }
        if (!response.ok) throw new Error('Takip işlemi tamamlanamadı.');
        const result = await response.json();
        document.querySelectorAll(`[data-follow-count="${businessId}"]`).forEach(el => {
            el.textContent = `${Number(result.followerCount) || 0} takipçi`;
        });
        document.querySelectorAll(`[data-follow-business="${businessId}"]`).forEach(el => {
            el.dataset.following = result.isFollowing ? 'true' : 'false';
            el.textContent = result.isFollowing ? 'Takip Ediliyor' : 'Takip Et';
        });
        if (document.getElementById('profile-following-list')) window.loadFollowedBusinesses();
    } catch (error) {
        showToast(error.message || 'Takip işlemi tamamlanamadı.');
    } finally {
        followRequestsInFlight.delete(businessId);
        button.disabled = false;
    }
};

window.loadFollowedBusinesses = async function() {
    const container = document.getElementById('profile-following-list');
    if (!container) return;
    container.innerHTML = '<div class="spinner"></div>';
    try {
        const response = await fetch('/api/businesses/following/me', {
            cache: 'no-store', credentials: 'same-origin', headers: getAuthHeaders()
        });
        if (!response.ok) throw new Error('Takip edilen işletmeler yüklenemedi.');
        const businesses = await response.json();
        container.innerHTML = businesses.length ? businesses.map(b => {
            const id = Number(b.id);
            return `<div class="followed-business-card">
                <a class="followed-business-main" href="/business-detail?id=${id}" onclick="event.preventDefault(); window.openBusinessDetail(${id});">
                    <span class="follow-business-logo">${b.logoPath ? `<img src="${escapeFollowHtml(b.logoPath)}" alt="" loading="lazy">` : icons.building}</span>
                    <span class="follow-business-copy"><strong>${escapeFollowHtml(b.name)}</strong><small>${escapeFollowHtml(b.categoryName || 'İşletme')}</small><small data-follow-count="${id}">${Number(b.followerCount) || 0} takipçi</small></span>
                </a>
                <button class="outline-button follow-toggle" data-follow-business="${id}" data-authenticated="true" data-following="true" onclick="window.toggleBusinessFollow(this, ${id})">Takipten Çık</button>
            </div>`;
        }).join('') : '<div class="follow-empty">Henüz takip ettiğiniz bir işletme yok.</div>';
    } catch (error) {
        container.innerHTML = `<div class="follow-empty">${escapeFollowHtml(error.message)}</div>`;
    }
};

function renderBusinessResultCard(business, hasCampaign) {
    const categoryMap = {1: 'Restoran', 2: 'Kafe', 7: 'Market', 8: 'Eczane', 10: 'Hastane', 11: 'ATM', 12: 'Akaryakıt', 13: 'Alışveriş', 14: 'Spor', 15: 'Eğlence'};
    const catName = categoryMap[business.categoryId] || 'İşletme';
    
    let imageUrl = business.coverImagePath;
    if (!imageUrl) {
        if (catName === 'Market') imageUrl = 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=400&q=80';
        else if (catName === 'Restoran') imageUrl = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80';
        else if (catName === 'Kafe') imageUrl = 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=80';
        else if (catName === 'Eczane') imageUrl = 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=400&q=80';
        else imageUrl = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80';
    }

    return `
    <div style="background: #fff; border-radius: 16px; border: 1px solid var(--line); box-shadow: 0 4px 12px rgba(0,0,0,0.02); overflow: hidden; display: flex; flex-direction: column;">
        <div style="display: flex; flex-direction: row; align-items: stretch;">
            <div style="width: 120px; flex-shrink: 0; background-image: url('${imageUrl}'); background-size: cover; background-position: center;"></div>
            <div style="padding: 16px; flex: 1; display: flex; flex-direction: column; justify-content: center;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
                    <div>
                        <span style="font-size: 11px; color: var(--blue); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">${catName}</span>
                        <h3 data-user-content style="margin: 4px 0 8px 0; font-size: 18px; color: var(--text);">${business.name}</h3>
                    </div>
                    ${business.rating ? `<div style="background: var(--soft); color: var(--primary-dark); padding: 4px 8px; border-radius: 8px; font-weight: 700; font-size: 13px;">★ ${business.rating}</div>` : ''}
                </div>
                
                <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                    ${business.openTime ? `
                    <span style="background: #ecfdf5; color: #059669; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 500;">Şu an açık</span>` : ''}
                    ${hasCampaign ? `
                    <span style="background: #fff7ed; color: #ea580c; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; display: inline-flex; align-items: center; gap: 4px;">
                        ${icons.ticket} Kampanyalı
                    </span>` : ''}
                </div>
                <p data-user-content style="margin: 0; font-size: 13px; color: var(--muted); line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                    ${business.description || business.address || uiSource('Detaylı bilgi için tıklayın.')}
                </p>
            </div>
        </div>
        <div style="padding: 12px 16px; background: #fafafa; border-top: 1px solid var(--line); display: flex; gap: 12px;">
            <button class="primary-button" onclick="focusBusinessOnMap(${business.id})" style="flex: 1; padding: 8px; font-size: 13px; display: flex; justify-content: center; align-items: center; gap: 6px;">
                ${icons.target} Haritada Göster
            </button>
            <button class="outline-button" onclick="window.openBusinessDetail(${business.id});" style="flex: 1; padding: 8px; font-size: 13px;">
                Detayları Gör
            </button>
        </div>
    </div>`;
}


function collectIntroData() {
    const getPillValue = (key) => {
        const field = document.querySelector(`.field[data-pref-key="${key}"]`);
        if (field) {
            const active = field.querySelector('.pill.active');
            if (active) return active.dataset.value || active.innerText;
        }
        return undefined;
    };
    return {
        preferences: {
            ageRange: getPillValue("ageRange"),
            gender: getPillValue("gender"),
            campaignUsageFrequency: getPillValue("campaignUsageFrequency") || getPillValue("campaignFrequency"),
            campaignFrequency: getPillValue("campaignUsageFrequency") || getPillValue("campaignFrequency"),
            budgetPreference: getPillValue("budgetPreference"),
            monthlyBudgetAmount: document.getElementById('introMonthlyBudgetAmount')?.value ? parseFloat(document.getElementById('introMonthlyBudgetAmount').value) : null,
            monthlyBudgetCurrency: document.getElementById('introMonthlyBudgetCurrency')?.value || 'EUR',
            hobby: document.querySelector('[data-registration-hobby]')?.value || document.querySelector('.field input[type="text"]')?.value
        }
    };
}

function collectInterestsData() {
    const selected = Array.from(document.querySelectorAll('.interest-card.selected')).map(c => ({
        id: parseInt(c.dataset.id),
        name: c.dataset.name
    }));
    const prefs = (window.registrationData && window.registrationData.preferences) ? window.registrationData.preferences : {};
    prefs.preferredCategories = selected;
    return { preferences: prefs };
}



function showToast(message) {
    let toast = document.getElementById("global-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "global-toast";
        toast.style.cssText = "position:fixed; bottom:80px; left:50%; transform:translateX(-50%); background:#334155; color:#fff; padding:12px 24px; border-radius:30px; font-size:14px; z-index:9999; opacity:0; transition:opacity 0.3s ease; box-shadow:0 4px 12px rgba(0,0,0,0.15); pointer-events:none;";
        document.body.appendChild(toast);
    }
    toast.innerText = window.yerbulI18n?.isUserPage() ? uiSource(message) :
        (window.yerbulI18n?.businessText(message) || message);
    toast.style.opacity = "1";
    setTimeout(() => { toast.style.opacity = "0"; }, 3000);
}

// --- BUSINESS PROFILE ---

var bpMap = null;
var bpMarker = null;
var bpManualPinKey = null;
var bpLoadedUpdatedAt = null;
var bpSaveInFlight = false;
var bpLookupVersion = 0;
var bpLookupPromise = null;
var bpPinPrecision = 'none';

function bpAddressKey() {
    return ['bp-address', 'bp-city', 'bp-district', 'bp-neighborhood-id', 'bp-neighborhood-search']
        .map(id => document.getElementById(id)?.value.trim() || '').join('|');
}

function bpRememberManualPin() {
    bpManualPinKey = bpAddressKey();
}

function bpAddressEdited() {
    bpLookupVersion++;
    bpPinPrecision = 'none';
    bpManualPinKey = null;
    const message = document.getElementById('bp-address-error');
    if (message) { message.textContent = ''; message.style.display = 'none'; }
    const lat = document.getElementById('bp-lat');
    const lng = document.getElementById('bp-lng');
    if (lat) lat.value = '';
    if (lng) lng.value = '';
    if (bpMarker) { bpMarker.remove(); bpMarker = null; }
}

async function bpSearchAddress() {
    const address = document.getElementById('bp-address')?.value.trim();
    const cityId = document.getElementById('bp-city')?.value;
    const districtId = document.getElementById('bp-district')?.value;
    if (!address || !cityId || !districtId || bpManualPinKey === bpAddressKey()) return;
    const version = ++bpLookupVersion;
    const key = bpAddressKey();
    const message = document.getElementById('bp-address-error');
    if (message) { message.textContent = 'Adres haritada aranıyor...'; message.style.display = 'block'; }
    const params = new URLSearchParams({ address, cityId, districtId });
    const neighborhoodId = document.getElementById('bp-neighborhood-id')?.value;
    if (neighborhoodId) params.set('neighborhoodId', neighborhoodId);
    const lookup = (async () => {
        try {
            const response = await fetch(`/api/businesses/geocode-preview?${params}`, { credentials: 'same-origin' });
            const result = await response.json();
            if (version !== bpLookupVersion || key !== bpAddressKey() || bpManualPinKey === key) return;
            if (!response.ok) throw new Error(result.message || 'Adres aranamadı.');
            if (!result.location) {
                if (message) message.textContent = geocodeFailureText(result.failure);
                return;
            }
            if (!bpMap) bpInitMap(null, null);
            const { latitude, longitude } = result.location;
            focusAddressPreview(bpMap, result);
            bpPlacePin(latitude, longitude, false, result.canSavePin);
            bpPinPrecision = result.precision;
            if (message) message.textContent = result.precision === 'building'
                ? 'Adres konumu bulundu. Pini gerekirse işletmenizin tam konumuna taşıyabilirsiniz.'
                : result.canSavePin
                    ? 'Yaklaşık konum bulundu. Pini işletmenizin tam konumuna taşıyabilirsiniz.'
                    : result.precision === 'neighborhood'
                        ? 'Sokak bulunamadı; yalnızca mahalle bulundu. Haritada işletmenizin tam noktasını seçin.'
                        : 'Sokak ve mahalle bulunamadı; yalnızca ilçe bulundu. Haritada işletmenizin tam noktasını seçin.';
        } catch (error) {
            if (version === bpLookupVersion && key === bpAddressKey() && message)
                message.textContent = error.message || 'Adres aranamadı. Haritadan pin seçin.';
        }
    })();
    bpLookupPromise = lookup;
    await lookup;
    if (bpLookupPromise === lookup) bpLookupPromise = null;
}

function bpPlacePin(lat, lng, manual, saveable = true) {
    if (!bpMap) return;
    if (!bpMarker) {
        bpMarker = new maplibregl.Marker({ draggable: true, color: '#2563eb' })
            .setLngLat([lng, lat]).addTo(bpMap);
        bpMarker.on('dragend', () => {
            const point = bpMarker.getLngLat();
            bpPlacePin(point.lat, point.lng, true);
        });
    } else bpMarker.setLngLat([lng, lat]);
    document.getElementById('bp-lat').value = saveable ? lat : '';
    document.getElementById('bp-lng').value = saveable ? lng : '';
    if (manual) {
        bpLookupVersion++;
        bpRememberManualPin();
        bpPinPrecision = 'manual';
        const message = document.getElementById('bp-address-error');
        if (message) { message.textContent = 'Seçtiğiniz pin konumu kaydedilecek.'; message.style.display = 'block'; }
    }
}

async function renderBusinessProfile() {
    window.activeBusinessProfileSection = window.activeBusinessProfileSection || 'bp-sec-info';
    if (bpMap) bpMap.remove();
    bpMap = null;
    bpMarker = null;
    window._bpMapInitialized = false;
    
    app.innerHTML = `<div class="app-shell">
        ${topbar()}
        <main class="content-page bp-page" style="background: var(--bg-primary); min-height: 100vh;">
            <div class="content-wrap bp-layout">
                
                <!-- Sidebar -->
                <aside class="profile-sidebar profile-card" id="bp-sidebar" style="display: flex; flex-direction: column; padding: 32px 16px; box-sizing: border-box; margin-bottom: 0; border: 1px solid var(--border-primary); background: var(--surface-primary); border-radius: 12px;">
                      
                      <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 32px; padding: 0 8px;">
                          <div id="bp-sidebar-logo-container" style="width: 56px; height: 56px; background: var(--surface-secondary); color: var(--accent-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; overflow: hidden; flex-shrink: 0;">
                              ${icons.building}
                          </div>
                          <div style="flex: 1; min-width: 0; text-align: left;">
                              <h2 id="bp-sidebar-name" style="font-size: 18px; margin: 0 0 4px 0; color: var(--text-primary); font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Yükleniyor...</h2>
                              <p style="font-size: 13px; color: var(--text-muted); margin: 0;">İşletme Hesabı</p>
                              <p id="bp-sidebar-followers" style="font-size: 13px; color: var(--text-muted); margin: 4px 0 0;"></p>
                          </div>
                      </div>

                      <nav class="profile-menu" style="display: flex; flex-direction: column; gap: 4px;">
                          <div>
                              <button class="profile-menu-btn" id="bp-menu-info" style="justify-content: space-between;" onclick="bpToggleSection('bp-sec-info')">
                                  <div style="display: flex; align-items: center; gap: 10px;">
                                      ${icons.building} İşletme Bilgileri
                                  </div>
                                  <svg class="profile-menu-chevron" id="bp-info-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px; transition: transform 0.2s;"><path d="M6 9l6 6 6-6"></path></svg>
                              </button>
                              <div class="profile-submenu" id="bp-info-submenu" style="display: none; flex-direction: column; gap: 2px; padding-left: 12px; margin-top: 4px;">
                                  <button class="profile-submenu-btn" id="bp-menu-tax" onclick="bpToggleSection('bp-sec-tax')">Vergi Bilgileri</button>
                                  <button class="profile-submenu-btn" id="bp-menu-logo" onclick="bpToggleSection('bp-sec-logo')">İşletme Logosu</button>
                              </div>
                          </div>
                          <button class="profile-menu-btn" id="bp-menu-address" onclick="bpToggleSection('bp-sec-address')">
                              ${icons.target} Adres & Konum
                          </button>
                          <button class="profile-menu-btn" id="bp-menu-auth" onclick="bpToggleSection('bp-sec-auth')">
                              ${icons.user} Yetkili / Hesap Bilgileri
                          </button>
                          
                      </nav>
                  </aside>
                
                <!-- Right Content Area -->
                <section class="profile-main" id="bp-main-content" style="background: var(--surface-primary); border-radius: 12px; border: 1px solid var(--border-primary);">
                      <h1 id="bp-section-title" style="color: var(--text-primary); font-size: 24px; font-weight: 700; margin: 0 0 32px 0;">İşletme Bilgileri</h1>
                    <div id="bp-loading" style="text-align:center; padding: 40px; color: var(--text-muted);">Yükleniyor...</div>
                    
                    <div id="bp-content" style="display: none;">
                        
                        <!-- İşletme Bilgileri -->
                        <div id="bp-sec-info" class="profile-card" style="display: none;">
                            <div class="field" style="margin-bottom:12px;">
                                <label>İşletme Adı / Ticari Unvan</label>
                                <input type="text" id="bp-name" class="profile-input" style="width:100%;" />
                            </div>
                            <div class="field" style="margin-bottom:12px;">
                                <label>Kategori</label>
                                <select id="bp-category" class="profile-input" style="width:100%;"><option value="">Yükleniyor...</option></select>
                            </div>
                            <div class="field" style="margin-bottom:0;">
                                <label>İşletme Telefonu</label>
                                <input type="tel" id="bp-phone" class="profile-input" style="width:100%;" />
                            </div>

                            <hr style="border:0; border-top: 1px solid var(--line); margin: 32px 0 24px 0;" />
                            <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px; color: var(--text);">Çalışma Saatleri</h3>
                            
                            <div style="display:flex; gap:16px;">
                                <div class="field" style="flex:1;">
                                    <label>Açılış</label>
                                    <input type="time" id="bp-open" class="profile-input" style="width:100%;" />
                                </div>
                                <div class="field" style="flex:1;">
                                    <label>Kapanış</label>
                                    <input type="time" id="bp-close" class="profile-input" style="width:100%;" />
                                </div>
                            </div>
                            
                            <div style="text-align: right; margin-top: 24px;">
                                <button class="primary-button" onclick="bpSaveAll(this)" style="height: 46px; border-radius: 9px; font-size: 14px; padding: 0 24px;">Değişiklikleri Kaydet</button>
                            </div>
                        </div>
                        <!-- Adres & Konum -->
                        <div id="bp-sec-address" class="profile-card" style="display: none;">
                            
                            <div class="field" style="margin-bottom:12px;">
                                <label>İl</label>
                                <select id="bp-city" class="profile-input" style="width:100%;" onchange="bpLoadDistricts()"></select>
                            </div>
                            <div class="field" style="margin-bottom:12px;">
                                <label>İlçe</label>
                                <select id="bp-district" class="profile-input" style="width:100%;" onchange="bpLoadNeighborhoods()"></select>
                            </div>
                            <div class="field" style="margin-bottom:12px; position:relative;">
                                <label>Mahalle</label>
                                <input type="text" id="bp-neighborhood-search" class="profile-input" style="width:100%;" placeholder="Ara veya seç..." autocomplete="off" onfocus="document.getElementById('bp-neighborhood-dropdown').style.display='block'" oninput="bpFilterNeighborhoods(this.value)" />
                                <input type="hidden" id="bp-neighborhood-id" />
                                <div id="bp-neighborhood-dropdown" style="display:none; position:absolute; top:100%; left:0; right:0; max-height:200px; overflow-y:auto; background:var(--surface-primary); border:1px solid var(--border-primary); border-radius: 8px; z-index:100; box-shadow: 0 4px 12px var(--shadow-color, rgba(0,0,0,0.1));"></div>
                            </div>
                            <div class="field" style="margin-bottom:12px;">
                                <label>Açık Adres</label>
                                <textarea id="bp-address" class="profile-input" style="width:100%; min-height: 60px; resize: vertical;"></textarea>
                            </div>
                            <div id="bp-address-error" role="alert" style="display:none; color:var(--danger); font-size:13px; margin-bottom:12px;"></div>
                            <div style="margin-bottom: 8px; display:flex; justify-content:space-between; align-items:center;">
                                <label style="font-weight:600; font-size:13px;">Pini sürükleyin veya haritaya tıklayın</label>
                                <button class="outline-button" onclick="bpUseMyLocation()" style="padding: 4px 12px; font-size: 12px;">${icons.target} Konumumu Kullan</button>
                            </div>
                            <div id="bp-map" style="width:100%; height: 200px; border-radius: 8px; border: 1px solid #DCE3EA; background: #eee;"></div>
                            <p style="font-size:11px; color:var(--text-muted); margin:6px 0 0;">Adres konumu © OpenStreetMap katkıcıları</p>
                            <input type="hidden" id="bp-lat" />
                            <input type="hidden" id="bp-lng" />
                            <div style="text-align: right; margin-top: 24px;">
                                <button class="primary-button" onclick="bpSaveAll(this)" style="height: 46px; border-radius: 9px; font-size: 14px; padding: 0 24px;">Değişiklikleri Kaydet</button>
                            </div>
                        </div>
                        
                        <!-- Yetkili / Hesap Bilgileri -->
                        <div id="bp-sec-auth" class="profile-card" style="display: none;">
                            
                            <div class="field" style="margin-bottom:12px;">
                                <label>Yetkili Kişi Ad Soyad</label>
                                <input type="text" id="bp-fullname" class="profile-input" style="width:100%;" />
                            </div>
                            <div class="field" style="margin-bottom:12px;">
                                <label>Yetkili Telefonu</label>
                                <input type="tel" id="bp-profile-phone" class="profile-input" style="width:100%;" />
                            </div>
                            <div class="field" style="margin-bottom:12px;">
                                <label>TC Kimlik No</label>
                                <input type="text" id="bp-tc" class="profile-input" style="width:100%;" placeholder="Maskelenmiş gösterilir" />
                            </div>
                            <div class="field" style="margin-bottom:12px;">
                                <label>İşletme Türü</label>
                                <select id="bp-bustype" class="profile-input" style="width:100%;">
                                    <option value="">Seçiniz</option>
                                    <option value="sole">Şahıs Şirketi</option>
                                    <option value="corp">Limited veya Anonim Şirketi</option>
                                </select>
                            </div>
                            <hr style="border:0; border-top: 1px solid #E8EDF3; margin: 16px 0;" />
                            <div class="field" style="margin-bottom:12px;">
                                <label>E-posta (Hesap)</label>
                                <div style="display:flex; gap: 8px;">
                                    <input type="email" id="bp-email" class="profile-input" style="flex:1;" readonly />
                                    <button class="outline-button" onclick="bpEditEmail()" style="padding: 0 12px; font-size: 13px;">Değiştir</button>
                                </div>
                            </div>
                            <hr style="border:0; border-top: 1px solid var(--line); margin: 32px 0 24px 0;" />
                            <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px; color: var(--text);">Şifre Değiştir</h3>
                            <div id="bp-password-message" style="display: none; padding: 12px; border-radius: 8px; font-size: 13px; font-weight: 500; margin-bottom: 16px;"></div>
                            
                            <div class="field" style="margin-bottom:12px;">
                                <label>Mevcut Şifre</label>
                                <div style="position: relative;">
                                    <input type="password" id="bp-pwd-current" class="profile-input" style="width:100%; padding-right: 40px;" />
                                    <span onclick="bpTogglePasswordVisibility('bp-pwd-current', this)" style="position: absolute; right: 14px; top: 50%; transform: translateY(-50%); cursor: pointer; color: var(--muted); display: flex; align-items: center; justify-content: center;">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                    </span>
                                </div>
                            </div>
                            
                            <div class="field" style="margin-bottom:12px;">
                                <label>Yeni Şifre</label>
                                <div style="position: relative;">
                                    <input type="password" id="bp-pwd-new" class="profile-input" style="width:100%; padding-right: 40px;" />
                                    <span onclick="bpTogglePasswordVisibility('bp-pwd-new', this)" style="position: absolute; right: 14px; top: 50%; transform: translateY(-50%); cursor: pointer; color: var(--muted); display: flex; align-items: center; justify-content: center;">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                    </span>
                                </div>
                            </div>
                            
                            <div class="field" style="margin-bottom:24px;">
                                <label>Yeni Şifre Tekrar</label>
                                <div style="position: relative;">
                                    <input type="password" id="bp-pwd-confirm" class="profile-input" style="width:100%; padding-right: 40px;" />
                                    <span onclick="bpTogglePasswordVisibility('bp-pwd-confirm', this)" style="position: absolute; right: 14px; top: 50%; transform: translateY(-50%); cursor: pointer; color: var(--muted); display: flex; align-items: center; justify-content: center;">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                    </span>
                                </div>
                            </div>
                            
                            <div>
                                <button class="primary-button" id="bp-btn-password" onclick="bpSubmitPassword()" style="height: 46px; border-radius: 9px; font-size: 14px; padding: 0 24px;">Şifreyi Değiştir</button>
                            </div>
                            <div style="text-align: right; margin-top: 24px;">
                                <button class="primary-button" onclick="bpSaveAll(this)" style="height: 46px; border-radius: 9px; font-size: 14px; padding: 0 24px;">Değişiklikleri Kaydet</button>
                            </div>
                        </div>
                        
                        <!-- Vergi Bilgileri -->
                        <div id="bp-sec-tax" class="profile-card" style="display: none;">
                            
                            <div class="field" style="margin-bottom:12px;">
                                <label>Vergi Dairesi İli</label>
                                <select id="bp-taxcity" class="profile-input" style="width:100%;" onchange="bpLoadTaxOffices()"></select>
                            </div>
                            <div class="field" style="margin-bottom:12px;">
                                <label>Vergi Dairesi</label>
                                <select id="bp-taxoffice" class="profile-input" style="width:100%;"></select>
                            </div>
                            <div class="field" style="margin-bottom:0;">
                                <label>Vergi Kimlik No</label>
                                <input type="text" id="bp-taxno" class="profile-input" style="width:100%;" />
                            </div>
                            <div style="text-align: right; margin-top: 24px;">
                                <button class="primary-button" onclick="bpSaveAll(this)" style="height: 46px; border-radius: 9px; font-size: 14px; padding: 0 24px;">Değişiklikleri Kaydet</button>
                            </div>
                        </div>
                        
                        <!-- İşletme Logosu -->
                        <div id="bp-sec-logo" class="profile-card" style="display: none;">
                            <div style="display:flex; gap: 16px; align-items:center;">
                                <div id="bp-logo-container" style="width:80px; height:80px; border-radius:12px; border:2px dashed var(--border-primary, #DCE3EA); display:flex; align-items:center; justify-content:center; overflow:hidden; background:var(--surface-secondary, #f8fafc); flex-shrink:0;">
                                    <span id="bp-logo-placeholder" style="color:var(--text-muted, #94a3b8); font-size:11px; text-align:center;">Logo yok</span>
                                    <img id="bp-logo-preview" style="width:100%; height:100%; object-fit:contain; display:none;" />
                                </div>
                                <div style="flex:1;">
                                    <input type="file" id="bp-logo-file" accept=".jpg,.jpeg,.png,.webp" style="font-size:13px; margin-bottom:8px;" onchange="bpHandleLogoSelect(this)" />
                                    <p style="font-size:12px; color:var(--text-muted, #64748b); margin:0;">Maksimum 5MB. JPG, PNG, WEBP.</p>
                                </div>
                            </div>
                            <div style="text-align: right; margin-top: 24px;">
                                <button class="primary-button" onclick="bpSaveAll(this)" style="height: 46px; border-radius: 9px; font-size: 14px; padding: 0 24px;">Değişiklikleri Kaydet</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        ${bottomNav("profile", "business")}
    </div>`;

    bindGlobalActions();
    await bpLoadInitialData();
}

function bpToggleSection(sectionId) {
    window.activeBusinessProfileSection = sectionId;
    const sections = ['bp-sec-info', 'bp-sec-address', 'bp-sec-auth', 'bp-sec-tax', 'bp-sec-logo'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = (id === sectionId) ? 'block' : 'none';
    });
    
    document.querySelectorAll('.profile-menu-btn, .profile-submenu-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const menuMap = {
        'bp-sec-info': 'bp-menu-info',
        'bp-sec-address': 'bp-menu-address',
        'bp-sec-auth': 'bp-menu-auth',
        'bp-sec-tax': 'bp-menu-tax',
        'bp-sec-logo': 'bp-menu-logo'
    };
    
    const activeBtn = document.getElementById(menuMap[sectionId]);
    if (activeBtn) activeBtn.classList.add('active');
    
    const isSub = ['bp-sec-tax', 'bp-sec-logo'].includes(sectionId);
    const submenu = document.getElementById('bp-info-submenu');
    const chevron = document.getElementById('bp-info-chevron');
    
    if (isSub && submenu && chevron) {
        submenu.style.display = 'flex';
        chevron.style.transform = 'rotate(180deg)';
        const parentBtn = document.getElementById('bp-menu-info');
        if (parentBtn) parentBtn.classList.add('active');
    } else if (sectionId === 'bp-sec-info' && submenu && chevron) {
        submenu.style.display = 'flex';
        chevron.style.transform = 'rotate(180deg)';
    } else if (submenu && chevron) {
        submenu.style.display = 'none';
        chevron.style.transform = 'rotate(0deg)';
    }
    
    const titleEl = document.getElementById('bp-section-title');
    if (titleEl && activeBtn) {
        const sectionTitle = {
            'bp-sec-info': 'İşletme Bilgileri', 'bp-sec-address': 'Adres & Konum',
            'bp-sec-auth': 'Yetkili / Hesap Bilgileri', 'bp-sec-tax': 'Vergi Bilgileri',
            'bp-sec-logo': 'İşletme Logosu'
        }[sectionId];
        titleEl.dataset.businessSource = sectionTitle;
        titleEl.textContent = window.yerbulI18n?.businessText(sectionTitle) || sectionTitle;
    }
    
    if (sectionId === 'bp-sec-address') {
        requestAnimationFrame(() => {
            const addressSection = document.getElementById('bp-sec-address');
            if (!addressSection || addressSection.style.display !== 'block' || !addressSection.getClientRects().length) return;
            if (!bpMap) {
                bpInitMap(window._bpInitLat, window._bpInitLng);
                if (window._bpInitLat == null || window._bpInitLng == null) bpSearchAddress();
            } else bpMap.resize();
        });
    }
}


function bpHandleLogoSelect(input) {
    if (input.files && input.files[0]) {
        bpLogoChanged = true;
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('bp-logo-preview');
            const placeholder = document.getElementById('bp-logo-placeholder');
            preview.src = e.target.result;
            preview.style.display = 'block';
            if (placeholder) placeholder.style.display = 'none';
        }
        reader.readAsDataURL(input.files[0]);
    }
}

async function bpLoadInitialData() {
    try {
        const [profileRes, businessRes, catsRes, citiesRes] = await Promise.all([
            fetch("/api/auth/me", { cache: 'no-store', headers: getAuthHeaders(), credentials: 'same-origin' }),
            fetch("/api/businesses/me", { cache: 'no-store', headers: getAuthHeaders(), credentials: 'same-origin' }),
            fetch("/api/categories"),
            fetch("/api/locations/cities")
        ]);

        if (profileRes.status === 401 || businessRes.status === 401) {
            logout();
            return false;
        }

        const profile = await profileRes.json();
        const business = await businessRes.json();
        const cats = await catsRes.json();
        const cities = await citiesRes.json();
        fetch('/api/businesses/me/follower-count', { cache: 'no-store', credentials: 'same-origin', headers: getAuthHeaders() })
            .then(res => res.ok ? res.json() : null)
            .then(data => {
                const label = document.getElementById('bp-sidebar-followers');
                if (label && data) label.textContent = `${Number(data.followerCount) || 0} takipçi`;
            }).catch(() => {});

        // Populate category select — API already filters IsActive=1, no need to check isActive
        const catSelect = document.getElementById("bp-category");
        catSelect.innerHTML = `<option value="">Seçiniz</option>`;
        cats.forEach(c => {
            catSelect.innerHTML += `<option data-user-content value="${c.id}">${c.name}</option>`;
        });
        
        const citySelect = document.getElementById("bp-city");
        const taxCitySelect = document.getElementById("bp-taxcity");
        citySelect.innerHTML = `<option value="">Seçiniz</option>`;
        taxCitySelect.innerHTML = `<option value="">Seçiniz</option>`;
        cities.forEach(c => {
            citySelect.innerHTML += `<option data-user-content value="${c.id}">${c.name}</option>`;
            taxCitySelect.innerHTML += `<option data-user-content value="${c.id}">${c.name}</option>`;
        });

        // Profile fields
        document.getElementById("bp-fullname").value = profile.fullName || "";
        document.getElementById("bp-profile-phone").value = profile.phone || "";
        if(profile.tcKimlikNo) document.getElementById("bp-tc").value = "********" + profile.tcKimlikNo.slice(-3);
        if(profile.businessType) document.getElementById("bp-bustype").value = profile.businessType;
        document.getElementById("bp-email").value = profile.email || "";
        
        // Tax info
        if (profile.taxCity) {
            const tCity = cities.find(c => c.name === profile.taxCity);
            if (tCity) {
                taxCitySelect.value = tCity.id;
                await bpLoadTaxOffices(tCity.id, profile.taxOffice);
            }
        }
        document.getElementById("bp-taxno").value = profile.taxNumber || "";

        // Business fields
        document.getElementById("bp-name").value = business.name || "";
        if (business.categoryId) {
            catSelect.value = business.categoryId;
        }
        document.getElementById("bp-phone").value = business.phone || "";
        
        // Address cascade
        if (business.cityId) {
            citySelect.value = business.cityId;
            await bpLoadDistricts(business.cityId, business.districtId);
            if (business.districtId) {
                await bpLoadNeighborhoods(business.districtId, business.neighborhoodId);
            }
        }
        document.getElementById("bp-address").value = business.address || "";
        bpLoadedUpdatedAt = business.updatedAt;
        bpManualPinKey = null;
        bpPinPrecision = business.latitude != null && business.longitude != null ? 'saved' : 'none';
        bpLookupVersion++;
        for (const id of ['bp-address', 'bp-city', 'bp-district', 'bp-neighborhood-search']) {
            const field = document.getElementById(id);
            if (field && !field.dataset.bpAddressListener) {
                field.addEventListener(id === 'bp-city' || id === 'bp-district' ? 'change' : 'input', bpAddressEdited);
                field.addEventListener('change', bpSearchAddress);
                field.dataset.bpAddressListener = 'true';
            }
        }
        document.getElementById('bp-lat').value = business.latitude ?? '';
        document.getElementById('bp-lng').value = business.longitude ?? '';
        if (bpMap) { bpMap.remove(); bpMap = null; bpMarker = null; }
        window._bpMapInitialized = false;
        
        // Logo
        const preview = document.getElementById("bp-logo-preview");
        const placeholder = document.getElementById("bp-logo-placeholder");
        if (business.logoPath) {
            preview.src = business.logoPath + "?t=" + Date.now();
            preview.style.display = "block";
            if (placeholder) placeholder.style.display = "none";
        } else {
            preview.style.display = "none";
            if (placeholder) placeholder.style.display = "block";
        }
        bpLogoChanged = false;
        
        // Hours
        if (business.openTime) document.getElementById("bp-open").value = business.openTime.substring(0,5);
        if (business.closeTime) document.getElementById("bp-close").value = business.closeTime.substring(0,5);

        // Show content
        document.getElementById("bp-loading").style.display = "none";
        document.getElementById("bp-content").style.display = "flex";
        window._bpInitLat = business.latitude;
        window._bpInitLng = business.longitude;
        bpToggleSection(window.activeBusinessProfileSection);
        return true;

    } catch(e) {
        console.error("Error loading business profile:", e);
        const loadingDiv = document.getElementById("bp-loading");
        if (loadingDiv) {
            loadingDiv.innerHTML = `<div style="color:var(--danger); margin-bottom:12px;">İşletme bilgileri yüklenemedi.</div><button class="outline-button" onclick="bpLoadInitialData()">Tekrar Dene</button>`;
        } else {
            showToast("Veriler yüklenirken hata oluştu.");
        }
        return false;
    }
}

async function bpLoadTaxOffices(cityId, preselectName) {
    if(!cityId) cityId = document.getElementById("bp-taxcity").value;
    const toSelect = document.getElementById("bp-taxoffice");
    toSelect.innerHTML = `<option value="">Seçiniz</option>`;
    if(!cityId) return;
    
    try {
        const res = await fetch(`/api/locations/cities/${cityId}/tax-offices`);
        const offices = await res.json();
        offices.forEach(o => {
            toSelect.innerHTML += `<option data-user-content value="${o.name}">${o.name}</option>`;
        });
        if(preselectName) toSelect.value = preselectName;
    } catch(e) { console.error("Tax offices load error:", e); }
}

async function bpLoadDistricts(cityId, preselectId) {
    if(!cityId) cityId = document.getElementById("bp-city").value;
    const distSelect = document.getElementById("bp-district");
    distSelect.innerHTML = `<option value="">Seçiniz</option>`;
    document.getElementById("bp-neighborhood-search").value = "";
    document.getElementById("bp-neighborhood-id").value = "";
    bpNeighborhoodsCache = [];
    if(!cityId) return;
    
    try {
        const res = await fetch(`/api/locations/cities/${cityId}/districts`);
        const districts = await res.json();
        districts.forEach(d => {
            distSelect.innerHTML += `<option value="${d.id}">${d.name}</option>`;
        });
        if(preselectId) {
            distSelect.value = preselectId;
        }
    } catch(e) { console.error("Districts load error:", e); }
}

async function bpLoadNeighborhoods(distId, preselectId) {
    if(!distId) distId = document.getElementById("bp-district").value;
    document.getElementById("bp-neighborhood-search").value = "";
    document.getElementById("bp-neighborhood-id").value = "";
    if(!distId) {
        bpNeighborhoodsCache = [];
        return;
    }
    
    try {
        const res = await fetch(`/api/locations/districts/${distId}/neighborhoods`);
        bpNeighborhoodsCache = await res.json();
        if(preselectId) {
            const n = bpNeighborhoodsCache.find(x => x.id == preselectId);
            if(n) {
                document.getElementById("bp-neighborhood-search").value = n.name;
                document.getElementById("bp-neighborhood-id").value = n.id;
            }
        }
    } catch(e) { console.error("Neighborhoods load error:", e); }
}

function bpFilterNeighborhoods(q) {
    const dropdown = document.getElementById("bp-neighborhood-dropdown");
    document.getElementById("bp-neighborhood-id").value = "";
    dropdown.innerHTML = "";
    if(!q) { dropdown.style.display="none"; return; }
    
    const filtered = bpNeighborhoodsCache.filter(n => n.name.toLowerCase().includes(q.toLowerCase())).slice(0,20);
    if(filtered.length === 0) {
        dropdown.innerHTML = `<div style="padding:8px 12px; color:#999; font-size:13px;">Sonuç bulunamadı</div>`;
    } else {
        filtered.forEach(n => {
            const div = document.createElement("div");
            div.style.cssText = "padding:8px 12px; cursor:pointer; border-bottom:1px solid #f1f5f9; font-size:13px;";
            div.dataset.userContent = '';
            div.innerText = n.name;
            div.onmouseenter = () => div.style.background = "#f1f5f9";
            div.onmouseleave = () => div.style.background = "#fff";
            div.onmousedown = (e) => {
                e.preventDefault();
                document.getElementById("bp-neighborhood-search").value = n.name;
                document.getElementById("bp-neighborhood-id").value = n.id;
                bpAddressEdited();
                bpSearchAddress();
                dropdown.style.display="none";
            };
            dropdown.appendChild(div);
        });
    }
    dropdown.style.display="block";
}

document.addEventListener("click", (e) => {
    const search = document.getElementById("bp-neighborhood-search");
    const drop = document.getElementById("bp-neighborhood-dropdown");
    if(search && drop && e.target !== search && !drop.contains(e.target)) {
        drop.style.display = "none";
    }
});

function bpInitMap(lat, lng) {
    if (bpMap) { bpMap.remove(); bpMap = null; bpMarker = null; }
    document.getElementById('bp-lat').value = lat ?? '';
    document.getElementById('bp-lng').value = lng ?? '';
    
    let center = [35.3213, 39.0590];
    let zoom = 5;
    if(lat && lng) {
        center = [parseFloat(lng), parseFloat(lat)];
        zoom = 14;
        document.getElementById("bp-lat").value = lat;
        document.getElementById("bp-lng").value = lng;
    }
    
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const initialStyle = currentTheme === 'dark'
        ? 'https://tiles.openfreemap.org/styles/dark'
        : 'https://tiles.openfreemap.org/styles/positron';

    bpMap = new maplibregl.Map({
        container: 'bp-map',
        style: initialStyle,
        center: center,
        zoom: zoom
    });
    bpMap.on('load', () => {
        if (currentTheme === 'dark') {
            window.enhanceDarkMapReadability(bpMap);
        }
    });
    
    if(lat && lng) bpPlacePin(parseFloat(lat), parseFloat(lng), false);
    
    bpMap.on('click', (e) => {
        bpPlacePin(e.lngLat.lat, e.lngLat.lng, true);
    });
    
    window._bpMapInitialized = true;
}

function bpUseMyLocation() {
    const requestedAddressKey = bpAddressKey();
    const requestedLookupVersion = bpLookupVersion;
    // Lazy init map if needed
    if (!window._bpMapInitialized) {
        bpInitMap(null, null);
    }
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            if (requestedAddressKey !== bpAddressKey() || requestedLookupVersion !== bpLookupVersion ||
                bpManualPinKey === requestedAddressKey) return;
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            if (bpMap) bpMap.flyTo({ center: [lng, lat], zoom: 15 });
            bpPlacePin(lat, lng, true);
        }, () => {
            showToast("Konum alınamadı.");
        });
    }
}

async function bpSaveAll(btn) {
    if (bpSaveInFlight || !btn) return;
    bpSaveInFlight = true;
    const addressKeyAtStart = bpAddressKey();
    const addressError = document.getElementById('bp-address-error');
    if (addressError) { addressError.textContent = ''; addressError.style.display = 'none'; }
    const origText = btn.innerText;
    btn.innerText = "Kaydediliyor...";
    btn.disabled = true;
    btn.style.opacity = "0.7";

    const errors = [];
    let locationWarning = null;

    try {
        if (bpLookupPromise && bpManualPinKey !== addressKeyAtStart) await bpLookupPromise;
        if (bpPinPrecision === 'neighborhood' || bpPinPrecision === 'district')
            throw new Error('Yalnızca bölge bulundu. Kaydetmek için haritada işletmenizin tam noktasını seçin.');
        // 1. Save Business Data before other writes so its revision stays authoritative.
        if (bpAddressKey() !== addressKeyAtStart)
            throw new Error('Adres kaydetme sırasında değişti. Son adresi yeniden kaydedin.');
        const pin = bpMarker?.getLngLat();
        const storedLat = document.getElementById("bp-lat").value;
        const storedLng = document.getElementById("bp-lng").value;
        const lat = pin && storedLat !== '' && storedLng !== '' ? pin.lat : storedLat;
        const lng = pin && storedLat !== '' && storedLng !== '' ? pin.lng : storedLng;
        const markerMoved = pin && storedLat !== '' && storedLng !== '' &&
            (Math.abs(pin.lat - Number(storedLat)) > 0.0000001 ||
                Math.abs(pin.lng - Number(storedLng)) > 0.0000001);
        const manualPinSelected = !!lat && !!lng &&
            (bpManualPinKey === addressKeyAtStart || markerMoved);
        const businessPayload = {
            name: document.getElementById("bp-name").value || null,
            categoryId: parseInt(document.getElementById("bp-category").value) || null,
            phone: document.getElementById("bp-phone").value || null,
            cityId: parseInt(document.getElementById("bp-city").value) || null,
            districtId: parseInt(document.getElementById("bp-district").value) || null,
            neighborhoodId: parseInt(document.getElementById("bp-neighborhood-id").value) || null,
            address: document.getElementById("bp-address").value || null,
            latitude: lat ? parseFloat(lat) : null,
            longitude: lng ? parseFloat(lng) : null,
            manualPinSelected,
            expectedUpdatedAt: bpLoadedUpdatedAt,
            openTime: document.getElementById("bp-open").value || null,
            closeTime: document.getElementById("bp-close").value || null
        };

        const bRes = await fetch("/api/businesses/me", {
            method: "PUT",
            headers: getAuthHeaders({ "Content-Type": "application/json" }),
            credentials: 'same-origin',
            body: JSON.stringify(businessPayload)
        });
        if (!bRes.ok) {
            const errData = await bRes.json().catch(() => ({}));
            const errorMessage = errData.message || window.yerbulI18n?.businessText("Kaydedilemedi") || "Kaydedilemedi";
            errors.push((window.yerbulI18n?.businessText("İşletme bilgileri:") || "İşletme bilgileri:") + " " + errorMessage);
            const addressError = document.getElementById('bp-address-error');
            if (addressError) { addressError.textContent = errorMessage; addressError.style.display = 'block'; }
            showToast(errors.join(', '));
            return;
        } else {
            const saved = await bRes.json();
            bpLoadedUpdatedAt = saved.updatedAt;
            if (manualPinSelected &&
                (Math.abs(Number(saved.latitude) - Number(lat)) > 0.000001 ||
                 Math.abs(Number(saved.longitude) - Number(lng)) > 0.000001))
                throw new Error('Harita pini kaydedilemedi. İşletme konumunu yeniden yükleyip tekrar deneyin.');
            document.getElementById('bp-lat').value = saved.latitude ?? '';
            document.getElementById('bp-lng').value = saved.longitude ?? '';
            window._bpInitLat = saved.latitude;
            window._bpInitLng = saved.longitude;
            if (window.yerbulMapState) window.yerbulMapState.categoryBusinesses = null;
            if (saved.locationWarning) {
                locationWarning = saved.locationWarning;
                const addressError = document.getElementById('bp-address-error');
                if (addressError) { addressError.textContent = saved.locationWarning; addressError.style.display = 'block'; }
                alert(uiSource(saved.locationWarning));
            }
        }
        if (bpAddressKey() !== addressKeyAtStart) {
            showToast('Adres kaydetme sırasında değişti. Son adresi yeniden kaydedin.');
            return;
        }

        // 2. Upload Logo if changed
        if (bpLogoChanged) {
            const fileInput = document.getElementById("bp-logo-file");
            if (fileInput && fileInput.files[0]) {
                const formData = new FormData();
                formData.append("file", fileInput.files[0]);
                formData.append("type", "logo");
                
                const logoRes = await fetch("/api/businesses/me/upload", {
                    method: "POST",
                    headers: getAuthHeaders(),
                    credentials: 'same-origin',
                    body: formData
                });
                if (!logoRes.ok) {
                    const errData = await logoRes.json().catch(() => ({}));
                    errors.push((window.yerbulI18n?.businessText("Logo:") || "Logo:") + " " + (errData.message || window.yerbulI18n?.businessText("Yüklenemedi") || "Yüklenemedi"));
                } else {
                    const uploaded = await logoRes.json();
                    bpLoadedUpdatedAt = uploaded.updatedAt;
                }
            }
        }

        // 3. Save Profile Data
        const tcVal = document.getElementById("bp-tc").value;
        const citySel = document.getElementById("bp-taxcity");
        let taxCityVal = citySel.options[citySel.selectedIndex]?.text;
        if (!citySel.value) taxCityVal = null;
        
        const profilePayload = {
            fullName: document.getElementById("bp-fullname").value || null,
            phone: document.getElementById("bp-profile-phone").value || null,
            businessType: document.getElementById("bp-bustype").value || null,
            taxCity: taxCityVal,
            taxOffice: document.getElementById("bp-taxoffice").value || null,
            taxNumber: document.getElementById("bp-taxno").value || null
        };
        if(tcVal && !tcVal.includes("*")) {
            profilePayload.tcKimlikNo = tcVal;
        }

        const pRes = await fetch("/api/auth/me/profile", {
            method: "PUT",
            headers: getAuthHeaders({ "Content-Type": "application/json" }),
            credentials: 'same-origin',
            body: JSON.stringify(profilePayload)
        });
        if (!pRes.ok) {
            const errData = await pRes.json().catch(() => ({}));
            errors.push((window.yerbulI18n?.businessText("Yetkili bilgileri:") || "Yetkili bilgileri:") + " " + (errData.message || window.yerbulI18n?.businessText("Kaydedilemedi") || "Kaydedilemedi"));
        }

        if (errors.length > 0) {
            showToast((window.yerbulI18n?.businessText("Hata:") || "Hata:") + " " + errors.join(", "));
            return;
        }
        if (bpAddressKey() !== addressKeyAtStart) {
            showToast('Adres kaydetme sırasında değişti. Son adresi yeniden kaydedin.');
            return;
        }
        // Reload to resync with DB
        if (!await bpLoadInitialData()) {
            showToast('İşletme kaydedildi, ancak profil yeniden yüklenemedi. Sayfayı yenileyin.');
            return;
        }
        if (locationWarning) {
            showToast(locationWarning);
            return;
        }
        showToast("İşletme bilgileriniz güncellendi.");

    } catch (e) {
        console.error("Save error:", e);
        showToast(e.message || "Kaydetme işlemi başarısız.");
    } finally {
        btn.innerText = window.yerbulI18n?.businessText('Değişiklikleri Kaydet') || origText;
        btn.disabled = false;
        btn.style.opacity = "1";
        bpSaveInFlight = false;
    }
}

function bpEditEmail() {
    const newEmail = prompt(window.yerbulI18n?.businessText("Yeni e-posta adresini girin:") || "Yeni e-posta adresini girin:");
    if(newEmail) {
        fetch("/api/auth/me/email", {
            method: "PUT",
            headers: getAuthHeaders({ "Content-Type": "application/json" }),
            credentials: 'same-origin',
            body: JSON.stringify({ newEmail })
        }).then(async res => {
            if (res.ok) {
                document.getElementById("bp-email").value = newEmail;
                showToast("E-posta güncellendi.");
            } else {
                const err = await res.json().catch(() => ({}));
                showToast(err.message || "E-posta güncellenemedi.");
            }
        });
    }
}

function bpEditPassword() {
    const current = prompt(window.yerbulI18n?.businessText("Mevcut şifrenizi girin:") || "Mevcut şifrenizi girin:");
    if(!current) return;
    const newP = prompt(window.yerbulI18n?.businessText("Yeni şifrenizi girin (en az 6 karakter):") || "Yeni şifrenizi girin (en az 6 karakter):");
    if(!newP) return;
    const confirmP = prompt(window.yerbulI18n?.businessText("Yeni şifrenizi tekrar girin:") || "Yeni şifrenizi tekrar girin:");
    if(newP !== confirmP) {
        showToast("Şifreler eşleşmiyor!");
        return;
    }
    fetch("/api/auth/me/password", {
        method: "PUT",
        headers: getAuthHeaders({ "Content-Type": "application/json" }),
        credentials: 'same-origin',
        body: JSON.stringify({ currentPassword: current, newPassword: newP, confirmPassword: confirmP })
    }).then(async res => {
        if(res.ok) showToast("Şifreniz güncellendi.");
        else {
            const err = await res.json().catch(() => ({}));
            showToast(err.message || "Şifre güncellenemedi.");
        }
    });
}

// --- END BUSINESS PROFILE ---


// --- MENU ---

async function renderMenu() {
    window.activeMenuCategory = null;
    window.menuData = { categories: [], items: {}, recentItems: [] };
    
    app.innerHTML = `<div class="app-shell">
        ${topbar()}
        <main class="content-page" style="padding: 24px; max-width: 1200px; margin: 0 auto; padding-bottom: 100px; background: var(--bg-primary); min-height: 100vh;">
            <div class="content-header menu-header-card">
                <div style="display:flex; align-items:center; gap: 16px; margin-bottom: 24px;">
                    <div style="width: 48px; height: 48px; background: var(--primary); color: white; border-radius: 12px; display:flex; align-items:center; justify-content:center; flex-shrink: 0;">
                        ${icons.utensils || '🍽️'}
                    </div>
                    <div>
                        <h1 style="margin: 0; font-size: 24px; color: var(--text-primary);">Menüm</h1>
                        <p style="margin: 4px 0 0 0; color: var(--muted); font-size: 14px;">Menünü birkaç farklı yöntemle kolayca ekle ve yönet.</p>
                    </div>
                </div>

                <div class="menu-action-cards">
                    <div onclick="openMenuModal('pdf')" class="menu-action-card menu-action-pdf" style="background: #fdf2f2; border: 1px solid #fecaca;">
                        <div class="menu-action-icon-wrap" style="background: white; color: #ef4444;">📄</div>
                        <div class="menu-action-content" style="flex:1; min-width: 0;">
                            <div class="menu-action-title" style="font-weight: 600; font-size: 15px; color: #7f1d1d;">PDF Yükle</div>
                            <div class="menu-action-desc" style="font-size: 12px; color: #991b1b; margin-top: 2px; line-height: 1.4;">Menü dosyanı yükle, ürünlerini otomatik çıkar.</div>
                        </div>
                        <div class="menu-action-arrow" style="color: #ef4444; flex-shrink: 0;">${icons.chevron || '>'}</div>
                    </div>

                    <div onclick="openMenuModal('link')" class="menu-action-card menu-action-link" style="background: #f0fdf4; border: 1px solid #bbf7d0;">
                        <div class="menu-action-icon-wrap" style="background: white; color: #22c55e;">🔗</div>
                        <div class="menu-action-content" style="flex:1; min-width: 0;">
                            <div class="menu-action-title" style="font-weight: 600; font-size: 15px; color: #14532d;">Linkten Aktar</div>
                            <div class="menu-action-desc" style="font-size: 12px; color: #166534; margin-top: 2px; line-height: 1.4;">Web sitedeki menü linkini ekle, biz içe aktaralım.</div>
                        </div>
                        <div class="menu-action-arrow" style="color: #22c55e; flex-shrink: 0;">${icons.chevron || '>'}</div>
                    </div>

                    <div onclick="openMenuModal('photo')" class="menu-action-card menu-action-photo" style="background: #faf5ff; border: 1px solid #e9d5ff;">
                        <div class="menu-action-icon-wrap" style="background: white; color: #a855f7;">📸</div>
                        <div class="menu-action-content" style="flex:1; min-width: 0;">
                            <div class="menu-action-title" style="font-weight: 600; font-size: 15px; color: #581c87;">Fotoğraf Tara</div>
                            <div class="menu-action-desc" style="font-size: 12px; color: #6b21a8; margin-top: 2px; line-height: 1.4;">Menü fotoğrafını yükle, ürünleri tanıyalım.</div>
                        </div>
                        <div class="menu-action-arrow" style="color: #a855f7; flex-shrink: 0;">${icons.chevron || '>'}</div>
                    </div>

                    <div onclick="openMenuItemModal()" class="menu-action-card menu-action-item" style="background: #fffbeb; border: 1px solid #fde68a;">
                        <div class="menu-action-icon-wrap" style="background: white; color: #f59e0b;">➕</div>
                        <div class="menu-action-content" style="flex:1; min-width: 0;">
                            <div class="menu-action-title" style="font-weight: 600; font-size: 15px; color: #78350f;">Elle Ürün Gir</div>
                            <div class="menu-action-desc" style="font-size: 12px; color: #92400e; margin-top: 2px; line-height: 1.4;">Ürünlerini manuel olarak ekle, istediğin gibi düzenle.</div>
                        </div>
                        <div class="menu-action-arrow" style="color: #f59e0b; flex-shrink: 0;">${icons.chevron || '>'}</div>
                    </div>
                </div>
            </div>

            <div class="menu-categories-section">
                <div class="menu-categories-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
                    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; min-width: 0;">
                        <h2 style="margin: 0; font-size: 18px; color: var(--text); white-space: nowrap;">Menü Kategorilerin</h2>
                        <div style="position: relative; min-width: 140px;">
                            <input type="text" id="menuSearchInput" placeholder="Ürün ara..." oninput="debounceMenuSearch(event)" style="padding: 6px 12px 6px 32px; border-radius: 16px; border: 1px solid var(--border-primary); background: var(--surface-secondary); color: var(--text-primary); font-size: 13px; width: 160px; max-width: 100%; outline: none; box-sizing: border-box;">
                            <span style="position: absolute; left: 10px; top: 7px; color: var(--muted); width: 14px; height: 14px; display:flex; align-items:center;">${icons.search || '🔍'}</span>
                        </div>
                    </div>
                    <button class="outline-button" onclick="openMenuCategoryModal()" style="font-size: 13px; padding: 6px 12px; white-space: nowrap;">+ Kategori Ekle</button>
                </div>
                
                <div id="menuCategoriesContainer" style="display: flex; gap: 16px; overflow-x: auto; padding-bottom: 8px; min-height: 120px;">
                    <div class="spinner"></div>
                </div>

                <div id="menuItemsContainer" style="margin-top: 24px; display: none;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid var(--line); flex-wrap: wrap; gap: 8px;">
                        <h3 id="activeCategoryTitle" style="margin: 0; font-size: 16px; color: var(--primary-dark);">Kategori Adı</h3>
                        <button onclick="toggleAllItems()" id="toggleAllItemsBtn" class="text-button" style="font-size: 13px; color: var(--primary);">Tümünü Gör →</button>
                    </div>
                    <div id="menuItemsList" style="display: flex; gap: 12px; overflow-x: auto; padding-bottom: 8px; transition: flex-wrap 0.3s;"></div>
                </div>
            </div>

            <div class="menu-recent-section" style="margin-bottom: 40px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                    <h2 style="margin: 0; font-size: 16px; color: var(--text);">Son Eklenen Ürünler</h2>
                </div>
                <div id="menuRecentItemsContainer" style="display: flex; gap: 16px; overflow-x: auto; min-height: 80px;">
                    <div class="spinner"></div>
                </div>
            </div>
        </main>
        ${bottomNav('menu', 'business')}
    </div>`;

    await loadMenuCategories();
    await loadMenuRecentItems();
}

let menuSearchTimeout;
function debounceMenuSearch(e) {
    clearTimeout(menuSearchTimeout);
    const q = e.target.value.toLowerCase().trim();
    menuSearchTimeout = setTimeout(() => {
        if (!q) {
            document.getElementById('menuCategoriesContainer').style.display = 'flex';
            if(window.activeMenuCategory) {
                document.getElementById('menuItemsContainer').style.display = 'block';
            }
        } else {
            document.getElementById('menuCategoriesContainer').style.display = 'none';
            document.getElementById('menuItemsContainer').style.display = 'block';
            document.getElementById('activeCategoryTitle').removeAttribute('data-user-content');
            document.getElementById('activeCategoryTitle').innerText = 'Arama Sonuçları';
            document.getElementById('toggleAllItemsBtn').style.display = 'none';
            searchMenuLocally(q);
        }
    }, 300);
}

async function loadMenuCategories() {
    const container = document.getElementById('menuCategoriesContainer');
    try {
        const res = await apiCall('/api/menu/categories');
        if (!res.ok) {
            let errorMsg = "Kategoriler yüklenirken hata oluştu";
            try {
                const errData = await res.json();
                if (errData && errData.message) errorMsg = errData.message;
            } catch (_) {}
            throw new Error(errorMsg);
        }
        const data = await res.json();
        window.menuData.categories = Array.isArray(data) ? data : [];
        renderMenuCategories();
    } catch(e) {
        console.error("Menü kategorileri yükleme hatası:", e);
        if (container) {
            container.innerHTML = `
                <div style="width: 100%; text-align: center; padding: 28px 16px;">
                    <p style="margin: 0 0 10px 0; color: #ef4444; font-size: 13px; font-weight: 500;">${(e && e.message) ? e.message : 'Kategoriler yüklenirken hata oluştu.'}</p>
                    <button class="outline-button" onclick="loadMenuCategories()" style="font-size: 12px; padding: 6px 14px;">Tekrar Dene</button>
                </div>
            `;
        }
        showToast((e && e.message) ? e.message : "Kategoriler yüklenirken hata oluştu", "error");
    }
}

function renderMenuCategories() {
    const container = document.getElementById('menuCategoriesContainer');
    if(!container) return;

    if(!window.menuData.categories || window.menuData.categories.length === 0) {
        container.innerHTML = `
            <div style="width: 100%; text-align: center; padding: 40px 20px;">
                <p style="margin:0; font-weight:500; color:var(--text);">Henüz kategori oluşturmadın.</p>
                <p style="margin:4px 0 16px 0; font-size:13px; color:var(--muted);">İlk kategorini oluşturarak menünü hazırlamaya başla.</p>
                <button class="primary-button" onclick="openMenuCategoryModal()">+ İlk Kategorini Oluştur</button>
            </div>
        `;
        return;
    }

    container.innerHTML = window.menuData.categories.map(c => `
        <div class="menu-category-card ${window.activeMenuCategory === c.id ? 'active' : ''}" onclick="selectMenuCategory(${c.id})" style="flex-shrink: 0; width: 240px; height: 120px; border-radius: 12px; overflow: hidden; position: relative; cursor: pointer; border: 2px solid ${window.activeMenuCategory === c.id ? 'var(--primary)' : 'transparent'}; box-sizing: border-box; transition: transform 0.2s, box-shadow 0.2s; background: #eee;">
            <img src="${c.imageUrl || '/assets/default-category.jpg'}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlN2U1ZTQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4='" style="width: 100%; height: 100%; object-fit: cover;">
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%);"></div>
            <div style="position: absolute; bottom: 12px; left: 12px; right: 12px; display: flex; justify-content: space-between; align-items: flex-end;">
                <div data-user-content style="color: white; font-weight: 700; font-size: 16px; text-shadow: 0 1px 3px rgba(0,0,0,0.5);">${c.name}</div>
                <div style="color: rgba(255,255,255,0.9); font-size: 12px;">${c.itemCount} ürün ${icons.chevron || '>'}</div>
            </div>
            <button class="icon-button" onclick="event.stopPropagation(); openCategoryContextMenu(${c.id})" style="position: absolute; top: 8px; right: 8px; background: rgba(255,255,255,0.2); backdrop-filter: blur(4px); color: white; width: 28px; height: 28px;">⋮</button>
        </div>
    `).join('');

    if(!window.activeMenuCategory && window.menuData.categories.length > 0) {
        selectMenuCategory(window.menuData.categories[0].id);
    }
}

async function selectMenuCategory(id) {
    window.activeMenuCategory = id;
    renderMenuCategories();
    
    const cat = window.menuData.categories.find(c => c.id === id);
    if(cat) {
        document.getElementById('activeCategoryTitle').dataset.userContent = '';
        document.getElementById('activeCategoryTitle').innerText = cat.name;
        document.getElementById('menuItemsContainer').style.display = 'block';
        document.getElementById('toggleAllItemsBtn').style.display = 'block';
        document.getElementById('menuItemsList').style.flexWrap = 'nowrap';
        document.getElementById('toggleAllItemsBtn').innerText = 'Tümünü Gör →';
        
        await loadMenuItems(id);
    }
}

async function loadMenuItems(categoryId) {
    const list = document.getElementById('menuItemsList');
    if (list) list.innerHTML = '<div class="spinner"></div>';
    try {
        const res = await apiCall(`/api/menu/categories/${categoryId}/items`);
        if (!res.ok) {
            let errorMsg = "Ürünler yüklenirken hata oluştu";
            try {
                const errData = await res.json();
                if (errData && errData.message) errorMsg = errData.message;
            } catch (_) {}
            throw new Error(errorMsg);
        }
        const data = await res.json();
        window.menuData.items[categoryId] = Array.isArray(data) ? data : [];
        renderMenuItems(categoryId);
    } catch(e) {
        console.error(`Kategori (${categoryId}) ürünleri yükleme hatası:`, e);
        if (list) {
            list.innerHTML = `
                <div style="display: flex; align-items: center; gap: 10px; padding: 12px 0;">
                    <p style="color: #ef4444; font-size: 12px; margin: 0;">${(e && e.message) ? e.message : 'Ürünler yüklenemedi.'}</p>
                    <button class="text-button" onclick="loadMenuItems(${categoryId})" style="font-size: 12px; text-decoration: underline; color: var(--primary); cursor: pointer;">Tekrar dene</button>
                </div>
            `;
        }
    }
}

function renderMenuItems(categoryId) {
    const list = document.getElementById('menuItemsList');
    if(!list) return;

    const items = window.menuData.items[categoryId] || [];
    if(items.length === 0) {
        list.innerHTML = `
            <div style="width: 100%; padding: 20px 0;">
                <p style="margin:0 0 12px 0; font-size:13px; color:var(--muted);">Bu kategoride henüz ürün yok.</p>
                <button class="outline-button" onclick="openMenuItemModal(null, ${categoryId})" style="font-size:12px; padding:6px 12px;">+ Ürün Ekle</button>
            </div>
        `;
        return;
    }

    list.innerHTML = items.map(item => createMenuItemHtml(item)).join('');
}

function searchMenuLocally(query) {
    let allItems = [];
    Object.values(window.menuData.items).forEach(arr => allItems.push(...arr));
    
    // Fallback: If not all items are loaded, we might need a global search API, but let's just search loaded for now, or just show empty if not loaded.
    const filtered = allItems.filter(i => i.name.toLowerCase().includes(query));
    document.getElementById('menuItemsList').style.flexWrap = 'wrap';
    if(filtered.length === 0) {
        document.getElementById('menuItemsList').innerHTML = '<p style="font-size:13px; color:var(--muted);">Sonuç bulunamadı.</p>';
    } else {
        document.getElementById('menuItemsList').innerHTML = filtered.map(i => createMenuItemHtml(i)).join('');
    }
}

function createMenuItemHtml(item) {
    return `
        <div class="menu-item-card" onclick="openMenuItemModal(${item.id})" style="flex-shrink: 0; display: flex; align-items: center; gap: 12px; width: 220px; background: #fff; border: 1px solid var(--line); border-radius: 12px; padding: 8px; cursor: pointer; transition: all 0.2s;">
            <div style="width: 48px; height: 48px; border-radius: 8px; overflow: hidden; background: #f3f4f6; flex-shrink: 0;">
                <img src="${item.imageUrl || '/assets/default-item.jpg'}" onerror="this.style.display='none'" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="flex: 1; min-width: 0;">
                <div data-user-content style="font-weight: 600; font-size: 14px; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</div>
                <div style="font-weight: 700; font-size: 14px; color: var(--primary); margin-top: 4px;">${item.price} ₺</div>
            </div>
        </div>
    `;
}

function toggleAllItems() {
    const list = document.getElementById('menuItemsList');
    const btn = document.getElementById('toggleAllItemsBtn');
    if (list.style.flexWrap === 'wrap') {
        list.style.flexWrap = 'nowrap';
        btn.innerText = 'Tümünü Gör →';
    } else {
        list.style.flexWrap = 'wrap';
        btn.innerText = 'Daha Az Göster';
    }
}

async function loadMenuRecentItems() {
    const container = document.getElementById('menuRecentItemsContainer');
    if (!container) return;
    try {
        const res = await apiCall('/api/menu/items/recent');
        if (!res.ok) {
            let errorMsg = "Son ürünler yüklenirken hata oluştu";
            try {
                const errData = await res.json();
                if (errData && errData.message) errorMsg = errData.message;
            } catch (_) {}
            throw new Error(errorMsg);
        }
        const data = await res.json();
        const items = Array.isArray(data) ? data : [];
        window.menuData.recentItems = items;
        
        if(items.length === 0) {
            container.innerHTML = '<p style="font-size:13px; color:var(--muted); margin:0; padding:12px 0;">Henüz ürün eklenmedi.</p>';
            return;
        }
        
        container.innerHTML = items.map(i => createMenuItemHtml(i)).join('');
    } catch(e) {
        console.error("Son ürünler yükleme hatası:", e);
        container.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px; padding: 8px 0;">
                <p style="color: #ef4444; font-size: 12px; margin: 0;">${(e && e.message) ? e.message : 'Yüklenemedi.'}</p>
                <button class="text-button" onclick="loadMenuRecentItems()" style="font-size: 12px; text-decoration: underline; color: var(--primary); cursor: pointer;">Tekrar dene</button>
            </div>
        `;
    }
}

// Modals
window.openMenuModal = function(type) {
    let title, content;
    if(type === 'pdf') {
        title = "PDF Menü Yükle";
        content = `
            <div style="border: 2px dashed var(--line); border-radius: 12px; padding: 32px 16px; text-align: center; margin-bottom: 16px;">
                <div style="font-size:32px; margin-bottom:8px;">📄</div>
                <p style="margin:0 0 8px 0; font-size:14px; color:var(--text);">Sürükle bırak veya <b>Dosya Seç</b></p>
                <p style="margin:0; font-size:12px; color:var(--muted);">Sadece PDF (Maks 10 MB)</p>
                <input type="file" id="menuPdfFile" accept="application/pdf" style="display:none;" onchange="document.getElementById('pdfFileName').innerText = this.files[0] ? this.files[0].name : ''">
                <button type="button" class="outline-button" style="margin-top:16px;" onclick="document.getElementById('menuPdfFile').click()">Dosya Seç</button>
                <div id="pdfFileName" data-user-content style="margin-top:12px; font-size:13px; font-weight:600; color:var(--primary);"></div>
            </div>
        `;
    } else if (type === 'link') {
        title = "Menü Linki Ekle";
        content = `
            <div class="form-group" style="margin-bottom:16px;">
                <label>Web Sitesi veya Menü Linki</label>
                <input type="url" id="menuLinkUrl" placeholder="https://..." class="form-input">
            </div>
        `;
    } else if (type === 'photo') {
        title = "Menü Fotoğrafı Yükle";
        content = `
            <div style="border: 2px dashed var(--line); border-radius: 12px; padding: 32px 16px; text-align: center; margin-bottom: 16px;">
                <div style="font-size:32px; margin-bottom:8px;">📸</div>
                <p style="margin:0 0 8px 0; font-size:14px; color:var(--text);">Sürükle bırak veya <b>Dosya Seç</b></p>
                <p style="margin:0; font-size:12px; color:var(--muted);">JPG, PNG, WEBP (Birden fazla seçilebilir)</p>
                <input type="file" id="menuPhotoFiles" accept="image/jpeg, image/png, image/webp" multiple style="display:none;" onchange="document.getElementById('photoFilesCount').innerText = this.files.length + ' dosya seçildi'">
                <button type="button" class="outline-button" style="margin-top:16px;" onclick="document.getElementById('menuPhotoFiles').click()">Dosya Seç</button>
                <div id="photoFilesCount" style="margin-top:12px; font-size:13px; font-weight:600; color:var(--primary);"></div>
            </div>
        `;
    }

    const modalId = `menuSourceModal_${Date.now()}`;
    const modalHtml = `
        <div id="${modalId}" class="modal-overlay" style="display:flex;">
            <div class="modal-content" style="max-width: 400px;">
                <h3 style="margin-top:0;">${title}</h3>
                ${content}
                <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:24px;">
                    <button class="text-button" onclick="document.getElementById('${modalId}').remove()">İptal</button>
                    <button class="primary-button" onclick="submitMenuSource('${type}', '${modalId}')">Yükle</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

window.submitMenuSource = async function(type, modalId) {
    try {
        if(type === 'pdf') {
            const file = document.getElementById('menuPdfFile').files[0];
            if(!file) return showToast('Lütfen bir PDF dosyası seçin.', 'error');
            const fd = new FormData(); fd.append('file', file);
            await apiCall('/api/menu/upload-pdf', { method: 'POST', body: fd }, false);
            showToast('Menü dosyan başarıyla yüklendi.', 'success');
        } else if (type === 'link') {
            const url = document.getElementById('menuLinkUrl').value;
            if(!url) return showToast('Lütfen link girin.', 'error');
            await apiCall('/api/menu/import-link', { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({url}) });
            showToast('Menü linkin başarıyla kaydedildi.', 'success');
        } else if (type === 'photo') {
            const files = document.getElementById('menuPhotoFiles').files;
            if(files.length === 0) return showToast('Lütfen fotoğraf seçin.', 'error');
            const fd = new FormData();
            for(let i=0; i<files.length; i++) fd.append('files', files[i]);
            await apiCall('/api/menu/upload-images', { method: 'POST', body: fd }, false);
            showToast('Menü fotoğrafların başarıyla yüklendi.', 'success');
        }
        document.getElementById(modalId).remove();
    } catch(e) {
        showToast('Bir hata oluştu.', 'error');
    }
}

window.openMenuCategoryModal = function(categoryId = null) {
    const cat = categoryId ? window.menuData.categories.find(c => c.id === categoryId) : null;
    const modalId = `categoryModal_${Date.now()}`;
    const modalHtml = `
        <div id="${modalId}" class="modal-overlay" style="display:flex;">
            <div class="modal-content" style="max-width: 400px;">
                <h3 style="margin-top:0;">${cat ? 'Kategori Düzenle' : 'Yeni Kategori Ekle'}</h3>
                <div class="form-group" style="margin-bottom:12px;">
                    <label>Kategori Adı *</label>
                    <input type="text" id="catName" class="form-input" value="${cat ? cat.name : ''}">
                </div>
                <div class="form-group" style="margin-bottom:16px;">
                    <label>Kategori Fotoğrafı (Opsiyonel)</label>
                    <input type="file" id="catImage" class="form-input" accept="image/*">
                </div>
                <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:24px;">
                    <button class="text-button" onclick="document.getElementById('${modalId}').remove()">İptal</button>
                    <button class="primary-button" onclick="saveMenuCategory(${categoryId || 'null'}, '${modalId}')">Kategoriyi Kaydet</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

window.saveMenuCategory = async function(id, modalId) {
    const name = document.getElementById('catName').value;
    if(!name) return showToast('Kategori adı zorunludur.', 'error');
    
    const file = document.getElementById('catImage').files[0];
    const fd = new FormData();
    fd.append('name', name);
    if(file) fd.append('image', file);

    try {
        const url = id ? `/api/menu/categories/${id}` : '/api/menu/categories';
        const method = id ? 'PUT' : 'POST';
        const res = await apiCall(url, { method, body: fd }, false);
        if(!res.ok) throw new Error();
        showToast(id ? 'Kategori güncellendi.' : 'Kategori başarıyla oluşturuldu.', 'success');
        document.getElementById(modalId).remove();
        loadMenuCategories();
    } catch(e) {
        showToast('Bir hata oluştu.', 'error');
    }
}

window.openCategoryContextMenu = function(categoryId) {
    if(confirm(window.yerbulI18n?.businessText('Kategoriyi silmek istediğine emin misin? (İçindeki ürünlerle birlikte silinmeyebilir)') || 'Kategoriyi silmek istediğine emin misin? (İçindeki ürünlerle birlikte silinmeyebilir)')) {
        apiCall(`/api/menu/categories/${categoryId}`, { method: 'DELETE' })
        .then(async res => {
            const data = await res.json();
            if(!res.ok) {
                showToast(data.message || 'Kategori silinemedi.', 'error');
                return;
            }
            if(data.message && data.message.includes('ürün bulunuyor')) {
                alert(data.message);
            } else {
                showToast(data.message || 'Kategori silindi.', 'success');
                if(window.activeMenuCategory === categoryId) window.activeMenuCategory = null;
                loadMenuCategories();
            }
        })
        .catch(() => showToast('Bir hata oluştu.', 'error'));
    }
}

window.openMenuItemModal = function(itemId = null, prefillCategoryId = null) {
    if(window.menuData.categories.length === 0) {
        return showToast('Önce bir kategori oluşturmalısın.', 'error');
    }

    let item = null;
    if (itemId) {
        // Find item in loaded arrays
        Object.values(window.menuData.items).forEach(arr => {
            const found = arr.find(i => i.id === itemId);
            if (found) item = found;
        });
        if(!item) item = window.menuData.recentItems.find(i => i.id === itemId);
    }

    const catId = item ? item.categoryId : (prefillCategoryId || window.activeMenuCategory || window.menuData.categories[0].id);

    const catOptions = window.menuData.categories.map(c => `<option data-user-content value="${c.id}" ${c.id === catId ? 'selected' : ''}>${c.name}</option>`).join('');

    const modalId = `itemModal_${Date.now()}`;
    const modalHtml = `
        <div id="${modalId}" class="modal-overlay" style="display:flex;">
            <div class="modal-content" style="max-width: 400px; width:100%;">
                <h3 style="margin-top:0;">${item ? 'Ürün Düzenle' : 'Yeni Ürün Ekle'}</h3>
                <div class="form-group" style="margin-bottom:12px;">
                    <label>Ürün Adı *</label>
                    <input type="text" id="itemName" class="form-input" value="${item ? item.name : ''}">
                </div>
                <div class="form-group" style="margin-bottom:12px;">
                    <label>Kategori *</label>
                    <select id="itemCatId" class="form-input">
                        ${catOptions}
                    </select>
                </div>
                <div class="form-group" style="margin-bottom:12px;">
                    <label>Fiyat (₺) *</label>
                    <input type="number" id="itemPrice" class="form-input" step="0.01" min="0" value="${item ? item.price : ''}">
                </div>
                <div class="form-group" style="margin-bottom:12px;">
                    <label>Ürün Fotoğrafı</label>
                    <input type="file" id="itemImage" class="form-input" accept="image/*">
                </div>
                <div class="form-group" style="margin-bottom:16px;">
                    <label>Açıklama (Opsiyonel)</label>
                    <textarea id="itemDesc" data-user-content class="form-input" rows="2">${item ? (item.description || '') : ''}</textarea>
                </div>
                <div class="form-group" style="margin-bottom:16px;">
                    <label style="display:flex; align-items:center; gap:8px;">
                        <input type="checkbox" id="itemActive" ${item ? (item.isActive ? 'checked' : '') : 'checked'}> Aktif
                    </label>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:24px;">
                    ${item ? `<button class="text-button" style="color:red;" onclick="deleteMenuItem(${item.id}, '${modalId}')">Sil</button>` : '<div></div>'}
                    <div style="display:flex; gap:8px;">
                        <button class="text-button" onclick="document.getElementById('${modalId}').remove()">İptal</button>
                        <button class="primary-button" onclick="saveMenuItem(${itemId || 'null'}, '${modalId}')">${item ? 'Değişiklikleri Kaydet' : 'Ürünü Kaydet'}</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

window.saveMenuItem = async function(id, modalId) {
    const name = document.getElementById('itemName').value;
    const catId = document.getElementById('itemCatId').value;
    const price = document.getElementById('itemPrice').value;
    const desc = document.getElementById('itemDesc').value;
    const isActive = document.getElementById('itemActive').checked;
    
    if(!name || !price) return showToast('Lütfen zorunlu alanları doldurun.', 'error');
    if(price <= 0) return showToast('Fiyat 0 veya daha az olamaz.', 'error');

    const file = document.getElementById('itemImage').files[0];
    const fd = new FormData();
    fd.append('name', name);
    fd.append('categoryId', catId);
    fd.append('price', price);
    if(desc) fd.append('description', desc);
    fd.append('isActive', isActive);
    if(file) fd.append('image', file);

    try {
        const url = id ? `/api/menu/items/${id}` : '/api/menu/items';
        const method = id ? 'PUT' : 'POST';
        const res = await apiCall(url, { method, body: fd }, false);
        if(!res.ok) {
            const err = await res.json();
            throw new Error(err.message || 'Hata');
        }
        showToast(id ? 'Ürün güncellendi.' : 'Ürün başarıyla eklendi.', 'success');
        document.getElementById(modalId).remove();
        
        // Reload category items
        if(window.activeMenuCategory == catId) {
            await loadMenuItems(catId);
        }
        loadMenuCategories(); // to update counts
        loadMenuRecentItems();
    } catch(e) {
        showToast(e.message || 'Bir hata oluştu.', 'error');
    }
}

window.deleteMenuItem = async function(id, modalId) {
    if(confirm(window.yerbulI18n?.businessText('Bu ürünü silmek istediğine emin misin?\nBu işlem geri alınamaz.') || 'Bu ürünü silmek istediğine emin misin?\nBu işlem geri alınamaz.')) {
        try {
            await apiCall(`/api/menu/items/${id}`, { method: 'DELETE' });
            showToast('Ürün silindi.', 'success');
            document.getElementById(modalId).remove();
            
            if(window.activeMenuCategory) {
                await loadMenuItems(window.activeMenuCategory);
            }
            loadMenuCategories(); // to update counts
            loadMenuRecentItems();
        } catch(e) {
            showToast('Bir hata oluştu.', 'error');
        }
    }
}


let myCampaigns = [];

function ownerCampaignStatus(status) {
    return {
        Active: { label: 'Aktif', color: '#10b981' },
        Upcoming: { label: 'Yakında', color: '#3b82f6' },
        Finished: { label: 'Tamamlandı', color: '#64748b' },
        Passive: { label: 'Pasif', color: '#f59e0b' },
        Draft: { label: 'Taslak', color: '#8b5cf6' }
    }[status] || { label: 'Taslak', color: '#8b5cf6' };
}

async function fetchMyCampaigns() {
    try {
        const res = await fetch('/api/campaigns/my', { headers: getAuthHeaders(), credentials: 'same-origin' });
        if (res.ok) {
            myCampaigns = await res.json();
            return myCampaigns;
        }
    } catch (e) { console.error("Error fetching my campaigns", e); }
    return [];
}

async function renderBusinessCampaigns() {
    await fetchMyCampaigns();
    
    let activeCampaigns = myCampaigns.filter(c => c.status === "Active");
    let upcomingCampaigns = myCampaigns.filter(c => c.status === "Upcoming");
    let finishedCampaigns = myCampaigns.filter(c => c.status === "Finished");
    let passiveCampaigns = myCampaigns.filter(c => c.status === "Passive");
    let draftCampaigns = myCampaigns.filter(c => c.status === "Draft");
    let totalViews = myCampaigns.reduce((sum, c) => sum + (c.viewCount || 0), 0);

    let recentCampaigns = [];
    if (activeCampaigns.length > 0) recentCampaigns.push(activeCampaigns[0]);
    if (upcomingCampaigns.length > 0) recentCampaigns.push(upcomingCampaigns[0]);
    if (finishedCampaigns.length > 0) recentCampaigns.push(finishedCampaigns[0]);
    if (recentCampaigns.length < 3 && passiveCampaigns.length > 0) recentCampaigns.push(passiveCampaigns[0]);
    if (recentCampaigns.length < 3 && draftCampaigns.length > 0) recentCampaigns.push(draftCampaigns[0]);
    
    // If we don't have exactly 3, just take first 3 from all
    if (recentCampaigns.length < 3) {
        recentCampaigns = [...new Set([...recentCampaigns, ...myCampaigns])].slice(0, 3);
    }

    const campaignSummaryHtml = recentCampaigns.length > 0 
        ? recentCampaigns.map(c => `
            <div class="campaign-summary-card" style="position: relative; border-radius: 12px; overflow: hidden; background: var(--surface-primary); box-shadow: 0 4px 6px var(--shadow-color, rgba(0,0,0,0.05)); border: 1px solid var(--border-primary); display: flex; flex-direction: column;">
                <div style="height: 140px; background-image: url('${safeCampaignImageUrl(c.imageUrl)}'); background-size: cover; background-position: center; background-color: var(--surface-secondary); position: relative;">
                    <div style="position: absolute; top: 12px; left: 12px; background: ${ownerCampaignStatus(c.status).color}; color: white; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 600; display: flex; align-items: center; gap: 4px;">
                        <div style="width: 6px; height: 6px; background: white; border-radius: 50%;"></div>
                        ${ownerCampaignStatus(c.status).label}
                    </div>
                    ${c.badgeText ? `<div data-user-content style="position: absolute; top: 12px; right: 12px; background: #f43f5e; color: white; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 600;">${campaignText(c.badgeText)}</div>` : ''}
                </div>
                <div style="padding: 16px; flex: 1; display: flex; flex-direction: column;">
                    <h3 data-user-content style="margin: 0 0 6px 0; font-size: 16px; font-weight: 600; color: var(--text-primary);">${campaignText(c.title)}</h3>
                    <p data-user-content style="margin: 0 0 12px 0; font-size: 13px; color: var(--text-secondary); line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${campaignText(c.description)}</p>
                    <div style="margin-top: auto; display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-muted); margin-bottom: 12px;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        <span data-business-date="${escapeUiHtml(c.startDate)}"></span> - <span data-business-date="${escapeUiHtml(c.endDate)}"></span>
                    </div>
                    <div style="display: flex; gap: 16px; border-top: 1px solid var(--border-primary); padding-top: 12px;">
                        <div style="display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--text-primary); font-weight: 500;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--text-muted);"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            <div><span data-business-number="${Number(c.viewCount) || 0}"></span><div style="font-size: 10px; color: var(--text-muted); font-weight: 400;">Görüntülenme</div></div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--text-primary); font-weight: 500;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--text-muted);"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                            <div><span data-business-number="${Number(c.usageCount) || 0}"></span><div style="font-size: 10px; color: var(--text-muted); font-weight: 400;">Kupon Kullanımı</div></div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('')
        : `<div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: var(--surface-secondary); border-radius: 12px; border: 1px dashed var(--border-primary); color: var(--text-muted);">
            Henüz kampanya oluşturmadınız.<br>
            <button class="primary-button" onclick="openCampaignFormModal()" style="margin-top: 16px; padding: 8px 16px; border-radius: 8px;">Yeni Kampanya Oluştur</button>
           </div>`;

    app.innerHTML = `<div class="app-shell" style="background: var(--bg-primary); min-height: 100vh;">
        ${topbar()}
        <main class="content-page" style="padding: 24px; max-width: 1200px; margin: 0 auto; padding-bottom: 100px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; background: var(--surface-primary); border: 1px solid var(--border-primary); padding: 20px 24px; border-radius: 16px; box-shadow: 0 1px 3px var(--shadow-color, rgba(0,0,0,0.05));">
                <div style="display: flex; gap: 16px; align-items: center;">
                    <div style="width: 48px; height: 48px; background: #6366f1; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                    </div>
                    <div>
                        <h1 style="margin: 0 0 4px 0; font-size: 24px; color: var(--text-primary);">Kampanyalar</h1>
                        <p style="margin: 0; color: var(--text-muted); font-size: 14px;">İşletmenizi öne çıkaracak kampanyalar oluşturun ve yönetin.</p>
                    </div>
                </div>
                <button class="primary-button" onclick="openCampaignFormModal()" style="background: #6366f1; border: none; padding: 12px 24px; border-radius: 8px; color: white; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 6px rgba(99, 102, 241, 0.2);">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    Yeni Kampanya
                </button>
            </div>

            <!-- 4 Summary Cards -->
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px;">
                <div style="background: rgba(16, 185, 129, 0.12); padding: 20px; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.3); display: flex; align-items: center; gap: 16px;">
                    <div style="width: 40px; height: 40px; background: rgba(16, 185, 129, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #34d399; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon></svg></div>
                    <div>
                        <div data-business-number="${activeCampaigns.length}" style="font-size: 24px; font-weight: 700; color: #34d399; line-height: 1;"></div>
                        <div style="font-size: 14px; font-weight: 600; color: #34d399; margin-top: 4px;">Aktif Kampanyalar</div>
                        <div style="font-size: 11px; color: #34d399; opacity: 0.8;">Şu anda yayında</div>
                    </div>
                </div>
                <div style="background: rgba(59, 130, 246, 0.12); padding: 20px; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.3); display: flex; align-items: center; gap: 16px;">
                    <div style="width: 40px; height: 40px; background: rgba(59, 130, 246, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #60a5fa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
                    <div>
                        <div data-business-number="${upcomingCampaigns.length}" style="font-size: 24px; font-weight: 700; color: #60a5fa; line-height: 1;"></div>
                        <div style="font-size: 14px; font-weight: 600; color: #60a5fa; margin-top: 4px;">Yaklaşan Kampanyalar</div>
                        <div style="font-size: 11px; color: #60a5fa; opacity: 0.8;">Yakında başlayacak</div>
                    </div>
                </div>
                <div style="background: var(--surface-primary); padding: 20px; border-radius: 12px; border: 1px solid var(--border-primary); display: flex; align-items: center; gap: 16px;">
                    <div style="width: 40px; height: 40px; background: var(--surface-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--text-muted); box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
                    <div>
                        <div data-business-number="${finishedCampaigns.length}" style="font-size: 24px; font-weight: 700; color: var(--text-muted); line-height: 1;"></div>
                        <div style="font-size: 14px; font-weight: 600; color: var(--text-muted); margin-top: 4px;">Biten Kampanyalar</div>
                        <div style="font-size: 11px; color: var(--text-muted); opacity: 0.8;">Tamamlanan kampanyalar</div>
                    </div>
                </div>
                <div style="background: rgba(67, 190, 219, 0.12); padding: 20px; border-radius: 12px; border: 1px solid rgba(67, 190, 219, 0.3); display: flex; align-items: center; gap: 16px;">
                    <div style="width: 40px; height: 40px; background: rgba(67, 190, 219, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--accent-primary); box-shadow: 0 2px 4px rgba(0,0,0,0.05);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></div>
                    <div>
                        <div data-business-number="${totalViews}" style="font-size: 24px; font-weight: 700; color: var(--accent-primary); line-height: 1;"></div>
                        <div style="font-size: 14px; font-weight: 600; color: var(--accent-primary); margin-top: 4px;">Toplam Görüntülenme</div>
                        <div style="font-size: 11px; color: var(--accent-primary); opacity: 0.8;">Tüm kampanyalarınız</div>
                    </div>
                </div>
            </div>

            <!-- Status Buttons to Open Modals -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 16px; margin-bottom: 32px;">
                <button onclick="openCampaignListModal('Active')" style="background: var(--surface-primary); border: 1px solid var(--border-primary); padding: 16px; border-radius: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 12px; font-size: 16px; font-weight: 600; color: var(--text-primary); transition: all 0.2s; box-shadow: 0 1px 2px var(--shadow-color, rgba(0,0,0,0.05));" onmouseover="this.style.borderColor='var(--accent-primary)'" onmouseout="this.style.borderColor='var(--border-primary)'">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon></svg>
                    Aktif Kampanyalar (${activeCampaigns.length})
                </button>
                <button onclick="openCampaignListModal('Upcoming')" style="background: var(--surface-primary); border: 1px solid var(--border-primary); padding: 16px; border-radius: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 12px; font-size: 16px; font-weight: 600; color: var(--text-primary); transition: all 0.2s; box-shadow: 0 1px 2px var(--shadow-color, rgba(0,0,0,0.05));" onmouseover="this.style.borderColor='var(--accent-primary)'" onmouseout="this.style.borderColor='var(--border-primary)'">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    Yaklaşan Kampanyalar (${upcomingCampaigns.length})
                </button>
                <button onclick="openCampaignListModal('Finished')" style="background: var(--surface-primary); border: 1px solid var(--border-primary); padding: 16px; border-radius: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 12px; font-size: 16px; font-weight: 600; color: var(--text-primary); transition: all 0.2s; box-shadow: 0 1px 2px var(--shadow-color, rgba(0,0,0,0.05));" onmouseover="this.style.borderColor='var(--accent-primary)'" onmouseout="this.style.borderColor='var(--border-primary)'">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--text-muted);"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    Biten Kampanyalar (${finishedCampaigns.length})
                </button>
                <button onclick="openCampaignListModal('Passive')" style="background: var(--surface-primary); border: 1px solid var(--border-primary); padding: 16px; border-radius: 12px; cursor: pointer; font-size: 16px; font-weight: 600; color: var(--text-primary);">
                    Pasif Kampanyalar (${passiveCampaigns.length})
                </button>
                <button onclick="openCampaignListModal('Draft')" style="background: var(--surface-primary); border: 1px solid var(--border-primary); padding: 16px; border-radius: 12px; cursor: pointer; font-size: 16px; font-weight: 600; color: var(--text-primary);">
                    Taslak Kampanyalar (${draftCampaigns.length})
                </button>
            </div>

            <!-- Campaign Summary -->
            <div style="background: var(--surface-primary); border: 1px solid var(--border-primary); border-radius: 16px; padding: 24px; box-shadow: 0 1px 3px var(--shadow-color, rgba(0,0,0,0.05));">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                    <div>
                        <h2 style="margin: 0 0 4px 0; font-size: 20px; color: var(--text-primary);">Kampanya Özetin</h2>
                        <p style="margin: 0; color: var(--text-muted); font-size: 14px;">Son kampanyalarınızdan bazıları.</p>
                    </div>
                    ${myCampaigns.length > 0 ? `<button onclick="openCampaignListModal('All')" style="background: var(--surface-secondary); border: 1px solid var(--border-primary); padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: 600; color: var(--text-primary); cursor: pointer; display: flex; align-items: center; gap: 6px;">Tümünü Gör <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button>` : ''}
                </div>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
                    ${campaignSummaryHtml}
                </div>
            </div>

        </main>
        ${bottomNav("campaigns", "business")}
    </div>`;

    bindGlobalActions();
}

// Global modal reference to prevent scrolling behind
let activeModals = [];

function createModalLayout(title, content, width = "600px", description = "") {
    const modal = document.createElement("div");
    modal.className = "modal-overlay";
    modal.style.cssText = "position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; z-index: 9999; opacity: 0; transition: opacity 0.2s;";
    
    modal.innerHTML = `
        <div class="modal-content" style="background: var(--surface-primary, #ffffff); color: var(--text-primary, #0f172a); border: 1px solid var(--border-primary, #e2e8f0); width: 100%; max-width: ${width}; max-height: 90vh; border-radius: 16px; box-shadow: 0 20px 25px -5px var(--shadow-color, rgba(0,0,0,0.15)); display: flex; flex-direction: column; overflow: hidden; transform: scale(0.95); transition: transform 0.2s;">
            <div style="padding: 20px 24px; border-bottom: 1px solid var(--border-primary, #e2e8f0); display: flex; justify-content: space-between; align-items: flex-start; background: var(--surface-secondary, #f8fafc);">
                <div>
                    <h2 style="margin: 0 0 4px 0; font-size: 18px; color: var(--text-primary, #0f172a);">${title}</h2>
                    ${description ? `<p style="margin: 0; font-size: 13px; color: var(--text-muted, #64748b);">${description}</p>` : ''}
                </div>
                <button class="modal-close" style="background: transparent; border: none; font-size: 20px; color: var(--text-muted, #64748b); cursor: pointer; padding: 4px;">&times;</button>
            </div>
            <div style="padding: 24px; overflow-y: auto; flex: 1;">
                ${content}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";
    activeModals.push(modal);

    setTimeout(() => {
        modal.style.opacity = "1";
        modal.querySelector('.modal-content').style.transform = "scale(1)";
    }, 10);

    const closeFn = () => {
        modal.style.opacity = "0";
        modal.querySelector('.modal-content').style.transform = "scale(0.95)";
        setTimeout(() => {
            modal.remove();
            activeModals.pop();
            if (activeModals.length === 0) document.body.style.overflow = "";
        }, 200);
    };

    modal.querySelector('.modal-close').addEventListener('click', closeFn);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeFn(); });

    return { modal, closeFn };
}

function openCampaignListModal(statusParam) {
    let list = myCampaigns;
    let title = "Tüm Kampanyalar";
    let desc = "İşletmenize ait tüm kampanyalar.";

    if (statusParam === "Active") {
        list = myCampaigns.filter(c => c.status === "Active");
        title = "Aktif Kampanyalar";
        desc = "Şu anda yayında olan kampanyalarınız.";
    } else if (statusParam === "Upcoming") {
        list = myCampaigns.filter(c => c.status === "Upcoming");
        title = "Yaklaşan Kampanyalar";
        desc = "Henüz başlamamış, yakında yayına girecek kampanyalarınız.";
    } else if (statusParam === "Finished") {
        list = myCampaigns.filter(c => c.status === "Finished");
        title = "Biten Kampanyalar";
        desc = "Süresi dolmuş kampanyalarınız.";
    } else if (statusParam === "Passive") {
        list = myCampaigns.filter(c => c.status === "Passive");
        title = "Pasif Kampanyalar";
        desc = "Yayından kaldırdığınız kampanyalar.";
    } else if (statusParam === "Draft") {
        list = myCampaigns.filter(c => c.status === "Draft");
        title = "Taslak Kampanyalar";
        desc = "Henüz yayınlamadığınız kampanyalar.";
    }

    let contentHtml = "";
    if (list.length === 0) {
        contentHtml = `<div style="text-align: center; padding: 40px; color: var(--text-muted, #64748b);">${statusParam === 'Active' ? 'Şu anda aktif kampanyanız bulunmuyor.' : (statusParam === 'Upcoming' ? 'Yaklaşan kampanya bulunmuyor.' : (statusParam === 'Finished' ? 'Biten kampanya bulunmuyor.' : 'Kampanya bulunmuyor.'))}</div>`;
    } else {
        contentHtml = `<div style="display: flex; flex-direction: column; gap: 12px;">` + list.map(c => `
            <div style="display: flex; align-items: center; gap: 16px; border: 1px solid var(--border-primary, #e2e8f0); padding: 12px; border-radius: 12px; background: var(--surface-primary, #fff);">
                <div style="width: 80px; height: 60px; background-color: var(--surface-secondary, #f1f5f9); background-image: url('${safeCampaignImageUrl(c.imageUrl)}'); background-size: cover; background-position: center; border-radius: 8px;"></div>
                <div style="flex: 1;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                        <span style="background: ${ownerCampaignStatus(c.status).color}; color: white; padding: 2px 8px; border-radius: 12px; font-size: 10px; font-weight: 600;">${ownerCampaignStatus(c.status).label}</span>
                        <h4 data-user-content style="margin: 0; font-size: 15px; color: var(--text-primary, #1e293b);">${campaignText(c.title)}</h4>
                    </div>
                    <div style="font-size: 12px; color: var(--text-muted, #64748b);"><span data-business-date="${escapeUiHtml(c.startDate)}"></span> - <span data-business-date="${escapeUiHtml(c.endDate)}"></span></div>
                </div>
                <div style="display: flex; gap: 8px;">
                    <button onclick="openCampaignFormModal(${c.id})" style="background: var(--surface-secondary, #f1f5f9); border: 1px solid var(--border-primary, transparent); color: var(--accent-primary, #3b82f6); width: 32px; height: 32px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s;" title="Düzenle"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></button>
                    <button onclick="confirmCampaignDelete(${c.id})" style="background: var(--danger-background, #fff1f2); border: 1px solid var(--border-primary, transparent); color: var(--danger-text, #e11d48); width: 32px; height: 32px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s;" title="Sil"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
                </div>
            </div>
        `).join('') + `</div>`;
    }

    const footer = `<div style="margin-top: 24px; text-align: right;"><button class="outline-button" onclick="this.closest('.modal-overlay').querySelector('.modal-close').click()" style="padding: 8px 16px;">Kapat</button></div>`;
    
    createModalLayout(title, contentHtml + footer, "700px", desc).modal.classList.add('campaign-list-modal');
}

function confirmCampaignDelete(id) {
    const content = `
        <div style="text-align: center; padding: 16px 0;">
            <div style="width: 64px; height: 64px; background: var(--danger-background, #fff1f2); color: var(--danger-text, #e11d48); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto;">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            </div>
            <h3 style="margin: 0 0 8px 0; font-size: 18px; color: var(--text-primary, #0f172a);">Kampanya silinsin mi?</h3>
            <p style="margin: 0; color: var(--text-muted, #64748b); font-size: 14px;">Bu işlem geri alınamaz.</p>
        </div>
        <div style="display: flex; gap: 12px; justify-content: center; margin-top: 24px;">
            <button class="outline-button" onclick="this.closest('.modal-overlay').querySelector('.modal-close').click()" style="flex: 1; padding: 10px;">Vazgeç</button>
            <button class="primary-button" onclick="executeDeleteCampaign(${id}, this)" style="flex: 1; padding: 10px; background: #e11d48; border-color: #e11d48;">Sil</button>
        </div>
    `;
    createModalLayout("Silme Onayı", content, "400px");
}

async function executeDeleteCampaign(id, btn) {
    btn.disabled = true;
    btn.textContent = "Siliniyor...";
    try {
        const res = await fetch('/api/campaigns/' + id, {
            method: 'DELETE',
            headers: getAuthHeaders(),
            credentials: 'same-origin'
        });
        if (res.ok) {
            showToast("Kampanya başarıyla silindi", "success");
            btn.closest('.modal-overlay').querySelector('.modal-close').click();
            // close any open list modals
            activeModals.forEach(m => {
                if (m.classList.contains('campaign-list-modal')) {
                    m.querySelector('.modal-close').click();
                }
            });
            renderBusinessCampaigns(); // Refresh page without reload
        } else {
            showToast("Silme işlemi başarısız", "error");
            btn.disabled = false;
            btn.textContent = "Sil";
        }
    } catch (e) {
        console.error(e);
        showToast("Bir hata oluştu", "error");
        btn.disabled = false;
        btn.textContent = "Sil";
    }
}

function openCampaignFormModal(id = null) {
    const isEdit = id !== null;
    const campaign = isEdit ? myCampaigns.find(c => c.id === id) : {};
    const isPublished = !isEdit || (campaign.publicationStatus === 'published' && campaign.isActive === true);
    
    // Format dates for input[type=date]
    let startDateStr = "";
    let endDateStr = "";
    if (campaign.startDate) {
        const d = new Date(campaign.startDate);
        startDateStr = d.toISOString().split('T')[0];
    }
    if (campaign.endDate) {
        const d = new Date(campaign.endDate);
        endDateStr = d.toISOString().split('T')[0];
    }

    const formHtml = `
        <form id="campaignForm" onsubmit="submitCampaignForm(event, ${id === null ? 'null' : Number(id)})">
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div>
                    <label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-secondary, #334155); margin-bottom: 6px;">Kampanya Adı *</label>
                    <input type="text" name="title" required value="${campaignText(campaign.title)}" class="form-input" style="width: 100%; padding: 10px 12px; border: 1px solid var(--input-border, #cbd5e1); background: var(--input-background, #ffffff); color: var(--text-primary, #0f172a); border-radius: 8px; font-size: 14px;">
                </div>
                <div>
                    <label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-secondary, #334155); margin-bottom: 6px;">Açıklama</label>
                    <textarea name="description" data-user-content rows="3" class="form-input" style="width: 100%; padding: 10px 12px; border: 1px solid var(--input-border, #cbd5e1); background: var(--input-background, #ffffff); color: var(--text-primary, #0f172a); border-radius: 8px; font-size: 14px;">${campaignText(campaign.description)}</textarea>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-secondary, #334155); margin-bottom: 6px;">Kampanya Türü</label>
                        <select name="campaignType" class="form-input" style="width: 100%; padding: 10px 12px; border: 1px solid var(--input-border, #cbd5e1); background: var(--input-background, #ffffff); color: var(--text-primary, #0f172a); border-radius: 8px; font-size: 14px;">
                            <option value="Discount" ${campaign.campaignType === 'Discount' ? 'selected' : ''}>İndirim</option>
                            <option value="SpecialMenu" ${campaign.campaignType === 'SpecialMenu' ? 'selected' : ''}>Özel Menü</option>
                            <option value="Buy1Get1" ${campaign.campaignType === 'Buy1Get1' ? 'selected' : ''}>2 Al 1 Öde</option>
                            <option value="Coupon" ${campaign.campaignType === 'Coupon' ? 'selected' : ''}>Kupon</option>
                            <option value="Other" ${campaign.campaignType === 'Other' ? 'selected' : ''}>Diğer</option>
                        </select>
                    </div>
                    <div>
                        <label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-secondary, #334155); margin-bottom: 6px;">Etiket (Örn: %20 İndirim)</label>
                        <input type="text" name="badgeText" value="${campaignText(campaign.badgeText)}" class="form-input" style="width: 100%; padding: 10px 12px; border: 1px solid var(--input-border, #cbd5e1); background: var(--input-background, #ffffff); color: var(--text-primary, #0f172a); border-radius: 8px; font-size: 14px;">
                    </div>
                </div>
                <div>
                    <label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-secondary, #334155); margin-bottom: 6px;">İndirim Oranı (%)</label>
                    <input type="number" name="discountRate" min="0" max="100" value="${campaign.discountRate || ''}" class="form-input" style="width: 100%; padding: 10px 12px; border: 1px solid var(--input-border, #cbd5e1); background: var(--input-background, #ffffff); color: var(--text-primary, #0f172a); border-radius: 8px; font-size: 14px;">
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-secondary, #334155); margin-bottom: 6px;">Başlangıç Tarihi *</label>
                        <input type="date" name="startDate" required value="${startDateStr}" class="form-input" style="width: 100%; padding: 10px 12px; border: 1px solid var(--input-border, #cbd5e1); background: var(--input-background, #ffffff); color: var(--text-primary, #0f172a); border-radius: 8px; font-size: 14px;">
                    </div>
                    <div>
                        <label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-secondary, #334155); margin-bottom: 6px;">Bitiş Tarihi *</label>
                        <input type="date" name="endDate" required value="${endDateStr}" class="form-input" style="width: 100%; padding: 10px 12px; border: 1px solid var(--input-border, #cbd5e1); background: var(--input-background, #ffffff); color: var(--text-primary, #0f172a); border-radius: 8px; font-size: 14px;">
                    </div>
                </div>
                <div>
                    <label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-secondary, #334155); margin-bottom: 6px;">Görsel Yükle (Zorunlu Değil)</label>
                    <input type="file" name="image" accept=".jpg,.jpeg,.png,.webp" class="form-input" style="width: 100%; padding: 8px; border: 1px dashed var(--input-border, #cbd5e1); background: var(--input-background, #ffffff); color: var(--text-primary, #0f172a); border-radius: 8px; font-size: 13px;">
                    ${campaign.imageUrl ? `<div style="margin-top: 8px; font-size: 12px; color: var(--text-muted, #64748b);">Mevcut görsel yüklü. Değiştirmek isterseniz yeni dosya seçin.</div>` : ''}
                </div>
                <div style="display: flex; align-items: center; gap: 8px; margin-top: 8px;">
                    <input type="checkbox" name="isActive" id="isActiveCheck" ${isPublished ? 'checked' : ''} style="width: 16px; height: 16px; cursor: pointer;">
                    <label for="isActiveCheck" style="font-size: 14px; font-weight: 500; color: var(--text-secondary, #334155); cursor: pointer;">Kampanyayı yayınla</label>
                </div>
            </div>
            <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 32px; border-top: 1px solid var(--border-primary, #e2e8f0); padding-top: 16px;">
                <button type="button" class="outline-button" onclick="this.closest('.modal-overlay').querySelector('.modal-close').click()" style="padding: 10px 20px;">İptal</button>
                <button type="submit" class="primary-button" id="campaignSubmitBtn" style="padding: 10px 24px;">${isEdit ? 'Güncelle' : 'Kaydet'}</button>
            </div>
        </form>
    `;
    createModalLayout(isEdit ? "Kampanya Düzenle" : "Yeni Kampanya Oluştur", formHtml, "550px");
}

async function submitCampaignForm(e, id) {
    e.preventDefault();
    const form = e.target;
    const btn = document.getElementById('campaignSubmitBtn');
    btn.disabled = true;
    btn.textContent = "Kaydediliyor...";

    const formData = new FormData(form);
    
    // Date validation
    const start = new Date(formData.get('startDate'));
    const end = new Date(formData.get('endDate'));
    if (start > end) {
        showToast("Başlangıç tarihi bitiş tarihinden büyük olamaz", "error");
        btn.disabled = false;
        btn.textContent = id ? "Güncelle" : "Kaydet";
        return;
    }

    // Convert checkbox to boolean value for backend if needed
    formData.set('isActive', form.querySelector('#isActiveCheck').checked);

    const isEdit = id !== null;
    const url = isEdit ? '/api/campaigns/' + id : '/api/campaigns';
    const method = isEdit ? 'PUT' : 'POST';

    try {
        const res = await fetch(url, {
            method: method,
            headers: getAuthHeaders(),
            credentials: 'same-origin',
            body: formData
        });

        if (res.ok) {
            showToast(isEdit ? "Kampanya güncellendi" : "Kampanya oluşturuldu", "success");
            btn.closest('.modal-overlay').querySelector('.modal-close').click();
            
            // if we are editing from within a list modal, close it too
            activeModals.forEach(m => {
                if (m.classList.contains('campaign-list-modal')) {
                    m.querySelector('.modal-close').click();
                }
            });

            renderBusinessCampaigns(); // Refresh page without reload
        } else {
            const errorText = await res.text();
            console.error("API Hatası:", errorText);
            let errorMessage = "İşlem başarısız";
            try {
                const data = JSON.parse(errorText);
                errorMessage = data.Message || data.title || errorMessage;
            } catch (parseErr) {
                // Not JSON
            }
            showToast(errorMessage, "error");
            btn.disabled = false;
            btn.textContent = isEdit ? "Güncelle" : "Kaydet";
        }
    } catch (err) {
        console.error("Yakalanan Hata:", err);
        showToast("Kampanya oluşturulamadı. Lütfen tekrar deneyin.", "error");
        btn.disabled = false;
        btn.textContent = isEdit ? "Güncelle" : "Kaydet";
    }
}


// ==========================================
// SEMANTIC & BACKWARD COMPATIBILITY ALIASES
// ==========================================
window.initTheme = function() { if (window.applyTheme && window.getThemePreference) window.applyTheme(window.getThemePreference()); };
window.setTheme = function(pref) { if (window.setThemePreference) window.setThemePreference(pref); };
window.renderBusinessDetail = function() { return renderBusiness(); };
window.renderBusinessMenu = function() { if (typeof renderMenu === 'function') return renderMenu(); };
