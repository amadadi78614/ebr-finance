// Finance & Accounting EBR. Source: F&A baseline (May/June 2026) from the previous F&A AI Command Centre (ebrfa) and cwipebr.
// H1 FY27 results to be refreshed from the latest F&A MBR / FNA deck.
const CONFIG = {
  key: 'finance',
  domain: 'Finance & Accounting',
  period: 'H1 FY27',
  accent: '#009FE3',
  accent2: '#FF6F4D',
  source: 'F&A baseline May/June 2026 · H1 FY27 results to be refreshed',
  tabs: [
    {
      id: 'since', label: 'Since last EBR', title: 'Since the May/June 2026 EBR',
      blocks: [
        {
          type: 'hero', items: [
            { value: '1', label: 'Automation delivered', sub: 'VAT correction', tone: 'good' },
            { value: '3', label: 'Bots in flight', sub: 'SLA reporting · payments · debit orders' },
            { value: 'Q2', label: 'Payments and matching due', sub: 'Oct–Dec 2026' },
            { value: 'Pending', label: 'H1 FY27 results', sub: 'F&A MBR update awaited', tone: 'warn' },
          ],
        },
        {
          type: 'journey', span: 12, rows: 4, title: 'Commitments from the last EBR · click a row', thenLabel: 'Last EBR · May/June 2026', nowLabel: 'Now · H1 FY27',
          items: [
            { icon: 'Receipt', label: 'VAT correction automation', then: 'Delivered', now: 'Live', status: 'live' },
            { icon: 'FileBarChart', label: 'SLA reporting bot', then: 'Q1 commitment', now: 'In flight', tone: 'warn', status: 'confirm' },
            { icon: 'CalendarClock', label: 'Open GL ageing reports', then: 'Q1 commitment', now: 'To confirm', tone: 'muted', status: 'confirm' },
            { icon: 'Banknote', label: 'All Payments bot', then: 'Q2 commitment', now: 'In flight', tone: 'warn', status: 'progress' },
            { icon: 'GitCompareArrows', label: 'Debit order matching', then: 'Q2 commitment', now: 'In flight', tone: 'warn', status: 'progress' },
            { icon: 'Wallet', label: 'Cash flow dashboards', then: 'Q2 commitment', now: 'To confirm', tone: 'muted', status: 'confirm' },
          ],
        },
      ],
    },
    {
      id: 'highlights', label: 'Highlights', title: 'A faster, more controlled finance function',
      blocks: [
        {
          type: 'hero', items: [
            { value: 'Closed', label: 'FY26 year-end', sub: 'As reported', tone: 'good' },
            { value: '6+', label: 'Automation initiatives', sub: 'Reporting · matching · payments' },
            { value: '~616h', label: 'Hours saved per year', sub: 'SLA reporting + payments (estimate)', detail: { rows: [['SLA reporting bot', '~416 hours per year'], ['All Payments bot', '~200 hours per year']] } },
            { value: '30min', label: 'Payment run target', sub: 'From 4 hours', tone: 'good' },
          ],
        },
        {
          type: 'cards', span: 8, cols: 3, title: 'Transformation streams · click for detail',
          items: [
            { icon: 'FileBarChart', name: 'Reporting', line: 'SLA reporting · All Payments report · open GL ageing', detail: { points: ['SLA reporting automated across F&A towers', 'All Payments report', 'Open GL extraction and ageing'] } },
            { icon: 'GitCompareArrows', name: 'Reconciliation', line: 'Debit orders · PayPro · refunds', detail: { points: ['Debit order matching', 'PayPro consolidation', 'Refund matching'] } },
            { icon: 'ShieldCheck', name: 'Assurance', line: 'System risk · OPEX audits · control exceptions', detail: { points: ['System risk closure', 'OPEX audits', 'Control exceptions', 'FAM system changes concluded'] } },
          ],
        },
        {
          type: 'rings', span: 4, title: 'Portfolio status', items: [
            { pct: 20, value: '1', label: 'Delivered', color: '#0E9F6E' },
            { pct: 60, value: '3', label: 'In flight', color: 'accent' },
            { pct: 20, value: '1', label: 'Pipeline', color: 'accent2' },
          ],
        },
      ],
    },
    {
      id: 'rpa', owner: {   "name": "Mohamed Nomani",   "role": "WNS Transformation · part of Capgemini" }, label: 'Automation', title: 'Five bots across reporting, payments and matching',
      blocks: [
        {
          type: 'cards', span: 12, cols: 5, rows: 3, title: 'Automation portfolio · click for detail',
          items: [
            { icon: 'FileBarChart', name: 'SLA reporting bot', line: 'Daily and weekly SLA reports', metric: '~416 h/yr', status: 'progress', detail: { text: 'Removes about 8 hours of manual compilation per week. Consistent format, no transcription errors.' } },
            { icon: 'Banknote', name: 'All Payments bot', line: 'Validation, EFT release, remittances', metric: '4h → 30min', status: 'progress', detail: { text: 'Fraud pre-screening on every payment run.' } },
            { icon: 'GitCompareArrows', name: 'Debit order matching', line: 'Mandate · bank · GL', metric: '−60% backlog', status: 'progress', detail: { text: 'Three-way match; only exceptions need review. Estimated 60% reduction in open items.' } },
            { icon: 'Receipt', name: 'VAT correction', line: 'Checks VAT coding before posting', metric: '0 reclasses', status: 'delivered', detail: { text: 'Rules-based validation against SARS requirements on AP invoices.' } },
            { icon: 'Eraser', name: 'Open item reduction', line: 'Weekly GL matching runs', metric: '<2 months', status: 'planned', detail: { text: 'Pattern-based matching across bank statements, journals and sub-ledgers, with audit trail.' } },
          ],
        },
        {
          type: 'shift', span: 12, rows: 2, title: 'What changes',
          items: [{ label: 'Payment run cycle', from: '4 hours', to: '<30 min' }, { label: 'Weekly SLA report compilation', from: '8 hours', to: 'Automated' }],
        },
      ],
    },
    {
      "id": "ai",
      "label": "Transformation and AI",
      "owner": {
        "name": "Mohamed Nomani",
        "role": "WNS Transformation · part of Capgemini"
      },
      "title": "From payment bots to AI-assisted finance",
      "blocks": [
        {
          "type": "hero",
          "items": [
            {
              "value": "5",
              "label": "Bots in the portfolio",
              "sub": "Reporting, payments, matching, VAT",
              "tone": "good"
            },
            {
              "value": "0",
              "label": "VAT reclasses",
              "sub": "VAT correction bot delivered",
              "tone": "good"
            },
            {
              "value": "4h → 30m",
              "label": "Payment run target",
              "sub": "All Payments bot in build"
            },
            {
              "value": "Next",
              "label": "Reconciliation with AI",
              "sub": "Rules first, then AI on exceptions"
            }
          ]
        },
        {
          "type": "track",
          "span": 12,
          "rows": 2,
          "title": "Automation to AI, step by step · where AI-assisted reconciliation is today",
          "at": 1
        },
        {
          "type": "waves",
          "big": true,
          "span": 12,
          "rows": 4,
          "title": "WNS Transformation portfolio · done, under way, next 90 days",
          "items": [
            {
              "when": "Done · live at Telkom",
              "name": "Delivered",
              "tone": "done",
              "items": [
                "VAT correction bot live",
                "Cash forecasting model with Analytics"
              ]
            },
            {
              "when": "Under way",
              "name": "Being delivered now",
              "tone": "doing",
              "items": [
                "SLA reporting bot (~416 hours a year)",
                "All Payments bot: validation and EFT release",
                "Debit order matching (mandate, bank, GL)",
                "Open item reduction runs"
              ]
            },
            {
              "when": "Next 90 days",
              "name": "What we will prove next",
              "tone": "next",
              "items": [
                "Define AI on reconciliation exceptions with F&A",
                "Prove it on one bank account",
                "Measure open-item ageing"
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'next', label: 'Way forward', title: 'FY27 roadmap, quarter by quarter',
      blocks: [
        {
          type: 'waves', span: 8, rows: 2, title: 'Roadmap',
          items: [
            { when: 'Q1 · Jul–Sep', name: 'Reporting', items: ['SLA report automation', 'Open GL ageing reports', 'Open item campaign'] },
            { when: 'Q2 · Oct–Dec', name: 'Payments and matching', items: ['All Payments bot', 'Debit order matching', 'Cash flow dashboards'] },
            { when: 'Q3 · Jan–Mar', name: 'Predictive', items: ['13-week cash forecast', 'Reconciliation agent', 'Audit evidence pack'] },
            { when: 'Q4 · Apr–Jun', name: 'Agent-assisted', items: ['Cash, payments and audit agents', 'Automated reporting', 'AI-assisted year-end'] },
          ],
        },
        {
          type: 'asks', span: 4, rows: 2, title: 'Decisions requested from Telkom',
          items: ['Agree the benefit baseline per automation', 'Confirm Q2 dates: payments and debit orders', 'Sponsor the reconciliation agent pilot'],
        },
      ],
    },
  ],
}
export default CONFIG
