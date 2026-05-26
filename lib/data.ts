// ─── MISSED Categories ────────────────────────────────────────────────────────

export const MISSED_CATEGORIES = [
  {
    letter: 'M',
    title: 'Microbiome & Mast Cell',
    body: 'Disrupted urobiome and mast cell hyperactivation contribute to urothelial inflammation, pelvic hypersensitivity, and recurrent symptoms without detectable infection.',
    conditions: ['Mast Cell Cystitis', 'Urobiome Dysbiosis', 'Eosinophilic Cystitis'],
  },
  {
    letter: 'I',
    title: 'Interstitial Cystitis / BPS',
    body: 'The hallmark condition — chronic bladder pain with urgency and frequency, negative urine cultures, and characteristic cystoscopic findings including Hunner lesions.',
    conditions: ['IC/BPS (Hunner type)', 'IC/BPS (Non-Hunner)', 'Bladder Pain Syndrome'],
  },
  {
    letter: 'S',
    title: 'Stress & Somatic',
    body: 'Psychoneuroimmune pathways link central sensitization, anxiety, and PTSD to bladder hypersensitivity. Often dismissed as psychosomatic, these are real physiological conditions.',
    conditions: ['Central Sensitization', 'Somatic Symptom Disorder', 'Pelvic Floor Dysfunction'],
  },
  {
    letter: 'S',
    title: 'Structural Abnormalities',
    body: 'Anatomical factors — including pelvic organ prolapse, urethral diverticulum, and mesh complications — can masquerade as or co-exist with functional bladder disorders.',
    conditions: ['Pelvic Organ Prolapse', 'Urethral Diverticulum', 'Mesh Complication'],
  },
  {
    letter: 'E',
    title: 'Endometriosis & Endocrine',
    body: 'Bladder endometriosis affects the detrusor in up to 4% of endometriosis patients. Hormonal fluctuations modulate IC/BPS symptom severity throughout the menstrual cycle.',
    conditions: ['Bladder Endometriosis', 'Hormonal IC/BPS', 'Adenomyosis-related pain'],
  },
  {
    letter: 'D',
    title: 'Dysbiosis & Deficiency',
    body: 'Estrogen deficiency, nutritional gaps (D3, Mg, B12), and gut-bladder axis dysbiosis compound urothelial vulnerability, particularly in peri- and post-menopausal women.',
    conditions: ['Estrogen-deficiency Cystitis', 'Atrophic Vaginitis', 'Nutritional Bladder Syndrome'],
  },
] as const

// ─── Conditions ───────────────────────────────────────────────────────────────

