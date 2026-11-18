
    /**
     * ============================================================================
     * MODULE 1A: CUSTOM HAND-DRAWN SKETCHBOOK ICONS (SVG & CANVAS 2D)
     * ============================================================================
     */
    const SKETCH_SVG_PATHS = {
      // Resources & Food
      wood: `<rect x="5" y="11" width="22" height="10" rx="4" fill="#9c734e" stroke="#2c2c2c" stroke-width="2.2"/><ellipse cx="25" cy="16" rx="3" ry="5" fill="#d4b48c" stroke="#2c2c2c" stroke-width="2"/><path d="M9 14h10M11 18h8" stroke="#2c2c2c" stroke-width="1.5" stroke-linecap="round"/>`,
      stone: `<polygon points="6,23 9,12 17,8 25,13 26,23" fill="#b7b2a6" stroke="#2c2c2c" stroke-width="2.2" stroke-linejoin="round"/><path d="M11 18l5-4m2 5l4-3" stroke="#2c2c2c" stroke-width="1.5" stroke-linecap="round"/>`,
      flint: `<polygon points="16,5 25,24 16,27 7,24" fill="#5c626b" stroke="#2c2c2c" stroke-width="2.2" stroke-linejoin="round"/><path d="M16 5v22M11 18l5-4" stroke="#2c2c2c" stroke-width="1.5" stroke-linecap="round"/>`,
      fiber: `<path d="M16 26C14 18 9 13 6 9M16 26C16 17 16 10 16 6M16 26C18 18 23 13 26 9" fill="none" stroke="#4f772d" stroke-width="2.4" stroke-linecap="round"/><path d="M12 22h8" stroke="#2c2c2c" stroke-width="2" stroke-linecap="round"/>`,
      berries: `<path d="M9 12c4-5 10-5 14 0" fill="none" stroke="#4f772d" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="17" r="4.5" fill="#9e2a2b" stroke="#2c2c2c" stroke-width="2"/><circle cx="20" cy="17" r="4.5" fill="#9e2a2b" stroke="#2c2c2c" stroke-width="2"/><circle cx="16" cy="23" r="4.5" fill="#b53839" stroke="#2c2c2c" stroke-width="2"/>`,
      raw_meat: `<ellipse cx="15" cy="17" rx="9" ry="6.5" transform="rotate(-20 15 17)" fill="#c94a4a" stroke="#2c2c2c" stroke-width="2.2"/><path d="M22 12l5-4" stroke="#2c2c2c" stroke-width="3.2" stroke-linecap="round"/><circle cx="14" cy="17" r="2.2" fill="#fdfbf7" stroke="#2c2c2c" stroke-width="1.5"/>`,
      cooked_meat: `<ellipse cx="14" cy="17" rx="9" ry="6.5" transform="rotate(-20 14 17)" fill="#9c5a2b" stroke="#2c2c2c" stroke-width="2.2"/><path d="M21 12l6-5" stroke="#f2ece1" stroke-width="3.4" stroke-linecap="round"/><path d="M21 12l6-5" stroke="#2c2c2c" stroke-width="1.6" stroke-linecap="round"/><path d="M10 16l5 3m-2-6l4 3" stroke="#2c2c2c" stroke-width="1.5" stroke-linecap="round"/>`,
      iron_ore: `<polygon points="6,23 9,11 18,8 26,14 24,24" fill="#8f8b82" stroke="#2c2c2c" stroke-width="2.2"/><circle cx="13" cy="15" r="2.6" fill="#b35c37" stroke="#2c2c2c" stroke-width="1.4"/><circle cx="20" cy="18" r="2.4" fill="#b35c37" stroke="#2c2c2c" stroke-width="1.4"/>`,
      iron_ingot: `<polygon points="7,22 11,12 24,12 27,22" fill="#8d99ae" stroke="#2c2c2c" stroke-width="2.2" stroke-linejoin="round"/><polygon points="5,22 9,12 11,12 7,22" fill="#6c757d" stroke="#2c2c2c" stroke-width="2"/><path d="M13 16h8" stroke="#fdfbf7" stroke-width="1.6" stroke-linecap="round"/>`,
      charcoal: `<polygon points="8,22 10,12 18,9 24,14 23,23 14,25" fill="#3b3835" stroke="#2c2c2c" stroke-width="2.2"/><path d="M13 15l4 3m-5 2l3-4" stroke="#7a746c" stroke-width="1.5" stroke-linecap="round"/>`,
      alch_crystal: `<polygon points="16,4 23,13 20,27 12,27 9,13" fill="#48cae4" stroke="#2c2c2c" stroke-width="2.2" stroke-linejoin="round"/><polygon points="16,4 23,13 16,17 9,13" fill="#90e0ef" stroke="#2c2c2c" stroke-width="1.6"/><path d="M16 17v10" stroke="#2c2c2c" stroke-width="1.6"/>`,
      arrow: `<line x1="7" y1="25" x2="24" y2="8" stroke="#6f4e37" stroke-width="2.4" stroke-linecap="round"/><polygon points="26,6 19,8 24,13" fill="#5c626b" stroke="#2c2c2c" stroke-width="1.8"/><path d="M7 25l-2-4m2 4l4 2" stroke="#9e2a2b" stroke-width="2" stroke-linecap="round"/>`,

      // Tools & Weapons
      flint_axe: `<line x1="8" y1="25" x2="22" y2="11" stroke="#8c6239" stroke-width="3" stroke-linecap="round"/><polygon points="17,7 26,10 23,18 16,13" fill="#6c757d" stroke="#2c2c2c" stroke-width="2.2" stroke-linejoin="round"/>`,
      flint_pick: `<line x1="8" y1="25" x2="22" y2="11" stroke="#8c6239" stroke-width="3" stroke-linecap="round"/><path d="M13 7c6 0 11 5 12 11" fill="none" stroke="#5c626b" stroke-width="3.4" stroke-linecap="round"/><path d="M13 7c6 0 11 5 12 11" fill="none" stroke="#2c2c2c" stroke-width="1.6" stroke-linecap="round"/>`,
      wooden_spear: `<line x1="6" y1="26" x2="23" y2="9" stroke="#8c6239" stroke-width="2.8" stroke-linecap="round"/><polygon points="27,5 19,8 24,13" fill="#6c757d" stroke="#2c2c2c" stroke-width="2" stroke-linejoin="round"/>`,
      torch_item: `<line x1="9" y1="25" x2="19" y2="15" stroke="#6f4e37" stroke-width="3.4" stroke-linecap="round"/><path d="M18 15c-2-5 2-9 6-10 1 5-1 9-6 10z" fill="#f4a261" stroke="#2c2c2c" stroke-width="2"/>`,
      iron_axe: `<line x1="8" y1="25" x2="22" y2="11" stroke="#6f4e37" stroke-width="3" stroke-linecap="round"/><path d="M16 6l10 3-3 10-7-6z" fill="#adb5bd" stroke="#2c2c2c" stroke-width="2.2" stroke-linejoin="round"/>`,
      iron_pick: `<line x1="8" y1="25" x2="22" y2="11" stroke="#6f4e37" stroke-width="3" stroke-linecap="round"/><path d="M12 6c7 0 13 6 14 13" fill="none" stroke="#adb5bd" stroke-width="3.6" stroke-linecap="round"/><path d="M12 6c7 0 13 6 14 13" fill="none" stroke="#2c2c2c" stroke-width="1.6" stroke-linecap="round"/>`,
      iron_sword: `<polygon points="26,6 22,13 13,22 10,19 19,10" fill="#ced4da" stroke="#2c2c2c" stroke-width="2.1" stroke-linejoin="round"/><line x1="9" y1="16" x2="16" y2="23" stroke="#8c6239" stroke-width="3" stroke-linecap="round"/><line x1="7" y1="25" x2="11" y2="21" stroke="#2c2c2c" stroke-width="3" stroke-linecap="round"/>`,
      hunting_bow: `<path d="M10 6c11 3 15 11 12 20" fill="none" stroke="#8c6239" stroke-width="3" stroke-linecap="round"/><line x1="10" y1="6" x2="22" y2="26" stroke="#2c2c2c" stroke-width="1.4"/>`,
      alch_lantern: `<path d="M12 8h8M16 5v3" stroke="#2c2c2c" stroke-width="2.2" stroke-linecap="round"/><rect x="10" y="9" width="12" height="15" rx="4" fill="#2a9d8f" stroke="#2c2c2c" stroke-width="2.2"/><circle cx="16" cy="16.5" r="3" fill="#e9f5db"/>`,
      aether_halberd: `<line x1="6" y1="26" x2="25" y2="7" stroke="#4a4e69" stroke-width="3" stroke-linecap="round"/><path d="M18 6l9 2-2 9c-3-2-5-5-7-11z" fill="#2a9d8f" stroke="#2c2c2c" stroke-width="2.1" stroke-linejoin="round"/>`,

      // Structures
      campfire: `<path d="M16 6c4 5 6 8 4 13-2 3-6 3-8 0-2-4 1-8 4-13z" fill="#e76f51" stroke="#2c2c2c" stroke-width="2"/><line x1="7" y1="24" x2="25" y2="20" stroke="#6f4e37" stroke-width="3" stroke-linecap="round"/><line x1="7" y1="20" x2="25" y2="24" stroke="#6f4e37" stroke-width="3" stroke-linecap="round"/>`,
      wood_wall: `<rect x="6" y="8" width="20" height="16" rx="2" fill="#9c7a54" stroke="#2c2c2c" stroke-width="2.2"/><line x1="12" y1="8" x2="12" y2="24" stroke="#2c2c2c" stroke-width="1.8"/><line x1="20" y1="8" x2="20" y2="24" stroke="#2c2c2c" stroke-width="1.8"/>`,
      storage_chest: `<rect x="6" y="9" width="20" height="15" rx="3" fill="#a47148" stroke="#2c2c2c" stroke-width="2.2"/><line x1="6" y1="15" x2="26" y2="15" stroke="#2c2c2c" stroke-width="2"/><rect x="14" y="13" width="4" height="5" fill="#e9c46a" stroke="#2c2c2c" stroke-width="1.5"/>`,
      workbench: `<rect x="5" y="11" width="22" height="7" fill="#8f6544" stroke="#2c2c2c" stroke-width="2.2"/><line x1="8" y1="18" x2="8" y2="25" stroke="#2c2c2c" stroke-width="2.5"/><line x1="24" y1="18" x2="24" y2="25" stroke="#2c2c2c" stroke-width="2.5"/><rect x="9" y="7" width="7" height="4" fill="#fdfbf7" stroke="#2c2c2c" stroke-width="1.5"/>`,
      standing_torch: `<line x1="16" y1="13" x2="16" y2="27" stroke="#6f4e37" stroke-width="3.2" stroke-linecap="round"/><path d="M16 5c3 4 4 6 2 9-1.5 2-4.5 2-6 0-1.5-3 1-6 4-9z" fill="#f4a261" stroke="#2c2c2c" stroke-width="2"/>`,
      stone_wall: `<rect x="6" y="8" width="20" height="16" rx="2" fill="#b5b0a4" stroke="#2c2c2c" stroke-width="2.2"/><path d="M6 16h20M16 8v8M11 16v8M21 16v8" stroke="#2c2c2c" stroke-width="1.8"/>`,
      spike_trap: `<circle cx="16" cy="16" r="9" fill="#6c757d" stroke="#2c2c2c" stroke-width="2.2"/><path d="M16 4v5M16 23v5M4 16h5M23 16h5M8 8l3 3M21 21l3 3M24 8l-3 3M11 21l-3 3" stroke="#2c2c2c" stroke-width="2" stroke-linecap="round"/>`,
      alch_pylon: `<polygon points="11,26 13,13 19,13 21,26" fill="#9b9589" stroke="#2c2c2c" stroke-width="2.2"/><circle cx="16" cy="8" r="4" fill="#2a9d8f" stroke="#2c2c2c" stroke-width="2"/>`,

      // HUD & UI Icons
      sun: `<circle cx="16" cy="16" r="6" fill="#f4a261" stroke="#2c2c2c" stroke-width="2"/><path d="M16 4v3M16 25v3M4 16h3M25 16h3M7.5 7.5l2.2 2.2M22.3 22.3l2.2 2.2M24.5 7.5l-2.2 2.2M9.7 22.3l-2.2 2.2" stroke="#2c2c2c" stroke-width="2" stroke-linecap="round"/>`,
      dawn: `<path d="M5 22h22" stroke="#2c2c2c" stroke-width="2.2" stroke-linecap="round"/><path d="M10 22a6 6 0 0 1 12 0" fill="#f4a261" stroke="#2c2c2c" stroke-width="2"/><path d="M16 10v3M9 14l2 2M23 14l-2 2" stroke="#2c2c2c" stroke-width="2" stroke-linecap="round"/>`,
      dusk: `<path d="M5 21h22" stroke="#2c2c2c" stroke-width="2.2" stroke-linecap="round"/><path d="M10 21a6 6 0 0 1 12 0" fill="#e76f51" stroke="#2c2c2c" stroke-width="2"/><path d="M8 25h16" stroke="#2c2c2c" stroke-width="1.6" stroke-linecap="round"/>`,
      moon: `<path d="M20 7a9 9 0 1 0 5 15 8 8 0 0 1-5-15z" fill="#e9c46a" stroke="#2c2c2c" stroke-width="2.1" stroke-linejoin="round"/>`,
      book: `<path d="M6 7h8a2 2 0 0 1 2 2v16a2 2 0 0 0-2-2H6V7zM26 7h-8a2 2 0 0 0-2 2v16a2 2 0 0 1 2-2h8V7z" fill="#f5efe3" stroke="#2c2c2c" stroke-width="2.1" stroke-linejoin="round"/>`,
      compass: `<circle cx="16" cy="16" r="10.5" fill="#f5efe3" stroke="#2c2c2c" stroke-width="2.2"/><polygon points="20,12 17,17 12,20 15,15" fill="#9e2a2b" stroke="#2c2c2c" stroke-width="1.6" stroke-linejoin="round"/>`,
      sound_on: `<polygon points="6,13 11,13 17,8 17,24 11,19 6,19" fill="#b7b2a6" stroke="#2c2c2c" stroke-width="2" stroke-linejoin="round"/><path d="M21 12a5 5 0 0 1 0 8M24 9a9 9 0 0 1 0 14" fill="none" stroke="#2c2c2c" stroke-width="2" stroke-linecap="round"/>`,
      sound_off: `<polygon points="6,13 11,13 17,8 17,24 11,19 6,19" fill="#b7b2a6" stroke="#2c2c2c" stroke-width="2" stroke-linejoin="round"/><path d="M21 13l6 6M27 13l-6 6" stroke="#9e2a2b" stroke-width="2.2" stroke-linecap="round"/>`,
      heart: `<path d="M16 26S6 19.5 6 12.2A5.2 5.2 0 0 1 16 10a5.2 5.2 0 0 1 10 2.2C26 19.5 16 26 16 26z" fill="#b53839" stroke="#2c2c2c" stroke-width="2.1" stroke-linejoin="round"/>`,
      bolt: `<polygon points="18,4 8,17 15,17 13,28 24,14 17,14" fill="#588157" stroke="#2c2c2c" stroke-width="2" stroke-linejoin="round"/>`,
      flame: `<path d="M16 5c5 6 7 10 5 16-2 4-8 4-10 0-2-5 1-10 5-16z" fill="#e76f51" stroke="#2c2c2c" stroke-width="2.1" stroke-linejoin="round"/>`,
      dash: `<path d="M5 12h15M8 17h18M6 22h12" stroke="#2c2c2c" stroke-width="2.3" stroke-linecap="round"/>`,
      hand: `<path d="M11 16V9a1.8 1.8 0 0 1 3.6 0v6M14.6 15V7.5a1.8 1.8 0 0 1 3.6 0V15M18.2 15V9.5a1.8 1.8 0 0 1 3.6 0V19a6 6 0 0 1-6 6h-2a6 6 0 0 1-5.5-3.6L6.5 17a1.8 1.8 0 0 1 3.1-1.6L11 17" fill="#f4e4c1" stroke="#2c2c2c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
      close: `<path d="M8 8l16 16M24 8L8 24" stroke="#2c2c2c" stroke-width="2.6" stroke-linecap="round"/>`,
      save: `<path d="M7 6h15l4 4v16H7V6z" fill="#e9e2d3" stroke="#2c2c2c" stroke-width="2.1" stroke-linejoin="round"/><rect x="11" y="16" width="10" height="10" fill="#fdfbf7" stroke="#2c2c2c" stroke-width="1.8"/><rect x="11" y="6" width="8" height="6" fill="#588157" stroke="#2c2c2c" stroke-width="1.6"/>`,
      trash: `<path d="M9 10h14l-1.2 16H10.2L9 10zM7 10h18M13 10V7h6v3" fill="#d8d2c7" stroke="#2c2c2c" stroke-width="2.1" stroke-linejoin="round"/>`,
      quill: `<path d="M25 6C17 7 11 13 9 22l-3 4 4-3c9-2 15-8 15-17z" fill="#f4e4c1" stroke="#2c2c2c" stroke-width="2.1" stroke-linejoin="round"/><line x1="8" y1="24" x2="21" y2="11" stroke="#2c2c2c" stroke-width="1.6"/>`,
      tent: `<polygon points="16,6 27,25 5,25" fill="#d4a373" stroke="#2c2c2c" stroke-width="2.2" stroke-linejoin="round"/><polygon points="16,15 20,25 12,25" fill="#3b3835" stroke="#2c2c2c" stroke-width="1.8"/>`,
      sprout: `<path d="M16 26V14M16 17c-5 0-8-3-8-7 4 0 8 2 8 7zM16 14c5 0 8-3 8-7-4 0-8 2-8 7z" fill="#6a994e" stroke="#2c2c2c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
      warning: `<polygon points="16,5 28,26 4,26" fill="#e9c46a" stroke="#2c2c2c" stroke-width="2.2" stroke-linejoin="round"/><line x1="16" y1="13" x2="16" y2="19" stroke="#2c2c2c" stroke-width="2.4" stroke-linecap="round"/><circle cx="16" cy="22.5" r="1.3" fill="#2c2c2c"/>`,
      blueprint: `<rect x="6" y="7" width="20" height="18" rx="2" fill="#e6f0f5" stroke="#2c2c2c" stroke-width="2.1"/><path d="M10 12h12M10 16h8M10 20h10" stroke="#2b5876" stroke-width="1.8" stroke-linecap="round"/>`
    };

    class SketchIcons {
      static svg(id, size = 22) {
        const inner = SKETCH_SVG_PATHS[id] || SKETCH_SVG_PATHS.stone;
        return `<span class="sketch-icon" style="width:${size}px;height:${size}px;"><svg width="${size}" height="${size}" viewBox="0 0 32 32" aria-hidden="true">${inner}</svg></span>`;
      }

      static hydrateDOM(root = document) {
        root.querySelectorAll('[data-icon]').forEach(el => {
          const id = el.dataset.icon;
          const size = Number(el.dataset.size) || 20;
          el.innerHTML = SketchIcons.svg(id, size);
        });
      }

      static drawCanvasIcon(ctx, id, size = 20) {
        const s = size / 32;
        ctx.save();
        ctx.scale(s, s);
        ctx.translate(-16, -16);
        ctx.strokeStyle = '#2c2c2c';
        ctx.lineWidth = 2.4;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        if (id === 'wood') {
          ctx.fillStyle = '#9c734e';
          ctx.beginPath();
          ctx.roundRect(5, 11, 22, 10, 4);
          ctx.fill();
          ctx.stroke();
        } else if (id === 'stone' || id === 'iron_ore') {
          ctx.fillStyle = id === 'iron_ore' ? '#8f8b82' : '#b7b2a6';
          ctx.beginPath();
          ctx.moveTo(6, 23);
          ctx.lineTo(10, 11);
          ctx.lineTo(19, 8);
          ctx.lineTo(26, 15);
          ctx.lineTo(24, 24);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          if (id === 'iron_ore') {
            ctx.fillStyle = '#b35c37';
            ctx.beginPath();
            ctx.arc(15, 16, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (id === 'flint') {
          ctx.fillStyle = '#5c626b';
          ctx.beginPath();
          ctx.moveTo(16, 5);
          ctx.lineTo(25, 24);
          ctx.lineTo(16, 27);
          ctx.lineTo(7, 24);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        } else if (id === 'fiber') {
          ctx.strokeStyle = '#4f772d';
          ctx.lineWidth = 2.8;
          ctx.beginPath();
          ctx.moveTo(16, 26);
          ctx.quadraticCurveTo(12, 16, 7, 9);
          ctx.moveTo(16, 26);
          ctx.lineTo(16, 6);
          ctx.moveTo(16, 26);
          ctx.quadraticCurveTo(20, 16, 25, 9);
          ctx.stroke();
        } else if (id === 'berries') {
          ctx.fillStyle = '#9e2a2b';
          for (const [bx, by] of [[12, 17], [20, 17], [16, 22]]) {
            ctx.beginPath();
            ctx.arc(bx, by, 4.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
          }
        } else if (id === 'raw_meat' || id === 'cooked_meat') {
          ctx.fillStyle = id === 'cooked_meat' ? '#9c5a2b' : '#c94a4a';
          ctx.beginPath();
          ctx.ellipse(15, 17, 9, 6.5, -0.35, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        } else if (id === 'charcoal') {
          ctx.fillStyle = '#3b3835';
          ctx.beginPath();
          ctx.arc(16, 16, 8, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        } else if (id === 'alch_crystal') {
          ctx.fillStyle = '#48cae4';
          ctx.beginPath();
          ctx.moveTo(16, 4);
          ctx.lineTo(23, 13);
          ctx.lineTo(20, 27);
          ctx.lineTo(12, 27);
          ctx.lineTo(9, 13);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        } else {
          ctx.fillStyle = '#d4a373';
          ctx.beginPath();
          ctx.arc(16, 16, 8, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    /**
     * ============================================================================
     * MODULE 1B: CONFIG & DATA-DRIVEN PROGRESSION REGISTRY
     * ============================================================================
     */
    const CONFIG = {
      TILE_SIZE: 64,
      CHUNK_TILES: 16,
      CHUNK_PX: 64 * 16, // 1024px per chunk
      DAY_LENGTH_SEC: 420, // 7 minutes per full day/night cycle for deliberate pacing
      INV_SLOTS: 24,
      HOTBAR_SLOTS: 8,
      SAVE_KEY: 'inkbound_sketchbook_save_v1',
      TUTORIAL_KEY: 'inkbound_tutorial_done_v1',
      AUTOSAVE_INTERVAL: 15
    };

    const PROGRESSION_TIERS = {
      1: {
        name: 'Tier I: Flint & Timber',
        shortName: 'Tier I: Flint',
        badgeClass: 'warning',
        summary: 'Starting from bare hands, forage the clearing and build your first hearth and workbench.',
        nextGoal: 'To unlock Tier II: place a Field Workbench and craft 2 Tier I tools or weapons.'
      },
      2: {
        name: 'Tier II: Forged Iron & Masonry',
        shortName: 'Tier II: Iron',
        badgeClass: 'secondary',
        summary: 'Smelt Iron Ore over a lit Campfire and forge tempered steel, bows, and stone walls at a Workbench.',
        nextGoal: 'To unlock Tier III (Alchemical Arts): Smelt 2 Forged Iron ingots, craft a Tier II Iron tool/weapon, and discover an Aether Crystal.'
      },
      3: {
        name: 'Tier III: Alchemical & Clockwork Mastery',
        shortName: 'Tier III: Aether',
        badgeClass: 'success',
        summary: 'All sketchbook schematics unlocked. Harness Aether Crystals for radiant beacons and automated traps.',
        nextGoal: 'Master of the Inked Wilds — venture deep into the Highlands and Shadow Mire!'
      }
    };

    const BIOMES = {
      meadow: {
        id: 'meadow',
        name: 'Sunlit Meadow',
        badgeClass: 'success',
        baseColor: '#edf0d8',
        coldRate: 0.7
      },
      forest: {
        id: 'forest',
        name: 'Deep Forest',
        badgeClass: 'success',
        baseColor: '#dce4d0',
        coldRate: 1.0
      },
      highlands: {
        id: 'highlands',
        name: 'Rocky Highlands',
        badgeClass: 'warning',
        baseColor: '#d8d8d0',
        coldRate: 1.35
      },
      mire: {
        id: 'mire',
        name: 'Shadow Mire',
        badgeClass: 'danger',
        baseColor: '#cbdad4',
        coldRate: 1.55
      }
    };

    const BOSS_DEFINITIONS = {
      briar_sovereign: {
        name: 'Briar Sovereign', biome: 'forest', type: 'stag',
        hp: 210, radius: 25, speed: 112, damage: 13, contactCooldown: 1.75,
        attacks: [
          { name: 'Antler Sweep', shape: 'cone', halfAngle: 1.0, radius: 125, damage: 17, cooldown: 6.5, windup: 1.0 },
          { name: 'Briar Charge', shape: 'cone', halfAngle: 0.34, radius: 190, damage: 22, cooldown: 9.2, windup: 1.2 }
        ],
        drops: [{ id: 'raw_meat', min: 3, max: 4 }, { id: 'iron_ore', min: 1, max: 2 }]
      },
      stoneback_colossus: {
        name: 'Stoneback Colossus', biome: 'highlands', type: 'golem',
        hp: 290, radius: 31, speed: 68, damage: 18, contactCooldown: 2.0,
        attacks: [
          { name: 'Stonefall Slam', shape: 'circle', radius: 112, damage: 23, cooldown: 7.5, windup: 1.25 },
          { name: 'Faultline', shape: 'circle', radius: 190, damage: 18, cooldown: 9.5, windup: 1.5 }
        ],
        drops: [{ id: 'iron_ore', min: 4, max: 5 }, { id: 'iron_ingot', min: 1, max: 2 }]
      },
      mire_warden: {
        name: 'Mire Warden', biome: 'mire', type: 'stalker',
        hp: 255, radius: 26, speed: 104, damage: 15, contactCooldown: 1.8,
        attacks: [
          { name: 'Bog Surge', shape: 'cone', halfAngle: 0.58, radius: 150, damage: 18, cooldown: 7.1, windup: 1.1 },
          { name: 'Drowning Ring', shape: 'circle', radius: 88, damage: 22, cooldown: 9.2, windup: 1.35 }
        ],
        drops: [{ id: 'alch_crystal', min: 2, max: 3 }, { id: 'charcoal', min: 2, max: 3 }]
      }
    };

    const ITEMS = {
      // Raw Resources
      wood: { id: 'wood', name: 'Timber Log', icon: 'wood', category: 'resource', maxStack: 50, desc: 'Sturdy timber for tools, walls, and campfire fuel.' },
      stone: { id: 'stone', name: 'Rough Stone', icon: 'stone', category: 'resource', maxStack: 50, desc: 'Heavy fieldstone used for hearths and masonry.' },
      flint: { id: 'flint', name: 'Knapped Flint', icon: 'flint', category: 'resource', maxStack: 40, desc: 'Sharp-edged stone ideal for primitive blades and arrowheads.' },
      fiber: { id: 'fiber', name: 'Braided Fiber', icon: 'fiber', category: 'resource', maxStack: 50, desc: 'Tough plant reeds twisted into cordage.' },
      iron_ore: { id: 'iron_ore', name: 'Raw Iron Ore', icon: 'iron_ore', category: 'resource', maxStack: 30, desc: 'Rust-veined ore mined from highland boulders.' },
      iron_ingot: { id: 'iron_ingot', name: 'Forged Iron', icon: 'iron_ingot', category: 'resource', maxStack: 30, desc: 'Smelted iron bar for durable Tier II tools and weapons.' },
      charcoal: { id: 'charcoal', name: 'Sketch Charcoal', icon: 'charcoal', category: 'resource', maxStack: 40, desc: 'Dense blackened wood that burns long and hot.' },
      alch_crystal: { id: 'alch_crystal', name: 'Aether Crystal', icon: 'alch_crystal', category: 'resource', maxStack: 20, desc: 'Luminescent mineral humming with alchemical energy.' },
      arrow: { id: 'arrow', name: 'Flint Arrow', icon: 'arrow', category: 'ammo', maxStack: 60, desc: 'Fletched timber shaft tipped with sharp flint.' },

      // Food & Forage
      berries: { id: 'berries', name: 'Wild Berries', icon: 'berries', category: 'food', maxStack: 30, food: 14, hp: 3, warmth: 0, desc: 'Tart meadow berries. Restores +14 Hunger & +3 Health.' },
      raw_meat: { id: 'raw_meat', name: 'Raw Haunch', icon: 'raw_meat', category: 'food', maxStack: 20, food: 18, hp: -4, warmth: 0, desc: 'Best roasted over a Campfire (+18 Hunger, -4 Health if raw).' },
      cooked_meat: { id: 'cooked_meat', name: 'Roasted Haunch', icon: 'cooked_meat', category: 'food', maxStack: 20, food: 44, hp: 16, warmth: 12, desc: 'Savory hearth-roasted meat (+44 Hunger, +16 Health, +12 Warmth).' },

      // Tier I Tools & Weapons
      flint_axe: { id: 'flint_axe', name: 'Flint Hatchet', icon: 'flint_axe', category: 'tool', maxStack: 1, chopPower: 26, minePower: 11, damage: 17, range: 64, cooldown: 0.34, staminaCost: 5, desc: 'Fells trees swiftly (+26 Chop).' },
      flint_pick: { id: 'flint_pick', name: 'Flint Pickaxe', icon: 'flint_pick', category: 'tool', maxStack: 1, chopPower: 12, minePower: 25, damage: 16, range: 62, cooldown: 0.36, staminaCost: 5, desc: 'Cleaves stone and flint outcrops (+25 Mine).' },
      wooden_spear: { id: 'wooden_spear', name: 'Ash Spear', icon: 'wooden_spear', category: 'weapon', maxStack: 1, chopPower: 12, minePower: 9, damage: 28, knockback: 235, range: 84, cooldown: 0.36, staminaCost: 6, desc: 'Long-reach flint-tipped spear (28 Damage).' },
      torch_item: { id: 'torch_item', name: 'Hand Torch', icon: 'torch_item', category: 'light', maxStack: 1, damage: 14, lightRadius: 175, warmthAura: 9, range: 60, cooldown: 0.34, staminaCost: 4, desc: 'Pushes back the night ink and warms your hands.' },

      // Tier II Tools & Weapons
      iron_axe: { id: 'iron_axe', name: 'Forged Iron Axe', icon: 'iron_axe', category: 'tool', maxStack: 1, chopPower: 46, minePower: 16, damage: 25, range: 68, cooldown: 0.30, staminaCost: 5, desc: 'Heavy tempered axe (+46 Chop).' },
      iron_pick: { id: 'iron_pick', name: 'Forged Iron Pick', icon: 'iron_pick', category: 'tool', maxStack: 1, chopPower: 16, minePower: 45, damage: 23, range: 66, cooldown: 0.32, staminaCost: 5, desc: 'Shatters highland iron and crystal veins (+45 Mine).' },
      iron_sword: { id: 'iron_sword', name: 'Tempered Blade', icon: 'iron_sword', category: 'weapon', maxStack: 1, damage: 44, knockback: 265, range: 76, cooldown: 0.28, staminaCost: 6, desc: 'Balanced iron broadsword (44 Damage).' },
      hunting_bow: { id: 'hunting_bow', name: 'Yew Shortbow', icon: 'hunting_bow', category: 'ranged', maxStack: 1, damage: 42, ammoId: 'arrow', cooldown: 0.42, staminaCost: 6, desc: 'Fires Flint Arrows at distant prey and shadows (42 Damage).' },

      // Tier III Alchemical Gear
      alch_lantern: { id: 'alch_lantern', name: 'Alchemical Lantern', icon: 'alch_lantern', category: 'light', maxStack: 1, damage: 18, lightRadius: 275, warmthAura: 16, alchemical: true, range: 62, cooldown: 0.32, staminaCost: 3, desc: 'Radiant teal lantern that wards off chill and boosts stamina recovery.' },
      aether_halberd: { id: 'aether_halberd', name: 'Aether Halberd', icon: 'aether_halberd', category: 'weapon', maxStack: 1, chopPower: 38, minePower: 34, damage: 68, knockback: 310, alchemical: true, range: 94, cooldown: 0.30, staminaCost: 5, desc: 'Crystal-infused polearm that cleaves foes and resources alike (68 Damage).' },

      // Placeable Structure Kits
      campfire_kit: { id: 'campfire_kit', name: 'Campfire Kit', icon: 'campfire', category: 'structure', structType: 'campfire', maxStack: 5, desc: 'Place to kindle a warm hearth for cooking, smelting, and light.' },
      workbench_kit: { id: 'workbench_kit', name: 'Field Workbench', icon: 'workbench', category: 'structure', structType: 'workbench', maxStack: 3, desc: 'Drafting table required for Tier II & III schematics.' },
      wood_wall_kit: { id: 'wood_wall_kit', name: 'Timber Palisade', icon: 'wood_wall', category: 'structure', structType: 'wood_wall', maxStack: 20, desc: 'Defensive wooden barrier against nighttime predators.' },
      chest_kit: { id: 'chest_kit', name: 'Storage Chest', icon: 'storage_chest', category: 'structure', structType: 'storage_chest', maxStack: 5, desc: 'Stores 12 stacks of expedition supplies.' },
      torch_post_kit: { id: 'torch_post_kit', name: 'Standing Torch', icon: 'standing_torch', category: 'structure', structType: 'standing_torch', maxStack: 10, desc: 'A permanent brazier that lights nearby terrain.' },
      stone_wall_kit: { id: 'stone_wall_kit', name: 'Masonry Wall', icon: 'stone_wall', category: 'structure', structType: 'stone_wall', maxStack: 20, desc: 'Reinforced stone fortification with high durability.' },
      spike_trap_kit: { id: 'spike_trap_kit', name: 'Clockwork Snare', icon: 'spike_trap', category: 'structure', structType: 'spike_trap', maxStack: 10, desc: 'Automatically springs shut on hostile creatures that step near.' },
      alch_pylon_kit: { id: 'alch_pylon_kit', name: 'Aether Beacon', icon: 'alch_pylon', category: 'structure', structType: 'alch_pylon', maxStack: 5, desc: 'Bathes nearby terrain in teal light and zaps shadows with crystal bolts.' }
    };

    const STRUCTURE_SPECS = {
      campfire: { name: 'Campfire', maxHp: 120, radius: 22, solid: true, lightRadius: 255, warmthAura: 24 },
      workbench: { name: 'Field Workbench', maxHp: 160, radius: 26, solid: true },
      wood_wall: { name: 'Timber Palisade', maxHp: 180, radius: 22, solid: true },
      storage_chest: { name: 'Storage Chest', maxHp: 150, radius: 22, solid: true },
      standing_torch: { name: 'Standing Torch', maxHp: 90, radius: 14, solid: true, lightRadius: 195, warmthAura: 8 },
      stone_wall: { name: 'Masonry Wall', maxHp: 360, radius: 24, solid: true },
      spike_trap: { name: 'Clockwork Snare', maxHp: 140, radius: 20, solid: false },
      alch_pylon: { name: 'Aether Beacon', maxHp: 240, radius: 22, solid: true, lightRadius: 325, warmthAura: 16, alchemical: true },
      guardian_shrine: { name: 'Guardian Shrine', maxHp: 1, radius: 20, solid: false }
    };

    const RECIPES = [
      // Tier 1: Primitive Flint & Wood
      { id: 'r_flint_axe', tier: 1, out: 'flint_axe', count: 1, cost: { wood: 3, flint: 2, fiber: 1 } },
      { id: 'r_flint_pick', tier: 1, out: 'flint_pick', count: 1, cost: { wood: 3, flint: 2, fiber: 1 } },
      { id: 'r_wooden_spear', tier: 1, out: 'wooden_spear', count: 1, cost: { wood: 4, flint: 2, fiber: 2 } },
      { id: 'r_torch_item', tier: 1, out: 'torch_item', count: 1, cost: { wood: 2, fiber: 2 } },
      { id: 'r_campfire', tier: 1, out: 'campfire_kit', count: 1, cost: { wood: 4, stone: 3 } },
      { id: 'r_workbench', tier: 1, out: 'workbench_kit', count: 1, cost: { wood: 6, stone: 4, fiber: 2 } },
      { id: 'r_wood_wall', tier: 1, out: 'wood_wall_kit', count: 1, cost: { wood: 4, fiber: 1 } },
      { id: 'r_chest', tier: 1, out: 'chest_kit', count: 1, cost: { wood: 8, fiber: 2 } },
      { id: 'r_standing_torch', tier: 1, out: 'torch_post_kit', count: 1, cost: { wood: 3, fiber: 2, charcoal: 1 } },
      { id: 'r_cooked_meat', tier: 1, out: 'cooked_meat', count: 1, station: 'campfire', cost: { raw_meat: 1 } },
      { id: 'r_charcoal', tier: 1, out: 'charcoal', count: 2, station: 'campfire', cost: { wood: 2 } },

      // Tier 2: Forged Iron & Masonry
      { id: 'r_iron_ingot', tier: 2, out: 'iron_ingot', count: 1, station: 'campfire', cost: { iron_ore: 2, wood: 1 } },
      { id: 'r_iron_axe', tier: 2, out: 'iron_axe', count: 1, station: 'workbench', cost: { iron_ingot: 2, wood: 3, fiber: 2 } },
      { id: 'r_iron_pick', tier: 2, out: 'iron_pick', count: 1, station: 'workbench', cost: { iron_ingot: 2, wood: 3, fiber: 2 } },
      { id: 'r_iron_sword', tier: 2, out: 'iron_sword', count: 1, station: 'workbench', cost: { iron_ingot: 3, wood: 2, fiber: 2 } },
      { id: 'r_hunting_bow', tier: 2, out: 'hunting_bow', count: 1, station: 'workbench', cost: { wood: 5, fiber: 4 } },
      { id: 'r_arrows', tier: 2, out: 'arrow', count: 6, station: 'workbench', cost: { wood: 2, flint: 2, fiber: 1 } },
      { id: 'r_stone_wall', tier: 2, out: 'stone_wall_kit', count: 1, station: 'workbench', cost: { stone: 5, iron_ingot: 1 } },

      // Tier 3: Alchemical & Clockwork Mastery
      { id: 'r_alch_lantern', tier: 3, out: 'alch_lantern', count: 1, station: 'workbench', cost: { iron_ingot: 2, alch_crystal: 1, charcoal: 2 } },
      { id: 'r_aether_halberd', tier: 3, out: 'aether_halberd', count: 1, station: 'workbench', cost: { iron_ingot: 3, alch_crystal: 2, wood: 3 } },
      { id: 'r_spike_trap', tier: 3, out: 'spike_trap_kit', count: 1, station: 'workbench', cost: { iron_ingot: 2, stone: 3, fiber: 2 } },
      { id: 'r_alch_pylon', tier: 3, out: 'alch_pylon_kit', count: 1, station: 'workbench', cost: { stone: 6, iron_ingot: 2, alch_crystal: 2 } }
    ];

    /**
     * ============================================================================
     * MODULE 2: INFINITE PROCEDURAL WORLD & BIOME GENERATOR
     * ============================================================================
     */
    class WorldGen {
      constructor(seed = 1337) {
        this.seed = seed;
        this.chunks = new Map();
        this.removedNodes = new Set();
      }

      hash2(x, y) {
        let n = Math.sin(x * 127.1 + y * 311.7 + this.seed * 74.7) * 43758.5453123;
        return n - Math.floor(n);
      }

      valueNoise(x, y) {
        const ix = Math.floor(x);
        const iy = Math.floor(y);
        const fx = x - ix;
        const fy = y - iy;
        const ux = fx * fx * (3 - 2 * fx);
        const uy = fy * fy * (3 - 2 * fy);

        const a = this.hash2(ix, iy);
        const b = this.hash2(ix + 1, iy);
        const c = this.hash2(ix, iy + 1);
        const d = this.hash2(ix + 1, iy + 1);

        return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
      }

      fbm(x, y) {
        let val = 0;
        let amp = 0.5;
        let freq = 1;
        for (let i = 0; i < 3; i++) {
          val += amp * this.valueNoise(x * freq, y * freq);
          freq *= 2.02;
          amp *= 0.5;
        }
        return val;
      }

      getBiomeAt(wx, wy) {
        const distFromOrigin = Math.hypot(wx, wy);
        if (distFromOrigin < 520) {
          return BIOMES.meadow;
        }
        const elev = this.fbm(wx * 0.00055 + 11.3, wy * 0.00055 - 4.7);
        const moist = this.fbm(wx * 0.00062 - 8.1, wy * 0.00062 + 19.4);

        if (elev > 0.61) return BIOMES.highlands;
        if (moist > 0.60 && distFromOrigin > 720) return BIOMES.mire;
        if (moist > 0.45) return BIOMES.forest;
        return BIOMES.meadow;
      }

      getChunk(cx, cy) {
        const key = `${cx},${cy}`;
        if (this.chunks.has(key)) {
          return this.chunks.get(key);
        }
        const chunk = this.generateChunk(cx, cy);
        this.chunks.set(key, chunk);
        return chunk;
      }

      generateChunk(cx, cy) {
        const nodes = [];
        const grass = [];
        const groundDetails = [];
        const originX = cx * CONFIG.CHUNK_PX;
        const originY = cy * CONFIG.CHUNK_PX;
        const centerBiome = this.getBiomeAt(originX + CONFIG.CHUNK_PX * 0.5, originY + CONFIG.CHUNK_PX * 0.5);

        // Swaying grass tufts & reeds
        const grassCount = 34;
        for (let i = 0; i < grassCount; i++) {
          const gx = originX + this.hash2(cx * 31 + i, cy * 17) * CONFIG.CHUNK_PX;
          const gy = originY + this.hash2(cx * 13, cy * 29 + i) * CONFIG.CHUNK_PX;
          grass.push({
            x: gx,
            y: gy,
            biomeId: this.getBiomeAt(gx, gy).id,
            h: 10 + this.hash2(i, cx + cy) * 9,
            bend: 0,
            bendVel: 0,
            phase: this.hash2(gx * 0.01, gy * 0.01) * Math.PI * 2
          });
        }

        for (let i = 0; i < 56; i++) {
          const x = originX + this.hash2(cx * 61 + i, cy * 47 + 13) * CONFIG.CHUNK_PX;
          const y = originY + this.hash2(cx * 29 + 7, cy * 53 + i) * CONFIG.CHUNK_PX;
          groundDetails.push({
            x,
            y,
            biomeId: this.getBiomeAt(x, y).id,
            size: 2 + this.hash2(i + cx, cy - i) * 4,
            variant: this.hash2(i + cx * 19, cy * 23 - i),
            rotation: this.hash2(i + 11, cx + cy) * Math.PI * 2
          });
        }

        // Resource nodes placed on jittered sub-grid
        const cells = 6;
        const cellStep = CONFIG.CHUNK_PX / cells;
        for (let gy = 0; gy < cells; gy++) {
          for (let gx = 0; gx < cells; gx++) {
            const cellX = cx * cells + gx;
            const cellY = cy * cells + gy;
            const r = this.hash2(cellX, cellY);
            const wx = originX + (gx + 0.25 + this.hash2(cellX + 5, cellY) * 0.5) * cellStep;
            const wy = originY + (gy + 0.25 + this.hash2(cellX, cellY + 9) * 0.5) * cellStep;
            const distFromOrigin = Math.hypot(wx, wy);

            // Keep immediate spawn circle open
            if (distFromOrigin < 115) continue;

            const nodeId = `n_${cellX}_${cellY}`;
            if (this.removedNodes.has(nodeId)) continue;

            const biome = this.getBiomeAt(wx, wy);
            const node = this.pickNodeForBiome(nodeId, wx, wy, biome, r, distFromOrigin);
            if (node) {
              nodes.push(node);
            }
          }
        }

        // Guarantee starter meadow resources so an empty-handed player can begin.
        if (cx === 0 && cy === 0) {
          const guaranteed = [
            { id: 'n_start_oak', type: 'oak_tree', x: -195, y: -135, scale: 0.95 },
            { id: 'n_start_flint', type: 'flint_rock', x: 185, y: -120, scale: 1.0 },
            { id: 'n_start_fiber', type: 'fiber_plant', x: -165, y: 155, scale: 1.0 },
            { id: 'n_start_berry', type: 'berry_bush', x: 175, y: 150, scale: 1.0 }
          ];
          for (const g of guaranteed) {
            if (!this.removedNodes.has(g.id)) {
              nodes.push(this.makeNode(g.id, g.type, g.x, g.y, g.scale));
            }
          }
        }

        return { cx, cy, nodes, grass, groundDetails, biome: centerBiome };
      }

      pickNodeForBiome(id, x, y, biome, r, distFromOrigin) {
        const scale = 0.88 + this.hash2(x * 0.1, y * 0.1) * 0.28;
        if (biome.id === 'meadow') {
          if (r < 0.14) return this.makeNode(id, 'oak_tree', x, y, scale);
          if (r < 0.23) return this.makeNode(id, 'flint_rock', x, y, scale);
          if (r < 0.31) return this.makeNode(id, 'boulder', x, y, scale);
          if (r < 0.43) return this.makeNode(id, 'fiber_plant', x, y, scale);
          if (r < 0.52) return this.makeNode(id, 'berry_bush', x, y, scale);
        } else if (biome.id === 'forest') {
          if (r < 0.28) return this.makeNode(id, 'pine_tree', x, y, scale);
          if (r < 0.38) return this.makeNode(id, 'oak_tree', x, y, scale);
          if (r < 0.47) return this.makeNode(id, 'boulder', x, y, scale);
          if (r < 0.56) return this.makeNode(id, 'berry_bush', x, y, scale);
          if (r < 0.64) return this.makeNode(id, 'fiber_plant', x, y, scale);
        } else if (biome.id === 'highlands') {
          if (r < 0.22) return this.makeNode(id, 'iron_rock', x, y, scale);
          if (r < 0.38) return this.makeNode(id, 'boulder', x, y, scale);
          if (r < 0.47 && distFromOrigin > 850) return this.makeNode(id, 'crystal_outcrop', x, y, scale);
          if (r < 0.55) return this.makeNode(id, 'pine_tree', x, y, scale);
        } else if (biome.id === 'mire') {
          if (r < 0.22) return this.makeNode(id, 'willow_tree', x, y, scale);
          if (r < 0.34) return this.makeNode(id, 'crystal_outcrop', x, y, scale);
          if (r < 0.46) return this.makeNode(id, 'fiber_plant', x, y, scale);
          if (r < 0.54) return this.makeNode(id, 'iron_rock', x, y, scale);
        }
        return null;
      }

      makeNode(id, type, x, y, scale) {
        const specs = {
          oak_tree: {
            name: 'Sketchbook Oak', kind: 'tree', material: 'wood',
            hp: 80, maxHp: 80, radius: 24, solid: true, scale,
            drops: [{ id: 'wood', min: 3, max: 5 }, { id: 'fiber', min: 0, max: 2 }]
          },
          pine_tree: {
            name: 'Whispering Pine', kind: 'tree', material: 'wood',
            hp: 105, maxHp: 105, radius: 22, solid: true, scale,
            drops: [{ id: 'wood', min: 4, max: 6 }]
          },
          willow_tree: {
            name: 'Mire Willow', kind: 'tree', material: 'wood',
            hp: 115, maxHp: 115, radius: 25, solid: true, scale,
            drops: [{ id: 'wood', min: 3, max: 5 }, { id: 'charcoal', min: 1, max: 2 }]
          },
          boulder: {
            name: 'Granite Boulder', kind: 'rock', material: 'stone',
            hp: 95, maxHp: 95, radius: 25, solid: true, scale,
            drops: [{ id: 'stone', min: 3, max: 5 }, { id: 'flint', min: 1, max: 2 }]
          },
          flint_rock: {
            name: 'Flint Outcrop', kind: 'rock', material: 'stone',
            hp: 50, maxHp: 50, radius: 18, solid: true, scale,
            drops: [{ id: 'flint', min: 2, max: 4 }, { id: 'stone', min: 1, max: 2 }]
          },
          iron_rock: {
            name: 'Ironstone Vein', kind: 'rock', material: 'stone',
            hp: 130, maxHp: 130, radius: 24, solid: true, scale,
            drops: [{ id: 'iron_ore', min: 2, max: 4 }, { id: 'stone', min: 2, max: 3 }]
          },
          crystal_outcrop: {
            name: 'Aether Cluster', kind: 'rock', material: 'stone',
            hp: 145, maxHp: 145, radius: 21, solid: true, scale,
            drops: [{ id: 'alch_crystal', min: 1, max: 2 }, { id: 'stone', min: 1, max: 2 }]
          },
          fiber_plant: {
            name: 'Wild Flax Reeds', kind: 'plant', material: 'wood',
            hp: 24, maxHp: 24, radius: 14, solid: false, scale,
            drops: [{ id: 'fiber', min: 2, max: 4 }]
          },
          berry_bush: {
            name: 'Bramble Berry Bush', kind: 'plant', material: 'wood',
            hp: 28, maxHp: 28, radius: 16, solid: false, scale,
            drops: [{ id: 'berries', min: 2, max: 4 }, { id: 'wood', min: 0, max: 1 }]
          }
        };

        const s = specs[type];
        return {
          id,
          type,
          x,
          y,
          ...s,
          scaleX: 1,
          scaleY: 1,
          shakeX: 0,
          flash: 0,
          hitCombo: 0
        };
      }
    }

    /**
     * ============================================================================
     * MODULE 3: LIGHTING, PARTICLES, FOOTPRINTS & MAGNETIC LOOT PHYSICS
     * ============================================================================
     */
    class ParticleSystem {
      constructor() {
        this.particles = [];
        this.lootDrops = [];
        this.footprints = [];
        this.floatingTexts = [];
        this.projectiles = [];
      }

      spawnBurst(x, y, color, count = 8, speed = 130, shape = 'ink') {
        for (let i = 0; i < count; i++) {
          const ang = Math.random() * Math.PI * 2;
          const spd = speed * (0.4 + Math.random() * 0.75);
          this.particles.push({
            x,
            y,
            vx: Math.cos(ang) * spd,
            vy: Math.sin(ang) * spd - (shape === 'firefly' ? 18 : 0),
            size: shape === 'firefly' ? 2.5 + Math.random() * 2 : 2.5 + Math.random() * 3.5,
            color,
            life: shape === 'firefly' ? 1.1 + Math.random() * 1.1 : 0.32 + Math.random() * 0.25,
            maxLife: 0.6,
            shape
          });
          const p = this.particles[this.particles.length - 1];
          p.maxLife = p.life;
        }
      }

      spawnFootprint(x, y, angle) {
        this.footprints.push({
          x,
          y,
          angle,
          life: 4.5,
          maxLife: 4.5
        });
        if (this.footprints.length > 75) {
          this.footprints.shift();
        }
      }

      spawnFloatingText(x, y, text, color = '#2c2c2c') {
        this.floatingTexts.push({
          x,
          y,
          text,
          color,
          life: 0.95,
          maxLife: 0.95
        });
      }

      spawnLoot(x, y, itemId, count) {
        const ang = Math.random() * Math.PI * 2;
        const spd = 65 + Math.random() * 65;
        this.lootDrops.push({
          x,
          y,
          vx: Math.cos(ang) * spd,
          vy: Math.sin(ang) * spd,
          z: 6,
          vz: 155,
          itemId,
          count,
          bobPhase: Math.random() * Math.PI * 2,
          pickupDelay: 0.28
        });
      }

      spawnAmbient(camX, camY, viewW, viewH, isNight, biomeId) {
        const x = camX + (Math.random() - 0.5) * (viewW + 160);
        const y = camY + (Math.random() - 0.5) * (viewH + 160);
        if (isNight) {
          this.particles.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 18,
            vy: -10 - Math.random() * 14,
            size: 2.6 + Math.random() * 1.8,
            color: biomeId === 'mire' ? '#48cae4' : '#e9c46a',
            life: 2.6 + Math.random() * 1.8,
            maxLife: 4.0,
            shape: 'firefly'
          });
        } else {
          this.particles.push({
            x,
            y,
            vx: 22 + Math.random() * 18,
            vy: 12 + Math.random() * 14,
            size: 3.5,
            color: biomeId === 'highlands' ? '#b7b2a6' : '#6a994e',
            life: 3.2,
            maxLife: 3.2,
            shape: 'leaf'
          });
        }
      }

      update(dt, player, onPickup) {
        // Update particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
          const p = this.particles[i];
          p.life -= dt;
          if (p.life <= 0) {
            this.particles.splice(i, 1);
            continue;
          }
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          if (p.shape !== 'firefly' && p.shape !== 'leaf') {
            p.vx *= Math.pow(0.05, dt);
            p.vy *= Math.pow(0.05, dt);
          }
        }

        // Update footprints
        for (let i = this.footprints.length - 1; i >= 0; i--) {
          this.footprints[i].life -= dt;
          if (this.footprints[i].life <= 0) {
            this.footprints.splice(i, 1);
          }
        }

        // Update floating combat/loot callouts
        for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
          const ft = this.floatingTexts[i];
          ft.life -= dt;
          ft.y -= 28 * dt;
          if (ft.life <= 0) {
            this.floatingTexts.splice(i, 1);
          }
        }

        // Update bouncy loot drops & magnetic pull
        for (let i = this.lootDrops.length - 1; i >= 0; i--) {
          const d = this.lootDrops[i];
          if (d.pickupDelay > 0) d.pickupDelay -= dt;
          d.bobPhase += dt * 4.5;

          d.x += d.vx * dt;
          d.y += d.vy * dt;
          d.vx *= Math.pow(0.04, dt);
          d.vy *= Math.pow(0.04, dt);

          if (d.z > 0 || d.vz !== 0) {
            d.z += d.vz * dt;
            d.vz -= 520 * dt;
            if (d.z <= 0) {
              d.z = 0;
              d.vz = Math.abs(d.vz) > 45 ? Math.abs(d.vz) * 0.35 : 0;
            }
          }

          if (d.pickupDelay <= 0) {
            const dx = player.x - d.x;
            const dy = player.y - d.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 115 && dist > 1) {
              const pull = (1 - dist / 115) * 440 + 130;
              d.x += (dx / dist) * pull * dt;
              d.y += (dy / dist) * pull * dt;
            }
            if (dist < 28) {
              if (onPickup(d.itemId, d.count)) {
                this.lootDrops.splice(i, 1);
              }
            }
          }
        }
      }
    }

    /**
     * ============================================================================
     * MODULE 4: HAND-DRAWN SKETCHBOOK CANVAS RENDERER
     * ============================================================================
     */
    class SketchbookRenderer {
      constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.lightCanvas = document.createElement('canvas');
        this.lightCtx = this.lightCanvas.getContext('2d');
      }

      terrainTexture(game, chunk) {
        if (chunk.terrainTexture) return chunk.terrainTexture;

        const texture = document.createElement('canvas');
        texture.width = 34;
        texture.height = 34;
        const textureCtx = texture.getContext('2d');
        const originX = chunk.cx * CONFIG.CHUNK_PX;
        const originY = chunk.cy * CONFIG.CHUNK_PX;
        const sampleSize = CONFIG.CHUNK_PX / 32;

        for (let y = 0; y < texture.height; y++) {
          for (let x = 0; x < texture.width; x++) {
            const biome = game.world.getBiomeAt(originX + (x - 0.5) * sampleSize, originY + (y - 0.5) * sampleSize);
            textureCtx.fillStyle = biome.baseColor;
            textureCtx.fillRect(x, y, 1, 1);
          }
        }

        chunk.terrainTexture = texture;
        return texture;
      }

      resize(w, h) {
        this.canvas.width = w;
        this.canvas.height = h;
        this.lightCanvas.width = w;
        this.lightCanvas.height = h;
      }

      renderWorld(game) {
        const ctx = this.ctx;
        const w = this.canvas.width;
        const h = this.canvas.height;
        const camX = game.camera.x + game.camera.shakeX;
        const camY = game.camera.y + game.camera.shakeY;

        ctx.save();
        ctx.fillStyle = '#f6f1e3';
        ctx.fillRect(0, 0, w, h);

        // Translate to world camera space
        ctx.translate(w * 0.5 - camX, h * 0.5 - camY);

        // Determine visible chunks
        const minCx = Math.floor((camX - w * 0.6) / CONFIG.CHUNK_PX);
        const maxCx = Math.floor((camX + w * 0.6) / CONFIG.CHUNK_PX);
        const minCy = Math.floor((camY - h * 0.6) / CONFIG.CHUNK_PX);
        const maxCy = Math.floor((camY + h * 0.6) / CONFIG.CHUNK_PX);

        const visibleChunks = [];
        for (let cy = minCy; cy <= maxCy; cy++) {
          for (let cx = minCx; cx <= maxCx; cx++) {
            visibleChunks.push(game.world.getChunk(cx, cy));
          }
        }

        // 1. Render continuous terrain color and biome-specific ground details
        for (const chunk of visibleChunks) {
          const x0 = chunk.cx * CONFIG.CHUNK_PX;
          const y0 = chunk.cy * CONFIG.CHUNK_PX;
          ctx.imageSmoothingEnabled = true;
          ctx.drawImage(this.terrainTexture(game, chunk), 1, 1, 32, 32, x0, y0, CONFIG.CHUNK_PX, CONFIG.CHUNK_PX);

          for (const detail of chunk.groundDetails) {
            const { x, y, biomeId, size, variant, rotation } = detail;
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);

            if (biomeId === 'highlands') {
              ctx.fillStyle = 'rgba(91, 94, 91, 0.22)';
              ctx.beginPath();
              ctx.moveTo(-size, size * 0.55);
              ctx.lineTo(-size * 0.35, -size * 0.7);
              ctx.lineTo(size * 0.9, -size * 0.35);
              ctx.lineTo(size, size * 0.55);
              ctx.closePath();
              ctx.fill();
            } else if (biomeId === 'mire') {
              ctx.fillStyle = 'rgba(62, 103, 101, 0.15)';
              ctx.beginPath();
              ctx.ellipse(0, 0, size * 1.8, size * 0.8, 0, 0, Math.PI * 2);
              ctx.fill();
              if (variant > 0.72) {
                ctx.strokeStyle = 'rgba(65, 99, 73, 0.55)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(0, 2);
                ctx.lineTo(-1, -size * 2);
                ctx.moveTo(2, 2);
                ctx.lineTo(size, -size * 1.5);
                ctx.stroke();
              }
            } else if (biomeId === 'forest') {
              ctx.fillStyle = variant > 0.5 ? 'rgba(68, 98, 56, 0.24)' : 'rgba(112, 91, 56, 0.18)';
              ctx.beginPath();
              ctx.ellipse(0, 0, size * 1.5, size * 0.65, 0, 0, Math.PI * 2);
              ctx.fill();
              ctx.strokeStyle = 'rgba(70, 91, 57, 0.3)';
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(-size, 0);
              ctx.lineTo(size, 0);
              ctx.stroke();
            } else if (variant > 0.86) {
              ctx.fillStyle = 'rgba(164, 125, 70, 0.45)';
              ctx.beginPath();
              ctx.arc(0, 0, size * 0.65, 0, Math.PI * 2);
              ctx.fill();
            }
            ctx.restore();
          }
        }

        // 2. Fading Ink Footprints
        for (const fp of game.particles.footprints) {
          const alpha = (fp.life / fp.maxLife) * 0.28;
          ctx.save();
          ctx.translate(fp.x, fp.y);
          ctx.rotate(fp.angle);
          ctx.fillStyle = `rgba(44, 42, 38, ${alpha})`;
          ctx.beginPath();
          ctx.ellipse(0, -4, 5, 2.5, 0, 0, Math.PI * 2);
          ctx.ellipse(4, 4, 5, 2.5, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // 3. Living Swaying Grass Tufts
        const wind = Math.sin(game.elapsedTime * 2.1);
        ctx.lineWidth = 1.7;
        ctx.lineCap = 'round';
        for (const chunk of visibleChunks) {
          for (const g of chunk.grass) {
            ctx.strokeStyle = g.biomeId === 'highlands' ? '#77786f' : g.biomeId === 'mire' ? '#536c61' : g.biomeId === 'forest' ? '#3f6849' : '#66834b';
            const sway = Math.sin(game.elapsedTime * 2.4 + g.phase) * 3.2 + wind * 1.5 + g.bend * 12;
            ctx.beginPath();
            ctx.moveTo(g.x - 3, g.y);
            ctx.quadraticCurveTo(g.x - 3 + sway * 0.6, g.y - g.h * 0.5, g.x - 5 + sway, g.y - g.h);
            ctx.moveTo(g.x + 2, g.y);
            ctx.quadraticCurveTo(g.x + 2 + sway * 0.6, g.y - g.h * 0.5, g.x + 4 + sway, g.y - g.h * 0.9);
            ctx.stroke();
          }
        }

        // 4. Structure Placement Ghost
        if (game.buildGhost && game.started) {
          const g = game.buildGhost;
          const spec = STRUCTURE_SPECS[g.type];
          ctx.save();
          ctx.translate(g.x, g.y);
          ctx.fillStyle = g.valid ? 'rgba(56, 102, 65, 0.25)' : 'rgba(158, 42, 43, 0.25)';
          ctx.strokeStyle = g.valid ? '#386641' : '#9e2a2b';
          ctx.lineWidth = 2.4;
          ctx.setLineDash([5, 4]);
          ctx.beginPath();
          ctx.arc(0, 0, spec?.radius || 22, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.restore();
        }

        for (const mob of game.creatures) {
          if (!mob.boss || mob.windupTimer <= 0) continue;
          const progress = 1 - mob.windupTimer / mob.windupDuration;
          ctx.save();
          ctx.fillStyle = `rgba(158, 42, 43, ${0.08 + progress * 0.1})`;
          ctx.strokeStyle = `rgba(158, 42, 43, ${0.5 + progress * 0.45})`;
          ctx.lineWidth = 2.2;
          ctx.setLineDash([8, 6]);
          ctx.beginPath();
          if (mob.specialShape === 'circle') {
            ctx.arc(mob.x, mob.y, mob.specialRadius, 0, Math.PI * 2);
          } else {
            ctx.moveTo(mob.x, mob.y);
            ctx.arc(mob.x, mob.y, mob.specialRadius, mob.specialAngle - mob.specialHalfAngle, mob.specialAngle + mob.specialHalfAngle);
            ctx.closePath();
          }
          ctx.fill();
          ctx.stroke();
          ctx.restore();
        }

        // 5. Collect & Y-Sort Drawables (Nodes, Structures, Creatures, Player)
        const drawables = [];
        for (const chunk of visibleChunks) {
          for (const node of chunk.nodes) {
            drawables.push({ y: node.y, kind: 'node', obj: node });
          }
        }
        for (const st of game.structures) {
          drawables.push({ y: st.y, kind: 'structure', obj: st });
        }
        for (const mob of game.creatures) {
          drawables.push({ y: mob.y, kind: 'creature', obj: mob });
        }
        drawables.push({ y: game.player.y, kind: 'player', obj: game.player });

        drawables.sort((a, b) => a.y - b.y);

        for (const d of drawables) {
          if (d.kind === 'node') this.drawNode(ctx, d.obj, game.elapsedTime);
          else if (d.kind === 'structure') this.drawStructure(ctx, d.obj, game.elapsedTime);
          else if (d.kind === 'creature') this.drawCreature(ctx, d.obj, game.elapsedTime);
          else if (d.kind === 'player') this.drawPlayer(ctx, d.obj, game.elapsedTime);
        }

        // 6. Bouncy Loot Drops
        for (const drop of game.particles.lootDrops) {
          const bob = Math.sin(drop.bobPhase) * 3;
          ctx.save();
          ctx.fillStyle = 'rgba(44, 42, 38, 0.22)';
          ctx.beginPath();
          ctx.ellipse(drop.x, drop.y + 6, 10, 4.5, 0, 0, Math.PI * 2);
          ctx.fill();

          ctx.translate(drop.x, drop.y - drop.z + bob);
          const spec = ITEMS[drop.itemId];
          SketchIcons.drawCanvasIcon(ctx, spec ? spec.icon : drop.itemId, 22);
          if (drop.count > 1) {
            ctx.fillStyle = '#2c2c2c';
            ctx.font = 'bold 11px "Patrick Hand", sans-serif';
            ctx.fillText(`x${drop.count}`, 8, 8);
          }
          ctx.restore();
        }

        // 7. Projectiles & Particles
        for (const proj of game.particles.projectiles) {
          ctx.save();
          ctx.translate(proj.x, proj.y);
          ctx.rotate(proj.angle);
          ctx.strokeStyle = proj.isAether ? '#2a9d8f' : '#2c2c2c';
          ctx.lineWidth = proj.isAether ? 3.5 : 2.4;
          ctx.beginPath();
          ctx.moveTo(-12, 0);
          ctx.lineTo(10, 0);
          ctx.stroke();
          ctx.fillStyle = proj.isAether ? '#90e0ef' : '#5c626b';
          ctx.beginPath();
          ctx.moveTo(14, 0);
          ctx.lineTo(7, -4);
          ctx.lineTo(7, 4);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }

        for (const pt of game.particles.particles) {
          const alpha = Math.max(0, pt.life / pt.maxLife);
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = pt.color;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // 8. Floating Ink Callouts
        for (const ft of game.particles.floatingTexts) {
          const alpha = Math.min(1, (ft.life / ft.maxLife) * 1.4);
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.font = 'bold 15px "Patrick Hand", sans-serif';
          ctx.textAlign = 'center';
          ctx.fillStyle = '#fdfbf7';
          ctx.fillText(ft.text, ft.x + 1, ft.y + 1);
          ctx.fillStyle = ft.color;
          ctx.fillText(ft.text, ft.x, ft.y);
          ctx.restore();
        }

        ctx.restore();

        this.renderTimeOfDayWash(game);

        // 9. Atmospheric Dusk / Night Ink Wash & Warm Light Pools
        this.renderAtmosphereLighting(game, camX, camY);
        this.renderWeather(game);
      }

      renderTimeOfDayWash(game) {
        const time = game.timeOfDay;
        const dawn = Math.max(0, 1 - Math.abs(time - 0.18) / 0.1);
        const dusk = Math.max(0, 1 - Math.abs(time - 0.75) / 0.1);
        if (dawn <= 0 && dusk <= 0) return;

        const ctx = this.ctx;
        ctx.save();
        if (dawn > 0) {
          ctx.fillStyle = `rgba(240, 160, 91, ${dawn * 0.16})`;
          ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
        if (dusk > 0) {
          ctx.fillStyle = `rgba(177, 88, 98, ${dusk * 0.18})`;
          ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
        ctx.restore();
      }

      renderWeather(game) {
        const { type, intensity } = game.weather;
        if (intensity <= 0.01) return;

        const ctx = this.ctx;
        const w = this.canvas.width;
        const h = this.canvas.height;
        const time = game.elapsedTime;
        ctx.save();

        if (type === 'rain') {
          ctx.fillStyle = `rgba(49, 65, 77, ${intensity * 0.075})`;
          ctx.fillRect(0, 0, w, h);
          const dropCount = Math.floor(42 + intensity * 66);
          for (let i = 0; i < dropCount; i++) {
            const random = salt => game.world.hash2(i + 1, salt);
            const width = w + 160;
            const height = h + 160;
            const speed = 300 + random(53) * 390;
            const drift = 35 + random(71) * 130;
            const x = ((random(19) * width + time * drift) % width) - 80;
            const y = ((random(37) * height + time * speed) % height) - 80;
            const length = 7 + random(89) * 17;
            ctx.strokeStyle = `rgba(54, 72, 81, ${intensity * (0.12 + random(101) * 0.36)})`;
            ctx.lineWidth = 0.7 + random(131) * 1.2;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x - 2 - drift * 0.045, y + length);
            ctx.stroke();
          }
        } else if (type === 'mist') {
          const drift = (time * 13) % (w + 300);
          const mist = ctx.createLinearGradient(0, h * 0.35, 0, h);
          mist.addColorStop(0, 'rgba(177, 190, 184, 0)');
          mist.addColorStop(1, `rgba(177, 190, 184, ${intensity * 0.24})`);
          ctx.fillStyle = mist;
          ctx.fillRect(0, 0, w, h);
          ctx.fillStyle = `rgba(229, 232, 219, ${intensity * 0.075})`;
          for (let i = 0; i < 3; i++) {
            const x = ((drift + i * w * 0.48) % (w + 300)) - 150;
            ctx.beginPath();
            ctx.ellipse(x, h * (0.53 + i * 0.15), w * 0.38, h * 0.075, 0, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        ctx.restore();
      }

      drawNode(ctx, node, time) {
        ctx.save();
        ctx.translate(node.x + (node.shakeX || 0), node.y);
        ctx.scale(node.scaleX || 1, node.scaleY || 1);
        const s = node.scale || 1;
        ctx.scale(s, s);

        // Ground shadow
        ctx.fillStyle = 'rgba(44, 40, 36, 0.16)';
        ctx.beginPath();
        ctx.ellipse(0, 6, node.radius * 0.95, node.radius * 0.45, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = node.flash > 0 ? '#9e2a2b' : '#2c2c2c';
        ctx.lineWidth = 2.3;
        ctx.lineJoin = 'round';

        if (node.kind === 'tree') {
          const sway = Math.sin(time * 1.8 + node.x * 0.02) * 2.5;
          // Flared trunk with subtle bark grain
          ctx.fillStyle = '#8c6239';
          ctx.beginPath();
          ctx.moveTo(-8, 4);
          ctx.lineTo(-5, -24);
          ctx.lineTo(5, -24);
          ctx.lineTo(8, 4);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          if (node.type === 'pine_tree') {
            // Unified single-shape tiered conifer silhouette (no overlapping internal triangles)
            ctx.fillStyle = '#487047';
            ctx.beginPath();
            ctx.moveTo(sway * 1.1, -66);
            ctx.lineTo(15 + sway * 0.8, -46);
            ctx.lineTo(9 + sway * 0.7, -46);
            ctx.lineTo(22 + sway * 0.5, -29);
            ctx.lineTo(14 + sway * 0.4, -29);
            ctx.lineTo(27 + sway * 0.25, -13);
            ctx.lineTo(-27 + sway * 0.25, -13);
            ctx.lineTo(-14 + sway * 0.4, -29);
            ctx.lineTo(-22 + sway * 0.5, -29);
            ctx.lineTo(-9 + sway * 0.7, -46);
            ctx.lineTo(-15 + sway * 0.8, -46);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          } else {
            // Unified single-shape scalloped canopy (replaces 3 overlapping circles)
            const isWillow = node.type === 'willow_tree';
            const w = isWillow ? 32 : 29;
            const s1 = sway * 0.55;
            const s2 = sway * 0.85;
            ctx.fillStyle = isWillow ? '#586f60' : '#6a994e';
            ctx.beginPath();
            ctx.moveTo(-16 + s1, -16);
            ctx.bezierCurveTo(-w - 2 + s1, -16, -w - 2 + s2, -37, -17 + s2, -43);
            ctx.bezierCurveTo(-15 + sway, -61, 15 + sway, -61, 17 + s2, -43);
            ctx.bezierCurveTo(w + 2 + s2, -37, w + 2 + s1, -16, 16 + s1, -16);
            ctx.quadraticCurveTo(0 + s1, -13, -16 + s1, -16);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Subtle hand-inked foliage accents inside the single canopy
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(-8 + s2, -37, 6, 0.2, 2.3);
            ctx.moveTo(12 + s2, -32);
            ctx.arc(8 + s2, -33, 5, 0.3, 2.4);
            if (isWillow) {
              ctx.moveTo(-21 + s1, -17);
              ctx.quadraticCurveTo(-23 + s1, -8, -20 + s1, -2);
              ctx.moveTo(21 + s1, -17);
              ctx.quadraticCurveTo(23 + s1, -8, 20 + s1, -2);
            }
            ctx.stroke();
            ctx.lineWidth = 2.3;
          }
        } else if (node.kind === 'rock') {
          ctx.fillStyle = node.type === 'flint_rock' ? '#6c727a' : node.type === 'crystal_outcrop' ? '#8d99ae' : '#b5b0a4';
          ctx.beginPath();
          ctx.moveTo(-20, 6);
          ctx.lineTo(-15, -14);
          ctx.lineTo(2, -20);
          ctx.lineTo(19, -11);
          ctx.lineTo(21, 6);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          if (node.type === 'iron_rock') {
            ctx.fillStyle = '#b35c37';
            ctx.beginPath();
            ctx.arc(-5, -6, 4.5, 0, Math.PI * 2);
            ctx.arc(7, -3, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
          } else if (node.type === 'crystal_outcrop') {
            ctx.fillStyle = '#48cae4';
            ctx.beginPath();
            ctx.moveTo(-4, -8);
            ctx.lineTo(0, -28);
            ctx.lineTo(6, -8);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          }
        } else {
          // Flax reeds or Berry Bush
          if (node.type === 'berry_bush') {
            ctx.fillStyle = '#588157';
            ctx.beginPath();
            ctx.arc(0, -8, 16, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = '#9e2a2b';
            for (const [bx, by] of [[-6, -11], [5, -12], [0, -4], [8, -5]]) {
              ctx.beginPath();
              ctx.arc(bx, by, 3.2, 0, Math.PI * 2);
              ctx.fill();
            }
          } else {
            ctx.strokeStyle = '#4f772d';
            ctx.lineWidth = 2.4;
            for (const ox of [-7, -2, 3, 8]) {
              ctx.beginPath();
              ctx.moveTo(ox, 4);
              ctx.quadraticCurveTo(ox * 1.4, -10, ox * 1.8, -20);
              ctx.stroke();
            }
          }
        }

        // Damaged resource progress bar
        if (node.hp < node.maxHp) {
          const pct = Math.max(0, node.hp / node.maxHp);
          ctx.fillStyle = '#e9e2d3';
          ctx.fillRect(-18, 12, 36, 5);
          ctx.fillStyle = '#bc6c25';
          ctx.fillRect(-18, 12, 36 * pct, 5);
          ctx.strokeStyle = '#2c2c2c';
          ctx.lineWidth = 1.2;
          ctx.strokeRect(-18, 12, 36, 5);
        }

        ctx.restore();
      }

      drawStructure(ctx, st, time) {
        const spec = STRUCTURE_SPECS[st.type] || { radius: 22, maxHp: 100 };
        ctx.save();
        ctx.translate(st.x, st.y);
        ctx.fillStyle = 'rgba(44, 40, 36, 0.18)';
        ctx.beginPath();
        ctx.ellipse(0, 6, spec.radius * 0.95, spec.radius * 0.45, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#2c2c2c';
        ctx.lineWidth = 2.2;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        if (st.type === 'campfire') {
          ctx.fillStyle = '#9b9589';
          for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2;
            ctx.beginPath();
            ctx.arc(Math.cos(a) * 14, Math.sin(a) * 8 + 2, 4.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
          }
          ctx.strokeStyle = '#6f4e37';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(-11, 3);
          ctx.lineTo(11, -3);
          ctx.moveTo(-11, -3);
          ctx.lineTo(11, 3);
          ctx.stroke();
          ctx.strokeStyle = '#2c2c2c';
          ctx.lineWidth = 2.1;
          if (st.fuel > 0) {
            const f = Math.sin(time * 13 + st.id) * 2.5;
            ctx.fillStyle = '#e76f51';
            ctx.beginPath();
            ctx.moveTo(f, -24);
            ctx.quadraticCurveTo(11, -10, 6, -1);
            ctx.lineTo(-6, -1);
            ctx.quadraticCurveTo(-11, -10, f, -24);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = '#f4a261';
            ctx.beginPath();
            ctx.arc(f * 0.5, -7, 4, 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (st.type === 'workbench') {
          ctx.fillStyle = '#8f6544';
          ctx.fillRect(-19, -18, 38, 13);
          ctx.strokeRect(-19, -18, 38, 13);
          ctx.beginPath();
          ctx.moveTo(-15, -5);
          ctx.lineTo(-15, 7);
          ctx.moveTo(15, -5);
          ctx.lineTo(15, 7);
          ctx.stroke();
          ctx.fillStyle = '#fdfbf7';
          ctx.fillRect(-11, -22, 14, 7);
          ctx.strokeRect(-11, -22, 14, 7);
        } else if (st.type === 'wood_wall' || st.type === 'stone_wall') {
          ctx.fillStyle = st.type === 'stone_wall' ? '#b5b0a4' : '#9c7a54';
          ctx.beginPath();
          ctx.roundRect(-18, -24, 36, 28, 3);
          ctx.fill();
          ctx.stroke();
          this.drawHatchLines(ctx, 0, -10, 26, 16, 4, st.type === 'stone_wall' ? 0 : 1.57);
        } else if (st.type === 'storage_chest') {
          ctx.fillStyle = '#a47148';
          ctx.beginPath();
          ctx.roundRect(-16, -18, 32, 22, 4);
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(-16, -9);
          ctx.lineTo(16, -9);
          ctx.stroke();
          ctx.fillStyle = '#e9c46a';
          ctx.fillRect(-3, -12, 6, 7);
          ctx.strokeRect(-3, -12, 6, 7);
        } else if (st.type === 'standing_torch') {
          ctx.fillStyle = '#6f4e37';
          ctx.fillRect(-3, -24, 6, 28);
          ctx.strokeRect(-3, -24, 6, 28);
          const f = Math.sin(time * 12 + st.id) * 2;
          ctx.fillStyle = '#f4a261';
          ctx.beginPath();
          ctx.arc(f * 0.5, -28, 6.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        } else if (st.type === 'spike_trap') {
          ctx.fillStyle = '#6c757d';
          ctx.beginPath();
          ctx.ellipse(0, 0, 16, 10, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          if ((st.cooldown || 0) <= 0) {
            ctx.beginPath();
            ctx.moveTo(-10, -4);
            ctx.lineTo(-6, -12);
            ctx.lineTo(-2, -4);
            ctx.moveTo(2, -4);
            ctx.lineTo(6, -12);
            ctx.lineTo(10, -4);
            ctx.stroke();
          }
        } else if (st.type === 'guardian_shrine') {
          const biomeId = BOSS_DEFINITIONS[st.bossId]?.biome;
          const runeColor = biomeId === 'forest' ? '#6a994e' : biomeId === 'highlands' ? '#bc6c25' : '#2a9d8f';
          ctx.fillStyle = '#96958d';
          ctx.beginPath();
          ctx.ellipse(0, 1, 21, 13, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = '#c2bdb0';
          ctx.beginPath();
          ctx.moveTo(-9, 3);
          ctx.lineTo(-6, -19);
          ctx.lineTo(0, -26);
          ctx.lineTo(7, -18);
          ctx.lineTo(10, 3);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          ctx.strokeStyle = runeColor;
          ctx.lineWidth = 2.4;
          ctx.beginPath();
          ctx.moveTo(0, -16);
          ctx.lineTo(0, -5);
          ctx.moveTo(-4, -11);
          ctx.lineTo(4, -11);
          ctx.stroke();
        } else if (st.type === 'alch_pylon') {
          ctx.fillStyle = '#9b9589';
          ctx.beginPath();
          ctx.moveTo(-11, 5);
          ctx.lineTo(-7, -22);
          ctx.lineTo(7, -22);
          ctx.lineTo(11, 5);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          const bob = Math.sin(time * 3.5 + st.id) * 2.5;
          ctx.fillStyle = '#48cae4';
          ctx.beginPath();
          ctx.moveTo(0, -38 + bob);
          ctx.lineTo(7, -30 + bob);
          ctx.lineTo(0, -23 + bob);
          ctx.lineTo(-7, -30 + bob);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }

        if (st.hp < spec.maxHp) {
          const pct = Math.max(0, st.hp / spec.maxHp);
          ctx.fillStyle = '#e9e2d3';
          ctx.fillRect(-16, 11, 32, 4.5);
          ctx.fillStyle = '#386641';
          ctx.fillRect(-16, 11, 32 * pct, 4.5);
          ctx.strokeRect(-16, 11, 32, 4.5);
        }
        ctx.restore();
      }

      /**
       * Helper: Draws subtle hand-inked cross-hatch shading lines inside a region
       */
      drawHatchLines(ctx, x, y, w, h, count = 4, angle = -0.55) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.strokeStyle = 'rgba(44, 42, 38, 0.34)';
        ctx.lineWidth = 1.25;
        ctx.lineCap = 'round';
        const step = h / Math.max(1, count);
        for (let i = 0; i < count; i++) {
          const ly = -h * 0.5 + i * step + step * 0.5;
          const inset = Math.abs(i - (count - 1) * 0.5) * 1.6;
          ctx.beginPath();
          ctx.moveTo(-w * 0.5 + inset, ly);
          ctx.lineTo(w * 0.5 - inset, ly);
          ctx.stroke();
        }
        ctx.restore();
      }

      drawPlayer(ctx, p, time) {
        ctx.save();
        ctx.translate(p.x, p.y);

        // Dash wind streaks when dodging
        if (p.dashTimer > 0) {
          ctx.save();
          ctx.strokeStyle = 'rgba(44, 44, 44, 0.38)';
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          const dashAng = Math.atan2(p.vy, p.vx);
          ctx.rotate(dashAng);
          for (const oy of [-12, -2, 8]) {
            ctx.beginPath();
            ctx.moveTo(-14, oy);
            ctx.lineTo(-34, oy);
            ctx.stroke();
          }
          ctx.restore();
        }

        // Soft ink-wash ground shadow
        ctx.fillStyle = 'rgba(44, 40, 36, 0.22)';
        ctx.beginPath();
        ctx.ellipse(0, 8, 15, 6.2, 0, 0, Math.PI * 2);
        ctx.fill();

        // Subtle blink during invulnerability frames
        if (p.invulnTimer > 0 && Math.floor(time * 22) % 2 === 0) {
          ctx.globalAlpha = 0.68;
        }

        ctx.scale(p.scaleX, p.scaleY);

        const speed = Math.hypot(p.vx, p.vy);
        const isMoving = speed > 14;
        const bob = isMoving ? Math.abs(Math.sin(p.walkPhase)) * 3.4 : Math.sin(time * 2.8) * 0.9;
        const stride = isMoving ? Math.sin(p.walkPhase) * 5.2 : 0;
        const facingLeft = Math.cos(p.aimAngle) < -0.15;
        const facingUp = Math.sin(p.aimAngle) < -0.35;

        ctx.strokeStyle = '#2c2c2c';
        ctx.lineWidth = 2.2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // 1. Stepping Leather Explorer Boots
        const leftFootY = 6 - Math.max(0, stride) * 0.55;
        const rightFootY = 6 - Math.max(0, -stride) * 0.55;
        ctx.fillStyle = '#5c4033';
        ctx.beginPath();
        ctx.ellipse(-5 + stride * 0.45, leftFootY, 4.6, 3.2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(5 - stride * 0.45, rightFootY, 4.6, 3.2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // 2. Canvas Bedroll & Field Satchel Pack (drawn behind torso when facing down/side, or on top when facing up)
        const drawBackpack = () => {
          ctx.save();
          const packX = facingUp ? 0 : (facingLeft ? 8 : -8);
          ctx.translate(packX, -13 - bob);
          // Leather rucksack
          ctx.fillStyle = '#8c6239';
          ctx.beginPath();
          ctx.roundRect(-7, -6, 14, 13, 4);
          ctx.fill();
          ctx.stroke();
          // Rolled parchment & bedroll strapped on top
          ctx.fillStyle = '#e9dcc9';
          ctx.beginPath();
          ctx.roundRect(-8, -10, 16, 5, 2.5);
          ctx.fill();
          ctx.stroke();
          // Brass buckle
          ctx.fillStyle = '#e9c46a';
          ctx.fillRect(-2, -1, 4, 4);
          ctx.restore();
        };

        if (!facingUp) drawBackpack();

        // 3. Flowing Autumn Scarf Tail
        const scarfWave = Math.sin(time * 6.5 + p.walkPhase) * 3.2;
        const scarfDir = facingLeft ? 1 : -1;
        ctx.fillStyle = '#bc4749';
        ctx.beginPath();
        ctx.moveTo(scarfDir * 4, -17 - bob);
        ctx.quadraticCurveTo(scarfDir * 15, -15 - bob + scarfWave, scarfDir * 18, -7 - bob + scarfWave * 1.2);
        ctx.lineTo(scarfDir * 12, -6 - bob + scarfWave);
        ctx.quadraticCurveTo(scarfDir * 10, -12 - bob, scarfDir * 2, -14 - bob);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // 4. Layered Forest Cloak & Belted Tunic
        ctx.fillStyle = '#386641';
        ctx.beginPath();
        ctx.moveTo(-12, -2 - bob * 0.5);
        ctx.quadraticCurveTo(-13, -15 - bob, -7, -19 - bob);
        ctx.lineTo(7, -19 - bob);
        ctx.quadraticCurveTo(13, -15 - bob, 12, -2 - bob * 0.5);
        ctx.quadraticCurveTo(0, 1 - bob * 0.5, -12, -2 - bob * 0.5);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Inner lighter tunic V-panel & cross-hatch shading on cloak hem
        if (!facingUp) {
          ctx.fillStyle = '#6a994e';
          ctx.beginPath();
          ctx.moveTo(-4, -18 - bob);
          ctx.lineTo(4, -18 - bob);
          ctx.lineTo(2, -5 - bob * 0.6);
          ctx.lineTo(-2, -5 - bob * 0.6);
          ctx.closePath();
          ctx.fill();

          // Leather belt & brass clasp
          ctx.fillStyle = '#5c4033';
          ctx.fillRect(-10.5, -9 - bob * 0.75, 21, 3.5);
          ctx.strokeRect(-10.5, -9 - bob * 0.75, 21, 3.5);
          ctx.fillStyle = '#e9c46a';
          ctx.fillRect(-2.5, -9.5 - bob * 0.75, 5, 4.5);
          ctx.strokeRect(-2.5, -9.5 - bob * 0.75, 5, 4.5);
        }
        this.drawHatchLines(ctx, facingLeft ? 6 : -6, -6 - bob * 0.6, 6, 7, 3, -0.4);

        // Scarf neck wrap
        ctx.fillStyle = '#bc4749';
        ctx.beginPath();
        ctx.roundRect(-8, -19.5 - bob, 16, 4.5, 2.2);
        ctx.fill();
        ctx.stroke();

        if (facingUp) drawBackpack();

        // 5. Head, Tousled Hair & Expressive Face
        const headY = -26 - bob;
        ctx.fillStyle = '#f5e3c3';
        ctx.beginPath();
        ctx.arc(0, headY, 9.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Warm watercolor cheek blush
        if (!facingUp) {
          ctx.fillStyle = 'rgba(188, 71, 73, 0.24)';
          ctx.beginPath();
          ctx.arc(-5, headY + 2.5, 2.3, 0, Math.PI * 2);
          ctx.arc(5, headY + 2.5, 2.3, 0, Math.PI * 2);
          ctx.fill();
        }

        // Tousled chestnut hair tufts peeking under hat
        ctx.fillStyle = '#5c4033';
        ctx.beginPath();
        ctx.arc(-8.5, headY - 2, 3.2, 0, Math.PI * 2);
        ctx.arc(8.5, headY - 2, 3.2, 0, Math.PI * 2);
        if (facingUp) {
          ctx.arc(0, headY - 1, 8.8, 0, Math.PI);
        }
        ctx.fill();
        ctx.stroke();

        // Eyes & determined brows looking toward cursor
        if (!facingUp) {
          const lookX = Math.cos(p.aimAngle) * 2.6;
          const lookY = Math.sin(p.aimAngle) * 1.8;
          ctx.fillStyle = '#2c2c2c';
          ctx.beginPath();
          ctx.arc(-3.2 + lookX, headY + 0.5 + lookY, 1.7, 0, Math.PI * 2);
          ctx.arc(3.4 + lookX, headY + 0.5 + lookY, 1.7, 0, Math.PI * 2);
          ctx.fill();

          // Tiny white eye catchlights
          ctx.fillStyle = '#fdfbf7';
          ctx.beginPath();
          ctx.arc(-3.6 + lookX, headY - 0.1 + lookY, 0.65, 0, Math.PI * 2);
          ctx.arc(3.0 + lookX, headY - 0.1 + lookY, 0.65, 0, Math.PI * 2);
          ctx.fill();

          // Subtle ink eyebrows
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(-5.2 + lookX, headY - 2.4 + lookY);
          ctx.lineTo(-1.8 + lookX, headY - 1.9 + lookY);
          ctx.moveTo(5.2 + lookX, headY - 2.4 + lookY);
          ctx.lineTo(1.8 + lookX, headY - 1.9 + lookY);
          ctx.stroke();
          ctx.lineWidth = 2.2;
        }

        // 6. Wide-Brimmed Sketchbook Explorer Hat with Band & Feather
        ctx.save();
        ctx.translate(0, headY - 5.5);
        ctx.rotate(Math.cos(p.aimAngle) * 0.08);

        // Hat brim
        ctx.fillStyle = '#bc6c25';
        ctx.beginPath();
        ctx.ellipse(0, 0, 15.5, 4.8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Hat crown
        ctx.fillStyle = '#cc7a32';
        ctx.beginPath();
        ctx.moveTo(-8.5, -0.5);
        ctx.quadraticCurveTo(-7, -10.5, 0, -9.5);
        ctx.quadraticCurveTo(7, -10.5, 8.5, -0.5);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Hatband
        ctx.fillStyle = '#386641';
        ctx.fillRect(-8, -3, 16, 2.6);

        // Tucked white/crimson quill feather on the side of the hat
        ctx.fillStyle = '#fdfbf7';
        ctx.beginPath();
        ctx.moveTo(6.5, -2.5);
        ctx.quadraticCurveTo(13, -11, 15.5, -13);
        ctx.quadraticCurveTo(11, -7, 7.5, -1.5);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        // 7. Off-hand & Main-hand Equipped Item / Bare-Fist Punch Arc
        const swingOffset = p.swingProgress > 0 ? Math.sin(p.swingProgress * Math.PI) * 1.55 - 0.78 : 0;
        const toolAngle = p.aimAngle + swingOffset;

        // Ink-brush slash trail
        if (p.swingProgress > 0.08) {
          ctx.save();
          ctx.strokeStyle = 'rgba(44, 44, 44, 0.42)';
          ctx.lineWidth = 4.5;
          ctx.beginPath();
          ctx.arc(0, -11, (p.equippedItem?.range || 56) * 0.78, p.aimAngle - 0.95, p.aimAngle + 0.95);
          ctx.stroke();
          ctx.strokeStyle = 'rgba(253, 251, 247, 0.65)';
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.arc(0, -11, (p.equippedItem?.range || 56) * 0.72, p.aimAngle - 0.75, p.aimAngle + 0.75);
          ctx.stroke();
          ctx.restore();
        }

        // Off-hand gloved fist
        const offHandAng = p.aimAngle + 1.15;
        ctx.fillStyle = '#8c6239';
        ctx.beginPath();
        ctx.arc(Math.cos(offHandAng) * 11, -11 - bob + Math.sin(offHandAng) * 9, 3.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Main hand + equipped item (or bare-handed punch extension)
        ctx.save();
        ctx.translate(0, -11 - bob);
        ctx.rotate(toolAngle);
        const punchExtend = !p.equippedItem && p.swingProgress > 0 ? Math.sin(p.swingProgress * Math.PI) * 14 : 0;
        ctx.fillStyle = '#8c6239';
        ctx.beginPath();
        ctx.arc(12 + punchExtend, 0, 3.9, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        if (p.equippedItem) {
          ctx.translate(20, 0);
          SketchIcons.drawCanvasIcon(ctx, p.equippedItem.icon, 23);
        }
        ctx.restore();

        ctx.restore();
      }

      drawCreature(ctx, mob, time) {
        ctx.save();
        ctx.translate(mob.x, mob.y);

        const speed = Math.hypot(mob.vx, mob.vy);
        const isMoving = speed > 10;
        const phase = mob.walkPhase || (time * 3 + mob.id);
        const hopBob = isMoving ? Math.abs(Math.sin(phase)) : 0;

        // Ground shadow (wisps float higher so their shadow is smaller/softer)
        const shadowScale = mob.type === 'wisp' ? 0.65 + Math.sin(time * 4 + mob.id) * 0.08 : 1.0 - hopBob * 0.14;
        ctx.fillStyle = 'rgba(44, 40, 36, 0.20)';
        ctx.beginPath();
        ctx.ellipse(0, 6, mob.radius * 0.95 * shadowScale, mob.radius * 0.44 * shadowScale, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.scale(mob.facing * mob.scaleX, mob.scaleY);
        if (mob.boss) ctx.scale(1.48, 1.48);

        ctx.strokeStyle = mob.flash > 0 ? '#9e2a2b' : '#2c2c2c';
        ctx.lineWidth = 2.1;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        if (mob.type === 'hare') {
          // MEADOW HARE: Expressive long ears, cotton tail, hopping paws, twitching nose
          const yOff = -hopBob * 6.5;
          const earTwitch = Math.sin(time * 7 + mob.id) * 0.12;

          // Fluffy cotton tail
          ctx.fillStyle = '#fdfbf7';
          ctx.beginPath();
          ctx.arc(-11, -7 + yOff, 4.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Back ear
          ctx.save();
          ctx.translate(4, -14 + yOff);
          ctx.rotate(-0.15 - earTwitch);
          ctx.fillStyle = '#cbbba5';
          ctx.beginPath();
          ctx.ellipse(0, -7, 2.6, 7.5, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.restore();

          // Hind & front paws
          ctx.fillStyle = '#cbbba5';
          ctx.beginPath();
          ctx.ellipse(-5 - hopBob * 3, 2 + yOff * 0.4, 4.8, 2.8, -0.2, 0, Math.PI * 2);
          ctx.ellipse(7 + hopBob * 3, 2 + yOff * 0.4, 3.6, 2.4, 0.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Plump watercolor body
          ctx.fillStyle = '#dfd3c0';
          ctx.beginPath();
          ctx.ellipse(-1, -7 + yOff, 11.5, 8.2, -0.1, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Cream belly patch & ink fur hatching
          ctx.fillStyle = '#f8f3e8';
          ctx.beginPath();
          ctx.ellipse(0, -3.5 + yOff, 7.5, 3.6, 0, 0, Math.PI);
          ctx.fill();
          this.drawHatchLines(ctx, -4, -9 + yOff, 6, 5, 3, -0.35);

          // Head & chubby cheek
          ctx.fillStyle = '#e6dbc9';
          ctx.beginPath();
          ctx.arc(8, -11 + yOff, 6.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Front ear with soft pink inner wash
          ctx.save();
          ctx.translate(6, -15 + yOff);
          ctx.rotate(0.18 + earTwitch);
          ctx.fillStyle = '#dfd3c0';
          ctx.beginPath();
          ctx.ellipse(0, -7.5, 2.8, 8, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = '#e5989b';
          ctx.beginPath();
          ctx.ellipse(0, -7.5, 1.3, 5.2, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          // Eye with catchlight, pink nose & ink whiskers
          ctx.fillStyle = '#2c2c2c';
          ctx.beginPath();
          ctx.arc(9.5, -12 + yOff, 1.8, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#fdfbf7';
          ctx.beginPath();
          ctx.arc(9.0, -12.6 + yOff, 0.7, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#d47a84';
          ctx.beginPath();
          ctx.arc(14.2, -10.5 + yOff, 1.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(12, -9.5 + yOff);
          ctx.lineTo(17, -10.5 + yOff);
          ctx.moveTo(12, -8.5 + yOff);
          ctx.lineTo(16.5, -7.5 + yOff);
          ctx.stroke();

        } else if (mob.type === 'stag') {
          // BRIAR STAG: Four trotting legs, sculpted neck/muzzle, cream belly, branching antlers
          const trot = isMoving ? Math.sin(phase) * 5 : 0;
          const bob = isMoving ? Math.abs(Math.sin(phase)) * 2.2 : Math.sin(time * 2.4) * 0.7;

          // Far legs
          ctx.strokeStyle = '#5c4033';
          ctx.lineWidth = 2.6;
          ctx.beginPath();
          ctx.moveTo(-9, -6 - bob);
          ctx.lineTo(-10 - trot, 6);
          ctx.moveTo(9, -6 - bob);
          ctx.lineTo(10 + trot, 6);
          ctx.stroke();

          // Short white-tipped tail
          ctx.strokeStyle = '#2c2c2c';
          ctx.lineWidth = 2.1;
          ctx.fillStyle = '#f8f3e8';
          ctx.beginPath();
          ctx.ellipse(-17, -15 - bob, 3.8, 2.4, -0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Near legs with dark hooves
          ctx.strokeStyle = '#2c2c2c';
          ctx.lineWidth = 2.8;
          ctx.beginPath();
          ctx.moveTo(-7, -6 - bob);
          ctx.lineTo(-7 + trot, 7);
          ctx.moveTo(11, -6 - bob);
          ctx.lineTo(11 - trot, 7);
          ctx.stroke();

          // Russet torso
          ctx.lineWidth = 2.1;
          ctx.fillStyle = '#a47148';
          ctx.beginPath();
          ctx.ellipse(0, -13 - bob, 16.5, 9.5, -0.05, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Cream underbelly & cross-hatch shading
          ctx.fillStyle = '#f3ead8';
          ctx.beginPath();
          ctx.ellipse(0, -7.5 - bob, 11, 3.6, 0, 0, Math.PI);
          ctx.fill();
          this.drawHatchLines(ctx, -4, -15 - bob, 10, 6, 4, -0.4);

          // Graceful neck & head
          ctx.fillStyle = '#a47148';
          ctx.beginPath();
          ctx.moveTo(9, -16 - bob);
          ctx.lineTo(14, -27 - bob);
          ctx.lineTo(23, -24 - bob);
          ctx.lineTo(22, -19 - bob);
          ctx.lineTo(15, -12 - bob);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          // Muzzle & dark nose
          ctx.fillStyle = '#e6d5b8';
          ctx.beginPath();
          ctx.ellipse(21.5, -21.5 - bob, 3.5, 2.6, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#2c2c2c';
          ctx.beginPath();
          ctx.arc(23.8, -22.2 - bob, 1.6, 0, Math.PI * 2);
          ctx.fill();

          // Ear & expressive eye
          ctx.fillStyle = '#8c5a32';
          ctx.beginPath();
          ctx.ellipse(11, -27 - bob, 2.3, 4.5, -0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#2c2c2c';
          ctx.beginPath();
          ctx.arc(17.5, -24 - bob, 1.8, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#fdfbf7';
          ctx.beginPath();
          ctx.arc(17.0, -24.6 - bob, 0.65, 0, Math.PI * 2);
          ctx.fill();

          // Multi-tine Crown Antlers
          ctx.strokeStyle = '#3d2c20';
          ctx.lineWidth = 2.2;
          ctx.beginPath();
          ctx.moveTo(14, -27 - bob);
          ctx.lineTo(12, -39 - bob);
          ctx.lineTo(16, -44 - bob);
          ctx.moveTo(13, -33 - bob);
          ctx.lineTo(19, -36 - bob);
          ctx.moveTo(12.5, -37 - bob);
          ctx.lineTo(8, -41 - bob);
          ctx.stroke();

        } else if (mob.type === 'wolf') {
          // SHADOW WOLF: Prowling hunched silhouette, spiky ink hackles, bushy tail, glowing eyes
          const stride = isMoving ? Math.sin(phase) * 5.5 : 0;
          const bob = isMoving ? Math.abs(Math.sin(phase)) * 2.5 : Math.sin(time * 3.5) * 0.8;

          // Bushy ink-tipped tail
          const tailWag = Math.sin(time * 5 + mob.id) * 2.5;
          ctx.fillStyle = '#2b2d42';
          ctx.beginPath();
          ctx.moveTo(-14, -12 - bob);
          ctx.quadraticCurveTo(-24, -15 - bob + tailWag, -27, -7 - bob + tailWag);
          ctx.quadraticCurveTo(-20, -5 - bob, -13, -9 - bob);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          // Four bounding legs
          ctx.strokeStyle = '#1d1e2c';
          ctx.lineWidth = 2.8;
          ctx.beginPath();
          ctx.moveTo(-9, -6 - bob);
          ctx.lineTo(-11 - stride, 6);
          ctx.moveTo(-6, -6 - bob);
          ctx.lineTo(-5 + stride, 7);
          ctx.moveTo(8, -6 - bob);
          ctx.lineTo(7 - stride, 7);
          ctx.moveTo(11, -6 - bob);
          ctx.lineTo(13 + stride, 6);
          ctx.stroke();

          // Sleek muscular torso with spiky dorsal fur hackles
          ctx.lineWidth = 2.1;
          ctx.fillStyle = '#353849';
          ctx.beginPath();
          ctx.moveTo(-15, -9 - bob);
          ctx.lineTo(-12, -18 - bob);
          ctx.lineTo(-7, -16 - bob);
          ctx.lineTo(-3, -20 - bob);
          ctx.lineTo(2, -17 - bob);
          ctx.lineTo(7, -21 - bob);
          ctx.lineTo(14, -15 - bob);
          ctx.quadraticCurveTo(15, -5 - bob, 0, -5 - bob);
          ctx.quadraticCurveTo(-13, -5 - bob, -15, -9 - bob);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          this.drawHatchLines(ctx, -3, -11 - bob, 11, 6, 4, -0.45);

          // Angular wolf head, pointed ears & snarling snout
          ctx.fillStyle = '#2b2d42';
          ctx.beginPath();
          ctx.moveTo(9, -16 - bob);
          ctx.lineTo(11, -26 - bob);
          ctx.lineTo(15, -20 - bob);
          ctx.lineTo(17, -26 - bob);
          ctx.lineTo(19, -19 - bob);
          ctx.lineTo(26, -15 - bob);
          ctx.lineTo(25, -11 - bob);
          ctx.lineTo(13, -10 - bob);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          // White fang & fierce glowing ember eye
          ctx.fillStyle = '#fdfbf7';
          ctx.beginPath();
          ctx.moveTo(21, -11.5 - bob);
          ctx.lineTo(22, -9 - bob);
          ctx.lineTo(23, -11.5 - bob);
          ctx.closePath();
          ctx.fill();

          ctx.fillStyle = '#f4a261';
          ctx.beginPath();
          ctx.arc(17.5, -16.5 - bob, 2.1, 0, Math.PI * 2);
          ctx.fill();

        } else if (mob.type === 'wisp') {
          // INK WISP: Floating tattered parchment mask & swirling fountain-pen ink tendrils
          const hover = Math.sin(time * 4.2 + mob.id) * 4.5;
          const sway = Math.cos(time * 3.4 + mob.id) * 3.5;

          // Swirling outer ink aura
          ctx.fillStyle = 'rgba(43, 45, 66, 0.25)';
          ctx.beginPath();
          ctx.arc(0, -16 + hover, 18, 0, Math.PI * 2);
          ctx.fill();

          // Tattered ink cloak & trailing wisps
          ctx.fillStyle = '#1f2029';
          ctx.beginPath();
          ctx.moveTo(0, -31 + hover);
          ctx.quadraticCurveTo(15, -24 + hover, 13 + sway * 0.5, -6 + hover);
          ctx.lineTo(7 + sway, -1 + hover);
          ctx.lineTo(3 + sway * 0.6, -7 + hover);
          ctx.lineTo(-2 + sway, 1 + hover);
          ctx.lineTo(-6 + sway * 0.5, -7 + hover);
          ctx.lineTo(-12 + sway, -2 + hover);
          ctx.quadraticCurveTo(-15, -22 + hover, 0, -31 + hover);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          // Cracked ivory parchment spirit mask
          ctx.fillStyle = '#f5efe3';
          ctx.beginPath();
          ctx.ellipse(2, -18 + hover, 8.5, 10, 0.08, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Ink crack on mask
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.moveTo(1, -27 + hover);
          ctx.lineTo(3, -23 + hover);
          ctx.lineTo(0, -21 + hover);
          ctx.stroke();

          // Hollow glowing ember eyes
          ctx.fillStyle = '#e76f51';
          ctx.beginPath();
          ctx.ellipse(0, -18 + hover, 1.8, 2.6, -0.2, 0, Math.PI * 2);
          ctx.ellipse(5.5, -18 + hover, 1.8, 2.6, 0.2, 0, Math.PI * 2);
          ctx.fill();

          // Orbiting ink droplets
          const orbAng = time * 3.2 + mob.id;
          ctx.fillStyle = '#2c2c2c';
          ctx.beginPath();
          ctx.arc(Math.cos(orbAng) * 18, -16 + hover + Math.sin(orbAng) * 7, 2.4, 0, Math.PI * 2);
          ctx.arc(Math.cos(orbAng + 3.1) * 17, -16 + hover + Math.sin(orbAng + 3.1) * 7, 2.0, 0, Math.PI * 2);
          ctx.fill();

        } else if (mob.type === 'golem') {
          // CRAG GOLEM: Massive faceted boulder body, moss shoulders, heavy swinging stone fists, glowing rune visor
          const stomp = isMoving ? Math.sin(phase) * 3.5 : 0;
          const bob = isMoving ? Math.abs(Math.sin(phase)) * 2.2 : Math.sin(time * 1.8) * 0.8;

          // Squat pillar legs
          ctx.fillStyle = '#6e6a61';
          ctx.beginPath();
          ctx.roundRect(-12, -6 - stomp * 0.4, 9, 12, 3);
          ctx.roundRect(3, -6 + stomp * 0.4, 9, 12, 3);
          ctx.fill();
          ctx.stroke();

          // Faceted craggy boulder torso
          ctx.fillStyle = '#8f8a7e';
          ctx.beginPath();
          ctx.moveTo(-19, -5 - bob);
          ctx.lineTo(-22, -20 - bob);
          ctx.lineTo(-10, -32 - bob);
          ctx.lineTo(10, -32 - bob);
          ctx.lineTo(22, -20 - bob);
          ctx.lineTo(19, -5 - bob);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          // Stone fracture lines & cross-hatching
          this.drawHatchLines(ctx, -8, -14 - bob, 11, 9, 4, -0.5);
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(-10, -32 - bob);
          ctx.lineTo(-4, -22 - bob);
          ctx.lineTo(-12, -13 - bob);
          ctx.moveTo(11, -26 - bob);
          ctx.lineTo(5, -17 - bob);
          ctx.stroke();
          ctx.lineWidth = 2.1;

          // Highland moss patches on shoulders
          ctx.fillStyle = '#6a994e';
          ctx.beginPath();
          ctx.ellipse(-13, -28 - bob, 6, 3, -0.3, 0, Math.PI * 2);
          ctx.ellipse(12, -29 - bob, 5.5, 2.8, 0.25, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Recessed dark visor & glowing molten rune core
          ctx.fillStyle = '#2c2c2c';
          ctx.beginPath();
          ctx.roundRect(-3, -24 - bob, 17, 6, 2);
          ctx.fill();

          ctx.fillStyle = '#f4a261';
          ctx.beginPath();
          ctx.arc(6, -21 - bob, 2.6, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#fdfbf7';
          ctx.beginPath();
          ctx.arc(6, -21 - bob, 1.1, 0, Math.PI * 2);
          ctx.fill();

          // Heavy swinging stone fist in foreground
          ctx.fillStyle = '#7a756a';
          ctx.beginPath();
          ctx.roundRect(-5 - stomp, -14 - bob, 11, 13, 4);
          ctx.fill();
          ctx.stroke();

        } else {
          // MIRE STALKER: Amphibious bog predator with dorsal spines, whip tail & bioluminescent eyes
          const slither = isMoving ? Math.sin(phase) * 4.5 : Math.sin(time * 2.5) * 1.5;
          const bob = isMoving ? Math.abs(Math.sin(phase)) * 2.0 : 0;

          // Whip-like bog tail
          ctx.fillStyle = '#264653';
          ctx.beginPath();
          ctx.moveTo(-13, -8 - bob);
          ctx.quadraticCurveTo(-25, -12 - bob + slither, -30, -4 - bob - slither * 0.6);
          ctx.quadraticCurveTo(-22, -2 - bob, -12, -5 - bob);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          // Webbed clawed feet
          ctx.fillStyle = '#1d3540';
          ctx.beginPath();
          ctx.ellipse(-7 - slither * 0.5, 5, 5.5, 2.8, 0, 0, Math.PI * 2);
          ctx.ellipse(8 + slither * 0.5, 5, 5.5, 2.8, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Hunched scaly body with dorsal fin spines
          ctx.fillStyle = '#2a5262';
          ctx.beginPath();
          ctx.moveTo(-16, -6 - bob);
          ctx.lineTo(-12, -16 - bob);
          ctx.lineTo(-9, -22 - bob);
          ctx.lineTo(-5, -17 - bob);
          ctx.lineTo(-1, -24 - bob);
          ctx.lineTo(3, -17 - bob);
          ctx.lineTo(8, -22 - bob);
          ctx.lineTo(17, -14 - bob);
          ctx.quadraticCurveTo(18, -3 - bob, 0, -3 - bob);
          ctx.quadraticCurveTo(-14, -3 - bob, -16, -6 - bob);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          // Pale teal underbelly & cross-hatch scale shading
          ctx.fillStyle = '#8ecae6';
          ctx.globalAlpha = 0.45;
          ctx.beginPath();
          ctx.ellipse(2, -5 - bob, 11, 3, 0, 0, Math.PI);
          ctx.fill();
          ctx.globalAlpha = 1;
          this.drawHatchLines(ctx, -3, -11 - bob, 11, 6, 4, -0.4);

          // Wide-jawed head & bioluminescent cyan-amber eyes
          ctx.fillStyle = '#264653';
          ctx.beginPath();
          ctx.ellipse(13, -12 - bob, 8.5, 6.2, 0.1, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#48cae4';
          ctx.beginPath();
          ctx.arc(15, -14 - bob, 2.3, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = '#2c2c2c';
          ctx.beginPath();
          ctx.ellipse(15.5, -14 - bob, 0.8, 1.8, 0, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();

        if (mob.boss) {
          const pct = Math.max(0, mob.hp / mob.maxHp);
          const barWidth = 76;
          const barX = mob.x - barWidth * 0.5;
          const barY = mob.y - mob.radius * 2.45;
          ctx.font = 'bold 14px "Architects Daughter", sans-serif';
          ctx.textAlign = 'center';
          ctx.lineWidth = 3;
          ctx.strokeStyle = '#fdfbf7';
          ctx.strokeText(mob.bossName, mob.x, barY - 5);
          ctx.fillStyle = '#2c2c2c';
          ctx.fillText(mob.bossName, mob.x, barY - 5);
          ctx.fillStyle = '#e9e2d3';
          ctx.fillRect(barX, barY, barWidth, 6);
          ctx.fillStyle = '#9e2a2b';
          ctx.fillRect(barX, barY, barWidth * pct, 6);
          ctx.strokeStyle = '#2c2c2c';
          ctx.lineWidth = 1;
          ctx.strokeRect(barX, barY, barWidth, 6);
        } else if (mob.hp < mob.maxHp) {
          const pct = Math.max(0, mob.hp / mob.maxHp);
          ctx.fillStyle = '#e9e2d3';
          ctx.fillRect(mob.x - 16, mob.y - mob.radius * 2.1, 32, 4.5);
          ctx.fillStyle = '#9e2a2b';
          ctx.fillRect(mob.x - 16, mob.y - mob.radius * 2.1, 32 * pct, 4.5);
          ctx.strokeStyle = '#2c2c2c';
          ctx.lineWidth = 1;
          ctx.strokeRect(mob.x - 16, mob.y - mob.radius * 2.1, 32, 4.5);
        }
      }

      renderAtmosphereLighting(game, camX, camY) {
        const t = game.timeOfDay;
        let darkness = 0;
        if (t >= 0.72) {
          darkness = Math.min(0.76, ((t - 0.72) / 0.12) * 0.76);
        } else if (t < 0.22) {
          darkness = t < 0.14 ? 0.76 : Math.max(0, ((0.22 - t) / 0.08) * 0.76);
        }

        if (darkness <= 0.02) return;

        const lctx = this.lightCtx;
        const w = this.lightCanvas.width;
        const h = this.lightCanvas.height;

        lctx.save();
        lctx.globalCompositeOperation = 'source-over';
        lctx.clearRect(0, 0, w, h);
        lctx.fillStyle = `rgba(22, 20, 26, ${darkness})`;
        lctx.fillRect(0, 0, w, h);

        // Punch warm watercolor light pools through the charcoal night wash
        lctx.globalCompositeOperation = 'destination-out';
        const punchLight = (wx, wy, rad) => {
          const sx = wx - camX + w * 0.5;
          const sy = wy - camY + h * 0.5;
          const flicker = 1 + Math.sin(game.elapsedTime * 11 + wx) * 0.035;
          const r = rad * flicker;
          const grad = lctx.createRadialGradient(sx, sy, r * 0.12, sx, sy, r);
          grad.addColorStop(0, 'rgba(0,0,0,1)');
          grad.addColorStop(0.65, 'rgba(0,0,0,0.65)');
          grad.addColorStop(1, 'rgba(0,0,0,0)');
          lctx.fillStyle = grad;
          lctx.beginPath();
          lctx.arc(sx, sy, r, 0, Math.PI * 2);
          lctx.fill();
        };

        const p = game.player;
        const playerLight = p.equippedItem?.lightRadius || 82;
        punchLight(p.x, p.y - 8, playerLight);

        for (const st of game.structures) {
          const spec = STRUCTURE_SPECS[st.type];
          if (!spec?.lightRadius) continue;
          if (st.type === 'campfire' && st.fuel <= 0) continue;
          punchLight(st.x, st.y - 10, spec.lightRadius);
        }

        lctx.restore();
        this.ctx.drawImage(this.lightCanvas, 0, 0);
      }
    }

    /**
     * ============================================================================
     * MODULE 5: REACTIVE PROCEDURAL WEB AUDIO ENGINE
     * ============================================================================
     */
    class AudioEngine {
      constructor() {
        this.ctx = null;
        this.muted = false;
        this.chirpTimer = 2.0;
        this.fireCrackleTimer = 0.2;
        this.rainGain = null;
        this.rainGainValue = 0;
        this.rainIntensity = 0;
      }

      init() {
        if (!this.ctx) {
          const AudioCtx = window.AudioContext || window.webkitAudioContext;
          if (AudioCtx) this.ctx = new AudioCtx();
        }
        if (this.ctx && !this.rainGain) {
          const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 2, this.ctx.sampleRate);
          const samples = buffer.getChannelData(0);
          for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1;

          const source = this.ctx.createBufferSource();
          const filter = this.ctx.createBiquadFilter();
          this.rainGain = this.ctx.createGain();
          source.buffer = buffer;
          source.loop = true;
          filter.type = 'lowpass';
          filter.frequency.value = 1450;
          this.rainGain.gain.value = 0;
          source.connect(filter);
          filter.connect(this.rainGain);
          this.rainGain.connect(this.ctx.destination);
          source.start();
        }
      }

      resume() {
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
      }

      toggleMute() {
        this.muted = !this.muted;
        if (this.rainGain && this.ctx) {
          this.rainGain.gain.setTargetAtTime(this.muted ? 0 : this.rainIntensity * 0.035, this.ctx.currentTime, 0.08);
          this.rainGainValue = this.muted ? 0 : this.rainIntensity * 0.035;
        }
        return !this.muted;
      }

      update(dt, timeOfDay, nearestFireDist, weather) {
        this.rainIntensity = weather?.type === 'rain' ? weather.intensity : 0;
        const rainVolume = this.muted ? 0 : this.rainIntensity * 0.035;
        if (this.rainGain && this.ctx?.state === 'running' && Math.abs(rainVolume - this.rainGainValue) > 0.002) {
          this.rainGain.gain.setTargetAtTime(rainVolume, this.ctx.currentTime, 0.35);
          this.rainGainValue = rainVolume;
        }
        if (this.muted || !this.ctx || this.ctx.state !== 'running') return;
        const isNight = timeOfDay > 0.75 || timeOfDay < 0.20;

        this.chirpTimer -= dt;
        if (this.chirpTimer <= 0) {
          this.chirpTimer = isNight ? 2.4 + Math.random() * 2.5 : 4.5 + Math.random() * 4.5;
          if (isNight) this.playCricket();
          else this.playBirdChirp();
        }

        if (nearestFireDist < 220) {
          this.fireCrackleTimer -= dt;
          if (this.fireCrackleTimer <= 0) {
            this.fireCrackleTimer = 0.14 + Math.random() * 0.22;
            const vol = Math.max(0.01, (1 - nearestFireDist / 220) * 0.04);
            this.playTone(140 + Math.random() * 180, 'triangle', 0.045, vol);
          }
        }
      }

      playTone(freq, type = 'sine', dur = 0.1, vol = 0.08, slideTo = null) {
        if (this.muted || !this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, now);
        if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, now + dur);

        gain.gain.setValueAtTime(vol, now);
        gain.gain.exponentialRampToValueAtTime(0.0008, now + dur);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + dur);
      }

      playBirdChirp() {
        this.playTone(1450, 'sine', 0.08, 0.025, 1950);
        setTimeout(() => this.playTone(1750, 'sine', 0.09, 0.022, 1320), 90);
      }

      playCricket() {
        this.playTone(3600, 'sine', 0.05, 0.018, 3850);
        setTimeout(() => this.playTone(3650, 'sine', 0.05, 0.018, 3900), 75);
      }

      playFootstep(biomeId) {
        const base = biomeId === 'highlands' ? 190 : biomeId === 'mire' ? 105 : 135;
        this.playTone(base + Math.random() * 25, 'triangle', 0.055, 0.035, 65);
      }

      playSwing(isDash = false) {
        this.playTone(isDash ? 320 : 250, 'sine', 0.12, 0.065, 85);
      }

      playHit(material, combo = 1, broken = false) {
        const pitchBoost = Math.min(80, combo * 14);
        if (material === 'stone') {
          this.playTone(420 + pitchBoost, 'square', broken ? 0.18 : 0.08, 0.07, broken ? 140 : 280);
        } else if (material === 'wood') {
          this.playTone(190 + pitchBoost, 'triangle', broken ? 0.22 : 0.09, 0.09, broken ? 70 : 110);
        } else {
          this.playTone(150, 'sawtooth', 0.11, 0.07, 65);
        }
      }

      playPickup() {
        this.playTone(540, 'sine', 0.08, 0.065, 840);
      }

      playInkStamp() {
        this.playTone(145, 'triangle', 0.14, 0.11, 58);
      }

      playPaperRustle() {
        this.playTone(480 + Math.random() * 140, 'sine', 0.045, 0.03, 620);
      }
    }

    /**
     * ============================================================================
     * MODULE 6A: PERSISTENT LOCALSTORAGE SAVE SYSTEM
     * ============================================================================
     */
    class SaveSystem {
      static save(game) {
        try {
          const payload = {
            version: 1,
            seed: game.world.seed,
            removedNodes: Array.from(game.world.removedNodes),
            day: game.day,
            timeOfDay: game.timeOfDay,
            unlockedTier: game.unlockedTier,
            bossesDefeated: Array.from(game.bossesDefeated || []),
            unlockedRecipes: Array.from(game.unlockedRecipes || []),
            craftedRecipes: Array.from(game.craftedRecipes || []),
            seenItems: Array.from(game.seenItems || []),
            progressStats: game.progressStats,
            player: {
              x: game.player.x,
              y: game.player.y,
              hp: game.player.hp,
              hunger: game.player.hunger,
              stamina: game.player.stamina,
              warmth: game.player.warmth,
              activeSlot: game.player.activeSlot,
              inventory: game.inventory
            },
            structures: game.structures.map(s => ({
              id: s.id,
              type: s.type,
              bossId: s.bossId || null,
              x: s.x,
              y: s.y,
              hp: s.hp,
              fuel: s.fuel || 0,
              storage: s.storage || null
            }))
          };
          localStorage.setItem(CONFIG.SAVE_KEY, JSON.stringify(payload));
          const lbl = document.getElementById('save-status-label');
          if (lbl) lbl.textContent = `Saved at ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
        } catch (err) {
          console.warn('Save failed:', err);
        }
      }

      static load() {
        try {
          const raw = localStorage.getItem(CONFIG.SAVE_KEY);
          if (!raw) return null;
          const parsed = JSON.parse(raw);
          if (!parsed || !parsed.player) return null;
          return parsed;
        } catch (err) {
          return null;
        }
      }

      static clear() {
        try {
          localStorage.removeItem(CONFIG.SAVE_KEY);
        } catch (err) {
          console.warn('Clear save failed:', err);
        }
      }
    }

    /**
     * ============================================================================
     * MODULE 6B: GUIDED FIELD TUTORIAL MANAGER
     * ============================================================================
     */
    const TUTORIAL_STEPS = [
      {
        id: 'move',
        title: '1. Get Moving',
        desc: 'Move with WASD or the arrow keys. Space starts a short dash that can avoid a hit.',
        hint: 'Objective: Walk a short distance and use Space once.'
      },
      {
        id: 'gather',
        title: '2. Gather Supplies',
        desc: 'Left-click nearby trees, rocks, reeds, or berry bushes. Collect the drops by walking over them.',
        hint: 'Objective: Break one nearby resource.'
      },
      {
        id: 'craft',
        title: '3. Make Your First Gear',
        desc: 'Press C to open the sketchbook. Craft a tool or weapon from the materials you gathered.',
        hint: 'Objective: Craft any recipe.'
      },
      {
        id: 'gear',
        title: '4. Prepare for a Fight',
        desc: 'Place crafted tools or weapons in your hotbar and select one. Food restores hunger; a lit fire helps in cold weather.',
        hint: 'Objective: Equip a tool, weapon, or light.'
      },
      {
        id: 'guardian',
        title: '5. Summon a Guardian',
        desc: 'Complete Tier I, find a shrine in its home biome, and offer an Aether Crystal. Watch the warning shape and dodge each strike.',
        hint: 'Objective: Sacrifice a crystal and defeat a guardian.'
      }
    ];

    class TutorialManager {
      constructor(game) {
        this.game = game;
        this.active = false;
        this.stepIndex = 0;
        this.walkDist = 0;
        this.dashed = false;
      }

      start(forceShow = false) {
        if (!forceShow && localStorage.getItem(CONFIG.TUTORIAL_KEY) === '1') {
          this.active = false;
          this.render();
          return;
        }
        this.active = true;
        this.stepIndex = 0;
        this.walkDist = 0;
        this.dashed = false;
        this.render();
      }

      recordMovement(dist) {
        if (!this.active || TUTORIAL_STEPS[this.stepIndex]?.id !== 'move') return;
        this.walkDist += dist;
        if (this.walkDist >= 110 && this.dashed) {
          this.completeStep('move');
        }
      }

      recordDash() {
        if (!this.active || TUTORIAL_STEPS[this.stepIndex]?.id !== 'move') return;
        this.dashed = true;
        if (this.walkDist >= 110 && this.dashed) {
          this.completeStep('move');
        }
      }

      completeStep(stepId) {
        if (!this.active) return;
        const cur = TUTORIAL_STEPS[this.stepIndex];
        if (!cur || cur.id !== stepId) return;

        this.stepIndex += 1;
        this.game.audio.playPickup();
        if (this.stepIndex >= TUTORIAL_STEPS.length) {
          this.active = false;
          localStorage.setItem(CONFIG.TUTORIAL_KEY, '1');
          this.game.ui.showToast('Field Training Complete! Survive & explore.', 'compass');
        }
        this.render();
      }

      skip() {
        this.active = false;
        localStorage.setItem(CONFIG.TUTORIAL_KEY, '1');
        this.render();
      }

      render() {
        const card = document.getElementById('tutorial-card');
        if (!card) return;
        if (!this.active || !this.game.started) {
          card.classList.add('hidden');
          return;
        }
        card.classList.remove('hidden');
        const step = TUTORIAL_STEPS[this.stepIndex];
        document.getElementById('tut-step-title').textContent = step.title;
        document.getElementById('tut-step-desc').textContent = step.desc;
        document.getElementById('tut-step-hint').textContent = step.hint;

        const dots = document.getElementById('tut-dots');
        dots.innerHTML = TUTORIAL_STEPS.map((_, idx) => {
          const cls = idx < this.stepIndex ? 'done' : idx === this.stepIndex ? 'active' : '';
          return `<span class="tut-dot ${cls}"></span>`;
        }).join('');
      }
    }

    /**
     * ============================================================================
     * MODULE 7: TACTILE PAPERCSS UI & INVENTORY MANAGER
     * ============================================================================
     */
    class UIManager {
      constructor(game) {
        this.game = game;
        this.activeCraftFilter = 'all';
        this.swapSourceIndex = null;
        this.openStructureId = null;
        this.lastTimeIconKey = '';

        SketchIcons.hydrateDOM();
        this.buildHotbarSlots();
        this.bindUIEvents();
        this.refreshTitleScreen();
        if (localStorage.getItem(CONFIG.TUTORIAL_KEY) !== '1') {
          this.toggleTutorialModal(true);
        }
      }

      refreshTitleScreen() {
        const saved = SaveSystem.load();
        const contBtn = document.getElementById('btn-title-continue');
        const contText = document.getElementById('btn-title-continue-text');
        if (saved && contBtn) {
          contBtn.style.display = 'inline-flex';
          contText.textContent = `Continue Expedition (Day ${saved.day || 1})`;
        } else if (contBtn) {
          contBtn.style.display = 'none';
        }
      }

      hideTitleScreen() {
        const ts = document.getElementById('title-screen');
        if (ts) ts.classList.add('hidden');
      }

      buildHotbarSlots() {
        const wrap = document.getElementById('hotbar-slots');
        wrap.innerHTML = '';
        for (let i = 0; i < CONFIG.HOTBAR_SLOTS; i++) {
          const slot = document.createElement('div');
          slot.className = 'inv-slot';
          slot.dataset.slot = i;
          slot.innerHTML = `
            <span class="slot-key">${i + 1}</span>
            <span class="slot-icon"></span>
            <span class="slot-count"></span>
          `;
          slot.addEventListener('click', () => this.game.selectHotbarSlot(i));
          wrap.appendChild(slot);
        }
      }

      bindUIEvents() {
        // Title Screen Controls
        document.getElementById('btn-title-continue').addEventListener('click', () => {
          if (localStorage.getItem(CONFIG.TUTORIAL_KEY) !== '1' && !this.game.tutorial.active) {
            this.toggleTutorialModal(true);
            return;
          }
          this.game.startExpedition(false, false);
        });
        document.getElementById('btn-title-new').addEventListener('click', () => {
          if (localStorage.getItem(CONFIG.TUTORIAL_KEY) !== '1' && !this.game.tutorial.active) {
            this.toggleTutorialModal(true);
            return;
          }
          SaveSystem.clear();
          this.game.resetToFreshWorld();
          this.game.startExpedition(false, true);
        });
        document.getElementById('btn-title-tutorial').addEventListener('click', () => {
          this.toggleTutorialModal(true);
        });
        document.getElementById('btn-title-guide').addEventListener('click', () => {
          this.toggleJournalModal(true);
        });
        document.getElementById('btn-open-tutorial-from-guide').addEventListener('click', () => {
          this.toggleTutorialModal(true);
        });
        document.getElementById('btn-close-tutorial').addEventListener('click', () => this.toggleTutorialModal(false));
        document.getElementById('btn-skip-first-tutorial').addEventListener('click', () => {
          this.game.tutorial.skip();
          this.toggleTutorialModal(false);
        });
        document.getElementById('btn-start-guided').addEventListener('click', () => {
          this.closeAllModals();
          this.game.startExpedition(true, false);
        });

        // Tutorial Skip & Replay
        document.getElementById('btn-skip-tutorial').addEventListener('click', () => {
          this.game.tutorial.skip();
        });
        document.getElementById('btn-replay-tutorial').addEventListener('click', () => {
          this.closeAllModals();
          this.game.tutorial.start(true);
        });

        // HUD & Modal Buttons
        document.getElementById('btn-open-craft').addEventListener('click', () => this.toggleCraftModal());
        document.getElementById('btn-close-craft').addEventListener('click', () => this.toggleCraftModal(false));
        document.getElementById('btn-open-journal').addEventListener('click', () => this.toggleJournalModal());
        document.getElementById('btn-close-journal').addEventListener('click', () => this.toggleJournalModal(false));
        document.getElementById('btn-close-struct').addEventListener('click', () => this.closeStructureModal());

        document.getElementById('btn-toggle-audio').addEventListener('click', () => {
          this.game.audio.init();
          const on = this.game.audio.toggleMute();
          document.getElementById('audio-icon-wrap').innerHTML = SketchIcons.svg(on ? 'sound_on' : 'sound_off', 18);
          this.showToast(on ? 'Sketchbook Audio Enabled' : 'Audio Muted', on ? 'sound_on' : 'sound_off');
        });

        // Craft filter tabs
        document.querySelectorAll('.craft-tab').forEach(btn => {
          btn.addEventListener('click', () => {
            document.querySelectorAll('.craft-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            this.activeCraftFilter = btn.dataset.tier;
            this.game.audio.playPaperRustle();
            this.renderCraftRecipes();
          });
        });

        // Save & Reset controls
        document.getElementById('btn-manual-save').addEventListener('click', () => {
          SaveSystem.save(this.game);
          this.game.audio.playInkStamp();
          this.showToast('Expedition Saved to Sketchbook!', 'save');
        });

        document.getElementById('btn-ask-reset').addEventListener('click', () => {
          document.getElementById('reset-confirm-box').style.display = 'block';
        });
        document.getElementById('btn-cancel-reset').addEventListener('click', () => {
          document.getElementById('reset-confirm-box').style.display = 'none';
        });
        document.getElementById('btn-confirm-reset').addEventListener('click', () => {
          SaveSystem.clear();
          this.game.resetToFreshWorld();
          this.closeAllModals();
          this.refreshAll();
          this.showToast('Generated a fresh uncharted wilderness!', 'sprout');
        });

        // Game Over modal controls
        document.getElementById('btn-respawn-trailhead').addEventListener('click', () => {
          document.getElementById('modal-gameover').classList.remove('open');
          this.game.respawnAtTrailhead();
        });
        document.getElementById('btn-fresh-world-death').addEventListener('click', () => {
          SaveSystem.clear();
          this.game.resetToFreshWorld();
          document.getElementById('modal-gameover').classList.remove('open');
          this.refreshAll();
        });
        document.getElementById('btn-close-victory').addEventListener('click', () => {
          document.getElementById('modal-victory').classList.remove('open');
        });
      }

      showToast(text, iconId = null) {
        const stack = document.getElementById('toast-stack');
        const el = document.createElement('div');
        el.className = 'sketch-toast';
        el.style.display = 'inline-flex';
        el.style.alignItems = 'center';
        el.style.gap = '6px';
        el.innerHTML = `${iconId ? SketchIcons.svg(iconId, 18) : ''}<span>${text}</span>`;
        stack.appendChild(el);
        setTimeout(() => el.remove(), 2450);
      }

      bounceHotbarSlot(slotIndex) {
        const slotEl = document.querySelector(`#hotbar-slots .inv-slot[data-slot="${slotIndex}"]`);
        if (!slotEl) return;
        slotEl.classList.remove('bounce');
        void slotEl.offsetWidth;
        slotEl.classList.add('bounce');
      }

      refreshInventoryUI() {
        const hotbarEls = document.querySelectorAll('#hotbar-slots .inv-slot');
        hotbarEls.forEach((el, idx) => {
          const stack = this.game.inventory[idx];
          el.classList.toggle('active', idx === this.game.player.activeSlot);
          const iconEl = el.querySelector('.slot-icon');
          const countEl = el.querySelector('.slot-count');
          if (stack && ITEMS[stack.id]) {
            iconEl.innerHTML = SketchIcons.svg(ITEMS[stack.id].icon, 24);
            countEl.textContent = stack.count > 1 ? stack.count : '';
            el.title = `${ITEMS[stack.id].name} (${stack.count})`;
          } else {
            iconEl.innerHTML = '';
            countEl.textContent = '';
            el.title = `Empty Slot ${idx + 1}`;
          }
        });

        // Update active item caption
        const eq = this.game.player.equippedItem;
        const caption = document.getElementById('active-item-label');
        if (!eq) {
          caption.innerHTML = `Bare Hands — Click to Harvest / Attack • [Space] Dash`;
        } else if (eq.category === 'structure') {
          caption.innerHTML = `${SketchIcons.svg(eq.icon, 18)} <span>${eq.name} — Left-Click Ground to Place • Right-Click Cancel</span>`;
        } else if (eq.category === 'food') {
          caption.innerHTML = `${SketchIcons.svg(eq.icon, 18)} <span>${eq.name} — Click or Right-Click to Eat (+${eq.food} Hunger)</span>`;
        } else {
          caption.innerHTML = `${SketchIcons.svg(eq.icon, 18)} <span>${eq.name} — ${eq.desc}</span>`;
        }

        if (document.getElementById('modal-craft').classList.contains('open')) {
          this.renderBackpackGrid();
          this.renderCraftRecipes();
        }
      }

      renderBackpackGrid() {
        const grid = document.getElementById('backpack-slots');
        grid.innerHTML = '';
        for (let i = 0; i < CONFIG.INV_SLOTS; i++) {
          const stack = this.game.inventory[i];
          const el = document.createElement('div');
          el.className = 'inv-slot';
          if (this.swapSourceIndex === i) el.classList.add('active');
          el.innerHTML = `
            <span class="slot-key">${i < 8 ? i + 1 : ''}</span>
            <span class="slot-icon">${stack ? SketchIcons.svg(ITEMS[stack.id].icon, 24) : ''}</span>
            <span class="slot-count">${stack && stack.count > 1 ? stack.count : ''}</span>
          `;
          el.title = stack ? `${ITEMS[stack.id].name} (Click to move/swap)` : 'Empty Satchel Slot';
          el.addEventListener('click', () => this.handleInventorySlotClick(i));
          grid.appendChild(el);
        }
      }

      handleInventorySlotClick(index) {
        this.game.audio.playPaperRustle();
        const hint = document.getElementById('selected-swap-hint');
        if (this.swapSourceIndex === null) {
          if (!this.game.inventory[index]) return;
          this.swapSourceIndex = index;
          hint.textContent = `Selected ${ITEMS[this.game.inventory[index].id].name} — click destination slot`;
        } else {
          if (this.swapSourceIndex !== index) {
            const temp = this.game.inventory[this.swapSourceIndex];
            this.game.inventory[this.swapSourceIndex] = this.game.inventory[index];
            this.game.inventory[index] = temp;
            this.game.syncEquipped();
          }
          this.swapSourceIndex = null;
          hint.textContent = '';
        }
        this.refreshInventoryUI();
      }

      renderCraftRecipes() {
        const grid = document.getElementById('craft-recipes-grid');
        grid.innerHTML = '';

        const stations = this.game.getNearbyStations();
        document.getElementById('station-status-text').innerHTML =
          `Nearby Stations: <strong>${stations.workbench ? 'Field Workbench' : 'No Workbench'}</strong> • <strong>${stations.campfire ? 'Lit Campfire' : 'No Lit Campfire'}</strong>`;

        // Render Progression Tier Banner & Checklist
        const banner = document.getElementById('progression-banner');
        if (banner) {
          const curTier = this.game.unlockedTier;
          const tSpec = PROGRESSION_TIERS[curTier] || PROGRESSION_TIERS[1];
          const st = this.game.progressStats;
          let checklistHtml = '';

          if (curTier === 1) {
            const hasWorkbench = st.workbenchesBuilt >= 1;
            const hasTools = st.tier1ToolsCrafted >= 2;
            checklistHtml = `
              <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:6px; font-size:0.88rem;">
                <span style="color:${hasWorkbench ? 'var(--ink-forest)' : 'var(--ink-muted)'}; font-weight:bold;">[${hasWorkbench ? 'X' : ' '}] Place Field Workbench (${Math.min(1, st.workbenchesBuilt)}/1)</span>
                <span style="color:${hasTools ? 'var(--ink-forest)' : 'var(--ink-muted)'}; font-weight:bold;">[${hasTools ? 'X' : ' '}] Craft Tier I Tools/Weapons (${Math.min(2, st.tier1ToolsCrafted)}/2)</span>
              </div>
            `;
          } else if (curTier === 2) {
            const hasIron = st.ironSmelted >= 2;
            const hasTier2Gear = st.tier2GearCrafted >= 1;
            const hasCrystal = st.crystalsFound >= 1;
            checklistHtml = `
              <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:6px; font-size:0.88rem;">
                <span style="color:${hasIron ? 'var(--ink-forest)' : 'var(--ink-muted)'}; font-weight:bold;">[${hasIron ? 'X' : ' '}] Smelt Forged Iron (${Math.min(2, st.ironSmelted)}/2)</span>
                <span style="color:${hasTier2Gear ? 'var(--ink-forest)' : 'var(--ink-muted)'}; font-weight:bold;">[${hasTier2Gear ? 'X' : ' '}] Craft Iron Tool/Weapon (${Math.min(1, st.tier2GearCrafted)}/1)</span>
                <span style="color:${hasCrystal ? 'var(--ink-forest)' : 'var(--ink-muted)'}; font-weight:bold;">[${hasCrystal ? 'X' : ' '}] Discover Aether Crystal (${Math.min(1, st.crystalsFound)}/1)</span>
              </div>
            `;
          }

          banner.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px;">
              <strong>Current Era: ${tSpec.name}</strong>
              <span class="badge ${tSpec.badgeClass}">Era ${curTier} / 3</span>
            </div>
            <div style="font-size:0.88rem; color:var(--ink-muted); margin-top:2px;">${tSpec.nextGoal}</div>
            ${checklistHtml}
          `;
        }

        for (const rec of RECIPES) {
          const outSpec = ITEMS[rec.out];
          if (!outSpec) continue;

          if (this.activeCraftFilter === 'structure' && outSpec.category !== 'structure') continue;
          if (['1', '2', '3'].includes(this.activeCraftFilter) && String(rec.tier) !== this.activeCraftFilter) continue;

          const tierUnlocked = rec.tier <= this.game.unlockedTier;
          const stationMet = !rec.station || stations[rec.station];
          const canAfford = this.game.hasIngredients(rec.cost);
          const craftable = tierUnlocked && stationMet && canAfford;

          const costHtml = Object.entries(rec.cost).map(([itemId, amt]) => {
            const have = this.game.countItem(itemId);
            const ok = have >= amt;
            return `<span style="color:${ok ? 'var(--ink-forest)' : 'var(--ink-crimson)'}; font-weight:bold; display:inline-flex; align-items:center; gap:2px;">
              ${SketchIcons.svg(ITEMS[itemId].icon, 16)}${amt} (${have})
            </span>`;
          }).join(' • ');

          let lockNotice = '';
          let btnText = 'Craft Item';
          if (!tierUnlocked) {
            lockNotice = `<small style="color:var(--ink-crimson); font-weight:bold; display:block; margin-bottom:4px;">Locked — Advance to Tier ${rec.tier} Era first</small>`;
            btnText = `Tier ${rec.tier} Locked`;
          } else if (!stationMet) {
            lockNotice = `<small style="color:var(--ink-crimson); font-weight:bold; display:block; margin-bottom:4px;">Requires nearby ${rec.station === 'workbench' ? 'Field Workbench' : 'Lit Campfire'}</small>`;
            btnText = 'Station Required';
          } else if (!canAfford) {
            btnText = 'Need Materials';
          }

          const card = document.createElement('div');
          card.className = `recipe-card ${(!tierUnlocked || !stationMet) ? 'locked' : ''}`;
          card.innerHTML = `
            <div class="ink-stamp">CRAFTED</div>
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong style="display:inline-flex; align-items:center; gap:5px;">${SketchIcons.svg(outSpec.icon, 20)} ${outSpec.name} ${rec.count > 1 ? `x${rec.count}` : ''}</strong>
                <span class="badge ${rec.tier === 3 ? 'secondary' : rec.tier === 2 ? 'warning' : ''}">Tier ${rec.tier}</span>
              </div>
              <div style="font-size:0.86rem; color:var(--ink-muted); margin-top:2px;">${outSpec.desc}</div>
            </div>
            <div>
              <div style="font-size:0.88rem; margin-bottom:6px; display:flex; flex-wrap:wrap; align-items:center; gap:4px;">Cost: ${costHtml}</div>
              ${lockNotice}
              <button class="paper-btn btn-mini ${craftable ? 'btn-success' : ''}" ${!craftable ? 'disabled' : ''} style="width:100%; justify-content:center;">
                ${SketchIcons.svg('quill', 15)}
                <span>${btnText}</span>
              </button>
            </div>
          `;

          const btn = card.querySelector('button');
          btn.addEventListener('click', () => {
            if (this.game.craftRecipe(rec)) {
              const stamp = card.querySelector('.ink-stamp');
              stamp.classList.remove('stamped');
              void stamp.offsetWidth;
              stamp.classList.add('stamped');
              setTimeout(() => this.renderCraftRecipes(), 420);
            }
          });

          grid.appendChild(card);
        }
      }

      toggleCraftModal(forceState) {
        const modal = document.getElementById('modal-craft');
        const next = forceState !== undefined ? forceState : !modal.classList.contains('open');
        this.closeAllModals();
        if (next) {
          this.game.audio.playPaperRustle();
          this.swapSourceIndex = null;
          modal.classList.add('open');
          this.renderBackpackGrid();
          this.renderCraftRecipes();
        }
      }

      toggleJournalModal(forceState) {
        const modal = document.getElementById('modal-journal');
        const next = forceState !== undefined ? forceState : !modal.classList.contains('open');
        this.closeAllModals();
        if (next) {
          this.game.audio.playPaperRustle();
          document.getElementById('reset-confirm-box').style.display = 'none';
          modal.classList.add('open');
        }
      }

      toggleTutorialModal(forceState) {
        const modal = document.getElementById('modal-tutorial');
        const next = forceState !== undefined ? forceState : !modal.classList.contains('open');
        this.closeAllModals();
        if (next) {
          this.game.audio.playPaperRustle();
          modal.classList.add('open');
        }
      }

      openStructureModal(st) {
        this.closeAllModals();
        this.openStructureId = st.id;
        this.game.audio.playPaperRustle();
        const modal = document.getElementById('modal-structure');
        const title = document.getElementById('struct-modal-title');
        const body = document.getElementById('struct-modal-body');
        if (st.type === 'guardian_shrine') {
          const bossSpec = BOSS_DEFINITIONS[st.bossId];
          const defeated = this.game.bossesDefeated.includes(st.bossId);
          const guardianActive = this.game.creatures.some(mob => mob.boss);
          const hasCrystal = this.game.countItem('alch_crystal') > 0;
          const canSummon = !defeated && !guardianActive && this.game.unlockedTier >= 2 && hasCrystal;
          const status = defeated
            ? 'This guardian has already been defeated.'
            : guardianActive
              ? 'Defeat the active guardian before summoning another.'
              : this.game.unlockedTier < 2
                ? 'Complete Tier I before using this shrine.'
                : hasCrystal
                  ? 'Offer one Aether Crystal to summon the guardian.'
                  : 'Requires one Aether Crystal.';

          title.innerHTML = `${SketchIcons.svg('compass', 24)}<span>${bossSpec.name} Shrine</span>`;
          body.innerHTML = `
            <p>${status}</p>
            <button class="paper-btn btn-mini btn-warning" id="shrine-summon" ${canSummon ? '' : 'disabled'}>
              ${SketchIcons.svg('alch_crystal', 16)}<span>Sacrifice Aether Crystal</span>
            </button>
          `;
          body.querySelector('#shrine-summon').addEventListener('click', () => {
            if (!canSummon || !this.game.consumeItem('alch_crystal', 1)) return;
            if (!this.game.spawnGuardian(st.bossId, st)) {
              this.game.addItem('alch_crystal', 1);
              this.showToast('The shrine cannot answer here.', 'warning');
              return;
            }
            this.closeStructureModal();
          });
        } else if (st.type === 'campfire' || st.type === 'iron_brazier') {
          const isBrazier = st.type === 'iron_brazier';
          const maxFuel = isBrazier ? 200 : 120;
          title.innerHTML = `${SketchIcons.svg(st.type, 24)}<span>${isBrazier ? 'Iron Hearth Brazier' : 'Campfire & Hearth'}</span>`;
          const fuelPct = Math.round((st.fuel / maxFuel) * 100);
          body.innerHTML = `
            <p>Fire Fuel: <strong>${fuelPct}%</strong> (${Math.ceil(st.fuel)}s remaining)</p>
            <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
              <button class="paper-btn btn-mini btn-warning" id="cf-add-wood">${SketchIcons.svg('wood', 16)}<span>Add Timber Log (+40s)</span></button>
              <button class="paper-btn btn-mini btn-secondary" id="cf-add-coal">${SketchIcons.svg('charcoal', 16)}<span>Add Charcoal (+75s)</span></button>
            </div>
            <hr />
            <strong>Quick Hearth Cooking &amp; Smelting:</strong>
            <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:8px;">
              <button class="paper-btn btn-mini btn-success" id="cf-cook-meat">${SketchIcons.svg('cooked_meat', 16)}<span>Roast Haunch (1 Raw Haunch)</span></button>
              <button class="paper-btn btn-mini btn-success" id="cf-smelt-iron">${SketchIcons.svg('iron_ingot', 16)}<span>Smelt Iron (2 Iron Ore + 1 Wood)</span></button>
            </div>
          `;
          body.querySelector('#cf-add-wood').addEventListener('click', () => {
            if (this.game.consumeItem('wood', 1)) {
              st.fuel = Math.min(maxFuel, st.fuel + 40);
              this.game.audio.playInkStamp();
              this.openStructureModal(st);
            } else this.showToast('Need Timber Log!', 'wood');
          });
          body.querySelector('#cf-add-coal').addEventListener('click', () => {
            if (this.game.consumeItem('charcoal', 1)) {
              st.fuel = Math.min(maxFuel, st.fuel + 75);
              this.game.audio.playInkStamp();
              this.openStructureModal(st);
            } else this.showToast('Need Charcoal!', 'charcoal');
          });
          body.querySelector('#cf-cook-meat').addEventListener('click', () => {
            if (st.fuel <= 0) return this.showToast('Light the hearth with fuel first!', st.type);
            const rec = RECIPES.find(r => r.id === 'r_cooked_meat');
            if (this.game.craftRecipe(rec, true)) this.openStructureModal(st);
            else this.showToast('Need Raw Haunch!', 'raw_meat');
          });
          body.querySelector('#cf-smelt-iron').addEventListener('click', () => {
            if (st.fuel <= 0) return this.showToast('Light the hearth with fuel first!', st.type);
            const rec = RECIPES.find(r => r.id === 'r_iron_ingot');
            if (this.game.craftRecipe(rec, true)) this.openStructureModal(st);
            else this.showToast('Need 2 Iron Ore & 1 Timber Log!', 'iron_ore');
          });
        } else if (st.type === 'storage_chest') {
          title.innerHTML = `${SketchIcons.svg('storage_chest', 24)}<span>Sketchbook Storage Chest</span>`;
          if (!st.storage) st.storage = new Array(12).fill(null);

          let html = `<p>Click a chest slot to take into your satchel, or click a satchel item below to store it:</p>`;
          html += `<div class="chest-grid">`;
          st.storage.forEach((slot, idx) => {
            html += `<div class="inv-slot chest-slot" data-cidx="${idx}">
              <span class="slot-icon">${slot ? SketchIcons.svg(ITEMS[slot.id].icon, 24) : ''}</span>
              <span class="slot-count">${slot && slot.count > 1 ? slot.count : ''}</span>
            </div>`;
          });
          html += `</div><hr /><strong>Your Satchel (Click to Deposit):</strong>`;
          html += `<div class="chest-bag-grid">`;
          this.game.inventory.forEach((slot, idx) => {
            html += `<div class="inv-slot bag-dep-slot" data-bidx="${idx}">
              <span class="slot-icon">${slot ? SketchIcons.svg(ITEMS[slot.id].icon, 22) : ''}</span>
              <span class="slot-count">${slot && slot.count > 1 ? slot.count : ''}</span>
            </div>`;
          });
          html += `</div>`;
          body.innerHTML = html;

          body.querySelectorAll('.chest-slot').forEach(el => {
            el.addEventListener('click', () => {
              const cidx = Number(el.dataset.cidx);
              const item = st.storage[cidx];
              if (!item) return;
              if (this.game.addItem(item.id, item.count)) {
                st.storage[cidx] = null;
                this.game.audio.playPickup();
                this.openStructureModal(st);
              } else {
                this.showToast('Satchel is full!', 'warning');
              }
            });
          });

          body.querySelectorAll('.bag-dep-slot').forEach(el => {
            el.addEventListener('click', () => {
              const bidx = Number(el.dataset.bidx);
              const item = this.game.inventory[bidx];
              if (!item) return;
              const maxStack = ITEMS[item.id]?.maxStack || 1;
              let placed = false;

              for (let i = 0; i < st.storage.length; i++) {
                if (st.storage[i] && st.storage[i].id === item.id && st.storage[i].count < maxStack) {
                  const space = maxStack - st.storage[i].count;
                  const move = Math.min(space, item.count);
                  st.storage[i].count += move;
                  item.count -= move;
                  if (item.count <= 0) {
                    this.game.inventory[bidx] = null;
                    placed = true;
                    break;
                  }
                }
              }

              if (!placed && item.count > 0) {
                const emptyIdx = st.storage.findIndex(s => s === null);
                if (emptyIdx !== -1) {
                  st.storage[emptyIdx] = { id: item.id, count: item.count };
                  this.game.inventory[bidx] = null;
                  placed = true;
                }
              }

              if (placed) {
                this.game.audio.playPickup();
                this.game.syncEquipped();
                this.refreshInventoryUI();
                this.openStructureModal(st);
              } else {
                this.showToast('Storage chest is full!', 'warning');
              }
            });
          });
        } else {
          const spec = STRUCTURE_SPECS[st.type] || { name: 'Structure', maxHp: 100 };
          title.innerHTML = `${SketchIcons.svg(st.type, 24)}<span>${spec.name}</span>`;
          body.innerHTML = `
            <p>Structural Integrity: <strong>${Math.ceil(st.hp)} / ${spec.maxHp}</strong></p>
            <p style="color:var(--ink-muted);">
              ${st.type === 'workbench'
                ? 'Allows forging Tier II Iron tools, weapons, and Tier III Alchemical devices while standing nearby.'
                : 'Hand-built expedition fortification.'}
            </p>
            <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:12px;">
              ${st.type === 'workbench'
                ? `<button class="paper-btn btn-mini btn-success" id="wb-open-craft">${SketchIcons.svg('book', 16)}<span>Open Crafting Sketchbook</span></button>`
                : ''}
              <button class="paper-btn btn-mini btn-danger" id="struct-dismantle">${SketchIcons.svg('trash', 16)}<span>Dismantle Structure</span></button>
            </div>
          `;

          const wbBtn = body.querySelector('#wb-open-craft');
          if (wbBtn) {
            wbBtn.addEventListener('click', () => this.toggleCraftModal(true));
          }

          body.querySelector('#struct-dismantle').addEventListener('click', () => {
            const idx = this.game.structures.findIndex(s => s.id === st.id);
            if (idx !== -1) {
              this.game.structures.splice(idx, 1);
              this.game.addItem('wood', 2);
              this.game.audio.playHit('wood', 1, true);
              this.showToast(`Dismantled ${spec.name}.`, st.type);
            }
            this.closeStructureModal();
          });
        }

        modal.classList.add('open');
      }

      closeStructureModal() {
        this.openStructureId = null;
        document.getElementById('modal-structure').classList.remove('open');
      }

      closeAllModals() {
        document.getElementById('modal-craft').classList.remove('open');
        document.getElementById('modal-structure').classList.remove('open');
        document.getElementById('modal-journal').classList.remove('open');
        document.getElementById('modal-tutorial').classList.remove('open');
        document.getElementById('modal-victory').classList.remove('open');
        this.openStructureId = null;
      }

      hasOpenModal() {
        return (
          document.getElementById('modal-craft').classList.contains('open') ||
          document.getElementById('modal-structure').classList.contains('open') ||
          document.getElementById('modal-journal').classList.contains('open') ||
          document.getElementById('modal-tutorial').classList.contains('open') ||
          document.getElementById('modal-victory').classList.contains('open') ||
          document.getElementById('modal-gameover').classList.contains('open')
        );
      }

      refreshAll() {
        this.refreshInventoryUI();
        this.updateHUD();
        if (this.game.tutorial) {
          this.game.tutorial.render();
        }
      }

      updateHUD() {
        const g = this.game;
        const p = g.player;

        document.getElementById('hud-day').textContent = `Day ${g.day}`;

        const tSpec = PROGRESSION_TIERS[g.unlockedTier] || PROGRESSION_TIERS[1];
        const tierEl = document.getElementById('hud-tier');
        if (tierEl) {
          tierEl.textContent = tSpec.shortName;
          tierEl.className = `badge ${tSpec.badgeClass}`;
        }

        // Time of day phase
        let phaseLabel = 'Daylight';
        let iconKey = 'sun';
        if (g.timeOfDay >= 0.14 && g.timeOfDay < 0.24) {
          phaseLabel = 'Dawn';
          iconKey = 'dawn';
        } else if (g.timeOfDay >= 0.68 && g.timeOfDay < 0.82) {
          phaseLabel = 'Dusk';
          iconKey = 'dusk';
        } else if (g.timeOfDay >= 0.82 || g.timeOfDay < 0.14) {
          phaseLabel = 'Night';
          iconKey = 'moon';
        }

        const timeEl = document.getElementById('hud-time');
        timeEl.className = `badge ${phaseLabel === 'Dawn' ? 'warning' : phaseLabel === 'Dusk' ? 'danger' : phaseLabel === 'Night' ? 'secondary' : ''}`;
        document.getElementById('hud-time-text').textContent = phaseLabel;
        if (iconKey !== this.lastTimeIconKey) {
          this.lastTimeIconKey = iconKey;
          document.getElementById('hud-time-icon').innerHTML = SketchIcons.svg(iconKey, 16);
        }

        // Biome and weather
        const biome = g.world.getBiomeAt(p.x, p.y);
        const biomeEl = document.getElementById('hud-biome');
        biomeEl.textContent = biome.name;
        biomeEl.className = `badge biome-${biome.id}`;

        const weatherEl = document.getElementById('hud-weather');
        if (weatherEl) {
          const weatherLabels = { clear: 'Clear Skies', rain: 'Rainfall', mist: 'Low Mist' };
          weatherEl.textContent = weatherLabels[g.weather.type] || 'Clear Skies';
          weatherEl.className = `badge ${g.weather.type === 'rain' ? 'secondary' : g.weather.type === 'mist' ? 'warning' : ''}`;
        }

        const objectiveEl = document.getElementById('hud-objective');
        if (objectiveEl) {
          if (g.unlockedTier < 2) {
            objectiveEl.textContent = `Tier I: ${Math.min(2, g.progressStats.tier1ToolsCrafted)}/2 tools`;
            objectiveEl.title = 'Place a Field Workbench and craft two Tier I tools or weapons to unlock guardian shrines.';
          } else {
            objectiveEl.textContent = `Guardians: ${g.bossesDefeated.length}/3`;
            objectiveEl.title = 'Find the three guardian shrines and offer an Aether Crystal at each.';
          }
        }

        const activeBoss = g.creatures.find(mob => mob.boss);
        const bossHud = document.getElementById('boss-fight-hud');
        if (bossHud) {
          bossHud.hidden = !activeBoss;
          if (activeBoss) {
            document.getElementById('boss-fight-name').textContent = activeBoss.bossName;
            document.getElementById('boss-health-fill').style.width = `${Math.max(0, activeBoss.hp / activeBoss.maxHp) * 100}%`;
            document.getElementById('boss-fight-tell').textContent = activeBoss.windupTimer > 0
              ? `${activeBoss.currentAttackName} in ${activeBoss.windupTimer.toFixed(1)}s — move or dash`
              : 'Watch for the marked strike';
          }
        }

        // Nearby station badges
        const stations = g.getNearbyStations();
        const stWrap = document.getElementById('hud-station-badges');
        let badgesHtml = '';
        if (stations.workbench) badgesHtml += `<span class="badge secondary">Workbench</span>`;
        if (stations.campfire) badgesHtml += `<span class="badge warning">Warm Hearth</span>`;
        stWrap.innerHTML = badgesHtml;

        // Vitals bars
        document.getElementById('bar-hp').style.width = `${Math.max(0, Math.min(100, (p.hp / p.maxHp) * 100))}%`;
        document.getElementById('val-hp').textContent = Math.ceil(p.hp);

        document.getElementById('bar-hunger').style.width = `${Math.max(0, Math.min(100, (p.hunger / p.maxHunger) * 100))}%`;
        document.getElementById('val-hunger').textContent = Math.ceil(p.hunger);

        document.getElementById('bar-stamina').style.width = `${Math.max(0, Math.min(100, (p.stamina / p.maxStamina) * 100))}%`;
        document.getElementById('val-stamina').textContent = Math.ceil(p.stamina);

        document.getElementById('bar-warmth').style.width = `${Math.max(0, Math.min(100, (p.warmth / p.maxWarmth) * 100))}%`;
        document.getElementById('val-warmth').textContent = Math.ceil(p.warmth);

        // Low-health / freezing pulse vignette
        const vig = document.getElementById('danger-vignette');
        if (p.hp < 30 || p.warmth < 25) {
          vig.classList.add('pulsing');
        } else {
          vig.classList.remove('pulsing');
        }

        // Context prompt
        const nearSt = g.findNearestInteractable(78);
        const promptEl = document.getElementById('context-prompt');
        if (nearSt) {
          const spec = STRUCTURE_SPECS[nearSt.type];
          promptEl.textContent = `[E] Interact with ${spec ? spec.name : 'Structure'}`;
          promptEl.style.color = 'var(--ink-forest)';
        } else {
          promptEl.textContent = '[LMB] Swing • [RMB] Eat/Cancel • [E] Interact';
          promptEl.style.color = 'var(--ink-muted)';
        }

        const attackStatus = document.getElementById('attack-cooldown-status');
        if (attackStatus) {
          attackStatus.textContent = p.swingCooldown > 0
            ? `Attack recovery: ${p.swingCooldown.toFixed(1)}s`
            : 'Attack ready';
          attackStatus.style.color = p.swingCooldown > 0 ? 'var(--ink-amber)' : 'var(--ink-forest)';
        }
      }

      renderMinimap() {
        const canvas = document.getElementById('minimapCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const w = canvas.width;
        const h = canvas.height;
        const cx = w * 0.5;
        const cy = h * 0.5;
        const scale = 0.036;

        ctx.clearRect(0, 0, w, h);

        // Parchment radar rings
        ctx.strokeStyle = 'rgba(44, 40, 36, 0.22)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, w * 0.24, 0, Math.PI * 2);
        ctx.moveTo(cx + w * 0.44, cy);
        ctx.arc(cx, cy, w * 0.44, 0, Math.PI * 2);
        ctx.stroke();

        // North marker
        ctx.fillStyle = '#9e2a2b';
        ctx.font = 'bold 10px "Architects Daughter", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('N', cx, 11);

        const p = this.game.player;

        // Structures
        for (const st of this.game.structures) {
          const sx = cx + (st.x - p.x) * scale;
          const sy = cy + (st.y - p.y) * scale;
          if (Math.hypot(sx - cx, sy - cy) > w * 0.46) continue;
          if (st.type === 'guardian_shrine') {
            ctx.fillStyle = '#9e2a2b';
            ctx.beginPath();
            ctx.moveTo(sx, sy - 4);
            ctx.lineTo(sx + 4, sy);
            ctx.lineTo(sx, sy + 4);
            ctx.lineTo(sx - 4, sy);
            ctx.closePath();
            ctx.fill();
          } else {
            ctx.fillStyle = st.type === 'campfire' ? '#e76f51' : '#5a554c';
            ctx.fillRect(sx - 2, sy - 2, 4, 4);
          }
        }

        // Creatures
        for (const mob of this.game.creatures) {
          const mx = cx + (mob.x - p.x) * scale;
          const my = cy + (mob.y - p.y) * scale;
          if (Math.hypot(mx - cx, my - cy) > w * 0.46) continue;
          ctx.fillStyle = mob.hostile ? '#9e2a2b' : '#4f772d';
          ctx.beginPath();
          ctx.arc(mx, my, 2.3, 0, Math.PI * 2);
          ctx.fill();
        }

        // Player arrow at center
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(p.aimAngle);
        ctx.fillStyle = '#2c2c2c';
        ctx.beginPath();
        ctx.moveTo(6, 0);
        ctx.lineTo(-4, -4);
        ctx.lineTo(-2, 0);
        ctx.lineTo(-4, 4);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }

    /**
     * ============================================================================
     * MODULE 8: MAIN GAME CONTROLLER, SURVIVAL LOOP & ENTITIES
     * ============================================================================
     */
    class InkboundGame {
      constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.renderer = new SketchbookRenderer(this.canvas);
        this.audio = new AudioEngine();
        this.particles = new ParticleSystem();

        this.world = new WorldGen(1337);
        this.structures = [];
        this.creatures = [];
        this.inventory = new Array(CONFIG.INV_SLOTS).fill(null);

        this.day = 1;
        this.timeOfDay = 0.28; // Morning
        this.elapsedTime = 0;
        this.weather = { type: 'clear', intensity: 0 };
        this.autosaveTimer = 0;
        this.hitStopTimer = 0;
        this.ambientSpawnTimer = 0;
        this.creatureSpawnTimer = 1.0;
        this.shrinePlacementCooldown = 0;
        this.nextEntityId = 1;

        this.unlockedTier = 1;
        this.bossesDefeated = [];
        this.shrinePlacementCooldown = 0;
        this.progressStats = {
          campfiresBuilt: 0,
          workbenchesBuilt: 0,
          tier1ToolsCrafted: 0,
          ironSmelted: 0,
          tier2GearCrafted: 0,
          crystalsFound: 0
        };

        this.started = false;
        this.gameOver = false;
        this.buildGhost = null;

        this.camera = {
          x: 0,
          y: 40,
          shakeX: 0,
          shakeY: 0,
          shakeTimer: 0,
          shakeIntensity: 0
        };

        this.mouse = {
          screenX: window.innerWidth * 0.5,
          screenY: window.innerHeight * 0.5,
          worldX: 0,
          worldY: 0,
          down: false
        };

        this.keys = new Set();

        this.player = {
          x: 0,
          y: 56,
          vx: 0,
          vy: 0,
          radius: 15,
          hp: 100,
          maxHp: 100,
          hunger: 100,
          maxHunger: 100,
          stamina: 100,
          maxStamina: 100,
          warmth: 100,
          maxWarmth: 100,
          activeSlot: 0,
          equippedItem: null,
          aimAngle: -Math.PI * 0.5,
          walkPhase: 0,
          stepDist: 0,
          scaleX: 1,
          scaleY: 1,
          swingProgress: 0,
          swingCooldown: 0,
          dashTimer: 0,
          dashCooldown: 0,
          invulnTimer: 0
        };

        // Load an existing expedition or initialize a new trailhead.
        const saved = SaveSystem.load();
        if (saved) {
          this.applySaveData(saved);
        } else {
          this.resetToFreshWorld();
        }

        this.tutorial = new TutorialManager(this);
        this.ui = new UIManager(this);
        this.syncEquipped();
        this.ui.refreshAll();

        this.bindInputs();
        this.handleResize();
      }

      resetToFreshWorld() {
        const seed = Math.floor(Math.random() * 899999) + 100000;
        this.world = new WorldGen(seed);
        this.structures = [];
        this.creatures = [];
        this.particles = new ParticleSystem();
        this.inventory = new Array(CONFIG.INV_SLOTS).fill(null);

        this.day = 1;
        this.timeOfDay = 0.28;
        this.gameOver = false;

        this.unlockedTier = 1;
        this.bossesDefeated = [];
        this.progressStats = {
          campfiresBuilt: 0,
          workbenchesBuilt: 0,
          tier1ToolsCrafted: 0,
          ironSmelted: 0,
          tier2GearCrafted: 0,
          crystalsFound: 0
        };

        this.player.x = 0;
        this.player.y = 40;
        this.player.vx = 0;
        this.player.vy = 0;
        this.player.hp = 100;
        this.player.hunger = 100;
        this.player.stamina = 100;
        this.player.warmth = 100;
        this.player.activeSlot = 0;

        this.camera.x = this.player.x;
        this.camera.y = this.player.y;

        // Populate initial meadow hares so the world is immediately lively
        for (let i = 0; i < 4; i++) {
          const a = (i / 4) * Math.PI * 2 + 0.5;
          this.spawnCreature('hare', Math.cos(a) * 260, Math.sin(a) * 260);
        }

        this.syncEquipped();
      }

      applySaveData(data) {
        this.world = new WorldGen(data.seed || 1337);
        if (Array.isArray(data.removedNodes)) {
          data.removedNodes.forEach(id => this.world.removedNodes.add(id));
        }

        this.day = data.day || 1;
        this.timeOfDay = typeof data.timeOfDay === 'number' ? data.timeOfDay : 0.28;
        this.unlockedTier = data.unlockedTier || 1;
        this.bossesDefeated = Array.isArray(data.bossesDefeated)
          ? data.bossesDefeated.filter(id => BOSS_DEFINITIONS[id])
          : [];
        this.progressStats = Object.assign({
          campfiresBuilt: 0,
          workbenchesBuilt: 0,
          tier1ToolsCrafted: 0,
          ironSmelted: 0,
          tier2GearCrafted: 0,
          crystalsFound: 0
        }, data.progressStats || {});

        const p = data.player;
        this.player.x = p.x || 0;
        this.player.y = p.y || 58;
        this.player.hp = p.hp ?? 100;
        this.player.hunger = p.hunger ?? 100;
        this.player.stamina = p.stamina ?? 100;
        this.player.warmth = p.warmth ?? 100;
        this.player.activeSlot = p.activeSlot ?? 0;

        this.camera.x = this.player.x;
        this.camera.y = this.player.y;

        this.inventory = new Array(CONFIG.INV_SLOTS).fill(null);
        if (Array.isArray(p.inventory)) {
          for (let i = 0; i < Math.min(CONFIG.INV_SLOTS, p.inventory.length); i++) {
            const slot = p.inventory[i];
            if (slot && ITEMS[slot.id] && slot.count > 0) {
              this.inventory[i] = { id: slot.id, count: slot.count };
            }
          }
        }

        this.structures = [];
        if (Array.isArray(data.structures)) {
          for (const s of data.structures) {
            const spec = STRUCTURE_SPECS[s.type];
            if (!spec) continue;
            this.structures.push({
              id: s.id || this.nextEntityId++,
              type: s.type,
              bossId: s.bossId || null,
              x: s.x,
              y: s.y,
              hp: s.hp ?? spec.maxHp,
              maxHp: spec.maxHp,
              fuel: s.fuel || 0,
              storage: s.storage || null,
              cooldown: 0
            });
          }
        }
      }

      startExpedition(withTutorial = false, isFresh = false) {
        this.audio.init();
        this.audio.resume();
        this.audio.playPaperRustle();
        this.started = true;
        this.ui.hideTitleScreen();

        if (withTutorial) {
          this.tutorial.start(true);
        } else if (isFresh) {
          this.tutorial.start(false);
        } else {
          this.tutorial.render();
        }

        this.ui.refreshAll();
        this.ui.showToast('Expedition started.', 'compass');
      }

      syncEquipped() {
        const stack = this.inventory[this.player.activeSlot];
        this.player.equippedItem = stack && ITEMS[stack.id] ? ITEMS[stack.id] : null;
        const eq = this.player.equippedItem;
        if (eq && (eq.category === 'weapon' || eq.category === 'light' || eq.category === 'tool')) {
          if (this.tutorial) this.tutorial.completeStep('gear');
        }
        if (eq && eq.category === 'structure' && eq.structType) {
          this.buildGhost = {
            type: eq.structType,
            x: this.mouse.worldX,
            y: this.mouse.worldY,
            valid: false
          };
        } else {
          this.buildGhost = null;
        }
      }

      checkProgressionMilestones() {
        const st = this.progressStats;
        let advanced = false;

        if (this.unlockedTier === 1) {
          if (st.workbenchesBuilt >= 1 && st.tier1ToolsCrafted >= 2) {
            this.unlockedTier = 2;
            advanced = true;
            this.shrinePlacementCooldown = 0;
            this.audio.playInkStamp();
            this.ui.showToast('Tier I complete. Find guardian shrines and offer Aether Crystals.', 'iron_ingot');
          }
        } else if (this.unlockedTier === 2) {
          if (st.ironSmelted >= 2 && st.tier2GearCrafted >= 1 && st.crystalsFound >= 1) {
            this.unlockedTier = 3;
            advanced = true;
            this.audio.playInkStamp();
            this.ui.showToast('Era Unlocked: Tier III Alchemical & Clockwork Mastery!', 'alch_crystal');
          }
        }

        if (advanced) {
          this.ui.refreshAll();
          SaveSystem.save(this);
        }
      }

      selectHotbarSlot(index) {
        if (index < 0 || index >= CONFIG.HOTBAR_SLOTS) return;
        this.player.activeSlot = index;
        this.syncEquipped();
        this.audio.playPaperRustle();
        this.ui.refreshInventoryUI();
      }

      addItem(itemId, count = 1) {
        const spec = ITEMS[itemId];
        if (!spec || count <= 0) return false;
        let remaining = count;
        let firstHotbarAffected = -1;

        for (let i = 0; i < CONFIG.INV_SLOTS; i++) {
          const slot = this.inventory[i];
          if (slot && slot.id === itemId && slot.count < spec.maxStack) {
            const add = Math.min(spec.maxStack - slot.count, remaining);
            slot.count += add;
            remaining -= add;
            if (firstHotbarAffected === -1 && i < CONFIG.HOTBAR_SLOTS) firstHotbarAffected = i;
            if (remaining <= 0) break;
          }
        }

        if (remaining > 0) {
          for (let i = 0; i < CONFIG.INV_SLOTS; i++) {
            if (!this.inventory[i]) {
              const add = Math.min(spec.maxStack, remaining);
              this.inventory[i] = { id: itemId, count: add };
              remaining -= add;
              if (firstHotbarAffected === -1 && i < CONFIG.HOTBAR_SLOTS) firstHotbarAffected = i;
              if (remaining <= 0) break;
            }
          }
        }

        if (remaining < count) {
          if (itemId === 'alch_crystal') {
            this.progressStats.crystalsFound += (count - remaining);
            this.checkProgressionMilestones();
          }
          this.syncEquipped();
          this.ui.refreshInventoryUI();
          if (firstHotbarAffected !== -1) {
            this.ui.bounceHotbarSlot(firstHotbarAffected);
          }
          return true;
        }
        return false;
      }

      countItem(itemId) {
        let total = 0;
        for (const slot of this.inventory) {
          if (slot && slot.id === itemId) total += slot.count;
        }
        return total;
      }

      hasIngredients(cost) {
        for (const [id, amt] of Object.entries(cost)) {
          if (this.countItem(id) < amt) return false;
        }
        return true;
      }

      consumeItem(itemId, count = 1) {
        if (this.countItem(itemId) < count) return false;
        let needed = count;
        for (let i = CONFIG.INV_SLOTS - 1; i >= 0; i--) {
          const slot = this.inventory[i];
          if (slot && slot.id === itemId) {
            const take = Math.min(slot.count, needed);
            slot.count -= take;
            needed -= take;
            if (slot.count <= 0) this.inventory[i] = null;
            if (needed <= 0) break;
          }
        }
        this.syncEquipped();
        this.ui.refreshInventoryUI();
        return true;
      }

      getNearbyStations() {
        let workbench = false;
        let campfire = false;
        for (const st of this.structures) {
          const d = Math.hypot(st.x - this.player.x, st.y - this.player.y);
          if (d <= 125) {
            if (st.type === 'workbench') workbench = true;
            if ((st.type === 'campfire' || st.type === 'iron_brazier') && st.fuel > 0) campfire = true;
          }
        }
        return { workbench, campfire };
      }

      craftRecipe(rec, silentToast = false) {
        if (rec.tier > this.unlockedTier) return false;
        const stations = this.getNearbyStations();
        if (rec.station && !stations[rec.station]) return false;
        if (!this.hasIngredients(rec.cost)) return false;

        for (const [id, amt] of Object.entries(rec.cost)) {
          this.consumeItem(id, amt);
        }

        this.addItem(rec.out, rec.count);
        this.audio.playInkStamp();
        this.tutorial.completeStep('craft');

        const outSpec = ITEMS[rec.out];
        if (rec.tier === 1 && (outSpec.category === 'tool' || outSpec.category === 'weapon' || outSpec.category === 'light')) {
          this.progressStats.tier1ToolsCrafted += rec.count;
        }
        if (rec.out === 'iron_ingot') {
          this.progressStats.ironSmelted += rec.count;
        }
        if (rec.tier === 2 && (outSpec.category === 'tool' || outSpec.category === 'weapon' || outSpec.category === 'ranged')) {
          this.progressStats.tier2GearCrafted += rec.count;
        }
        this.checkProgressionMilestones();

        if (!silentToast) {
          this.ui.showToast(`Crafted ${outSpec.name}${rec.count > 1 ? ` x${rec.count}` : ''}!`, outSpec.icon);
        }

        SaveSystem.save(this);
        return true;
      }

      consumeFoodSlot(slotIndex) {
        const slot = this.inventory[slotIndex];
        if (!slot) return false;
        const spec = ITEMS[slot.id];
        if (!spec || spec.category !== 'food') return false;

        const p = this.player;
        p.hunger = Math.min(p.maxHunger, Math.max(0, p.hunger + (spec.food || 0)));
        p.hp = Math.min(p.maxHp, Math.max(1, p.hp + (spec.hp || 0)));
        p.warmth = Math.min(p.maxWarmth, Math.max(0, p.warmth + (spec.warmth || 0)));

        slot.count -= 1;
        if (slot.count <= 0) this.inventory[slotIndex] = null;

        this.audio.playPickup();
        this.particles.spawnBurst(p.x, p.y - 12, '#6a994e', 7, 90, 'leaf');
        this.particles.spawnFloatingText(p.x, p.y - 28, `+${spec.food} Hunger`, '#386641');
        this.syncEquipped();
        this.ui.refreshInventoryUI();
        return true;
      }

      addCameraShake(intensity = 6, duration = 0.16) {
        this.camera.shakeIntensity = Math.max(this.camera.shakeIntensity, intensity);
        this.camera.shakeTimer = Math.max(this.camera.shakeTimer, duration);
      }

      triggerDash() {
        if (!this.started || this.gameOver || this.ui.hasOpenModal()) return;
        const p = this.player;
        if (p.dashCooldown > 0 || p.stamina < 16) return;

        p.stamina -= 16;
        p.dashTimer = 0.18;
        p.dashCooldown = 0.65;
        p.invulnTimer = 0.26;

        let dx = 0;
        let dy = 0;
        if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) dy -= 1;
        if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) dy += 1;
        if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) dx -= 1;
        if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) dx += 1;

        if (dx === 0 && dy === 0) {
          dx = Math.cos(p.aimAngle);
          dy = Math.sin(p.aimAngle);
        } else {
          const len = Math.hypot(dx, dy);
          dx /= len;
          dy /= len;
        }

        p.vx = dx * 560;
        p.vy = dy * 560;
        p.scaleX = 1.28;
        p.scaleY = 0.76;

        this.audio.playSwing(true);
        this.particles.spawnBurst(p.x, p.y, '#4a4640', 8, 110, 'ink');
        this.tutorial.recordDash();
      }

      findNearestInteractable(maxDist = 76) {
        let best = null;
        let bestDist = maxDist;
        for (const st of this.structures) {
          const d = Math.hypot(st.x - this.player.x, st.y - this.player.y);
          if (d < bestDist) {
            bestDist = d;
            best = st;
          }
        }
        return best;
      }

      triggerInteract() {
        if (!this.started || this.gameOver || this.ui.hasOpenModal()) return;
        const target = this.findNearestInteractable(82);
        if (target) {
          this.ui.openStructureModal(target);
        } else {
          this.ui.showToast('Nothing nearby to interact with.', 'hand');
        }
      }

      isValidBuildLocation(wx, wy, radius) {
        const dist = Math.hypot(wx - this.player.x, wy - this.player.y);
        if (dist < radius + 16 || dist > 175) return false;

        for (const st of this.structures) {
          const sp = STRUCTURE_SPECS[st.type];
          if (Math.hypot(st.x - wx, st.y - wy) < radius + (sp?.radius || 22) - 4) return false;
        }

        const cx = Math.floor(wx / CONFIG.CHUNK_PX);
        const cy = Math.floor(wy / CONFIG.CHUNK_PX);
        const chunk = this.world.getChunk(cx, cy);
        for (const node of chunk.nodes) {
          if (node.solid && Math.hypot(node.x - wx, node.y - wy) < radius + node.radius - 4) return false;
        }

        return true;
      }

      triggerPrimaryAction() {
        if (!this.started || this.gameOver || this.ui.hasOpenModal()) return;
        this.audio.init();
        this.audio.resume();

        const p = this.player;
        const eq = p.equippedItem;

        // 1. Place Structure if holding structure kit
        if (eq && eq.category === 'structure' && this.buildGhost) {
          if (!this.buildGhost.valid) {
            this.ui.showToast('Cannot place structure here!', 'warning');
            return;
          }
          const stType = eq.structType;
          const spec = STRUCTURE_SPECS[stType];
          // Cache coordinates prior to consumeItem(), which calls syncEquipped() and clears buildGhost on the last item
          const placeX = this.buildGhost.x;
          const placeY = this.buildGhost.y;
          if (this.consumeItem(eq.id, 1)) {
            this.structures.push({
              id: this.nextEntityId++,
              type: stType,
              x: placeX,
              y: placeY,
              hp: spec.maxHp,
              maxHp: spec.maxHp,
              fuel: (stType === 'campfire' || stType === 'iron_brazier') ? 85 : 0,
              storage: stType === 'storage_chest' ? new Array(12).fill(null) : null,
              cooldown: 0
            });
            if (stType === 'campfire') this.progressStats.campfiresBuilt += 1;
            if (stType === 'workbench') this.progressStats.workbenchesBuilt += 1;
            this.checkProgressionMilestones();

            this.audio.playInkStamp();
            this.particles.spawnBurst(placeX, placeY, '#8c6d53', 10, 115, 'chip');
            this.addCameraShake(4, 0.12);
            SaveSystem.save(this);
          }
          return;
        }

        // 2. Eat food if holding edible item
        if (eq && eq.category === 'food') {
          this.consumeFoodSlot(p.activeSlot);
          return;
        }

        if (p.swingCooldown > 0) return;

        // 3. Ranged Bow Shot
        if (eq && eq.category === 'ranged') {
          if (!this.consumeItem(eq.ammoId || 'arrow', 1)) {
            this.ui.showToast('Out of Flint Arrows!', 'arrow');
            return;
          }
          p.swingCooldown = eq.cooldown || 0.42;
          p.stamina = Math.max(0, p.stamina - (eq.staminaCost || 6));
          p.scaleX = 0.86;
          p.scaleY = 1.16;

          this.particles.projectiles.push({
            x: p.x + Math.cos(p.aimAngle) * 18,
            y: p.y + Math.sin(p.aimAngle) * 18,
            vx: Math.cos(p.aimAngle) * 620,
            vy: Math.sin(p.aimAngle) * 620,
            angle: p.aimAngle,
            damage: eq.damage || 38,
            life: 1.15,
            isAether: false
          });
          this.audio.playSwing(false);
          return;
        }

        // 4. Melee Swing / Tool Harvest
        const cooldown = eq?.cooldown || 0.34;
        const range = eq?.range || 58;
        const staminaCost = eq?.staminaCost || 4;

        p.swingProgress = 0.01;
        p.swingCooldown = cooldown;
        p.stamina = Math.max(0, p.stamina - staminaCost);
        p.scaleX = 1.22;
        p.scaleY = 0.82;
        this.audio.playSwing(false);

        let hitSomething = false;

        // Check Creatures in swing arc
        for (let i = this.creatures.length - 1; i >= 0; i--) {
          const mob = this.creatures[i];
          const dx = mob.x - p.x;
          const dy = mob.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist <= range + mob.radius) {
            const angToMob = Math.atan2(dy, dx);
            const diff = Math.abs(Math.atan2(Math.sin(angToMob - p.aimAngle), Math.cos(angToMob - p.aimAngle)));
            if (diff <= 1.15 || dist < 34) {
              const dmg = eq?.damage || 12;
              const kb = eq?.knockback || 180;
              this.damageCreature(mob, dmg, p.aimAngle, kb);
              hitSomething = true;
            }
          }
        }

        // Check Resource Nodes in swing arc
        const minCx = Math.floor((p.x - range - 40) / CONFIG.CHUNK_PX);
        const maxCx = Math.floor((p.x + range + 40) / CONFIG.CHUNK_PX);
        const minCy = Math.floor((p.y - range - 40) / CONFIG.CHUNK_PX);
        const maxCy = Math.floor((p.y + range + 40) / CONFIG.CHUNK_PX);

        for (let cy = minCy; cy <= maxCy; cy++) {
          for (let cx = minCx; cx <= maxCx; cx++) {
            const chunk = this.world.getChunk(cx, cy);
            for (let i = chunk.nodes.length - 1; i >= 0; i--) {
              const node = chunk.nodes[i];
              const dx = node.x - p.x;
              const dy = node.y - p.y;
              const dist = Math.hypot(dx, dy);
              if (dist <= range + node.radius) {
                const ang = Math.atan2(dy, dx);
                const diff = Math.abs(Math.atan2(Math.sin(ang - p.aimAngle), Math.cos(ang - p.aimAngle)));
                if (diff <= 1.15 || dist < 36) {
                  this.harvestNode(chunk, i, node, eq);
                  hitSomething = true;
                }
              }
            }
          }
        }

        if (hitSomething) {
          this.hitStopTimer = 0.036;
          this.addCameraShake(5.5, 0.14);
        }
      }

      harvestNode(chunk, index, node, eq) {
        let power = 11;
        if (node.kind === 'tree') {
          power = eq?.chopPower || 11;
        } else if (node.kind === 'rock') {
          power = eq?.minePower || 9;
        } else {
          power = Math.max(eq?.chopPower || 14, 14);
        }

        node.hp -= power;
        node.hitCombo = (node.hitCombo || 0) + 1;
        node.flash = 0.1;
        node.scaleX = 1.22;
        node.scaleY = 0.80;
        node.shakeX = (Math.random() - 0.5) * 9;

        const broken = node.hp <= 0;
        this.audio.playHit(node.material, node.hitCombo, broken);

        const burstColor = node.material === 'stone' ? '#8f8b82' : '#8c6d53';
        this.particles.spawnBurst(node.x, node.y - 12, burstColor, broken ? 14 : 6, broken ? 165 : 110, 'chip');
        this.particles.spawnFloatingText(node.x, node.y - 24, `-${power}`, '#2c2c2c');

        if (broken) {
          chunk.nodes.splice(index, 1);
          this.world.removedNodes.add(node.id);
          this.tutorial.completeStep('gather');

          for (const dropSpec of node.drops) {
            const qty = dropSpec.min + Math.floor(Math.random() * (dropSpec.max - dropSpec.min + 1));
            if (qty > 0) {
              this.particles.spawnLoot(node.x, node.y, dropSpec.id, qty);
            }
          }
        }
      }

      damageCreature(mob, dmg, angle, knockback = 180) {
        mob.hp -= dmg;
        mob.flash = 0.11;
        mob.scaleX = 1.25;
        mob.scaleY = 0.78;
        mob.vx += Math.cos(angle) * knockback;
        mob.vy += Math.sin(angle) * knockback;
        mob.aggro = true;

        this.audio.playHit('flesh', 1, mob.hp <= 0);
        this.particles.spawnBurst(mob.x, mob.y - 10, mob.hostile ? '#2b2d42' : '#9e2a2b', 9, 145, 'ink');
        this.particles.spawnFloatingText(mob.x, mob.y - 26, `-${dmg}`, '#9e2a2b');

        if (mob.hp <= 0) {
          const idx = this.creatures.indexOf(mob);
          if (idx !== -1) this.creatures.splice(idx, 1);
          for (const d of mob.drops) {
            const qty = d.min + Math.floor(Math.random() * (d.max - d.min + 1));
            if (qty > 0) this.particles.spawnLoot(mob.x, mob.y, d.id, qty);
          }
          if (mob.boss && !this.bossesDefeated.includes(mob.bossId)) {
            this.bossesDefeated.push(mob.bossId);
            this.audio.playInkStamp();
            this.ui.showToast(`${mob.bossName} defeated (${this.bossesDefeated.length}/3).`, 'compass');
            this.tutorial.completeStep('guardian');
            this.ui.refreshAll();
            SaveSystem.save(this);
            if (this.bossesDefeated.length === Object.keys(BOSS_DEFINITIONS).length) {
              document.getElementById('modal-victory').classList.add('open');
            }
          }
        }
      }

      spawnCreature(type, x, y) {
        const specs = {
          hare: {
            name: 'Meadow Hare', hp: 24, radius: 13, speed: 145, damage: 0,
            hostile: false, nocturnal: false,
            drops: [{ id: 'raw_meat', min: 1, max: 1 }]
          },
          stag: {
            name: 'Briar Stag', hp: 55, radius: 18, speed: 165, damage: 8,
            hostile: false, nocturnal: false,
            drops: [{ id: 'raw_meat', min: 2, max: 3 }]
          },
          wisp: {
            name: 'Ink Wisp', hp: 42, radius: 15, speed: 118, damage: 12,
            hostile: true, nocturnal: true,
            drops: [{ id: 'charcoal', min: 1, max: 2 }, { id: 'alch_crystal', min: 0, max: 1 }]
          },
          wolf: {
            name: 'Shadow Wolf', hp: 68, radius: 17, speed: 152, damage: 16,
            hostile: true, nocturnal: true,
            drops: [{ id: 'raw_meat', min: 1, max: 2 }, { id: 'flint', min: 1, max: 2 }]
          },
          golem: {
            name: 'Crag Golem', hp: 135, radius: 23, speed: 78, damage: 24,
            hostile: true, nocturnal: false,
            drops: [{ id: 'iron_ore', min: 2, max: 3 }, { id: 'stone', min: 2, max: 4 }]
          },
          stalker: {
            name: 'Mire Stalker', hp: 95, radius: 18, speed: 142, damage: 22,
            hostile: true, nocturnal: true,
            drops: [{ id: 'alch_crystal', min: 1, max: 2 }, { id: 'charcoal', min: 1, max: 2 }]
          }
        };

        const s = specs[type];
        if (!s) return;
        this.creatures.push({
          id: this.nextEntityId++,
          type,
          x,
          y,
          vx: 0,
          vy: 0,
          hp: s.hp,
          maxHp: s.hp,
          radius: s.radius,
          speed: s.speed,
          damage: s.damage,
          hostile: s.hostile,
          nocturnal: s.nocturnal,
          drops: s.drops,
          facing: 1,
          scaleX: 1,
          scaleY: 1,
          shakeX: 0,
          flash: 0,
          aiTimer: Math.random() * 1.5,
          wanderAngle: Math.random() * Math.PI * 2,
          walkPhase: Math.random() * Math.PI * 2,
          attackCooldown: 0,
          aggro: false
        });
      }

      spawnGuardian(bossId, origin = null) {
        const spec = BOSS_DEFINITIONS[bossId];
        if (this.unlockedTier < 2 || !spec || this.bossesDefeated.includes(bossId) || this.creatures.some(mob => mob.boss)) return false;

        const originX = origin?.x ?? this.player.x;
        const originY = origin?.y ?? this.player.y;

        let spawn = null;
        for (let attempt = 0; attempt < 18; attempt++) {
          const angle = Math.random() * Math.PI * 2;
          const distance = 230 + Math.random() * 50;
          const x = originX + Math.cos(angle) * distance;
          const y = originY + Math.sin(angle) * distance;
          if (this.world.getBiomeAt(x, y).id === spec.biome) {
            spawn = { x, y };
            break;
          }
        }
        if (!spawn) return false;

        this.spawnCreature(spec.type, spawn.x, spawn.y);
        const boss = this.creatures[this.creatures.length - 1];
        const firstAttack = spec.attacks[0];
        Object.assign(boss, {
          name: spec.name,
          boss: true,
          bossId,
          bossName: spec.name,
          hp: spec.hp,
          maxHp: spec.hp,
          radius: spec.radius,
          speed: spec.speed,
          damage: spec.damage,
          contactCooldown: spec.contactCooldown,
          bossAttacks: spec.attacks,
          bossAttackIndex: 0,
          currentAttackName: firstAttack.name,
          specialShape: firstAttack.shape,
          specialHalfAngle: firstAttack.halfAngle ?? Math.PI,
          specialRadius: firstAttack.radius,
          specialDamage: firstAttack.damage,
          specialCooldown: firstAttack.cooldown,
          windupDuration: firstAttack.windup,
          bossAbilityCooldown: 4.0,
          windupTimer: 0,
          drops: spec.drops,
          hostile: true,
          aggro: true
        });
        this.audio.playInkStamp();
        this.ui.showToast(`${spec.name} appears!`, 'warning');
        this.ui.refreshAll();
        return true;
      }

      ensureGuardianShrine(bossId) {
        const spec = BOSS_DEFINITIONS[bossId];
        if (
          this.unlockedTier < 2 ||
          !spec ||
          this.bossesDefeated.includes(bossId) ||
          this.structures.some(st => st.type === 'guardian_shrine' && st.bossId === bossId)
        ) return false;

        let shrinePosition = null;
        for (let attempt = 0; attempt < 32; attempt++) {
          const angle = Math.random() * Math.PI * 2;
          const distance = 850 + Math.random() * 450;
          const x = this.player.x + Math.cos(angle) * distance;
          const y = this.player.y + Math.sin(angle) * distance;
          if (this.world.getBiomeAt(x, y).id === spec.biome) {
            shrinePosition = { x, y };
            break;
          }
        }
        if (!shrinePosition) return false;

        this.structures.push({
          id: this.nextEntityId++,
          type: 'guardian_shrine',
          bossId,
          x: shrinePosition.x,
          y: shrinePosition.y,
          hp: 1,
          maxHp: 1,
          fuel: 0,
          storage: null,
          cooldown: 0
        });
        this.audio.playPaperRustle();
        this.ui.showToast(`${spec.name} shrine marked on the radar.`, 'compass');
        SaveSystem.save(this);
        return true;
      }

      respawnAtTrailhead() {
        const p = this.player;
        p.x = 0;
        p.y = 58;
        p.vx = 0;
        p.vy = 0;
        p.hp = 85;
        p.hunger = 75;
        p.stamina = 100;
        p.warmth = 95;
        p.invulnTimer = 2.0;
        this.gameOver = false;
        this.timeOfDay = 0.28;
        this.creatures = this.creatures.filter(m => !m.hostile || Math.hypot(m.x, m.y) > 450);
        SaveSystem.save(this);
        this.ui.refreshAll();
        this.ui.showToast('You return to the trailhead.', 'tent');
      }

      update(dt) {
        this.elapsedTime += dt;

        if (this.hitStopTimer > 0) {
          this.hitStopTimer -= dt;
          return;
        }

        if (this.camera.shakeTimer > 0) {
          this.camera.shakeTimer -= dt;
          this.camera.shakeX = (Math.random() - 0.5) * 2 * this.camera.shakeIntensity;
          this.camera.shakeY = (Math.random() - 0.5) * 2 * this.camera.shakeIntensity;
        } else {
          this.camera.shakeX = 0;
          this.camera.shakeY = 0;
          this.camera.shakeIntensity = 0;
        }

        const p = this.player;
        const isNight = this.timeOfDay > 0.75 || this.timeOfDay < 0.20;
        const currentBiome = this.world.getBiomeAt(p.x, p.y);

        const weatherPeriod = 120;
        const weatherPhase = (this.elapsedTime % weatherPeriod) / weatherPeriod;
        const weatherCellX = Math.floor(p.x / 2400);
        const weatherCellY = Math.floor(p.y / 2400);
        const weatherRoll = this.world.hash2(Math.floor(this.elapsedTime / weatherPeriod) + weatherCellX * 17, weatherCellY * 31);
        let weatherType = 'clear';
        if (currentBiome.id === 'mire') weatherType = weatherRoll < 0.72 ? 'mist' : 'rain';
        else if (currentBiome.id === 'highlands' && weatherRoll < 0.62) weatherType = 'rain';
        else if (currentBiome.id === 'forest' && weatherRoll < 0.43) weatherType = 'rain';
        else if (currentBiome.id === 'meadow' && weatherRoll < 0.22) weatherType = 'rain';
        const weatherRise = Math.max(0, Math.min(1, (weatherPhase - 0.32) / 0.2));
        const weatherFade = 1 - Math.max(0, Math.min(1, (weatherPhase - 0.82) / 0.12));
        const weatherIntensity = weatherType === 'clear' ? 0 : weatherRise * weatherFade * (weatherType === 'mist' ? 0.62 : 0.78);
        this.weather = { type: weatherType, intensity: weatherIntensity };

        this.ambientSpawnTimer -= dt;
        if (this.ambientSpawnTimer <= 0) {
          this.particles.spawnAmbient(this.camera.x, this.camera.y, this.canvas.width, this.canvas.height, isNight, currentBiome.id);
          this.ambientSpawnTimer = 0.22;
        }

        if (!this.started) {
          this.camera.x = Math.cos(this.elapsedTime * 0.25) * 45;
          this.camera.y = 20 + Math.sin(this.elapsedTime * 0.25) * 35;
          this.particles.update(dt, p, () => false);
          return;
        }

        if (this.gameOver) return;

        // Day / Night Cycle Progression
        const prevTime = this.timeOfDay;
        this.timeOfDay = (this.timeOfDay + dt / CONFIG.DAY_LENGTH_SEC) % 1.0;
        if (prevTime > 0.8 && this.timeOfDay < 0.2) {
          this.day += 1;
          this.ui.showToast(`Day ${this.day} dawns across the sketchbook.`, 'dawn');
        }

        p.scaleX += (1 - p.scaleX) * Math.min(1, dt * 14);
        p.scaleY += (1 - p.scaleY) * Math.min(1, dt * 14);
        if (p.invulnTimer > 0) p.invulnTimer -= dt;
        if (p.dashCooldown > 0) p.dashCooldown -= dt;

        if (p.swingCooldown > 0) {
          p.swingCooldown -= dt;
          if (p.swingProgress > 0) {
            p.swingProgress = Math.min(1, p.swingProgress + dt * 4.5);
            if (p.swingProgress >= 1) p.swingProgress = 0;
          }
        } else {
          p.swingProgress = 0;
        }

        this.mouse.worldX = this.camera.x + (this.mouse.screenX - this.canvas.width * 0.5);
        this.mouse.worldY = this.camera.y + (this.mouse.screenY - this.canvas.height * 0.5);
        p.aimAngle = Math.atan2(this.mouse.worldY - (p.y - 10), this.mouse.worldX - p.x);

        if (this.buildGhost) {
          this.buildGhost.x = this.mouse.worldX;
          this.buildGhost.y = this.mouse.worldY;
          const spec = STRUCTURE_SPECS[this.buildGhost.type];
          this.buildGhost.valid = this.isValidBuildLocation(this.buildGhost.x, this.buildGhost.y, spec?.radius || 22);
        }

        if (!this.ui.hasOpenModal()) {
          if (p.dashTimer > 0) {
            p.dashTimer -= dt;
          } else {
            let ix = 0;
            let iy = 0;
            if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) iy -= 1;
            if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) iy += 1;
            if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) ix -= 1;
            if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) ix += 1;

            if (ix !== 0 || iy !== 0) {
              const len = Math.hypot(ix, iy);
              ix /= len;
              iy /= len;
            }

            const mireSlow = currentBiome.id === 'mire' ? 0.84 : 1.0;
            const targetSpeed = 205 * mireSlow;
            const accel = 14;
            p.vx += (ix * targetSpeed - p.vx) * Math.min(1, dt * accel);
            p.vy += (iy * targetSpeed - p.vy) * Math.min(1, dt * accel);
          }

          if (this.mouse.down && p.swingCooldown <= 0 && (!p.equippedItem || p.equippedItem.category !== 'structure')) {
            this.triggerPrimaryAction();
          }
        } else {
          p.vx *= Math.pow(0.02, dt);
          p.vy *= Math.pow(0.02, dt);
        }

        const prevX = p.x;
        const prevY = p.y;
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        this.resolveSolidCollisions(p);

        const movedStep = Math.hypot(p.x - prevX, p.y - prevY);
        if (movedStep > 0.2) {
          p.walkPhase += movedStep * 0.085;
          p.stepDist += movedStep;
          this.tutorial.recordMovement(movedStep);
          if (p.stepDist >= 52) {
            p.stepDist = 0;
            this.audio.playFootstep(currentBiome.id);
            this.particles.spawnFootprint(p.x, p.y + 4, Math.atan2(p.vy, p.vx));
          }
        }

        const lookAheadX = Math.cos(p.aimAngle) * 34;
        const lookAheadY = Math.sin(p.aimAngle) * 26;
        this.camera.x += (p.x + lookAheadX - this.camera.x) * Math.min(1, dt * 7.5);
        this.camera.y += (p.y + lookAheadY - this.camera.y) * Math.min(1, dt * 7.5);

        const pCx = Math.floor(p.x / CONFIG.CHUNK_PX);
        const pCy = Math.floor(p.y / CONFIG.CHUNK_PX);
        for (let cy = pCy - 1; cy <= pCy + 1; cy++) {
          for (let cx = pCx - 1; cx <= pCx + 1; cx++) {
            const chunk = this.world.getChunk(cx, cy);
            for (const g of chunk.grass) {
              const d = Math.hypot(g.x - p.x, g.y - p.y);
              if (d < 34) {
                const push = ((34 - d) / 34) * (g.x >= p.x ? 1.1 : -1.1);
                g.bendVel += (push - g.bend) * 28 * dt;
              }
              g.bendVel += -g.bend * 18 * dt;
              g.bendVel *= Math.pow(0.08, dt);
              g.bend += g.bendVel * dt;
            }
            for (const node of chunk.nodes) {
              node.scaleX += (1 - node.scaleX) * Math.min(1, dt * 14);
              node.scaleY += (1 - node.scaleY) * Math.min(1, dt * 14);
              node.shakeX *= Math.pow(0.01, dt);
              if (node.flash > 0) node.flash -= dt;
            }
          }
        }

        let nearestFireDist = 9999;
        let warmthGainRate = 0;
        if (p.equippedItem?.warmthAura) {
          warmthGainRate += p.equippedItem.warmthAura;
        }

        for (const st of this.structures) {
          const dPlayer = Math.hypot(st.x - p.x, st.y - p.y);
          const spec = STRUCTURE_SPECS[st.type];

          if (st.type === 'campfire') {
            if (st.fuel > 0) {
              st.fuel = Math.max(0, st.fuel - dt);
              nearestFireDist = Math.min(nearestFireDist, dPlayer);
              if (dPlayer < 190) warmthGainRate += spec.warmthAura;
              if (Math.random() < dt * 3.5) {
                this.particles.spawnBurst(st.x, st.y - 14, '#f4a261', 1, 35, 'firefly');
              }
            }
          } else if (spec?.warmthAura && dPlayer < 165) {
            warmthGainRate += spec.warmthAura;
          }

          if (st.type === 'spike_trap') {
            if (st.cooldown > 0) st.cooldown -= dt;
            else {
              for (const mob of this.creatures) {
                if (mob.hostile && Math.hypot(mob.x - st.x, mob.y - st.y) < 30) {
                  st.cooldown = 3.2;
                  this.damageCreature(mob, 46, Math.atan2(mob.y - st.y, mob.x - st.x), 210);
                  this.audio.playHit('stone', 3, true);
                  break;
                }
              }
            }
          } else if (st.type === 'alch_pylon') {
            st.cooldown = (st.cooldown || 0) - dt;
            if (st.cooldown <= 0) {
              const target = this.creatures.find(m => m.hostile && Math.hypot(m.x - st.x, m.y - st.y) < 230);
              if (target) {
                st.cooldown = 1.65;
                const ang = Math.atan2(target.y - (st.y - 32), target.x - st.x);
                this.particles.projectiles.push({
                  x: st.x,
                  y: st.y - 24,
                  vx: Math.cos(ang) * 520,
                  vy: Math.sin(ang) * 520,
                  angle: ang,
                  damage: 36,
                  life: 0.7,
                  isAether: true
                });
              }
            }
          }
        }

        this.audio.update(dt, this.timeOfDay, nearestFireDist, this.weather);

        // Survival Vitals Simulation (tuned for 7-minute day/night cycles)
        p.hunger = Math.max(0, p.hunger - dt * 0.25);
        const stamRegen = p.equippedItem?.alchemical ? 24 : 16;
        p.stamina = Math.min(p.maxStamina, p.stamina + dt * stamRegen);

        const rainChill = this.weather.type === 'rain' ? this.weather.intensity * 1.05 : 0;
        const ambientCool = ((isNight ? 3.2 : 0.4) + rainChill) * currentBiome.coldRate;
        const netWarmth = warmthGainRate > 0 ? warmthGainRate * 0.38 : -ambientCool;
        p.warmth = Math.max(0, Math.min(p.maxWarmth, p.warmth + netWarmth * dt));

        if (p.hunger <= 0) {
          p.hp -= dt * 2.2;
        }
        if (p.warmth <= 0) {
          p.hp -= dt * 2.8;
        }
        if (p.hunger > 72 && p.warmth > 55 && p.hp < p.maxHp) {
          p.hp = Math.min(p.maxHp, p.hp + dt * 2.0);
        }

        if (p.hp <= 0) {
          p.hp = 0;
          this.gameOver = true;
          document.getElementById('gameover-summary').textContent =
            `You survived ${this.day} day${this.day > 1 ? 's' : ''} and traveled ${Math.round(Math.hypot(p.x, p.y) / 16)}m from the trailhead.`;
          document.getElementById('modal-gameover').classList.add('open');
          this.ui.updateHUD();
          return;
        }

        this.updateCreatures(dt, isNight, currentBiome);

        for (let i = this.particles.projectiles.length - 1; i >= 0; i--) {
          const proj = this.particles.projectiles[i];
          proj.life -= dt;
          proj.x += proj.vx * dt;
          proj.y += proj.vy * dt;
          if (proj.life <= 0) {
            this.particles.projectiles.splice(i, 1);
            continue;
          }
          for (const mob of this.creatures) {
            if (Math.hypot(mob.x - proj.x, mob.y - proj.y) <= mob.radius + 10) {
              this.damageCreature(mob, proj.damage, proj.angle, 220);
              this.particles.projectiles.splice(i, 1);
              break;
            }
          }
        }

        this.particles.update(dt, p, (itemId, count) => {
          const added = this.addItem(itemId, count);
          if (added) {
            this.audio.playPickup();
            const spec = ITEMS[itemId];
            this.particles.spawnFloatingText(p.x, p.y - 30, `+${count} ${spec ? spec.name : itemId}`, '#386641');
          }
          return added;
        });

        this.ui.updateHUD();
        this.ui.renderMinimap();

        this.autosaveTimer += dt;
        if (this.autosaveTimer >= CONFIG.AUTOSAVE_INTERVAL) {
          this.autosaveTimer = 0;
          SaveSystem.save(this);
        }
      }

      resolveSolidCollisions(entity) {
        for (const st of this.structures) {
          const spec = STRUCTURE_SPECS[st.type];
          if (!spec || !spec.solid) continue;
          const dx = entity.x - st.x;
          const dy = entity.y - st.y;
          const dist = Math.hypot(dx, dy);
          const minDist = entity.radius + spec.radius;
          if (dist < minDist && dist > 0.001) {
            const overlap = minDist - dist;
            entity.x += (dx / dist) * overlap;
            entity.y += (dy / dist) * overlap;
          }
        }

        const cx = Math.floor(entity.x / CONFIG.CHUNK_PX);
        const cy = Math.floor(entity.y / CONFIG.CHUNK_PX);
        const chunk = this.world.getChunk(cx, cy);
        for (const node of chunk.nodes) {
          if (!node.solid) continue;
          const dx = entity.x - node.x;
          const dy = entity.y - node.y;
          const dist = Math.hypot(dx, dy);
          const minDist = entity.radius + node.radius * 0.72;
          if (dist < minDist && dist > 0.001) {
            const overlap = minDist - dist;
            entity.x += (dx / dist) * overlap;
            entity.y += (dy / dist) * overlap;
          }
        }
      }

      updateCreatures(dt, isNight, biome) {
        const p = this.player;
        this.shrinePlacementCooldown = Math.max(0, this.shrinePlacementCooldown - dt);

        for (let i = this.creatures.length - 1; i >= 0; i--) {
          const m = this.creatures[i];
          if (Math.hypot(m.x - p.x, m.y - p.y) > 1350) {
            this.creatures.splice(i, 1);
          }
        }

        const guardianId = Object.keys(BOSS_DEFINITIONS).find(id => BOSS_DEFINITIONS[id].biome === biome.id);
        if (
          guardianId &&
          this.unlockedTier >= 2 &&
          !this.bossesDefeated.includes(guardianId) &&
          !this.structures.some(st => st.type === 'guardian_shrine' && st.bossId === guardianId) &&
          this.shrinePlacementCooldown <= 0
        ) {
          if (!this.ensureGuardianShrine(guardianId)) this.shrinePlacementCooldown = 3;
        }

        this.creatureSpawnTimer -= dt;
        const maxMobs = isNight ? 11 : 7;
        if (this.creatureSpawnTimer <= 0 && this.creatures.length < maxMobs) {
          this.creatureSpawnTimer = isNight ? 3.2 : 4.6;
          const ang = Math.random() * Math.PI * 2;
          const dist = 460 + Math.random() * 280;
          const sx = p.x + Math.cos(ang) * dist;
          const sy = p.y + Math.sin(ang) * dist;
          const spawnBiome = this.world.getBiomeAt(sx, sy);

          if (isNight) {
            if (spawnBiome.id === 'mire') this.spawnCreature('stalker', sx, sy);
            else if (spawnBiome.id === 'forest' || Math.hypot(sx, sy) > 900) this.spawnCreature('wolf', sx, sy);
            else this.spawnCreature('wisp', sx, sy);
          } else {
            if (spawnBiome.id === 'highlands') this.spawnCreature('golem', sx, sy);
            else if (spawnBiome.id === 'mire') this.spawnCreature('stalker', sx, sy);
            else if (spawnBiome.id === 'forest') this.spawnCreature(Math.random() < 0.6 ? 'stag' : 'hare', sx, sy);
            else this.spawnCreature('hare', sx, sy);
          }
        }

        for (const mob of this.creatures) {
          mob.scaleX += (1 - mob.scaleX) * Math.min(1, dt * 12);
          mob.scaleY += (1 - mob.scaleY) * Math.min(1, dt * 12);
          if (mob.flash > 0) mob.flash -= dt;
          if (mob.attackCooldown > 0) mob.attackCooldown -= dt;

          const dx = p.x - mob.x;
          const dy = p.y - mob.y;
          const dist = Math.hypot(dx, dy);

          let bossWinding = false;
          if (mob.boss) {
            if (mob.windupTimer > 0) {
              mob.windupTimer = Math.max(0, mob.windupTimer - dt);
              mob.vx *= Math.pow(0.001, dt);
              mob.vy *= Math.pow(0.001, dt);
              bossWinding = mob.windupTimer > 0;
              const strikeAngle = Math.atan2(dy, dx);
              const angleDiff = Math.abs(Math.atan2(Math.sin(strikeAngle - mob.specialAngle), Math.cos(strikeAngle - mob.specialAngle)));
              const inStrike = dist <= mob.specialRadius && (mob.specialShape === 'circle' || angleDiff <= mob.specialHalfAngle);
              if (!bossWinding && inStrike && p.invulnTimer <= 0) {
                p.hp = Math.max(0, p.hp - mob.specialDamage);
                p.invulnTimer = 0.8;
                p.vx += Math.cos(strikeAngle) * 210;
                p.vy += Math.sin(strikeAngle) * 210;
                this.addCameraShake(9, 0.24);
                this.particles.spawnBurst(p.x, p.y - 10, '#9e2a2b', 12, 155, 'ink');
                this.particles.spawnFloatingText(p.x, p.y - 30, `-${mob.specialDamage}`, '#9e2a2b');
                this.audio.playHit('flesh', 2, false);
              }
            } else {
              mob.bossAbilityCooldown -= dt;
              if (mob.bossAbilityCooldown <= 0 && dist < mob.specialRadius + 80) {
                    const attack = mob.bossAttacks[mob.bossAttackIndex % mob.bossAttacks.length];
                    mob.bossAttackIndex += 1;
                    mob.currentAttackName = attack.name;
                    mob.specialShape = attack.shape;
                    mob.specialHalfAngle = attack.halfAngle ?? Math.PI;
                    mob.specialRadius = attack.radius;
                    mob.specialDamage = attack.damage;
                    mob.specialCooldown = attack.cooldown;
                    mob.windupDuration = attack.windup;
                mob.windupTimer = mob.windupDuration;
                mob.bossAbilityCooldown = mob.specialCooldown;
                mob.specialAngle = Math.atan2(dy, dx);
                bossWinding = true;
              }
            }
          }

          if (!bossWinding && (mob.hostile || mob.aggro)) {
            const aggroRange = isNight ? 420 : 280;
            if (dist < aggroRange || mob.aggro) {
              if (dist > mob.radius + p.radius + 6) {
                const ang = Math.atan2(dy, dx);
                mob.vx += (Math.cos(ang) * mob.speed - mob.vx) * Math.min(1, dt * 6);
                mob.vy += (Math.sin(ang) * mob.speed - mob.vy) * Math.min(1, dt * 6);
              } else if (mob.attackCooldown <= 0 && p.invulnTimer <= 0) {
                mob.attackCooldown = mob.contactCooldown || 1.15;
                mob.scaleX = 1.26;
                mob.scaleY = 0.78;
                p.hp = Math.max(0, p.hp - mob.damage);
                p.invulnTimer = 0.55;
                this.addCameraShake(7, 0.18);
                this.audio.playHit('flesh', 1, false);
                this.particles.spawnBurst(p.x, p.y - 10, '#9e2a2b', 8, 120, 'ink');
                this.particles.spawnFloatingText(p.x, p.y - 28, `-${mob.damage}`, '#9e2a2b');
              }
            } else {
              this.wanderCreature(mob, dt);
            }
          } else if (!bossWinding) {
            if (dist < 155 && dist > 1) {
              const fleeAng = Math.atan2(-dy, -dx);
              mob.vx += (Math.cos(fleeAng) * mob.speed * 1.15 - mob.vx) * Math.min(1, dt * 7);
              mob.vy += (Math.sin(fleeAng) * mob.speed * 1.15 - mob.vy) * Math.min(1, dt * 7);
            } else {
              this.wanderCreature(mob, dt);
            }
          }

          mob.x += mob.vx * dt;
          mob.y += mob.vy * dt;
          const mobMoveSpd = Math.hypot(mob.vx, mob.vy);
          if (mobMoveSpd > 6) {
            mob.walkPhase = (mob.walkPhase || 0) + mobMoveSpd * dt * 0.11;
          }
          if (Math.abs(mob.vx) > 4) mob.facing = mob.vx >= 0 ? 1 : -1;
          this.resolveSolidCollisions(mob);
        }
      }

      wanderCreature(mob, dt) {
        mob.aiTimer -= dt;
        if (mob.aiTimer <= 0) {
          mob.aiTimer = 1.6 + Math.random() * 2.4;
          mob.wanderAngle = Math.random() * Math.PI * 2;
          mob.isIdle = Math.random() < 0.45;
        }
        const spd = mob.isIdle ? 0 : mob.speed * 0.42;
        mob.vx += (Math.cos(mob.wanderAngle) * spd - mob.vx) * Math.min(1, dt * 4);
        mob.vy += (Math.sin(mob.wanderAngle) * spd - mob.vy) * Math.min(1, dt * 4);
      }

      bindInputs() {
        window.addEventListener('resize', () => this.handleResize());

        window.addEventListener('keydown', e => {
          this.keys.add(e.code);

          if (e.code === 'Escape') {
            this.ui.closeAllModals();
            return;
          }

          if (!this.started) return;

          if (e.code === 'KeyC' || e.code === 'Tab') {
            e.preventDefault();
            this.ui.toggleCraftModal();
            return;
          }

          if (e.code === 'KeyE') {
            this.triggerInteract();
            return;
          }

          if (e.code === 'Space') {
            e.preventDefault();
            this.triggerDash();
            return;
          }

          if (e.code.startsWith('Digit')) {
            const num = Number(e.code.replace('Digit', ''));
            if (num >= 1 && num <= CONFIG.HOTBAR_SLOTS) {
              this.selectHotbarSlot(num - 1);
            }
          }
        });

        window.addEventListener('keyup', e => {
          this.keys.delete(e.code);
        });

        this.canvas.addEventListener('mousemove', e => {
          this.mouse.screenX = e.clientX;
          this.mouse.screenY = e.clientY;
        });

        this.canvas.addEventListener('mousedown', e => {
          this.mouse.screenX = e.clientX;
          this.mouse.screenY = e.clientY;
          if (e.button === 0) {
            this.mouse.down = true;
            this.triggerPrimaryAction();
          } else if (e.button === 2) {
            if (this.buildGhost) {
              const emptySlot = this.inventory.slice(0, CONFIG.HOTBAR_SLOTS).findIndex(s => s === null);
              if (emptySlot !== -1) {
                this.selectHotbarSlot(emptySlot);
              } else {
                this.buildGhost = null;
                this.ui.showToast('Placement cancelled.', 'close');
              }
            } else if (this.player.equippedItem?.category === 'food') {
              this.consumeFoodSlot(this.player.activeSlot);
            }
          }
        });

        window.addEventListener('mouseup', () => {
          this.mouse.down = false;
        });

        this.canvas.addEventListener('contextmenu', e => e.preventDefault());

        window.addEventListener('wheel', e => {
          if (!this.started || this.ui.hasOpenModal()) return;
          const dir = e.deltaY > 0 ? 1 : -1;
          const next = (this.player.activeSlot + dir + CONFIG.HOTBAR_SLOTS) % CONFIG.HOTBAR_SLOTS;
          this.selectHotbarSlot(next);
        }, { passive: true });

      }

      handleResize() {
        this.renderer.resize(window.innerWidth, window.innerHeight);
      }
    }

    /**
     * ============================================================================
     * MODULE 9: BOOTSTRAP DELTA-TIME GAME LOOP ON WINDOW LOAD
     * ============================================================================
     */
    window.onload = function () {
      const game = new InkboundGame();
      window.inkboundGame = game;

      let lastTime = performance.now();
      function gameLoop(now) {
        const dt = Math.min(0.05, Math.max(0.001, (now - lastTime) / 1000));
        lastTime = now;

        game.update(dt);
        game.renderer.renderWorld(game);

        requestAnimationFrame(gameLoop);
      }

      requestAnimationFrame(gameLoop);
    };
  