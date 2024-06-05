export interface TLands {
  id: number;
  name: string;
  img: string[];
  isFav: boolean;
  address: string;
  renovation: TRenovation[];
  description?: string;
  financialSummary: TFinancialSummary[];
  faq: TFaq[];
}

export interface TRenovation {
  label: string;
  prograss: number;
}
export interface TFinancialSummary {
  label: string;
  minRate: number;
  maxRate: number;
  status: string;
}

export interface TFaq {
  title: string;
  description: string;
}
