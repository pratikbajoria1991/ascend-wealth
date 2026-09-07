# Ascend Wealth

> Open-source, privacy-first financial planning workspace for India.

Ascend Wealth is a modern React and TypeScript application that helps individuals understand goals, cash flow, risk, and long-term wealth decisions through transparent calculators and explainable planning workflows.

## Why this project exists

Personal-finance software is often opaque, sales-led, or locked behind proprietary platforms. Ascend Wealth provides an auditable foundation that developers, financial professionals, and educators can extend without turning financial guidance into a black box.

## Core capabilities

- Goal-based financial planning and progress tracking
- Interactive investment and wealth projections
- Risk-profile and asset-allocation experiences
- Responsive, accessible UI built with reusable components
- India-focused financial context and terminology
- Local-first architecture suitable for privacy-conscious deployments

## Technology

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- TanStack Query

## Quick start

```bash
git clone https://github.com/pratikbajoria1991/ascend-wealth.git
cd ascend-wealth
npm ci
npm run dev
```

Open `http://localhost:8080` (or the URL shown by Vite).

## Quality checks

```bash
npm run lint
npm run build
```

## Product principles

1. **Explainability first** — calculations and assumptions should be visible.
2. **Privacy by design** — minimise collection of personal financial data.
3. **Education over persuasion** — help users make informed decisions.
4. **Accessible by default** — usable across devices and assistive technologies.
5. **India-aware, globally reusable** — local relevance without hard-coded lock-in.

## Roadmap

- [ ] Document calculation methodologies and assumptions
- [ ] Add automated unit and accessibility tests
- [ ] Add scenario comparison and exportable plans
- [ ] Add localisation and inflation/tax configuration
- [ ] Add optional self-hosted persistence
- [ ] Publish a public demo and contribution guide

## Contributing

Issues and pull requests are welcome. Please open an issue before a large change so implementation and product assumptions can be aligned. Contributions should include tests where practical and avoid presenting educational projections as personalised regulated advice.

## Responsible-use notice

Ascend Wealth is educational software, not investment, tax, or legal advice. Outputs are illustrative and depend on user-provided assumptions. Users should consult appropriately qualified professionals before acting on financial decisions.

## Security

Do not post personal financial information or credentials in issues. Report security concerns privately through GitHub's security advisory workflow.

## Licence

This project is intended to be released under the MIT Licence. See `LICENSE` once added.
