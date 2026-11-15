// Presenter-only demo links. Not part of the published deck.
window.DEMO_LINKS = {
  presentation: { label: "Deck on GitHub Pages", url: "https://koritadenada.github.io/data-platform-review/genie/" },
  workspace: { label: "Demo workspace", url: "https://fe-sandbox-korita-demo.cloud.databricks.com" },
  agents: [
    { name: "Genie One", url: "https://fe-sandbox-korita-demo.cloud.databricks.com/one?o=7474650857654748", note: "orchestrates the 3 agents", icon: "i-one" },
    { name: "UA Performance", url: "https://fe-sandbox-korita-demo.cloud.databricks.com/genie/rooms/01f1e0f847781c649c05ea5bbe7f29ed" },
    { name: "Subscription Revenue", url: "https://fe-sandbox-korita-demo.cloud.databricks.com/genie/rooms/01f1e0f848f91c05a612354bbee98c80" },
    { name: "UA Playbook", url: "https://fe-sandbox-korita-demo.cloud.databricks.com/genie/rooms/01f1e0f8c0691eeca3fb9b91875a7db9", badge: "use Agent mode" }
  ],
  metricViews: [
    { name: "mv_ua_performance", url: "https://fe-sandbox-korita-demo.cloud.databricks.com/explore/data/korita_demo/kma_ua/mv_ua_performance" },
    { name: "mv_marketing_efficiency", url: "https://fe-sandbox-korita-demo.cloud.databricks.com/explore/data/korita_demo/kma_ua/mv_marketing_efficiency" },
    { name: "mv_subscription_revenue", url: "https://fe-sandbox-korita-demo.cloud.databricks.com/explore/data/korita_demo/kma_subscriptions/mv_subscription_revenue" }
  ],
  deprecated: [
    { name: "legacy_ua_report_v1", url: "https://fe-sandbox-korita-demo.cloud.databricks.com/explore/data/korita_demo/kma_ua/legacy_ua_report_v1" }
  ],
  domains: {
    text: 'In Discover, search "App Portfolio Marketing"',
    subdomains: ["User Acquisition", "Subscriptions"],
    pages: ["ROAS D7", "ROAS D30", "pLTV", "CPI", "CAC", "Mature cohort", "Geo tier", "Net revenue", "Rebill rate", "Blended ROAS"],
    warning: "Shared account: do not open the full Domains list"
  },
  volume: { path: "korita_demo > kma_ua > ua_playbook", note: "4 documents", url: "https://fe-sandbox-korita-demo.cloud.databricks.com/explore/data/volumes/korita_demo/kma_ua/ua_playbook" }
};
