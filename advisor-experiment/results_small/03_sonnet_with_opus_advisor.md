# 03_sonnet_with_opus_advisor

- **Executor**: `claude-sonnet-4-6`
- **Advisor**: `claude-opus-4-6`
- **Advisor calls**: 2
- **Duration**: 107.16s
- **Executor tokens**: 13,394 in / 2,886 out → $0.0835
- **Advisor tokens**: 10,247 in / 3,025 out → $0.3806
- **Total cost**: **$0.4641**

## Output

Good orientation. Now I'll produce the full structured cleanup plan.

Here is the complete, structured cleanup plan.

---

## Nova ATS — Company-Industries Taxonomy Cleanup Plan

---

### PHASE 1 — RENAME (safe, non-destructive; apply first)

| # | Operation | Justification |
|---|-----------|---------------|
| R-01 | `RENAME(t002, "Technology")` | Exact duplicate of t001 with lowercase casing. |
| R-02 | `RENAME(t034, "Telecommunications")` | Typo: "Telecomunications" is missing an 'l'. |
| R-03 | `RENAME(t050, "Manufacturing")` | Trailing whitespace on "Manufacturing "; duplicate of t040. |

---

### PHASE 2 — MERGE (collapse duplicates and near-duplicates; apply after renames)

| # | Operation | Justification |
|---|-----------|---------------|
| M-01 | `MERGE(t002, t001)` | "technology" (lowercased) is an exact duplicate of "Technology". |
| M-02 | `MERGE(t003, t001)` | "Tech" is an informal alias for "Technology". |
| M-03 | `MERGE(t050, t040)` | Trailing-whitespace "Manufacturing " is a duplicate of t040. |
| M-04 | `MERGE(t005, t004)` | "Software Development" is a near-duplicate of "Software"; consolidate. |
| M-05 | `MERGE(t007, t006)` | "Software as a Service" and "SaaS" are the same concept. |
| M-06 | `MERGE(t008, t009)` | "FinTech" (root) and "Fintech" (under t001) are the same; keep t009. |
| M-07 | `MERGE(t010, t009)` | "Financial Technology" is the long form of "FinTech". |
| M-08 | `MERGE(t011, t012)` | "Finance" and "Financial Services" are top-level near-duplicates; keep t012. |
| M-09 | `MERGE(t013, t014)` | "Banca" (Spanish) merges into "Banking" (English canonical). |
| M-10 | `MERGE(t016, t015)` | "Seguros" (Spanish) merges into "Insurance" (English canonical). |
| M-11 | `MERGE(t018, t017)` | "Health Care" (two words) is a formatting variant of "Healthcare". |
| M-12 | `MERGE(t021, t020)` | "Biotechnology" and "Biotech" are the same concept; keep t020. |
| M-13 | `MERGE(t023, t024)` | "Pharma" is an informal alias for "Pharmaceuticals"; keep t024. |
| M-14 | `MERGE(t026, t025)` | "Ecommerce" and "E-commerce" are the same; keep t025 (hyphenated standard). |
| M-15 | `MERGE(t029, t030)` | "Marketing" alone is subsumed by "Marketing & Advertising"; keep t030. |
| M-16 | `MERGE(t032, t030)` | "Ads/Marketing" is a slash-formatted duplicate of "Marketing & Advertising". |
| M-17 | `MERGE(t034, t035)` | "Telecomunications" (typo) merges into "Telecommunications" after R-02. |
| M-18 | `MERGE(t036, t035)` | "Telco" is an informal alias for "Telecommunications". |
| M-19 | `MERGE(t037, t038)` | "FMCG" is a subset/alias of "Consumer Goods"; keep t038. |
| M-20 | `MERGE(t039, t038)` | "CPG" (Consumer Packaged Goods) is an alias of "Consumer Goods". |
| M-21 | `MERGE(t046, t045)` | "Renewable Energy" (root orphan) duplicates "Renewables" under t043. |
| M-22 | `MERGE(t057, t055)` | "Tech Consulting" and "IT Consulting" are near-duplicates; keep t055. |
| M-23 | `MERGE(t063, t064)` | "Aeronautica" (Spanish) merges into "Aerospace" (English canonical). |
| M-24 | `MERGE(t066, t067)` | "Videojuegos" (Spanish) merges into "Gaming" (English canonical). |
| M-25 | `MERGE(t068, t067)` | "Video Games" and "Gaming" are the same concept; keep t067. |

---

### PHASE 3 — REPARENT (fix misclassifications and orphans; apply after merges)

