# 01_sonnet_solo

- **Executor**: `claude-sonnet-4-6`
- **Duration**: 62.07s
- **Executor tokens**: 2,886 in / 4,095 out → $0.0701
- **Total cost**: **$0.0701**

## Output

# Taxonomy Cleanup Plan — Nova ATS Company-Industries

---

## Phase 0: Orientation & Strategy Notes

Before committing to operations, I identified the following problem clusters:

| Problem | Affected IDs |
|---|---|
| Exact/near-duplicate roots | t001/t002/t003, t017/t018, t025/t026, t034/t035, t045/t046 |
| Spanish entries (mixed language) | t013, t016, t063, t066 |
| Inconsistent parent assignments | t007/t006, t008/t009/t010, t013/t014, t020/t021, t023/t024, t025, t033/t047/t048, t057 |
| Too-generic catch-alls | t051, t052, t053 |
| Trailing whitespace | t050 |
| Duplicate parents (Manufacturing) | t040, t050 |
| Overly-broad single entries needing split | t030, t032 |
| Granularity mismatches (acronym vs. spelled-out) | t006/t007, t037/t038/t039, t036 |
| Orphan (parent points to wrong node) | t025 (parent t050 = duplicate Manufacturing) |

---

## Operation List

### 🔧 RENAME — Typos, Casing, Whitespace, Formatting

| # | Operation | Justification |
|---|---|---|
| R-01 | `RENAME(t050, "Manufacturing")` | Trailing whitespace; normalise to match t040. |
| R-02 | `RENAME(t034, "Telecommunications")` | Typo: "Telecomunications" missing 'm'. |
| R-03 | `RENAME(t009, "FinTech")` | Inconsistent casing; canonical form is "FinTech". |

---

### 🔀 MERGE — Duplicates & Near-Duplicates

| # | Operation | Justification |
|---|---|---|
| M-01 | `MERGE(t002, t001)` | Exact duplicate of "Technology", different case only. |
| M-02 | `MERGE(t003, t001)` | "Tech" is an informal alias for "Technology". |
| M-03 | `MERGE(t050, t040)` | After R-01, t050 is an exact duplicate of t040. |
| M-04 | `MERGE(t007, t006)` | "Software as a Service" and "SaaS" are the same concept. |
| M-05 | `MERGE(t008, t009)` | After R-03, both are "FinTech"; t008 is orphan root. |
| M-06 | `MERGE(t010, t009)` | "Financial Technology" = FinTech; keep t009 under t001. |
| M-07 | `MERGE(t013, t014)` | "Banca" (Spanish) duplicates "Banking". |
| M-08 | `MERGE(t016, t015)` | "Seguros" (Spanish) duplicates "Insurance". |
| M-09 | `MERGE(t018, t017)` | "Health Care" (two words) duplicates "Healthcare". |
| M-10 | `MERGE(t021, t020)` | "Biotechnology" and "Biotech" are the same concept. |
| M-11 | `MERGE(t023, t024)` | "Pharma" and "Pharmaceuticals" are the same concept. |
| M-12 | `MERGE(t026, t025)` | After reparenting t025, "Ecommerce" duplicates "E-commerce". |
| M-13 | `MERGE(t046, t045)` | "Renewable Energy" duplicates "Renewables". |
| M-14 | `MERGE(t034, t035)` | After R-02, t034 is exact duplicate of t035. |
| M-15 | `MERGE(t036, t035)` | "Telco" is informal alias for "Telecommunications". |
| M-16 | `MERGE(t039, t037)` | "CPG" (Consumer Packaged Goods) is synonym of "FMCG". |
| M-17 | `MERGE(t038, t037)` | "Consumer Goods" is the same sector as "FMCG". |
| M-18 | `MERGE(t066, t067)` | "Videojuegos" (Spanish) duplicates "Gaming". |
| M-19 | `MERGE(t068, t067)` | "Video Games" duplicates "Gaming". |
| M-20 | `MERGE(t057, t055)` | "Tech Consulting" is effectively IT Consulting; redundant child. |
| M-21 | `MERGE(t031, t030)` | After SPLIT of t030, "Advertising" will be absorbed. |
| M-22 | `MERGE(t032, t030)` | After SPLIT of t030, "Ads/Marketing" is redundant. |
| M-23 | `MERGE(t052, t051)` | "Misc" is a near-duplicate of "Other". |

