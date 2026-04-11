#!/usr/bin/env python3
"""
Generates a large, deterministic messy company-industries taxonomy for the
advisor experiment. ~280 entries with the typical real-world hygiene problems.
"""
import json
from pathlib import Path

# ----- Canonical industry tree (clean) -----
# Format: (name, parent_name_or_None)
CANONICAL = [
    # Technology
    ("Technology", None),
    ("Software", "Technology"),
    ("SaaS", "Software"),
    ("Mobile Apps", "Software"),
    ("Web Development", "Software"),
    ("DevTools", "Software"),
    ("Open Source", "Software"),
    ("Data & Analytics", "Technology"),
    ("Big Data", "Data & Analytics"),
    ("Business Intelligence", "Data & Analytics"),
    ("Data Engineering", "Data & Analytics"),
    ("Artificial Intelligence", "Technology"),
    ("Machine Learning", "Artificial Intelligence"),
    ("Computer Vision", "Artificial Intelligence"),
    ("Natural Language Processing", "Artificial Intelligence"),
    ("Generative AI", "Artificial Intelligence"),
    ("Robotics", "Technology"),
    ("Cybersecurity", "Technology"),
    ("Cloud Infrastructure", "Technology"),
    ("Hardware", "Technology"),
    ("Semiconductors", "Hardware"),
    ("IoT", "Technology"),
    ("AR/VR", "Technology"),
    ("Blockchain", "Technology"),
    ("Crypto", "Blockchain"),
    ("Web3", "Blockchain"),
    ("Quantum Computing", "Technology"),
    # Tech verticals
    ("FinTech", "Technology"),
    ("AdTech", "Technology"),
    ("HealthTech", "Technology"),
    ("EdTech", "Technology"),
    ("PropTech", "Technology"),
    ("LegalTech", "Technology"),
    ("HRTech", "Technology"),
    ("InsurTech", "Technology"),
    ("CleanTech", "Technology"),
    ("AgriTech", "Technology"),
    ("FoodTech", "Technology"),
    ("TravelTech", "Technology"),
    ("SportsTech", "Technology"),
    # Finance
    ("Finance", None),
    ("Banking", "Finance"),
    ("Investment Banking", "Banking"),
    ("Retail Banking", "Banking"),
    ("Private Equity", "Finance"),
    ("Venture Capital", "Finance"),
    ("Asset Management", "Finance"),
    ("Hedge Funds", "Finance"),
    ("Insurance", "Finance"),
    ("Life Insurance", "Insurance"),
    ("Property Insurance", "Insurance"),
    ("Reinsurance", "Insurance"),
    ("Accounting", "Finance"),
    ("Auditing", "Finance"),
    ("Payments", "Finance"),
    ("Trading", "Finance"),
    # Healthcare & Life Sciences
    ("Healthcare", None),
    ("Hospitals", "Healthcare"),
    ("Clinics", "Healthcare"),
    ("Medical Devices", "Healthcare"),
    ("Diagnostics", "Healthcare"),
    ("Telemedicine", "Healthcare"),
    ("Mental Health", "Healthcare"),
    ("Dental", "Healthcare"),
    ("Life Sciences", None),
    ("Biotech", "Life Sciences"),
    ("Pharmaceuticals", "Life Sciences"),
    ("Genomics", "Life Sciences"),
    ("Clinical Research", "Life Sciences"),
    # Retail & Consumer
    ("Retail", None),
    ("E-commerce", "Retail"),
    ("Marketplace", "E-commerce"),
    ("Fashion", "Retail"),
    ("Luxury", "Retail"),
    ("Grocery", "Retail"),
    ("Consumer Goods", None),
    ("Food & Beverage", "Consumer Goods"),
    ("Beauty & Personal Care", "Consumer Goods"),
    ("Household Products", "Consumer Goods"),
    # Manufacturing & Industrial
    ("Manufacturing", None),
    ("Automotive", "Manufacturing"),
    ("Heavy Machinery", "Manufacturing"),
    ("Electronics Manufacturing", "Manufacturing"),
    ("Textiles", "Manufacturing"),
    # Energy
    ("Energy", None),
    ("Oil & Gas", "Energy"),
    ("Renewables", "Energy"),
    ("Solar", "Renewables"),
    ("Wind", "Renewables"),
    ("Nuclear", "Energy"),
    ("Utilities", "Energy"),
    # Real Estate & Construction
    ("Real Estate", None),
    ("Residential", "Real Estate"),
    ("Commercial", "Real Estate"),
    ("Construction", "Real Estate"),
    # Transportation & Logistics
    ("Transportation", None),
    ("Aviation", "Transportation"),
    ("Maritime", "Transportation"),
    ("Rail", "Transportation"),
    ("Logistics", None),
    ("Shipping", "Logistics"),
    ("Warehousing", "Logistics"),
    ("Supply Chain", "Logistics"),
    # Media
    ("Media & Entertainment", None),
    ("Streaming", "Media & Entertainment"),
    ("Film", "Media & Entertainment"),
    ("Music", "Media & Entertainment"),
    ("Publishing", "Media & Entertainment"),
    ("Gaming", "Media & Entertainment"),
    ("News", "Media & Entertainment"),
    # Telco
    ("Telecommunications", None),
    ("Mobile Carriers", "Telecommunications"),
    ("Satellite", "Telecommunications"),
    # Education
    ("Education", None),
    ("K-12", "Education"),
    ("Higher Education", "Education"),
    ("Online Learning", "Education"),
    # Consulting & Services
    ("Consulting", None),
    ("Management Consulting", "Consulting"),
    ("IT Consulting", "Consulting"),
    ("Strategy Consulting", "Consulting"),
    ("Legal", None),
    ("Law Firms", "Legal"),
    # Public sector
    ("Government", None),
    ("Non-Profit", None),
    ("NGO", "Non-Profit"),
    # Hospitality
    ("Hospitality", None),
    ("Hotels", "Hospitality"),
    ("Restaurants", "Hospitality"),
    ("Travel", None),
    ("Airlines", "Travel"),
    ("Tourism", "Travel"),
    # Aerospace & Defense
    ("Aerospace", None),
    ("Defense", None),
    # Agriculture
    ("Agriculture", None),
    ("Farming", "Agriculture"),
    # Mining & Chemicals
    ("Mining", None),
    ("Metals", "Mining"),
    ("Chemicals", None),
    # Marketing
    ("Advertising", None),
    ("Marketing", None),
    # Sports
    ("Sports", None),
    ("Esports", "Sports"),
]