export const CONDITIONS = [
  {
    slug: 'interstitial-cystitis',
    name: 'Interstitial Cystitis / Bladder Pain Syndrome (IC/BPS)',
    category: 'I — Interstitial',
    description: 'The primary chronic condition characterized by bladder pain, urgency, and frequency without identifiable infection or other obvious pathology.',
    overview: 'Interstitial Cystitis / Bladder Pain Syndrome (IC/BPS) is a chronic condition characterised by bladder pain or pressure with urgency and frequency, in the absence of identifiable infection or other pathology. The average patient sees five physicians over seven years before receiving a correct diagnosis.',
    symptoms: [
      'Suprapubic pain worsening with bladder filling',
      'Urinary urgency and frequency (>8/day)',
      'Nocturia — waking multiple times per night',
      'Pelvic pressure and heaviness',
      'Dyspareunia (pain during intercourse)',
    ],
    pathophysiology: 'Urothelial GAG layer deficiency allows urinary irritants to penetrate the bladder wall, triggering mast cell activation, neurogenic inflammation, and eventually central sensitization.',
    treatment: 'Conservative lifestyle measures, oral Pentosan Polysulfate Sodium (Elmiron®), intravesical instillations, and escalation to neuromodulation or surgery in refractory cases.',
  },
  {
    slug: 'bladder-pain-syndrome',
    name: 'Bladder Pain Syndrome',
    category: 'I — Interstitial',
    description: 'A broader diagnostic category encompassing chronic bladder pain with associated urinary symptoms, where IC/BPS criteria may not yet be fully met.',
    overview: 'Bladder Pain Syndrome (BPS) is defined by the European Association of Urology as chronic pelvic pain, pressure, or discomfort perceived to be related to the urinary bladder, accompanied by at least one other urinary symptom such as persistent urgency or frequency, for more than 6 weeks. It overlaps significantly with IC/BPS and is often used interchangeably in clinical practice.',
    symptoms: [
      'Chronic pelvic pain perceived as bladder-related',
      'Persistent urgency or increased frequency',
      'Symptoms lasting more than 6 weeks',
      'No identifiable infection or other pathology',
      'Variable severity, often cyclical with flares',
    ],
    pathophysiology: 'Shared pathophysiology with IC/BPS — GAG layer disruption, urothelial permeability, and neurogenic inflammation. Central sensitization plays a significant role in perpetuating symptoms beyond the initial trigger.',
    treatment: 'Follows the IC/BPS treatment ladder: lifestyle modification, oral PPS (Elmiron®), intravesical therapy, and multidisciplinary pain management for refractory cases.',
  },
  {
    slug: 'mast-cell-cystitis',
    name: 'Mast Cell Cystitis',
    category: 'M — Microbiome / Mast Cell',
    description: 'Bladder inflammation driven by elevated mast cell density in the detrusor, causing histamine-mediated urgency, burning, and frequency.',
    overview: 'Mast Cell Cystitis is characterized by elevated mast cell density (>28 cells/mm²) in the detrusor muscle, with histamine-driven bladder inflammation and hypersensitivity. It may exist independently or as a component of IC/BPS, and often responds to antihistamine-based therapy.',
    symptoms: [
      'Severe urgency with small-volume voids',
      'Pelvic burning pain',
      'Frequency triggered by foods, stress, or hormonal changes',
      'Urticaria or skin reactions in systemic mast cell disease',
      'Recurrent flares with identifiable triggers',
    ],
    pathophysiology: 'Activated mast cells release histamine, tryptase, and prostaglandins, increasing urothelial permeability and sensitizing bladder afferents. Trigger-driven degranulation maintains a chronic inflammatory state.',
    treatment: 'Antihistamines (H1 + H2 blockers), hydroxyzine, cromolyn sodium, dietary mast cell trigger avoidance, and PPS for GAG layer repair.',
  },
  {
    slug: 'radiation-cystitis',
    name: 'Radiation Cystitis',
    category: 'M — Missed / Structural',
    description: 'Late-onset bladder damage following pelvic radiotherapy for cervical, endometrial, or rectal cancers, causing chronic inflammation and bleeding.',
    overview: 'Radiation Cystitis develops as a late complication of pelvic radiotherapy, typically months to years after treatment. Radiation damages the urothelium and submucosal vasculature, leading to mucosal atrophy, fibrosis, telangiectasia formation, and chronic haemorrhage. It is frequently underdiagnosed in gynaecological oncology follow-up.',
    symptoms: [
      'Haematuria — microscopic or gross, often persistent',
      'Urinary urgency and frequency',
      'Suprapubic pain and discomfort',
      'Reduced bladder capacity',
      'Recurrent UTI-like symptoms without confirmed infection',
    ],
    pathophysiology: 'Radiation induces obliterative endarteritis of submucosal vessels, causing progressive ischaemia, mucosal atrophy, and fibrosis. Telangiectatic vessels are fragile and bleed easily, perpetuating the haematuria cycle.',
    treatment: 'Hyperbaric oxygen therapy, intravesical instillations (PPS, hyaluronic acid), haemostatic agents, and in severe cases, endoscopic fulguration of bleeding vessels. Elmiron (PPS) supports GAG layer repair.',
  },
  {
    slug: 'hemorrhagic-cystitis',
    name: 'Hemorrhagic Cystitis',
    category: 'M — Missed',
    description: 'Bladder bleeding arising from radiation, chemotherapy, or immune triggers, causing significant morbidity and often misdiagnosed as recurrent UTI.',
    overview: 'Hemorrhagic Cystitis presents as gross haematuria with bladder inflammation from non-infectious causes — most commonly cyclophosphamide chemotherapy, BCG immunotherapy, or pelvic radiation. Acrolein, a toxic metabolite of cyclophosphamide, directly damages the urothelium. Severity ranges from microscopic haematuria to life-threatening clot retention.',
    symptoms: [
      'Gross haematuria — frank blood in urine',
      'Urinary urgency and frequency',
      'Bladder clot formation and retention (severe cases)',
      'Suprapubic pain',
      'Anaemia from chronic blood loss',
    ],
    pathophysiology: 'Acrolein from cyclophosphamide or radiation-induced ischaemia damages the GAG layer and urothelium directly, causing mucosal ulceration and haemorrhage. The defective barrier allows secondary inflammation to compound the injury.',
    treatment: 'Hydration, bladder irrigation, MESNA (for cyclophosphamide prevention), intravesical PPS or hyaluronic acid, and escalation to aluminium sulphate instillation, embolisation, or cystectomy in severe refractory cases.',
  },
  {
    slug: 'neurogenic-bladder',
    name: 'Neurogenic Bladder',
    category: 'D — Dysbiosis / Structural',
    description: 'Bladder dysfunction from neurological causes where altered innervation leads to storage and voiding dysfunction, often masking co-existing urothelial conditions.',
    overview: 'Neurogenic Bladder results from neurological damage to the pathways controlling bladder function — from spinal cord injury, multiple sclerosis, Parkinson\'s disease, or pelvic nerve damage. The bladder may be overactive (spastic) or underactive (flaccid). Co-existing GAG layer dysfunction is frequently overlooked, worsening symptoms beyond what neurological damage alone explains.',
    symptoms: [
      'Urgency incontinence or overflow incontinence',
      'Incomplete bladder emptying',
      'Urinary retention or frequency',
      'Loss of coordinated voiding',
      'Recurrent UTIs from incomplete emptying and catheter use',
    ],
    pathophysiology: 'Disrupted sacral and supraspinal neural circuits alter detrusor compliance and external sphincter coordination. Chronic catheter use and incomplete emptying compromise the GAG layer, creating secondary urothelial vulnerability.',
    treatment: 'Antimuscarinics or beta-3 agonists for overactivity, clean intermittent catheterisation, botulinum toxin injections, and intravesical PPS for concurrent GAG layer support.',
  },
  {
    slug: 'bladder-sensitivity-syndrome',
    name: 'Bladder Sensitivity Syndrome',
    category: 'M — Missed / Early Stage',
    description: 'Early-stage bladder hypersensitivity before formal IC/BPS diagnosis — the greatest prevention opportunity.',
    overview: 'Bladder Sensitivity Syndrome describes early-stage urothelial hypersensitivity presenting as persistent urgency, frequency, and pelvic discomfort without meeting full IC/BPS diagnostic criteria. Cultures are negative, cystoscopy is normal, but the patient\'s quality of life is significantly impaired. This represents the critical intervention window to prevent progression to chronic IC/BPS.',
    symptoms: [
      'Persistent urgency without incontinence',
      'Frequency >8 times/day with small volumes',
      'Suprapubic pressure or mild pelvic discomfort',
      'Symptoms recurring despite negative urine cultures',
      'Flares with certain foods, stress, or hormonal changes',
    ],
    pathophysiology: 'Early GAG layer thinning allows subclinical urinary irritant penetration, sensitizing afferent C-fibers without yet causing the structural changes seen in established IC/BPS. Prompt intervention can restore urothelial integrity before irreversible neurogenic changes occur.',
    treatment: 'Dietary trigger elimination, bladder retraining, oral PPS (Elmiron®) for GAG layer restoration, and close monitoring to prevent progression. Early treatment offers the best long-term outcomes.',
  },
] as const