> **Note on M-21/M-22:** Apply only after the SPLIT of t030 (see SP-01 below); the two resulting children supersede t031 and t032.

---

### ✂️ SPLIT — Overly Broad Entries

| # | Operation | Justification |
|---|---|---|
| SP-01 | `SPLIT(t030, ["Marketing", "Advertising"])` | Entry bundles two distinct, independently-used industries. |

---

### 🌳 REPARENT — Misclassifications & Orphans

| # | Operation | Justification |
|---|---|---|
| RP-01 | `REPARENT(t005, t004)` | "Software Development" is a sub-type of "Software". |
| RP-02 | `REPARENT(t006, t004)` | After M-04, SaaS should sit under "Software", not "Software Development". |
| RP-03 | `REPARENT(t009, t001)` | FinTech belongs under "Technology" as cross-sector tech vertical. |
| RP-04 | `REPARENT(t010, t009)` | After merging into t009, its parent becomes FinTech. *(handled by M-06)* |
| RP-05 | `REPARENT(t014, t011)` | "Banking" is a sub-sector of "Finance", not "Financial Services". |
| RP-06 | `REPARENT(t015, t011)` | "Insurance" is a sub-sector of "Finance". |
| RP-07 | `REPARENT(t012, t011)` | "Financial Services" should be a child of "Finance", not a peer. |
| RP-08 | `REPARENT(t020, t022)` | "Biotech" belongs under "Life Sciences", not "Healthcare". |
| RP-09 | `REPARENT(t024, t022)` | After M-11, "Pharmaceuticals" belongs under "Life Sciences". |
| RP-10 | `REPARENT(t019, t017)` | "HealthTech" stays under "Healthcare" — confirm it's not under t001. |
| RP-11 | `REPARENT(t025, t027)` | "E-commerce" is a sub-type of "Retail", not Manufacturing (t050 was wrong parent). |
| RP-12 | `REPARENT(t028, t025)` | "Marketplace" should be under "E-commerce", not old Ecommerce root. |
| RP-13 | `REPARENT(t033, t030)` | "AdTech" is a sub-type of Marketing/Advertising, not generic Technology. |
| RP-14 | `REPARENT(t047, t043)` | "CleanTech" belongs under "Energy", not generic "Technology". |
| RP-15 | `REPARENT(t048, t049)` | "EdTech" belongs under "Education", not generic "Technology". |
| RP-16 | `REPARENT(t041, t040)` | "Industrial" is a sub-type of "Manufacturing". |
| RP-17 | `REPARENT(t042, t040)` | "Automotive" under "Manufacturing" is correct; verify after M-03. |
| RP-18 | `REPARENT(t063, t064)` | "Aeronautica" (Spanish) should be child of "Aerospace" before merging. |
| RP-19 | `REPARENT(t060, t061)` | "Transportation" is a sub-sector of "Logistics". |
| RP-20 | `REPARENT(t072, t070)` | "Tourism" is more naturally under "Travel" than "Hospitality". |
| RP-21 | `REPARENT(t055, t001)` | "IT Consulting" is tech-adjacent; reparent under Technology. |
| RP-22 | `REPARENT(t059, t001)` | "PropTech" is a tech vertical; reparent under Technology. |

---

### 🗑️ DELETE — Too-Generic / Irrecoverable Catch-Alls

| # | Operation | Justification |
|---|---|---|
| D-01 | `DELETE(t051)` | After M-23, "Other" is a meaningless catch-all with no taxonomy value. |
| D-02 | `DELETE(t053)` | "General" is a content-free catch-all; offers no classification signal. |
| D-03 | `DELETE(t029)` | After SP-01, standalone "Marketing" is superseded by split children. |

> **Note on D-01:** If business rules require an escape-hatch value, retain t051 as "Other" — flag for human review (see HR list).

---

### Additional MERGE — Spanish Orphan

| # | Operation | Justification |
|---|---|---|
| M-24 | `MERGE(t063, t064)` | After RP-18, "Aeronautica" (Spanish) duplicates "Aerospace". |

---

## Resulting Clean Taxonomy (Sketch)

