// Membershine Clickable Prototype — Page Content
const PAGES = {

dashboard: `
<h1 class="page-title">Dashboard</h1>
<p class="page-subtitle">Welcome back, Alex. Here's your community overview.</p>
<div class="stat-cards">
  <div class="stat-card"><div class="stat-label">Active Members</div><div class="stat-value text-primary">156</div></div>
  <div class="stat-card"><div class="stat-label">Properties</div><div class="stat-value text-primary">142</div></div>
  <div class="stat-card"><div class="stat-label">Outstanding Balance</div><div class="stat-value text-danger">$36,200</div></div>
  <div class="stat-card"><div class="stat-label">This Month's Revenue</div><div class="stat-value text-success">$42,350</div></div>
</div>
<div class="ms-card">
  <h3 style="font-weight:600;margin-bottom:1rem;">Recent Activity</h3>
  <table class="ms-table">
    <thead><tr><th>Date</th><th>Event</th><th>Details</th><th>Status</th></tr></thead>
    <tbody>
      <tr><td>Mar 20</td><td>Payment Received</td><td>Unit 101 — $450.00 monthly assessment</td><td><span class="badge-pill badge-success">Completed</span></td></tr>
      <tr><td>Mar 19</td><td>New Member</td><td>Marcus Webb added to Unit 215</td><td><span class="badge-pill badge-info">New</span></td></tr>
      <tr><td>Mar 18</td><td>Document Uploaded</td><td>March Board Meeting Minutes</td><td><span class="badge-pill badge-success">Published</span></td></tr>
      <tr><td>Mar 17</td><td>Late Fee Applied</td><td>Unit 312 — $25.00 late charge</td><td><span class="badge-pill badge-warning">Pending</span></td></tr>
      <tr><td>Mar 15</td><td>Payment Failed</td><td>Unit 205 — Card declined</td><td><span class="badge-pill badge-danger">Failed</span></td></tr>
    </tbody>
  </table>
</div>
`,

members: `
<h1 class="page-title">Members</h1>
<p class="page-subtitle">Sunrise Condos — 156 members</p>
<div class="action-bar">
  <div class="action-bar-left">
    <input type="text" class="form-control" placeholder="Search members..." style="width:250px">
    <button class="btn btn-primary">Search</button>
  </div>
  <div class="action-bar-right">
    <button class="btn btn-secondary">Filter</button>
    <button class="btn btn-secondary">Sort</button>
    <button class="btn btn-primary">Actions ▾</button>
  </div>
</div>
<div class="ms-card" style="padding:0;overflow:hidden;border-radius:1rem">
<table class="ms-table">
  <thead><tr><th><input type="checkbox"></th><th>Name</th><th>Unit</th><th>Email</th><th>Status</th><th>Last Login</th><th>Actions</th></tr></thead>
  <tbody>
    <tr><td><input type="checkbox"></td><td><div class="d-flex align-items-center gap-2"><div class="avatar-circle" style="width:40px;height:40px;font-size:0.7rem">JS</div><div><div class="fw-600">John Smith</div></div></div></td><td>101</td><td class="text-muted">john.smith@email.com</td><td><span class="badge-pill badge-success">Active</span></td><td class="text-muted">Mar 19, 2026</td><td><button class="btn btn-secondary btn-sm">⋯</button></td></tr>
    <tr><td><input type="checkbox"></td><td><div class="d-flex align-items-center gap-2"><div class="avatar-circle" style="width:40px;height:40px;font-size:0.7rem;background:#6c757d">MG</div><div><div class="fw-600">Maria Garcia</div></div></div></td><td>205</td><td class="text-muted">m.garcia@email.com</td><td><span class="badge-pill badge-success">Active</span></td><td class="text-muted">Mar 15, 2026</td><td><button class="btn btn-secondary btn-sm">⋯</button></td></tr>
    <tr><td><input type="checkbox"></td><td><div class="d-flex align-items-center gap-2"><div class="avatar-circle" style="width:40px;height:40px;font-size:0.7rem;background:#28a745">RC</div><div><div class="fw-600">Robert Chen</div></div></div></td><td>312</td><td class="text-muted">r.chen@email.com</td><td><span class="badge-pill badge-warning">Suspended</span></td><td class="text-muted">Jan 8, 2026</td><td><button class="btn btn-secondary btn-sm">⋯</button></td></tr>
    <tr><td><input type="checkbox"></td><td><div class="d-flex align-items-center gap-2"><div class="avatar-circle" style="width:40px;height:40px;font-size:0.7rem;background:#dc3545">LJ</div><div><div class="fw-600">Lisa Johnson</div></div></div></td><td>108</td><td class="text-muted">lisa.j@email.com</td><td><span class="badge-pill badge-success">Active</span></td><td class="text-muted">Mar 20, 2026</td><td><button class="btn btn-secondary btn-sm">⋯</button></td></tr>
    <tr><td><input type="checkbox"></td><td><div class="d-flex align-items-center gap-2"><div class="avatar-circle" style="width:40px;height:40px;font-size:0.7rem;background:#ffc107;color:#333">DW</div><div><div class="fw-600">David Williams</div></div></div></td><td>401</td><td class="text-muted">d.williams@email.com</td><td><span class="badge-pill badge-success">Active</span></td><td class="text-muted">Mar 18, 2026</td><td><button class="btn btn-secondary btn-sm">⋯</button></td></tr>
  </tbody>
</table>
</div>
<div class="table-footer">
  <span>Showing: 5 of 156</span>
  <span class="badge-pill badge-primary">Selected: 0</span>
</div>
`,

properties: `
<h1 class="page-title">Properties</h1>
<p class="page-subtitle">Sunrise Condos — 142 properties</p>
<div class="action-bar">
  <div class="action-bar-left">
    <input type="text" class="form-control" placeholder="Search properties..." style="width:250px">
    <button class="btn btn-primary">Search</button>
  </div>
  <div class="action-bar-right">
    <button class="btn btn-secondary">Filter</button>
    <button class="btn btn-secondary">Sort</button>
    <button class="btn btn-primary">Add Property</button>
  </div>
</div>
<div class="ms-card" style="padding:0;overflow:hidden;border-radius:1rem">
<table class="ms-table">
  <thead><tr><th>Unit</th><th>Address</th><th>Owner</th><th>Balance</th><th>Status</th><th>Actions</th></tr></thead>
  <tbody>
    <tr><td class="fw-600">101</td><td>123 Sunrise Blvd, Unit 101</td><td>John Smith</td><td class="font-mono text-right">$0.00</td><td><span class="badge-pill badge-success">Current</span></td><td><button class="btn btn-secondary btn-sm">⋯</button></td></tr>
    <tr><td class="fw-600">205</td><td>123 Sunrise Blvd, Unit 205</td><td>Maria Garcia</td><td class="font-mono text-right text-danger">$900.00</td><td><span class="badge-pill badge-warning">Overdue</span></td><td><button class="btn btn-secondary btn-sm">⋯</button></td></tr>
    <tr><td class="fw-600">312</td><td>123 Sunrise Blvd, Unit 312</td><td>Robert Chen</td><td class="font-mono text-right text-danger">$1,350.00</td><td><span class="badge-pill badge-danger">Overdue 90+</span></td><td><button class="btn btn-secondary btn-sm">⋯</button></td></tr>
    <tr><td class="fw-600">108</td><td>123 Sunrise Blvd, Unit 108</td><td>Lisa Johnson</td><td class="font-mono text-right text-success">($50.00)</td><td><span class="badge-pill badge-info">Credit</span></td><td><button class="btn btn-secondary btn-sm">⋯</button></td></tr>
    <tr><td class="fw-600">401</td><td>123 Sunrise Blvd, Unit 401</td><td>David Williams</td><td class="font-mono text-right">$0.00</td><td><span class="badge-pill badge-success">Current</span></td><td><button class="btn btn-secondary btn-sm">⋯</button></td></tr>
  </tbody>
</table>
</div>
<div class="table-footer"><span>Showing: 5 of 142</span></div>
`,

'chart-of-accounts': `
<h1 class="page-title">Chart of Accounts</h1>
<p class="page-subtitle">Sunrise Condos — General Ledger Accounts</p>
<div class="action-bar">
  <div class="action-bar-left">
    <input type="text" class="form-control" placeholder="Search accounts..." style="width:250px">
    <button class="btn btn-primary">Search</button>
  </div>
  <div class="action-bar-right">
    <button class="btn btn-secondary">Filter</button>
    <button class="btn btn-secondary">Sort</button>
    <button class="btn btn-primary">Add Account</button>
  </div>
</div>
<div class="ms-card" style="padding:0;overflow:hidden;border-radius:1rem">
<table class="ms-table">
  <thead><tr><th>Code</th><th>Account Name</th><th>Type</th><th class="text-right">Balance</th><th>Status</th></tr></thead>
  <tbody>
    <tr><td class="text-muted font-mono">1000</td><td class="fw-600">Cash — Operating</td><td><span class="badge-pill badge-success">Asset</span></td><td class="text-right font-mono">$52,431.50</td><td><span class="badge-pill badge-success">Active</span></td></tr>
    <tr><td class="text-muted font-mono">1100</td><td class="fw-600">Accounts Receivable</td><td><span class="badge-pill badge-success">Asset</span></td><td class="text-right font-mono">$36,200.00</td><td><span class="badge-pill badge-success">Active</span></td></tr>
    <tr><td class="text-muted font-mono">1200</td><td class="fw-600">Prepaid Insurance</td><td><span class="badge-pill badge-success">Asset</span></td><td class="text-right font-mono">$6,000.00</td><td><span class="badge-pill badge-success">Active</span></td></tr>
    <tr><td class="text-muted font-mono">2000</td><td class="fw-600">Accounts Payable</td><td><span class="badge-pill badge-warning">Liability</span></td><td class="text-right font-mono">$12,800.00</td><td><span class="badge-pill badge-success">Active</span></td></tr>
    <tr><td class="text-muted font-mono">2100</td><td class="fw-600">Deferred Revenue</td><td><span class="badge-pill badge-warning">Liability</span></td><td class="text-right font-mono">$8,500.00</td><td><span class="badge-pill badge-success">Active</span></td></tr>
    <tr><td class="text-muted font-mono">3000</td><td class="fw-600">Fund Balance</td><td><span class="badge-pill badge-primary">Equity</span></td><td class="text-right font-mono">$73,331.50</td><td><span class="badge-pill badge-success">Active</span></td></tr>
    <tr><td class="text-muted font-mono">4000</td><td class="fw-600">Homeowner Assessments</td><td><span class="badge-pill badge-success">Revenue</span></td><td class="text-right font-mono">$245,000.00</td><td><span class="badge-pill badge-success">Active</span></td></tr>
    <tr><td class="text-muted font-mono">4100</td><td class="fw-600">Late Fees Revenue</td><td><span class="badge-pill badge-success">Revenue</span></td><td class="text-right font-mono">$8,500.00</td><td><span class="badge-pill badge-success">Active</span></td></tr>
    <tr><td class="text-muted font-mono">5000</td><td class="fw-600">Landscaping</td><td><span class="badge-pill badge-danger">Expense</span></td><td class="text-right font-mono">$42,000.00</td><td><span class="badge-pill badge-success">Active</span></td></tr>
    <tr><td class="text-muted font-mono">5100</td><td class="fw-600">Utilities</td><td><span class="badge-pill badge-danger">Expense</span></td><td class="text-right font-mono">$28,500.00</td><td><span class="badge-pill badge-success">Active</span></td></tr>
  </tbody>
</table>
</div>
<div class="table-footer"><span>Showing: 10 of 45</span></div>
`,

pnl: `
<h1 class="page-title">Profit & Loss Statement</h1>
<p class="page-subtitle">Sunrise Condos — January 1 – December 31, 2025</p>
<div class="ms-card">
  <div class="section-header">REVENUE</div>
  <div class="report-row"><span class="acct-code">4000</span><span class="acct-name">Homeowner Assessments</span><span class="acct-amount">$245,000</span></div>
  <div class="report-row"><span class="acct-code">4100</span><span class="acct-name">Late Fees</span><span class="acct-amount">$8,500</span></div>
  <div class="report-row"><span class="acct-code">4200</span><span class="acct-name">Interest Income</span><span class="acct-amount">$2,100</span></div>
  <div class="report-total"><span>Total Revenue</span><span class="acct-amount">$255,600</span></div>

  <div class="section-header">EXPENSES</div>
  <div class="report-row"><span class="acct-code">5000</span><span class="acct-name">Landscaping</span><span class="acct-amount">$42,000</span></div>
  <div class="report-row"><span class="acct-code">5100</span><span class="acct-name">Utilities</span><span class="acct-amount">$28,500</span></div>
  <div class="report-row"><span class="acct-code">5200</span><span class="acct-name">Insurance</span><span class="acct-amount">$18,000</span></div>
  <div class="report-row"><span class="acct-code">5300</span><span class="acct-name">Management Fees</span><span class="acct-amount">$36,000</span></div>
  <div class="report-row"><span class="acct-code">5400</span><span class="acct-name">Repairs & Maintenance</span><span class="acct-amount">$15,200</span></div>
  <div class="report-row"><span class="acct-code">5500</span><span class="acct-name">Legal & Professional</span><span class="acct-amount">$8,800</span></div>
  <div class="report-row"><span class="acct-code">5600</span><span class="acct-name">Administrative</span><span class="acct-amount">$6,500</span></div>
  <div class="report-total"><span>Total Expenses</span><span class="acct-amount">$155,000</span></div>

  <div class="report-net"><span>Net Income</span><span>$100,600</span></div>
</div>
`,

'balances-admin': `
<h1 class="page-title">Account Balances</h1>
<p class="page-subtitle">Sunrise Condos — Assessment Management</p>
<div class="summary-bar">
  <div class="summary-item">Total Outstanding: <span class="text-danger">$125,400</span></div>
  <div class="summary-item">Current: <span class="text-success">$89,200</span></div>
  <div class="summary-item">Overdue: <span class="text-danger">$36,200</span></div>
  <div class="summary-item">Credits: <span class="text-success">($2,100)</span></div>
</div>
<div class="action-bar">
  <div class="action-bar-left">
    <input type="text" class="form-control" placeholder="Search members..." style="width:250px">
    <button class="btn btn-primary">Search</button>
  </div>
  <div class="action-bar-right">
    <button class="btn btn-secondary">Filter</button>
    <button class="btn btn-secondary">Sort</button>
    <button class="btn btn-primary">Add Balance ▾</button>
  </div>
</div>
<div class="ms-card" style="padding:0;overflow:hidden;border-radius:1rem">
<table class="ms-table">
  <thead><tr><th>Member</th><th>Unit</th><th class="text-right">Balance Due</th><th>Last Payment</th><th>Due Date</th><th>Status</th><th>Actions</th></tr></thead>
  <tbody>
    <tr><td class="fw-600">John Smith</td><td>101</td><td class="text-right font-mono">$450.00</td><td class="text-muted">Feb 28, 2026</td><td>Mar 31, 2026</td><td><span class="badge-pill badge-success">Current</span></td><td><button class="btn btn-secondary btn-sm">⋯</button></td></tr>
    <tr><td class="fw-600">Maria Garcia</td><td>205</td><td class="text-right font-mono text-danger">$900.00</td><td class="text-muted">Jan 15, 2026</td><td>Feb 28, 2026</td><td><span class="badge-pill badge-warning">Overdue</span></td><td><button class="btn btn-secondary btn-sm">⋯</button></td></tr>
    <tr><td class="fw-600">Robert Chen</td><td>312</td><td class="text-right font-mono text-danger">$1,350.00</td><td class="text-muted">—</td><td>Dec 31, 2025</td><td><span class="badge-pill badge-danger">Overdue 90+</span></td><td><button class="btn btn-secondary btn-sm">⋯</button></td></tr>
    <tr><td class="fw-600">Lisa Johnson</td><td>108</td><td class="text-right font-mono text-success">($50.00)</td><td class="text-muted">Mar 15, 2026</td><td>—</td><td><span class="badge-pill badge-info">Credit</span></td><td><button class="btn btn-secondary btn-sm">⋯</button></td></tr>
    <tr><td class="fw-600">David Williams</td><td>401</td><td class="text-right font-mono">$450.00</td><td class="text-muted">Mar 1, 2026</td><td>Mar 31, 2026</td><td><span class="badge-pill badge-success">Current</span></td><td><button class="btn btn-secondary btn-sm">⋯</button></td></tr>
  </tbody>
</table>
</div>
<div class="table-footer"><span>Showing: 5 of 156</span></div>
`,

'late-fees': `
<h1 class="page-title">Late Fee Settings</h1>
<p class="page-subtitle">Sunrise Condos — Configure automatic late charges</p>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem;">
  <div class="form-card">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3 style="margin:0">Flat Fee Late Charge</h3>
      <div class="toggle-switch"><div class="toggle-track on"></div><span style="font-size:0.85rem;color:var(--ms-muted)">Enabled</span></div>
    </div>
    <div class="mb-3"><label class="form-label">Late Fee Amount</label><div class="input-group"><span class="input-group-text">$</span><input type="text" class="form-control" value="25.00"></div></div>
    <div class="mb-3"><label class="form-label">Grace Period</label><select class="form-select"><option>15 days</option><option>30 days</option></select></div>
    <div class="mb-3"><label class="form-label">Frequency</label><select class="form-select"><option>Per occurrence</option><option>Monthly</option></select></div>
  </div>
  <div class="form-card" style="opacity:0.6">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3 style="margin:0">Interest-Based Late Charge</h3>
      <div class="toggle-switch"><div class="toggle-track"></div><span style="font-size:0.85rem;color:var(--ms-muted)">Disabled</span></div>
    </div>
    <div class="mb-3"><label class="form-label">Interest Type</label><div class="d-flex gap-3"><label><input type="radio" name="interest" checked> Simple</label><label><input type="radio" name="interest"> Compound</label></div></div>
    <div class="mb-3"><label class="form-label">Annual Rate</label><div class="input-group"><input type="text" class="form-control" value="18.00" disabled><span class="input-group-text">%</span></div></div>
    <div class="mb-3"><label class="form-label">Grace Period</label><select class="form-select" disabled><option>30 days</option></select></div>
  </div>
</div>
<div class="ms-card">
  <div class="section-header">NOTIFICATION SETTINGS</div>
  <div style="padding:1rem">
    <div class="form-check mb-2"><input class="form-check-input" type="checkbox" checked><label class="form-check-label">Send late payment notification emails</label></div>
    <div class="form-check mb-2"><input class="form-check-input" type="checkbox" checked><label class="form-check-label">Include late fee breakdown on invoices</label></div>
    <div class="form-check mb-2"><input class="form-check-input" type="checkbox"><label class="form-check-label">Send reminder 3 days before due date</label></div>
  </div>
</div>
<div class="d-flex justify-content-end gap-2 mt-3">
  <button class="btn btn-secondary">Cancel</button>
  <button class="btn btn-primary">Save Settings</button>
</div>
`,

'bank-recon': `
<h1 class="page-title">Bank Reconciliation</h1>
<p class="page-subtitle">Chase Checking ****4521 — Period: March 2026</p>
<div class="split-panel" style="margin-bottom:1rem">
  <div class="panel-box">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3 style="margin:0">Bank Statement</h3>
      <button class="btn btn-secondary btn-sm">Import CSV</button>
    </div>
    <table class="ms-table">
      <thead><tr><th>Date</th><th>Description</th><th class="text-right">Amount</th><th>Status</th></tr></thead>
      <tbody>
        <tr><td>Mar 5</td><td>ACH Deposit — Assessments</td><td class="text-right font-mono text-success">$12,450.00</td><td>✅</td></tr>
        <tr><td>Mar 8</td><td>Check #1042 — Landscaping</td><td class="text-right font-mono text-danger">($2,800.00)</td><td>🟡</td></tr>
        <tr><td>Mar 12</td><td>Wire — Insurance Premium</td><td class="text-right font-mono text-danger">($4,500.00)</td><td>✅</td></tr>
        <tr><td>Mar 15</td><td>Bank Fee</td><td class="text-right font-mono text-danger">($25.00)</td><td>🟡</td></tr>
        <tr><td>Mar 18</td><td>ACH Deposit — Late Fees</td><td class="text-right font-mono text-success">$850.00</td><td>✅</td></tr>
      </tbody>
    </table>
  </div>
  <div class="panel-box">
    <h3>GL Cash Account — 1000</h3>
    <table class="ms-table">
      <thead><tr><th>Date</th><th>Description</th><th class="text-right">Amount</th><th>Status</th></tr></thead>
      <tbody>
        <tr><td>Mar 5</td><td>Assessments Collected</td><td class="text-right font-mono text-success">$12,450.00</td><td>✅</td></tr>
        <tr><td>Mar 8</td><td>Landscaping — Green Co</td><td class="text-right font-mono text-danger">($2,800.00)</td><td>🟡</td></tr>
        <tr><td>Mar 12</td><td>Insurance Premium</td><td class="text-right font-mono text-danger">($4,500.00)</td><td>✅</td></tr>
        <tr><td>Mar 15</td><td>—</td><td class="text-right font-mono">—</td><td>⬜</td></tr>
        <tr><td>Mar 18</td><td>Late Fees Revenue</td><td class="text-right font-mono text-success">$850.00</td><td>✅</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="ms-card">
  <h3 style="font-weight:600;margin-bottom:1rem">Reconciliation Summary</h3>
  <div class="recon-summary">
    <span class="recon-label">Bank Statement Ending Balance</span><span class="recon-value">$45,231.50</span>
    <span class="recon-label">Outstanding Deposits</span><span class="recon-value">$3,200.00</span>
    <span class="recon-label">Outstanding Checks</span><span class="recon-value">($1,800.00)</span>
    <span class="recon-label fw-600">Adjusted Bank Balance</span><span class="recon-value fw-600">$46,631.50</span>
    <span class="recon-label fw-600">GL Balance</span><span class="recon-value fw-600">$46,631.50</span>
    <span class="recon-label fw-600">Difference</span><span class="recon-value fw-600 text-success">$0.00 ✓</span>
  </div>
  <div class="d-flex justify-content-end gap-2 mt-3">
    <button class="btn btn-secondary">Save Progress</button>
    <button class="btn btn-primary">Complete Reconciliation</button>
  </div>
</div>
`,

documents: `
<h1 class="page-title">Documents</h1>
<div class="breadcrumb-nav"><a href="#">Documents</a> &gt; Governing Documents</div>
<div class="action-bar">
  <div class="action-bar-left">
    <input type="text" class="form-control" placeholder="Search documents..." style="width:250px">
    <button class="btn btn-primary">Search</button>
  </div>
  <div class="action-bar-right">
    <button class="btn btn-secondary">Filter</button>
    <button class="btn btn-primary">Upload</button>
    <button class="btn btn-primary">New Folder</button>
  </div>
</div>
<h3 style="font-weight:600;margin-bottom:1rem;font-size:1rem;color:var(--ms-muted);text-transform:uppercase">Folders</h3>
<div class="doc-grid" style="margin-bottom:2rem">
  <div class="doc-card"><div class="doc-icon">📁</div><div class="doc-name">Governing Documents</div><div class="doc-meta">12 files</div></div>
  <div class="doc-card"><div class="doc-icon">📁</div><div class="doc-name">Meeting Minutes</div><div class="doc-meta">24 files</div></div>
  <div class="doc-card"><div class="doc-icon">📁</div><div class="doc-name">Financial Reports</div><div class="doc-meta">18 files</div></div>
  <div class="doc-card"><div class="doc-icon">📁</div><div class="doc-name">Insurance</div><div class="doc-meta">6 files</div></div>
</div>
<h3 style="font-weight:600;margin-bottom:1rem;font-size:1rem;color:var(--ms-muted);text-transform:uppercase">Files</h3>
<div class="doc-grid">
  <div class="doc-card"><div class="doc-icon">📄</div><div class="doc-name">CC&Rs — 2024 Amendment.pdf</div><div class="doc-meta">2.4 MB · Jan 15, 2025<br><span class="badge-pill badge-success" style="margin-top:0.25rem">All Members</span></div></div>
  <div class="doc-card"><div class="doc-icon">📄</div><div class="doc-name">Bylaws — Current.pdf</div><div class="doc-meta">1.8 MB · Sep 3, 2024<br><span class="badge-pill badge-success" style="margin-top:0.25rem">All Members</span></div></div>
  <div class="doc-card"><div class="doc-icon">📝</div><div class="doc-name">Annual Meeting Minutes 2024.docx</div><div class="doc-meta">856 KB · Dec 20, 2024<br><span class="badge-pill badge-warning" style="margin-top:0.25rem">Board Only</span></div></div>
  <div class="doc-card"><div class="doc-icon">🖼️</div><div class="doc-name">Community Map.png</div><div class="doc-meta">3.2 MB · Mar 1, 2024<br><span class="badge-pill badge-success" style="margin-top:0.25rem">All Members</span></div></div>
</div>
<div class="table-footer" style="margin-top:1rem">
  <span>Showing 8 of 24 items</span>
  <span>Storage: 156 MB used</span>
</div>
`,

calendar: `
<h1 class="page-title">Calendar</h1>
<div class="action-bar">
  <div class="action-bar-left">
    <div class="d-flex gap-1">
      <button class="btn btn-primary btn-sm">Month</button>
      <button class="btn btn-secondary btn-sm">Week</button>
      <button class="btn btn-secondary btn-sm">Day</button>
    </div>
  </div>
  <div class="d-flex align-items-center gap-3">
    <button class="btn btn-secondary btn-sm">&lt;</button>
    <h2 style="font-size:1.25rem;font-weight:600;margin:0">March 2026</h2>
    <button class="btn btn-secondary btn-sm">&gt;</button>
  </div>
  <div class="action-bar-right">
    <button class="btn btn-secondary">Category ▾</button>
    <button class="btn btn-primary">Add Event</button>
  </div>
</div>
<div class="calendar-grid">
  <div class="calendar-header-cell">Sun</div><div class="calendar-header-cell">Mon</div><div class="calendar-header-cell">Tue</div><div class="calendar-header-cell">Wed</div><div class="calendar-header-cell">Thu</div><div class="calendar-header-cell">Fri</div><div class="calendar-header-cell">Sat</div>
  <div class="calendar-cell"><div class="day-number">1</div></div>
  <div class="calendar-cell"><div class="day-number">2</div></div>
  <div class="calendar-cell"><div class="day-number">3</div></div>
  <div class="calendar-cell"><div class="day-number">4</div></div>
  <div class="calendar-cell"><div class="day-number">5</div><span class="event-pill event-meeting">Board Meeting 7pm</span></div>
  <div class="calendar-cell"><div class="day-number">6</div></div>
  <div class="calendar-cell"><div class="day-number">7</div></div>
  <div class="calendar-cell"><div class="day-number">8</div></div>
  <div class="calendar-cell"><div class="day-number">9</div></div>
  <div class="calendar-cell"><div class="day-number">10</div><span class="event-pill event-maintenance">Pool Maintenance</span></div>
  <div class="calendar-cell"><div class="day-number">11</div></div>
  <div class="calendar-cell"><div class="day-number">12</div><span class="event-pill event-financial">Assessment Due</span></div>
  <div class="calendar-cell"><div class="day-number">13</div></div>
  <div class="calendar-cell"><div class="day-number">14</div></div>
  <div class="calendar-cell"><div class="day-number">15</div><span class="event-pill event-social">Community BBQ</span></div>
  <div class="calendar-cell"><div class="day-number">16</div></div>
  <div class="calendar-cell"><div class="day-number">17</div></div>
  <div class="calendar-cell"><div class="day-number">18</div></div>
  <div class="calendar-cell"><div class="day-number">19</div></div>
  <div class="calendar-cell today"><div class="day-number">20</div><span class="event-pill event-meeting">ARC Review 6:30</span></div>
  <div class="calendar-cell"><div class="day-number">21</div></div>
  <div class="calendar-cell"><div class="day-number">22</div></div>
  <div class="calendar-cell"><div class="day-number">23</div></div>
  <div class="calendar-cell"><div class="day-number">24</div></div>
  <div class="calendar-cell"><div class="day-number">25</div></div>
  <div class="calendar-cell"><div class="day-number">26</div></div>
  <div class="calendar-cell"><div class="day-number">27</div></div>
  <div class="calendar-cell"><div class="day-number">28</div><span class="event-pill event-social">Spring Cleanup 9am</span></div>
  <div class="calendar-cell"><div class="day-number">29</div></div>
  <div class="calendar-cell"><div class="day-number">30</div></div>
  <div class="calendar-cell"><div class="day-number">31</div></div>
</div>
<div style="margin-top:1rem;display:flex;gap:1.5rem;font-size:0.8rem">
  <span><span class="event-pill event-meeting" style="display:inline">●</span> Meeting</span>
  <span><span class="event-pill event-maintenance" style="display:inline">●</span> Maintenance</span>
  <span><span class="event-pill event-financial" style="display:inline">●</span> Financial</span>
  <span><span class="event-pill event-social" style="display:inline">●</span> Social</span>
</div>
`,

newsfeed: `
<h1 class="page-title">Community News</h1>
<div class="action-bar">
  <div class="action-bar-left">
    <input type="text" class="form-control" placeholder="Search posts..." style="width:250px">
    <button class="btn btn-primary">Search</button>
  </div>
  <div class="action-bar-right">
    <button class="btn btn-secondary">All Topics ▾</button>
    <button class="btn btn-primary">New Post</button>
  </div>
</div>
<div class="feed-card">
  <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem"><span class="badge-pill badge-primary">📌 Pinned</span></div>
  <div class="feed-title">Spring Landscaping Update</div>
  <div class="feed-meta">
    <div class="avatar-circle" style="width:32px;height:32px;font-size:0.65rem;background:#28a745">SC</div>
    <span class="fw-600">Sarah Chen, Board President</span>
    <span class="text-muted">· Mar 18, 2026</span>
    <span class="badge-pill badge-warning" style="margin-left:auto">Maintenance</span>
  </div>
  <div class="feed-body">The new landscaping contractor has begun work on the common areas. Phase 1 includes the main entrance, pool area, and walking paths. Expected completion by April 15th. Please avoid parking near the main entrance during work hours...</div>
  <div class="feed-engagement"><span>❤️ 24 likes</span><span>💬 8 comments</span></div>
</div>
<div class="feed-card">
  <div class="feed-title">March Board Meeting Summary</div>
  <div class="feed-meta">
    <div class="avatar-circle" style="width:32px;height:32px;font-size:0.65rem">HA</div>
    <span class="fw-600">HOA Admin</span>
    <span class="text-muted">· Mar 15, 2026</span>
    <span class="badge-pill badge-primary" style="margin-left:auto">Board Updates</span>
  </div>
  <div class="feed-body">Key decisions from the March board meeting: Approved new pool hours for summer season (6am-10pm), voted to repair parking garage lighting in Building B, authorized reserve study update...</div>
  <div class="feed-engagement"><span>❤️ 15 likes</span><span>💬 12 comments</span></div>
</div>
<div class="feed-card">
  <div class="feed-title">Reminder: Assessment Due March 31</div>
  <div class="feed-meta">
    <div class="avatar-circle" style="width:32px;height:32px;font-size:0.65rem">HA</div>
    <span class="fw-600">HOA Admin</span>
    <span class="text-muted">· Mar 10, 2026</span>
    <span class="badge-pill badge-danger" style="margin-left:auto">Financial</span>
  </div>
  <div class="feed-body">Monthly assessments of $450 are due by March 31st. Pay online through your member portal or mail a check to the management office. Late fees apply after the 15-day grace period...</div>
  <div class="feed-engagement"><span>❤️ 8 likes</span><span>💬 3 comments</span></div>
</div>
`,

'email-analytics': `
<h1 class="page-title">Email Analytics</h1>
<p class="page-subtitle">Last 30 Days</p>
<div class="stat-cards" style="grid-template-columns:repeat(4,1fr)">
  <div class="stat-card"><div class="stat-label">Emails Sent</div><div class="stat-value text-primary">2,847</div></div>
  <div class="stat-card"><div class="stat-label">Delivered</div><div class="stat-value text-success">2,801 <span style="font-size:0.9rem;font-weight:400">(98.4%)</span></div></div>
  <div class="stat-card"><div class="stat-label">Opened</div><div class="stat-value text-primary">1,956 <span style="font-size:0.9rem;font-weight:400">(69.8%)</span></div></div>
  <div class="stat-card"><div class="stat-label">Clicked</div><div class="stat-value text-primary">623 <span style="font-size:0.9rem;font-weight:400">(22.2%)</span></div></div>
</div>
<div class="ms-card" style="padding:0;overflow:hidden;border-radius:1rem">
<h3 style="font-weight:600;padding:1.25rem 1.25rem 0">Recent Email Activity</h3>
<table class="ms-table" style="margin-top:0.75rem">
  <thead><tr><th>Subject</th><th>Recipients</th><th>Sent</th><th class="text-right">Delivered</th><th class="text-right">Opened</th><th class="text-right">Clicked</th><th>Status</th></tr></thead>
  <tbody>
    <tr><td class="fw-600">March Assessment Reminder</td><td>156</td><td class="text-muted">Mar 10</td><td class="text-right">98%</td><td class="text-right">72%</td><td class="text-right">35%</td><td><span class="badge-pill badge-success">Completed</span></td></tr>
    <tr><td class="fw-600">Board Meeting Notice</td><td>142</td><td class="text-muted">Mar 8</td><td class="text-right">97%</td><td class="text-right">65%</td><td class="text-right">12%</td><td><span class="badge-pill badge-success">Completed</span></td></tr>
    <tr><td class="fw-600">Maintenance Update</td><td>156</td><td class="text-muted">Mar 5</td><td class="text-right">99%</td><td class="text-right">58%</td><td class="text-right">8%</td><td><span class="badge-pill badge-success">Completed</span></td></tr>
    <tr><td class="fw-600">Payment Overdue Notice</td><td>23</td><td class="text-muted">Mar 3</td><td class="text-right">96%</td><td class="text-right">82%</td><td class="text-right">45%</td><td><span class="badge-pill badge-warning">In Progress</span></td></tr>
  </tbody>
</table>
</div>
`,

'email-templates': `
<h1 class="page-title">Email Templates</h1>
<p class="page-subtitle">Manage email templates for your organization</p>
<div class="action-bar">
  <div class="action-bar-left">
    <input type="text" class="form-control" placeholder="Search templates..." style="width:250px">
    <button class="btn btn-primary">Search</button>
  </div>
  <div class="action-bar-right">
    <button class="btn btn-secondary">Category ▾</button>
    <button class="btn btn-primary">Create Template</button>
  </div>
</div>
<div class="doc-grid">
  <div class="doc-card"><div class="doc-icon">📧</div><div class="doc-name">Monthly Assessment Reminder</div><div class="doc-meta">Billing · Last edited Mar 1<br><span class="badge-pill badge-success" style="margin-top:0.25rem">Active</span></div></div>
  <div class="doc-card"><div class="doc-icon">📧</div><div class="doc-name">Board Meeting Notice</div><div class="doc-meta">Meetings · Last edited Feb 20<br><span class="badge-pill badge-success" style="margin-top:0.25rem">Active</span></div></div>
  <div class="doc-card"><div class="doc-icon">📧</div><div class="doc-name">Payment Overdue</div><div class="doc-meta">Billing · Last edited Feb 15<br><span class="badge-pill badge-success" style="margin-top:0.25rem">Active</span></div></div>
  <div class="doc-card"><div class="doc-icon">📧</div><div class="doc-name">New Member Welcome</div><div class="doc-meta">Onboarding · Last edited Jan 10<br><span class="badge-pill badge-success" style="margin-top:0.25rem">Active</span></div></div>
  <div class="doc-card"><div class="doc-icon">📧</div><div class="doc-name">Maintenance Notification</div><div class="doc-meta">Operations · Last edited Jan 5<br><span class="badge-pill badge-success" style="margin-top:0.25rem">Active</span></div></div>
  <div class="doc-card"><div class="doc-icon">📧</div><div class="doc-name">Late Fee Applied</div><div class="doc-meta">Billing · Last edited Dec 20<br><span class="badge-pill badge-neutral" style="margin-top:0.25rem">Draft</span></div></div>
</div>
`,

billing: `
<h1 class="page-title">Billing Overview</h1>
<p class="page-subtitle">Platform billing across all organizations</p>
<div class="stat-cards" style="grid-template-columns:repeat(3,1fr)">
  <div class="stat-card"><div class="stat-label">Active Subscriptions</div><div class="stat-value text-success">847</div></div>
  <div class="stat-card"><div class="stat-label">Monthly Revenue</div><div class="stat-value text-primary">$42,350</div></div>
  <div class="stat-card"><div class="stat-label">Past Due</div><div class="stat-value text-danger">12</div></div>
</div>
<div class="action-bar">
  <div class="action-bar-left">
    <input type="text" class="form-control" placeholder="Search organizations..." style="width:250px">
    <button class="btn btn-primary">Search</button>
  </div>
  <div class="action-bar-right">
    <button class="btn btn-secondary">Filter</button>
    <button class="btn btn-secondary">Sort</button>
    <button class="btn btn-primary">Export</button>
  </div>
</div>
<div class="ms-card" style="padding:0;overflow:hidden;border-radius:1rem">
<table class="ms-table">
  <thead><tr><th>Organization</th><th>Plan</th><th>Members</th><th class="text-right">Monthly</th><th>Payment</th><th>Status</th><th>Next Billing</th></tr></thead>
  <tbody>
    <tr><td class="fw-600">Sunrise Condos</td><td><span class="badge-pill badge-primary">Professional</span></td><td>156</td><td class="text-right font-mono">$299</td><td class="text-muted">Visa ****4242</td><td><span class="badge-pill badge-success">Current</span></td><td class="text-muted">Apr 1</td></tr>
    <tr><td class="fw-600">Oak Park HOA</td><td><span class="badge-pill badge-neutral">Free</span></td><td>28</td><td class="text-right font-mono">$0</td><td class="text-muted">N/A</td><td><span class="badge-pill badge-success">Active</span></td><td class="text-muted">—</td></tr>
    <tr><td class="fw-600">Lakeside Estates</td><td><span class="badge-pill badge-info">Enterprise</span></td><td>430</td><td class="text-right font-mono">$599</td><td class="text-muted">MC ****8888</td><td><span class="badge-pill badge-danger">Past Due</span></td><td class="text-muted">Overdue</td></tr>
    <tr><td class="fw-600">Riverside Villas</td><td><span class="badge-pill badge-primary">Professional</span></td><td>92</td><td class="text-right font-mono">$199</td><td class="text-muted">Visa ****1234</td><td><span class="badge-pill badge-success">Current</span></td><td class="text-muted">Apr 5</td></tr>
    <tr><td class="fw-600">Pine Ridge Community</td><td><span class="badge-pill badge-primary">Professional</span></td><td>210</td><td class="text-right font-mono">$349</td><td class="text-muted">Amex ****5678</td><td><span class="badge-pill badge-success">Current</span></td><td class="text-muted">Apr 1</td></tr>
  </tbody>
</table>
</div>
<div class="table-footer"><span>Showing: 5 of 847</span></div>
`,

'balances-member': `
<h1 class="page-title">My Balance</h1>
<p class="page-subtitle">Sunrise Condos</p>
<div class="ms-card balance-hero">
  <div class="balance-label">Amount Due</div>
  <div class="balance-amount" style="color:#dc3545">$450.00</div>
  <div class="balance-due">Due: March 31, 2026</div>
  <div class="d-flex justify-content-center gap-2">
    <button class="btn-pay">Pay Now</button>
    <button class="btn btn-secondary" style="padding:0.75rem 1.5rem;font-size:1rem">Set Up AutoPay</button>
  </div>
</div>
<div class="ms-card" style="padding:0;overflow:hidden;border-radius:1rem">
  <h3 style="font-weight:600;padding:1.25rem 1.25rem 0">Balance History</h3>
  <table class="ms-table" style="margin-top:0.75rem">
    <thead><tr><th>Date</th><th>Description</th><th class="text-right">Amount</th><th class="text-right">Balance</th></tr></thead>
    <tbody>
      <tr><td>Mar 1, 2026</td><td>Monthly Assessment — March</td><td class="text-right font-mono text-danger">$450.00</td><td class="text-right font-mono">$450.00</td></tr>
      <tr><td>Feb 28, 2026</td><td>Payment — Credit Card (Visa 4242)</td><td class="text-right font-mono text-success">($450.00)</td><td class="text-right font-mono">$0.00</td></tr>
      <tr><td>Feb 1, 2026</td><td>Monthly Assessment — February</td><td class="text-right font-mono text-danger">$450.00</td><td class="text-right font-mono">$450.00</td></tr>
      <tr><td>Jan 31, 2026</td><td>Payment — ACH (Checking 9876)</td><td class="text-right font-mono text-success">($450.00)</td><td class="text-right font-mono">$0.00</td></tr>
      <tr><td>Jan 1, 2026</td><td>Monthly Assessment — January</td><td class="text-right font-mono text-danger">$450.00</td><td class="text-right font-mono">$450.00</td></tr>
    </tbody>
  </table>
</div>
<div class="ms-card" style="margin-top:1rem">
  <h3 style="font-weight:600;margin-bottom:1rem">Payment Methods</h3>
  <div class="d-flex flex-column gap-2">
    <div class="d-flex align-items-center gap-2 p-2" style="border:1px solid var(--ms-border);border-radius:0.475rem">
      <span>💳</span><span class="fw-600">Visa ending in 4242</span><span class="badge-pill badge-success">Default</span>
    </div>
    <div class="d-flex align-items-center gap-2 p-2" style="border:1px solid var(--ms-border);border-radius:0.475rem">
      <span>🏦</span><span class="fw-600">Checking ending in 9876</span>
    </div>
    <a href="#" style="color:var(--ms-primary);text-decoration:none;font-weight:500;font-size:0.9rem">+ Add Payment Method</a>
  </div>
</div>
`
};