// ─── Pathophysiology ──────────────────────────────────────────────────────────

export const PATHOPHYSIOLOGY_STEPS = [
  {
    n: '01',
    step: 'Step 01 — Initiation',
    title: 'Urothelial Barrier Disruption',
    body: 'Loss of GAG layer integrity allows urinary solutes (potassium, acid) to penetrate the urothelium, triggering subepithelial inflammation.',
  },
  {
    n: '02',
    step: 'Step 02 — Penetration',
    title: 'Mast Cell Activation',
    body: 'Tryptase and histamine released by activated mast cells increase vascular permeability and sensitize afferent C-fibers in the lamina propria.',
  },
  {
    n: '03',
    step: 'Step 03 — Cascade',
    title: 'Neurogenic Inflammation',
    body: 'Substance P and CGRP release from sensitized nerves perpetuate the inflammatory cascade through a neurogenic-immune feedback loop.',
  },
  {
    n: '04',
    step: 'Step 04 — Muscle',
    title: 'Detrusor Instability',
    body: 'Inflammatory mediators and urothelial ATP release activate purinergic receptors on smooth muscle, contributing to detrusor overactivity.',
  },
  {
    n: '05',
    step: 'Step 05 — Brain',
    title: 'Central Sensitization',
    body: 'Chronic peripheral nociception leads to spinal cord wind-up and cortical reorganization, amplifying pain signals and broadening the pain field.',
  },
  {
    n: '06',
    step: 'Step 06 — Outcome',
    title: 'Symptom Complex',
    body: 'The culminating presentation: suprapubic pain, urinary urgency/frequency, dyspareunia, and pelvic floor hypertonicity — often misdiagnosed for years.',
  },
] as const