```
Technology (t001)
├── Software (t004)
│   ├── Software Development (t005)
│   └── SaaS (t006)
├── FinTech (t009)
├── AdTech (t033)
├── IT Consulting (t055)
└── PropTech (t059)

Finance (t011)
├── Financial Services (t012)
├── Banking (t014)
└── Insurance (t015)

Healthcare (t017)
└── HealthTech (t019)

Life Sciences (t022)
├── Biotech (t020)
└── Pharmaceuticals (t024)

Retail (t027)
└── E-commerce (t025)
   └── Marketplace (t028)

Marketing & Advertising (t030)  [post-split children: Marketing, Advertising]
└── AdTech (t033)

Telecommunications (t035)

Energy (t043)
├── Oil & Gas (t044)
├── Renewables (t045)
└── CleanTech (t047)

Manufacturing (t040)
├── Industrial (t041)
└── Automotive (t042)

Consumer Goods / FMCG (t037)

Consulting (t054)
├── IT Consulting (t055)
└── Management Consulting (t056)

Education (t049)
└── EdTech (t048)

Aerospace (t064)
└── Defense (t065)

Logistics (t061)
├── Supply Chain (t062)
└── Transportation (t060)

Hospitality (t069)
Travel (t070)
├── TravelTech (t071)
└── Tourism (t072)

Real Estate (t058)
Gaming (t067)
```

---

## 1. Prioritized Execution Order

Operations must be applied in a specific sequence to avoid broken foreign keys and circular references.

### Phase 1 — RENAME (data normalisation, no structural changes)
**Run first.** Safe, non-destructive. Ensures canonical names before any merges compare strings.
- R-01, R-02, R-03

### Phase 2 — REPARENT (fix structure before merging)
**Run second.** Establishes correct parent-child relationships so that merge targets are in their final correct positions.
- RP-01 through RP-22 (in any order within this phase)
- Specifically: RP-11 must precede M-12 (t025 needs correct parent before t026 is merged into it)
- RP-18 must precede M-24

### Phase 3 — SPLIT (create new nodes before merging into them)
**Run third.** SPLIT of t030 must happen before M-21 and M-22, so the new child nodes exist as merge targets.
- SP-01

### Phase 4 — MERGE (collapse duplicates)
**Run fourth.** All structural corrections are in place; safe to collapse duplicates now.
- Run in dependency order: M-03 depends on R-01 ✓ · M-05/M-06 depend on R-03 ✓ · M-14 depends on R-02 ✓
- M-01, M-02, M-03, M-04, M-05, M-06, M-07, M-08, M-09, M-10, M-11, M-12, M-13, M-14, M-15, M-16, M-17, M-18, M-19, M-20, M-21, M-22, M-23, M-24

### Phase 5 — DELETE (remove residual orphans and catch-alls)
**Run last.** Only delete after all merges are settled; ensures no child records are accidentally orphaned.
- D-01, D-02, D-03

---

## 2. Operations Requiring Human Review

| # | Operation(s) | Reason |
|---|---|---|
| HR-01 | `MERGE(t003, t001)` — M-02 | "Tech" might be used as a distinct tag from "Technology" by some recruiters; check usage counts before merging. |
| HR-02 | `REPARENT(t009, t001)` — RP-03 | FinTech sits at the Technology/Finance intersection; some orgs prefer it under Finance. Confirm business preference. |
| HR-03 | `MERGE(t038, t037)` / `MERGE(t039, t037)` — M-16, M-17 | FMCG, CPG, and Consumer Goods have subtle B2B/B2C nuances; confirm all three are truly equivalent in your context. |
| HR-04 | `REPARENT(t019, t017)` — RP-10 | HealthTech could alternatively live under Technology (t001); depends on whether taxonomy is sector-first or tech-first. |
| HR-05 | `REPARENT(t060, t061)` — RP-19 | Transportation is sometimes a peer of Logistics, not a child; verify domain model preference. |
| HR-06 | `REPARENT(t059, t001)` — RP-22 | PropTech could remain under Real Estate (t058) if the taxonomy is sector-first; tech-vertical placement is debatable. |
| HR-07 | `DELETE(t051)` — D-01 | "Other" may be required as a system escape-hatch for client/position tagging; check if any records currently use it. |
| HR-08 | `SPLIT(t030, ["Marketing", "Advertising"])` — SP-01 | Confirm split names don't collide with existing client/position tag values; migration script needed for existing records tagged t030. |
| HR-09 | `REPARENT(t041, t040)` — RP-16 | "Industrial" could be a peer top-level sector rather than a child of Manufacturing; business input needed. |
| HR-10 | `MERGE(t036, t035)` — M-15 | "Telco" may be used as a distinct sub-segment tag (e.g., mobile operators) rather than a pure alias; check usage. |