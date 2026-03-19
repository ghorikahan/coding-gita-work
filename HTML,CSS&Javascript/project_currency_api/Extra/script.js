//    // Configuration
//         const API_BASE = 'https://api.frankfurter.app';
//         const MAJOR_CURRENCIES = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD'];
//         const REFRESH_INTERVAL = 5 * 1000; // 5 minutes
//         const DEBOUNCE_DELAY = 300; // milliseconds

//         // State
//         let currencies = {};
//         let currentRates = {};
//         let refreshInterval = null;
//         let defaultFrom = 'USD';
//         let defaultTo = 'EUR';

//         // DOM Elements
//         const fromCurrencyEl = document.getElementById('fromCurrency');
//         const toCurrencyEl = document.getElementById('toCurrency');
//         const amountEl = document.getElementById('amount');
//         const convertedAmountEl = document.getElementById('convertedAmount');
//         const conversionDetailsEl = document.getElementById('conversionDetails');
//         const rateDateEl = document.getElementById('rateDate');
//         const insightsContainer = document.getElementById('insightsContainer');
//         const historyList = document.getElementById('historyList');
//         const errorMessageEl = document.getElementById('errorMessage');
//         const autoRefreshEl = document.getElementById('autoRefresh');

//         // Debounce function[citation:7]
//         function debounce(func, timeout = DEBOUNCE_DELAY) {
//             let timer;
//             return (...args) => {
//                 clearTimeout(timer);
//                 timer = setTimeout(() => { func.apply(this, args); }, timeout);
//             };
//         }

//         // Initialize
//         document.addEventListener('DOMContentLoaded', function() {
//             loadDefaultCurrencyPair();
//             fetchCurrencies();
//             loadHistory();
//             setupEventListeners();
//         });

//         // Event Listeners[citation:2][citation:6]
//         function setupEventListeners() {
//             fromCurrencyEl.addEventListener('change', handleCurrencyChange);
//             toCurrencyEl.addEventListener('change', handleCurrencyChange);
//             amountEl.addEventListener('input', debounce(handleAmountChange));
//             autoRefreshEl.addEventListener('change', handleAutoRefreshToggle);
//         }

//         function handleCurrencyChange() {
//             if (fromCurrencyEl.value && toCurrencyEl.value) {
//                 fetchRates();
//                 addToHistory();
//             }
//         }

//         function handleAmountChange() {
//             if (fromCurrencyEl.value && toCurrencyEl.value) {
//                 updateConversion();
//                 addToHistory();
//             }
//         }

//         function handleAutoRefreshToggle() {
//             if (autoRefreshEl.checked) {
//                 startAutoRefresh();
//             } else {
//                 stopAutoRefresh();
//             }
//         }

//         // Fetch available currencies[citation:1]
//         function fetchCurrencies() {
//             fetch(`${API_BASE}/currencies`)
//                 .then(response => response.json())
//                 .then(data => {
//                     currencies = data;
//                     populateCurrencySelects();
//                 })
//                 .catch(error => {
//                     showError('Failed to load currency list');
//                     console.error('Currency fetch error:', error);
//                 });
//         }

//         function populateCurrencySelects() {
//             fromCurrencyEl.innerHTML = '';
//             toCurrencyEl.innerHTML = '';

//             Object.entries(currencies).forEach(([code, name]) => {
//                 const option1 = document.createElement('option');
//                 option1.value = code;
//                 option1.textContent = `${code} - ${name}`;

//                 const option2 = option1.cloneNode(true);

//                 fromCurrencyEl.appendChild(option1);
//                 toCurrencyEl.appendChild(option2);
//             });

//             // Set default values after populating
//             fromCurrencyEl.value = defaultFrom;
//             toCurrencyEl.value = defaultTo;

//             // Fetch rates with default values
//             if (defaultFrom && defaultTo) {
//                 fetchRates();
//             }
//         }

//         // Fetch exchange rates[citation:1][citation:10]
//         function fetchRates() {
//             const from = fromCurrencyEl.value;
//             const to = toCurrencyEl.value;

//             if (!from || !to) return;

//             // Handle same currency case
//             if (from === to) {
//                 currentRates = { [to]: 1 };
//                 updateConversion();
//                 updateInsights();
//                 return;
//             }

//             fetch(`${API_BASE}/latest?base=${from}&symbols=${to},${MAJOR_CURRENCIES.join(',')}`)
//                 .then(response => {
//                     if (!response.ok) throw new Error('Network response was not ok');
//                     return response.json();
//                 })
//                 .then(data => {
//                     currentRates = data.rates;
//                     rateDateEl.textContent = `Rates as of ${data.date}`;
//                     updateConversion();
//                     updateInsights();
//                     hideError();

//                     // Add animation for rate updates
//                     document.querySelectorAll('.result-container, .panel').forEach(el => {
//                         el.classList.add('update-animation');
//                         setTimeout(() => el.classList.remove('update-animation'), 1000);
//                     });
//                 })
//                 .catch(error => {
//                     showError('Failed to fetch exchange rates. Please try again.');
//                     console.error('Rates fetch error:', error);
//                 });
//         }

//         // Update conversion result[citation:3][citation:8]
//         function updateConversion() {
//             const amount = parseFloat(amountEl.value) || 0;
//             const from = fromCurrencyEl.value;
//             const to = toCurrencyEl.value;