// ─── Symptoms ─────────────────────────────────────────────────────────────────

export const SYMPTOMS = [
  {
    name: 'Pelvic Pain',
    description: 'Suprapubic or perineal pain worsening with bladder filling and relieved by voiding. The cardinal symptom of IC/BPS.',
    severity: 'HIGH' as const,
    severityPercent: 100,
    severityColor: 'bg-sage-deep',
    severityBadge: 'bg-sage-deep/10 border-sage-deep/30 text-sage-deep',
  },
  {
    name: 'Urinary Urgency',
    description: 'Sudden, compelling desire to void that is difficult to defer. Different from OAB urgency — often driven by pain anticipation.',
    severity: 'HIGH' as const,
    severityPercent: 100,
    severityColor: 'bg-sage-deep',
    severityBadge: 'bg-sage-deep/10 border-sage-deep/30 text-sage-deep',
  },
  {
    name: 'Urinary Frequency',
    description: 'Voiding >8 times/day and often multiple times nightly. Average IC patient voids 16–60 times daily in severe cases.',
    severity: 'HIGH' as const,
    severityPercent: 100,
    severityColor: 'bg-sage-deep',
    severityBadge: 'bg-sage-deep/10 border-sage-deep/30 text-sage-deep',
  },
  {
    name: 'Dyspareunia',
    description: 'Pelvic pain during or after sexual intercourse due to inflamed bladder wall proximity to vaginal structures.',
    severity: 'MODERATE' as const,
    severityPercent: 55,
    severityColor: 'bg-sage',
    severityBadge: 'bg-sage/10 border-sage/30 text-sage-deep',
  },
  {
    name: 'Nocturia',
    description: 'Waking ≥2 times per night to void. Disrupts sleep quality and is a major contributor to quality-of-life impairment.',
    severity: 'MODERATE' as const,
    severityPercent: 55,
    severityColor: 'bg-sage',
    severityBadge: 'bg-sage/10 border-sage/30 text-sage-deep',
  },
  {
    name: 'Pelvic Floor Tension',
    description: 'Hypertonic pelvic floor muscles secondary to chronic pain guarding. Often mistaken for vaginismus or pudendal neuralgia.',
    severity: 'MODERATE' as const,
    severityPercent: 55,
    severityColor: 'bg-sage',
    severityBadge: 'bg-sage/10 border-sage/30 text-sage-deep',
  },
  {
    name: 'Hematuria',
    description: 'Microscopic or gross hematuria present in ~10% of cases. Requires cystoscopy to exclude malignancy before IC diagnosis.',
    severity: 'VARIABLE' as const,
    severityPercent: 40,
    severityColor: 'bg-sage-light',
    severityBadge: 'bg-sage-light/20 border-sage-light/40 text-muted',
  },
  {
    name: 'Vulvodynia',
    description: 'Chronic vulvar pain without identifiable cause, frequently co-existing with IC/BPS due to shared pelvic sensitization.',
    severity: 'VARIABLE' as const,
    severityPercent: 40,
    severityColor: 'bg-sage-light',
    severityBadge: 'bg-sage-light/20 border-sage-light/40 text-muted',
  },
] as const