| # | Operation | Justification |
|---|-----------|---------------|
| RP-01 | `REPARENT(t009, t001)` | FinTech should live under Technology (t001), not Finance. |
| RP-02 | `REPARENT(t014, t012)` | Banking should be under "Financial Services" (t012), not split. |
| RP-03 | `REPARENT(t006, t004)` | SaaS (t006) should stay under Software (t004) after t005 merge. |
| RP-04 | `REPARENT(t015, t012)` | Insurance is a financial service; reparent under t012. |
| RP-05 | `REPARENT(t020, t022)` | Biotech belongs under "Life Sciences" (t022), not Healthcare. |
| RP-06 | `REPARENT(t024, t022)` | Pharmaceuticals belongs under "Life Sciences" (t022), not Healthcare. |
| RP-07 | `REPARENT(t025, t027)` | E-commerce belongs under "Retail" (t027); t050 orphan parent is gone. |
| RP-08 | `REPARENT(t028, t025)` | "Marketplace" should nest under "E-commerce" (t025). |
| RP-09 | `REPARENT(t031, t030)` | "Advertising" should be under "Marketing & Advertising" (t030). |
| RP-10 | `REPARENT(t033, t030)` | AdTech is marketing technology, not general Technology (t001). |
| RP-11 | `REPARENT(t045, t043)` | "Renewables" confirmed under "Energy" (t043); no change needed structurally—but verify after M-21. |
| RP-12 | `REPARENT(t047, t043)` | CleanTech relates to Energy/Environment, not general Technology. |
| RP-13 | `REPARENT(t048, t049)` | EdTech should be under "Education" (t049), not Technology root. |
| RP-14 | `REPARENT(t059, t001)` | PropTech is technology; reparent under Technology alongside Real Estate context. |
| RP-15 | `REPARENT(t061, t060)` | Logistics is a sub-domain of Transportation (t060). |
| RP-16 | `REPARENT(t067, null)` | Gaming is a standalone industry; remove incorrect Technology parent. |
| RP-17 | `REPARENT(t072, t070)` | Tourism logically sits under Travel (t070), not Hospitality. |

---

### PHASE 4 — DELETE (remove unfixable catch-alls; apply last)

| # | Operation | Justification |
|---|-----------|---------------|
| D-01 | `DELETE(t051)` | "Other" is a meaningless catch-all that degrades taxonomy quality. |
| D-02 | `DELETE(t052)` | "Misc" is redundant with "Other" and equally uninformative. |
| D-03 | `DELETE(t053)` | "General" is a too-generic entry with no semantic value. |

---

### PHASE 5 — SPLIT (granularity correction)

| # | Operation | Justification |
|---|-----------|---------------|
| S-01 | `SPLIT(t030, ["Marketing", "Advertising"])` | Combined label conflates two distinct industry practices; split into peers under a parent, or keep as-is and use children. *(Human review required — see below.)* |

---

## Prioritized Execution Order

| Phase | Why First |
|-------|-----------|
| **Phase 1 — RENAME** | Pure cosmetic fixes; no structural changes, zero risk of data loss. Must run before merges so IDs are normalized. |
| **Phase 2 — MERGE** | Eliminates redundancy. Must run before REPARENT so parent IDs being merged don't leave dangling children. |
| **Phase 3 — REPARENT** | Can only run cleanly after merges; targets the now-consolidated survivors. |
| **Phase 4 — DELETE** | Run last so no active record is accidentally orphaned; validate zero tagged records first. |
| **Phase 5 — SPLIT** | Run last (or separately) since it creates new IDs that require re-tagging of existing records. |

---

## Operations Requiring Human Review

| Operation | Reason |
|-----------|--------|
| `MERGE(t013, t014)` M-09 | Spanish "Banca" entries may belong to distinct Spanish-language client records; validate record counts before merging. |
| `MERGE(t016, t015)` M-10 | Same risk: "Seguros" records may be Spanish-market clients that need regional distinction. |
| `MERGE(t063, t064)` M-23 | "Aeronautica" may tag LATAM clients separately from "Aerospace" — check usage before collapsing. |
| `MERGE(t066, t067)` M-24 | "Videojuegos" may tag a distinct Spanish-market client segment; verify before merging into "Gaming". |
| `REPARENT(t033, t030)` RP-10 | AdTech straddles Technology and Marketing; business stakeholders must confirm the canonical home. |
| `REPARENT(t059, t001)` RP-14 | PropTech under Technology vs. under Real Estate is an architectural choice requiring business input. |
| `REPARENT(t065, null)` *(not yet listed)* | "Defense" (t065) is currently under Aerospace (t064); "Aerospace & Defense" is often a unified category — confirm if split or merge is preferred. |
| `REPARENT(t041, t040)` *(flagged)* | "Industrial" is a standalone root with no children; confirm merge into Manufacturing or keep as peer. |
| `DELETE(t051)`, `DELETE(t052)`, `DELETE(t053)` D-01/02/03 | Catch-all deletions must confirm zero tagged Clients/Positions; run a record-count query first. |
| `SPLIT(t030, […])` S-01 | Splitting creates new IDs requiring full re-tagging; confirm with business owners if the split adds value. |