//             if (!from || !to || amount <= 0) {
//                 convertedAmountEl.textContent = '-';
//                 conversionDetailsEl.textContent = '';
//                 return;
//             }

//             let converted;

//             if (from === to) {
//                 converted = amount;
//             } else {
//                 const rate = currentRates[to];
//                 if (!rate) return;
//                 converted = amount * rate;
//             }

//             // Round to 2 decimal places[citation:3]
//             convertedAmountEl.textContent = `${formatNumber(converted)} ${to}`;
//             conversionDetailsEl.textContent = 
//                 `${formatNumber(amount)} ${from} = ${formatNumber(converted)} ${to}`;
//         }

//         // Update rate insights visualization
//         function updateInsights() {
//             const from = fromCurrencyEl.value;
//             const to = toCurrencyEl.value;

//             if (!from || !to || !currentRates) return;

//             let html = '<div class="comparison-bars">';

//             MAJOR_CURRENCIES.forEach(currency => {
//                 if (currency !== from && currentRates[currency]) {
//                     const rate = currentRates[currency];
//                     // Normalize for visualization (max 2.0 = 100%)
//                     const normalizedWidth = Math.min(rate * 50, 100);

//                     html += `
//                         <div class="bar-container">
//                             <div class="bar-label">
//                                 <span>1 ${from} = ${rate.toFixed(4)} ${currency}</span>
//                                 <span>${currencies[currency] || currency}</span>
//                             </div>
//                             <div class="bar" style="width: ${normalizedWidth}%">
//                                 <span class="bar-value">${rate.toFixed(4)}</span>
//                             </div>
//                         </div>
//                     `;
//                 }
//             });

//             html += '</div>';
//             insightsContainer.innerHTML = html;
//         }

//         // Conversion History Functions[citation:4][citation:9]
//         function addToHistory() {
//             const amount = parseFloat(amountEl.value);
//             const from = fromCurrencyEl.value;
//             const to = toCurrencyEl.value;

//             if (!from || !to || amount <= 0) return;

//             const conversion = {
//                 id: Date.now(),
//                 amount: amount,
//                 from: from,
//                 to: to,
//                 result: amount * (from === to ? 1 : (currentRates[to] || 0)),
//                 timestamp: new Date().toLocaleString()
//             };

//             let history = JSON.parse(localStorage.getItem('conversionHistory') || '[]');
//             history.unshift(conversion);

//             // Keep only last 10 conversions
//             if (history.length > 10) {
//                 history = history.slice(0, 10);
//             }

//             localStorage.setItem('conversionHistory', JSON.stringify(history));
//             loadHistory();
//         }

//         function loadHistory() {
//             const history = JSON.parse(localStorage.getItem('conversionHistory') || '[]');
//             historyList.innerHTML = '';

//             if (history.length === 0) {
//                 historyList.innerHTML = '<p style="text-align: center; color: #7f8c8d;">No conversion history yet</p>';
//                 return;
//             }

//             history.forEach(item => {
//                 const div = document.createElement('div');
//                 div.className = 'history-item';
//                 div.innerHTML = `
//                     <div class="history-details">
//                         <span class="history-amount">${formatNumber(item.amount)} ${item.from}</span>
//                         <span> → </span>
//                         <span class="history-result">${formatNumber(item.result)} ${item.to}</span>
//                         <div style="font-size: 0.8em; color: #95a5a6; margin-top: 5px;">
//                             ${item.timestamp}
//                         </div>
//                     </div>
//                 `;
//                 historyList.appendChild(div);
//             });
//         }

//         function clearHistory() {
//             if (confirm('Clear all conversion history?')) {
//                 localStorage.removeItem('conversionHistory');
//                 loadHistory();
//             }
//         }

//         // Default Currency Pair
//         function loadDefaultCurrencyPair() {
//             const saved = JSON.parse(localStorage.getItem('defaultCurrencyPair'));
//             if (saved) {
//                 defaultFrom = saved.from;
//                 defaultTo = saved.to;
//             }
//         }

//         function setAsDefault() {
//             const pair = {
//                 from: fromCurrencyEl.value,
//                 to: toCurrencyEl.value
//             };
//             localStorage.setItem('defaultCurrencyPair', JSON.stringify(pair));
//             alert('Default currency pair saved!');
//         }

//         // Auto-refresh functionality
//         function startAutoRefresh() {
//             if (refreshInterval) clearInterval(refreshInterval);
//             refreshInterval = setInterval(fetchRates, REFRESH_INTERVAL);
//         }

//         function stopAutoRefresh() {
//             if (refreshInterval) {
//                 clearInterval(refreshInterval);
//                 refreshInterval = null;
//             }
//         }

//         // Utility functions
//         function formatNumber(num) {
//             return Math.round(num * 100) / 100;
//         }

//         function showError(message) {
//             errorMessageEl.textContent = message;
//             errorMessageEl.style.display = 'block';
//         }

//         function hideError() {
//             errorMessageEl.style.display = 'none';
//         }












var input = document.querySelector("#input");
var select = document.querySelector("#select-btn");
var ans = document.querySelector("#ans");
var btn = document.querySelector(".convert-btn");
var text = "INR";
var ansText;