# ----- Deterministic corruption rules -----
# For each canonical entry, we add variations based on fixed rules.

CASE_VARIATIONS = {
    "Technology": ["technology", "TECHNOLOGY", "Tech"],
    "Software": ["software", "Software "],  # trailing whitespace
    "SaaS": ["Software as a Service", "saas"],
    "FinTech": ["Fintech", "fintech", "FINTECH", "Financial Technology"],
    "HealthTech": ["Healthtech", "Health Tech"],
    "EdTech": ["Edtech", "Ed Tech", "Education Technology"],
    "PropTech": ["Proptech", "Property Tech"],
    "InsurTech": ["Insurtech", "Insurance Tech"],
    "Finance": ["finance", "Finance ", "Financial Services"],
    "Banking": ["banking", "Banks"],
    "Investment Banking": ["IB", "I-Banking"],
    "Venture Capital": ["VC", "venture capital"],
    "Private Equity": ["PE", "private equity"],
    "Healthcare": ["Health Care", "health care", "HEALTHCARE"],
    "Pharmaceuticals": ["Pharma", "pharma", "Pharmaceutical"],
    "Biotech": ["Biotechnology", "biotech", "Bio-Tech"],
    "E-commerce": ["Ecommerce", "eCommerce", "E commerce", "E-Commerce"],
    "Consumer Goods": ["FMCG", "CPG", "consumer goods"],
    "Food & Beverage": ["F&B", "Food and Beverage"],
    "Manufacturing": ["manufacturing", "Manufacturing "],  # trailing ws
    "Automotive": ["Auto", "Car Manufacturing"],
    "Oil & Gas": ["Oil and Gas", "O&G"],
    "Renewables": ["Renewable Energy", "renewables", "Clean Energy"],
    "Telecommunications": ["Telecomunications", "Telecom", "Telco", "telecommunications"],  # typo
    "Media & Entertainment": ["Media", "Entertainment", "Media and Entertainment"],
    "Gaming": ["Video Games", "Videogames", "videojuegos"],  # Spanish
    "Transportation": ["transport", "Transport"],
    "Logistics": ["logistics", "Logistica"],  # Spanish
    "Supply Chain": ["SCM", "supply chain"],
    "Real Estate": ["real estate", "RE"],
    "Hospitality": ["hospitality", "Hoteleria"],  # Spanish
    "Hotels": ["hotels"],
    "Aerospace": ["Aeronautica", "aerospace"],  # Spanish
    "Consulting": ["consulting", "Consultoria"],  # Spanish
    "IT Consulting": ["Tech Consulting", "Technology Consulting"],
    "Education": ["education", "Educacion"],  # Spanish
    "Insurance": ["insurance", "Seguros"],  # Spanish
    "Advertising": ["advertising", "Ads", "Ads/Marketing"],
    "Marketing": ["marketing", "Marketing & Advertising"],
    "Retail": ["retail"],
    "Agriculture": ["agriculture", "Agricultura"],  # Spanish
}