// ─── Diagnosis ────────────────────────────────────────────────────────────────

export const DIAGNOSIS_STEPS = [
  {
    n: '01',
    title: 'Symptom Assessment',
    body: 'Apply validated tools: ICSI/ICPI (IC Symptom/Problem Index), PUF score, and O\'Leary-Sant questionnaire. Minimum 6 weeks of symptoms required for diagnosis.',
    tools: ['ICSI/ICPI', 'PUF Score', "O'Leary-Sant"],
  },
  {
    n: '02',
    title: 'Urinalysis & Culture',
    body: 'Exclude bacterial UTI via midstream urine culture. IC/BPS diagnosis requires absence of infection. Microscopic hematuria warrants upper tract imaging and cystoscopy.',
    tools: ['MSU Culture', 'Urinalysis', 'Urine Cytology'],
  },
  {
    n: '03',
    title: 'Cystoscopy ± Hydrodistension',
    body: 'Identify Hunner lesions (present in ~10% of IC/BPS) or glomerulations post-hydrodistension. Biopsy if lesions seen. Rules out carcinoma in situ.',
    tools: ['Cystoscopy', 'Hydrodistension', 'Biopsy if indicated'],
  },
  {
    n: '04',
    title: 'Potassium Sensitivity Test',
    body: 'Intravesical KCl test demonstrates urothelial permeability. A positive result supports IC/BPS diagnosis and predicts response to GAG-layer therapies.',
    tools: ['Intravesical KCl', 'Pain/Urgency Score'],
  },
  {
    n: '05',
    title: 'Differential Exclusion',
    body: 'Exclude endometriosis, pelvic floor dysfunction, pudendal neuralgia, bladder malignancy, radiation cystitis. Multidisciplinary assessment recommended.',
    tools: ['Pelvic USS', 'Urodynamics', 'Laparoscopy if needed'],
  },
  {
    n: '06',
    title: 'Diagnosis & Classification',
    body: 'Apply ESSIC or AUA IC/BPS diagnostic criteria. Classify as Hunner-type vs. non-Hunner-type. Begin treatment ladder accordingly.',
    tools: ['ESSIC Criteria', 'AUA Guidelines', 'MISSED Framework'],
  },
] as const

export const ESSIC_CRITERIA = [
  'Chronic pelvic pain, pressure, or discomfort perceived to be related to the urinary bladder',
  'At least one other urinary symptom: persistent urgency or increased urinary frequency',
  'Duration of symptoms for more than 6 weeks',
  'Absence of confusable diseases (infection, malignancy, urolithiasis, urethral diverticulum)',
  'NIDDK criteria: Glomerulations on cystoscopy OR Hunner\'s lesions AND pain with bladder filling or urgency',
] as const

export const RED_FLAGS = [
  'Haematuria (visible or non-visible) — exclude malignancy first',
  'Symptoms in women over 50 with smoking history — bladder cancer risk',
  'New symptoms post-pelvic radiotherapy — radiation cystitis or fistula',
  'Rapidly worsening symptoms — may indicate advanced pathology',
] as const

// ─── Treatment ────────────────────────────────────────────────────────────────

