// Wait until the DOM is fully loaded before running any JS
document.addEventListener("DOMContentLoaded", () => {
  // --- Helpers
  // Shortcuts to grab elements
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));
  const money = (n) => `$${n.toFixed(2)}`;

  // --- Prices & config ---
  // Item prices in dollars
  const PRICES = {
    water: 1.5,
    soda: 2.0,
    tea: 2.25,
    coffee: 2.0,
    lemonade: 2.5,
    hamburger: 5.0,
    cheeseburger: 5.5,
    chicken: 6.0,
    veggie: 5.75,
    hotdog: 3.5,
    fries: 2.75,
    rings: 3.25,
    salad: 3.0,
    cookie: 1.5,
    icecream: 2.25,
  };
  // Categories for calculating section subtotals
  const CATEGORIES = {
    drinks: ["water", "soda", "tea", "coffee", "lemonade"],
    sandwiches: ["hamburger", "cheeseburger", "chicken", "veggie", "hotdog"],
    desserts: ["fries", "rings", "salad", "cookie", "icecream"],
  };
  // Friendly names for receipt display
  const NAMES = {
    water: "Water (bottle)",
    soda: "Soda",
    tea: "Iced Tea",
    coffee: "Coffee",
    lemonade: "Lemonade",
    hamburger: "Hamburger",
    cheeseburger: "Cheeseburger",
    chicken: "Chicken Sandwich",
    veggie: "Veggie Wrap",
    hotdog: "Hot Dog",
    fries: "Fries",
    rings: "Onion Rings",
    salad: "Side Salad",
    cookie: "Cookie",
    icecream: "Ice Cream Cup",
  };
  // Sales tax rate
  const TAX_RATE = 0.08;

  // DOM References
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const cartList = $("#cartList");
  const drinkSub = $("#drinksSubtotal");
  const sandSub = $("#sandwichesSubtotal");
  const dessSub = $("#dessertsSubtotal");
  const subtotalEl = $("#subtotal");
  const taxEl = $("#tax");
  const totalEl = $("#total");

  // Modal elements
  const modal = document.getElementById("summaryModal");
  const modalCustomer = document.getElementById("modalCustomer");
  const modalItems = document.getElementById("modalItems");
  const modalSubtotal = document.getElementById("modalSubtotal");
  const modalTax = document.getElementById("modalTax");
  const modalTotal = document.getElementById("modalTotal");
  const modalClose = document.getElementById("modalClose");
  const modalPrint = document.getElementById("modalPrint");

  // Helper: lock/unlock background scroll when modal is open
  const lockScroll = (on) =>
    (document.body.style.overflow = on ? "hidden" : "");

  // State
  // Object to keep track of cart items → { key: { qty } }
  const cart = {};

  // Rendering Function
  // Updates subtotals, totals, and the cart display
  function render() {
    // Calculate section totals
    const totals = { drinks: 0, sandwiches: 0, desserts: 0 };
    for (const [key, { qty }] of Object.entries(cart)) {
      const line = (qty || 0) * (PRICES[key] || 0);
      if (CATEGORIES.drinks.includes(key)) totals.drinks += line;
      else if (CATEGORIES.sandwiches.includes(key)) totals.sandwiches += line;
      else if (CATEGORIES.desserts.includes(key)) totals.desserts += line;
    }
    // Grand totals
    const subtotal = totals.drinks + totals.sandwiches + totals.desserts;
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;

    // Update cart totals UI
    if (drinkSub) drinkSub.textContent = money(totals.drinks);
    if (sandSub) sandSub.textContent = money(totals.sandwiches);
    if (dessSub) dessSub.textContent = money(totals.desserts);
    if (subtotalEl) subtotalEl.textContent = money(subtotal);
    if (taxEl) taxEl.textContent = money(tax);
    if (totalEl) totalEl.textContent = money(total);

    // Rebuild cart list
    if (!cartList) return;
    cartList.innerHTML = "";
    const keys = Object.keys(cart);
    if (keys.length === 0) {
      // Empty state message
      cartList.classList.add("empty");
      const li = document.createElement("li");
      li.className = "muted";
      li.textContent = "No items yet. Add something from the menu →";
      cartList.appendChild(li);
      return;
    }
    cartList.classList.remove("empty");

    keys.forEach((key) => {
      const li = document.createElement("li");
      const qty = cart[key].qty;
      const name = NAMES[key];
      const line = qty * PRICES[key];

      const nameEl = document.createElement("span");
      nameEl.textContent = `${name} × ${qty}`;

      const lineEl = document.createElement("span");
      lineEl.style.textAlign = "right";
      lineEl.textContent = money(line);

      // "−" button inside cart to remove one item
      const removeBtn = document.createElement("button");
      removeBtn.className = "remove";
      removeBtn.title = "Remove one";
      removeBtn.textContent = "−";
      removeBtn.addEventListener("click", () => {
        addQty(key, -1);
      });

      li.appendChild(nameEl);
      li.appendChild(lineEl);
      li.appendChild(removeBtn);
      cartList.appendChild(li);
    });
  }

  // --- Qty helpers
  // Adds/removes quantity for an item and updates badges
  function addQty(key, delta) {
    const current = cart[key]?.qty || 0;
    const next = Math.max(0, current + delta);
    if (next === 0) delete cart[key];
    else cart[key] = { qty: next };

    // update menu badge + active style if present
    const menuLi = document.querySelector(`.item[data-key="${key}"]`);
    if (menuLi) {
      const badge = menuLi.querySelector("[data-qty]");
      if (badge) badge.textContent = next || 0;
      menuLi.classList.toggle("active", next > 0);
    }
    render();
  }

  // --- EVENT HANDLERS ---
  // Use event delegation so we don't need listeners on every button
  document.addEventListener("click", (e) => {
    const addBtn = e.target.closest(".add, .btn-add");
    const minusBtn = e.target.closest(".minus, .btn-minus");
    const clearBtn = e.target.closest("#clearCart");
    const printBtn = e.target.closest("#printBtn");

    if (addBtn) {
      // Add 1 to item qty
      const li = addBtn.closest(".item");
      if (!li) return;
      const key = li.dataset.key;
      if (!key) return;
      addQty(key, +1);
    } else if (minusBtn) {
      // Remove 1 from item qty
      const li = minusBtn.closest(".item");
      if (!li) return;
      const key = li.dataset.key;
      if (!key) return;

      addQty(key, -1);
    } else if (clearBtn) {
      // clear cart + reset menu badges
      Object.keys(cart).forEach((k) => delete cart[k]);
      $$(".item").forEach((li) => {
        const b = li.querySelector("[data-qty]");
        if (b) b.textContent = "0";
        li.classList.remove("active");
      });
      render();
    } else if (printBtn) {
      // Show modal with order summary before printing
      const nameInput = document.getElementById("customerName");
      const name = (nameInput?.value || "").trim();
      const hasItems = Object.keys(cart).length > 0;

      if (!name) {
        alert("Please enter a customer name before viewing the order summary.");
        nameInput?.focus();
        return;
      }
      if (!hasItems) {
        alert(
          "Please add at least one item to the cart before viewing the order summary."
        );
        return;
      }

      // Build modal from cart
      let subtotal = 0;
      modalItems.innerHTML = "";
      Object.entries(cart).forEach(([key, { qty }]) => {
        const line = qty * PRICES[key];
        subtotal += line;
        const li = document.createElement("li");
        const left = document.createElement("span");
        left.textContent = `${NAMES[key]} × ${qty}`;
        const right = document.createElement("span");
        right.style.textAlign = "right";
        right.textContent = money(line);
        li.appendChild(left);
        li.appendChild(right);
        modalItems.appendChild(li);
      });

      const tax = subtotal * TAX_RATE;
      const total = subtotal + tax;

      modalCustomer.textContent = name;
      modalSubtotal.textContent = money(subtotal);
      modalTax.textContent = money(tax);
      modalTotal.textContent = money(total);

      // --- Modal controls ---
      // Close modal on "Close" button
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // lock scroll
    }

    modalClose.addEventListener("click", () => {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    });

    // Close modal if user clicks backdrop
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
        document.body.style.overflow = "";
      }
    });

    // Print from inside modal
    modalPrint.addEventListener("click", () => {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
      window.print();
    });
  });

 // First render to set up empty cart display
  render();
});
