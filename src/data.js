// Finance & Accounting EBR content. Source: May/June 2026 baseline (previous EBR sites cwipebr and ebrfa).
// H1 FY27 results still to be refreshed.
const CONFIG = {
  key: 'finance',
  domain: 'Finance & Accounting',
  title: 'Finance & Accounting Executive Business Review',
  period: 'H1 FY27',
  accent: '#4f46e5',
  source: 'Source: May/June 2026 baseline · H1 FY27 results to be refreshed',
  tabs: [
    {
      id: 'highlights',
      label: 'Highlights',
      title: 'Highlights',
      sub: 'May/June 2026 baseline · to be refreshed with H1 FY27 results',
      blocks: [
        {
          type: 'kpis',
          items: [
            { value: 'Complete', label: 'FY26 year-end closure', note: 'As reported' },
            { value: '6+', label: 'Automation initiatives', note: 'Delivery status to confirm' },
            { value: 'Live', label: 'Cash flow analytics support', note: 'As reported' },
            { value: 'Concluded', label: 'FAM system changes', note: 'System stabilisation' },
          ],
        },
        {
          type: 'steps', span: 8, title: 'Finance transformation streams',
          items: [
            { title: 'Reporting', points: ['SLA reporting', 'All Payments report', 'Open GL extraction and ageing'] },
            { title: 'Reconciliation', points: ['Debit order matching', 'PayPro consolidation', 'Refund matching'] },
            { title: 'Assurance', points: ['System risk closure', 'OPEX audits', 'Control exceptions'] },
          ],
        },
        {
          type: 'asks', span: 4, title: 'Decisions requested from Telkom', note: 'Owners and dates to agree',
          items: ['Confirm close duration and open exceptions.', 'Agree the benefit baseline for each automation.', 'Confirm cash flow forecast accuracy measure.'],
        },
        {
          type: 'steps', span: 12, title: 'How benefits will be measured',
          items: [
            { title: 'Time', text: 'Reporting turnaround.' },
            { title: 'Effort', text: 'Manual hours avoided.' },
            { title: 'Control', text: 'Errors and resolution time.' },
            { title: 'Value', text: 'Benefits validated with Finance.' },
          ],
        },
      ],
    },
    {
      id: 'rpa',
      label: 'Transformation and RPA',
      title: 'Transformation and RPA',
      sub: 'F&A automation portfolio',
      blocks: [
        {
          type: 'kpis',
          items: [
            { value: '~416 h', label: 'SLA reporting hours saved per year', note: 'Estimate' },
            { value: '4 h → 30 min', label: 'Payment run cycle', note: 'All Payments bot target' },
            { value: '−60%', label: 'Debit order open items', note: 'Estimated reduction', trend: 'down' },
            { value: '< 2 months', label: 'Open item ageing target' },
          ],
        },
        {
          type: 'list', span: 12, rows: 2, title: 'Automation portfolio',
          items: [
            { title: 'SLA reporting bot', text: 'Generates and distributes daily and weekly SLA reports across F&A towers. Removes about 8 hours of manual work per week.', metric: '~416 h/yr', status: 'inflight' },
            { title: 'All Payments bot', text: 'Payment run validation, EFT release and remittances, with fraud pre-screening on every run.', metric: '~200 h/yr', status: 'inflight' },
            { title: 'Debit order matching bot', text: 'Three-way match of mandates, bank statements and GL postings. Only exceptions need review.', metric: '−60% backlog', status: 'inflight' },
            { title: 'VAT correction automation', text: 'Rules-based check of VAT coding on AP invoices before GL posting.', metric: 'No VAT reclassifications', status: 'delivered' },
            { title: 'Open item reduction bot', text: 'Matches unreconciled GL items across bank statements, journals and sub-ledgers. Weekly runs with audit trail.', metric: '< 2 months ageing', status: 'pipeline' },
          ],
        },
      ],
    },
    {
      id: 'way-forward',
      label: 'Way forward',
      title: 'FY27 roadmap',
      sub: 'By quarter',
      blocks: [
        {
          type: 'steps', span: 12, rows: 2, title: 'FY27 roadmap',
          items: [
            { period: 'Q1 · Jul–Sep 2026', title: 'Reporting', points: ['SLA report automation', 'Open GL ageing reports', 'Open item campaign launch'] },
            { period: 'Q2 · Oct–Dec 2026', title: 'Payments and matching', points: ['All Payments bot', 'Debit order matching', 'Cash flow and KPI dashboards'] },
            { period: 'Q3 · Jan–Mar 2027', title: 'Predictive', points: ['13-week cash flow forecast', 'Reconciliation agent', 'Audit evidence pack'] },
            { period: 'Q4 · Apr–Jun 2027', title: 'Agent-assisted operations', points: ['Agents for cash flow, payments and audit', 'Automated management reporting', 'AI-assisted FY27 year-end close'] },
          ],
        },
        {
          type: 'asks', span: 12, title: 'Next steps',
          items: ['Refresh H1 FY27 results for each automation.', 'Confirm Q2 delivery dates for All Payments and debit order matching.', 'Agree the pilot for cash flow forecasting.'],
        },
      ],
    },
  ],
}
export default CONFIG