export const TREATMENT_LINES = [
  {
    id: 'first',
    label: '1st Line',
    title: 'Education, Lifestyle & Diet Modification',
    body: 'Patient education, bladder training, dietary elimination (acidic foods, caffeine, alcohol, artificial sweeteners), stress management, physiotherapy referral.',
    treatments: [
      'Bladder training / timed voiding',
      'IC diet elimination protocol',
      'Pelvic floor physiotherapy',
      'Stress & pain psychology referral',
    ],
    hasElmironLink: false,
    elmironLinkText: null,
    elmironLinkSubtext: null,
    elmironLinkHref: null,
  },
  {
    id: 'second',
    label: '2nd Line',
    title: 'Oral Pharmacotherapy',
    body: 'Pentosan polysulfate sodium (Elmiron®) is the only FDA-approved oral drug specifically for IC/BPS. Tricyclics and antihistamines may be used as adjuncts for pain and mast cell modulation.',
    treatments: [
      'Pentosan Polysulfate Sodium (Elmiron® 100mg TDS)',
      'Amitriptyline 10–75 mg/night',
      'Hydroxyzine 25–50 mg/night',
      'Quercetin / GAG supplements',
    ],
    hasElmironLink: true,
    elmironLinkText: 'Elmiron® (Pentosan Polysulfate Sodium)',
    elmironLinkSubtext: 'FDA-approved · 100mg capsules · 3× daily',
    elmironLinkHref: 'https://elmiron.in',
  },
  {
    id: 'third',
    label: '3rd Line',
    title: 'Intravesical Instillations',
    body: 'Direct bladder instillations bypass oral absorption limitations. DMSO cocktails, heparin-lignocaine combinations, hyaluronic acid, chondroitin sulphate, or PPS-based protocols may provide targeted relief.',
    treatments: [
      'PPS Intravesical (Elmiron® 50mg/mL)',
      'DMSO + Heparin + Lignocaine cocktail',
      'Hyaluronic acid (Cystistat®)',
      'Chondroitin sulphate (Uracyst®)',
    ],
    hasElmironLink: true,
    elmironLinkText: 'Elmiron® Intravesical (PPS Sterile Solution)',
    elmironLinkSubtext: '10mg/ml · 30mL vial · World-first CDSCO approved',
    elmironLinkHref: 'https://elmiron.in/formulations',
  },
  {
    id: 'fourth',
    label: '4th Line',
    title: 'Interventional Procedures',
    body: 'For refractory IC/BPS. Botulinum toxin A injections, sacral neuromodulation (InterStim®), and hydrodistension under anaesthesia offer significant relief in carefully selected patients.',
    treatments: [
      'Botulinum toxin A (100–200 U) cystoscopic injection',
      'Sacral neuromodulation (SNM)',
      'Hydrodistension under GA',
      'Pudendal nerve blocks',
    ],
    hasElmironLink: false,
    elmironLinkText: null,
    elmironLinkSubtext: null,
    elmironLinkHref: null,
  },
  {
    id: 'fifth',
    label: '5th Line',
    title: 'Surgical Options',
    body: 'Reserved for severe, refractory cases only. Fulguration of Hunner lesions (if present) may provide dramatic relief. Cyclosporin A for immunomodulation. Augmentation cystoplasty or urinary diversion as last resort.',
    treatments: [
      'Fulguration / laser ablation of Hunner lesions',
      'Cyclosporin A 1.5–3 mg/kg/day',
      'Augmentation cystoplasty',
      'Urinary diversion (rare)',
    ],
    hasElmironLink: false,
    elmironLinkText: null,
    elmironLinkSubtext: null,
    elmironLinkHref: null,
  },
] as const

// ─── Overview Stats ───────────────────────────────────────────────────────────

export const OVERVIEW_STATS = [
  { number: '70%', label: 'Cases occur in women' },
  { number: '5–7', label: 'Avg. years to diagnosis' },
  { number: '6', label: 'MISSED categories' },
  { number: '90%', label: 'IC/BPS patients are women' },
] as const

// ─── Types ────────────────────────────────────────────────────────────────────

export type MissedCategory = typeof MISSED_CATEGORIES[number]
export type Condition = typeof CONDITIONS[number]
export type PathophysiologyStep = typeof PATHOPHYSIOLOGY_STEPS[number]
export type Symptom = typeof SYMPTOMS[number]
export type DiagnosisStep = typeof DIAGNOSIS_STEPS[number]
export type TreatmentLine = typeof TREATMENT_LINES[number]
export type OverviewStat = typeof OVERVIEW_STATS[number]