# Canonical entries whose parent should be INTENTIONALLY WRONG in the messy version
WRONG_PARENT = {
    "FinTech": "Finance",  # dual-nature: we put it under Finance to test reparent decisions
    "AdTech": "Technology",  # keep under Technology (ambiguous)
    "PropTech": "Technology",
    "HealthTech": "Technology",
    "EdTech": "Technology",
    "CleanTech": "Technology",
    "Biotech": "Healthcare",  # should be Life Sciences
    "E-commerce": "Manufacturing",  # CLEARLY WRONG — misclassification
    "Supply Chain": "Finance",  # CLEARLY WRONG — misclassification
    "Insurance": None,  # Orphan at root even though it should be under Finance
    "Pharmaceuticals": "Healthcare",  # should be Life Sciences
    "Construction": None,  # orphan, should be under Real Estate
    "Semiconductors": "Technology",  # should be under Hardware
    "Defense": "Aerospace",  # ambiguous — defense can be peer
}

# Catch-alls that should be deleted
CATCHALLS = [
    "Other",
    "Misc",
    "General",
    "Varios",  # Spanish
    "Otros",   # Spanish
    "N/A",
    "Unknown",
    "To Be Categorized",
    "Uncategorized",
]

# Orphan entries: references a parent_id that doesn't exist
ORPHAN_PARENTS = {
    "Quantum Computing": "t_ghost_01",
    "Genomics": "t_ghost_02",
    "Warehousing": "t_ghost_03",
    "Podcasting": "t_ghost_04",  # also: Podcasting isn't in our canonical, will add as bonus
}


def build_taxonomy():
    entries = []
    name_to_id = {}
    next_id = 1

    def new_id():
        nonlocal next_id
        i = f"t{next_id:04d}"
        next_id += 1
        return i

    # Phase 1: add canonical entries (with possible wrong parent)
    for name, canonical_parent in CANONICAL:
        entry_id = new_id()
        # Apply wrong parent rule if set
        if name in WRONG_PARENT:
            parent_name = WRONG_PARENT[name]
        else:
            parent_name = canonical_parent
        entries.append({
            "id": entry_id,
            "name": name,
            "parent_name": parent_name,  # placeholder, resolved later
        })
        name_to_id[name] = entry_id

    # Phase 2: add variations (duplicates, case, typos, translations)
    for canonical_name, variants in CASE_VARIATIONS.items():
        canonical_id = name_to_id.get(canonical_name)
        if not canonical_id:
            continue
        for variant_name in variants:
            entry_id = new_id()
            # Variants float as orphans (parent_name = None) or duplicate the parent — mix both
            # Half orphan, half with same parent as canonical
            canonical_parent = next((p for n, p in CANONICAL if n == canonical_name), None)
            parent_name = canonical_parent if (next_id % 2 == 0) else None
            entries.append({
                "id": entry_id,
                "name": variant_name,
                "parent_name": parent_name,
            })

    # Phase 3: add catch-alls (no parent)
    for catchall in CATCHALLS:
        entry_id = new_id()
        entries.append({"id": entry_id, "name": catchall, "parent_name": None})

    # Phase 4: add orphan references (parent_id points to non-existent entry)
    for orphan_name, ghost_parent in ORPHAN_PARENTS.items():
        entry_id = new_id()
        entries.append({
            "id": entry_id,
            "name": orphan_name,
            "parent_name": None,
            "_override_parent_id": ghost_parent,  # bypass resolution
        })

    # Resolve parent_name → parent_id
    final = []
    for e in entries:
        override = e.pop("_override_parent_id", None)
        parent_name = e.pop("parent_name")
        if override:
            parent_id = override
        elif parent_name is None:
            parent_id = None
        else:
            parent_id = name_to_id.get(parent_name)  # may be None if parent not in canonical
        final.append({
            "id": e["id"],
            "name": e["name"],
            "parent_id": parent_id,
        })

    return {
        "taxonomy_type": "company_industries",
        "description": (
            "Nova ATS company-industries taxonomy (legacy import, never cleaned). "
            "Known hygiene issues: duplicates (exact/case/whitespace/translation/synonym), "
            "typos, misclassifications, orphan parent references, catch-alls, "
            "granularity inconsistencies."
        ),
        "entries": final,
    }


if __name__ == "__main__":
    tax = build_taxonomy()
    out = Path(__file__).parent / "taxonomy_large.json"
    out.write_text(json.dumps(tax, indent=2, ensure_ascii=False))
    print(f"Wrote {len(tax['entries'])} entries to {out}")
