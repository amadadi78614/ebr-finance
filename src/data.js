// Finance & Accounting EBR. Source: Telkom placemat "F&A Executive Business Review – FY27 H2"
// (Claude Naidu, v3, 23 Nov 2026): H1 highlights, H2 key focus areas, business-led transformation
// (RPA/automation status) and strategic enablement (analytics).
const CONFIG = {
  key: 'finance',
  domain: 'Finance & Accounting',
  period: 'H1 FY27',
  accent: '#0070AD',
  accent2: '#009FE3',
  source: 'F&A EBR placemat · FY27 H1 review · H2 focus',
  tabs: [
    {
      id: 'agenda', label: 'Agenda', title: 'Finance and Accounting · Executive Business Review',
      blocks: [{
        type: 'agenda', span: 12, rows: 6, items: [
          { label: 'Since last EBR', icon: 'History', tab: 'since', line: 'Commitments from May/June 2026, and where each stands now' },
          { label: 'H1 highlights', icon: 'Star', tab: 'highlights', line: 'Interim close, Touchless AP UAT, 58% of FAM backlog closed, audit findings closed' },
          { label: 'H2 focus areas', icon: 'Target', tab: 'focus', line: 'SingleView balances, balance sheet recons, recoverable works, R1 contracts' },
          { label: 'Automation', icon: 'Bot', tab: 'rpa', line: 'Eight digital interventions: one completed, three in progress, four in pipeline', who: 'Capgemini Transformation' },
          { label: 'Transformation and AI', icon: 'Sparkles', tab: 'ai', line: 'From batch-file bots to AI-assisted reconciliation', who: 'Capgemini Transformation' },
          { label: 'Analytics', icon: 'BarChart3', tab: 'analytics', line: 'Bank balance, cash flow and SLA models live · AR recon tracker next', who: 'Capgemini Analytics' },
          { label: 'Way forward', icon: 'Route', tab: 'next', line: 'H2 roadmap and decisions requested from Telkom' },
        ],
      }],
    },
    {
      id: 'since', label: 'Since last EBR', title: 'Since the May/June 2026 EBR',
      blocks: [
        {
          type: 'hero', items: [
            { value: '6', label: 'H1 highlights delivered', sub: 'Close, AP, FAM, recoverables, portal, audit', tone: 'good' },
            { value: '58%', label: 'FAM incident backlog closed', sub: 'Lower operational risk', tone: 'good' },
            { value: 'UAT done', label: 'Touchless AP invoice processing', sub: 'Ready for greater automation' },
            { value: 'Closed', label: 'Business process audit findings', sub: 'Control environment strengthened', tone: 'good' },
          ],
        },
        {
          type: 'journey', span: 12, rows: 4, title: 'Commitments from the last EBR · click a row', thenLabel: 'Last EBR · May/June 2026', nowLabel: 'Now · H1 FY27',
          items: [
            { icon: 'Gauge', label: 'SLA reporting', then: 'Q1 commitment', now: 'F&A SLA dashboard live', status: 'live', detail: { text: 'Sectional performance tracking across F&A.' } },
            { icon: 'Wallet', label: 'Cash flow dashboards', then: 'Q2 commitment', now: 'Bank balance and cash flow models live', status: 'live', detail: { text: 'Daily bank balance model automates the cash position; the cash flow statement model builds familiarity and user understanding.' } },
            { icon: 'Banknote', label: 'All Payments', then: 'Q2 commitment', now: 'Batch files in progress', tone: 'warn', status: 'progress', detail: { text: 'All monthly payments batch files: improved accuracy and TAT saving over month-end.' } },
            { icon: 'GitCompareArrows', label: 'Debit order matching', then: 'Q2 commitment', now: 'Debit order look-up in progress', tone: 'warn', status: 'progress', detail: { text: 'Increased flow from source, about 8 hours saved.' } },
            { icon: 'CalendarClock', label: 'Open GL ageing reports', then: 'Q1 commitment', now: 'Age analysis extracts in pipeline', status: 'planned', detail: { text: 'SAP extract, format and centralise; supports client turnaround over peak periods.' } },
            { icon: 'FileCheck2', label: 'Touchless AP invoice processing', then: 'Planned', now: 'UAT completed', status: 'live' },
          ],
        },
      ],
    },
    {
      id: 'highlights', label: 'H1 highlights', title: 'H1: stronger governance, cleaner controls, more self-service',
      blocks: [
        {
          type: 'cards', span: 12, rows: 6, cols: 3, title: 'Highlights H1 · click for detail',
          items: [
            { icon: 'BookCheck', name: 'Interim closure', line: 'Governance and audit readiness', status: 'live', statusText: 'Done', detail: { text: 'Successful interim close: compliance, reporting integrity and timely resolution of audit requirements.' } },
            { icon: 'FileCheck2', name: 'Touchless AP invoice processing', line: 'UAT completed', status: 'live', statusText: 'UAT done', detail: { text: 'Positions the business for greater automation, scalability and less manual intervention.' } },
            { icon: 'Wrench', name: 'FAM incidents', line: '58% of the backlog resolved', status: 'progress', statusText: '58% closed', detail: { text: 'Lower operational risk and better control effectiveness, improving process stability and business continuity.' } },
            { icon: 'HardHat', name: 'Recoverable works', line: 'Centralised visibility', status: 'live', statusText: 'Live', detail: { text: 'Proactive management of receivables and clearer operational accountability.' } },
            { icon: 'LifeBuoy', name: 'Web portal self-help', line: 'New self-service functions in the Finance Portal', status: 'live', statusText: 'Live', detail: { text: 'Better user experience, fewer support requests and higher operational efficiency.' } },
            { icon: 'ShieldCheck', name: 'Risk management and compliance', line: 'Business process audit findings closed', status: 'live', statusText: 'Closed', detail: { text: 'Capgemini closed the business process audit findings, strengthening the control environment and compliance.' } },
          ],
        },
      ],
    },
    {
      id: 'focus', label: 'H2 focus', title: 'H2: trusted balances, automated recons, tighter spend',
      blocks: [
        {
          type: 'cards', span: 12, rows: 6, cols: 3, title: 'Key focus areas H2 · click for detail',
          items: [
            { icon: 'Scale', name: 'SingleView balance report', line: 'Stabilise, validate, adopt', status: 'progress', detail: { text: 'Support stabilisation, validation and adoption of SingleView balance reporting as a critical source of financial insight.' } },
            { icon: 'GitCompareArrows', name: 'Balance sheet reconciliations', line: 'Automate', status: 'planned', detail: { text: 'Less manual effort and better financial accuracy. Revisit once SingleView and FAM balance reports are deployed.' } },
            { icon: 'Plane', name: 'BTM rejection dashboard', line: 'Travel claims analytics', status: 'planned', detail: { text: 'Visibility of claim rejections and compliance trends to improve spend governance.' } },
            { icon: 'HardHat', name: 'Recoverable works with regional SPOCs', line: 'Cross-functional accountability', status: 'progress', detail: { text: 'Improve recoverability and minimise unidentified balances that affect financial close.' } },
            { icon: 'ClipboardCheck', name: 'Group Revenue Assurance alignment', line: 'Reports on time', status: 'progress', detail: { text: 'Timely reporting and more effective back-office resolution.' } },
            { icon: 'FileMinus', name: 'R1 contracts', line: 'Reduce non-standard contracts', status: 'planned', detail: { text: 'Better procurement governance and compliance with strategic sourcing and contracting frameworks.' } },
          ],
        },
      ],
    },
    {
      id: 'analytics', owner: { name: 'Dani Viljoen', role: 'Capgemini Analytics' }, label: 'Analytics', title: 'Analytics continues to drive actionable insights',
      blocks: [
        {
          type: 'cards', span: 4, rows: 4, cols: 1, list: true, title: 'Key accomplishments',
          items: [
            { icon: 'Landmark', name: 'Daily bank balance model', line: 'Automated cash position', status: 'live', statusText: 'Live' },
            { icon: 'Wallet', name: 'Cash flow statement model', line: 'Familiarity and user understanding', status: 'live', statusText: 'Live' },
            { icon: 'Gauge', name: 'F&A SLA dashboard', line: 'Sectional performance tracking', status: 'live', statusText: 'Live' },
          ],
        },
        {
          type: 'cards', span: 4, rows: 4, cols: 1, list: true, title: 'Projects in progress',
          items: [
            { icon: 'ListChecks', name: 'AR reconciliation dashboard', line: 'With status tracker', status: 'progress' },
            { icon: 'TrendingUp', name: 'Cash flow management', line: 'Deeper involvement, model improvements', status: 'progress' },
            { icon: 'ShoppingBag', name: 'Consumer Sales Omnichannel', line: 'Enhanced reporting and insights', status: 'progress' },
          ],
        },
        {
          type: 'rings', span: 4, rows: 4, size: 92, title: 'Data maturity · next frontier is prescriptive',
          items: [
            { pct: 100, value: '100%', label: 'Descriptive to predictive', sub: 'Hindsight, insight, foresight' },
            { pct: 20, value: '20%', label: 'Prescriptive', sub: 'What should we do?', color: 'accent2' },
            { pct: 5, value: '5%', label: 'Cognitive', sub: 'Controlled execution', color: 'accent2' },
          ],
        },
      ],
    },
    {
      id: 'rpa', owner: { name: 'Mohamed Nomani', role: 'Capgemini Transformation' }, label: 'Automation', title: 'Digital interventions through RPA and automation',
      blocks: [
        {
          type: 'hero', items: [
            { value: '8', label: 'Digital interventions', sub: 'Reporting, payments, matching, extracts' },
            { value: '1', label: 'Completed', sub: 'Combined TB reports', tone: 'good' },
            { value: '3', label: 'In progress', sub: 'Payments, PayPro, debit orders' },
            { value: '4', label: 'In pipeline', sub: 'BTM, age analysis, rebates, NEDLMP', tone: 'warn' },
          ],
        },
        {
          type: 'cards', span: 12, rows: 4, cols: 4, title: 'Business-led transformation · click for detail',
          items: [
            { icon: 'Combine', name: 'Combined TB reports', line: 'Consolidation benefit', status: 'delivered', statusText: 'Completed' },
            { icon: 'Banknote', name: 'All monthly payments', line: 'Batch files · accuracy and month-end TAT', status: 'progress' },
            { icon: 'FileStack', name: 'FAS PayPro files', line: 'Improved consolidation', metric: '~8 hours', status: 'progress' },
            { icon: 'Search', name: 'Debit order look-up', line: 'Increased flow from source', metric: '~8 hours', status: 'progress' },
            { icon: 'Plane', name: 'Daily BTM files', line: 'Automated daily processing', metric: '~4 h per month', status: 'planned', statusText: 'Pipeline' },
            { icon: 'CalendarClock', name: 'Age analysis extracts', line: 'SAP extract, format, centralise · peak-period TAT', status: 'planned', statusText: 'Pipeline' },
            { icon: 'Split', name: 'Rebate split per BU', line: 'Posted in Openserve, carried in Telkom', status: 'planned', statusText: 'Pipeline' },
            { icon: 'FileSearch', name: 'NEDLMP report extraction', line: 'Bulk view of outstanding uploads', status: 'planned', statusText: 'Pipeline' },
          ],
        },
      ],
    },
    {
      id: 'ai', label: 'Transformation and AI', owner: { name: 'Mohamed Nomani', role: 'Capgemini Transformation' }, title: 'From batch-file bots to AI-assisted reconciliation',
      blocks: [
        {
          type: 'hero', items: [
            { value: '~20h', label: 'Monthly effort targeted', sub: 'BTM ~4h · PayPro ~8h · debit orders ~8h' },
            { value: '3', label: 'Analytics models live', sub: 'Bank balance · cash flow · SLA', tone: 'good' },
            { value: 'UAT done', label: 'Touchless AP', sub: 'Foundation for automated invoice flow', tone: 'good' },
            { value: 'Next', label: 'AI-assisted reconciliation', sub: 'Rules first, then AI on exceptions' },
          ],
        },
        { type: 'track', span: 12, rows: 2, title: 'Automation to AI, step by step · where AI-assisted reconciliation is today', at: 1 },
        {
          type: 'waves', big: true, span: 12, rows: 4, title: 'Capgemini Transformation portfolio · done, under way, next',
          items: [
            { when: 'Done · live at Telkom', name: 'Delivered', tone: 'done', items: ['Combined TB reports', 'Touchless AP: UAT completed', 'Bank balance, cash flow and SLA models (with Analytics)'] },
            { when: 'Under way', name: 'Being delivered now', tone: 'doing', items: ['All monthly payments batch files', 'FAS PayPro files and debit order look-up', 'AR reconciliation dashboard with status tracker'] },
            { when: 'H2', name: 'What we will prove next', tone: 'next', items: ['Balance sheet reconciliation automation, once SingleView and FAM balances are live', 'Rebate split per BU and daily BTM files', 'AI on reconciliation exceptions, proved on one account'] },
          ],
        },
      ],
    },
    {
      id: 'next', label: 'Way forward', title: 'H2 roadmap and decisions',
      blocks: [
        {
          type: 'waves', big: true, span: 8, rows: 4, title: 'H2 roadmap',
          items: [
            { when: 'Reporting and control', name: 'Trusted balances', items: ['SingleView balance report adopted', 'Group Revenue Assurance reports on time', 'BTM travel claims rejection dashboard'] },
            { when: 'Reconciliation', name: 'Fewer open items', items: ['Balance sheet reconciliation automation', 'Recoverable works with regional SPOCs', 'AR reconciliation tracker live'] },
            { when: 'Spend and contracts', name: 'Tighter spend', items: ['Reduce R1 contracts', 'OMS contracts to cheaper data deals (~R300k per month target)', 'Automated rebate split per BU'] },
          ],
        },
        {
          type: 'asks', span: 4, rows: 4, title: 'Decisions requested from Telkom',
          items: [
            { text: 'Confirm SingleView and FAM balance report timing', sub: 'Balance sheet reconciliation automation depends on them' },
            { text: 'Name regional SPOCs for recoverable works', sub: 'To clear unidentified balances before close' },
            { text: 'Agree the benefit baseline per automation', sub: 'So hours saved are measured, not estimated' },
            { text: 'Enable Microsoft enterprise AI access for Shared Services', sub: 'For AI on reconciliation exceptions' },
          ],
        },
      ],
    },
  ],
}
const ORDER = ['agenda', 'since', 'highlights', 'focus', 'rpa', 'ai', 'analytics', 'next']
CONFIG.tabs = ORDER.map(id => CONFIG.tabs.find(t => t.id === id))
export default CONFIG
